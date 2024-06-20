import React, { useState } from 'react';
import '../App.css';

function Weather() {
  const [City, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const dataGet = (event) => {
    event.preventDefault();
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${City}&apikey=f6fejVmUL2hAPGedEB1Boz6YOsbegpgP`)
      .then((res) => res.json())
      .then((finalResponse) => {
        setWeather(finalResponse);
        console.log(finalResponse);
      });
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={dataGet}>
        <input
          type="text"
          value={City}
          onChange={(e) => setCity(e.target.value)}
          id="locationInput"
          placeholder="Enter location..."
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather && (
        <div className="weather-info">
          <div id="locationName"><strong>Location:</strong> {weather.location.name}</div>
          <div id="temperature"><strong>Temperature:</strong> {weather.timelines.daily[0].values.temperatureAvg}°C</div>
          <div id="humidity"><strong>Humidity:</strong> {weather.timelines.daily[0].values.humidityAvg}%</div>
          <div id="sunrise"><strong>Sunrise:</strong> {weather.timelines.daily[0].values.sunriseTime}</div>
          <div id="sunset"><strong>Sunset:</strong> {weather.timelines.daily[0].values.sunsetTime}</div>
          <div id="weatherType"><strong>Wind Speed:</strong> {weather.timelines.daily[0].values.windSpeedAvg}</div>
        </div>
      )}
    </div>
  );
}

export default Weather;
