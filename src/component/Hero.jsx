import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png"

const Hero = () => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #003d2d 0%, #00563f 42%, #1b6545 100%)",
        color: "#fff",
      }}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="position-absolute"
        style={{
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(139, 174, 25, 0.08)",
          top: "-250px",
          left: "-180px",
        }}
      />

      <div
        className="position-absolute"
        style={{
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.04)",
          bottom: "-200px",
          left: "35%",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="container-fluid px-4 px-lg-5 position-relative">
        <div
          className="row align-items-center"
          style={{
            minHeight: "385px",
          }}
        >

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="col-lg-5 py-5 py-lg-4 position-relative z-2">

            {/* Yellow Brand Label */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="d-inline-block mb-3"
              style={{
                backgroundColor: "#f4c51b",
                color: "#003d2d",
                padding: "8px 28px",
                borderRadius: "4px 30px 30px 4px",
                fontWeight: "800",
                fontSize: "15px",
                fontStyle: "italic",
                transform: "rotate(-2deg)",
                boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
              }}
            >
              PruthMart Global
            </div>

            {/* Main Heading */}
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
              className="mb-3"
              style={{
                fontSize: "clamp(42px, 5vw, 67px)",
                lineHeight: "0.94",
                fontWeight: "900",
                letterSpacing: "-2px",
                maxWidth: "570px",
              }}
            >
              <span className="d-block">330-Day</span>

              <span
                className="d-block"
                style={{
                  color: "#f4c51b",
                }}
              >
                Foodstuffs
              </span>

              <span className="d-block">Savings Plan</span>
            </h1>

            {/* Subtitle */}
            <h5
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="300"
              style={{
                fontWeight: "800",
                fontSize: "18px",
                marginBottom: "7px",
              }}
            >
              Save today. Enjoy tomorrow.
            </h5>

            {/* Description */}
            <p
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
              style={{
                fontSize: "13px",
                lineHeight: "1.45",
                maxWidth: "420px",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "18px",
              }}
            >
              Join our trusted foodstuffs savings plan and get quality
              food items at the end of the cycle. It's simple,
              affordable and rewarding.
            </p>

            {/* Join Button */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <Link
                to="/register"
                className="btn"
                style={{
                  backgroundColor: "#f4c51b",
                  color: "#003d2d",
                  fontWeight: "800",
                  fontSize: "13px",
                  borderRadius: "25px",
                  padding: "10px 22px",
                  border: "none",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
                }}
              >
                Join Now
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div className="col-lg-7 position-relative">

            <div
              className="position-relative"
              style={{
                minHeight: "430px",
              }}
            >

              {/* Background Glow */}
              <div
                className="position-absolute"
                style={{
                  width: "480px",
                  height: "480px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(211,231,156,0.30), transparent 65%)",
                  top: "-50px",
                  right: "5%",
                }}
              />

              {/* =================================================
                  FOOD IMAGE AREA

                  Replace this src with your actual hero image.
              ================================================== */}

              <div
                data-aos="zoom-in"
                data-aos-duration="1300"
                data-aos-delay="200"
                className="position-absolute"
                style={{
                  right: "-2%",
                  bottom: "15px",
                  width: "72%",
                  maxWidth: "650px",
                  zIndex: 2,
                }}
              >
                <img
                  src={LOGO}
                  alt="Fresh foodstuff and groceries"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    filter:
                      "drop-shadow(0 18px 20px rgba(0,0,0,0.20))",
                  }}
                />
              </div>

              {/* =================================================
                  GOOD FOOD BETTER FUTURE
              ================================================== */}

              <div
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="600"
                className="position-absolute text-center"
                style={{
                  right: "2%",
                  top: "15px",
                  zIndex: 5,
                  transform: "rotate(-5deg)",
                  color: "#fff",
                  fontStyle: "italic",
                  fontWeight: "900",
                  fontSize: "22px",
                  lineHeight: "1.05",
                }}
              >
                <div>Good Food</div>
                <div>Better</div>
                <div>Future ♥</div>

                <div
                  style={{
                    width: "65px",
                    height: "3px",
                    backgroundColor: "#f4c51b",
                    margin: "7px auto 0",
                    transform: "rotate(-8deg)",
                  }}
                />
              </div>

              {/* =================================================
                  QUALITY BADGE
              ================================================== */}

              <div
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="800"
                className="position-absolute d-flex align-items-center justify-content-center text-center"
                style={{
                  width: "105px",
                  height: "105px",
                  borderRadius: "50%",
                  backgroundColor: "#00563f",
                  border: "4px solid rgba(255,255,255,0.2)",
                  right: "10%",
                  bottom: "75px",
                  zIndex: 6,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "900",
                    lineHeight: "1.2",
                  }}
                >
                  FRESH
                  <br />
                  QUALITY
                  <br />
                  AFFORDABLE
                </div>
              </div>

              {/* =================================================
                  DATE RIBBON
              ================================================== */}

              <div
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="900"
                className="position-absolute d-flex align-items-center gap-2"
                style={{
                  right: "-2%",
                  bottom: "20px",
                  backgroundColor: "#f4c51b",
                  color: "#003d2d",
                  padding: "10px 22px",
                  borderRadius: "4px 20px 20px 4px",
                  fontWeight: "900",
                  fontSize: "15px",
                  transform: "rotate(-3deg)",
                  zIndex: 7,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                }}
              >
                <i className="bi bi-calendar3"></i>
                JAN - DEC 2027
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO BENEFITS
      ====================================================== */}

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.18)",
          backgroundColor: "rgba(0,0,0,0.08)",
        }}
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="row">

            {/* Benefit 1 */}
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                className="d-flex align-items-center gap-2 py-3"
                style={{
                  borderRight:
                    "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <i
                  className="bi bi-wallet2"
                  style={{
                    fontSize: "24px",
                    color: "#f4c51b",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                    }}
                  >
                    Affordable
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      opacity: 0.85,
                    }}
                  >
                    Monthly Dues
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="d-flex align-items-center gap-2 py-3"
                style={{
                  borderRight:
                    "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <i
                  className="bi bi-bag-check"
                  style={{
                    fontSize: "24px",
                    color: "#f4c51b",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                    }}
                  >
                    Quality
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      opacity: 0.85,
                    }}
                  >
                    Food Items
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="d-flex align-items-center gap-2 py-3"
                style={{
                  borderRight:
                    "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <i
                  className="bi bi-truck"
                  style={{
                    fontSize: "24px",
                    color: "#f4c51b",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                    }}
                  >
                    Safe & Timely
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      opacity: 0.85,
                    }}
                  >
                    Delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="d-flex align-items-center gap-2 py-3">
                <i
                  className="bi bi-heart"
                  style={{
                    fontSize: "24px",
                    color: "#f4c51b",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                    }}
                  >
                    Trusted by
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      opacity: 0.85,
                    }}
                  >
                    Thousands
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;