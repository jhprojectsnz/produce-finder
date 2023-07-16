import "./my-stalls.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import UpdateItemModal from "../../components/update-item-modal/update-item-modal";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import RemoveStallModal from "../../components/remove-stall-modal/remove-stall-modal";

export default function MyStalls({ setSelectedStall }) {
  const { currentUser, stalls, setStalls } = useUserContext();

  const [userStalls, setUserStalls] = useState([]);
  const [displayRemoveStallModal, setDisplayRemoveStallModal] = useState(false);

  useEffect(() => {
    //Fetch the stalls associated with the user from the database here

    //Code below to allow front end to function until backend/database is added
    const userStalls = stalls.filter(
      (stall) => stall.ownerId === currentUser.userId
    );
    setUserStalls(userStalls);
  }, [currentUser, stalls]);

  const [displayItemModal, setDisplayItemModal] = useState(false);

  function handleDeleteItem(itemIndex, stallId) {
    setStalls((prev) =>
      prev.map((stall, index) => {
        return stall.stallId === stallId
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
      {userStalls.map((stall) => {
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
                        stallId: stall.stallId,
                        itemIndex: itemIndex,
                      })
                    }
                  />
                  <FaRegTrashAlt
                    className="update-icon"
                    onClick={() => handleDeleteItem(itemIndex, stall.stallId)}
                  />
                </div>
              ))}
              <button
                className="update-add-btn"
                onClick={() =>
                  setDisplayItemModal({
                    stallId: stall.stallId,
                    itemIndex: null,
                  })
                }
              >
                Add item
              </button>
            </div>
            <div className="update-btn-container">
              <button
                className="update-btn delete-stall"
                onClick={() => setDisplayRemoveStallModal(stall)}
              >
                Remove
              </button>
              <Link to={`/form/${stall.stallId}`} className="update-btn">
                Edit details
              </Link>
              <Link
                to={"/details"}
                className="update-btn"
                onClick={() => setSelectedStall(stall)}
              >
                Preview
              </Link>
            </div>
          </div>
        );
      })}
      <Link to="/form" className="add-stall-btn">
        Add Stall
      </Link>
      {displayItemModal && (
        <UpdateItemModal
          stallId={displayItemModal.stallId}
          itemIndex={displayItemModal.itemIndex}
          setDisplayItemModal={setDisplayItemModal}
        />
      )}
      {displayRemoveStallModal && (
        <RemoveStallModal
          removeStall={displayRemoveStallModal}
          setDisplayRemoveStallModal={setDisplayRemoveStallModal}
          setUserStalls={setUserStalls}
        />
      )}
    </section>
  );
}
