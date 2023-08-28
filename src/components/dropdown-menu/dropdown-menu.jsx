import "./dropdown-menu.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function DropdownMenu({ showDropdown, setShowDropdown }) {
  const { isAuth, setIsAuth, setCurrentUser } = useUserContext();

  function handleLogoutClick() {
    setIsAuth(false);
    setCurrentUser({});
    setShowDropdown(false);
  }

  return (
    <div className={showDropdown ? "dropdown-menu" : "dropdown-hidden"}>
      <Link
        to="/"
        className="dropdown-menu-link"
        onClick={() => setShowDropdown(false)}
      >
        Home
      </Link>
      {isAuth ? (
        <>
          <Link
            to="/mystalls"
            className="dropdown-menu-link"
            onClick={() => setShowDropdown(false)}
          >
            My Stalls
          </Link>
          <Link
            to="/favourites"
            className="dropdown-menu-link"
            onClick={() => setShowDropdown(false)}
          >
            Favourites
          </Link>
          <Link
            to="/"
            className="dropdown-menu-link"
            onClick={() => setShowDropdown(false)}
          >
            About
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
          <Link
            to="/"
            className="dropdown-menu-link"
            onClick={() => setShowDropdown(false)}
          >
            About
          </Link>
          <Link
            to="/login"
            className="dropdown-menu-link"
            onClick={() => setShowDropdown(false)}
          >
            Log in
          </Link>
        </>
      )}
    </div>
  );
}
