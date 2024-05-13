import React from "react";

const Wether = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div>
          <div>
            <p>
              {weatherData.name},{weatherData.sys.contry}
            </p>
            <p>{weatherData.weather[0].description}</p>
          </div>
          <div>
            <h1>{weatherData.main.temp.toFixed()} °C</h1>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
          </div>
          <p>Feels Like</p>
          <p>{weatherData.main.feels_like.toFixed()} °C</p>
          <p>Humidity</p>
          <p>{weatherData.main.humidity.toFixed()} %</p>
          <p>Wind Speed</p>
          <p>{weatherData.wind.speed.toFixed()} kph</p>

          <p>Pressure</p>
          <p>{weatherData.main.pressure} hPa</p>
        </div>
      ) : null}
    </div>
  );
};
export default Wether;
