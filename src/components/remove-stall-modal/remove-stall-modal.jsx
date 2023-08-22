import ButtonStd from "../button-std/button-std";
import "./remove-stall-modal.css";

export default function RemoveStallModal({
  stallToRemove,
  setDisplayRemoveStallModal,
  handleDeleteStall,
}) {
  return (
    <div className="remove-stall-modal-container">
      <div className="remove-stall-modal-content">
        <h5>Remove Stall</h5>
        <p>
          {"Are you sure you want to permanently remove "}
          <strong>{stallToRemove.name}</strong> ?
        </p>
        <div className="remove-stall-btn-container">
          <ButtonStd
            appearance="light"
            handleClick={() => setDisplayRemoveStallModal(false)}
          >
            Back
          </ButtonStd>
          <ButtonStd
            appearance="red"
            handleClick={() => handleDeleteStall(stallToRemove.stallId)}
          >
            Remove
          </ButtonStd>
        </div>
      </div>
    </div>
  );
}
