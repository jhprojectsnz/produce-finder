import "./select-stall-details.css";
import ButtonStd from "../button-std/button-std";

export default function SelectStallDetails({ dispatch, formData }) {
  return (
    <div className="select-details-container">
      <ButtonStd
        appearance={formData.marketStall ? "dark" : "grey"}
        handleClick={() => dispatch({ type: "details", value: "marketStall" })}
      >
        Market stall
      </ButtonStd>
      <ButtonStd
        appearance={formData.organic ? "dark" : "grey"}
        handleClick={() => dispatch({ type: "details", value: "organic" })}
      >
        Organic
      </ButtonStd>
      <ButtonStd
        appearance={formData.eftposPayment ? "dark" : "grey"}
        handleClick={() =>
          dispatch({ type: "details", value: "eftposPayment" })
        }
      >
        Eftpos payment
      </ButtonStd>
    </div>
  );
}
