import "./login-required-modal.css";
import { useNavigate } from "react-router-dom";

export default function LoginRequiredModal({ setShowLoginModal }) {
  const navigate = useNavigate();
  return (
    <div className="update-item-modal-container">
      <div className="update-item-modal-content">
        <h5>Login required</h5>
        <p>
          Log in or create an account to follow all of your favourite fruit and
          vegetable growers.
        </p>
        <div className="item-update-btn-container">
          <button
            className="item-update-btn item-update-cancel"
            onClick={() => setShowLoginModal(false)}
          >
            Back
          </button>
          <button
            className="item-update-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
