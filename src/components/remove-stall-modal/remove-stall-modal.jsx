import "./remove-stall-modal.css";

import { useUserContext } from "../../context/UserContext";

import ButtonStd from "../button-std/button-std";
import ModalLayout from "../modal-layout/modal-layout";

export default function RemoveStallModal({
  stallToRemove,
  setDisplayRemoveStallModal,
}) {
  const { setStalls } = useUserContext();

  // Runs when "Remove"  button is clicked
  // It will remove the selected stall from the stalls array stored in context
  function handleDeleteStall(stallToRemoveId) {
    setStalls((prev) =>
      prev.filter((stall) => stall.stallId != stallToRemoveId)
    );
    setDisplayRemoveStallModal(false);
  }

  return (
    <ModalLayout>
      <h5>Remove Stall</h5>
      <p>
        {"Are you sure you want to permanently remove "}
        <strong>{stallToRemove.name}</strong>?
      </p>
      <div className="remove-stall-btn-container">
        <ButtonStd
          options={["light"]}
          handleClick={() => setDisplayRemoveStallModal(false)}
        >
          Back
        </ButtonStd>
        <ButtonStd
          options={["red"]}
          handleClick={() => handleDeleteStall(stallToRemove.stallId)}
        >
          Remove
        </ButtonStd>
      </div>
    </ModalLayout>
  );
}
