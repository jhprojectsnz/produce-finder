import "./search-results.css";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import StallPreview from "../../components/stall-preview/stall-preview";
import Markers from "../../components/markers/markers";
import isOpen from "../../functions/isOpen";
import { useRef, useMemo } from "react";
import { useUserContext } from "../../context/UserContext";
import { GoogleMap } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

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

  // Get google map component as a ref
  const mapRef = useRef(null);

  // This function is run every time a use pauses after zooming or scrolling the map
  // Stores the new map bounds to state. This causes a rerender and updates filteredStalls
  function handleOnIdol() {
    setMapDetails((prev) => ({
      ...prev,
      mapBounds: mapRef.current.state.map.getBounds(),
    }));
  }

  //This function is used to update mapCenter variable when navigating away from the map component
  function updateMapSettings() {
    const currentCenter = {
      lat: mapRef.current.state.map.center.lat(),
      lng: mapRef.current.state.map.center.lng(),
    };
    const currentZoom = mapRef.current.state.map.getZoom();
    setMapDetails((prev) => ({
      ...prev,
      center: currentCenter,
      zoom: currentZoom,
    }));
  }

  // Make a array of stalls, first filtered by map bounds and then by user filters
  // The resulting stalls are used as markers on map and to populate results list
  const filteredStalls = useMemo(() => {
    // Filter all stalls to just those within the current map bounds
    const stallsWithinMapBounds = mapDetails.mapBounds
      ? stalls.filter((stall) =>
          mapDetails.mapBounds.contains(
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

  // Styles for the Google map - switch of points of interest to make map clearer
  const mapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

  return (
    <>
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        setSelectedStall={setSelectedStall}
      />
      <div className="search-results">
        {location.pathname === "/results/map" && (
          <>
            <GoogleMap
              ref={mapRef}
              zoom={mapDetails.zoom}
              center={mapDetails.center}
              mapContainerClassName="map"
              clickableIcons={false}
              onClick={() => setSelectedStall({})}
              options={{ disableDefaultUI: true, styles: mapStyles }}
              onIdle={handleOnIdol}
            >
              {console.log("map")}
              <Markers
                filteredStalls={filteredStalls}
                selectedStall={selectedStall}
                setSelectedStall={setSelectedStall}
              />
            </GoogleMap>
            {selectedStall.stallId && (
              <StallPreview
                selectedStall={selectedStall}
                setSelectedStall={setSelectedStall}
                updateMapCenter={updateMapSettings}
              />
            )}
          </>
        )}

        {location.pathname === "/results/list" && (
          <ResultsList
            setSelectedStall={setSelectedStall}
            stallsList={filteredStalls}
          />
        )}
        <ResultsNav updateMapCenter={updateMapSettings} />
      </div>
    </>
  );
}

/*
keyword = strawberries

lowercase = apples

strawberry

app



*/
