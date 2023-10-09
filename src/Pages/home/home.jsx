import "./home.css";

import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import PopularStalls from "../../components/popular-stalls/popular-stalls";
import About from "../../components/about/about";
import LocationSearch from "../../components/location-search/location-search";

export default function Home({ setMapDetails, setSelectedStall }) {
  // Location used to find current pathname
  const location = useLocation();
  const navigate = useNavigate();

  // If URL contains "/about" on mount scroll to the about section
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

  // This function is run when user picks a location from the location search suggestions
  function handleLocationSelected(location) {
    if (location) {
      setMapDetails((prev) => ({
        ...prev,
        center: {
          lat: location.geometry.location.lat(),
          lng: location.geometry.location.lng(),
        },
      }));
    }
  }

  return (
    <div className="homepage">
      <section className="hero">
        <div className="home-main-text">
          <h2>Fresh fruit and vegetables</h2>
          <h2>Direct from the grower</h2>
          <p>Find produce stalls and shops near you</p>
        </div>
        <div className="home-search-container">
          <LocationSearch
            onPlacesChanged={handleLocationSelected}
            placeholder={"Enter address, city or postcode..."}
          />
          <button
            className="home-search-btn"
            onClick={() => navigate("/results/map")}
          >
            Search <BiSearchAlt className="home-search-icon" />
          </button>
        </div>
      </section>
      <PopularStalls setSelectedStall={setSelectedStall} />
      <About />
    </div>
  );
}
