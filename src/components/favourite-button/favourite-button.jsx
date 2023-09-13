import "./favourite-button.css";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";

import LoginRequiredModal from "../login-required-modal/login-required-modal";
import CircleBtn from "../cricle-btn/circle-btn";
import ButtonStd from "../button-std/button-std";

export default function FavouriteButton({ stallId, buttonStyle }) {
  const { currentUser, setCurrentUser } = useUserContext();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // If a user is logged on check if this stall is a favourite
  const currentUserFavourite = currentUser.userId
    ? currentUser.favouriteStalls.includes(stallId)
    : false;

  function handleClick(e) {
    if (currentUser.userId) {
      setCurrentUser((prev) => {
        return currentUserFavourite
          ? {
              ...prev,
              favouriteStalls: prev.favouriteStalls.filter(
                (favId) => favId != stallId
              ),
            }
          : {
              ...prev,
              favouriteStalls: [...prev.favouriteStalls, stallId],
            };
      });
    } else {
      setShowLoginModal(true);
    }
    // Prevent click event from propagating to parent elements
    e.stopPropagation();
  }

  const currentFavIcon = currentUserFavourite ? (
    <FaHeart className="fav-icon favourite" />
  ) : (
    <FaRegHeart className="fav-icon" />
  );

  // .plain-container div is used below as an easy way to add the onClick handler
  return (
    <>
      {buttonStyle === "plain" && (
        <div className="plain-container" onClick={handleClick}>
          {currentFavIcon}
        </div>
      )}
      {buttonStyle === "circle" && (
        <CircleBtn handleClick={handleClick} appearance={"light"}>
          {currentFavIcon}
        </CircleBtn>
      )}
      {buttonStyle === "long" && (
        <ButtonStd handleClick={handleClick} options={["long", "light"]}>
          Favourite{currentFavIcon}
        </ButtonStd>
      )}

      {showLoginModal && (
        <LoginRequiredModal setShowLoginModal={setShowLoginModal} />
      )}
    </>
  );
}
