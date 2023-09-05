import "./home.css";

import { BiSearchAlt } from "react-icons/bi";
import { Autocomplete } from "@react-google-maps/api";
import { useEffect, useState } from "react";
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
  // Variable to store search box ref
  const [searchBox, setSearchBox] = useState(null);
  // Could try to change this so there are less rerenders on loading?
  // Avoid using state to store searchbox?
  const onSearchBoxLoad = (ref) => setSearchBox(ref);

  // Used to find current pathname
  const location = useLocation();

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

  // Run whenever a new place is entered into the search bar
  // Uses the location of the place searched to update map center
  function placesChanged() {
    if (!searchBox) return;
    const place = searchBox.getPlace();

    // If the place searched doesn't have geometry information - do nothing
    if (!place.geometry) return;

    // Update map details with location of place searched
    setMapDetails((prev) => ({
      ...prev,
      center: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    }));

    // Store search location so it can be repopulated if user clicks back to home
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
        {/* <Autocomplete
          onLoad={onSearchBoxLoad}
          onPlaceChanged={placesChanged}
          restrictions={{ country: "nz" }}
        >
          <input
            type="text"
            placeholder="Enter address, city or postcode..."
            className="home-search-input"
            defaultValue={lastSearchLocation}
          />
        </Autocomplete> */}
        <Link to="/results/map" className="home-search-btn">
          Search <BiSearchAlt className="home-search-icon" />
        </Link>
      </section>
      <PopularStalls setSelectedStall={setSelectedStall} />
      <About />
    </div>
  );
}
