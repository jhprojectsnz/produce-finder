import "./results-list.css";

import React from "react";
import { useNavigate } from "react-router-dom";

import isOpen from "../../functions/isOpen";
import FavouriteButton from "../favourite-button/favourite-button";

export default function ResultsList({ setSelectedStall, stallsList }) {
  const navigate = useNavigate();
  return (
    <div className="results-list">
      {stallsList.map((stall) => {
        let stallIsOpen = isOpen(stall.openTimes);

        return (
          <div
            className="result-container"
            key={stall.stallId}
            onClick={() => {
              setSelectedStall(stall);
              navigate("/details");
            }}
          >
            {/* Need to add extra dot to the src address for the image below to access the images folder */}
            <img className="result-image" src={`.${stall.img}`} />
            <div className="result-text-container">
              <div className="result-title-container">
                <h5 className="result-title">{stall.name}</h5>
                <FavouriteButton
                  stallId={stall.stallId}
                  buttonStyle={"plain"}
                />
              </div>
              <p className="result-text">
                {stall.inStock.length > 0
                  ? stall.inStock.map((item) => item.item).join(", ")
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
