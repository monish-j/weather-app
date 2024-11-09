const express = require('express');
const { fetchWeather } = require('../controllers/weatherController');
const router = express.Router();


router.get('/weather/:city', fetchWeather);


module.exports = router;
