import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
// import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
        <Navbar />
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="home-hero-content">

                <span className="home-eyebrow">
                  <i className="bi bi-basket2-fill"></i>
                  SMART FOODSTUFF SAVINGS
                </span>

                <h1>
                  Save Little.
                  <span> Get More.</span>
                  <br />
                  Enjoy Hassle-Free Food Shopping.
                </h1>

                <p className="home-hero-text">
                  Join our affordable foodstuff savings plan and gradually
                  save towards a complete food package for you and your
                  family. Choose a plan that works for you and enjoy
                  convenient foodstuff delivery.
                </p>

                <div className="home-hero-buttons">
                  <Link to="/register" className="home-primary-btn">
                    Start Saving Today
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                  <Link to="/plans" className="home-secondary-btn">
                    View Our Plans
                  </Link>
                </div>

                <div className="home-trust-row">
                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Affordable Plans
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Quality Foodstuff
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Home Delivery
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="home-hero-visual">

                <div className="home-visual-badge">
                  <span>12</span>
                  <small>MONTHS<br />SAVINGS</small>
                </div>

                <div className="home-food-card home-food-card-one">
                  <i className="bi bi-bag-fill"></i>
                  <strong>50KG</strong>
                  <small>Rice</small>
                </div>

                <div className="home-food-card home-food-card-two">
                  <i className="bi bi-droplet-fill"></i>
                  <strong>5L</strong>
                  <small>Cooking Oil</small>
                </div>

                <div className="home-food-card home-food-card-three">
                  <i className="bi bi-box-seam-fill"></i>
                  <strong>FULL</strong>
                  <small>Food Package</small>
                </div>

                <div className="home-main-basket">
                  <div className="home-basket-circle">
                    <i className="bi bi-basket2-fill"></i>
                  </div>

                  <h3>Foodstuff<br />Savings</h3>

                  <p>
                    Save today and prepare
                    <br />
                    for tomorrow.
                  </p>

                  <div className="home-basket-price">
                    From <strong>₦750</strong>/day
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TRUST STRIP ================= */}
      <section className="home-trust-strip">
        <div className="container">
          <div className="row g-0">

            <div className="col-md-3">
              <div className="home-trust-item">
                <i className="bi bi-wallet2"></i>
                <div>
                  <strong>Affordable</strong>
                  <span>Daily savings options</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="home-trust-item">
                <i className="bi bi-box2-heart"></i>
                <div>
                  <strong>Complete Packages</strong>
                  <span>Essential food items</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="home-trust-item">
                <i className="bi bi-truck"></i>
                <div>
                  <strong>Free Delivery</strong>
                  <span>Convenient doorstep delivery</span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="home-trust-item">
                <i className="bi bi-shield-check"></i>
                <div>
                  <strong>Simple & Reliable</strong>
                  <span>A straightforward savings plan</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="home-intro">
        <div className="container">

          <div className="home-section-heading">
            <span>OUR SAVINGS PROGRAM</span>

            <h2>
              Turn Small Daily Savings
              <br />
              Into a <strong>Big Food Package.</strong>
            </h2>

            <p>
              Food shopping doesn't have to become a financial burden.
              Our savings plans help you spread your foodstuff expenses
              across the year while preparing for a complete package.
            </p>
          </div>

          <div className="row g-4 home-benefit-row">

            <div className="col-md-4">
              <div className="home-benefit-card">
                <div className="home-benefit-icon">
                  <i className="bi bi-calendar-check-fill"></i>
                </div>

                <h3>Save Gradually</h3>

                <p>
                  Make manageable contributions throughout your savings
                  period instead of paying for everything at once.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="home-benefit-card home-benefit-highlight">
                <div className="home-benefit-icon">
                  <i className="bi bi-cart-check-fill"></i>
                </div>

                <h3>Receive Your Package</h3>

                <p>
                  Your selected plan gives you access to a package packed
                  with essential foodstuff and household items.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="home-benefit-card">
                <div className="home-benefit-icon">
                  <i className="bi bi-house-heart-fill"></i>
                </div>

                <h3>Enjoy Convenience</h3>

                <p>
                  Once your package is ready, enjoy the convenience of
                  having your foodstuff delivered to you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= PLANS ================= */}
      <section className="home-plans">
        <div className="container">

          <div className="home-section-heading home-light-heading">
            <span>CHOOSE YOUR PLAN</span>

            <h2>
              A Plan Designed
              <br />
              For Your <strong>Budget.</strong>
            </h2>

            <p>
              Choose the savings option that fits your daily budget and
              start preparing for your foodstuff package.
            </p>
          </div>

          <div className="row justify-content-center g-4">

            {/* PLAN A */}
            <div className="col-lg-5">
              <div className="home-plan-card">

                <div className="home-plan-top">
                  <div>
                    <span>PLAN A</span>
                    <h3>Complete Family Package</h3>
                  </div>

                  <div className="home-plan-price">
                    <strong>₦950</strong>
                    <small>/day</small>
                  </div>
                </div>

                <div className="home-plan-divider"></div>

                <ul>
                  <li><i className="bi bi-check2"></i> 50KG Bag of Rice</li>
                  <li><i className="bi bi-check2"></i> 10KG Beans</li>
                  <li><i className="bi bi-check2"></i> 10KG Garri</li>
                  <li><i className="bi bi-check2"></i> 5 Litres Vegetable Oil</li>
                  <li><i className="bi bi-check2"></i> 5 Litres Palm Oil</li>
                  <li><i className="bi bi-check2"></i> Semovita & Poundo Yam</li>
                  <li><i className="bi bi-check2"></i> Noodles & Spaghetti</li>
                  <li><i className="bi bi-check2"></i> Beverages & Household Items</li>
                </ul>

                <Link to="/plans" className="home-plan-btn">
                  See Full Package
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>


            {/* PLAN B */}
            <div className="col-lg-5">
              <div className="home-plan-card home-plan-card-featured">

                <div className="home-plan-popular">
                  POPULAR CHOICE
                </div>

                <div className="home-plan-top">
                  <div>
                    <span>PLAN B</span>
                    <h3>Essential Family Package</h3>
                  </div>

                  <div className="home-plan-price">
                    <strong>₦750</strong>
                    <small>/day</small>
                  </div>
                </div>

                <div className="home-plan-divider"></div>

                <ul>
                  <li><i className="bi bi-check2"></i> 50KG Bag of Rice</li>
                  <li><i className="bi bi-check2"></i> 5KG Beans</li>
                  <li><i className="bi bi-check2"></i> 5KG Garri</li>
                  <li><i className="bi bi-check2"></i> 3 Litres Vegetable Oil</li>
                  <li><i className="bi bi-check2"></i> 5 Litres Palm Oil</li>
                  <li><i className="bi bi-check2"></i> Semovita & Poundo Yam</li>
                  <li><i className="bi bi-check2"></i> Noodles & Spaghetti</li>
                  <li><i className="bi bi-check2"></i> Beverages & Household Items</li>
                </ul>

                <Link to="/plans" className="home-plan-btn">
                  See Full Package
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>
            </div>

          </div>

          <div className="home-plans-footer">
            <Link to="/plans">
              Compare both plans in detail
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="home-how">
        <div className="container">

          <div className="home-section-heading">
            <span>HOW IT WORKS</span>

            <h2>
              Start Saving In
              <br />
              <strong>4 Simple Steps.</strong>
            </h2>

            <p>
              Getting started is simple. Choose your preferred package
              and begin your savings journey.
            </p>
          </div>

          <div className="home-steps">

            <div className="home-step">
              <div className="home-step-number">01</div>
              <div>
                <h3>Choose Your Plan</h3>
                <p>Select Plan A or Plan B based on your budget.</p>
              </div>
            </div>

            <div className="home-step">
              <div className="home-step-number">02</div>
              <div>
                <h3>Register</h3>
                <p>Provide your details and select your preferred plan.</p>
              </div>
            </div>

            <div className="home-step">
              <div className="home-step-number">03</div>
              <div>
                <h3>Save</h3>
                <p>Make your contributions according to your selected plan.</p>
              </div>
            </div>

            <div className="home-step">
              <div className="home-step-number">04</div>
              <div>
                <h3>Receive Your Package</h3>
                <p>Get your foodstuff package and enjoy the convenience.</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="home-included">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className="home-included-content">

                <span>WHAT'S INCLUDED</span>

                <h2>
                  Everything You Need
                  <strong> In One Package.</strong>
                </h2>

                <p>
                  Depending on your selected plan, your package can contain
                  essential foodstuff, cooking ingredients, beverages and
                  household essentials.
                </p>

                <Link to="/plans" className="home-outline-btn">
                  Explore Packages
                  <i className="bi bi-arrow-up-right"></i>
                </Link>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="home-items-grid">

                <div className="home-item">
                  <i className="bi bi-bag-fill"></i>
                  <span>Rice</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-circle-fill"></i>
                  <span>Beans</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-droplet-fill"></i>
                  <span>Cooking Oil</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-box-seam-fill"></i>
                  <span>Garri</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-cup-hot-fill"></i>
                  <span>Semovita</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-egg-fill"></i>
                  <span>Eggs</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-cup-straw"></i>
                  <span>Beverages</span>
                </div>

                <div className="home-item">
                  <i className="bi bi-house-heart-fill"></i>
                  <span>Household Items</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="home-final-cta">
        <div className="container">

          <div className="home-cta-box">

            <div className="home-cta-decoration home-cta-decoration-one"></div>
            <div className="home-cta-decoration home-cta-decoration-two"></div>

            <div className="home-cta-content">

              <span>READY TO START?</span>

              <h2>
                Start Your Foodstuff
                <br />
                Savings Journey Today.
              </h2>

              <p>
                Choose a plan, register and start saving towards
                a hassle-free foodstuff package.
              </p>

              <Link to="/register" className="home-cta-btn">
                Register Now
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/2348060200578"
        target="_blank"
        rel="noopener noreferrer"
        className="home-whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

    </div>
  );
};

export default Home;