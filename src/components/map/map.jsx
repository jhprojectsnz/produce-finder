import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

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

  const onLoad = (map) => {
    console.log("onload");
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: mapCenter,
      keyword: "orchard",
      radius: 10000,
    };
    service.nearbySearch(request, (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log("places search");
        setPlaces(results);
      }
    });
  };

  return (
    <>
      <GoogleMap
        zoom={13}
        center={mapCenter}
        mapContainerClassName="map"
        clickableIcons={false}
        onClick={() => setSelectedStall({})}
        options={{ disableDefaultUI: true }}
        onLoad={onLoad}
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
        {places.map((place) => (
          <MarkerF
            key={place.name}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
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
