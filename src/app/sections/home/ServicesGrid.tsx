import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <section className={styles.grid} id="services">
      <div className={`${styles.cell} ${styles.seo}`}>
        <span className="index">01</span>
        <h3 className={styles.cellTitle}>SEO</h3>
        <p className={styles.cellDesc}>
          Technical audits, local search scaling, and intent-based keyword
          architecture engineered for #1 organic positions.
        </p>

        <div className={styles.serpMock} aria-hidden="true">
          <div className={styles.serpBar}>
            <span className={styles.serpBarIcon}>🔍</span>
            <span className={styles.serpBarText}>
              accounting firm calgary
            </span>
          </div>

          <div className={styles.serpResult}>
            <span className={styles.serpUrl}>
              scaleseo.co <span className={styles.serpUrlPath}>› services › accounting-firms</span>
            </span>
            <span className={styles.serpTitle}>
              Top Calgary Accounting Firms | Ranked #1 on Google
            </span>
            <span className={styles.serpSnippet}>
              Trusted by growing accounting practices across Alberta —
              technical SEO, local scaling, and conversion-focused pages
              built for high-margin B2B search intent.
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.cell} ${styles.ads}`}>
        <span className="index">02</span>
        <h3 className={styles.cellTitle}>Google Ads</h3>
      </div>

      <div className={`${styles.cell} ${styles.badge}`}>
        <span className={styles.badgeValue}>200+</span>
        <span className={styles.badgeLabel}>campaigns shipped</span>
      </div>

      <div className={`${styles.cell} ${styles.web}`}>
        <span className="index">03</span>
        <h3 className={styles.cellTitle}>Web Design</h3>
      </div>

      <div className={`${styles.cell} ${styles.ai}`}>
        <span className="index">04</span>
        <h3 className={styles.cellTitle}>AI / Agentic Marketing</h3>
      </div>
    </section>
  );
}
