import "./main-navbar.css";
import { BiMenu, BiLogOutCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import { useState } from "react";

//Could add a modal to confirm logout here
export default function MainNavBar() {
  const { isAuth, setIsAuth, setCurrentUser } = useUserContext();
  const [showDropdown, setShowDropdown] = useState(false);

  function handleLogout() {
    setIsAuth(false);
    setCurrentUser({});
  }

  return (
    <div className="main-navbar">
      <div className="main-navbar-container">
        <h1 className="main-navbar-title">Find Fresh Produce</h1>
        <div className="main-navbar-btn-container">
          {isAuth ? (
            <div
              className="circle-btn border-light color-light bg-dark"
              onClick={handleLogout}
            >
              <BiLogOutCircle className="menu-icon" />
            </div>
          ) : (
            <Link
              to="/login"
              className={"circle-btn border-light color-light bg-dark"}
            >
              <FaUserAlt className="login-icon" />
            </Link>
          )}
          <div
            className="circle-btn border-light color-light bg-dark"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <BiMenu className="menu-icon" />
          </div>
        </div>
      </div>
      <DropdownMenu showDropdown={showDropdown} />
    </div>
  );
}
