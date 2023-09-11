import "./location-search.css";

import { useState, useRef, useEffect } from "react";

export default function LocationSearch({ onPlacesChanged, placeholder, name }) {
  const inputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState();
  const placesOptions = { componentRestrictions: { country: "nz" } };

  // Input element present but no autocomplete instance - initialise autocomplete and save instance in state
  // Save autocomplete to state to trigger rerender, adding the autocomplete to the input element
  useEffect(() => {
    // Declare listener variable here so that it is accessible to the useEffect return function
    let placesChangedListener;

    if (inputRef.current && !autocomplete) {
      const newAutocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        placesOptions
      );

      placesChangedListener = newAutocomplete.addListener(
        "place_changed",
        () => {
          const place = newAutocomplete.getPlace();
          onPlacesChanged(place);
        }
      );

      setAutocomplete(newAutocomplete);
    }

    return () => {
      google.maps.event.removeListener(placesChangedListener);
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className="autocomplete-input"
      name={name || ""}
    />
  );
}
