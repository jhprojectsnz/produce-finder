import "./stall-preview.css";
import { FaTimes } from "react-icons/fa";

export default function StallPreview({
  selectedStall,
  setSelectedStall,
  setShowStallDetails,
}) {
  return (
    <>
      {selectedStall.id && (
        <div
          className="info-window-container"
          onClick={() => setShowStallDetails(true)}
        >
          <FaTimes
            className="close-btn"
            onClick={(e) => {
              //fix this so it does not trigger parent onClick
              setSelectedStall({});
              e.stopPropagation;
            }}
          />
          <img className="info-image" src={selectedStall.img} />
          <div className="info-text-container">
            <h5 className="info-title">{selectedStall.name}</h5>
            <p className="info-text">{selectedStall.items.join(", ")}</p>
            <p className="info-status">Open</p>
          </div>
        </div>
      )}
    </>
  );
}
