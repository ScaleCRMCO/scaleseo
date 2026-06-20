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
        <span className={styles.wordmark}>
          Scale<span style={{ fontStyle: "italic" }}>SEO</span>
        </span>
        <svg className={styles.leaf} viewBox="0 0 512 512" aria-hidden="true">
          <path d="M256 32l-24 96-72-40 24 88-96-16 64 72-88 40 96 24-56 72 96-16-8 96 64-72 64 72-8-96 96 16-56-72 96-24-88-40 64-72-96 16 24-88-72 40z" fill="currentColor"/>
        </svg>
        <span className={styles.mark}>/ Corbin Jensen</span>
      </Link>

      {/* Desktop links */}
      <div className={styles.links}>
        <Link href="/#work">Work</Link>
        <Link href="/#services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>

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
        <Link href="/#work" onClick={close}>Work</Link>
        <Link href="/#services" onClick={close}>Services</Link>
        <Link href="/about" onClick={close}>About</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
      </div>
    </nav>
  );
}
