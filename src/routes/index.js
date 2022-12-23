const router = require('express').Router();
const { getByTrackingNumber } = require('../services/trackingDataService');
const { getWeatherInfoByGpsCoordinates } = require('../services/weatherService');

router.get('/tracking-info/:trackingNumber', async (req, res, next) => {
    const trackingNumber = req.params.trackingNumber;

    try {   
        const result = await getByTrackingNumber(trackingNumber);

        if (!result) {
            return res.status(404).send(`No information found by tracking_number ${trackingNumber} not found`);
        }

        res.send(result);
    } catch (err) {
        res.status(err)
    }
});

router.get('/weather', async (req, res, next) => {
    const { lat: latitude, lon: longitude } = req.query;

    try {
        const result = await getWeatherInfoByGpsCoordinates({ latitude, longitude });

        if (!result) {
            return res.status(404).send('No weather forecast found');
        }

        res.send(result);
    } catch (err) {
        res.status(err)
    }
});


module.exports = router;
