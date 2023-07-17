import "./filters.css";
import { FaTimes } from "react-icons/fa";

export default function Filters({ filters, setFilters, setShowFilters }) {
  //Add true/false filters to the array below
  //Also update filter function in search results
  const filterTypes = ["Open now", "", "Shop", "Click and Collect"];

  //Function below run when a true/false filter button is clicked
  function handleFilterClick(filter) {
    setFilters((prev) => {
      console.log(prev.buttonFilters[filter]);
      const newObj = {
        ...prev,
        buttonFilters: {
          ...prev.buttonFilters,
          [filter]: !prev.buttonFilters[filter],
        },
      };
      console.log(newObj);
      return newObj;
    });
  }

  //This function is run when close button next to the search term is clicked
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
        <>
          <div className="filter">
            <p className="filter-title">Stalls selling:</p>
            <div className="filter-btn narrow-btn">
              {filters.keyword}
              <FaTimes className="remove-icon" onClick={handleRemoveKeyword} />
            </div>
          </div>
          <div className="separator-line" />
        </>
      )}

      <div className="filter-vertical">
        <p className="filter-title">Show stalls:</p>
        <div className="filter-btn-container">
          {Object.keys(filters.buttonFilters).map((filter) => (
            <button
              className={
                filters.buttonFilters[filter]
                  ? "filter-btn filter-selected"
                  : "filter-btn"
              }
              key={filter}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
