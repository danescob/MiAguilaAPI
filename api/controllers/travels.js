'use strict';
var mongoose = require('mongoose'),
  Travel = mongoose.model('Travel');

exports.list_all = function(req, res) {
    Travel.find({}, function(err, travel) {
      if (err)
        res.send(err);
      res.json(travel);
    });
};
exports.list_city = function(req, res) {
    Travel.find({}, function(err, travel) {
        if (err)
            res.send(err);
        res.json(travel);
    });
};
exports.create = function(req, res) {
    var new_travel = new Travel(req.body);
    new_travel.save(function(err, travel) {
        if (err)
            res.send(err);
        res.json(travel);
    });
};
exports.update = function(req, res) {
    Travel.findOneAndUpdate({_id: req.params.travelId}, req.body, {new: true}, function(err, travel) {
        if (err)
            res.send(err);
        res.json(travel);
    });
};