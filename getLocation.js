const fetch = require('node-fetch');
const locationURL = 'https://maps.googleapis.com/maps/api/geocode/json';

const getLocation = (key, city) => {
	return fetch(`${locationURL}?address=${city}&key=${key}`)
		.then(response => response.json())
		.then(data => {
			const location = {
				'address': data.results[0].formatted_address,
				'lat': data.results[0].geometry.location.lat,
				'lng': data.results[0].geometry.location.lng,
			}
			
			return location;
		})
		.catch(error => console.error(`ERROR ${error}`));
};

module.exports = getLocation;