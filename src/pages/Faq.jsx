import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "2348060200578";
const CONTACT_EMAIL = "hello@foodmart.ng";
const CONTACT_PHONE = "+234 806 020 0578";

const buildWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* ================= DATA ================= */
const CATEGORIES = [
  { id: "all", label: "All Questions", icon: "bi-grid-fill" },
  { id: "plans", label: "Savings Plans", icon: "bi-basket2-fill" },
  { id: "payments", label: "Payments", icon: "bi-credit-card-fill" },
  { id: "delivery", label: "Delivery", icon: "bi-truck" },
  { id: "account", label: "Account", icon: "bi-person-fill" },
];

const QUICK_HELP = [
  {
    id: 1,
    icon: "bi-whatsapp",
    title: "Chat on WhatsApp",
    text: "Fastest response",
    href: buildWhatsAppLink("Hello, I have a question."),
    external: true,
  },
  {
    id: 2,
    icon: "bi-telephone-fill",
    title: "Call Us",
    text: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
    external: false,
  },
  {
    id: 3,
    icon: "bi-envelope-fill",
    title: "Email Us",
    text: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
];

const FAQS = [
  {
    id: 1,
    category: "plans",
    q: "What exactly is the foodstuff savings plan?",
    a: "It is a gradual savings scheme where you contribute a small amount daily towards a complete foodstuff package. Instead of paying for everything at once, you save little by little over a 12-month cycle and receive your full package at the end.",
  },
  {
    id: 2,
    category: "plans",
    q: "Which plan should I choose — Plan A or Plan B?",
    a: "Plan A (Complete Family Package at ₦950/day) suits larger households that want bigger quantities of grains and oils. Plan B (Essential Family Package at ₦750/day) is a lighter option with slightly smaller quantities but the same essentials. If you are unsure, message us on WhatsApp and we will help you decide based on your family size.",
  },
  {
    id: 3,
    category: "plans",
    q: "Can I switch from one plan to another?",
    a: "Yes. If your circumstances change, reach out to us and we will move you to the plan that fits better. Any contributions you have already made carry over to the new plan — you do not lose anything.",
  },
  {
    id: 4,
    category: "plans",
    q: "What items are included in my package?",
    a: "Both plans include rice, beans, garri, vegetable oil, palm oil, semovita, poundo yam, noodles, spaghetti, beverages, and household items. Plan A has larger quantities of the staples. You can see the full item-by-item breakdown on our Plans page.",
  },
  {
    id: 5,
    category: "payments",
    q: "How do I make my contributions?",
    a: "You can contribute daily, weekly, or monthly — whichever suits your income flow. Every payment is recorded against your plan so you always know exactly where you stand. Bank transfer details are shared after registration.",
  },
  {
    id: 6,
    category: "payments",
    q: "What happens if I miss a day?",
    a: "Nothing breaks. You can catch up at any time by paying the amount you missed. There are no penalties for a missed day, and your plan simply continues from where you left off.",
  },
  {
    id: 7,
    category: "payments",
    q: "Can I pay for the whole package at once?",
    a: "You can. If you would rather settle the full amount upfront instead of saving gradually, contact us on WhatsApp and we will arrange it for you. The full-package price is available on request.",
  },
  {
    id: 8,
    category: "payments",
    q: "Are there any hidden charges or fees?",
    a: "No. What you see is what you pay. There are no registration fees, no processing fees, and no surprise charges at delivery. The daily amount covers your package and delivery in full.",
  },
  {
    id: 9,
    category: "payments",
    q: "Will the price change during my savings cycle?",
    a: "No. Once you register on a plan, the daily amount is locked in for your entire cycle. Market price changes do not affect what you pay.",
  },
  {
    id: 10,
    category: "delivery",
    q: "When do I receive my package?",
    a: "Your package is delivered at the end of your 12-month savings cycle, once your contributions are complete. We contact you ahead of time to arrange a convenient delivery date.",
  },
  {
    id: 11,
    category: "delivery",
    q: "Is delivery really free?",
    a: "Yes, delivery is included at no extra cost within our covered delivery areas. If you are outside those areas, we will let you know before you register so there are no surprises.",
  },
  {
    id: 12,
    category: "delivery",
    q: "How long does delivery take once my cycle ends?",
    a: "Once your cycle completes, we typically arrange delivery within 3 to 7 working days. Our team will contact you to confirm the exact date and time.",
  },
  {
    id: 13,
    category: "delivery",
    q: "Can I collect my package in person instead?",
    a: "Yes. If you would prefer to pick up your package rather than have it delivered, let us know before your cycle ends and we will arrange a collection point for you.",
  },
  {
    id: 14,
    category: "account",
    q: "How do I register?",
    a: "Click the Register button on any page, fill in your details, and select your preferred plan. Registration takes only a few minutes and there is no fee to sign up.",
  },
  {
    id: 15,
    category: "account",
    q: "How do I track my savings progress?",
    a: "Once you register, your account shows your contributions to date and how much is left to complete your cycle. You can also message us on WhatsApp at any time for a status update.",
  },
  {
    id: 16,
    category: "account",
    q: "What if I need to stop my plan mid-cycle?",
    a: "Life happens. If you need to pause or stop, contact us on WhatsApp. We will discuss your options, including pausing your cycle or receiving a partial package based on what you have contributed so far.",
  },
  {
    id: 17,
    category: "account",
    q: "Is my money safe with you?",
    a: "Every contribution is recorded against your account and visible to you. We operate with full transparency — you can request a statement of your contributions at any time.",
  },
  {
    id: 18,
    category: "account",
    q: "Can I register more than one person on the same account?",
    a: "One account holds one plan. If you want to save for multiple family members, you can set up separate accounts using different phone numbers, or contact us to discuss a combined arrangement.",
  },
];

/* ================= COMPONENT ================= */
const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(1);
  const [search, setSearch] = useState("");

  /* ---------- filtered list ---------- */
  const filteredFaqs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.q.toLowerCase().includes(query) ||
        faq.a.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenId(null);
  };

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-page">

      {/* ================= HERO ================= */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-inner">

            <span className="faq-eyebrow">
              <i className="bi bi-patch-question-fill"></i>
              HELP CENTRE
            </span>

            <h1>
              Frequently Asked
              <span> Questions.</span>
            </h1>

            <p>
              Everything you need to know about our savings plans,
              payments, and delivery. Can't find your answer? Reach out
              and we will help.
            </p>

            <nav className="faq-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>FAQ</span>
            </nav>

          </div>
        </div>
      </section>

      {/* ================= QUICK HELP ================= */}
      <section className="faq-help">
        <div className="container">
          <div className="row g-4">

            {QUICK_HELP.map((item) => (
              <div className="col-md-4" key={item.id}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="faq-help-card"
                >
                  <div className="faq-help-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>

                  <i className="bi bi-arrow-up-right faq-help-arrow"></i>
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="faq-main">
        <div className="container">
          <div className="row g-5">

            {/* ---------- SIDE ---------- */}
            <div className="col-lg-4">
              <div className="faq-aside">

                <div className="faq-aside-head">
                  <span>BROWSE TOPICS</span>
                  <h2>
                    Find Your
                    <br />
                    Answer <strong>Faster.</strong>
                  </h2>
                </div>

                <div className="faq-tabs">
                  {CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        className={`faq-tab${isActive ? " is-active" : ""}`}
                        onClick={() => handleCategoryChange(cat.id)}
                        aria-pressed={isActive}
                      >
                        <i className={`bi ${cat.icon}`}></i>
                        <span>{cat.label}</span>
                        <small>
                          {cat.id === "all"
                            ? FAQS.length
                            : FAQS.filter((f) => f.category === cat.id).length}
                        </small>
                      </button>
                    );
                  })}
                </div>

                <div className="faq-aside-card">
                  <i className="bi bi-headset"></i>
                  <h3>Still stuck?</h3>
                  <p>
                    Our team is happy to walk you through any part of the
                    plan that is not clear.
                  </p>

                  <Link to="/contact" className="faq-aside-btn">
                    Contact Support
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>

              </div>
            </div>

            {/* ---------- QUESTIONS ---------- */}
            <div className="col-lg-8">
              <div className="faq-content">

                {/* search */}
                <div className="faq-search">
                  <i className="bi bi-search"></i>

                  <input
                    type="text"
                    className="faq-search-input"
                    placeholder="Search questions..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search frequently asked questions"
                  />

                  {search && (
                    <button
                      type="button"
                      className="faq-search-clear"
                      onClick={() => setSearch("")}
                      aria-label="Clear search"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  )}
                </div>

                {/* count */}
                <div className="faq-count">
                  <span>
                    Showing <strong>{filteredFaqs.length}</strong>{" "}
                    {filteredFaqs.length === 1 ? "question" : "questions"}
                    {activeCategory !== "all" && (
                      <>
                        {" "}in{" "}
                        <strong>
                          {CATEGORIES.find((c) => c.id === activeCategory)?.label}
                        </strong>
                      </>
                    )}
                  </span>
                </div>

                {/* list */}
                {filteredFaqs.length > 0 ? (
                  <div className="faq-list">
                    {filteredFaqs.map((faq) => {
                      const isOpen = openId === faq.id;

                      return (
                        <div
                          className={`faq-item${isOpen ? " is-open" : ""}`}
                          key={faq.id}
                        >
                          <button
                            type="button"
                            className="faq-question"
                            onClick={() => toggleFaq(faq.id)}
                            aria-expanded={isOpen}
                          >
                            <span>{faq.q}</span>
                            <i
                              className={`bi ${
                                isOpen ? "bi-dash-lg" : "bi-plus-lg"
                              }`}
                            ></i>
                          </button>

                          {isOpen && (
                            <div className="faq-answer">
                              <p>{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="faq-empty">
                    <i className="bi bi-search"></i>
                    <strong>No questions match your search</strong>
                    <span>
                      Try a different keyword, or{" "}
                      <a
                        href={buildWhatsAppLink(
                          "Hello, I have a question that is not in your FAQ."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ask us directly on WhatsApp
                      </a>
                      .
                    </span>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="faq-cta">
        <div className="container">
          <div className="faq-cta-box">

            <div className="faq-cta-decoration faq-cta-decoration-one"></div>
            <div className="faq-cta-decoration faq-cta-decoration-two"></div>

            <div className="faq-cta-content">
              <span>READY TO START?</span>

              <h2>
                Choose Your Plan And
                <br />
                Begin Saving Today.
              </h2>

              <p>
                You have the answers. Now take the first step towards
                your foodstuff package.
              </p>

              <div className="faq-cta-actions">
                <Link to="/register" className="faq-cta-btn">
                  Register Now
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/plans" className="faq-cta-outline">
                  View Plans
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTERNAL STYLES ================= */}
      <style>{`
        /* ================= PAGE ================= */
        .faq-page {
          background: #ffffff;
        }

        /* ================= HERO ================= */
        .faq-hero {
          position: relative;
          padding: 90px 0 80px;
          background: #102118;
          overflow: hidden;
        }

        .faq-hero::before,
        .faq-hero::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .faq-hero::before {
          width: 380px;
          height: 380px;
          top: -160px;
          right: -110px;
          background: rgba(184, 223, 57, 0.1);
        }

        .faq-hero::after {
          width: 280px;
          height: 280px;
          bottom: -160px;
          left: -90px;
          background: rgba(0, 107, 45, 0.35);
        }

        .faq-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 680px;
        }

        .faq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #b8df39;
          margin-bottom: 16px;
        }

        .faq-hero h1 {
          font-size: clamp(28px, 4.2vw, 50px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 18px;
        }

        .faq-hero h1 span {
          color: #b8df39;
        }

        .faq-hero p {
          max-width: 560px;
          font-size: 15.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 26px;
        }

        .faq-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
        }

        .faq-breadcrumb a {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .faq-breadcrumb a:hover {
          color: #b8df39;
        }

        .faq-breadcrumb i {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.35);
        }

        .faq-breadcrumb span {
          color: #f4b942;
          font-weight: 600;
        }

        /* ================= QUICK HELP ================= */
        .faq-help {
          padding: 0 0 80px;
          margin-top: -40px;
          position: relative;
          z-index: 2;
          background: #ffffff;
        }

        .faq-help-card {
          display: flex;
          align-items: center;
          gap: 14px;

          height: 100%;
          padding: 22px 22px;

          background: #ffffff;
          border: 1px solid rgba(16, 33, 24, 0.08);
          border-radius: 16px;

          text-decoration: none;
          position: relative;

          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .faq-help-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 107, 45, 0.35);
          box-shadow: 0 16px 32px rgba(16, 33, 24, 0.1);
        }

        .faq-help-icon {
          flex-shrink: 0;

          width: 46px;
          height: 46px;
          border-radius: 12px;

          display: grid;
          place-items: center;

          background: rgba(0, 107, 45, 0.09);
          color: #006b2d;
          font-size: 18px;

          transition: background 0.25s ease, color 0.25s ease;
        }

        .faq-help-card:hover .faq-help-icon {
          background: #006b2d;
          color: #ffffff;
        }

        .faq-help-card strong {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #102118;
          margin-bottom: 2px;
        }

        .faq-help-card span {
          display: block;
          font-size: 12.5px;
          color: rgba(16, 33, 24, 0.55);
        }

        .faq-help-arrow {
          margin-left: auto;
          font-size: 14px;
          color: rgba(16, 33, 24, 0.3);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .faq-help-card:hover .faq-help-arrow {
          color: #006b2d;
          transform: translate(2px, -2px);
        }

        /* ================= MAIN ================= */
        .faq-main {
          padding: 0 0 90px;
          background: #ffffff;
        }

        /* ================= ASIDE ================= */
        .faq-aside-head {
          margin-bottom: 24px;
        }

        .faq-aside-head > span {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #006b2d;
          margin-bottom: 10px;
        }

        .faq-aside-head h2 {
          font-size: clamp(22px, 2.6vw, 30px);
          font-weight: 800;
          line-height: 1.18;
          color: #102118;
          margin: 0;
        }

        .faq-aside-head h2 strong {
          color: #006b2d;
        }

        /* ---------- tabs ---------- */
        .faq-tabs {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 28px;
        }

        .faq-tab {
          display: flex;
          align-items: center;
          gap: 11px;

          width: 100%;
          padding: 13px 16px;

          background: #f7f9f5;
          border: 1px solid transparent;
          border-radius: 11px;

          font-size: 13.5px;
          font-weight: 600;
          font-family: inherit;
          text-align: left;
          color: #102118;

          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease,
            color 0.2s ease;
        }

        .faq-tab i {
          font-size: 15px;
          color: rgba(16, 33, 24, 0.45);
          transition: color 0.2s ease;
          flex-shrink: 0;
        }

        .faq-tab span {
          flex: 1;
        }

        .faq-tab small {
          font-size: 11.5px;
          font-weight: 700;
          color: rgba(16, 33, 24, 0.4);
          background: #ffffff;
          padding: 2px 8px;
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .faq-tab:hover {
          background: rgba(0, 107, 45, 0.06);
          border-color: rgba(0, 107, 45, 0.18);
        }

        .faq-tab.is-active {
          background: #006b2d;
          border-color: #006b2d;
          color: #ffffff;
        }

        .faq-tab.is-active i {
          color: #b8df39;
        }

        .faq-tab.is-active small {
          background: #b8df39;
          color: #102118;
        }

        /* ---------- side card ---------- */
        .faq-aside-card {
          padding: 26px 22px;

          background: #102118;
          border-radius: 16px;
        }

        .faq-aside-card > i {
          display: grid;
          place-items: center;

          width: 46px;
          height: 46px;
          border-radius: 13px;

          background: rgba(184, 223, 57, 0.16);
          color: #b8df39;
          font-size: 20px;

          margin-bottom: 16px;
        }

        .faq-aside-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .faq-aside-card p {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 18px;
        }

        .faq-aside-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 11px 18px;

          background: #b8df39;
          color: #102118;
          border-radius: 10px;

          font-size: 13px;
          font-weight: 700;
          text-decoration: none;

          transition: background 0.2s ease, gap 0.2s ease;
        }

        .faq-aside-btn:hover {
          background: #c9ea52;
          color: #102118;
          gap: 12px;
        }

        /* ================= SEARCH ================= */
        .faq-search {
          position: relative;
          margin-bottom: 18px;
        }

        .faq-search > i {
          position: absolute;
          top: 50%;
          left: 18px;
          transform: translateY(-50%);

          font-size: 15px;
          color: rgba(16, 33, 24, 0.35);
          pointer-events: none;
        }

        .faq-search-input {
          width: 100%;

          padding: 15px 48px 15px 46px;

          background: #f7f9f5;
          border: 1.5px solid rgba(16, 33, 24, 0.1);
          border-radius: 13px;

          font-size: 14.5px;
          font-family: inherit;
          color: #102118;

          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .faq-search-input::placeholder {
          color: rgba(16, 33, 24, 0.38);
        }

        .faq-search-input:focus {
          background: #ffffff;
          border-color: #006b2d;
          box-shadow: 0 0 0 3px rgba(0, 107, 45, 0.12);
        }

        .faq-search-clear {
          position: absolute;
          top: 50%;
          right: 14px;
          transform: translateY(-50%);

          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: none;

          background: rgba(16, 33, 24, 0.08);
          color: #102118;
          font-size: 10px;

          display: grid;
          place-items: center;
          cursor: pointer;

          transition: background 0.2s ease;
        }

        .faq-search-clear:hover {
          background: rgba(16, 33, 24, 0.16);
        }

        /* ================= COUNT ================= */
        .faq-count {
          font-size: 13px;
          color: rgba(16, 33, 24, 0.55);
          margin-bottom: 14px;
        }

        .faq-count strong {
          color: #006b2d;
          font-weight: 700;
        }

        /* ================= LIST ================= */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .faq-item {
          background: #f7f9f5;
          border: 1px solid rgba(16, 33, 24, 0.08);
          border-radius: 14px;
          overflow: hidden;

          transition: border-color 0.2s ease, background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .faq-item:hover {
          border-color: rgba(0, 107, 45, 0.22);
        }

        .faq-item.is-open {
          background: #ffffff;
          border-color: rgba(0, 107, 45, 0.4);
          box-shadow: 0 10px 26px rgba(16, 33, 24, 0.06);
        }

        .faq-question {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;

          padding: 19px 22px;

          background: transparent;
          border: none;

          font-size: 14.5px;
          font-weight: 600;
          font-family: inherit;
          line-height: 1.5;
          text-align: left;
          color: #102118;

          cursor: pointer;
        }

        .faq-question i {
          flex-shrink: 0;

          width: 28px;
          height: 28px;
          border-radius: 50%;

          display: grid;
          place-items: center;

          background: rgba(0, 107, 45, 0.09);
          color: #006b2d;
          font-size: 11px;

          transition: background 0.2s ease, color 0.2s ease,
            transform 0.25s ease;
        }

        .faq-item.is-open .faq-question i {
          background: #006b2d;
          color: #ffffff;
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 22px 22px;
        }

        .faq-answer p {
          font-size: 13.5px;
          line-height: 1.75;
          color: rgba(16, 33, 24, 0.68);
          margin: 0;
          padding-top: 4px;
          border-top: 1px solid rgba(16, 33, 24, 0.07);
        }

        /* ================= EMPTY ================= */
        .faq-empty {
          padding: 54px 26px;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;

          text-align: center;

          background: #f7f9f5;
          border: 1px dashed rgba(16, 33, 24, 0.15);
          border-radius: 16px;
        }

        .faq-empty > i {
          font-size: 30px;
          color: rgba(16, 33, 24, 0.25);
          margin-bottom: 6px;
        }

        .faq-empty strong {
          font-size: 15px;
          font-weight: 700;
          color: #102118;
        }

        .faq-empty span {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(16, 33, 24, 0.58);
          max-width: 380px;
        }

        .faq-empty a {
          color: #006b2d;
          font-weight: 600;
          text-decoration: none;
        }

        .faq-empty a:hover {
          text-decoration: underline;
        }

        /* ================= CTA ================= */
        .faq-cta {
          padding: 0 0 100px;
          background: #ffffff;
        }

        .faq-cta-box {
          position: relative;
          overflow: hidden;

          padding: 60px 40px;

          background: #006b2d;
          border-radius: 24px;
          text-align: center;
        }

        .faq-cta-decoration {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .faq-cta-decoration-one {
          width: 300px;
          height: 300px;
          top: -140px;
          left: -100px;
          background: rgba(184, 223, 57, 0.12);
        }

        .faq-cta-decoration-two {
          width: 220px;
          height: 220px;
          bottom: -120px;
          right: -70px;
          background: rgba(244, 185, 66, 0.16);
        }

        .faq-cta-content {
          position: relative;
          z-index: 1;
        }

        .faq-cta-content > span {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #b8df39;
          margin-bottom: 14px;
        }

        .faq-cta-content h2 {
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          margin: 0 0 14px;
        }

        .faq-cta-content p {
          max-width: 480px;
          margin: 0 auto 26px;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.78);
        }

        .faq-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .faq-cta-btn {
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

        .faq-cta-btn:hover {
          background: #c9ea52;
          color: #102118;
          gap: 13px;
        }

        .faq-cta-btn:active {
          transform: scale(0.98);
        }

        .faq-cta-outline {
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

        .faq-cta-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 991.98px) {
          .faq-hero {
            padding: 70px 0 64px;
          }

          .faq-help {
            padding-bottom: 60px;
            margin-top: -30px;
          }

          .faq-main {
            padding-bottom: 70px;
          }

          .faq-cta {
            padding-bottom: 80px;
          }

          .faq-aside {
            margin-bottom: 10px;
          }

          .faq-tabs {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
          }

          .faq-tab {
            width: auto;
            padding: 10px 15px;
            font-size: 13px;
          }

          .faq-tab small {
            display: none;
          }
        }

        @media (max-width: 767.98px) {
          .faq-hero {
            padding: 56px 0 50px;
          }

          .faq-help {
            padding-bottom: 50px;
          }

          .faq-main {
            padding-bottom: 54px;
          }

          .faq-cta {
            padding-bottom: 70px;
          }

          .faq-question {
            padding: 16px 18px;
            font-size: 14px;
            gap: 14px;
          }

          .faq-answer {
            padding: 0 18px 18px;
          }

          .faq-answer p {
            font-size: 13px;
          }

          .faq-cta-box {
            padding: 44px 24px;
            border-radius: 18px;
          }
        }
      `}</style>

    </div>
  );
};

export default Faq;