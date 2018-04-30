const { config } = require('dotenv');
const getLocation = require('./getLocation');
const getWeather = require('./getWEather');

config();

const { GOOGLE_API_KEY, DARK_SKY_API_KEY} = process.env;
const CITY = process.argv[2] || process.env.CITY;

getLocation(
	GOOGLE_API_KEY, 
	CITY, 
	(locationData) => {
		const address = locationData.formatted_address;
		const location = locationData.geometry.location;
		
		console.log(`address: ${address}`);
		
		getWeather(DARK_SKY_API_KEY, location);
});