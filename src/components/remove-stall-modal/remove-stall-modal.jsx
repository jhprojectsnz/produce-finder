import "./remove-stall-modal.css";

export default function RemoveStallModal({
  removeStall,
  setUserStalls,
  setDisplayRemoveStallModal,
}) {
  function handleDeleteStall() {
    setUserStalls((prev) => {
      console.log(prev);
      return prev.filter((stall) => stall.stallId != removeStall.stallId);
    });
    setDisplayRemoveStallModal(false);
  }

  return (
    <div className="update-item-modal-container">
      <div className="update-item-modal-content">
        <h5>Remove Stall</h5>
        <p>
          Are you sure you want to permenantly remove{" "}
          <strong>{removeStall.name}</strong> ?
        </p>
        <div className="item-update-btn-container">
          <button
            className="item-update-btn item-update-cancel"
            onClick={() => setDisplayRemoveStallModal(false)}
          >
            Back
          </button>
          <button
            className="item-update-btn remove-stall-btn"
            onClick={handleDeleteStall}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
