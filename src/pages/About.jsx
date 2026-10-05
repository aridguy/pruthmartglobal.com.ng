import React from "react";
import { Link } from "react-router-dom";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "2348060200578";

const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ================= DATA ================= */
const STATS = [
  { value: "12", suffix: "mo", label: "Savings Cycle", note: "One full year to build your package" },
  { value: "2", suffix: "", label: "Plan Options", note: "Complete or Essential — your pick" },
  { value: "100", suffix: "%", label: "Free Delivery", note: "Within all covered areas" },
  { value: "750", suffix: "", prefix: "₦", label: "Starting Daily", note: "Small amounts, real results" },
];

const VALUES = [
  {
    icon: "bi-shield-check",
    title: "Trust First",
    text: "Every contribution is recorded and visible to you. You always know exactly where your savings stand.",
  },
  {
    icon: "bi-people-fill",
    title: "Built For Families",
    text: "Our packages are shaped around what real households actually cook, not what looks good on a brochure.",
  },
  {
    icon: "bi-piggy-bank-fill",
    title: "Small Steps Win",
    text: "Saving a little at a time beats paying everything at once. We make that rhythm easy to keep.",
  },
  {
    icon: "bi-hand-thumbs-up-fill",
    title: "No Pressure",
    text: "Miss a day and nothing breaks. Catch up whenever you can. Your plan moves at your pace.",
  },
];

const PROMISES = [
  {
    number: "01",
    title: "Honest Pricing",
    text: "What you see is what you pay. No hidden charges, no surprise fees at delivery.",
  },
  {
    number: "02",
    title: "Quality Foodstuff",
    text: "We source well-sorted, properly stored items that you would be happy to buy yourself.",
  },
  {
    number: "03",
    title: "Simple Tracking",
    text: "Your contributions are easy to follow. No spreadsheets, no guesswork.",
  },
  {
    number: "04",
    title: "Doorstep Delivery",
    text: "When your cycle completes, your package comes to you — free, within covered areas.",
  },
];

/* ================= IMAGES ================= */
const IMG_STORY =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?fm=webp&q=90&w=1600";
const IMG_STORY_SMALL =
  "https://images.unsplash.com/photo-1595855759920-86582396756a?fm=webp&q=90&w=1600";

