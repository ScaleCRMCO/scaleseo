import styles from "./Hero.module.css";

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Brand intro: giant wordmark left, one-line summary right */}
      <div className={styles.brandRow}>
        <div className={styles.wordmark} aria-hidden="true">Scale SEO</div>
        <div className={styles.brandSide}>
          <p className={styles.brandLine}>
            An independent SEO practice for professional service and B2B
            businesses.
          </p>
          <p className={styles.brandNote}>
            Founder-led SEO
            <br />
            since 2025
          </p>
        </div>
      </div>

      {/* Proof band: full-width grey band with the data image and a stat card */}
      <figure className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gsc-performance-mockup-3d.webp"
          alt="Google Search Console performance data showing clicks and impressions growth"
          className={styles.bandImg}
        />
        <div className={styles.card}>
          <div className={styles.cardTag}>
            <Corner />
            <span>Results</span>
          </div>
          <div className={styles.cardBody}>
            <span className={styles.cardValue}>+125%</span>
            <span className={styles.cardLabel}>
              Search impressions for an accounting firm
            </span>
            <figcaption className={styles.cardCaption}>
              Real Google Search Console Data
            </figcaption>
          </div>
        </div>
      </figure>

      <div className={`${styles.split} ${styles.splitBelow}`}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Calgary SEO Expert&nbsp;–
            <br />
            SEO, Google Ads,
            <br />
            and AI Search Services.
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.intro}>
            Scale SEO helps professional service businesses across Canada
            secure more customers, leads, and sales through search
            optimization and paid advertising. Run entirely by Corbin Jensen,
            this practice provides direct, hands-on execution without
            rotating account managers or outsourced white-labeling.
          </p>

          <div className={styles.bottom}>
            <a href="#contact" className={styles.textLink}>
              Send an Email →
            </a>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.box}
            >
              <Corner />
              <span>Book a Strategy Call</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
