import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter a city"
            autocomplete="off"
            className="enterCity w-100"
            id="city-input"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="searchCity w-100"
            id="search-city"
          />
        </div>
        <div className="col-3">
          <button className="searchCurrent w-100" id="search-current">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}