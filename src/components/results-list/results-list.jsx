import "./results-list.css";
import locations from "../../data/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ResultsList() {
  //Replace variable below with search term once search is set up
  const searchTerm = "Auckland";

  return (
    <div className="results-list">
      <h3 className="search-summary">Locations near "{searchTerm}"</h3>
      {locations.map((location) => (
        <div className="result-container" key={location.id}>
          <img className="result-image" src={location.img} />
          <div className="result-text-container">
            <div className="result-title-container">
              <h5 className="result-title">{location.name}</h5>
              <FaRegHeart className="result-fav-icon" />
            </div>
            <p className="result-text">{location.items.join(", ")}</p>
            <p className="result-status">Open</p>
          </div>
        </div>
      ))}
    </div>
  );
}
