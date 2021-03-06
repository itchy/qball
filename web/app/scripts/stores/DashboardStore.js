'use strict';

var Reflux = require('reflux');
var DashboardActions = require('../actions/DashboardActions');

var DashboardStore = Reflux.createStore({

  listenables: DashboardActions,

  init: function() {
    this.message = '';
  }

});

module.exports = DashboardStore;
