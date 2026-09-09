"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Logo from "./Logo";
import styles from "./Nav.module.css";

const spring = { type: "spring" as const, stiffness: 300, damping: 20 };

const serviceLinks = [
  {
    href: "/services/seo",
    name: "SEO",
    desc: "Technical, on-page & local SEO built to move rankings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/services/google-ads-management",
    name: "Google Ads",
    desc: "Profitable PPC campaigns for professional service firms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l6-11 6 11" strokeLinejoin="round" />
        <path d="M15 17l4-7 3 7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/services/web-development",
    name: "Web Development",
    desc: "Fast, conversion-focused sites built with SEO in from day one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4.5" width="18" height="13" rx="1.5" />
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
        <line x1="12" y1="17.5" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    href: "/services/geo",
    name: "GEO (AI Search)",
    desc: "Get cited by ChatGPT, Perplexity & Google AI Overviews.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Invert the floating nav's colors while ANY dark-themed section is
  // behind it, so the pill stays legible over both light and dark ground.
  // Every dark section on every page marks itself with
  // data-nav-theme="dark" (see globals.css .nav-dark-section helper and
  // each section's className) instead of this hard-coding a single
  // homepage element id, so this works page-wide (About, homepage, etc.)
  useEffect(() => {
    const targets = document.querySelectorAll('[data-nav-theme="dark"]');
    if (!targets.length) return;
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        }
        setDarkMode(intersecting.size > 0);
      },
      { rootMargin: "-72px 0px -85% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuOpen : ""
      } ${darkMode ? styles.darkMode : ""}`}
    >
      <Link href="/" className={styles.brand} onClick={close}>
        <Logo className={styles.brandCrow} />
        <span className={styles.wordmark}>
          Scale<span style={{ color: "var(--accent)" }}>SEO</span>
        </span>
      </Link>
      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/results">Case Studies</Link>
        <div
          className={styles.navItem}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link href="/services">Services</Link>
          <div className={`${styles.servicesDropdown} ${servicesOpen ? styles.servicesDropdownOpen : ""}`}>
            <Link href="/services" className={styles.dropdownFeatured} onClick={close}>
              <span className={styles.dropdownFeaturedIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <line x1="15.5" y1="15.5" x2="21" y2="21" strokeLinecap="round" />
                </svg>
              </span>
              <span className={styles.dropdownFeaturedName}>All Services</span>
              <span className={styles.dropdownFeaturedDesc}>
                One specialist, four disciplines. Explore everything on offer.
              </span>
              <span className={styles.dropdownFeaturedBtn}>All services &rarr;</span>
            </Link>
            <div className={styles.dropdownGrid}>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className={styles.dropdownItem} onClick={close}>
                  <span className={styles.dropdownItemIcon} aria-hidden="true">{s.icon}</span>
                  <span className={styles.dropdownItemName}>{s.name}</span>
                  <span className={styles.dropdownItemDesc}>{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/industries">Industries</Link>
        <Link href="/#process">Process</Link>
        <Link href="/about">About</Link>
      </div>
      <motion.a
        href="https://cal.com/corbinjensen-scaleseo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navCta}
        onClick={close}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={spring}
      >
        <span>Book a call</span>
        <span className={styles.navCtaArrow}>&rarr;</span>
      </motion.a>
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
      {/* Full-screen mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <Link href="/results" onClick={close}>Case Studies</Link>
        <Link href="/services" onClick={close}>Services</Link>
        <Link href="/industries" onClick={close}>Industries</Link>
        <Link href="/#process" onClick={close}>Process</Link>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
      </div>
    </nav>
  );
}
