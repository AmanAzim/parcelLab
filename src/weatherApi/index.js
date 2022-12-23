const axios = require('axios');

const WEATHER_API_KEY = '55289df600b63c807479b2504a67be38';

const externalApiMethods = {
    async getForecast(latitude, longitude) {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);

        return data;
    }
}

module.exports = externalApiMethods;