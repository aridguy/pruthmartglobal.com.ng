import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import "./FeaturedProducts.css";

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "2348060200578";

/* Inline SVG fallback — always renders, no network needed */
const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#eef3ea"/>
      <text x="200" y="208" font-family="sans-serif" font-size="20"
        font-weight="700" fill="#006b2d" text-anchor="middle">Foodstuff</text>
    </svg>`
  );

/* ================= DATA ================= */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Premium Rice",
    description:
      "50KG bag of long grain parboiled rice. Stone-free, well sorted, and perfect for everyday family meals.",
    price: 78000,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?fm=webp&q=90&w=1600",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Golden Beans",
    description:
      "10KG of hand-sorted honey beans. Clean, well dried, and quick to cook with a rich natural taste.",
    price: 24500,
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?fm=webp&q=90&w=1600",
  },
  {
    id: 3,
    name: "Vegetable Oil",
    description:
      "5 litre bottle of pure, cholesterol-free vegetable oil. Light, clean, and ideal for all cooking.",
    price: 12800,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?fm=webp&q=90&w=1600",
  },
  {
    id: 4,
    name: "Palm Oil",
    description:
      "5 litre keg of rich, unrefined red palm oil. Deep colour and authentic flavour for traditional dishes.",
    price: 11500,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?fm=webp&q=90&w=1600",
  },
  {
    id: 5,
    name: "White Garri",
    description:
      "10KG of smooth, fine-sifted white garri. Freshly processed and perfect for soaking or eba.",
    price: 9500,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?fm=webp&q=90&w=1600",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Semovita",
    description:
      "10KG of premium semolina with a smooth, fine texture. Easy to prepare and great with any soup.",
    price: 14200,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?fm=webp&q=90&w=1600",
  },
  {
    id: 7,
    name: "Poundo Yam",
    description:
      "2KG of poundo yam flour. Quick, lump-free, and a convenient way to enjoy smooth pounded yam.",
    price: 6800,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?fm=webp&q=90&w=1600",
  },
  {
    id: 8,
    name: "Spaghetti Pack",
    description:
      "Bundle of 10 quality spaghetti packs. Firm texture that holds up well in any sauce.",
    price: 7900,
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?fm=webp&q=90&w=1600",
  },
  {
    id: 9,
    name: "Instant Noodles",
    description:
      "Carton of 40 instant noodle packs in assorted flavours. A fast, filling option any time of day.",
    price: 9800,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?fm=webp&q=90&w=1600",
    badge: "New",
  },
  {
    id: 10,
    name: "Tomato Paste",
    description:
      "Carton of rich, thick tomato paste tins. Deep colour and concentrated flavour for your stews.",
    price: 8400,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?fm=webp&q=90&w=1600",
  },
];

/* ================= HELPERS ================= */
const formatPrice = (value) => `₦${Number(value).toLocaleString("en-NG")}`;

const buildWhatsAppLink = (product) => {
  const message = [
    "Hello, I would like to order:",
    "",
    `*${product.name}*`,
    `Price: ${formatPrice(product.price)}`,
    "",
    product.description,
    "",
    "Please confirm availability and delivery details.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const handleImageError = (event) => {
  const img = event.currentTarget;
  if (img.dataset.fallback === "true") return;
  img.dataset.fallback = "true";
  img.src = FALLBACK_IMAGE;
};

/* ================= SKELETON CARD ================= */
const SkeletonCard = () => (
  <article className="featured-card featured-card-skeleton" aria-hidden="true">
    <div className="featured-card-media featured-skeleton-media"></div>

    <div className="featured-card-body">
      <span className="featured-skeleton-line featured-skeleton-title"></span>
      <span className="featured-skeleton-line featured-skeleton-desc"></span>
      <span className="featured-skeleton-line featured-skeleton-desc short"></span>
      <span className="featured-skeleton-line featured-skeleton-price"></span>
      <span className="featured-skeleton-line featured-skeleton-btn"></span>
    </div>
  </article>
);

/* ================= COMPONENT ================= */
const FeaturedProducts = ({
  products = DEFAULT_PRODUCTS,
  loading = false,
  skeletonCount = 8,
  eyebrow = "FEATURED PRODUCTS",
  title = "Stock Your Kitchen",
  titleAccent = "Everyday Essentials.",
  subtitle = "Hand-picked foodstuff at fair prices. Tap any item to see the full details, or add it straight to your cart.",
  onAddToCart,
}) => {
  const trackRef = useRef(null);
  const timeoutRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [addedId, setAddedId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isEmpty = !loading && (!products || products.length === 0);

  /* ---------- arrow state ---------- */
  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, loading, products]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  /* ---------- modal: escape + scroll lock ---------- */
  useEffect(() => {
    if (!selectedProduct) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProduct]);

  /* ---------- navigation ---------- */
  const scrollByPage = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  /* ---------- cart ---------- */
  const handleAddToCart = (product) => {
    if (typeof onAddToCart === "function") onAddToCart(product);

    setAddedId(product.id);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setAddedId(null), 1400);
  };

  /* ---------- card keyboard ---------- */
  const handleCardKeyDown = (e, product) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedProduct(product);
    }
  };

  return (
    <section className="featured-products">
      <div className="container">

        {/* ================= HEAD ================= */}
        <div className="featured-head">
          <div className="featured-heading">
            <span>{eyebrow}</span>

            <h2>
              {title}
              <br />
              With <strong>{titleAccent}</strong>
            </h2>

            <p>{subtitle}</p>
          </div>

          <div className="featured-controls">
            <button
              type="button"
              className="featured-arrow"
              onClick={() => scrollByPage(-1)}
              disabled={loading || isEmpty || !canScrollLeft}
              aria-label="Scroll products left"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              type="button"
              className="featured-arrow"
              onClick={() => scrollByPage(1)}
              disabled={loading || isEmpty || !canScrollRight}
              aria-label="Scroll products right"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="featured-track" ref={trackRef}>
          {loading &&
            Array.from({ length: skeletonCount }).map((_, i) => (
              <SkeletonCard key={`skeleton-${i}`} />
            ))}

          {isEmpty && (
            <div className="featured-empty">
              <i className="bi bi-inbox"></i>
              <strong>No products available yet</strong>
              <span>Check back soon — we're restocking.</span>
            </div>
          )}

          {!loading &&
            products.map((product) => {
              const isAdded = addedId === product.id;

              return (
                <article
                  className="featured-card"
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProduct(product)}
                  onKeyDown={(e) => handleCardKeyDown(e, product)}
                  aria-label={`View details for ${product.name}`}
                >
                  <div className="featured-card-media">
                    {product.badge && (
                      <span className="featured-card-badge">{product.badge}</span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={handleImageError}
                    />

                    <span className="featured-card-view">
                      <i className="bi bi-eye"></i>
                      Quick View
                    </span>
                  </div>

                  <div className="featured-card-body">
                    <h3 className="featured-card-title">{product.name}</h3>

                    <p className="featured-card-desc">{product.description}</p>

                    <span className="featured-card-price">
                      {formatPrice(product.price)}
                    </span>

                    <button
                      type="button"
                      className={`featured-card-btn${isAdded ? " is-added" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      {isAdded ? (
                        <>
                          <i className="bi bi-check2-circle"></i>
                          Added
                        </>
                      ) : (
                        <>
                          <i className="bi bi-bag-plus"></i>
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
        </div>

        {/* ================= FOOTER ================= */}
        {!loading && !isEmpty && (
          <div className="featured-footer">
            <Link to="/products">
              View all products
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        )}

      </div>

      {/* ================= MODAL ================= */}
      {selectedProduct && (
        <div
          className="featured-modal"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
        >
          <div
            className="featured-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="featured-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close details"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="featured-modal-grid">

              <div className="featured-modal-media">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  onError={handleImageError}
                />
              </div>

              <div className="featured-modal-body">
                {selectedProduct.badge && (
                  <span className="featured-modal-badge">
                    {selectedProduct.badge}
                  </span>
                )}

                <h3>{selectedProduct.name}</h3>

                <span className="featured-modal-price">
                  {formatPrice(selectedProduct.price)}
                </span>

                <div className="featured-modal-divider"></div>

                <p>{selectedProduct.description}</p>

                <div className="featured-modal-actions">
                  <a
                    href={buildWhatsAppLink(selectedProduct)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-modal-order"
                  >
                    <i className="bi bi-whatsapp"></i>
                    Order on WhatsApp
                  </a>

                  <button
                    type="button"
                    className={`featured-modal-cart${
                      addedId === selectedProduct.id ? " is-added" : ""
                    }`}
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    {addedId === selectedProduct.id ? (
                      <>
                        <i className="bi bi-check2-circle"></i>
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <i className="bi bi-bag-plus"></i>
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedProducts;