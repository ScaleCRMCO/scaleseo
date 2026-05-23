"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const ROTATING_WORDS = ["accounting firms", "contractors", "established firms"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.hero}>
      {/* Curtain reveal panel */}
      <div className={styles.curtain} aria-hidden="true" />

      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true">
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
      </div>

      {/* Four corner labels */}
      <div className={`${styles.corner} ${styles.topLeft}`}>
        <span className={styles.dot} />
        Available — 2 spots, Q2 2026
      </div>
      <div className={`${styles.corner} ${styles.topRight}`}>
        Brisbane &nbsp;27.46°S / 153.02°E
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>
        Index &nbsp;/&nbsp; 2026
      </div>

     {/* Main content */}
      <div className={styles.content}>
        {/* Portrait */}
        <div className={styles.portrait} aria-hidden="true">
          <div className={styles.portraitInner}>
            {/* Replace this with: <img src="/images/corbin-hero.jpg" alt="Corbin Jensen" className={styles.portraitImg} /> */}
            <div className={styles.portraitPlaceholder}>
              <span>PORTRAIT</span>
              <span className={styles.placeholderSub}>add /public/images/corbin-hero.jpg</span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>

        <div className={styles.bottom}>
          <p className={styles.sub}>
            I help{" "}
            <span className={styles.rotator}>
              <span key={wordIndex} className={styles.rotatorWord}>
                {ROTATING_WORDS[wordIndex]}
              </span>
            </span>
            <br />
            turn search into revenue.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.cta}>
              <span>Start a conversation</span>
              <span className={styles.arrow}>→</span>
            </a>
            <span className={styles.availability}>Reply within 24 hours</span>
          </div>
        </div>
      </div>
    </header>
  );
}
