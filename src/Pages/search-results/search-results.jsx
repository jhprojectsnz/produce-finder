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
  //Import all stalls from context
  const { stalls } = useUserContext();
  //location used to find current pathname and use that for conditional rendering
  const location = useLocation();

  //Get google map component as a ref
  const mapRef = useRef(null);

  //This function is run every time a use pauses after zooming or scrolling the map
  //Stores the new map bounds to state. This causes a rerender and updates filteredStalls
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

  //Make a array of stalls, first filtered by map bounds and then by user filters
  //The resulting stalls are used as markers on map and to populate results list
  const filteredStalls = useMemo(() => {
    //Make a set of related words to the searched word
    //The items in a stall are checked against this set
    const matchTerms = filters.keyword
      ? new Set([
          filters.keyword.toLowerCase(),
          filters.keyword.replace(/s$/, "").toLowerCase(),
          filters.keyword.concat("s").toLowerCase(),
          filters.keyword,
          filters.keyword.replace(/s$/, ""),
          filters.keyword.concat("s"),
        ])
      : null;

    //Filter all stalls to just those within the current map bounds
    const stallsWithinMapBounds = mapDetails.mapBounds
      ? stalls.filter((stall) =>
          mapDetails.mapBounds.contains(
            new google.maps.LatLng(stall.location.lat, stall.location.lng)
          )
        )
      : [];

    //Return stalls filtered by selected filters
    return stallsWithinMapBounds.filter((stall) => {
      if (filters.buttonFilters["Open now"] && !isOpen(stall.openTimes))
        return false;

      if (filters.buttonFilters["Items in stock"] && stall.inStock.length < 1)
        return false;

      if (filters.buttonFilters.Organic && !stall.organic) return false;

      if (filters.buttonFilters["Market stall"] && !stall.marketStall)
        return false;

      if (filters.buttonFilters["Eftpos payment"] && !stall.eftposPayment)
        return false;

      if (filters.keyword) {
        let hasSearchTerm = false;
        stall.inStock.forEach((item) => {
          if (matchTerms.has(item.item)) {
            hasSearchTerm = true;
          }
        });
        if (!hasSearchTerm) return false;
      }

      return true;
    });
  });

  //Styles for the Google map - switch of points of interest to make map clearer
  const mapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
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
