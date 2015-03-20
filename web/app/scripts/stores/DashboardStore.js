'use strict';

var Reflux = require('reflux');
var Actions = require('../actions/DashboardActions');

var dashboardStore = Reflux.createStore({

  listenables: Actions,

  init: function() {
    this.message = '';
  }

});

module.exports = dashboardStore;

