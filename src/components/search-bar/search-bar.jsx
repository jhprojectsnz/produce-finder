import "./search-bar.css";
import { BiSearchAlt, BiSliderAlt, BiArrowBack } from "react-icons/bi";
import Filters from "../filters/filters.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);

  function handleClick() {
    setShowFilters(false);

    //handle search for fruit and veg here
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="input-container">
          <Link to={"/"}>
            <BiArrowBack className="color-dark back-arrow" />
          </Link>
          <input
            type="text"
            placeholder="Search fruit and veg..."
            className="search-input"
            onFocus={() => setShowFilters(true)}
          />
          <div className="circle-btn border-dark" onClick={handleClick}>
            <BiSearchAlt className="color-dark" />
          </div>
        </div>
        <div
          className={
            showFilters
              ? "circle-btn border-light color-dark bg-light"
              : "circle-btn border-light color-light"
          }
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <BiSliderAlt />
        </div>
      </div>
      {showFilters && <Filters setShowFilters={setShowFilters} />}
    </div>
  );
}
