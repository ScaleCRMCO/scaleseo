import Link from "next/link";
import styles from "./IndustriesTeaser.module.css";

export default function IndustriesTeaser() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">Who I Work With</div>

      <div className={`${styles.row} reveal-up`}>
        <h2 className={styles.heading}>
          SEO Solutions Built for Accounting Firms{" "}
          <em>&amp; Professional Services.</em>
        </h2>

        <p className={styles.body}>
          I keep a small roster on purpose, focused on accounting firms,
          legal practices, corporate consultancies, and other financial
          service firms across Canada &mdash; where good SEO compounds
          instead of chasing volume.
        </p>
      </div>

      <Link href="/industries" className={`${styles.link} reveal-up`}>
        <span>See who I work with</span>
        <span className={styles.arrow}>→</span>
      </Link>
    </section>
  );
}
