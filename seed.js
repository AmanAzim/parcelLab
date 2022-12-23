const trackingData = require('./trackings.js');

const trackingDataSchema = require('./src/models/trackingDataSchema');

async function seedDb() {
    try {
        await trackingDataSchema.insertMany(trackingData);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { seedDb };