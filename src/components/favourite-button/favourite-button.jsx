import "./favourite-button.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import LoginRequiredModal from "../login-required-modal/login-required-modal";
import CircleBtn from "../cricle-btn/circle-btn";
import ButtonStd from "../button-std/button-std";

export default function FavouriteButton({ selectedStall, buttonStyle }) {
  const { currentUser, setCurrentUser } = useUserContext();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isCurrentFavourite = currentUser.userId
    ? currentUser.favouriteStalls.includes(selectedStall.stallId)
    : null;

  function handleClick(e) {
    if (currentUser.userId) {
      setCurrentUser((prev) => {
        return isCurrentFavourite
          ? {
              ...prev,
              favouriteStalls: prev.favouriteStalls.filter(
                (favId) => favId != selectedStall.stallId
              ),
            }
          : {
              ...prev,
              favouriteStalls: [...prev.favouriteStalls, selectedStall.stallId],
            };
      });
    } else {
      setShowLoginModal(true);
    }
    e.stopPropagation();
  }

  const currentFavIcon = isCurrentFavourite ? (
    <FaHeart className="fav-icon favourite" />
  ) : (
    <FaRegHeart className="fav-icon" />
  );

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
        <ButtonStd
          handleClick={handleClick}
          appearance={"light"}
          options={["long"]}
        >
          Favourite{currentFavIcon}
        </ButtonStd>
      )}

      {showLoginModal && (
        <LoginRequiredModal setShowLoginModal={setShowLoginModal} />
      )}
    </>
  );
}
