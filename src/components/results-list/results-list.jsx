import "./results-list.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import isOpen2 from "../../functions/isOpen2";
import { Link } from "react-router-dom";

export default function ResultsList({ setSelectedStall, stallList }) {
  return (
    <div className="results-list">
      {stallList.map((location) => {
        let stallIsOpen = isOpen2(location.openTimes);

        return (
          <Link
            to="/details"
            className="result-container"
            key={location.id}
            onClick={() => {
              setSelectedStall(location);
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
          </Link>
        );
      })}
    </div>
  );
}
