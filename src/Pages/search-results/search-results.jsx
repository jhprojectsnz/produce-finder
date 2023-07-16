import "./search-results.css";
import SearchBar from "../../components/search-bar/search-bar";
import ResultsNav from "../../components/results-nav/results-nav";
import ResultsList from "../../components/results-list/results-list";
import { useState, useRef, useMemo } from "react";
import { useUserContext } from "../../context/UserContext";
import StallPreview from "../../components/stall-preview/stall-preview";
import { GoogleMap } from "@react-google-maps/api";
// import convertPlaceToStall from "../../functions/convertPlaceToStall";
import Markers from "../../components/markers/markers";

export default function SearchResults({
  setMapCenter,
  mapCenter,
  selectedStall,
  setSelectedStall,
}) {
  //Import all stalls from context
  const { stalls, setStalls } = useUserContext();

  const [resultsView, setResultsView] = useState("map");

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

  function updateMapCenter() {
    const currentCenter = {
      lat: mapRef.current.state.map.center.lat(),
      lng: mapRef.current.state.map.center.lng(),
    };
    setMapCenter(currentCenter);
  }

  return (
    <div className="search-results">
      <SearchBar />

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
              stallsWithinMapBounds={stalls}
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
          stallsWithinMapBounds={stallsWithinMapBounds}
        />
      )}
      <ResultsNav resultsView={resultsView} setResultsView={setResultsView} />
    </div>
  );
}
