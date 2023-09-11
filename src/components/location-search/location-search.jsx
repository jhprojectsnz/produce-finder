import "./location-search.css";

import { BiSearchAlt } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LocationSearch({
  setLastSearchLocation,
  setMapDetails,
  lastSearchLocation,
}) {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState();
  const placesOptions = { componentRestrictions: { country: "nz" } };

  // Imput element present but no autocomplete instance - initialise autocomplete and save instance in state
  useEffect(() => {
    if (inputRef.current && !autocomplete) {
      setAutocomplete(
        new google.maps.places.Autocomplete(inputRef.current, placesOptions)
      );
    }
  }, []);

  function handleSearch() {
    const place = autocomplete.getPlace();

    if (place) {
      setMapDetails((prev) => ({
        ...prev,
        center: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      }));
      setLastSearchLocation(place.formatted_address);
    }

    navigate("/results/map");
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter address, city or postcode..."
        className="home-search-input"
        defaultValue={lastSearchLocation}
      />
      <button className="home-search-btn" onClick={handleSearch}>
        Search <BiSearchAlt className="home-search-icon" />
      </button>
    </>
  );
}
