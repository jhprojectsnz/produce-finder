import ButtonStd from "../button-std/button-std";
import "./results-nav.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsNav({ updateMapCenter }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="results-nav">
      <ButtonStd
        appearance={location.pathname === "/results/map" ? "dark" : "light"}
        options={["shadow", "long"]}
        handleClick={() => navigate("/results/map")}
      >
        Map
      </ButtonStd>
      <ButtonStd
        appearance={location.pathname === "/results/list" ? "dark" : "light"}
        options={["shadow", "long"]}
        handleClick={() => {
          navigate("/results/list");
          updateMapCenter();
        }}
      >
        List
      </ButtonStd>
    </div>
  );
}
