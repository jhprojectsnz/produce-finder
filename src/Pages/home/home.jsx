import "./home.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import homeBackground from "../../assets/home-background.jpg";
import { BiSearchAlt } from "react-icons/bi";

export default function Home() {
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
      <input
        type="text"
        placeholder="Enter address, city or postcode..."
        className="home-search-input"
      />
      <button className="home-search-btn">
        Search <BiSearchAlt className="home-search-icon" />
      </button>
    </section>
  );
}
