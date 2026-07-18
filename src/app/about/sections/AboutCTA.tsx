import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.eyebrow}>
        <span className={styles.dot} />
        Now booking · 1 spot Q3 2026
      </div>

      <h2 className={styles.headline}>
        A small roster. <em>One call away.</em>
      </h2>

      <a
        href="https://cal.com/corbinjensen-scaleseo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        <span>Book a call</span>
        <span className={styles.arrow}>→</span>
      </a>

      <div className={styles.note}>Reply within 24 hours</div>
    </section>
  );
}
