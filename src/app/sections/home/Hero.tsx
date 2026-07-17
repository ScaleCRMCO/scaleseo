"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Curtain reveal panel */}
      <div className={styles.curtain} aria-hidden="true" />

      {/* Large background watermark */}
      <div className={styles.watermark} aria-hidden="true">
        Scale SEO
      </div>

      {/* Corner labels */}
      <div className={`${styles.corner} ${styles.topLeft}`}>
        <span className={styles.dot} />
        Currently onboarding new clients
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>
        Freelance &middot; Canada &amp; Remote
      </div>

      {/* Main content — split layout */}
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            Bespoke search engine optimization engineered for Canadian businesses.
          </p>

          <h1 className={styles.title}>
            <span className={styles.line}>
              <span className={styles.lineInner}>Calgary SEO Specialist</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>
                &amp; Organic Growth <span className={styles.italic}>Partner</span>
              </span>
            </span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.intro}>
            We build high-performance organic search strategies by aligning your digital footprint with the exact terms your clients are searching for, turning visibility into enterprise value.
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
