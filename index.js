const { config } = require('dotenv');
const getLocation = require('./getLocation');
const getWeather = require('./getWeather');

config();

const { GOOGLE_API_KEY, DARK_SKY_API_KEY} = process.env;
const CITY = process.argv[2] || process.env.CITY;

getLocation(GOOGLE_API_KEY, CITY)
	.then(location => getWeather(DARK_SKY_API_KEY, location))
	.then(weather => {
		for (let key in weather) {
			console.log(`${key}: ${weather[key]}`)
		}
	})
