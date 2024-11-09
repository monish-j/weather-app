const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');


form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  try {
    const res = await fetch(`/weather/${city}`);
    const data = await res.json();
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    weatherInfo.innerHTML = `
      <p>Temperature: ${temperature}°C</p>
      <p>Conditions: ${description}</p>
    `;
  } catch (err) {
    console.error(err);
    weatherInfo.innerHTML = '<p>Failed to fetch weather data.</p>';
  }
});
