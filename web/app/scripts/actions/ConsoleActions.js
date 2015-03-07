var Dispatcher = require('../core/Dispatcher');
var ConsoleConstants = require('../constants/ConsoleConstants');


// Define actions object
var ConsoleActions = {

  addColor: function(adapter) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.ADD_COLOR,
      adapter: adapter
    });
  },

  clearMessages: function(adapter) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.CLEAR_MESSAGES,
      adapter: adapter
    });
  },

  addMessage: function(message) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.ADD_MESSAGE,
      message: message
    });
  },

  sendMessage: function(adapter, message, cb) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.SEND_MESSAGE,
      ws: adapter.ws,
      message: message,
      cb: cb
    });
  },

  addAdapter: function(adapter, e) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.ADAPTER_ADD,
      adapter: adapter,
      event: e
    });
  },

  removeAdapter: function(adapter) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.ADAPTER_REMOVE,
      adapter: adapter
    });
  },

  socketClosed: function(id) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.WS_CLOSED,
      id: id
    });
  },

  socketError: function(id, error) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.WS_ERROR,
      error: error,
      id: id
    });
  },

  openWebsocket: function(id) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.WS_OPEN,
      id: id
    });
  },

  closeWebsocket: function(id) {
    Dispatcher.handleViewAction({
      actionType: ConsoleConstants.WS_CLOSE,
      id: id
    });
  }

};

module.exports = ConsoleActions;
