var Router = require('react-router');
var routes = require('./routes');

var router = Router.create({
  routes: routes,
  location: Router.HistoryHash
});

module.exports = router;
