var DataApi = require('amygdala');
var StringUtils = require('./StringUtils');
var ServerActions = require('../actions/ServerActions');

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

  DataApi: new DataApi({
    config: {
      apiUrl: global.JASPER.REST_PROTOCOL + global.JASPER.API_HOST + ':' + window.JASPER.API_PORT,
      idAttribute: 'url',
      headers: {},
      localStorage: false
    },
    schema: {
      adapters: {
        url: '/adapterapi/list_all',
        parse: function(obj) {
          var data = obj.data
            ? Object.keys(obj.data).length
            ? obj.data
            : {}
            : {};

          console.log('ADAPTERS_LIST from Amygdala:', data);

          ServerActions.loadedAdapters([data]);
        }
      },
      adaptersOld: {
        url: '/adapterapi/list',
        parse: function(obj) {
          console.log('ADAPTERS_LISTOLD from Amygdala:', obj);

          // If only 1 data-point in response, we have to manually create
          // array, due to limitation in Amygdala.
          return obj.data
            ? obj.data.length
              ? obj.data.length === 1
                ? [obj.data]
                : obj.data
              : []
            : [];
        }
      },
      stats: {
        url: '/adapterapi/stats',
        parse: function(obj) {
          console.log('STATS from Amygdala:', obj);

          // If only 1 data-point in response, we have to manually create
          // array, due to limitation in Amygdala.
          return obj.data
            ? obj.data.length
              ? obj.data.length === 1
                ? [obj.data]
                : obj.data
              : []
            : [];
        }
      }
    }
  })
};
