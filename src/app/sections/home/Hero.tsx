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
            Calgary SEO Consultant for Growing Businesses.
          </h1>
        </div>

        <div className={styles.right}>
          <div className={styles.intro}>
            <p>
              Scale SEO is a founder-led SEO consultancy helping businesses
              across Canada and internationally improve search visibility,
              attract qualified enquiries, and grow organically.
            </p>
            <p>
              Every campaign is managed directly by Corbin Jensen, with no
              account managers or outsourced handoffs.
            </p>
          </div>

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
              <span>Book a Consultation →</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
