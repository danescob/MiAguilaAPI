'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  type: String,
  coordinates: [Number, Number]
});

module.exports = {'Location': LocationSchema};