import "./circle-btn.css";

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
