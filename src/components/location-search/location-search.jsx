import "./location-search.css";

import React from "react";
import { useState, useRef, useEffect } from "react";

export default function LocationSearch({
  onPlacesChanged,
  placeholder,
  name,
  initialValue,
}) {
  const inputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState();
  const placesOptions = { componentRestrictions: { country: "nz" } };

  useEffect(() => {
    // Declare listener variable here so that it is accessible to the useEffect return function
    let placesChangedListener;
    // If input element is present but no autocomplete instance => initialise autocomplete and store instance in state
    // Autocomplete stored in state to trigger rerender, adding the autocomplete functionality to the input element
    if (inputRef.current && !autocomplete) {
      const newAutocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        placesOptions,
      );

      placesChangedListener = newAutocomplete.addListener(
        "place_changed",
        () => {
          const place = newAutocomplete.getPlace();
          onPlacesChanged(place);
        },
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
      defaultValue={initialValue}
    />
  );
}
