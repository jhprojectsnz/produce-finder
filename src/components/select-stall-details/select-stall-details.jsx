import "./select-stall-details.css";

export default function SelectStallDetails({ dispatch, formData }) {
  function handleClick(e) {
    dispatch({ type: "details", value: e.target.id });
  }

  return (
    <div className="select-details-container">
      <button
        className={
          formData.marketStall ? "filter-btn filter-selected" : "filter-btn"
        }
        onClick={() => dispatch({ type: "details", value: "marketStall" })}
      >
        Market stall
      </button>
      <button
        className={
          formData.organic ? "filter-btn filter-selected" : "filter-btn"
        }
        onClick={() => dispatch({ type: "details", value: "organic" })}
      >
        Organic
      </button>
      <button
        className={
          formData.eftposPayment ? "filter-btn filter-selected" : "filter-btn"
        }
        onClick={() => dispatch({ type: "details", value: "eftposPayment" })}
      >
        Eftpos payment
      </button>
    </div>
  );
}
