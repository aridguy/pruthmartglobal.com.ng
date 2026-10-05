import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pruth-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <span className="logo-icon">🛒</span>
            <span>
              <strong>PruthMart</strong>
              <small>GLOBAL</small>
            </span>
          </a>

          <p className="footer-tagline">
            Your Kitchen, Our Priority!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/foodstuffs-plan">Foodstuffs Plan</a>
            <a href="/gifts">Gifts</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-column contact-column">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <a href="tel:+2347030064824">+2347030064824</a>
              <a href="tel:+2348602000578">+2348602000578</a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">●</span>
            <p>
              75A Iju Road, Ifako Ijaiye
              <br />
              Agege, Lagos.
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:info@pruthmart.global">
              info@pruthmart.global
            </a>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="footer-column social-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="/" aria-label="TikTok">♪</a>
            <a href="#/" aria-label="Facebook">f</a>
            <a href="/" aria-label="Instagram">◎</a>
            <a href="/" aria-label="WhatsApp">◔</a>
          </div>

          <h3 className="newsletter-title">
            Subscribe to our newsletter
          </h3>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />

            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <p>
            © 2025 PruthMart Global. All rights reserved.
          </p>

          <div className="footer-values">
            <span>🛡 Quality</span>
            <i>|</i>
            <span>Trust</span>
            <i>|</i>
            <span>Value</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;