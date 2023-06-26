import "./login.css";
import MainNavBar from "../../components/main-navbar/main-navbar";
import { FiMail } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <MainNavBar />
      <section className="login-container">
        <h2>Log In</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <FiMail className="login-input-icon" />
          <input type="text" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <FaLock className="login-input-icon" />
          <input type="password" id="password" name="password" required />
        </div>
        <p>Forgot your password?</p>
        <button className="login-btn">Log in</button>
        <div className="login-separator">
          <span>OR</span>
        </div>
        <h2>Sign up</h2>
        <div className="input-container">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <FiMail className="login-input-icon" />
          <input type="text" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <FaLock className="login-input-icon" />
          <input type="password" id="password" name="password" required />
        </div>
        <div className="input-container">
          <label htmlFor="confirm-password">Confirm password</label>
          <FaLock className="login-input-icon" />
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <button className="login-btn">Sign up</button>
      </section>
    </>
  );
}
