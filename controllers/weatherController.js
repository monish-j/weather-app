const { getWeather } = require('../models/weather');


async function fetchWeather(req,res) {
    const city = req.params.city;
 
 try{
    const weather = await getWeather(city);
    res.json(weather);
 } catch(err){
    res.status(500).json({
        error: 'Failed to fetch weather'
    });
  }
};

module.exports = {
    fetchWeather
};