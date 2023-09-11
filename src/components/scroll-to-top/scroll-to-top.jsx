import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If pathname is "/about" the home page will scroll to about section
    if (pathname != "/about") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
