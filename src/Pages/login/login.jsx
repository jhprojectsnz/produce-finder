import "./login.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import { FiMail } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import { users } from "../../data/data";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  function handleLogin() {
    //Add Auth functionality here

    //Here is a simple substitute for now
    const loginUser = users.filter((user) => enteredEmail === user.email);
    if (loginUser.length != 1 || loginUser[0].password != enteredPassword) {
      setErrorMessage(true);
    } else {
      setCurrentUser(loginUser[0].userId);
      navigate("/");
    }
  }

  return (
    <>
      <MainNavBar />
      <section className="login-container">
        <h2>Log In</h2>
        <div className="login-input-container">
          <label htmlFor="email">Email</label>
          <FiMail className="login-input-icon" />
          <input
            type="text"
            name="email"
            value={enteredEmail}
            onChange={(e) => setEnteredEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-input-container">
          <label htmlFor="password">Password</label>
          <FaLock className="login-input-icon" />
          <input
            type="password"
            name="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && (
          <p className="login-error">
            Email or password do not match known user
          </p>
        )}
        <p className="login-text-link">Forgot your password?</p>
        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>
        <div className="login-separator">
          <span>OR</span>
        </div>
        <h2>Sign up</h2>
        <div className="login-input-container">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="login-input-container">
          <label htmlFor="email">Email</label>
          <FiMail className="login-input-icon" />
          <input type="text" name="email" required />
        </div>
        <div className="login-input-container">
          <label htmlFor="password">Password</label>
          <FaLock className="login-input-icon" />
          <input type="password" name="password" required />
        </div>
        <div className="login-input-container">
          <label htmlFor="confirm-password">Confirm password</label>
          <FaLock className="login-input-icon" />
          <input type="password" name="confirm-password" required />
        </div>
        <button className="login-btn">Sign up</button>
      </section>
    </>
  );
}
