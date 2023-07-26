import "./favourite-button.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import LoginRequiredModal from "../login-required-modal/login-required-modal";

export default function FavouriteButton({ selectedStall }) {
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

  return (
    <>
      {isCurrentFavourite ? (
        <FaHeart className="fav-icon favourite" onClick={handleClick} />
      ) : (
        <FaRegHeart className="fav-icon" onClick={handleClick} />
      )}
      {showLoginModal && (
        <LoginRequiredModal setShowLoginModal={setShowLoginModal} />
      )}
    </>
  );
}
