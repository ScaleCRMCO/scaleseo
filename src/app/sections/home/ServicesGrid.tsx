import styles from "./ServicesGrid.module.css";

export default function ServicesGrid() {
  return (
    <section className={styles.grid} id="services">
      <div className={`${styles.cell} ${styles.seo}`}>
        <span className="index">01</span>
        <h3 className={styles.cellTitle}>SEO</h3>
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
