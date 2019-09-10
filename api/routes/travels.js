'use strict';
module.exports = function(app) {
  var travels = require('../controllers/travels');
  // todoList Routes
  app.route('/travels/:page?')
    .get(travels.list_all);
    
  app.route('/travelsbycity/:page?')
    .get(travels.list_city);
    
  app.route('/travel/')
    .post(travels.create);

  app.route('/travel/:travelId')
    .put(travels.update);
};