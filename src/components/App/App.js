import React, { Component } from "react";

import SearchEngine from "../SearchEngine";
import WeatherResults from "../WeatherResults";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-weather-app</h1>

        <SearchEngine />

        <WeatherResults />
      </div>
    );
  }
}

export default App;
