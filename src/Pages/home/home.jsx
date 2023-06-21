import "./home.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import homeBackground from "../../assets/home-background.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";

export default function Home({ setMapCenter, mapCenter, setShowResults }) {
  const [searchBox, setSearchBox] = useState(null);
  // const [searchLocation, setSearchLocation] = useState(null);

  function placesChanged() {
    console.log("places");
    if (!searchBox) return;
    let firstPlace = searchBox.getPlaces()[0];
    setMapCenter({
      lat: firstPlace.geometry.location.lat(),
      lng: firstPlace.geometry.location.lng(),
    });
    // console.log(
    //   firstPlace.geometry.location.lng(),
    //   firstPlace.geometry.location.lat()
    // );
  }
  //could try to change this so there are less rerenders on loading
  //avoid using state to store searchbox?
  const onSearchBoxLoad = (ref) => setSearchBox(ref);

  function handleSearch() {
    // console.log(mapCenter);
    if (!mapCenter) return;
    setShowResults(true);
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
      <button className="home-search-btn" onClick={() => handleSearch()}>
        Search <BiSearchAlt className="home-search-icon" />
      </button>
    </section>
  );
}
