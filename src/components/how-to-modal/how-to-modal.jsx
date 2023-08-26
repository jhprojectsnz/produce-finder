import "./how-to-modal.css";
import ButtonStd from "../button-std/button-std";
import { useNavigate } from "react-router-dom";
import howToVideo from "../../assets/howto-video.mp4";

export default function HowToModal() {
  const navigate = useNavigate();
  return (
    <div className="how-to-modal-container">
      <div className="how-to-modal-content">
        <h5>Welcome back!</h5>
        <p className="bold">A quick reminder...</p>
        <p>
          You can access <span className="bold">My stalls</span> and view your{" "}
          <span className="bold">favourite</span> stalls using the menu at the
          top right of your screen
        </p>
        <video className="how-to-video" autoPlay loop>
          <source src={howToVideo} type="video/mp4"></source>
          This video is not supported on your browser
        </video>

        <ButtonStd
          appearance="light"
          options={["bold"]}
          handleClick={() => {
            navigate(-1);
          }}
        >
          Continue
        </ButtonStd>
      </div>
    </div>
  );
}
