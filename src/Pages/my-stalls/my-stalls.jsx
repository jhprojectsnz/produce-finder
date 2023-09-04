import "./my-stalls.css";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import UpdateItemModal from "../../components/update-item-modal/update-item-modal";
import { useUserContext } from "../../context/UserContext";
import RemoveStallModal from "../../components/remove-stall-modal/remove-stall-modal";
import ButtonStd from "../../components/button-std/button-std";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../../components/section-heading/section-heading";
import ModalLayout from "../../components/modal-layout/modal-layout";

export default function MyStalls({ setSelectedStall }) {
  const { currentUser, stalls, setStalls } = useUserContext();
  const navigate = useNavigate();

  const [userStalls, setUserStalls] = useState([]);
  const [displayItemModal, setDisplayItemModal] = useState(false);
  const [displayRemoveStallModal, setDisplayRemoveStallModal] = useState(false);

  useEffect(() => {
    // Check if there is a current user, otherwise redirect to login page
    if (currentUser.userId) {
      // In full version - fetch the stalls associated with the user from the database here

      // Code below to allow front-end to function until back-end/database is added
      const userStalls = stalls.filter(
        (stall) => stall.ownerId === currentUser.userId
      );
      setUserStalls(userStalls);
    } else {
      navigate("/login");
    }
  }, [currentUser, stalls]);

  // This function runs when bin icon next to an item (fruit or vegetable) is clicked
  // The stalls array in context is updated, with the clicked item removed from the relevant stall
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

  //This function runs when "Remove"  button within the remove stall modal is clicked
  //It will remove the selected stall from the stalls array stored in context
  function handleDeleteStall(selectedStallId) {
    setStalls((prev) =>
      prev.filter((stall) => stall.stallId != selectedStallId)
    );
    setDisplayRemoveStallModal(false);
  }

  return (
    <section className="my-stalls">
      <SectionHeading>My Stalls</SectionHeading>
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
        <ModalLayout>
          <UpdateItemModal
            stallId={displayItemModal.stallId}
            itemIndex={displayItemModal.itemIndex}
            setDisplayItemModal={setDisplayItemModal}
          />
        </ModalLayout>
      )}
      {displayRemoveStallModal && (
        <ModalLayout>
          <RemoveStallModal
            stallToRemove={displayRemoveStallModal}
            setDisplayRemoveStallModal={setDisplayRemoveStallModal}
            handleDeleteStall={handleDeleteStall}
          />
        </ModalLayout>
      )}
    </section>
  );
}
