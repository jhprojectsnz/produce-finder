import "./filters.css";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

//change location to be the result of search
//change class name for close button - make close button component?

export default function Filters({ setShowFilters }) {
  //Add seller type filters to the array below
  const sellerTypes = [
    "Roadside stall",
    "Market Stall",
    "Shop",
    "Click and Collect",
  ];
  //A state variable is created to track selected seller types
  //This is an array of equal length with values initailly set to false
  const [selectedSellerTypes, setSelectedSellerTypes] = useState(
    sellerTypes.map((seller) => false)
  );
  //Function below run when a filter button is clicked
  //Will update the array stored in state, switching the boolen at the index that matches the index of the button clicked
  function handleFilterClick(index) {
    setSelectedSellerTypes((prevArray) =>
      prevArray.map((prev, i) => (i === index ? !prev : prev))
    );
  }

  const [hideClosed, setHideClosed] = useState(false);

  return (
    <div className="filters-container">
      <h3>Search options</h3>
      <FaTimes className="close" onClick={() => setShowFilters(false)} />
      <div className="filter">
        <p>
          Search location: <span className="italic">Birkenhead</span>
        </p>
        <FaEdit className="edit-icon" />
      </div>
      <div className="separator-line" />
      <div className="filter">
        <label className="filter-label" htmlFor={`custom-checkbox-hide`}>
          Hide-closed
        </label>
        <input
          type="checkbox"
          id={`custom-checkbox-hide`}
          name="hide-closed"
          value="hide-closed"
          checked={hideClosed}
          onChange={() => setHideClosed((prev) => !prev)}
        />
      </div>
      <div className="separator-line" />
      <div className="filter vertical">
        <p>Seller types</p>
        <div className="filter-btn-container">
          {sellerTypes.map((type, index) => (
            <button
              className={
                selectedSellerTypes[index]
                  ? "filter-btn filter-selected"
                  : "filter-btn"
              }
              key={type}
              onClick={() => handleFilterClick(index)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
