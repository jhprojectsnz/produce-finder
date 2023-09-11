import "./update-item-modal.css";

import { useState } from "react";
import { useUserContext } from "../../context/UserContext";

import ModalLayout from "../modal-layout/modal-layout";
import ButtonStd from "../button-std/button-std";

export default function UpdateItemModal({
  stallId,
  itemIndex,
  itemForUpdate,
  setDisplayItemModal,
}) {
  const { setStalls } = useUserContext();

  // Store an updated version of the item data in state
  // Initiate with the current item data or an empty version
  const [updatedItem, setUpdatedItem] = useState(
    itemForUpdate || { item: "", amount: "", price: "" }
  );
  const [showError, setShowError] = useState(false);

  // Om submit - Update the stall with the new data for this item
  function handleSubmit() {
    // Check if name has been entered, if not show error message
    if (updatedItem.item.length < 1) {
      setShowError(true);
      return;
    }
    if (itemForUpdate) {
      setStalls((prev) =>
        prev.map((stall) => {
          return stall.stallId === stallId
            ? {
                ...stall,
                inStock: stall.inStock.map((item, index) => {
                  return index === itemIndex ? updatedItem : item;
                }),
              }
            : stall;
        })
      );
    } else {
      setStalls((prev) =>
        prev.map((stall) => {
          return stall.stallId === stallId
            ? {
                ...stall,
                inStock: [...stall.inStock, updatedItem],
              }
            : stall;
        })
      );
    }
    setDisplayItemModal(false);
  }

  // State variable updatedItem used to keep track of new data for this item
  function handleInputChange(e) {
    const inputName = e.target.name;
    const newValue = e.target.value;
    setUpdatedItem((prev) => ({ ...prev, [inputName]: newValue }));
  }

  return (
    <ModalLayout>
      <h5>Item details</h5>
      <div className="update-item-input-container">
        <label htmlFor="item">Name</label>
        <input
          className="text-input"
          type="text"
          name="item"
          required
          value={updatedItem.item}
          onChange={handleInputChange}
        />
      </div>
      <div className="update-item-input-container">
        <label htmlFor="amount">Units for sale</label>
        <input
          className="text-input"
          type="text"
          name="amount"
          placeholder="each, 1 kg, small bag ..."
          value={updatedItem.amount}
          onChange={handleInputChange}
        />
      </div>
      <div className="update-item-input-container">
        <label htmlFor="price">Price</label>
        <input
          className="text-input"
          type="text"
          name="price"
          value={updatedItem.price}
          onChange={handleInputChange}
        />
      </div>
      {showError && (
        <p className="item-update-error">New item must include a name</p>
      )}
      <div className="item-update-btn-container">
        <ButtonStd
          appearance="light"
          handleClick={() => setDisplayItemModal(false)}
        >
          Cancel
        </ButtonStd>
        <ButtonStd appearance="dark" handleClick={handleSubmit}>
          Submit
        </ButtonStd>
      </div>
    </ModalLayout>
  );
}
