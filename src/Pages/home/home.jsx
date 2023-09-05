import "./home.css";

import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import PopularStalls from "../../components/popular-stalls/popular-stalls";
import About from "../../components/about/about";
import { useLocation } from "react-router-dom";

export default function Home({
  setMapDetails,
  lastSearchLocation,
  setLastSearchLocation,
  setSelectedStall,
}) {
  // Location used to find current pathname
  const location = useLocation();

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

  // If URL contains "/about" on load scroll to the about section
  // Otherwise scroll to top of homepage
  useEffect(() => {
    if (location.pathname === "/about") {
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({
        behavior: "instant",
      });
      // Need to scroll up 80px to offset navbar
      window.scrollBy(0, -80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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
    <div className="homepage">
      <section className="hero">
        <div className="home-main-text">
          <h2>Fresh fruit and vegetables</h2>
          <h2>Direct from the grower</h2>
          <p>Find produce stalls and shops near you</p>
        </div>
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
      </section>
      <PopularStalls setSelectedStall={setSelectedStall} />
      <About />
    </div>
  );
}
