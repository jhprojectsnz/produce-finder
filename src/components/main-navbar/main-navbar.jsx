import "./main-navbar.css";

import { BiMenu, BiUser } from "react-icons/bi";
import { FaHouseUser, FaHeart } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import DropdownMenu from "../dropdown-menu/dropdown-menu";
import CircleBtn from "../cricle-btn/circle-btn";

export default function MainNavBar() {
  const { isAuth } = useUserContext();
  const [showDropdown, setShowDropdown] = useState(false);

  // useNavigate function used to navigate between pages on click
  const navigate = useNavigate();
  // useLocation gets current pathname - used for condition rendering of the nav
  const location = useLocation();
  const currentMainPath = location.pathname.split("/")[1];

  function handleLoginClick() {
    navigate("/login");
  }

  function handleFavouritesClick() {
    navigate("/favourites");
  }

  function handleMyStallsClick() {
    navigate("/mystalls");
  }

  function handleTitleClick() {
    navigate("/");
  }

  function handleMenuButtonClick(e) {
    // Stop propagation required so that the click event doesn't trigger the dropdown to close due to click outside dropdown menu
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  }

  return (
    <nav className={currentMainPath != "results" ? "main-navbar" : "hide"}>
      <div className="main-navbar-container">
        <h1 className="main-navbar-title" onClick={handleTitleClick}>
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
          <CircleBtn appearance="dark" handleClick={handleMenuButtonClick}>
            <BiMenu className="circle-btn-icon" />
          </CircleBtn>
        </div>
      </div>
      {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
    </nav>
  );
}
