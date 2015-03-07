var Dispatcher = require('../core/Dispatcher');
var AdapterConstants = require('../constants/AdapterConstants');

// Define actions object
var ServerActions = {

  loadedAdapters: function(adapters) {
    Dispatcher.handleServerAction({
      actionType: AdapterConstants.LIST_LOADED,
      adapters: adapters
    });
  }

};

module.exports = ServerActions;
