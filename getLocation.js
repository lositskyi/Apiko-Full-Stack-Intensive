const fetch = require('node-fetch');
const locationURL = 'https://maps.googleapis.com/maps/api/geocode/json';

const getLocation = (key, city) => {
	return fetch(`${locationURL}?address=${city}&key=${key}`)
		.then(response => response.json())
		.then(data => {
			console.log(`Weather in ${data.results[0].formatted_address}`);
			return data.results[0].geometry.location;
		})
		.catch(error => console.error(`ERROR ${error}`));
};

module.exports = getLocation;