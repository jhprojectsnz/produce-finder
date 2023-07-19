import "./search-results.css";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useState, useRef, useMemo, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import StallPreview from "../../components/stall-preview/stall-preview";
import { GoogleMap } from "@react-google-maps/api";
// import convertPlaceToStall from "../../functions/convertPlaceToStall";
import Markers from "../../components/markers/markers";
import isOpen from "../../functions/isOpen";

export default function SearchResults({
  setMapCenter,
  mapCenter,
  selectedStall,
  setSelectedStall,
}) {
  //Import all stalls from context
  const { stalls, setStalls } = useUserContext();

  const [resultsView, setResultsView] = useState("map");
  const [filters, setFilters] = useState({
    keyword: false,
    buttonFilters: {
      "Open now": false,
      "Items in stock": false,
      Organic: false,
    },
  });

  //Get google map component as a ref
  const mapRef = useRef(null);

  //Use this along with the handleOnIdol function
  // handleOnIdol updates stalls variable causing rerender when bounds changed
  // const stallsWithinMapBounds = useMemo(() => {
  //   const mapBounds = mapRef.current
  //     ? mapRef.current.state.map.getBounds()
  //     : null;
  //   return mapBounds
  //     ? stalls.filter((stall) =>
  //         mapBounds.contains(
  //           new google.maps.LatLng(stall.location.lat, stall.location.lng)
  //         )
  //       )
  //     : [];
  // });

  //This cost to use, only activate when needed
  //Use small dummy set of stalls for development
  // function handleOnIdol() {
  //   // Filter all stalls to those within new map bounds and save to state
  //   // Stalls that are within the current map bounds will be shown as markers and appear in the results list
  //   if (mapRef.current) {
  //     //Access the PlacesService required to do a nearby search
  //     const service = new google.maps.places.PlacesService(
  //       mapRef.current.state.map
  //     );

  //     const mapBounds = mapRef.current.state.map.getBounds();

  //     //Set request parameters for the nearby search
  //     const request = {
  //       keyword: "orchard",
  //       bounds: mapBounds,
  //     };
  //     //Perform nearby search, convert places to stalls and then save new stalls to context
  //     service.nearbySearch(request, (results, status) => {
  //       if (status == google.maps.places.PlacesServiceStatus.OK) {
  //         setStalls((prevStalls) => {
  //           //Create a set containing IDs of all current stalls
  //           //Allows for a quick check if new places are already in stalls data
  //           const currentStallIds = new Set();
  //           prevStalls.forEach((stall) => currentStallIds.add(stall.stallId));
  //           //Filter out places that are already in stalls data
  //           //Then convert the places data to dummy stalls data
  //           const newPlacesAsStalls = results
  //             .filter((place) => !currentStallIds.has(place.place_id))
  //             .map((place) => convertPlaceToStall(place));
  //           //Add the new dummy stalls to the current stalls data
  //           return [...prevStalls, ...newPlacesAsStalls];
  //         });
  //       }
  //     });
  //   }
  // }

  //This function is used to update mapCenter variable when navigating away from the map component
  function updateMapCenter() {
    const currentCenter = {
      lat: mapRef.current.state.map.center.lat(),
      lng: mapRef.current.state.map.center.lng(),
    };
    setMapCenter(currentCenter);
  }

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

    //Return stalls filtered by selected filters
    return stalls.filter((stall) => {
      if (filters.buttonFilters["Open now"]) {
        if (!isOpen(stall.openTimes)) return false;
      }
      if (filters.buttonFilters["Items in stock"]) {
        if (stall.inStock.length < 1) return false;
      }
      if (filters.buttonFilters.Organic) {
        if (!stall.organic) return false;
      }
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

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
      <div className="search-results">
        {resultsView === "map" && (
          <>
            <GoogleMap
              ref={mapRef}
              zoom={13}
              center={mapCenter}
              mapContainerClassName="map"
              clickableIcons={false}
              onClick={() => setSelectedStall({})}
              options={{ disableDefaultUI: true }}
              // onIdle={handleOnIdol}
            >
              {console.log("map")}
              <Markers
                stallsWithinMapBounds={filteredStalls}
                selectedStall={selectedStall}
                setSelectedStall={setSelectedStall}
              />
            </GoogleMap>
            {selectedStall.stallId && (
              <StallPreview
                selectedStall={selectedStall}
                setSelectedStall={setSelectedStall}
                updateMapCenter={updateMapCenter}
              />
            )}
          </>
        )}

        {resultsView === "list" && (
          <ResultsList
            setSelectedStall={setSelectedStall}
            stallsList={filteredStalls}
          />
        )}
        <ResultsNav resultsView={resultsView} setResultsView={setResultsView} />
      </div>
    </>
  );
}
