/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

var Router = require('react-router');
var routes = require('./routes');

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

module.exports = router;
