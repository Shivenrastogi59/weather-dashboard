const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  const apiKey = '85f1fd68d93d4ecde3e35d9830ec7a89'; // hardcoded your key here

  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    const response = await axios.get('http://api.weatherstack.com/current', {
      params: {
        access_key: apiKey,
        query: city
      }
    });

    const data = response.data;

    if (!data || !data.current || data.success === false) {
      return res.status(404).json({ error: 'City not found or API error' });
    }

    res.json({
      temperature: data.current.temperature,
      condition: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0],
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
      location: `${data.location.name}, ${data.location.country}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;