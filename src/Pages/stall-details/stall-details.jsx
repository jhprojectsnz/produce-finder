import "./stall-details.css";

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import FavouriteButton from "../../components/favourite-button/favourite-button";
import isOpen from "../../functions/isOpen";
import CircleBtn from "../../components/cricle-btn/circle-btn";
import ButtonStd from "../../components/button-std/button-std";

export default function StallDetails({ selectedStall, setMapDetails }) {
  const navigate = useNavigate();

  // If a user navigates to this page without a stall being selected navigate back one page
  // Most likely cause of this is user moving from details to map, deselecting stall and then clicking back button which navigates details but with no selected stall
  if (!selectedStall.stallId) {
    navigate(-1);
    return null;
  }

  const stallIsOpen = isOpen(selectedStall.openTimes);

  // New stall options should be added to the array below
  const stallOptions = ["marketStall", "organic", "eftposPayment"];
  // Create an array of li elements for any stall options that are true. Resulting li are rendered in the about section
  const stallOptionsElements = useMemo(
    () =>
      stallOptions
        .map((stallOption) => {
          // Convert from camel case t0 normal
          const formatText = stallOption
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .toLowerCase();
          // If the stall has this stall option create an li
          return selectedStall[stallOption] ? (
            <li key={formatText}>{formatText}</li>
          ) : null;
        })
        // filter null elements from the array
        .filter((li) => li),
    [selectedStall]
  );

  function handleAddressClick() {
    setMapDetails((prev) => ({
      ...prev,
      center: selectedStall.location,
      zoom: 15,
    }));
    navigate("/results/map");
  }

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <section className="stall-details">
      <div className="stall-details-btn-container">
        <CircleBtn appearance={"light"} handleClick={handleBackClick}>
          <BiArrowBack className="color-dark" />
        </CircleBtn>
        <FavouriteButton
          stallId={selectedStall.stallId}
          buttonStyle={"circle"}
        />
      </div>
      <img className="stall-image" src={selectedStall.img} />
      <div className="stall-title-container left-column row-one">
        <h2 className="stall-name">{selectedStall.name}</h2>
        <p
          className="stall-status"
          style={{ color: stallIsOpen ? "green" : "red" }}
        >
          {stallIsOpen ? "Open" : "Closed"}
        </p>
      </div>
      <div
        className="stall-address left-column row-two"
        onClick={handleAddressClick}
      >
        {selectedStall.address}
      </div>
      <div className="stall-text-subsection left-column row-four">
        <h3>About</h3>
        {stallOptionsElements.length > 0 && <ul>{stallOptionsElements}</ul>}
        <p>{selectedStall.about}</p>
      </div>
      <div className="stall-text-subsection row-three">
        <h3>In Stock Now</h3>
        {selectedStall.inStock.length === 0 ? (
          <p>Currently out of stock</p>
        ) : (
          selectedStall.inStock.map((item) => (
            <div
              className="stall-item-container"
              key={`${selectedStall.stallId}-${item.item}`}
            >
              {item.amount ? (
                <p>{`${item.item} (${item.amount})`}</p>
              ) : (
                <p>{`${item.item}`}</p>
              )}
              {item.price && <p>{item.price}</p>}
            </div>
          ))
        )}
      </div>
      <div className="stall-text-subsection right-column row-four">
        <h3>Opening hours</h3>
        {Object.keys(selectedStall.openTimes).map((day) => {
          return (
            <div
              className="stall-time-container"
              key={`${selectedStall.id}-${day}`}
            >
              <p>{day}</p>
              <p>
                {selectedStall.openTimes[day].open
                  ? `${selectedStall.openTimes[day].openTime} - ${selectedStall.openTimes[day].closeTime}`
                  : "Closed"}
              </p>
            </div>
          );
        })}
      </div>
      {(selectedStall.contactDetails.email ||
        selectedStall.contactDetails.phone) && (
        <div className="stall-text-subsection left-column">
          <h3>Contact</h3>
          {Object.keys(selectedStall.contactDetails).map((contact) =>
            selectedStall.contactDetails[contact] ? (
              <p
                key={selectedStall.contactDetails[contact]}
              >{`${contact}: ${selectedStall.contactDetails[contact]}`}</p>
            ) : null
          )}
        </div>
      )}
      <div className="stall-details-wide-btn-container">
        <ButtonStd
          handleClick={handleBackClick}
          appearance={"light"}
          options={["long"]}
        >
          Back
        </ButtonStd>
        <FavouriteButton stallId={selectedStall.stallId} buttonStyle={"long"} />
      </div>
    </section>
  );
}
