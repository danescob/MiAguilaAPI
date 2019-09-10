'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Travel = new Schema({
  start: {
    type: String,
    required: 'Do you need set the start point'
  },
  end: {
    type: String,
    required: 'Do you need set the endpoint point'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', Travel);