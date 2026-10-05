import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * ------------------------------------------------------------
 * Globally resets scroll position to the top of the page
 * whenever the route changes.
 *
 * Usage (App.js — must be INSIDE <Router>):
 *
 *   import Scroll from "./component/Scroll";
 *
 *   <Router>
 *     <Scroll />
 *     <Navbar />
 *     <Routes> ... </Routes>
 *   </Router>
 * ------------------------------------------------------------
 */
const Scroll = ({ behavior = "auto" }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a hash (e.g. /plans#faq), let the browser
    // handle jumping to that anchor instead of forcing the top.
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
};

export default Scroll;