import React, { Component } from "react";

import SearchEngine from "../SearchEngine";
import WeatherResults from "../WeatherResults";

const APIkey = "e9cc21a116e3570adfdafdb1760975d2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      date: new Date().toLocaleString(),
      city: "",
      sunrise: "",
      sunset: "",
      temp: "",
      pressure: "",
      wind: "",
      err: false
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.search
    }&appid=${APIkey}&units=metric`;

    fetch(API)
      .then(res => {
        if (res.ok) return res;
        throw Error("Nie ma takiego miasta w naszej bazie");
      })
      .then(res => res.json())
      .then(data => {
        console.log("hihi");
        this.setState(prevState => ({
          err: false,
          date: new Date().toLocaleString(),
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind,
          city: prevState.search
        }));
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({ err: true, city: prevState.search }));
      });
  };

  render() {
    return (
      <div className="App">
        <h1>react-weather-app</h1>

        <SearchEngine
          value={this.state.search}
          change={this.handleChange}
          submit={this.handleSubmit}
        />

        <WeatherResults error={this.state.err} />
      </div>
    );
  }
}

export default App;
