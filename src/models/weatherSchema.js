const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherData = new Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  weatherDescription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('WeatherData', WeatherData);