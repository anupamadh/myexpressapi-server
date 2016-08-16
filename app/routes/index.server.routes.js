module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  // var staticPageController = require('../controllers/staticpage.server.controller');

  var usersController = require('../controllers/users.server.controller');

  // ACTUAL ROUTING

  // app.get('/', staticPageController.renderHome);
  // app.get('/about', staticPageController.renderAbout);
  // app.get('/contact', staticPageController.renderContact);
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.get('/users',usersController.index);
  //To display data for a particular member
  //app.get('/users/:name',usersController.index);
  app.get('/users/:name',usersController.show);
 };
