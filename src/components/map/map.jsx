import "./map.css";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
// import { locations } from "../../data/data";

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

  return (
    <>
      <GoogleMap
        zoom={13}
        center={mapCenter}
        mapContainerClassName="map"
        clickableIcons={false}
        onClick={() => setSelectedStall({})}
        options={{ disableDefaultUI: true }}
      >
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
              setMapCenter({ lat: location.lat, lng: location.lng });
            }}
          />
        ))}
      </GoogleMap>
      {selectedStall.id && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      )}
    </>
  );
}

export default Map;
