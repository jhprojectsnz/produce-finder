import "./my-stalls.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import UpdateItemModal from "../../components/update-item-modal/update-item-modal";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function MyStalls() {
  const { currentUser, stalls, setStalls } = useUserContext();

  const [userStalls, setUserStalls] = useState([]);

  useEffect(() => {
    //Fetch the stalls associated with the user from the database here

    //Code below to allow front end to function until backend/database is added
    const userStalls = stalls.filter((stall) => stall.ownerId === currentUser);
    setUserStalls(userStalls);
  }, [currentUser, stalls]);

  const [displayItemModal, setDisplayItemModal] = useState(false);

  function handleDeleteItem(stallIndex, itemIndex) {
    setStalls((prev) =>
      prev.map((stall, index) => {
        return index === stallIndex
          ? {
              ...stall,
              inStock: stall.inStock.filter((item, index) => {
                return index != itemIndex;
              }),
            }
          : stall;
      })
    );
  }

  return (
    <section className="my-stall-container">
      <h2>My Stalls</h2>
      {userStalls.map((stall, stallIndex) => {
        return (
          <div className="stall-update-container" key={stall.name}>
            <h3>{stall.name}</h3>
            <div className="update-instock-container">
              <h5>In Stock:</h5>
              {stall.inStock.map((item, itemIndex) => (
                <div className="update-item-container" key={item.item}>
                  <p>
                    {item.amount.length > 1
                      ? `${item.item} (${item.amount})`
                      : item.item}
                  </p>
                  <p>{item.price}</p>
                  <FaEdit
                    className="update-icon"
                    onClick={() =>
                      setDisplayItemModal({
                        stallIndex: stallIndex,
                        itemIndex: itemIndex,
                      })
                    }
                  />
                  <FaRegTrashAlt
                    className="update-icon"
                    onClick={() => handleDeleteItem(stallIndex, itemIndex)}
                  />
                </div>
              ))}
              <button
                className="update-add-btn"
                onClick={() =>
                  setDisplayItemModal({
                    stallIndex: stallIndex,
                    itemIndex: null,
                  })
                }
              >
                Add
              </button>
            </div>
            <div className="update-btn-container">
              <Link to={`/form/${stall.stallId}`} className="update-btn">
                Edit details
              </Link>
              <button className="update-btn">View preview</button>
              <button className="update-btn">Edit details</button>
            </div>
          </div>
        );
      })}
      <button className="add-stall-btn">Add Stall</button>
      {displayItemModal && (
        <UpdateItemModal
          stallIndex={displayItemModal.stallIndex}
          itemIndex={displayItemModal.itemIndex}
          stalls={stalls}
          setStalls={setStalls}
          setDisplayItemModal={setDisplayItemModal}
        />
      )}
    </section>
  );
}
