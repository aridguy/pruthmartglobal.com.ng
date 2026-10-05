import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* ================= TOP GREEN BAR ================= */}
      <div
        style={{
          backgroundColor: "#00563f",
          color: "#fff",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        <div className="container-fluid px-4">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ minHeight: "32px" }}
          >
            {/* LEFT */}
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <i
                className="bi bi-truck"
                style={{ fontSize: "16px" }}
              ></i>

              <span>Fast & Reliable Delivery</span>
            </div>

            {/* CENTER */}
            <div
              className="d-flex align-items-center gap-2"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <i
                className="bi bi-shield-fill-check"
                style={{ fontSize: "16px" }}
              ></i>

              <span>Quality Assured Products</span>
            </div>

            {/* RIGHT */}
            <div
              className="d-flex align-items-center gap-4"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="d-flex align-items-center gap-2">
                <i
                  className="bi bi-headset"
                  style={{ fontSize: "16px" }}
                ></i>

                <span>24/7 Customer Support</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span>Follow Us</span>

                <i className="bi bi-tiktok"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className="navbar navbar-expand-lg bg-white"
        style={{
          borderBottom: "1px solid #eeeeee",
          minHeight: "70px",
        }}
      >
        <div className="container-fluid px-4">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center"
            data-aos="fade-right"
            data-aos-duration="900"
            style={{
              textDecoration: "none",
              color: "#00563f",
              marginRight: "35px",
            }}
          >
            {/* Logo Icon */}
            <div
              className="d-flex align-items-center justify-content-center me-2"
              style={{
                width: "48px",
                height: "48px",
                border: "3px solid #00563f",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <i
                className="bi bi-cart3"
                style={{
                  fontSize: "25px",
                  color: "#00563f",
                }}
              ></i>

              <span
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#8cae19",
                  bottom: "-2px",
                  right: "2px",
                }}
              ></span>
            </div>

            {/* Brand Name */}
            <div style={{ lineHeight: "1" }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "800",
                  color: "#00563f",
                  letterSpacing: "-0.8px",
                }}
              >
                PruthMart
              </div>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "#8cae19",
                  letterSpacing: "4px",
                  marginTop: "5px",
                  textAlign: "center",
                }}
              >
                GLOBAL
              </div>
            </div>
          </Link>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#pruthMartNavbar"
            aria-controls="pruthMartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="bi bi-list"
              style={{
                fontSize: "30px",
                color: "#00563f",
              }}
            ></i>
          </button>

          {/* ================= NAV CONTENT ================= */}
          <div
            className="collapse navbar-collapse"
            id="pruthMartNavbar"
          >
            {/* NAV LINKS */}
            <ul
              className="navbar-nav align-items-lg-center gap-lg-1 mx-auto"
              data-aos="fade-down"
              data-aos-duration="900"
            >
              {/* HOME */}
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-3"
                  style={{
                    color: "#333",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  Home
                </Link>
              </li>

              {/* SHOP */}
              <li className="nav-item dropdown">
                <Link
                  to="/shop"
                  className="nav-link dropdown-toggle px-3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "#333",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  Shop
                </Link>

                <ul className="dropdown-menu border-0 shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/shop">
                      All Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/shop/foodstuff"
                    >
                      Foodstuff
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/shop/groceries"
                    >
                      Groceries
                    </Link>
                  </li>
                </ul>
              </li>

              {/* FOODSTUFF PLAN */}
              <li className="nav-item">
                <Link
                  to="/foodstuffs-plan"
                  className="nav-link px-3"
                  style={{
                    color: "#00563f",
                    fontSize: "13px",
                    fontWeight: "600",
                    borderBottom: "2px solid #8cae19",
                  }}
                >
                  Foodstuffs Plan
                </Link>
              </li>

              {/* GIFTS */}
              <li className="nav-item">
                <Link
                  to="/gifts"
                  className="nav-link px-3"
                  style={{
                    color: "#333",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  Gifts
                </Link>
              </li>

              {/* MORE */}
              <li className="nav-item dropdown">
                <a
                  href="#more"
                  className="nav-link dropdown-toggle px-3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "#333",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  More
                </a>

                <ul className="dropdown-menu border-0 shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* ================= SEARCH ================= */}
            <div
              className="d-flex align-items-center me-lg-4 my-3 my-lg-0"
              data-aos="fade-left"
              data-aos-duration="900"
              style={{
                width: "220px",
                height: "38px",
                border: "1px solid #e1e1e1",
                borderRadius: "25px",
                padding: "0 14px",
              }}
            >
              <i
                className="bi bi-search"
                style={{
                  color: "#00563f",
                  fontSize: "15px",
                }}
              ></i>

              <input
                type="text"
                placeholder="Search for products..."
                className="border-0 bg-transparent ms-2"
                style={{
                  width: "100%",
                  outline: "none",
                  fontSize: "11px",
                }}
              />
            </div>

            {/* ================= RIGHT ICONS ================= */}
            <div
              className="d-flex align-items-center gap-3"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* ACCOUNT */}
              <Link
                to="/account"
                style={{
                  color: "#00563f",
                  textDecoration: "none",
                  fontSize: "21px",
                }}
              >
                <i className="bi bi-person"></i>
              </Link>

              {/* WISHLIST */}
              <Link
                to="/wishlist"
                style={{
                  color: "#00563f",
                  textDecoration: "none",
                  fontSize: "21px",
                }}
              >
                <i className="bi bi-heart"></i>
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="position-relative"
                style={{
                  color: "#00563f",
                  textDecoration: "none",
                  fontSize: "22px",
                }}
              >
                <i className="bi bi-cart3"></i>

                <span
                  className="position-absolute translate-middle badge rounded-pill"
                  style={{
                    top: "0px",
                    left: "100%",
                    backgroundColor: "#00563f",
                    fontSize: "8px",
                    minWidth: "15px",
                    height: "15px",
                    padding: "2px",
                  }}
                >
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;