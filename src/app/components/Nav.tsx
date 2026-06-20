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
       <svg className={styles.leaf} viewBox="0 0 1024 1024" aria-hidden="true">
          <path fill="currentColor" d="M512 73l-50 93c-6 11-16 10-27 4l-36-19 27 143c6 27-13 27-22 15l-50-56-8 29c-1 4-5 8-12 7l-60-13 19 70c4 15 7 22-4 26l-25 11 118 96c5 4 7 10 5 16l-10 34 105-9c4 0 7 3 7 7l-3 124h21l-3-124c0-4 3-7 7-7l105 9-10-34c-2-6 0-12 5-16l118-96-25-11c-11-4-8-11-4-26l19-70-60 13c-7 1-11-3-12-7l-8-29-50 56c-9 12-28 12-22-15l27-143-36 19c-11 6-21 7-27-4z"/>
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
