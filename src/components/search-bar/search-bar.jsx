import "./search-bar.css";
import { BiSearchAlt, BiSliderAlt, BiArrowBack } from "react-icons/bi";
import Filters from "../filters/filters.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setShowFilters(false);

    //handle search for fruit and veg here
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="input-container">
          <button
            className="circle-btn border-dark bg-light"
            onClick={() => navigate(-1)}
          >
            <BiArrowBack className="color-dark back-arrow" />
          </button>
          <input
            type="text"
            placeholder="Search fruit and veg..."
            className="search-input"
            onFocus={() => setShowFilters(true)}
          />
          <button
            className="circle-btn border-dark bg-light"
            onClick={handleClick}
          >
            <BiSearchAlt className="color-dark" />
          </button>
        </div>
        <button
          className={
            showFilters
              ? "circle-btn border-light color-dark bg-light"
              : "circle-btn border-light color-light bg-dark"
          }
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <BiSliderAlt />
        </button>
      </div>
      {showFilters && <Filters setShowFilters={setShowFilters} />}
    </div>
  );
}
