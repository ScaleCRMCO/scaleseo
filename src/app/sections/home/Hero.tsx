"use client";
import styles from "./Hero.module.css";

export default function Hero() {
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

      {/* Corner labels */}
      <div className={`${styles.corner} ${styles.topLeft}`}>
        <span className={styles.dot} />
        Available — 2 spots, Q2 2026
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>Est. 2025</div>

      {/* Main content — split layout */}
      <div className={styles.content}>
        {/* LEFT: stacked service headline */}
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>Freelance</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              <span className={styles.italic}>Local SEO,</span>
            </span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>Content, Technical</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              &amp; <span className={styles.italic}>AI Search.</span>
            </span>
          </span>
        </h1>

        {/* RIGHT: intro + CTA + proof */}
        <div className={styles.right}>
          <p className={styles.intro}>
            I&rsquo;m Corbin, a freelance SEO specialist in Calgary, Canada
            <span className={styles.leaf} aria-hidden="true">
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M512 73l-50 93c-6 11-16 10-27 4l-36-19 27 143c6 27-13 27-22 15l-50-56-8 29c-1 4-5 8-12 7l-60-13 19 70c4 15 7 22-4 26l-25 11 118 96c5 4 7 10 5 16l-10 34 105-9c4 0 7 3 7 7l-3 124h21l-3-124c0-4 3-7 7-7l105 9-10-34c-2-6 0-12 5-16l118-96-25-11c-11-4-8-11-4-26l19-70-60 13c-7 1-11-3-12-7l-8-29-50 56c-9 12-28 12-22-15l27-143-36 19c-11 6-21 7-27-4z" />
              </svg>
            </span>
            . I help established contractors and accounting firms turn organic
            search into real revenue — working <strong>one-on-one</strong> with no
            agency between you and the person doing the work.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.cta}>
              <span>Start a conversation</span>
              <span className={styles.arrow}>→</span>
            </a>
            <span className={styles.availability}>Reply within 24 hours</span>
          </div>

          {/* Proof strip */}
          <div className={styles.proof}>
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>$250K+</span>
              <span className={styles.proofLabel}>generated for clients</span>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>1</span>
              <span className={styles.proofLabel}>firm per city</span>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <span className={styles.proofNum}>Serving</span>
              <span className={styles.proofLabel}>Canada · Remote</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
