import "./dropdown-menu.css";

import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";

export default function DropdownMenu({ setShowDropdown }) {
  const { isAuth, setIsAuth, setCurrentUser } = useUserContext();

  // Use useEffect to add the onClick listner to the whole document when the dropdown is opened
  // Clicking anywhere on the page will close the dropdown menu
  useEffect(() => {
    document.addEventListener("click", () => setShowDropdown(false));
    return () => {
      document.removeEventListener("click", () => setShowDropdown(false));
    };
  }, []);

  function handleLogoutClick() {
    setIsAuth(false);
    setCurrentUser({});
    setShowDropdown(false);
  }

  return (
    <div className="dropdown-menu">
      <Link to="/" className="dropdown-menu-link">
        Home
      </Link>
      <Link to="/about" className="dropdown-menu-link">
        About
      </Link>
      {isAuth ? (
        <>
          <Link to="/mystalls" className="dropdown-menu-link">
            My Stalls
          </Link>
          <Link to="/favourites" className="dropdown-menu-link">
            Favourites
          </Link>
          <Link
            to="/"
            className="dropdown-menu-link"
            onClick={handleLogoutClick}
          >
            Log out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="dropdown-menu-link">
            Log in
          </Link>
        </>
      )}
    </div>
  );
}
