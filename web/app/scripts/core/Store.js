'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var invariant = require('react/lib/invariant');

var WebApiUtils = require('../utils/WebApiUtils');

var CHANGE_EVENT = 'change';


/**
* Constructs a Store object, extends it with EventEmitter and supplied
* methods parameter,  and creates a mixin property for use in components.
*
* @param {object} methods Public methods for Store instance.
* @constructor
*/
function Store(methods) {

  var self = this;

  invariant(!methods.dispatcherToken,'"dispatcherToken" is a reserved name and cannot be used as a method name.');
  invariant(!methods.Mixin,'"Mixin" is a reserved name and cannot be used as a method name.');

  assign(this, EventEmitter.prototype, methods);

  this.dispatcherToken = null;

  /**
   * Base functionality for every Store constructor. Mixed into the
   * `Store` prototype, but exposed statically for easy access.
   */
  this.Mixin = {
    componentDidMount: function() {
//      console.log('Store componentDidMount', this);
      self.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
//      console.log('Store componentWillUnmount');
      self.removeChangeListener(this._onChange);
    }
  };
}

/**
* Emits change event.
*/
Store.prototype.emitChange = function() {
  this.emit(CHANGE_EVENT);
};

/**
* Adds a change listener.
*
* @param {function} callback Callback function.
*/
Store.prototype.addChangeListener = function(callback) {
  this.on(CHANGE_EVENT, callback);
};

/**
* Removes a change listener.
*
* @param {function} callback Callback function.
*/
Store.prototype.removeChangeListener = function(callback) {
  this.removeListener(CHANGE_EVENT, callback);
};

Store.prototype.restData = function() {
  return WebApiUtils.DataApi;
};

module.exports = Store;
