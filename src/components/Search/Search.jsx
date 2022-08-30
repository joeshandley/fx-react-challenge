import React from "react";
import "./Search.scss";

const Search = ({ searchSubmitHandler }) => {
  return (
    <form
      className="search"
      onSubmit={(e) => {
        searchSubmitHandler(e);
      }}
    >
      <label className="search__label">
        Search shows:
        <input
          className="search__input"
          name="query"
          type="text"
          placeholder="Search keyword..."
        ></input>
      </label>
      <input className="search__submit" type="submit"></input>
    </form>
  );
};

export default Search;
