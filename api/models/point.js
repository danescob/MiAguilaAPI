'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PointSchema = new Schema({
  date: {
    type: Date
  },
  pickup_address: {
    type: String,
    required: "You do need set address"
  },
  pickup_location: {
    type:[Schema.Types.Decimal128, Schema.Types.Decimal128],
    required: "You do need set a lat & lng coordenates"
  }
});

module.exports = mongoose.model('Tasks', PointSchema);