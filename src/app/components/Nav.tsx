"use client";

import { useEffect, useState } from "react";
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
      <a href="#" className={styles.brand}>
        <Logo size={26} />
        <span className={styles.wordmark}>
          Scale<span style={{ fontStyle: "italic" }}>SEO</span>
        </span>
        <span className={styles.mark}>/ Corbin Jensen</span>
      </a>
      <div className={styles.links}>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
