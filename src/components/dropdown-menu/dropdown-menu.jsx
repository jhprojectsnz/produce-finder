import "./dropdown-menu.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function DropdownMenu({ showDropdown }) {
  const { isAuth } = useUserContext();

  return (
    <div className={showDropdown ? "dropdown-menu" : "dropdown-hidden"}>
      <Link to="/" className="dropdown-menu-link">
        Home
      </Link>
      <Link to="/" className="dropdown-menu-link">
        About
      </Link>
      {isAuth ? (
        <>
          <Link to="/favourites" className="dropdown-menu-link">
            Favourites
          </Link>
          <Link to="/mystalls" className="dropdown-menu-link">
            My Stalls
          </Link>
        </>
      ) : (
        <Link to="/login" className="dropdown-menu-link">
          Log in
        </Link>
      )}
    </div>
  );
}
