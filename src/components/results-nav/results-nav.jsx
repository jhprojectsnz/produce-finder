import ButtonStd from "../button-std/button-std";
import "./results-nav.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsNav({ updateMapCenter }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPathname = location.pathname;
  // If the results are shown as list - results nav = position relative. Avoids overlap with results cards
  // Position of results nav is fixed to bottom of screen for map view
  const resultsNavSytle =
    currentPathname === "/results/list" ? "rn-relative" : "rn-fixed";

  return (
    <div className={`results-nav ${resultsNavSytle}`}>
      <ButtonStd
        appearance={currentPathname === "/results/map" ? "dark" : "light"}
        options={["shadow", "long"]}
        handleClick={() => navigate("/results/map")}
      >
        Map
      </ButtonStd>
      <ButtonStd
        appearance={currentPathname === "/results/list" ? "dark" : "light"}
        options={["shadow", "long"]}
        handleClick={() => {
          navigate("/results/list");
          // updateMapCenter();
        }}
      >
        List
      </ButtonStd>
    </div>
  );
}
