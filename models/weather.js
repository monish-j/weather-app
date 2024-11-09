const axios = require('axios');

const API_KEY = process.env.API_KEY;

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await axios.get(url);
  return res.data;
}


module.exports = { 
  getWeather 
};
