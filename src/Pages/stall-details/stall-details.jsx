import "./stall-details.css";
import { BiArrowBack, BiHeart } from "react-icons/bi";
import isOpen from "../../functions/isOpen";
import timeToAmPm from "../../functions/timeToAmPm";
import { useNavigate } from "react-router-dom";

export default function StallDetails({ selectedStall }) {
  const stallIsOpen = isOpen(selectedStall.openTimes);
  const navigate = useNavigate();

  return (
    <section className="stall-details">
      <button
        className="stall-details-btn back-btn"
        onClick={() => navigate(-1)}
      >
        <BiArrowBack className="color-dark" />
      </button>
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
          {selectedStall.inStock.length === 0 ? (
            <p>Currently out of Stock</p>
          ) : (
            selectedStall.inStock.map((item) => (
              <div
                className="stall-item-container"
                key={`${selectedStall.id}-${item.item}`}
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
          {selectedStall.openTimes.map((day) => {
            return (
              <div
                className="stall-time-container"
                key={`${selectedStall.id}-${day.day}`}
              >
                <p>{day.day}</p>
                <p>
                  {day.open
                    ? `${timeToAmPm(day.open)} - ${timeToAmPm(day.close)}`
                    : "Closed"}
                </p>
              </div>
            );
          })}
        </div>
        {selectedStall.contactDetails && (
          <>
            <div className="line-separator" />
            <div className="stall-text-subsection">
              <h3>Contact</h3>
              {Object.keys(selectedStall.contactDetails).map((contact) => (
                <p
                  key={selectedStall.contactDetails[contact]}
                >{`${contact}: ${selectedStall.contactDetails[contact]}`}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
