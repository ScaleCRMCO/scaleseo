import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <a href="mailto:team@scaleseo.co" className={styles.card}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>team@scaleseo.co</span>
          <span className={styles.sub}>Reply within 24 hours</span>
        </a>
        <a href="tel:+14038751110" className={styles.card}>
          <span className={styles.label}>Phone</span>
          <span className={styles.value}>(403) 875-1110</span>
          <span className={styles.sub}>Calgary, Alberta &middot; Canada</span>
        </a>
        <a
          href="https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <span className={styles.label}>Google Business Profile</span>
          <span className={styles.value}>View on Google Maps</span>
          <span className={styles.sub}>Reviews &amp; business info</span>
        </a>
      </div>
    </section>
  );
}
