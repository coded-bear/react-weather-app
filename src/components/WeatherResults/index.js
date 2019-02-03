import React from "react";

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
      <div>
        <h3>
          Wyszukiwanie dla miasta: <strong>{city}</strong>
        </h3>
        <p>Dane dla dnia i godziny: {date}</p>
        <p>Aktualna temperatura: {temp} &#176;C</p>
        <p>Temperatura minimalna: {tempMin} &#176;C</p>
        <p>Temperatura maksymalna: {tempMax} &#176;C</p>
        <p>
          Wschód słońca dzisiaj o{" "}
          {new Date(sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          Zachód słońca dzisiaj o {new Date(sunset * 1000).toLocaleTimeString()}
        </p>
        <p>Wilgotność: {humidity}</p>
        <p>Aktualna siła wiatru: {wind} m/s</p>
        <p>Aktualne ciśnienie: {pressure} hPa</p>
      </div>
    );
  }

  return (
    <div className="WeatherResults">
      {err ? `Nie mamy w bazie miasta ${city}` : content}
    </div>
  );
};

export default WeatherResults;
