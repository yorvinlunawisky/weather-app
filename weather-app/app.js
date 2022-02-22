const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Philadelphia', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})


forecast(37.806,-122.411, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})








