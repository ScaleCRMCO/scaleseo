"use client";
import styles from "./BrisbaneHero.module.css";

export default function BrisbaneHero() {
  return (
    <header className={styles.hero}>
      {/* Curtain reveal */}
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
        Brisbane &nbsp;·&nbsp; Queensland &nbsp;·&nbsp; AU
      </div>
      <div className={`${styles.corner} ${styles.topRight}`}>
        27.46°S &nbsp;/&nbsp; 153.02°E
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>
        Local SEO &nbsp;·&nbsp; Brisbane
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>SEO for</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              Brisbane&nbsp;<span className={styles.italic}>businesses.</span>
            </span>
          </span>
        </h1>

        <div className={styles.bottom}>
          <p className={styles.sub}>
            Specialist SEO for accounting firms and trade contractors
            in Brisbane and South East Queensland. One specialist,
            a small roster, done properly.
          </p>
          <div className={styles.ctaGroup}>
            <a href="/#contact" className={styles.cta}>
              <span>Send an enquiry</span>
              <span className={styles.arrow}>→</span>
            </a>
            <span className={styles.availability}>Reply within 24 hours</span>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNum}>$250K+</span>
            <span className={styles.statLabel}>Revenue · one client · 90 days</span>
          </div>
          <div className={styles.statLine} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Organic — no paid traffic</span>
          </div>
          <div className={styles.statLine} />
          <div className={styles.stat}>
            <span className={styles.statNum}>#1</span>
            <span className={styles.statLabel}>Ranking on primary service term</span>
          </div>
          <div className={styles.statLine} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Direct</span>
            <span className={styles.statLabel}>No junior staff. No outsourcing.</span>
          </div>
        </div>
      </div>
    </header>
  );
}
