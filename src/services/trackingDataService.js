const trackingDataSchema = require('../models/trackingDataSchema');

const trackingDataService = {
    async getByTrackingNumber(trackingNumber) {
        return trackingDataSchema.findOne({ tracking_number: trackingNumber });
    }
}

module.exports = trackingDataService;