import "./modal-layout.css";

export default function ModalLayout({ children }) {
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
