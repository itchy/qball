var React = require('react/addons');
var Router = require('react-router');
var {Route, Redirect, NotFoundRoute, DefaultRoute, Link, RouteHandler} = Router;

var Root = require('./components/Root');


module.exports = (
  <Route name="root" path="/" handler={Root}>
  </Route>
);
//    <Route name="login" path="/login" handler={} />
//    <Route name="dashboard" path="/" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
//    <Route name="login" path="/login" handler={} />
