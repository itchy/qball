var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var MasterMenu = require('./shared/MasterMenu');

var Root = React.createClass({
  render: function() {
    return (
      <div className="Root">
        <MasterMenu/>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Root;
