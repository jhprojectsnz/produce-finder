import "./map.css";
import Markers from "../markers/markers";
import StallPreview from "../stall-preview/stall-preview.jsx";
import { useEffect, useRef } from "react";

export default function Map({
  selectedStall,
  setSelectedStall,
  setMapDetails,
  mapDetails,
  filteredStalls,
}) {
  // Get google map component as a ref
  const mapRef = useRef(null);
  const googleMap = useRef(null);

  // Styles for the Google map - switch of points of interest to make map clearer
  const mapStyles = [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ];

  // First render - initialise google map
  useEffect(() => {
    const map = new google.maps.Map(mapRef.current, {
      center: mapDetails.center,
      zoom: mapDetails.zoom,
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: true,
    });

    // If map created successfully - save to ref and add listeners
    if (map) {
      googleMap.current = map;

      map.addListener("idle", () => {
        if (map) {
          setMapDetails({
            zoom: map.getZoom(),
            center: {
              lat: map.center.lat(),
              lng: map.center.lng(),
            },
            bounds: map.getBounds(),
          });
        }
      });

      map.addListener("click", () => {
        setSelectedStall({});
      });
    }

    // Unmount - remove listeners
    return () => {
      google.maps.event.clearInstanceListeners(map);
    };
  }, []);

  return (
    <>
      <div ref={mapRef} className="map">
        <Markers
          googleMap={googleMap.current}
          filteredStalls={filteredStalls}
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      </div>
      {selectedStall.stallId && (
        <StallPreview
          selectedStall={selectedStall}
          setSelectedStall={setSelectedStall}
        />
      )}
    </>
  );
}
