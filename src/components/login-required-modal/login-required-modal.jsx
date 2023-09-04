import ButtonStd from "../button-std/button-std";
import "./login-required-modal.css";
import { useNavigate } from "react-router-dom";

export default function LoginRequiredModal({ setShowLoginModal }) {
  const navigate = useNavigate();
  return (
    <>
      <h5>Login required</h5>
      <p>
        Log in or create an account to add fruit and vegetable sellers to your
        favourites
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
    </>
  );
}
