import "./search-bar.css";
import { BiSearchAlt, BiSliderAlt, BiArrowBack, BiMenu } from "react-icons/bi";
import Filters from "../filters/filters.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/dropdown-menu";

export default function SearchBar({ filters, setFilters }) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  //Navigate function used for back button to go back one page
  const navigate = useNavigate();

  //Called when search button is clicked or enter is pressed in search field
  function handleSearch() {
    setFilters((prev) => ({
      ...prev,
      keyword: searchTerm,
    }));
    setSearchTerm("");
    setShowFilters(true);
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            className="circle-btn border-dark bg-light"
            onClick={handleSearch}
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
          onClick={() => {
            setShowFilters((prev) => !prev);
            setShowDropdown(false);
          }}
        >
          <BiSliderAlt />
        </button>
        <button
          className={
            showDropdown
              ? "circle-btn border-light color-dark bg-light"
              : "circle-btn border-light color-light bg-dark"
          }
          onClick={() => {
            setShowDropdown((prev) => !prev);
            setShowFilters(false);
          }}
        >
          <BiMenu />
        </button>
      </div>
      <DropdownMenu
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
      {showFilters && (
        <Filters
          filters={filters}
          setFilters={setFilters}
          setShowFilters={setShowFilters}
        />
      )}
    </div>
  );
}
