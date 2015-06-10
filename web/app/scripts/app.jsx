var React = require('react/addons');
var Router = require('./router');
var _ = require('lodash');

if (__DEV__) {
  require('../styles/app.scss');
}

Router.run(function (Handler, states) {
  React.render(<Handler/>, document.body);
});


//// Miscellaneous scripts
/**
 * Add prototype to array for very dynamic, robust sorting
 * This code is copyright 2012 by Gavin Kistner, !@phrogz.net
 * It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
 *
 * [Tyson P] This is used in the patient household view, in order to sort by 'is_guardian' and then 'age'.
 */
(function(){
  if (typeof Object.defineProperty === 'function'){
    try {Object.defineProperty(Array.prototype, 'sortBy', {value:sb});} catch(e) {}
  }

  if (!Array.prototype.sortBy) {
    Array.prototype.sortBy = sb;
  }

  function sb(f){
    for (var i=this.length;i;){
      var o = this[--i];
      this[i] = [].concat(f.call(o,o,i),o);
    }
    this.sort(function(a,b){
      for (var j=0,len=a.length;j<len;++j){
        if (a[j]!==b[j]) {
          return a[j]<b[j]?-1:1;
        }
      }
      return 0;
    });
    for (var k=this.length;k;){
      this[--k]=this[k][this[k].length-1];
    }
    return this;
  }
})();


// Object.prototype.toType
// See:
//  http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
//Object.toType = (function toType(global) {
//  return function(obj) {
//    if (obj === global) {
//      return "global";
//    }
//    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
//  }
//})(this);
(function(){
  if (typeof Object.defineProperty === 'function'){
    try {Object.defineProperty(Object.prototype, 'toType', {value:toType});} catch(e) {}
  }
  if (!Object.prototype.toType) Object.prototype.toType = toType;

  function toType(global){
    return function(obj) {
      if (obj === global) {
        return "global";
      }
      return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    }
  }
})();
// toType

/**
 * Add new method to LoDash.
 * This method will do the same thing to an object that the _.compact method does to arrays
 * See: http://lodash.com/docs#compact for more info
 */
(function(){
  _.mixin({
    compactObject: function(to_clean) {
      _.map(to_clean, function(value, key, to_clean) {
        if (_.isNull(value) || _.isUndefined(value) || (_.isString(value) && value.trim().length === 0) || (_.isBoolean(value) && value === false)) {
          delete to_clean[key];
        }
      });
      return to_clean;
    }
  });
})();

/**
 * Disable execution via console.
 */
//(function() {
//  var _z = console;
//  Object.defineProperty( window, "console", {
//    get : function(){
//      if( _z._commandLineAPI ){
//        throw "Forbidden";
//      }
//      return _z;
//    },
//    set : function(val){
//      _z = val;
//    }
//  });
//
//  Object.defineProperty( window, "wvcnsl", {
//    get : function(){
//      return _z;
//    },
//    set : function(val){
//      _z = val;
//    }
//  });
//})();
