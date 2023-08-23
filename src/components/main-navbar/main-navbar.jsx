import "./main-navbar.css";
import { BiMenu, BiLogOutCircle, BiUser } from "react-icons/bi";
import { useUserContext } from "../../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import CircleBtn from "../cricle-btn/circle-btn";
import { useEffect, useState } from "react";

//Could add a modal to confirm logout here
export default function MainNavBar() {
  const { isAuth, setIsAuth, setCurrentUser } = useUserContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogoutClick() {
    setIsAuth(false);
    setCurrentUser({});
    navigate("/");
  }

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div
      // check if on results page - if so hide main navbar
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
            <CircleBtn appearance="dark" handleClick={handleLogoutClick}>
              <BiLogOutCircle className="circle-btn-icon" />
            </CircleBtn>
          ) : (
            <CircleBtn appearance={"dark"} handleClick={handleLoginClick}>
              <BiUser className="circle-btn-icon" />
            </CircleBtn>
          )}
          <CircleBtn
            appearance="dark"
            handleClick={() => setShowDropdown(!showDropdown)}
          >
            <BiMenu className="circle-btn-icon" />
          </CircleBtn>
        </div>
      </div>
      <DropdownMenu
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        handleLogoutClick={handleLogoutClick}
      />
    </div>
  );
}
