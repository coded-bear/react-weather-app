import React from "react";
import "./SearchEngine.scss";

const SearchEngine = ({ submit, value, change }) => (
  <div className="SearchEngine">
    <form onSubmit={submit}>
      <input
        type="text"
        className="searchInput"
        value={value}
        onChange={change}
        placeholder="Wyszukaj miasta..."
      />

      <button className="searchSubmit">Szukaj</button>
    </form>
  </div>
);

export default SearchEngine;
