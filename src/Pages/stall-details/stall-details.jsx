import "./stall-details.css";
import { BiArrowBack, BiHeart } from "react-icons/bi";

export default function StallDetails({ selectedStall, setSelectedStall }) {
  return (
    <section className="stall-details">
      <div
        className="stall-details-btn back-btn"
        onClick={() => setSelectedStall({})}
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
          <p className="stall-status">Open</p>
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
          <div className="stall-time-container">
            <p>Monday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Tuesday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Wednesday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Thursday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Friday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Saturday</p>
            <p>10 am - 5 pm</p>
          </div>
          <div className="stall-time-container">
            <p>Sunday</p>
            <p>10 am - 5 pm</p>
          </div>
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
