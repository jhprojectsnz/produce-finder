import ButtonStd from "../button-std/button-std";
import "./remove-stall-modal.css";

export default function RemoveStallModal({
  removeStall,
  setUserStalls,
  setDisplayRemoveStallModal,
}) {
  function handleDeleteStall() {
    setUserStalls((prev) => {
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
          <ButtonStd
            appearance="light"
            handleClick={() => setDisplayRemoveStallModal(false)}
          >
            Back
          </ButtonStd>
          <ButtonStd appearance="red" handleClick={handleDeleteStall}>
            Remove
          </ButtonStd>
        </div>
      </div>
    </div>
  );
}
