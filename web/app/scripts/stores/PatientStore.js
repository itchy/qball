var Reflux = require('reflux');
var PatientActions = require('../actions/PatientActions');

var DashboardStore = Reflux.createStore({

  listenables: dashboardActions,

  init: function() {
    this.message = '';
  }

});

module.exports = DashboardStore;


