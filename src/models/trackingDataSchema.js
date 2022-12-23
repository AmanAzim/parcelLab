const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackingData = new Schema({
  tracking_number: {
    type: String,
    required: true
  },
  location_id: {
    type: String,
    required: true
  },
  pickup_date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('TrackingData', TrackingData);