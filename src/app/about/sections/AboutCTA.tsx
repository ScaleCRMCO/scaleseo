import Link from "next/link";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.eyebrow}>
        <span className={styles.dot} />
        Now booking · 1 spot Q3 2026
      </div>

      <h2 className={styles.headline}>
        A small roster. <em>One conversation away.</em>
      </h2>

      <Link href="/contact" className={styles.button}>
        <span>Start a conversation</span>
        <span className={styles.arrow}>→</span>
      </Link>

      <div className={styles.note}>Reply within 24 hours</div>
    </section>
  );
}
