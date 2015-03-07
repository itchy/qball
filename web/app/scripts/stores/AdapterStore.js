'use strict';
var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var AdapterConstants = require('../constants/AdapterConstants');
var assign = require('react/lib/Object.assign');

var state = {
  adapters: [],
  loaded: false
};

//function _getAdapter(id) {
//  return _.where(state.adapters, {'id': id})[0];
//}

function _getAdapterIndex(id) {
  return _.findIndex(state.adapters, {'id': id});
}

//function _inActiveList(adapter) {
//  return _.where(state.adapters, {'id': adapter.id}).length > 0;
//}

function _noConnectionsBase(adapter, location) {
  return _.extend({}, adapter, {
    id: location,
    location: location,
    no_connections: true
  });
}

function _hydrateAdapter(adapter, idx) {
  if (state.adapters[idx].consoleMessages) {
    adapter.consoleMessages = state.adapters[idx].consoleMessages;
  }
  if (state.adapters[idx].bgColor) {
    adapter.bgColor = state.adapters[idx].bgColor;
  }
  return adapter;
}

function _processApiData(data) {
  var listOut = [];
  var _isDup = false;

  function mapConnections(adapter) {
    var idx = _.findIndex(state.adapters, {'id': adapter.id});

    if (_isDup) {
      adapter.is_duplicate = true;
    }

    if (idx >= 0) {
      listOut.push(_hydrateAdapter(adapter ,idx));
    } else {
      listOut.push(adapter);
    }
  }

  if (data) {

    for (var key in data) {

      if (data.hasOwnProperty(key)
          && !_.isFunction(data[key])) { //to be safe
        var locationObj = data[key];

        if (locationObj
            && locationObj.connections
            && locationObj.connections.length) { // Has connections

          _isDup = locationObj.connections.length > 1;

          locationObj.connections.map(mapConnections);

        } else { // No connections
          listOut.push(_noConnectionsBase(locationObj, key));
        }

      }
    } // for in

    return listOut;
  } // if (data)

} // _processApiData


// Extend AdapterStore with EventEmitter to add eventing capabilities
var AdapterStore = new Store({

  loadAdapters: function() {
    this.restData().get('adapters');
  },

  // Return Product data
  getList: function() {
    return state.adapters;
  },

  getState: function() {
    return state;
  },

  updateProperty: function(id, prop, value) {
    var idx = _getAdapterIndex(id);

    if (idx > -1) {
      if (state.adapters[idx][prop]) {
        state.adapters[idx][prop] = value;
      }
    }
  }

});

// Register callback with Dispatcher
AdapterStore.dispatcherToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  var setState = function(newState) {
    assign(state, newState);
  };

  console.log('AdapterStore dispatcher:', payload);

  switch(action.actionType) {

    case AdapterConstants.LIST_LOADED:
      setState({
        adapters: _processApiData(action.adapters[0]),
        loaded: true
      });
      break;

    case AdapterConstants.LIST_GET:
      AdapterStore.getList();
      break;

    case AdapterConstants.HIT_API:
      AdapterStore.loadAdapters();
      break;

    case AdapterConstants.UPDATE_PROP:
      AdapterStore.updateProp(action.id, action.prop, action.value);
      break;

    default:

  }

  // If action was responded to, emit change event
  AdapterStore.emitChange();

  return true;
});

module.exports = AdapterStore;
