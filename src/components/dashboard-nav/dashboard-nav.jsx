import "./dashboard-nav.css";
import { Link, useLocation } from "react-router-dom";

export default function DashboardNav() {
  //useLoction hook used to access current pathname so that is can be used for conditional styling
  const location = useLocation();
  return (
    <div className="dashboard-nav-container">
      <Link
        to="/dashboard/search"
        className={
          location.pathname === "/dashboard/search"
            ? "dashboard-nav-btn dashboard-btn-selected"
            : "dashboard-nav-btn"
        }
      >
        Search
      </Link>
      <Link
        to="/dashboard/favourites"
        className={
          location.pathname === "/dashboard/favourites"
            ? "dashboard-nav-btn dashboard-btn-selected"
            : "dashboard-nav-btn"
        }
      >
        Favourites
      </Link>
      <Link
        to="/dashboard/mystalls"
        className={
          location.pathname === "/dashboard/mystalls"
            ? "dashboard-nav-btn dashboard-btn-selected"
            : "dashboard-nav-btn"
        }
      >
        My Stalls
      </Link>
    </div>
  );
}
