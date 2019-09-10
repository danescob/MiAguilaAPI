'use strict';
var mongoose = require('mongoose');
var Location = require("./location");
var Schema = mongoose.Schema;

var PointSchema = new Schema({
  date: {
    type: Date
  },
  pickup_address: String,
  pickup_location: Location
});

module.exports = {'Point': PointSchema};