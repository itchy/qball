var Restful = require('restful.js');
var StringUtils = require('./StringUtils');
var ServerActions = require('../actions/ServerActions');
var DataApiConfig = require('../constants/DataApiConfig');

module.exports = {

  buildCustomMessage: function(id, message) {
    if (StringUtils.isJson(message)) {
      message = JSON.parse(message);
      message.id = id;

      if (!message.hasOwnProperty('params')) {
        message.params = [];
      }
      console.log('=== Custom Message:', message);

      return message;
    } else {
      throw new Error('JSON Error: buildCustomMessage: Message is not valid JSON! ' + message);
    }
  },

  buildMessage: function(id, message) {
    if (!message) {
      throw new Error('Required parameter `message` not found.');
    }

    if (!id) {
      throw new Error('Required parameter `id` not found.');
    }

    if (!message.method) {
      throw new Error('Required property `message.method` not found.');
    }

    return {
      id: id,
      method: message.method,
      params: message.params || []
    };
  },

  DataApi: function() {
    // See https://github.com/marmelab/restful.js for other options
   return Restful(DataApiConfig.host)
     .protocol(DataApiConfig.protocol)
     .port(DataApiConfig.port);
  }

};
