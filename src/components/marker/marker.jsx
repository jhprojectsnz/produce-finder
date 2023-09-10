import { useEffect, useState } from "react";

export default function NewMarker({ position, icon, map, onClick }) {
  const [marker, setMarker] = useState(null);

  // First render - initialise marker and save instance to state
  useEffect(() => {
    const newMarker = new google.maps.Marker({
      position: position,
      icon: icon,
      map: map,
    });
    const clickListener = newMarker.addListener("click", onClick);

    setMarker(newMarker);

    // When unmounted - remove marker from map
    return () => {
      google.maps.event.removeListener(clickListener);
      newMarker.setMap(null);
      setMarker(null);
    };
  }, []);

  // Map instance has changed - add marker to the new map
  useEffect(() => {
    if (marker) marker.setMap(map);
  }, [map]);

  // Icon has changed - update the icon marker
  useEffect(() => {
    if (marker) marker.setOptions({ icon: icon });
  }, [icon]);

  // No JSX required from this component
  return null;
}
