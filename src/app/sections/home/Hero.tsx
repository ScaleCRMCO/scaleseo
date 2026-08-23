"use client";
import styles from "./Hero.module.css";

const checkpoints = [
  "Independent specialist — no outsourcing",
  "Work directly with me, not an account manager",
  "Focused on professional service businesses",
  "No lock-in contracts",
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
          <h1 className={styles.title}>
            <span className={styles.line}>
              <span className={styles.lineInner}>Calgary SEO Specialist</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>
                &amp; Growth <span className={styles.italic}>Partner</span>
              </span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>for Professional Services</span>
            </span>
          </h1>

          <p className={styles.intro}>
            Hi, I&rsquo;m Corbin! An independent SEO specialist delivering
            data-driven strategies for accounting firms and high-margin
            professional service businesses across Canada and globally.
          </p>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.cta}>
              <span>Request a Free Audit</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              <span>Book a Strategy Call</span>
            </a>
          </div>

          <span className={styles.availability}>Reply within 24 hours</span>
        </div>

        <div className={styles.right}>
          <div className={styles.portraitFrame}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, SEO Specialist at Scale SEO"
              className={styles.portraitImg}
            />
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
      </div>
    </header>
  );
}
