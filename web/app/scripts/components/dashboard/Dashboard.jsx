var React = require('react/addons');
var DocumentTitle = require('react-document-title');
var Chart = require('../shared/Chart');
var DashboardStore = require('../../stores/DashboardStore');

var Dashboard = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Dashboard">
        <div className="dashboard">
          <Chart model="" name="Chart 1"></Chart>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Dashboard;
