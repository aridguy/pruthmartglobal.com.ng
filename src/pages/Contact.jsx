import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Contact.css";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "2348060200578";
const CONTACT_EMAIL = "hello@foodmart.ng";
const CONTACT_PHONE = "+234 806 020 0578";

const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ================= DATA ================= */
const CONTACT_CARDS = [
  {
    id: 1,
    icon: "bi-telephone-fill",
    label: "Call Us",
    value: CONTACT_PHONE,
    note: "Mon – Sat, 8am – 6pm",
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  {
    id: 2,
    icon: "bi-envelope-fill",
    label: "Email Us",
    value: CONTACT_EMAIL,
    note: "We reply within 24 hours",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: 3,
    icon: "bi-geo-alt-fill",
    label: "Visit Us",
    value: "12 Market Road, Lagos",
    note: "Open to walk-ins",
    href: null,
  },
  {
    id: 4,
    icon: "bi-whatsapp",
    label: "WhatsApp",
    value: CONTACT_PHONE,
    note: "Fastest response",
    href: buildWhatsAppLink("Hello, I have an enquiry."),
  },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // "sent" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    /* ---------------------------------------------------------
       Replace this block with your real submit — an API call,
       an email service (EmailJS / Formspree), or a WhatsApp
       handoff. Left as a stub so the form works out of the box.
    --------------------------------------------------------- */
    console.log("Contact form submitted:", form);

    setStatus("sent");
    setForm(INITIAL_FORM);
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-inner">

            <span className="contact-eyebrow">
              <i className="bi bi-chat-dots-fill"></i>
              GET IN TOUCH
            </span>

            <h1>
              We'd Love To
              <span> Hear From You.</span>
            </h1>

            <p>
              Questions about a plan, an order, or a delivery? Reach out
              and our team will get back to you as quickly as possible.
            </p>

            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>Contact</span>
            </nav>

          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="contact-cards">
        <div className="container">
          <div className="row g-4">

            {CONTACT_CARDS.map((card) => {
              const Tag = card.href ? "a" : "div";
              const extraProps = card.href
                ? {
                    href: card.href,
                    target: card.href.startsWith("http") ? "_blank" : undefined,
                    rel: card.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                : {};

              return (
                <div className="col-md-6 col-lg-3" key={card.id}>
                  <Tag className="contact-card" {...extraProps}>
                    <div className="contact-card-icon">
                      <i className={`bi ${card.icon}`}></i>
                    </div>

                    <span className="contact-card-label">{card.label}</span>
                    <strong className="contact-card-value">{card.value}</strong>
                    <small className="contact-card-note">{card.note}</small>
                  </Tag>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= FORM + SIDE ================= */}
      <section className="contact-main">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* ---------- FORM ---------- */}
            <div className="col-lg-7">
              <div className="contact-form-wrap">

                <div className="contact-section-heading">
                  <span>SEND A MESSAGE</span>
                  <h2>
                    Tell Us How We
                    <br />
                    Can <strong>Help You.</strong>
                  </h2>
                  <p>
                    Fill in the form below and we'll get back to you.
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="contact-input"
                        placeholder="e.g. Ada Okonkwo"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="contact-input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="contact-input"
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="subject">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="contact-input contact-select"
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option>General Enquiry</option>
                        <option>Savings Plan Question</option>
                        <option>Order & Delivery</option>
                        <option>Partnership</option>
                        <option>Complaint</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="contact-label" htmlFor="message">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="contact-input contact-textarea"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="contact-alert contact-alert-error">
                      <i className="bi bi-exclamation-circle-fill"></i>
                      Please fill in your name, email, and message.
                    </p>
                  )}

                  {status === "sent" && (
                    <p className="contact-alert contact-alert-success">
                      <i className="bi bi-check-circle-fill"></i>
                      Thank you! Your message has been sent. We'll be in touch.
                    </p>
                  )}

                  <button type="submit" className="contact-submit">
                    Send Message
                    <i className="bi bi-arrow-right"></i>
                  </button>

                </form>
              </div>
            </div>

            {/* ---------- SIDE ---------- */}
            <div className="col-lg-5">
              <div className="contact-side">

                {/* WHATSAPP */}
                <div className="contact-side-card contact-side-wa">
                  <div className="contact-side-icon">
                    <i className="bi bi-whatsapp"></i>
                  </div>

                  <h3>Prefer To Chat?</h3>

                  <p>
                    Message us directly on WhatsApp for the fastest response
                    on orders and delivery questions.
                  </p>

                  <a
                    href={buildWhatsAppLink("Hello, I have an enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-side-btn"
                  >
                    Chat on WhatsApp
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>

                {/* HOURS */}
                <div className="contact-side-card">
                  <h3>Opening Hours</h3>

                  <ul className="contact-hours">
                    <li>
                      <span>Monday – Friday</span>
                      <strong>8:00am – 6:00pm</strong>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <strong>9:00am – 4:00pm</strong>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <strong className="is-closed">Closed</strong>
                    </li>
                  </ul>
                </div>

                {/* QUICK LINKS */}
                <div className="contact-side-card">
                  <h3>Quick Links</h3>

                  <ul className="contact-links">
                    <li>
                      <Link to="/plans">
                        View Savings Plans
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        Browse Products
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register">
                        Create an Account
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="contact-map">
        <div className="container">
          <div className="contact-map-box">

            <div className="contact-map-overlay">
              <span>OUR LOCATION</span>
              <h3>12 Market Road, Lagos</h3>
              <p>
                Come see us in person — our team is happy to walk you
                through the savings plans.
              </p>

              <a
                href="https://maps.google.com/?q=12+Market+Road+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-btn"
              >
                Get Directions
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>

            {/* Swap the src for your own embed URL */}
            <iframe
              className="contact-map-frame"
              title="Our location"
              src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="contact-cta">
        <div className="container">
          <div className="contact-cta-box">

            <div className="contact-cta-decoration contact-cta-decoration-one"></div>
            <div className="contact-cta-decoration contact-cta-decoration-two"></div>

            <div className="contact-cta-content">
              <span>READY TO START?</span>

              <h2>
                Begin Your Foodstuff
                <br />
                Savings Journey Today.
              </h2>

              <p>
                Choose a plan, register, and start saving towards a
                hassle-free foodstuff package.
              </p>

              <Link to="/register" className="contact-cta-btn">
                Register Now
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;