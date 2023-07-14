import "./stall-preview.css";
import { FaTimes } from "react-icons/fa";
import isOpen2 from "../../functions/isOpen2";
import { useNavigate } from "react-router-dom";

export default function StallPreview({
  selectedStall,
  setSelectedStall,
  updateMapCenter,
}) {
  const stallIsOpen = isOpen2(selectedStall.openTimes);
  const navigate = useNavigate();

  return (
    <div
      className="info-window-container"
      onClick={() => {
        updateMapCenter();
        navigate("/details");
      }}
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
