import "./stall-preview.css";
import { FaTimes } from "react-icons/fa";
import isOpen from "../../functions/isOpen";

export default function StallPreview({
  selectedStall,
  setSelectedStall,
  setShowStallDetails,
}) {
  const stallIsOpen = isOpen(selectedStall.openTimes);

  return (
    <div
      className="info-window-container"
      onClick={() => setShowStallDetails(true)}
    >
      <FaTimes
        className="close-btn"
        onClick={(e) => {
          setSelectedStall({});
          e.stopPropagation();
        }}
      />
      <img className="info-image" src={selectedStall.img} />
      <div className="info-text-container">
        <h5 className="info-title">{selectedStall.name}</h5>
        <p className="info-text">
          {selectedStall.inStock.length === 0
            ? "Out of stock"
            : selectedStall.inStock.map((item) => item.item).join(", ")}
        </p>
        <p
          className="info-status"
          style={{ color: stallIsOpen ? "green" : "red" }}
        >
          {stallIsOpen ? "Open" : "Closed"}
        </p>
      </div>
    </div>
  );
}
