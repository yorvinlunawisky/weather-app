const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f95efcd17c52b17df6e64efa10f73392&query=' + latitude + ',' + longitude + '&units=f';

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ": It is currectly " + response.body.current.temperature + " degrees out there. There is a " + response.body.current.precip + "% chance of rain.")
        }
    })

}

module.exports = forecast;