import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useRef } from "react";
import convertPlaceToStall from "../../functions/convertPlaceToStall";

export default function Map({
  selectedStall,
  setSelectedStall,
  setMapCenter,
  mapCenter,
  stallsInMapBounds,
  setStallsInMapBounds,
}) {
  const markerIcon = {
    path: "M 172.268 501.67 C 26.97 291.031 0 269.413 0 192 C 0 85.961 85.961 0 192 0 s 192 85.961 192 192 c 0 77.413 -26.97 99.031 -172.268 309.67 c -9.535 13.774 -29.93 13.773 -39.464 0 Z M 192 272 c 44.183 0 80 -35.817 80 -80 s -35.817 -80 -80 -80 s -80 35.817 -80 80 s 35.817 80 80 80 Z",
    fillColor: "red",
    fillOpacity: 1,
    scale: 0.06,
    anchor: new google.maps.Point(200, 500),
  };

  const selectedIcon = {
    path: "M 172.268 501.67 C 26.97 291.031 0 269.413 0 192 C 0 85.961 85.961 0 192 0 s 192 85.961 192 192 c 0 77.413 -26.97 99.031 -172.268 309.67 c -9.535 13.774 -29.93 13.773 -39.464 0 Z M 192 272 c 44.183 0 80 -35.817 80 -80 s -35.817 -80 -80 -80 s -80 35.817 -80 80 s 35.817 80 80 80 Z",
    fillColor: "blue",
    fillOpacity: 1,
    scale: 0.08,
    anchor: new google.maps.Point(200, 500),
  };

  //Access stalls data and setStalls from context
  //This is a SUBSTITUTE FOR ACCESSING DATABASE - update later when database set up
  const { stalls, setStalls } = useUserContext();

  //Get google map component as a ref
  const mapRef = useRef(null);

  // function filterStallsWithinBounds(mapRef) {
  //   const mapBounds = mapRef.current.state.map.getBounds();
  //   const stallsInNewMapBounds = stalls.filter((stall) =>
  //     mapBounds.contains(
  //       new google.maps.LatLng(stall.location.lat, stall.location.lng)
  //     )
  //   );
  //   setStallsInMapBounds(stallsInNewMapBounds);
  // }

  function searchNewStallsInBounds(mapRef) {
    //Access the PlacesService required to do a nearby search
    const service = new google.maps.places.PlacesService(
      mapRef.current.state.map
    );

    const mapBounds = mapRef.current.state.map.getBounds();

    //Set request parameters for the nearby search
    const request = {
      keyword: "farm",
      bounds: mapBounds,
    };
    //Perform nearby search, convert places to stalls and then save new stalls to context
    service.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        setStalls((prevStalls) => {
          //Create a set containing IDs of all current stalls
          //Allows for a quick check if new places are already in stalls data
          const currentStallIds = new Set();
          prevStalls.forEach((stall) => currentStallIds.add(stall.stallId));
          //Filter out places that are already in stalls data
          //Then convert the places data to dummy stalls data
          const newPlacesAsStalls = results
            .filter((place) => !currentStallIds.has(place.place_id))
            .map((place) => convertPlaceToStall(place));
          //Add the new dummy stalls to the current stalls data
          return [...prevStalls, ...newPlacesAsStalls];
        });
      }
    });
  }

  function handleOnIdol() {
    console.log(mapRef);

    // Filter all stalls to those within new map bounds and save to state
    // Stalls that are within the current map bounds will be shown as markers and appear in the results list
    if (mapRef) {
      searchNewStallsInBounds(mapRef);
    }
  }
  console.log(mapRef);
  // console.log(mapRef.current.GoogleMap)

  console.log(stalls);
  console.log(stallsInMapBounds);

  return (
    <>
      <GoogleMap
        ref={mapRef}
        zoom={13}
        center={mapCenter}
        mapContainerClassName="map"
        clickableIcons={false}
        onClick={() => setSelectedStall({})}
        options={{ disableDefaultUI: true }}
        onIdle={handleOnIdol}
      >
        {console.log("map")}
        {stallsInMapBounds.length > 0 &&
          stallsInMapBounds.map((stall) => (
            <MarkerF
              key={stall.stallId}
              position={{ lat: stall.location.lat, lng: stall.location.lng }}
              options={{
                icon:
                  stall.stallId === selectedStall.stallId
                    ? selectedIcon
                    : markerIcon,
              }}
              onClick={() => {
                setSelectedStall(stall);
              }}
            />
          ))}
      </GoogleMap>
      {selectedStall.stallId && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      )}
    </>
  );
}

// //Set a ref for the google map so it can be accessed by other functions
// const mapRef = useRef(null);
// // const mapBounds = mapRef.current
// //   ? mapRef.current.state.map.getBounds()
// //   : null;

// //This function will run after user finishes zooming or scrolling the map
// function handleOnIdol() {
//   //Find the new center of the map
//   const newCenter = {
//     lat: mapRef.current.state.map.center.lat(),
//     lng: mapRef.current.state.map.center.lng(),
//   };

//   console.log("idol");
//   //Access the PlacesService required to do a nearby search
//   const service = new google.maps.places.PlacesService(
//     mapRef.current.state.map
//   );

//   //Set request parameters for the nearby search
//   const request = {
//     location: newCenter,
//     keyword: "farm",
//     radius: 10000,
//   };
//   //Perform nearby search, convert places to stalls and then save new stalls to context
//   service.nearbySearch(request, (results, status) => {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       setStalls((prevStalls) => {
//         //Create a set containing IDs of all current stalls
//         //Allows for a quick check if new places are already in stalls data
//         const currentStallIds = new Set();
//         prevStalls.forEach((stall) => currentStallIds.add(stall.stallId));
//         //Filter out places that are already in stalls data
//         //Then convert the places data to dummy stalls data
//         const newPlacesAsStalls = results
//           .filter((place) => !currentStallIds.has(place.place_id))
//           .map((place) => convertPlaceToStall(place));
//         //Add the new dummy stalls to the current stalls data
//         return [...prevStalls, ...newPlacesAsStalls];
//       });
//     }
//   });

//   //If the map has been moved update mapCenter
//   if (JSON.stringify(newCenter) != JSON.stringify(mapCenter)) {
//     setMapCenter(newCenter);
//   }

// console.log(mapBounds);

//Filter all stalls to those within new map bounds and save to state
//Stalls that are within the current map bounds will be shown as markers and appear in the results list
// if (mapBounds) {
//   const stallsInNewMapBounds = stalls.filter((stall) =>
//     mapBounds.contains(
//       new google.maps.LatLng(stall.location.lat, stall.location.lng)
//     )
//   );
//   setStallsInMapBounds(stallsInNewMapBounds);
// }
// }
