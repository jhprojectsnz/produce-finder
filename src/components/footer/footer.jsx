import "./footer.css";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const currentMainPath = location.pathname.split("/")[1];

  // Only show the footer if the results page is NOT shown
  // The footer does not look good below map/results
  return currentMainPath != "results" ? (
    <footer>
      <p>Find Fresh Produce</p>
    </footer>
  ) : null;
}
