import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Plans.css";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "2348060200578";
const DAYS_PER_MONTH = 30;
const DURATION_MONTHS = 12;

/* ================= HELPERS ================= */
const formatPrice = (value) => `₦${Number(value).toLocaleString("en-NG")}`;

const monthlyOf = (daily) => daily * DAYS_PER_MONTH;
const totalOf = (daily) => daily * DAYS_PER_MONTH * DURATION_MONTHS;

const buildPlanEnquiryLink = (plan) => {
  const message = [
    "Hello, I would like to enquire about:",
    "",
    `*${plan.code} — ${plan.name}*`,
    `Daily Amount: ${formatPrice(plan.daily)}/day`,
    `Duration: ${DURATION_MONTHS} months`,
    "",
    "Please share more details.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/* ================= DATA ================= */
const PLANS = [
  {
    id: "plan-a",
    code: "PLAN A",
    name: "Complete Family Package",
    tagline:
      "Our fullest package. Everything a family needs for the year, in bigger quantities.",
    daily: 950,
    featured: false,
    groups: [
      {
        icon: "bi-basket2-fill",
        label: "Grains & Staples",
        items: ["50KG Bag of Rice", "10KG Beans", "10KG Garri"],
      },
      {
        icon: "bi-droplet-fill",
        label: "Cooking Oils",
        items: ["5 Litres Vegetable Oil", "5 Litres Palm Oil"],
      },
      {
        icon: "bi-cup-hot-fill",
        label: "Swallow & Pasta",
        items: ["Semovita", "Poundo Yam", "Noodles", "Spaghetti"],
      },
      {
        icon: "bi-box-seam-fill",
        label: "Extras",
        items: ["Beverages", "Household Items"],
      },
    ],
  },
  {
    id: "plan-b",
    code: "PLAN B",
    name: "Essential Family Package",
    tagline:
      "A lighter package at a smaller daily amount. The essentials, covered.",
    daily: 750,
    featured: true,
    groups: [
      {
        icon: "bi-basket2-fill",
        label: "Grains & Staples",
        items: ["50KG Bag of Rice", "5KG Beans", "5KG Garri"],
      },
      {
        icon: "bi-droplet-fill",
        label: "Cooking Oils",
        items: ["3 Litres Vegetable Oil", "5 Litres Palm Oil"],
      },
      {
        icon: "bi-cup-hot-fill",
        label: "Swallow & Pasta",
        items: ["Semovita", "Poundo Yam", "Noodles", "Spaghetti"],
      },
      {
        icon: "bi-box-seam-fill",
        label: "Extras",
        items: ["Beverages", "Household Items"],
      },
    ],
  },
];

const COMPARISON = [
  { label: "Rice", a: "50KG", b: "50KG" },
  { label: "Beans", a: "10KG", b: "5KG" },
  { label: "Garri", a: "10KG", b: "5KG" },
  { label: "Vegetable Oil", a: "5 Litres", b: "3 Litres" },
  { label: "Palm Oil", a: "5 Litres", b: "5 Litres" },
  { label: "Semovita", a: "Included", b: "Included" },
  { label: "Poundo Yam", a: "Included", b: "Included" },
  { label: "Noodles & Spaghetti", a: "Included", b: "Included" },
  { label: "Beverages", a: "Included", b: "Included" },
  { label: "Household Items", a: "Included", b: "Included" },
  { label: "Free Delivery", a: "Yes", b: "Yes" },
  { label: "Daily Amount", a: "₦950", b: "₦750", highlight: true },
];

const STEPS = [
  {
    number: "01",
    icon: "bi-hand-index-thumb",
    title: "Choose Your Plan",
    text: "Pick Plan A or Plan B based on what your family needs and what your budget allows.",
  },
  {
    number: "02",
    icon: "bi-person-plus",
    title: "Register",
    text: "Create your account, select your plan, and set up your savings profile.",
  },
  {
    number: "03",
    icon: "bi-piggy-bank",
    title: "Save Gradually",
    text: "Contribute daily, weekly, or monthly — whatever suits you. Everything is tracked.",
  },
  {
    number: "04",
    icon: "bi-truck",
    title: "Receive Your Package",
    text: "At the end of your savings cycle, your full foodstuff package is delivered to you.",
  },
];

const FAQS = [
  {
    q: "How do I make my contributions?",
    a: "You can contribute daily, weekly, or monthly — whichever suits your income flow. Every payment is recorded against your plan so you always know exactly where you stand.",
  },
  {
    q: "What happens if I miss a day?",
    a: "Nothing breaks. You can catch up at any time by paying the amount you missed. There are no penalties for a missed day — your plan simply continues from where you left off.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. If your circumstances change, reach out to us and we will move you to the plan that fits you better. Any contributions already made carry over.",
  },
  {
    q: "When do I receive my package?",
    a: `Your package is delivered at the end of your ${DURATION_MONTHS}-month savings cycle, once your contributions are complete. We will contact you ahead of time to arrange delivery.`,
  },
  {
    q: "Is delivery really free?",
    a: "Yes, delivery is included at no extra cost within our covered delivery areas. If you are outside those areas, we will let you know before you register.",
  },
  {
    q: "Can I pay for the whole package at once?",
    a: "You can. If you would rather settle the full amount upfront instead of saving gradually, contact us on WhatsApp and we will arrange it for you.",
  },
];

/* ================= COMPONENT ================= */
const Plan = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="plan-page">

      {/* ================= HERO ================= */}
      <section className="plan-hero">
        <div className="container">
          <div className="plan-hero-inner">

            <span className="plan-eyebrow">
              <i className="bi bi-basket2-fill"></i>
              OUR SAVINGS PLANS
            </span>

            <h1>
              Pick A Plan.
              <span> Save Daily.</span>
              <br />
              Receive A Full Food Package.
            </h1>

            <p>
              Two straightforward savings plans built around real family
              needs. Choose the one that fits your budget and start
              preparing for your foodstuff package today.
            </p>

            <nav className="plan-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>Plans</span>
            </nav>

          </div>
        </div>
      </section>

      {/* ================= PLAN CARDS ================= */}
      <section className="plan-cards">
        <div className="container">
          <div className="row justify-content-center g-4">

            {PLANS.map((plan) => (
              <div className="col-lg-6" key={plan.id}>
                <div
                  className={`plan-card${plan.featured ? " plan-card-featured" : ""}`}
                >

                  {plan.featured && (
                    <div className="plan-card-ribbon">
                      <i className="bi bi-star-fill"></i>
                      MOST POPULAR
                    </div>
                  )}

                  {/* ---------- TOP ---------- */}
                  <div className="plan-card-top">
                    <span className="plan-card-code">{plan.code}</span>
                    <h2>{plan.name}</h2>
                    <p>{plan.tagline}</p>
                  </div>

                  {/* ---------- PRICE ---------- */}
                  <div className="plan-card-price">
                    <div className="plan-price-main">
                      <strong>{formatPrice(plan.daily)}</strong>
                      <small>/day</small>
                    </div>

                    <div className="plan-price-meta">
                      <span>
                        {formatPrice(monthlyOf(plan.daily))}
                        <small>/month</small>
                      </span>
                      <span>
                        {formatPrice(totalOf(plan.daily))}
                        <small>/12 months</small>
                      </span>
                    </div>
                  </div>

                  {/* ---------- ITEMS ---------- */}
                  <div className="plan-card-groups">
                    {plan.groups.map((group) => (
                      <div className="plan-group" key={group.label}>
                        <div className="plan-group-head">
                          <i className={`bi ${group.icon}`}></i>
                          <span>{group.label}</span>
                        </div>

                        <ul className="plan-group-list">
                          {group.items.map((item) => (
                            <li key={item}>
                              <i className="bi bi-check2"></i>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* ---------- ACTIONS ---------- */}
                  <div className="plan-card-actions">
                    <Link to="/register" className="plan-card-btn">
                      Choose {plan.code}
                      <i className="bi bi-arrow-right"></i>
                    </Link>

                    <a
                      href={buildPlanEnquiryLink(plan)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="plan-card-enquire"
                    >
                      <i className="bi bi-whatsapp"></i>
                      Ask a Question
                    </a>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="plan-compare">
        <div className="container">

          <div className="plan-section-heading">
            <span>SIDE BY SIDE</span>
            <h2>
              Compare Both
              <br />
              <strong>Packages.</strong>
            </h2>
            <p>
              Not sure which plan suits you? Here is exactly what each
              package contains, item by item.
            </p>
          </div>

          <div className="plan-compare-table">

            {/* header */}
            <div className="plan-compare-head">
              <div className="plan-compare-feature">What's Included</div>
              <div className="plan-compare-col">
                <span>PLAN A</span>
                <strong>Complete</strong>
              </div>
              <div className="plan-compare-col is-featured">
                <span>PLAN B</span>
                <strong>Essential</strong>
              </div>
            </div>

            {/* rows */}
            {COMPARISON.map((row) => (
              <div
                className={`plan-compare-row${row.highlight ? " is-highlight" : ""}`}
                key={row.label}
              >
                <div className="plan-compare-feature">{row.label}</div>
                <div className="plan-compare-col">{row.a}</div>
                <div className="plan-compare-col is-featured">{row.b}</div>
              </div>
            ))}

          </div>

          <div className="plan-compare-footer">
            <p>
              <i className="bi bi-info-circle"></i>
              Both plans run for {DURATION_MONTHS} months and include free
              delivery within our covered areas.
            </p>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="plan-how">
        <div className="container">

          <div className="plan-section-heading">
            <span>HOW IT WORKS</span>
            <h2>
              Start Saving In
              <br />
              <strong>4 Simple Steps.</strong>
            </h2>
            <p>
              Getting started is straightforward. Choose, register, save,
              and receive.
            </p>
          </div>

          <div className="plan-steps">
            {STEPS.map((step) => (
              <div className="plan-step" key={step.number}>
                <div className="plan-step-top">
                  <span className="plan-step-number">{step.number}</span>
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="plan-faq">
        <div className="container">

          <div className="row g-5">

            <div className="col-lg-4">
              <div className="plan-faq-aside">
                <span>QUESTIONS</span>

                <h2>
                  Everything You
                  <br />
                  Need To <strong>Know.</strong>
                </h2>

                <p>
                  Still unsure about something? Send us a message and we
                  will walk you through it.
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello, I have a question about the savings plans."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plan-faq-btn"
                >
                  <i className="bi bi-whatsapp"></i>
                  Chat With Us
                </a>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="plan-faq-list">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      className={`plan-faq-item${isOpen ? " is-open" : ""}`}
                      key={faq.q}
                    >
                      <button
                        type="button"
                        className="plan-faq-question"
                        onClick={() => toggleFaq(index)}
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
                        <div className="plan-faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="plan-cta">
        <div className="container">
          <div className="plan-cta-box">

            <div className="plan-cta-decoration plan-cta-decoration-one"></div>
            <div className="plan-cta-decoration plan-cta-decoration-two"></div>

            <div className="plan-cta-content">
              <span>READY TO START?</span>

              <h2>
                Choose Your Plan And
                <br />
                Begin Saving Today.
              </h2>

              <p>
                It takes a few minutes to register. Your foodstuff package
                is one savings cycle away.
              </p>

              <div className="plan-cta-actions">
                <Link to="/register" className="plan-cta-btn">
                  Register Now
                  <i className="bi bi-arrow-right"></i>
                </Link>

                <Link to="/contact" className="plan-cta-outline">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Plan;