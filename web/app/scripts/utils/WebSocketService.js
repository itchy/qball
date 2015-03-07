'use strict';
var ConsoleActions = require('../actions/ConsoleActions');

var WebSocketUtils = {

  SocketService: function(url, id) {
    var service = {};
    var pendingCallbacks = {};
    var currentMessageId = 0;
    var ws;
    var preConnectionRequests = [];
    var connected = false;

    if (!url) {
      throw Error('SocketService::Missing Parameter: `url` is required, but not found');
    }

    if (!id) {
      throw Error('SocketService::Missing Parameter: `id` is required, but not found');
    }

    function init() {
      service = {};
      pendingCallbacks = {};
      currentMessageId = 0;
      preConnectionRequests = [];
      connected = false;

      ws = new WebSocket(url + id);

//      console.log('Websocket connection:', ws);

      ws.onopen = function () {
        console.log('=== Connected to Websocket for ' + id);
        connected = true;
        if (preConnectionRequests.length === 0) {
          return;
        }

        console.log('Sending (%d) requests', preConnectionRequests.length);
        for (var i = 0, c = preConnectionRequests.length; i < c; i++) {
          ws.send(JSON.stringify(preConnectionRequests[i]));
        }
        preConnectionRequests = [];
      };

      ws.onclose = function() {
        connected = false;
        console.log('=== Websocket connection closed for ' + id);
        ConsoleActions.socketClosed(id);
      };

      ws.onerror = function(error) {
        console.log('=== Websocket error for ' + id + '. Error: ', error);
        ConsoleActions.socketError(id, error);
      };

      ws.onmessage = function (message) {
        var json;

        console.log('=== Websocket message received:', message);

        if (message
            && message.type
            && message.type === 'message') {

          ConsoleActions.addMessage({
            id: id,
            message: message.data
          });
          listener(JSON.parse(message.data));
        } else {
          try {
            json = JSON.parse(message.data);
            listener(json);
          } catch(e) {
            console.log('Message data is not JSON', message.data);
          }
        }
      };

    }

    init();

    function sendRequest(request, cb) {
      // websocket closing / closed, reconnect
      if(ws && ~[2,3].indexOf(ws.readyState)) {
        connected = false;
        init();
      }

      request.id = generateMessageId();
      pendingCallbacks[request.id] = cb;

//      console.log(pendingCallbacks);

      if (!connected) {
        //console.log('Not connected yet, saving request', request);
        preConnectionRequests.push(request);
      } else {
        //console.log('Sending request', request);
        ws.send(JSON.stringify(request));
      }
      return request.id;
    }

    function listener(message) {
      console.log(message);
//      console.log('listener, listener:', message.id, 'ws.readyState', ws.readyState);
      // If an object exists with id in our pendingCallbacks object, resolve it
      if (pendingCallbacks.hasOwnProperty(message.id)
          && _.isFunction(pendingCallbacks[message.id])) {
        pendingCallbacks[message.id](message);
        delete pendingCallbacks[message.id];
      }
    }

    function requestComplete(id) {
      console.log("requestComplete:", id, 'ws.readyState', ws.readyState);
      delete pendingCallbacks[id];
    }

    function stopRequest(closeOnly) {
      ws.close();
      !closeOnly && init();
    }

    function generateMessageId() {
      if (currentMessageId > 10000) {
        currentMessageId = 0;
      }

      return new Date().getTime().toString() + '~' + (++currentMessageId).toString();
    }

    function isConnected() {
      return connected;
    }

    service.adapterId = id;
    service.close = stopRequest.bind(this, true);
    service.sendRequest = sendRequest;
    service.requestComplete = requestComplete;
    service.stopRequest = stopRequest;
    service.isConnected = isConnected;
    return service;
  }

};

module.exports = WebSocketUtils;

