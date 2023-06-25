import "./home.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import homeBackground from "../../assets/home-background.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ setMapCenter }) {
  const [searchBox, setSearchBox] = useState(null);

  function placesChanged() {
    console.log("places");
    if (!searchBox) return;
    let firstPlace = searchBox.getPlaces()[0];
    setMapCenter({
      lat: firstPlace.geometry.location.lat(),
      lng: firstPlace.geometry.location.lng(),
    });
  }
  //could try to change this so there are less rerenders on loading
  //avoid using state to store searchbox?
  const onSearchBoxLoad = (ref) => setSearchBox(ref);

  return (
    <section className="homepage">
      <MainNavBar />
      <img
        src={homeBackground}
        alt="Home page background"
        className="home-background"
      />
      <div className="home-main-text">
        <h2>Fresh fruit and vegetables</h2>
        <h2>Direct from the grower</h2>
        <p>Find produce stalls and shops near you</p>
      </div>
      <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={placesChanged}
      >
        <input
          type="text"
          placeholder="Enter address, city or postcode..."
          className="home-search-input"
        />
      </StandaloneSearchBox>
      <Link to="/results/map" className="home-search-btn">
        Search <BiSearchAlt className="home-search-icon" />
      </Link>
    </section>
  );
}
