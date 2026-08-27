import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css"

const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => setOpen(false);
//   const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="pruth-navbar">
      <div className="container">
        <div className="pruth-navbar-inner">
          {/* LOGO */}
          <Link to="/" className="pruth-brand" >
            <div className="pruth-brand-icon">
              <i className="bi bi-basket2-fill"></i>
            </div>
            <div className="pruth-brand-text">
              <strong>Pruthmartglobals</strong>
              <span>Foodstuff Savings</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="pruth-desktop-menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              Plans
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              How It Works
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pruth-nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="pruth-navbar-actions">
            <Link to="/login" className="pruth-login-btn">
              Login
            </Link>
            <Link to="/register" className="pruth-start-btn">
              Start Saving <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* HAMBURGER TOGGLE */}
          {/* <button
            type="button"
            className={`pruth-menu-toggle ${open ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}
        </div>

        {/* MOBILE MENU */}
        {/* <div className={`pruth-mobile-menu ${open ? "show" : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-house-door-fill"></i>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-info-circle-fill"></i>
            <span>About</span>
          </NavLink>
          <NavLink
            to="/plans"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-box-seam-fill"></i>
            <span>Plans</span>
          </NavLink>
          <NavLink
            to="/how-it-works"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-list-check"></i>
            <span>How It Works</span>
          </NavLink>
          <NavLink
            to="/faq"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-question-circle-fill"></i>
            <span>FAQ</span>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `pruth-mobile-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-telephone-fill"></i>
            <span>Contact</span>
          </NavLink>

          <div className="pruth-mobile-actions">
            <Link
              to="/login"
              onClick={closeMenu}
              className="pruth-mobile-login"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={closeMenu}
              className="pruth-mobile-start"
            >
              Start Saving <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
