import "./welcome-modal.css";
import ButtonStd from "../button-std/button-std";

export default function WelcomeModal({ setShowWelcomeModal }) {
  return (
    <div className="welcome-modal-container">
      <div className="welcome-modal-content">
        <h3>Find Fresh Produce</h3>
        <h5>Demo version</h5>
        <p className="bold">Welcome to Find Fresh Produce!</p>
        <p>
          This demo version allows you to fully explore the features of the
          website. A range of pretend fruit and vegetable sellers are used for
          demonstration
        </p>
        <p className="bold">
          Try logging in using the guest account details to get the full
          experience including:
        </p>
        <ul>
          <li>Creating test stalls of your own</li>
          <li>Managing stock or modifying details of existing stalls</li>
          <li>Saving stalls to favourites</li>
        </ul>
        <p>
          Final version allowing user sign up and the display of real sellers
          coming soon...
        </p>
        <div className="welcome-btn-container">
          <ButtonStd
            appearance="light"
            options={["long", "bold"]}
            handleClick={() => {
              setShowWelcomeModal(false);
            }}
          >
            Explore!
          </ButtonStd>
        </div>
      </div>
    </div>
  );
}
