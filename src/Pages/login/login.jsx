import "./login.css";
import MainNavBar from "../../components/main-navbar/main-navbar";

export default function Login() {
  return (
    <>
      <MainNavBar />
      <section className="login-container">
        <h2>Log In</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label> <br />
          <input type="text" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label> <br />
          <input type="text" id="password" name="password" required />
        </div>
        <p>Forgot your password?</p>
        <button className="login-btn">Log in</button>
      </section>
    </>
  );
}
