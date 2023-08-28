import "./search-bar.css";
import { BiSearchAlt, BiSliderAlt, BiArrowBack, BiMenu } from "react-icons/bi";
import Filters from "../filters/filters.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import CircleBtn from "../cricle-btn/circle-btn";

export default function SearchBar({ filters, setFilters, setSelectedStall }) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Navigate function used for back button to go back one page
  const navigate = useNavigate();

  // Called when search button is clicked or enter key is pressed in search field
  function handleSearch() {
    // Add the search term to the filters state object
    setFilters((prev) => ({
      ...prev,
      keyword: searchTerm,
    }));
    setSearchTerm("");
    // Reset selected stall in case the previously selected is included in the newly filtered stalls
    setSelectedStall({});
    // Show the filters so user can see where the search term has been added
    setShowFilters(true);
  }

  function handleDropdownClick(e) {
    // Stop propagation important - dropdown will had an click event to the document
    // Need to avoid immediately triggering this event when clicking the menu button
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
    setShowFilters(false);
  }

  function handleFiltersClick() {
    setShowFilters((prev) => !prev);
    setShowDropdown(false);
  }

  return (
    <div className="search-bar">
      <div className="search-container">
        <h1 className="search-title" onClick={() => navigate("/")}>
          Find Fresh Produce
        </h1>
        <div className="search-elements">
          <div className="input-container">
            <CircleBtn appearance="light" handleClick={() => navigate(-1)}>
              <BiArrowBack className="color-dark circle-btn-icon" />
            </CircleBtn>
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
            <CircleBtn appearance="light" handleClick={handleSearch}>
              <BiSearchAlt className="circle-btn-icon" />
            </CircleBtn>
          </div>
          <CircleBtn
            appearance={showFilters ? "light" : "dark"}
            handleClick={handleFiltersClick}
          >
            <BiSliderAlt className="circle-btn-icon" />
          </CircleBtn>
        </div>
        <CircleBtn
          appearance={showDropdown ? "light" : "dark"}
          handleClick={handleDropdownClick}
        >
          <BiMenu className="circle-btn-icon" />
        </CircleBtn>
      </div>
      {showDropdown && (
        <DropdownMenu
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      )}
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
