const fetch = require('node-fetch');
const weatherURL = 'https://api.darksky.net/forecast/';

const getWeather = (key, location) => {
	return fetch(`${weatherURL}${key}/${location.lat},${location.lng}`)
		.then(response => response.json())
		.then(data => {
			const weatherData = data.currently;
			const weather = {
					'address': 	location.address,
					'date': new Date().toLocaleString(),
					'temperature': ((Number(weatherData.temperature) - 32) * (5 / 9)).toFixed(1),
					'precipProbability': weatherData.precipProbability,
					'humidity': weatherData.humidity,
					'windSpeed': weatherData.windSpeed
				}

			return weather;
		})
		.catch(error => console.error(`ERROR ${error}`));
}

module.exports = getWeather;