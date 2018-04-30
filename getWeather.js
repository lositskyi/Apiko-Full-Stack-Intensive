const fetch = require('node-fetch');
const weatherURL = 'https://api.darksky.net/forecast/';

const getWeather = (key, location, calback) => {
	fetch(`${weatherURL}${key}/${location.lat},${location.lng}`)
		.then(response => response.json())
		.then(data => {
			const weatherData = data.currently;
			const result = {
					'date': new Date().toLocaleString(),
					'temperature': ((Number(weatherData.temperature) - 32) * (5 / 9)).toFixed(1),
					'precipProbability': weatherData.precipProbability,
					'humidity': weatherData.humidity,
					'windSpeed': weatherData.windSpeed
				}
				
				for (let key in result) {
					console.log(`${key}: ${result[key]}`)
				}
		})
		.catch(error => console.error(`ERROR ${error}`));
}

module.exports = getWeather;