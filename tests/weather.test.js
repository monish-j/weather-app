const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { getWeather } = require('../models/weather');
const axios = require('axios');


jest.mock('axios');

describe('getWeather', () => {
  it('should fetch weather data for a city', async () => {
    const city = 'London';
    const data = { main: { temp: 15 }, weather: [{ description: 'clear sky' }] };
    axios.get.mockResolvedValue({ data });

    const result = await getWeather(city);

    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
  });
});
