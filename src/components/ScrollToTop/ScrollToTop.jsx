import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // gets the current URL path

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling to top
    });
  }, [pathname]); // runs every time the route path changes

  return null; // component renders nothing visible
}

// The ScrollToTop component listens for route changes.

// When the route changes (e.g., /home → /cars), it scrolls the window back to the top.

// Since MasterLayout is rendered once for all routes under /, placing ScrollToTop here ensures:

// It runs for all route changes (Home, Cars, CarDetails).

// It doesn't interfere with NavBar, Footer, or nested page components.
