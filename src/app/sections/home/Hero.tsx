"use client";
import styles from "./Hero.module.css";

const checkpoints = [
  "Independent specialist — no outsourcing, no offshore team",
  "Work directly with me, not an account manager",
  "Focused on accounting firms & financial service businesses",
  "No lock-in contracts",
  "Two firms per city, so I'm never working against your competitor",
];

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
            Bespoke search engine optimization engineered for Canadian & global businesses.
          </p>

          <h1 className={styles.title}>
            <span className={styles.line}>
              <span className={styles.lineInner}>Calgary SEO Specialist</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>
                &amp; Growth <span className={styles.italic}>Partner</span>
              </span>
            </span>
          </h1>

          <p className={styles.intro}>
            I&rsquo;m Corbin — an independent SEO specialist working with
            accounting firms and other high-margin financial service
            businesses across Canada. Data-driven strategy that turns search
            visibility into real, bookable revenue.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <span>Book a call</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="mailto:team@scaleseo.co" className={styles.ctaSecondary}>
              <span>Email me</span>
            </a>
          </div>

          <ul className={styles.checklist}>
            {checkpoints.map((point) => (
              <li key={point} className={styles.checkItem}>
                <span className={styles.checkMark} aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.portraitFrame}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, SEO Specialist at Scale SEO"
              className={styles.portraitImg}
            />
          </div>
          <span className={styles.availability}>Reply within 24 hours</span>
        </div>
      </div>
    </header>
  );
}
