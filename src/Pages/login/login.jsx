import "./login.css";
import { FiMail } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import { users } from "../../data/data";

import ButtonStd from "../../components/button-std/button-std";
import HowToModal from "../../components/how-to-modal/how-to-modal";

export default function Login() {
  const { setCurrentUser, setIsAuth } = useUserContext();
  const [enteredEmail, setEnteredEmail] = useState(
    "guestaccount@testemail.com"
  );
  const [enteredPassword, setEnteredPassword] = useState("password");
  const [showError, setShowError] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);
  const [signUpAttempt, setSignUpAttempt] = useState(false);

  function handleLogin() {
    //Add Auth functionality here

    //Here is a simple substitute for now
    const loginUser = users.filter((user) => enteredEmail === user.email);
    if (loginUser.length === 1 && loginUser[0].password === enteredPassword) {
      setCurrentUser(loginUser[0]);
      setIsAuth(true);
      setShowHowTo(true);
    } else {
      setShowError(true);
    }
  }

  return (
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
      {showError && (
        <p className="login-error">Email or password do not match known user</p>
      )}
      <p className="login-text-link">Forgot your password?</p>
      <ButtonStd appearance="dark" options={["long"]} handleClick={handleLogin}>
        Log in
      </ButtonStd>
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
      {signUpAttempt && (
        <p className="login-error">
          Sign up for Find Fresh Produce coming soon!
        </p>
      )}
      <ButtonStd
        appearance="dark"
        options={["long"]}
        handleClick={() => setSignUpAttempt(true)}
      >
        Sign up
      </ButtonStd>
      {showHowTo && <HowToModal />}
    </section>
  );
}
