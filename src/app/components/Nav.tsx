"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.brand}>
        <Logo size={26} />
        <span className={styles.wordmark}>
          Scale<span style={{ fontStyle: "italic" }}>SEO</span>
        </span>
        <span className={styles.mark}>/ Corbin Jensen</span>
      </Link>
      <div className={styles.links}>
        <Link href="/#work">Work</Link>
        <Link href="/#services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
