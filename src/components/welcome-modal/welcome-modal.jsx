import "./welcome-modal.css";

import React from "react";
import ButtonStd from "../button-std/button-std";
import ModalLayout from "../modal-layout/modal-layout";

export default function WelcomeModal({ setShowWelcomeModal }) {
  return (
    <ModalLayout>
      <h3 className="welcome-modal-title">Find Fresh Produce</h3>
      <h4 className="welcome-modal-subtitle">Demo version</h4>
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
          options={["long", "bold", "light"]}
          handleClick={() => {
            setShowWelcomeModal(false);
          }}
        >
          Explore!
        </ButtonStd>
      </div>
    </ModalLayout>
  );
}
