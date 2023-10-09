import "./filters.css";

import React from "react";
import { FaTimes } from "react-icons/fa";

import ButtonStd from "../button-std/button-std";

export default function Filters({ filters, setFilters, setShowFilters }) {
  // Function below run when a true/false filter button is clicked
  function handleFilterClick(filter) {
    setFilters((prev) => {
      const newObj = {
        ...prev,
        buttonFilters: {
          ...prev.buttonFilters,
          [filter]: !prev.buttonFilters[filter],
        },
      };
      return newObj;
    });
  }

  // This function is run when close button next to the search term is clicked
  function handleRemoveKeyword() {
    setFilters((prev) => ({
      ...prev,
      keyword: false,
    }));
  }

  return (
    <div className="filters-container">
      <FaTimes className="close" onClick={() => setShowFilters(false)} />
      <h3>Filters</h3>
      {filters.keyword && (
        <div className="filter">
          <p className="filter-title">Stalls selling:</p>
          <ButtonStd options={["grey"]}>
            {filters.keyword}
            <FaTimes className="remove-icon" onClick={handleRemoveKeyword} />
          </ButtonStd>
        </div>
      )}
      <div className="filter-btn-container">
        {Object.keys(filters.buttonFilters).map((filter) => (
          <ButtonStd
            options={[filters.buttonFilters[filter] ? "dark" : "grey"]}
            key={filter}
            handleClick={() => handleFilterClick(filter)}
          >
            {filter}
          </ButtonStd>
        ))}
      </div>
    </div>
  );
}
