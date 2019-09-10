'use strict';
module.exports = function(app) {
  var travelList = require('../controllers/travels');

  // todoList Routes
  app.route('/travels/:page')
    .get(travelList.list_all);
    
  app.route('/travelsbycity/:page')
    .get(travelList.list_city);
    
  app.route('/travel/:travelId')
    .post(travelList.create)
    .put(travelList.update);
};