import React, {useEffect} from 'react';
import axios from 'axios';
require('dotenv').config();

const Weather = ({latitude, longitude}) => {
  
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);
  useEffect(() => {
    axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}&include=minutely`)
    .then(res => {
      console.log('this is weather res', res);
    });
  })
  return (
    <div className="row mb-2 d-flex justify-content-center">
      This is lat and long: {latitude} and {longitude} at this location.
    </div>
  )
}

export default Weather;