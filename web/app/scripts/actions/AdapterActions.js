var Dispatcher = require('../core/Dispatcher');
var AdapterConstants = require('../constants/AdapterConstants');

// Define actions object
var AdapterActions = {

  getList: function() {
    Dispatcher.handleViewAction({
      actionType: AdapterConstants.LIST_GET
    });
  },

  loadAdapters: function() {
    Dispatcher.handleViewAction({
      actionType: AdapterConstants.HIT_API
    });
  },

  updateProperty: function(id, prop, value) {
    Dispatcher.handleViewAction({
      actionType: AdapterConstants.UPDATE_PROP,
      id: id,
      prop: prop,
      value: value
    });
  }

};

module.exports = AdapterActions;
