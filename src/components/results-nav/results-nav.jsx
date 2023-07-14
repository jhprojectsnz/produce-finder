import "./results-nav.css";
import { Link, useLocation } from "react-router-dom";

export default function ResultsNav({ resultsView, setResultsView }) {
  return (
    <div className="results-nav">
      <button
        className={
          resultsView === "map"
            ? "results-nav-btn nav-btn-selected"
            : "results-nav-btn"
        }
        onClick={() => setResultsView("map")}
      >
        Map
      </button>
      <button
        className={
          resultsView === "list"
            ? "results-nav-btn nav-btn-selected"
            : "results-nav-btn"
        }
        onClick={() => setResultsView("list")}
      >
        List
      </button>
    </div>
  );
}
