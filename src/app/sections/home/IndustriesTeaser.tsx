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
          My core framework is optimized for the complex compliance and
          high-margin environments of accounting firms and legal practices
          &mdash; but I also partner with B2B corporations, premium
          contractors, and other professional service providers looking to
          build predictable revenue through search.
        </p>
      </div>

      <Link href="/industries" className={`${styles.link} reveal-up`}>
        <span>See how I optimize by industry</span>
        <span className={styles.arrow}>→</span>
      </Link>
    </section>
  );
}
