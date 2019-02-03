import React from "react";

const WeatherResults = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    content = (
      <div>
        <h3>
          Wyszukiwanie dla miasta: <strong>{city}</strong>
        </h3>
        <p>Dane dla dnia i godziny: {date}</p>
        <p>Aktualna temperatura: {temp} &#176;C</p>
        <p>
          Wschód słońca dzisiaj o{" "}
          {new Date(sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          Zachód słońca dzisiaj o {new Date(sunset * 1000).toLocaleTimeString()}
        </p>
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
