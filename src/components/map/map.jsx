import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import locations from "../../data/data";
import { useState } from "react";

// google maps libraries must be assigned outside of the component to avoid error
// array should not be passed directly to the libraries prop
const libraries = ["places"];

function Map({ selectedStall, setSelectedStall, setShowStallDetails }) {
  const [center, setCenter] = useState({
    lat: -36.73198150428723,
    lng: 174.47731409214202,
  });

  const [searchBox, setSearchBox] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
    libraries: libraries,
  });

  //if statement below must come before the marker icons - google.maps.Point() not accessable if map hasn't loaded
  if (!isLoaded) return <div>Loading...</div>;

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

  function placesChanged() {
    if (!searchBox) return;
    let firstPlace = searchBox.getPlaces()[0];
    console.log(
      firstPlace.geometry.location.lng(),
      firstPlace.geometry.location.lat()
    );
  }
  //could try to change this so there are less rerenders on loading
  //avoid using state to store searchbox?
  const onLoad = (ref) => setSearchBox(ref);

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map"
        clickableIcons={false}
        onClick={() => setSelectedStall({})}
        options={{ disableDefaultUI: true }}
      >
        <StandaloneSearchBox
          className="standalone"
          onLoad={onLoad}
          onPlacesChanged={placesChanged}
        >
          <input
            type="text"
            placeholder="standalone"
            style={{
              position: `fixed`,
              top: `30%`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `10px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </StandaloneSearchBox>
        {console.log("map")}
        {locations.map((location) => (
          <MarkerF
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            options={{
              icon:
                location.id === selectedStall.id ? selectedIcon : markerIcon,
            }}
            onClick={() => {
              setSelectedStall(location);
              setCenter({ lat: location.lat, lng: location.lng });
            }}
          />
        ))}
      </GoogleMap>
      {selectedStall.id && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
          setShowStallDetails={setShowStallDetails}
        />
      )}
    </>
  );
}

export default Map;
