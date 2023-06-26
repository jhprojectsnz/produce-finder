import "./home.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import homeBackground from "../../assets/home-background.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ setMapCenter }) {
  //Variable to store search box ref
  const [searchBox, setSearchBox] = useState(null);

  //could try to change this so there are less rerenders on loading
  //avoid using state to store searchbox?
  const onSearchBoxLoad = (ref) => setSearchBox(ref);

  //Run whenever a new place is entered into the search bar
  //Uses the location of the place searched to update map center
  function placesChanged() {
    if (!searchBox) return;
    const firstPlace = searchBox.getPlace();
    setMapCenter({
      lat: firstPlace.geometry.location.lat(),
      lng: firstPlace.geometry.location.lng(),
    });
  }

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
      <Autocomplete
        onLoad={onSearchBoxLoad}
        onPlaceChanged={placesChanged}
        restrictions={{ country: "nz" }}
      >
        <input
          type="text"
          placeholder="Enter address, city or postcode..."
          className="home-search-input"
        />
      </Autocomplete>
      <Link to="/results/map" className="home-search-btn">
        Search <BiSearchAlt className="home-search-icon" />
      </Link>
    </section>
  );
}
