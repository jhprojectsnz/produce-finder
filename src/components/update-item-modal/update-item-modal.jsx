import "./update-item-modal.css";
import { useState } from "react";

export default function UpdateItemModal({
  stallIndex,
  itemIndex,
  stalls,
  setStalls,
  setDisplayItemModal,
}) {
  const originalItem = stalls[stallIndex].inStock[itemIndex];
  const [updatedItem, setUpdatedItem] = useState(
    originalItem || { item: "", amount: "", price: "" }
  );

  //Run when submit is clicked
  //Updates the users stalls with new data for this
  function handleSubmit(stallIndex, itemIndex, updatedItem) {
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
    setDisplayItemModal(false);
  }

  //Run when text fields are changed
  //updates state variable updatedItem to keep track of new data for this item
  function handleInputChange(e) {
    const inputType = e.target.id;
    const newValue = e.target.value;
    setUpdatedItem((prev) => ({ ...prev, [inputType]: newValue }));
  }

  return (
    <div className="update-item-modal-container">
      <div className="update-item-modal-content">
        <h2>Item details</h2>
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
        <button
          onClick={() => handleSubmit(stallIndex, itemIndex, updatedItem)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
