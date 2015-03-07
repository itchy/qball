var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ConsoleConstants = require('../constants/ConsoleConstants');
var WebSocket = require('../utils/WebSocketService').SocketService;
var ColorUtils = require('../utils/ColorGenService');
var AdapterStore = require('../stores/AdapterStore');
var ColorService = ColorUtils.RandomColorService();


// Define initial data points
var CHANGE_EVENT = 'change';
var _activeConsoles = [];
var _websocketUrl = window.JASPER.WS_PROTOCOL + window.JASPER.API_HOST + ':' + window.JASPER.API_PORT + '/adapterapi/connect?id=';

function _getAdapter(id) {
  return _.where(_activeConsoles, {'id': id})[0];
}

function _getAdapterIndex(id) {
  return _.findIndex(_activeConsoles, {'id': id});
}

function _inActiveList(adapter) {
  return _.where(_activeConsoles, {'id': adapter.id}).length > 0;
}


// Extend AdapterStore with EventEmitter to add eventing capabilities
var ConsoleStore = new Store({

  // Emit Change event
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getList: function() {
    return _activeConsoles;
  },

  removeBgColor: function(id) {
    AdapterStore.updateProperty(id, 'bgColor', null);
  },

  removeWebSocket: function(id) {
    AdapterStore.updateProperty(id, 'ws', null);
  },

  sendMessage: function(ws, message, cb) {
    if (ws
      && ws.isConnected) {
      ws.sendRequest(message, cb);
    }
  },

  addMessage: function(message) {
//    console.log('addMessage message:', message);
    var adapter = _getAdapter(message.id);

    if (adapter
        && adapter.hasOwnProperty('consoleMessages')) {
      adapter.consoleMessages.push(message.message);
    } else {
      console.log('Error. Unable to add message.');
    }
  },

  clearMessages: function(adapter) {
    if (adapter
      && adapter.consoleMessages) {
      adapter.consoleMessages.length = 0;
    }
  },

  assignColor: function(adapter) {
    if (adapter) {
//      adapter.bgColor = ColorService.get(true, 0.3, 0.99);
      adapter.bgColor = ColorService.get(true, 0.25, 0.75);
//      adapter.bgColor = ColorService.get(true);
    }

    return adapter;
  },

  addAdapter: function(adapter, event) {
    if (!_inActiveList(adapter)) {
      if (!adapter.consoleMessages) {
        adapter.consoleMessages = [];
      }
      adapter.adminMode = event.shiftKey && event.altKey;
      _activeConsoles.push(this.assignColor(adapter));
    }
  },

  removeAdapter: function(adapter) {
    var idx;

    if (_inActiveList(adapter)) {
      this.removeBgColor(adapter.id);

      if (adapter.ws) {
        this.closeWebsocket(adapter.id);
        this.removeWebSocket();
      }

      idx = _getAdapterIndex(adapter.id);
      idx > -1 && _activeConsoles.splice(idx, 1);
    }
  },

  openWebsocket: function(id) {
    var adapter = _getAdapter(id);
    if (adapter) {
      adapter.ws = new WebSocket(_websocketUrl, id);
    }
  },

  closeWebsocket: function(id) {
    var adapter = _getAdapter(id);

    if (adapter
      && adapter.ws) {
      adapter.ws.close();
      delete adapter.ws;
    }
  },

  socketClosed: function(id) {
    var adapter = _getAdapter(id);

    if (adapter
      && adapter.ws) {
      delete adapter.ws;
    }
  },

  socketError: function(id/*, error*/) {
    var adapter = _getAdapter(id);

    if (adapter
      && adapter.ws) {
      delete adapter.ws;
//      adapter.ws = null;
    }
  }

});

// Register callback with Dispatcher
ConsoleStore.dispatcherToken = Dispatcher.register(function(payload) {
  var action = payload.action;

//  console.log('ConsoleStore dispatcher', action);

  switch(action.actionType) {

    case ConsoleConstants.CLEAR_MESSAGES:
      ConsoleStore.clearMessages(action.adapter);
      break;

    case ConsoleConstants.ADD_COLOR:
      ConsoleStore.addColor(action.adapter);
      break;

    case ConsoleConstants.SEND_MESSAGE:
      ConsoleStore.sendMessage(action.ws, action.message, action.cb);
      break;

    case ConsoleConstants.ADD_MESSAGE:
      ConsoleStore.addMessage(action.message);
      break;

    case ConsoleConstants.ADAPTER_ADD:
      ConsoleStore.addAdapter(action.adapter, action.event);
      break;

    case ConsoleConstants.ADAPTER_REMOVE:
      ConsoleStore.removeAdapter(action.adapter);
      break;

    case ConsoleConstants.WS_OPEN:
      ConsoleStore.openWebsocket(action.id);
      break;

    case ConsoleConstants.WS_CLOSE:
      ConsoleStore.closeWebsocket(action.id);
      break;

    case ConsoleConstants.WS_CLOSED:
      ConsoleStore.socketClosed(action.id);
      break;

    case ConsoleConstants.WS_ERROR:
      ConsoleStore.socketError(action.id);
      break;
  }

  ConsoleStore.emitChange();
  return true;
});

module.exports = ConsoleStore;
