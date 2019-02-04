import React from "react";
import "./SearchEngine.css";

const SearchEngine = props => {
  return (
    <div className="SearchEngine">
      <form onSubmit={props.submit}>
        <input
          type="text"
          className="searchInput"
          value={props.value}
          onChange={props.change}
          placeholder="Wyszukaj miasta..."
        />
        <input type="submit" className="searchSubmit" value="Szukaj" />
      </form>
    </div>
  );
};

export default SearchEngine;
