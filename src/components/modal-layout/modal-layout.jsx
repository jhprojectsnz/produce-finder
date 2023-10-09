import "./modal-layout.css";

import React, { useEffect } from "react";

export default function ModalLayout({ children }) {
  // Stop scrolling when a modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className="modal"
      // Add this onClick so click events do not propagate to elements beneath the modal
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">{children}</div>
    </div>
  );
}
