import "./location-search.css";

import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function LocationSearch({
  setLastSearchLocation,
  setMapDetails,
  lastSearchLocation,
}) {
  const autocompleteRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState();
  const placesOptions = { componentRestrictions: { country: "nz" } };
  useEffect(() => {
    if (autocompleteRef.current && !autocomplete) {
      setAutocomplete(
        new google.maps.places.Autocomplete(
          autocompleteRef.current,
          placesOptions
        )
      );
    }
  }, []);

  function handleSearch() {
    const place = autocomplete.getPlace();
    setMapDetails((prev) => ({
      ...prev,
      center: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    }));
    setLastSearchLocation(place.formatted_address);
  }

  return (
    <>
      <input
        ref={autocompleteRef}
        type="text"
        placeholder="Enter address, city or postcode..."
        className="home-search-input"
        defaultValue={lastSearchLocation}
      />
      <Link
        to="/results/map"
        className="home-search-btn"
        onClick={handleSearch}
      >
        Search <BiSearchAlt className="home-search-icon" />
      </Link>
    </>
  );
}
