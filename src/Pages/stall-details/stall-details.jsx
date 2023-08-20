import "./stall-details.css";
import { BiArrowBack } from "react-icons/bi";
import isOpen from "../../functions/isOpen";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "../../components/favourite-button/favourite-button";
import { useMemo, useEffect } from "react";
import CircleBtn from "../../components/cricle-btn/circle-btn";

export default function StallDetails({ selectedStall, setMapDetails }) {
  const navigate = useNavigate();

  //If a user navigates to this page without a stall being selected navigate back on page
  //Most likely cause of this is user moving from details to map, deselecting stall and then clicking back button which navigates details but with no selected stall
  if (!selectedStall.stallId) {
    useEffect(() => navigate(-1), []);
    return <></>;
  }

  const stallIsOpen = useMemo(() => isOpen(selectedStall.openTimes));

  //Create an array of li elements for any stall options that are true
  //If the resulting array contains elements they will be rendered as a list in the about section
  //Stall options should be added to the array below
  const stallOptions = useMemo(() =>
    ["marketStall", "organic", "eftposPayment"]
      .map((stallOption) => {
        const formatText = stallOption
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .toLowerCase();
        return selectedStall[stallOption] ? (
          <li key={formatText}>{formatText}</li>
        ) : null;
      })
      .filter((li) => li)
  );

  function handleAddressClick() {
    console.log(selectedStall);
    setMapDetails((prev) => ({ ...prev, center: selectedStall.location }));
    navigate("/results/map");
  }

  return (
    <section className="stall-details">
      <div className="stall-details-btn-container">
        <CircleBtn
          appearance={"light"}
          handleClick={() => {
            navigate(-1);
          }}
        >
          <BiArrowBack className="color-dark" />
        </CircleBtn>
        <FavouriteButton selectedStall={selectedStall} buttonStyle={true} />
      </div>
      <img className="stall-image" src={selectedStall.img} />
      <div className="stall-details-text">
        <div className="stall-title-container">
          <h2 className="stall-name">{selectedStall.name}</h2>
          <p
            className="stall-status"
            style={{ color: stallIsOpen ? "green" : "red" }}
          >
            {stallIsOpen ? "Open" : "Closed"}
          </p>
        </div>
        <div className="stall-address" onClick={handleAddressClick}>
          {selectedStall.address}
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
          <h3>About</h3>
          {stallOptions.length > 0 && <ul>{stallOptions}</ul>}
          <p>{selectedStall.about}</p>
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
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
        <div className="line-separator" />
        <div className="stall-text-subsection">
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
          <>
            <div className="line-separator" />
            <div className="stall-text-subsection">
              <h3>Contact</h3>
              {Object.keys(selectedStall.contactDetails).map((contact) =>
                selectedStall.contactDetails[contact] ? (
                  <p
                    key={selectedStall.contactDetails[contact]}
                  >{`${contact}: ${selectedStall.contactDetails[contact]}`}</p>
                ) : null
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
