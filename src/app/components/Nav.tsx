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
          <path fill="currentColor" d="M256 32l-31 58c-3.5 6.3-9.8 5.7-16.1 2.2L167 70l31 165c6.6 30.7-14.8 30.7-25.3 17.4l-58-65-9.4 33c-1.1 4.4-6 9-13.4 7.8L24 215l22 80c4.7 17.6 8.4 24.9-4.6 29.6L13 337l136 110c5.4 4.1 8.1 11.5 6.2 18.3l-12 39c47-5.4 89.1-13.6 136.2-18.7 4.2-.4 11.1 6.5 11.1 11.3L284 640h24l-6-43.8c0-4.8 6.9-11.7 11.1-11.3 47.1 5.1 89.2 13.3 136.2 18.7l-12-39c-1.9-6.8 0.8-14.2 6.2-18.3L499 337l-28.4-12.4c-13-4.7-9.3-12-4.6-29.6l22-80-68.9 14.4c-7.4 1.2-12.3-3.4-13.4-7.8l-9.4-33-58 65c-10.5 13.3-31.9 13.3-25.3-17.4l31-165-41.9 22.2c-6.3 3.5-12.6 4.1-16.1-2.2z"/>
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
