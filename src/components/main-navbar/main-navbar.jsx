import "./main-navbar.css";
import { BiMenu, BiUser } from "react-icons/bi";
import { FaHouseUser, FaHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import CircleBtn from "../cricle-btn/circle-btn";
import { useState } from "react";

//Could add a modal to confirm logout here
export default function MainNavBar() {
  const { isAuth } = useUserContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleFavouritesClick() {
    navigate("/favourites");
  }

  function handleMyStallsClick() {
    navigate("/mystalls");
  }

  function handleMenuClick(e) {
    // Stop propagation required so that the click event doesn't trigger the dropdown to close due to click outside dropdown menu
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  }

  return (
    <div
      // Check if on results page - if so hide main navbar
      className={
        location.pathname.split("/")[1] != "results" ? "main-navbar" : "hide"
      }
    >
      <div className="main-navbar-container">
        <h1 className="main-navbar-title" onClick={() => navigate("/")}>
          Find Fresh Produce
        </h1>
        <div className="main-navbar-btn-container">
          {isAuth ? (
            <>
              <CircleBtn appearance="dark" handleClick={handleMyStallsClick}>
                <FaHouseUser className="circle-btn-icon" />
              </CircleBtn>
              <CircleBtn appearance="dark" handleClick={handleFavouritesClick}>
                <FaHeart />
              </CircleBtn>
            </>
          ) : (
            <CircleBtn appearance={"dark"} handleClick={handleLoginClick}>
              <BiUser className="circle-btn-icon" />
            </CircleBtn>
          )}
          <CircleBtn appearance="dark" handleClick={handleMenuClick}>
            <BiMenu className="circle-btn-icon" />
          </CircleBtn>
        </div>
      </div>
      {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
    </div>
  );
}
