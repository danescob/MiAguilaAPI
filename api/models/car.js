'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  plate: String,
});

module.exports = {'Car': CarSchema};