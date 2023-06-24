import "./results-list.css";
import locations from "../../data/data";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import isOpen from "../../functions/isOpen";

export default function ResultsList({
  setSelectedStall,
  setShowStallDetails,
  showStallDetails,
}) {
  return (
    <div className={showStallDetails ? "hide" : "results-list"}>
      {locations.map((location) => {
        let stallIsOpen = isOpen(location.openTimes);

        return (
          <div
            className="result-container"
            key={location.id}
            onClick={() => {
              setSelectedStall(location);
              setShowStallDetails(true);
            }}
          >
            <img className="result-image" src={location.img} />
            <div className="result-text-container">
              <div className="result-title-container">
                <h5 className="result-title">{location.name}</h5>
                <FaRegHeart className="result-fav-icon" />
              </div>
              <p className="result-text">
                {location.inStock.length > 0
                  ? location.inStock.map((item) => item.item).join(", ")
                  : "Out of stock"}
              </p>
              <p
                className="result-status"
                style={{ color: stallIsOpen ? "green" : "red" }}
              >
                {stallIsOpen ? "Open" : "Closed"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
