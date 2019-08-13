import React from "react";
import "./SearchEngine.scss";

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
        <button type="submit" className="searchSubmit">
          Szukaj
        </button>
      </form>
    </div>
  );
};

export default SearchEngine;
