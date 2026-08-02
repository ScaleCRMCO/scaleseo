"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDarkPage = pathname?.startsWith("/about") || pathname?.startsWith("/brisbane");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        isDarkPage ? styles.onDark : ""
      } ${open ? styles.menuOpen : ""}`}
    >
      <Link href="/" className={styles.brand} onClick={close}>
        <img
          src="/images/scaleseo-logo.png"
          alt="Scale SEO"
          className={styles.brandCrow}
        />
        <span className={styles.wordmark}>
          Scale<span style={{ color: "var(--accent)" }}>SEO</span>
        </span>
        <span className={styles.mark}>/ Corbin Jensen</span>
      </Link>
      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/#work"><span className={styles.num}>01</span> Work</Link>
        <Link href="/services"><span className={styles.num}>02</span> Services</Link>
        <Link href="/#process"><span className={styles.num}>03</span> Process</Link>
        <Link href="/about"><span className={styles.num}>04</span> About</Link>
      </div>
      <a
        href="https://cal.com/corbinjensen-scaleseo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navCta}
        onClick={close}
      >
        <span>Book a call</span>
        <span className={styles.navCtaArrow}>&rarr;</span>
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
      {/* Full-screen mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        <Link href="/#work" onClick={close}><span className={styles.num}>01</span> Work</Link>
        <Link href="/services" onClick={close}><span className={styles.num}>02</span> Services</Link>
        <Link href="/#process" onClick={close}><span className={styles.num}>03</span> Process</Link>
        <Link href="/about" onClick={close}><span className={styles.num}>04</span> About</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
      </div>
    </nav>
  );
}
