import "./results-nav.css";
import { Link, useLocation } from "react-router-dom";

export default function ResultsNav() {
  const location = useLocation();
  return (
    <div className="results-nav">
      <Link
        to="/results/map"
        className={
          location.pathname === "/results/map"
            ? "results-nav-btn nav-btn-selected"
            : "results-nav-btn"
        }
      >
        Map
      </Link>
      <Link
        to="/results/list"
        className={
          location.pathname === "/results/list"
            ? "results-nav-btn nav-btn-selected"
            : "results-nav-btn"
        }
      >
        List
      </Link>
    </div>
  );
}
