"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const seoLinks = [
  { href: "/services/seo", name: "SEO Services", sub: "Complete SEO management" },
  { href: "/services/on-page-seo", name: "On-Page SEO", sub: "Content and page optimization" },
  { href: "/services/national-seo", name: "National SEO", sub: "Search visibility across Canada" },
  { href: "/services/seo-audits", name: "SEO Audits", sub: "Website analysis and recommendations" },
];
const otherLinks = [
  { href: "/services/web-development", name: "Website Development", sub: "Website design and ongoing support" },
  { href: "/services/geo", name: "AI Search Optimization", sub: "Visibility in AI-powered search" },
  { href: "/services/google-ads-management", name: "Google Ads Management", sub: "Paid search and lead generation" },
];
// Flat list for the mobile menu
const serviceLinks = [...seoLinks, ...otherLinks, { href: "/services", name: "All Services", sub: "" }];

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

  // Match the bar to the section underneath it: sections marked
  // data-nav="dark" turn the bar navy with white text.
  const [dark, setDark] = useState(false);
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const y = 72 + 1;
      const hit = document.elementsFromPoint(window.innerWidth / 2, y).find((el) => !el.closest("nav") && !el.closest("[data-nav-skip]"));
      setDark(!!hit?.closest('[data-nav="dark"]'));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

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
      <nav className={`${styles.nav} ${open ? styles.menuOpen : ""} ${dark && !open ? styles.dark : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="Scale SEO home" onClick={close}>
            <span className={styles.logoText}>
              Scale SE
              <svg className={styles.logoMark} viewBox="0 0 366 366" fill="none" stroke="#0099FF" aria-hidden="true">
                <circle cx="183" cy="183" r="164" strokeWidth="44" />
                <path d="M101 139 H224.5 V262" strokeWidth="46" />
              </svg>
            </span>
          </Link>

          <div className={styles.links}>
            <div className={styles.drop} ref={servicesRef}>
              <button
                type="button"
                className={styles.link}
                aria-expanded={servicesOpen}
                aria-controls="services-panel"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg className={`${styles.chev} ${servicesOpen ? styles.chevOpen : ""}`} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg>
              </button>
              <div id="services-panel" className={`${styles.panel} ${servicesOpen ? styles.panelOpen : ""}`}>
                <div className={styles.mega}>
                  {[["SEO Services", seoLinks], ["Other Services", otherLinks]].map(([label, links]) => (
                    <div key={label as string} className={styles.megaCol}>
                      <span className={styles.megaLabel}>/ {label as string}</span>
                      {(links as typeof seoLinks).map((s) => (
                        <Link key={s.href} href={s.href} className={styles.megaLink} onClick={close}>
                          <span className={styles.megaName}>{s.name}</span>
                          <span className={styles.megaSub}>{s.sub}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <Link href="/services" className={styles.megaAll} onClick={close}>
                  <span>Explore all services</span>
                  <Corner />
                </Link>
              </div>
            </div>
            <Link href="/industries" className={styles.link} onClick={close}>Industries</Link>
            <Link href="/results" className={styles.link} onClick={close}>Case Studies</Link>
            <Link href="/about" className={styles.link} onClick={close}>About</Link>
            <Link href="/pricing" className={styles.link} onClick={close}>Pricing</Link>
            <Link href="/blog" className={styles.link} onClick={close}>Blog</Link>
          </div>

          <Link href="/contact" className={styles.cta} onClick={close}>
            <span>Speak to an Expert</span>
            <Corner />
          </Link>

          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile menu, a sibling of <nav> so it sizes to the viewport */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
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
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/results" onClick={close}>Case Studies</Link>
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
          <span>Speak to an Expert</span>
          <Corner />
        </a>
      </div>
    </>
  );
}
