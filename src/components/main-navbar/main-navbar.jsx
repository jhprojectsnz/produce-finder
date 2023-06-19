import "./main-navbar.css";
import { BiMenu } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

export default function MainNavBar() {
  return (
    <div className="main-navbar">
      <h1 className="main-navbar-title">Find Fresh Produce</h1>
      <div className="main-navbar-btn-container">
        <div className={"circle-btn border-light color-light bg-dark"}>
          <FaUserAlt className="login-icon" />
        </div>
        <div className="circle-btn border-light color-light bg-dark">
          <BiMenu className="menu-icon" />
        </div>
      </div>
    </div>
  );
}
