import ButtonStd from "../button-std/button-std";
import "./results-nav.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPathname = location.pathname;
  // Results shown as list - results nav = position relative. Avoids overlap with results cards
  // Results shown as map -  results nav is fixed to bottom of screen
  const resultsNavSytle =
    currentPathname === "/results/list" ? "rn-relative" : "rn-fixed";

  return (
    <nav className={`results-nav ${resultsNavSytle}`}>
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
        }}
      >
        List
      </ButtonStd>
    </nav>
  );
}
