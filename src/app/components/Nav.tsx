"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDarkPage = pathname?.startsWith("/about") || pathname?.startsWith("/brisbane");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        isDarkPage ? styles.onDark : ""
      }`}
    >
     <Link href="/" className={styles.brand}>
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
