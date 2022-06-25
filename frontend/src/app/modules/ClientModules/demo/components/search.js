import React from "react";
import { useState } from "react";

function Search({ handleSearch, keyword }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const clearSearch = () => {
    handleSearch && keyword && handleSearch("");
    setValue("");
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();
    handleSearch && handleSearch(value);
  };

  return (
    <div className="py-3">
      <div className="input-group">
        <div className="form-outline d-flex align-items-center">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={value}
          />

          <span className="search-close px-3" onClick={clearSearch}>
            <i className="fal fa-times" />
          </span>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
