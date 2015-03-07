/*jshint indent: 2, node: true, nomen: true, browser: true*/

//global.React = require('react/addons');
//exports.react = global.React;
//
//global._ = require('lodash');
//global.moment = require('moment');
//global.$ = global.jQuery = require('jquery');
//global.bootstrap = require('bootstrap');
//global.reactBootstrap = require('react-bootstrap');

global.JASPER = {
  API_HOST: '@@API_HOST',
  API_PORT: '8080',
  REST_PROTOCOL: 'http://',
  WS_PROTOCOL: 'ws://',
  REPOLL: 30000
};

if (typeof Promise === 'undefined') {
  global.Promise = require('es6-promise').Promise;
}
