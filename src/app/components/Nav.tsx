"use client";
import { useEffect, useRef, useState } from "react";
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
    href: "/services/seo-audits",
    name: "SEO Audits",
    desc: "Standalone technical & on-page audits with a prioritised roadmap.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4.5V3.5h6v1" strokeLinejoin="round" />
        <path d="M8.5 12.5l2.2 2.2 4.8-4.8" strokeLinecap="round" strokeLinejoin="round" />
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
  const navRef = useRef<HTMLElement | null>(null);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Small delay before closing the Services dropdown — without it, moving
  // the mouse diagonally from the trigger toward the menu (rather than
  // straight down) could momentarily leave the hoverable area and close
  // the menu before the pointer ever reached a child link.
  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };
  const closeServicesDelayed = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };
  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    };
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Match the bar to whatever section is behind it: sample the element
  // under the nav's bottom edge, walk up to the first ancestor with a
  // solid background, and copy that colour onto the nav. Light vs dark
  // text follows from the colour's luminance, so every section on every
  // page is handled without per-section flags.
  useEffect(() => {
    let frame = 0;
    const sample = () => {
      frame = 0;
      const nav = navRef.current;
      if (!nav) return;
      const y = nav.getBoundingClientRect().bottom + 1;
      // Sample near the left edge so inner cards (e.g. the contact form)
      // don't override the section colour
      const x = 4;
      let el = document
        .elementsFromPoint(x, y)
        .find((e) => !nav.contains(e)) as HTMLElement | undefined;
      while (el && el !== document.documentElement) {
        const bg = getComputedStyle(el).backgroundColor;
        const m = bg.match(/[\d.]+/g);
        if (m && (m.length < 4 || parseFloat(m[3]) > 0.5)) {
          const [r, g, b] = m.map(Number);
          nav.style.setProperty("--nav-bg", `rgb(${r}, ${g}, ${b})`);
          setDarkMode(0.2126 * r + 0.7152 * g + 0.0722 * b < 140);
          return;
        }
        el = el.parentElement ?? undefined;
      }
    };
    const onChange = () => {
      if (!frame) frame = requestAnimationFrame(sample);
    };
    sample();
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
    <nav
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuOpen : ""
      } ${darkMode ? styles.darkMode : ""}`}
    >
      <Link href="/" className={styles.brand} onClick={close}>
        <Logo className={styles.brandCrow} />
        <span className={styles.wordmark}>
          Scale<span className={styles.wordmarkAccent}>SEO</span>
        </span>
      </Link>
      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/results">Case Studies</Link>
        <div
          className={styles.navItem}
          onMouseEnter={openServices}
          onMouseLeave={closeServicesDelayed}
        >
          <Link href="/services">Services</Link>
          <div className={`${styles.servicesDropdown} ${servicesOpen ? styles.servicesDropdownOpen : ""}`}>
            <div className={styles.servicesDropdownInner}>
              <Link href="/services" className={styles.dropdownFeatured} onClick={close}>
                <span className={styles.dropdownFeaturedIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <line x1="15.5" y1="15.5" x2="21" y2="21" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={styles.dropdownFeaturedName}>All Services</span>
                <span className={styles.dropdownFeaturedDesc}>
                  One specialist, five services. Explore everything on offer.
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
        </div>
        <Link href="/industries">Industries</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
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
    </nav>
    {/* Full-screen mobile menu — rendered as a sibling of <nav>, not a
        descendant of it: <nav> has backdrop-filter, which establishes a
        containing block for position:fixed children, so a fixed overlay
        nested inside it gets sized/clipped to the nav pill instead of the
        viewport (the bug that made the menu unreadable/overlapping page
        content on mobile). Kept in the same component/close() state. */}
    <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
      <Link href="/results" onClick={close}>Case Studies</Link>
      <Link href="/services" onClick={close}>Services</Link>
      <Link href="/industries" onClick={close}>Industries</Link>
      <Link href="/about" onClick={close}>About</Link>
      <Link href="/contact" onClick={close}>Contact</Link>
      <motion.a
        href="https://cal.com/corbinjensen-scaleseo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mobileMenuCta}
        onClick={close}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={spring}
      >
        <span>Book a call</span>
        <span>&rarr;</span>
      </motion.a>
    </div>
    </>
  );
}
