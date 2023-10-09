import "./circle-btn.css";

import React from "react";

export default function CircleBtn({ children, appearance, handleClick }) {
  return (
    <button
      className={`circle-btn ${appearance}-circle-btn`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
