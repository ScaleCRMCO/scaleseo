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
          <p className={styles.eyebrow}>SEO Strategy &amp; Execution</p>

          <h1 className={styles.title}>
            <span className={styles.line}>
              <span className={styles.lineInner}>Search growth,</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>
                run <span className={styles.italic}>directly</span> by
              </span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>your specialist.</span>
            </span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.intro}>
            I&rsquo;m Corbin, an independent SEO specialist working with a
            small number of established businesses across Canada.
            Strategy, content, and technical SEO &mdash; handled by me,
            not handed off.
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
