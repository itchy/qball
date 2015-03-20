var React = require('react/addons');
var DocumentTitle = require('react-document-title');

var Dashboard = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Dashboard">
        <div className="dashboard">
          <h1>DASHBOARD</h1>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = Dashboard;
