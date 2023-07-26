import "./my-stalls.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import UpdateItemModal from "../../components/update-item-modal/update-item-modal";
import { useUserContext } from "../../context/UserContext";
import RemoveStallModal from "../../components/remove-stall-modal/remove-stall-modal";
import ButtonStd from "../../components/button-std/button-std";
import { useNavigate } from "react-router-dom";

export default function MyStalls({ setSelectedStall }) {
  const { currentUser, stalls, setStalls } = useUserContext();
  const navigate = useNavigate();

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
      prev.map((stall) => {
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
              <ButtonStd
                appearance={"red"}
                handleClick={() => setDisplayRemoveStallModal(stall)}
              >
                Remove
              </ButtonStd>
              <ButtonStd
                appearance={"dark"}
                handleClick={() => navigate(`/form/${stall.stallId}`)}
              >
                Edit details
              </ButtonStd>
              <ButtonStd
                appearance={"dark"}
                handleClick={() => {
                  setSelectedStall(stall);
                  navigate("/details");
                }}
              >
                Preview
              </ButtonStd>
            </div>
          </div>
        );
      })}
      <button onClick={() => navigate("/form")} className="add-stall-btn">
        Add Stall
      </button>
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
