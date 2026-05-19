import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.meta}>
        <span>
          <span className={styles.dot} />
          Available — 1 spot, Q3 2026
        </span>
        <span>Australia &nbsp;/&nbsp; Canada &nbsp;/&nbsp; Remote</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.reveal}>
          <span style={{ animationDelay: "0.1s" }}>Search that</span>
        </span>
        <br />
        <span className={styles.reveal}>
          <span style={{ animationDelay: "0.25s" }}>moves </span>
        </span>
        <span className={styles.reveal}>
          <span
            className={styles.italic}
            style={{ animationDelay: "0.4s" }}
          >
            revenue,
          </span>
        </span>
        <br />
        <span className={styles.reveal}>
          <span style={{ animationDelay: "0.55s" }}>not vanity.</span>
        </span>
      </h1>

      <div className={styles.bottom}>
        <p className={styles.sub}>
          A specialist SEO freelancer for <em>trade contractors</em> and{" "}
          <em>accounting firms</em>. I take on a handful of clients at a time.
          Each one gets all of me — strategy, execution, reporting, the lot.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#contact" className={styles.cta}>
            <span>Start a conversation</span>
            <span className={styles.arrow}>→</span>
          </a>
          <span className={styles.availability}>Reply within 24 hours</span>
        </div>
      </div>
    </header>
  );
}