const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#eef3ea"/>
      <text x="200" y="208" font-family="sans-serif" font-size="20"
        font-weight="700" fill="#006b2d" text-anchor="middle">Foodstuff</text>
    </svg>`
  );

const handleImageError = (event) => {
  const img = event.currentTarget;
  if (img.dataset.fallback === "true") return;
  img.dataset.fallback = "true";
  img.src = FALLBACK_IMAGE;
};

/* ================= COMPONENT ================= */
const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">

            <span className="about-eyebrow">
              <i className="bi bi-people-fill"></i>
              ABOUT US
            </span>

            <h1>
              Making Food Shopping
              <span> Lighter On Your Pocket.</span>
            </h1>

            <p>
              We help families save gradually towards a complete foodstuff
              package — so the cost of feeding your home never lands all
              at once.
            </p>

            <nav className="about-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>About</span>
            </nav>

          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="about-story-visual">
                <div className="about-story-img about-story-img-main">
                  <img
                    src={IMG_STORY}
                    alt="Market foodstuff display"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>

                <div className="about-story-img about-story-img-small">
                  <img
                    src={IMG_STORY_SMALL}
                    alt="Fresh produce at the market"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>

                <div className="about-story-badge">
                  <strong>₦750</strong>
                  <small>START SAVING<br />FROM /DAY</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-story-content">

                <span className="about-label">OUR STORY</span>

                <h2>
                  Built Around A Problem
                  <br />
                  Every Family <strong>Knows.</strong>
                </h2>

                <p>
                  Buying foodstuff in bulk is expensive. Buying it in small
                  bits every week is easier on the wallet but never quite
                  adds up to a full package. So families end up stuck
                  between two hard choices.
                </p>

                <p>
                  We built this savings plan to close that gap. Instead of
                  one heavy payment, you save a small amount each day and
                  we turn those small amounts into a complete food package
                  for your household.
                </p>

                <div className="about-story-points">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Save at your own pace
                  </div>
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    No penalties for missing a day
                  </div>
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Full package delivered to you
                  </div>
                </div>

                <Link to="/plans" className="about-story-btn">
                  Explore Our Plans
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">

            {STATS.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <div className="about-stat-value">
                  {stat.prefix && <small>{stat.prefix}</small>}
                  <strong>{stat.value}</strong>
                  {stat.suffix && <small>{stat.suffix}</small>}
                </div>

                <span className="about-stat-label">{stat.label}</span>
                <p className="about-stat-note">{stat.note}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="about-values">
        <div className="container">

          <div className="about-heading">
            <span>WHAT WE STAND FOR</span>
            <h2>
              The Principles Behind
              <br />
              Every <strong>Package.</strong>
            </h2>
            <p>
              These are not slogans. They are the rules we hold ourselves
              to when handling your money and your food.
            </p>
          </div>

          <div className="row g-4">
            {VALUES.map((value) => (
              <div className="col-md-6 col-lg-3" key={value.title}>
                <div className="about-value-card">
                  <div className="about-value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROMISES ================= */}
      <section className="about-promises">
        <div className="container">
          <div className="row g-5 align-items-start">

            <div className="col-lg-5">
              <div className="about-promises-aside">
                <span className="about-label about-label-light">OUR PROMISE</span>

                <h2>
                  What You Can
                  <br />
                  Expect From Us.
                </h2>

                <p>
                  We are handling something people work hard for. That
                  responsibility shapes every part of how we operate.
                </p>

                <a
                  href={buildWhatsAppLink(
                    "Hello, I would like to learn more about your savings plan."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-promises-btn"
                >
                  <i className="bi bi-whatsapp"></i>
                  Talk To Us
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-promises-list">

                {PROMISES.map((promise) => (
                  <div className="about-promise" key={promise.number}>
                    <span className="about-promise-number">
                      {promise.number}
                    </span>

                    <div>
                      <h3>{promise.title}</h3>
                      <p>{promise.text}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-box">

            <div className="about-cta-decoration about-cta-decoration-one"></div>
            <div className="about-cta-decoration about-cta-decoration-two"></div>

            <div className="about-cta-content">
              <span>JOIN US</span>

              <h2>
                Start Building Your
                <br />
                Foodstuff Package Today.
              </h2>

              <p>
                Pick a plan that fits your budget and take the first step.
                It only takes a few minutes.
              </p>

              <div className="about-cta-actions">
                <Link to="/register" className="about-cta-btn">
                  Register Now
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/contact" className="about-cta-outline">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTERNAL STYLES ================= */}
      <style>{`
        /* ================= PAGE ================= */
        .about-page {
          background: #ffffff;
        }

        /* ================= HERO ================= */
        .about-hero {
          position: relative;
          padding: 90px 0 80px;
          background: #102118;
          overflow: hidden;
        }

        .about-hero::before,
        .about-hero::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .about-hero::before {
          width: 380px;
          height: 380px;
          top: -160px;
          right: -110px;
          background: rgba(184, 223, 57, 0.1);
        }

        .about-hero::after {
          width: 280px;
          height: 280px;
          bottom: -160px;
          left: -90px;
          background: rgba(0, 107, 45, 0.35);
        }

        .about-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #b8df39;
          margin-bottom: 16px;
        }

        .about-hero h1 {
          font-size: clamp(28px, 4.2vw, 50px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 18px;
        }

        .about-hero h1 span {
          color: #b8df39;
        }

        .about-hero p {
          max-width: 560px;
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 26px;
        }

        .about-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
        }

        .about-breadcrumb a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .about-breadcrumb a:hover {
          color: #b8df39;
        }

        .about-breadcrumb i {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.35);
        }

        .about-breadcrumb span {
          color: #f4b942;
          font-weight: 600;
        }

        /* ================= SHARED ================= */
        .about-label {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #006b2d;
          margin-bottom: 10px;
        }

        .about-label-light {
          color: #b8df39;
        }

        .about-heading {
          max-width: 620px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .about-heading > span {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #006b2d;
          margin-bottom: 10px;
        }

        .about-heading h2 {
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 800;
          line-height: 1.15;
          color: #102118;
          margin: 0 0 12px;
        }

        .about-heading h2 strong {
          color: #006b2d;
        }

        .about-heading p {
          font-size: 15px;
          line-height: 1.65;
          color: rgba(16, 33, 24, 0.62);
          margin: 0;
        }

        /* ================= STORY ================= */
        .about-story {
          padding: 90px 0;
          background: #ffffff;
        }

        .about-story-visual {
          position: relative;
          padding-bottom: 60px;
          padding-right: 40px;
        }

        .about-story-img {
          border-radius: 20px;
          overflow: hidden;
          background: #eef3ea;
        }

        .about-story-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-story-img-main {
          aspect-ratio: 4 / 5;
        }

        .about-story-img-small {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 55%;
          aspect-ratio: 1 / 1;
          border: 6px solid #ffffff;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(16, 33, 24, 0.14);
        }

        .about-story-badge {
          position: absolute;
          top: 24px;
          left: -14px;
          z-index: 2;

          background: #b8df39;
          color: #102118;

          padding: 14px 18px;
          border-radius: 14px;
          box-shadow: 0 14px 30px rgba(16, 33, 24, 0.16);
        }

        .about-story-badge strong {
          display: block;
          font-size: 22px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .about-story-badge small {
          display: block;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          line-height: 1.4;
          margin-top: 4px;
          opacity: 0.75;
        }

        .about-story-content h2 {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.15;
          color: #102118;
          margin: 0 0 18px;
        }

        .about-story-content h2 strong {
          color: #006b2d;
        }

        .about-story-content p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(16, 33, 24, 0.66);
          margin: 0 0 16px;
        }

        .about-story-points {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin: 26px 0 30px;
        }

        .about-story-points div {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #102118;
        }

        .about-story-points i {
          color: #006b2d;
          font-size: 15px;
          flex-shrink: 0;
        }

        .about-story-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 14px 26px;

          background: #006b2d;
          color: #ffffff;
          border-radius: 11px;

          font-size: 14px;
          font-weight: 600;
          text-decoration: none;

          transition: background 0.2s ease, gap 0.2s ease, transform 0.15s ease;
        }

        .about-story-btn:hover {
          background: #00521f;
          color: #ffffff;
          gap: 13px;
        }

        .about-story-btn:active {
          transform: scale(0.98);
        }

        /* ================= STATS ================= */
        .about-stats {
          padding: 0 0 90px;
          background: #ffffff;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;

          background: rgba(16, 33, 24, 0.1);
          border-radius: 20px;
          overflow: hidden;
        }

        .about-stat {
          padding: 32px 24px;
          background: #f7f9f5;
          transition: background 0.25s ease;
        }

        .about-stat:hover {
          background: #ffffff;
        }

        .about-stat-value {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 10px;
        }

        .about-stat-value strong {
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #006b2d;
        }

        .about-stat-value small {
          font-size: 16px;
          font-weight: 700;
          color: #006b2d;
          opacity: 0.7;
        }

        .about-stat-label {
          display: block;
          font-size: 13.5px;
          font-weight: 700;
          color: #102118;
          margin-bottom: 5px;
        }

        .about-stat-note {
          font-size: 12.5px;
          line-height: 1.5;
          color: rgba(16, 33, 24, 0.55);
          margin: 0;
        }

        /* ================= VALUES ================= */
        .about-values {
          padding: 90px 0;
          background: #f7f9f5;
        }

        .about-value-card {
          height: 100%;
          padding: 28px 24px;

          background: #ffffff;
          border: 1px solid rgba(16, 33, 24, 0.08);
          border-radius: 18px;

          transition: transform 0.25s ease, border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .about-value-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 107, 45, 0.3);
          box-shadow: 0 14px 30px rgba(16, 33, 24, 0.08);
        }

        .about-value-icon {
          width: 48px;
          height: 48px;
          border-radius: 13px;

          display: grid;
          place-items: center;

          background: rgba(0, 107, 45, 0.09);
          color: #006b2d;
          font-size: 20px;

          margin-bottom: 18px;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .about-value-card:hover .about-value-icon {
          background: #006b2d;
          color: #ffffff;
        }

        .about-value-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #102118;
          margin: 0 0 9px;
        }

        .about-value-card p {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(16, 33, 24, 0.62);
          margin: 0;
        }

        /* ================= PROMISES ================= */
        .about-promises {
          padding: 90px 0;
          background: #102118;
          position: relative;
          overflow: hidden;
        }

        .about-promises::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          top: -140px;
          right: -100px;
          border-radius: 50%;
          background: rgba(184, 223, 57, 0.07);
          pointer-events: none;
        }

        .about-promises-aside {
          position: relative;
          z-index: 1;
        }

        .about-promises-aside h2 {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 16px;
        }

        .about-promises-aside p {
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.68);
          margin: 0 0 26px;
          max-width: 380px;
        }

        .about-promises-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 13px 22px;

          background: #b8df39;
          color: #102118;
          border-radius: 11px;

          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;

          transition: background 0.2s ease, gap 0.2s ease;
        }

        .about-promises-btn:hover {
          background: #c9ea52;
          color: #102118;
          gap: 13px;
        }

        .about-promises-list {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          overflow: hidden;
        }

        .about-promise {
          display: flex;
          align-items: flex-start;
          gap: 20px;

          padding: 24px 26px;
          background: #102118;

          transition: background 0.25s ease;
        }

        .about-promise:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .about-promise-number {
          flex-shrink: 0;

          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;

          color: #b8df39;
          padding-top: 2px;
        }

        .about-promise h3 {
          font-size: 15.5px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
        }

        .about-promise p {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.62);
          margin: 0;
        }

        /* ================= CTA ================= */
        .about-cta {
          padding: 90px 0 100px;
          background: #ffffff;
        }

        .about-cta-box {
          position: relative;
          overflow: hidden;

          padding: 60px 40px;

          background: #006b2d;
          border-radius: 24px;
          text-align: center;
        }

        .about-cta-decoration {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .about-cta-decoration-one {
          width: 300px;
          height: 300px;
          top: -140px;
          left: -100px;
          background: rgba(184, 223, 57, 0.12);
        }

        .about-cta-decoration-two {
          width: 220px;
          height: 220px;
          bottom: -120px;
          right: -70px;
          background: rgba(244, 185, 66, 0.16);
        }

        .about-cta-content {
          position: relative;
          z-index: 1;
        }

        .about-cta-content > span {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #b8df39;
          margin-bottom: 14px;
        }

        .about-cta-content h2 {
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 14px;
        }

        .about-cta-content p {
          max-width: 480px;
          margin: 0 auto 26px;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.78);
        }

        .about-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 14px 28px;

          background: #b8df39;
          color: #102118;
          border-radius: 11px;

          font-size: 14px;
          font-weight: 700;
          text-decoration: none;

          transition: background 0.2s ease, gap 0.2s ease, transform 0.15s ease;
        }

        .about-cta-btn:hover {
          background: #c9ea52;
          color: #102118;
          gap: 13px;
        }

        .about-cta-btn:active {
          transform: scale(0.98);
        }

        .about-cta-outline {
          display: inline-flex;
          align-items: center;

          padding: 14px 28px;

          background: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          border-radius: 11px;

          font-size: 14px;
          font-weight: 600;
          text-decoration: none;

          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .about-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 991.98px) {
          .about-hero {
            padding: 70px 0 64px;
          }

          .about-story,
          .about-values,
          .about-promises {
            padding: 64px 0;
          }

          .about-stats {
            padding-bottom: 64px;
          }

          .about-cta {
            padding: 64px 0 80px;
          }

          .about-story-visual {
            max-width: 520px;
            margin: 0 auto 40px;
          }

          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-promises-aside {
            max-width: 520px;
          }
        }

        @media (max-width: 767.98px) {
          .about-hero {
            padding: 56px 0 50px;
          }

          .about-story,
          .about-values,
          .about-promises {
            padding: 54px 0;
          }

          .about-stats {
            padding-bottom: 54px;
          }

          .about-cta {
            padding: 54px 0 70px;
          }

          .about-story-visual {
            padding-right: 30px;
            padding-bottom: 50px;
          }

          .about-story-badge {
            top: 16px;
            left: -8px;
            padding: 12px 15px;
          }

          .about-story-badge strong {
            font-size: 19px;
          }

          .about-stat {
            padding: 24px 20px;
          }

          .about-stat-value strong {
            font-size: 30px;
          }

          .about-promise {
            padding: 20px 20px;
            gap: 15px;
          }

          .about-cta-box {
            padding: 44px 24px;
            border-radius: 18px;
          }
        }

        @media (max-width: 479.98px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </div>
  );
};

export default About;