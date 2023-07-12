import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useUserContext } from "../../context/UserContext";
import { useState, useRef } from "react";
import convertPlaceToStall from "../../functions/convertPlaceToStall";

function Map({ selectedStall, setSelectedStall, setMapCenter, mapCenter }) {
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

  const { stalls } = useUserContext();
  const [places, setPlaces] = useState([]);

  console.log("render");

  //Set a ref for the google map so it can be accessed by other functions
  const mapRef = useRef(null);

  //This function will run after user finishes zooming or scrolling the map
  function handleOnIdol() {
    //Find the new center of the map
    const newCenter = {
      lat: mapRef.current.state.map.center.lat(),
      lng: mapRef.current.state.map.center.lng(),
    };
    console.log("idle", newCenter);
    //Access the PlacesService required to do a nearby search
    const service = new google.maps.places.PlacesService(
      mapRef.current.state.map
    );

    //Set request parameters for the nearby search
    const request = {
      location: newCenter,
      keyword: "farm",
      radius: 10000,
    };
    //Perform nearby search and save results to state
    service.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        const placesAsStalls = results.map((place) =>
          convertPlaceToStall(place)
        );
        console.log(placesAsStalls);
        setPlaces(placesAsStalls);
      }
    });
  }

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
        {stalls.map((stall) => (
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
              setMapCenter({
                lat: stall.location.lat,
                lng: stall.location.lng,
              });
            }}
          />
        ))}
        {places.map((stall) => (
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
              setMapCenter({
                lat: stall.location.lat,
                lng: stall.location.lng,
              });
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

export default Map;
