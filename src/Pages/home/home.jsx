import "./home.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PopularStalls from "../../components/popular-stalls/popular-stalls";
import About from "../../components/about/about";
import LocationSearch from "../../components/location-search/location-search";

export default function Home({
  setMapDetails,
  lastSearchLocation,
  setLastSearchLocation,
  setSelectedStall,
}) {
  // Location used to find current pathname
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

  return (
    <div className="homepage">
      <section className="hero">
        <div className="home-main-text">
          <h2>Fresh fruit and vegetables</h2>
          <h2>Direct from the grower</h2>
          <p>Find produce stalls and shops near you</p>
        </div>
        <LocationSearch
          setMapDetails={setMapDetails}
          setLastSearchLocation={setLastSearchLocation}
          lastSearchLocation={lastSearchLocation}
        />
      </section>
      <PopularStalls setSelectedStall={setSelectedStall} />
      <About />
    </div>
  );
}
