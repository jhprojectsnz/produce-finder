import "./markers.css";
import { MarkerF } from "@react-google-maps/api";

export default function Markers({
  stallsWithinMapBounds,
  selectedStall,
  setSelectedStall,
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

  console.log(stallsWithinMapBounds);
  return stallsWithinMapBounds.map((stall) => (
    <MarkerF
      key={stall.stallId}
      position={{
        lat: stall.location.lat,
        lng: stall.location.lng,
      }}
      options={{
        icon:
          stall.stallId === selectedStall.stallId ? selectedIcon : markerIcon,
      }}
      onClick={() => {
        setSelectedStall(stall);
      }}
    />
  ));
}
