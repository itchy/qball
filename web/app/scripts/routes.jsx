var React = require('react/addons');
var Router = require('react-router');
var {Route, Redirect, NotFoundRoute, DefaultRoute, Link, RouteHandler} = Router;

var Root = require('./components/Root');
var Login = require('./components/login/Login');
var Dashboard = require('./components/dashboard/Dashboard');

module.exports = (
  <Route name="root" path="/" handler={Root}>
    <Route name="dashboard" path="/" handler={Dashboard} />
    <Route name="login" path="login" handler={Login} />
    <DefaultRoute handler={Dashboard}/>
  </Route>
);
