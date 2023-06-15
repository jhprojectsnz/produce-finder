import "./stall-details.css";
import { BiArrowBack, BiHeart } from "react-icons/bi";
import isOpen from "../../functions/isOpen";
import timeToAmPm from "../../functions/timeToAmPm";

export default function StallDetails({ selectedStall, setShowStallDetails }) {
  const stallIsOpen = isOpen(selectedStall.openTimes);
  console.log(stallIsOpen);

  return (
    <section className="stall-details">
      <div
        className="stall-details-btn back-btn"
        onClick={() => setShowStallDetails(false)}
      >
        <BiArrowBack className="color-dark" />
      </div>
      <div className="stall-details-btn fav-btn">
        <BiHeart className="color-dark" />
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
        <p className="stall-likes">{`${selectedStall.likes} likes`}</p>
        <div className="stall-address">
          253 Glenfield Road, Birkenhead, Auckland
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
          <h3>About</h3>
          <p>{selectedStall.about}</p>
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
          <h3>In Stock Now</h3>
          <div className="stall-item-container">
            <p>Fejoas (500g)</p>
            <p>$6</p>
          </div>
          <div className="stall-item-container">
            <p>Apples (1kg)</p>
            <p>$3</p>
          </div>
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
          <h3>Opening hours</h3>
          {selectedStall.openTimes.map((day) => {
            if (!day.open)
              return (
                <div className="stall-time-container">
                  <p>{day.day}</p>
                  <p>Closed</p>
                </div>
              );

            return (
              <div className="stall-time-container">
                <p>{day.day}</p>
                <p>{`${timeToAmPm(day.open)} - ${timeToAmPm(day.close)}`}</p>
              </div>
            );
          })}
        </div>
        <div className="line-separator" />
        <div className="stall-text-subsection">
          <h3>Contact</h3>
          <p>Phone: 09 123 4567</p>
        </div>
      </div>
    </section>
  );
}
