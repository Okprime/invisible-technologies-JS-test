require('dotenv')
const weather = require('weather-js')
const rp = require('request-promise')


// Given an array of inputs (location name, postal code), log the current time and weather for those locations.
// Example: "./weather New York, 10005, Tokyo, São Paulo, Pluto"

const getTheCurrentTimeAndWeatherConditionOfALocation = (async (lat, long) => {
    const key = process.env.key || 'ca700c4d6885d21e238f03299f7912e9'
    const url = process.env.URL || `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric`
        const options = {
        method: 'GET',
        uri: url,        
        json: true,
        }
        const response = await rp(options);
        return response.current;
})

const getTheLonitutdeAndLatitudeOfALocation = ((param) => {
    console.log('param', param)
        for (const data of param) {
        weather.find({search: data}, async function(err, result) {
            try {
                if (result) {
                    const locationName = result[0].location.name
                    const locationLatitude = result[0].location.lat
                    const locationLongitude = result[0].location.long
                    const data = await getTheCurrentTimeAndWeatherConditionOfALocation(locationLatitude, locationLongitude)
                    const temperature = data.temp
                    const currentTimeInEpoch = data.dt
                    const utcSeconds = currentTimeInEpoch
                    const dateAndTIme = new Date(0); 
                    dateAndTIme.setUTCSeconds(utcSeconds)
                    console.log(`As as ${dateAndTIme}, ${locationName} has a temperature of ${temperature} degres celsuis`)
                }
            } catch (error) {
                console.log('An error occured', error);
            }
        })
    }
})

getTheLonitutdeAndLatitudeOfALocation(['London'])

module.exports = {
    getTheLonitutdeAndLatitudeOfALocation
}
