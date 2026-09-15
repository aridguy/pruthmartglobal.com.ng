import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 text-center">

            {/* 404 */}
            <div className="mb-3">
              <h1
                className="display-1 fw-bold text-success"
                style={{ fontSize: "clamp(6rem, 18vw, 11rem)" }}
              >
                404
              </h1>
            </div>

            {/* Icon */}
            <div
              className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
              style={{
                width: "90px",
                height: "90px",
              }}
            >
              <i
                className="bi bi-basket2-fill text-success"
                style={{ fontSize: "2.5rem" }}
              ></i>
            </div>

            {/* Heading */}
            <h2 className="fw-bold text-dark mb-3">
              Oops! Page Not Found
            </h2>

            {/* Description */}
            <p className="text-secondary fs-5 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
              The page you're looking for may have been moved, removed,
              or the address you entered doesn't exist.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

              <Link
                to="/"
                className="btn btn-success btn-lg px-4"
              >
                <i className="bi bi-house-door-fill me-2"></i>
                Back to Home
              </Link>

              <Link
                to="/plans"
                className="btn btn-outline-success btn-lg px-4"
              >
                <i className="bi bi-box-seam me-2"></i>
                View Plans
              </Link>

            </div>

            {/* Small Brand Message */}
            <div className="mt-5 pt-4 border-top">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="bi bi-basket2-fill text-success"></i>
                <span className="fw-bold text-success">
                  Pruthmartglobals
                </span>
              </div>

              <small className="text-secondary">
                Foodstuff Savings • Your Kitchen, Our Priority
              </small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;