"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const serviceLinks = [
  { href: "/services/seo", name: "SEO" },
  { href: "/services/seo-audits", name: "SEO Audits" },
  { href: "/services/google-ads-management", name: "Google Ads" },
  { href: "/services/web-development", name: "Web Development" },
  { href: "/services/geo", name: "GEO (AI Search)" },
  { href: "/services", name: "All Services" },
];

// Small corner arrow used on boxed links (top-right of the box)
const Corner = () => (
  <span className={styles.corner} aria-hidden="true">
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M1 1.5h7.5V9" />
    </svg>
  </span>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Close the Services panel on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${open ? styles.menuOpen : ""}`}>
        <Link href="/" className={styles.brand} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/scaleseo-wordmark.svg" alt="Scale SEO" className={styles.logo} />
        </Link>

        <span className={styles.tagline}>
          SEO for professional
          <br />
          service businesses
        </span>

        <div className={styles.col}>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/results" onClick={close}>Case Studies</Link>
        </div>

        <div className={`${styles.col} ${styles.colRule}`} ref={servicesRef}>
          <Link href="/industries" onClick={close}>Industries</Link>
          <button
            type="button"
            className={styles.plusBtn}
            aria-expanded={servicesOpen}
            aria-controls="services-panel"
            onClick={() => setServicesOpen((v) => !v)}
          >
            <span className={styles.plus} aria-hidden="true">{servicesOpen ? "×" : "+"}</span>
            Services
          </button>

          <div
            id="services-panel"
            className={`${styles.panel} ${servicesOpen ? styles.panelOpen : ""}`}
          >
            <div className={styles.panelHead}>
              <span>Our services</span>
              <button type="button" onClick={() => setServicesOpen(false)}>
                <span aria-hidden="true">×</span> Close
              </button>
            </div>
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} className={styles.panelRow} onClick={close}>
                <span>{s.name}</span>
                <span aria-hidden="true">›</span>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <Link href="/pricing" onClick={close}>Pricing</Link>
          <Link href="/blog" onClick={close}>Blog</Link>
        </div>

        <Link href="/contact" className={styles.contactBox} onClick={close}>
          <Corner />
          <span>Contact</span>
        </Link>

        <a
          href="https://cal.com/corbinjensen-scaleseo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookLink}
        >
          <Corner />
          <span>Book a call</span>
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </nav>

      {/* Mobile menu, a sibling of <nav> so it sizes to the viewport */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/results" onClick={close}>Case Studies</Link>
        <div className={styles.mobileGroup}>
          <button
            type="button"
            className={styles.mobileGroupToggle}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            <span>Services</span>
            <span aria-hidden="true">{mobileServicesOpen ? "−" : "+"}</span>
          </button>
          <div
            id="mobile-services"
            className={`${styles.mobileSub} ${mobileServicesOpen ? styles.mobileSubOpen : ""}`}
          >
            {serviceLinks.map((s) => (
              <Link key={s.href} href={s.href} onClick={close}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/industries" onClick={close}>Industries</Link>
        <Link href="/pricing" onClick={close}>Pricing</Link>
        <Link href="/blog" onClick={close}>Blog</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
        <a
          href="https://cal.com/corbinjensen-scaleseo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={close}
        >
          <span>Book a call</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
