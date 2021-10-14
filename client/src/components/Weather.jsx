import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Forecast from './Forecast';
require('dotenv').config();


const Weather = ({ latitude, longitude }) => {

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily/current?days=5&lat=${lat}&lon=${lon}&key=${API_KEY}`);
      setWeather(response.data.data);
    };
    fetchWeather(); //eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {!weather ? <h2>Loading weather...</h2> : weather.map((day, idx) => (
        <Forecast key={idx} weatherDetail={day} />
      ))}
    </div>
  )
}

export default Weather;