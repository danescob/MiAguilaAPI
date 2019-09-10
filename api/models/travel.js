'use strict';
var mongoose = require('mongoose');
var Point = require("./point");
var Person = require("./person");
var Car = require("./car");
var Schema = mongoose.Schema;

var Travel = new Schema({
  start: {
    type: Point,
    required: 'Do you need set the start point'
  },
  end: {
    type: Point,
    required: 'Do you need set the endpoint point'
  },
  country: {
    name: String
  },
  city: {
    name : String
  },
  passenger : Person,
  driver : Person,
  car: Car,
  status: {
    type: [{
      type: String,
      enum: ['onway', 'near', 'started']
    }],
    default: ['started']
  },
  createdAt: {
    $date: Date
  },
  udpatedAt: {
    $date: Date
  },
  price: Number,
  driver_location : Point
});

module.exports = mongoose.model('Travel', Travel);