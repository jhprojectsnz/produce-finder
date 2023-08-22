import ButtonStd from "../button-std/button-std";
import "./login-required-modal.css";
import { useNavigate } from "react-router-dom";

export default function LoginRequiredModal({ setShowLoginModal }) {
  const navigate = useNavigate();
  return (
    <div
      className="login-required-modal-container"
      // Add this onClick so click events do not propagate to elements beneath the modal
      onClick={(e) => e.stopPropagation()}
    >
      <div className="login-required-modal-content">
        <h5>Login required</h5>
        <p>
          Log in or create an account to follow all of your favourite fruit and
          vegetable growers.
        </p>
        <div className="login-required-btn-container">
          <ButtonStd
            appearance="light"
            handleClick={(e) => {
              setShowLoginModal(false);
            }}
          >
            Back
          </ButtonStd>
          <ButtonStd
            appearance="dark"
            handleClick={(e) => {
              navigate("/login");
            }}
          >
            Login
          </ButtonStd>
        </div>
      </div>
    </div>
  );
}
