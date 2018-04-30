const fetch = require('node-fetch');
const locationURL = 'https://maps.googleapis.com/maps/api/geocode/json';

const getLocation = async (key, city, calback) => {
	await fetch(`${locationURL}?address=${city}&key=${key}`)
		.then(response => response.json())
		.then(data => {
			calback(data.results[0]);
		})
		.catch(error => console.error(`ERROR ${error}`));
};

module.exports = getLocation;
