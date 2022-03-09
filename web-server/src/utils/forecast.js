const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f95efcd17c52b17df6e64efa10f73392&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ": It is currectly " + body.current.temperature + " degrees out there. There is a " + body.current.precip + "% chance of rain.")
        }
    })

}

module.exports = forecast;