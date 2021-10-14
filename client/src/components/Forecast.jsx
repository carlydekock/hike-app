import React from 'react';

const Forecast = ({weatherDetail}) => {

  const split = weatherDetail.datetime.split('-').slice(1);
  const day = split.join('-');

  return (
    <div className="card mt-3" style={{"width": "12rem"}}>
      <img className="card-img-top" src={`https://www.weatherbit.io/static/img/icons/${weatherDetail.weather.icon}.png`} alt={weatherDetail.weather.description} />
        <div className="card-body">
          <h5 className="card-title">Date: {day}</h5>
          <p className="card-text">{weatherDetail.weather.description}</p>
          <p className="card-text">High of {weatherDetail.high_temp}°C and low of {weatherDetail.low_temp}°C</p>
        </div>
    </div>
  )
}

export default Forecast;

