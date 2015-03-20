var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Root = React.createClass({
  render: function() {
    return (
      <div className="root">
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Root;
