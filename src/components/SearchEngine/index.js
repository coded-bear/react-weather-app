import React from "react";

const SearchEngine = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Wyszukaj miasta..."
      />
      <input type="submit" value="Szukaj" />
    </form>
  );
};

export default SearchEngine;
