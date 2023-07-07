import "./update-item-modal.css";
import { useState } from "react";

export default function UpdateItemModal({
  stallIndex,
  itemIndex,
  stalls,
  setStalls,
  setDisplayItemModal,
}) {
  //Find the original item data in the stalls data using the stall and item indexs
  const originalItem = Number.isInteger(itemIndex)
    ? stalls[stallIndex].inStock[itemIndex]
    : null;
  //store an updated version of the item data in state
  //initiate with the original data or an empty version if there is no original data
  const [updatedItem, setUpdatedItem] = useState(
    originalItem || { item: "", amount: "", price: "" }
  );
  const [showError, setShowError] = useState(false);

  //This function is run when submit button is clicked
  //Updates the users stalls with the new data for this item
  function handleSubmit(updatedItem, stallIndex, itemIndex) {
    //Check if name has been entered, if not show error message
    if (updatedItem.item.length < 1) {
      setShowError(true);
      return;
    }
    if (Number.isInteger(itemIndex)) {
      setStalls((prev) =>
        prev.map((stall, index) => {
          return index === stallIndex
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
        prev.map((stall, index) => {
          return index === stallIndex
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

  //This function is run when a text field is changed
  //It updates state variable updatedItem to keep track of new data for this item
  function handleInputChange(e) {
    const inputType = e.target.id;
    const newValue = e.target.value;
    setUpdatedItem((prev) => ({ ...prev, [inputType]: newValue }));
  }

  return (
    <div className="update-item-modal-container">
      <div className="update-item-modal-content">
        <h5>Item details</h5>
        <div className="update-item-input-container">
          <label htmlFor="item">Name</label>
          <input
            className="text-input"
            type="text"
            id="item"
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
            id="amount"
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
            id="price"
            name="price"
            value={updatedItem.price}
            onChange={handleInputChange}
          />
        </div>
        {showError && (
          <p className="item-update-error">New item must include a name</p>
        )}
        <div className="item-update-btn-container">
          <button
            className="item-update-btn item-update-cancel"
            onClick={() => setDisplayItemModal(false)}
          >
            Cancel
          </button>
          <button
            className="item-update-btn"
            onClick={() => handleSubmit(updatedItem, stallIndex, itemIndex)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
