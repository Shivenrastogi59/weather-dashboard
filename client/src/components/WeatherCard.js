import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <img src={data.icon} alt="weather icon" />
      <h3>{data.condition}</h3>
      <h3>{data.description}</h3>
      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
    </div>
  );
};

export default WeatherCard;
