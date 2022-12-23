const weatherSchema = require('../models/weatherSchema');
const { getForecast } = require('../weatherApi');

const weatherService = {
    async getWeatherInfoByGpsCoordinates({ latitude, longitude }) {
        const result = await weatherSchema.findOne({ latitude: latitude,  longitude: longitude });

        if (!result) {
            const currentData = await getFormatedWeatherData(latitude, longitude);

            await weatherSchema.create(currentData);

            return currentData;
        }
        
        return result;
    }
}

async function getFormatedWeatherData(latitude, longitude) {
    const { coord, weather, dt } = await getForecast(latitude, longitude);
    
    return { 
        latitude: coord.lat,
        longitude: coord.lon,
        weatherDescription: weather[0].description,
        date: dt,
    };
}

module.exports = weatherService;