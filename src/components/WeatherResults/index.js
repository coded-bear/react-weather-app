import React from "react";
import "./WeatherResults.scss";

const WeatherResults = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    tempMin,
    tempMax,
    pressure,
    humidity,
    wind,
    err
  } = props.weatherResult;

  let content = null;

  if (!err && city) {
    content = (
      <div className="WeatherContent">
        <div className="WeatherImage">
          <p className="WeatherDate">{date}</p>
          <p className="WeatherCity">{city}</p>
          <p className="WeatherTemp">{temp}&#176;</p>
        </div>
        <div className="WeatherDescription">
          <p>Temperatura minimalna: {tempMin}&#176;C</p>
          <p>Temperatura maksymalna: {tempMax}&#176;C</p>
          <p>Wschód słońca: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
          <p>Zachód słońca: {new Date(sunset * 1000).toLocaleTimeString()}</p>
          <p>Wilgotność powietrza: {humidity} %</p>
          <p>Siła wiatru: {wind} m/s</p>
          <p>Ciśnienie: {pressure} hPa</p>
        </div>
      </div>
    );
  }

  let error = (
    <div className="WeatherError">
      <p>Nie mamy w bazie miasta {city}</p>
    </div>
  );

  return <div className="WeatherResults">{err ? error : content}</div>;
};

export default WeatherResults;
