import "./search-results.css";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import isOpen from "../../functions/isOpen";
import { useMemo } from "react";
import { useUserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import SectionHeading from "../../components/section-heading/section-heading";
import Map from "../../components/map/map";

export default function SearchResults({
  selectedStall,
  setSelectedStall,
  filters,
  setFilters,
  mapDetails,
  setMapDetails,
}) {
  // Import all stalls from context
  const { stalls } = useUserContext();
  // Location used to find current pathname and use that for conditional rendering
  const location = useLocation();

  // This function is used to update mapDetails variable when navigating away from the map component
  function updateMapSettings() {
    const currentCenter = {
      lat: googleMap.center.lat(),
      lng: googleMap.center.lng(),
    };
    const currentZoom = googleMap.getZoom();
    setMapDetails((prev) => ({
      ...prev,
      center: currentCenter,
      zoom: currentZoom,
    }));
  }

  console.log("SearchResults");

  // Make a array of stalls, first filtered by map bounds and then by user filters
  // The resulting stalls are used as markers on map and to populate results list
  const filteredStalls = useMemo(() => {
    // Filter all stalls to just those within the current map bounds
    const stallsWithinMapBounds = mapDetails.bounds
      ? stalls.filter((stall) =>
          mapDetails.bounds.contains(
            new google.maps.LatLng(stall.location.lat, stall.location.lng)
          )
        )
      : [];

    // Return an array of stalls filtered by user selected filters
    return stallsWithinMapBounds.filter((stall) => {
      // If Open now filter is selected and stall is closed don't include stall
      if (filters.buttonFilters["Open now"] && !isOpen(stall.openTimes))
        return false;
      // If Items in stock is selected and stall has no stock don't include stall
      if (filters.buttonFilters["Items in stock"] && stall.inStock.length < 1)
        return false;
      // If Organic/Market stall/Eftopos payment filters are selected
      // Check if the stall matchs and exclude if not
      if (filters.buttonFilters.Organic && !stall.organic) return false;
      if (filters.buttonFilters["Market stall"] && !stall.marketStall)
        return false;
      if (filters.buttonFilters["Eftpos payment"] && !stall.eftposPayment)
        return false;

      // If the user has search for a fruit or vegetable filter stalls by this keyword
      if (filters.keyword) {
        // Simplify the keyword by:
        // - Converting to lower case
        // - Slicing of the end to keyword to account for plurals "ies" or "s"
        const filterTerm = /ies$/.test(filters.keyword)
          ? filters.keyword.toLowerCase().slice(0, -3)
          : filters.keyword.toLowerCase().slice(0, -1);

        // Initiate variable to track whether the stall has an item that matches the filterTerm
        let stallHasKeyword = false;

        // Look through each product to see if it includes the search term
        // Sliced filterTerms like cherr (from Cherries) will match Cherries, Cherry etc
        stall.inStock.forEach((product) => {
          // toSting needs to be run before toLowerCase will work here
          // Product.item not stored as a primitive string?
          const productName = product.item.toString().toLowerCase();
          if (productName.includes(filterTerm)) {
            stallHasKeyword = true;
          }
        });
        // If stallHasKeyword is still false then stall does not have a matching product - don't include
        if (!stallHasKeyword) return false;
      }

      // If there none of the above conditions have been meet then include the stall in filtered array
      return true;
    });
  });

  return (
    <div className="search-results">
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        setSelectedStall={setSelectedStall}
      />
      {location.pathname === "/results/list" ? (
        <div className="results-list-container">
          <SectionHeading>Results</SectionHeading>
          <ResultsList
            setSelectedStall={setSelectedStall}
            stallsList={filteredStalls}
          />
        </div>
      ) : (
        <Map
          filteredStalls={filteredStalls}
          setMapDetails={setMapDetails}
          mapDetails={mapDetails}
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      )}
      <ResultsNav updateMapCenter={updateMapSettings} />
    </div>
  );
}

// Load a google map
// Populate the map with markers for the locations within the map bounds
// Save a list of those locations that can be used for list view
// When user moves the map update the markers to the new map bounds
// Update the saved locations
