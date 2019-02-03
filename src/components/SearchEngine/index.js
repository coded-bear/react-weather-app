import React, { Component } from "react";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    return (
      <div className="SearchEngine">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wyszukaj miasta..."
          />
          <input type="submit" value="Szukaj" />
        </form>
      </div>
    );
  }
}

export default SearchEngine;
