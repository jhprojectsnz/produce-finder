import "./favourite-button.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import LoginRequiredModal from "../login-required-modal/login-required-modal";
import CircleBtn from "../cricle-btn/circle-btn";

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
    <FaHeart className="fav-icon favourite" onClick={handleClick} />
  ) : (
    <FaRegHeart className="fav-icon" onClick={handleClick} />
  );

  return (
    <>
      {buttonStyle ? (
        <CircleBtn appearance={"light"}>{currentFavIcon}</CircleBtn>
      ) : (
        currentFavIcon
      )}
      {showLoginModal && (
        <LoginRequiredModal setShowLoginModal={setShowLoginModal} />
      )}
    </>
  );
}
