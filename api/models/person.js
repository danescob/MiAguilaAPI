'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
    first_name: String,
    last_name: String
});

module.exports = {'Person': PersonSchema};