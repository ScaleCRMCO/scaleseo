import styles from "./ForWhom.module.css";

export default function ForWhom() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">Who I Work With</div>

      <div className={`${styles.grid} reveal-up`}>
        <div className={styles.card}>
          <div className={styles.vertical}>Vertical 01</div>
          <h3 className={styles.title}>
            Trade Contractors &amp; <em>Specialists</em>
          </h3>
          <ul className={styles.list}>
            <li>Concrete contractors</li>
            <li>Plumbers</li>
            <li>Electricians &amp; HVAC</li>
            <li>Roofing &amp; landscaping</li>
            <li>Premium custom builds</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.vertical}>Vertical 02</div>
          <h3 className={styles.title}>
            Accounting &amp; <em>Advisory Firms</em>
          </h3>
          <ul className={styles.list}>
            <li>Boutique accounting practices</li>
            <li>CPAs &amp; tax specialists</li>
            <li>Bookkeeping firms</li>
            <li>Business advisory</li>
            <li>Financial planning practices</li>
          </ul>
        </div>
      </div>

      <p className={`${styles.not} reveal-up`}>
        <strong>Not on this list?</strong> Reach out anyway — but only if
        you&rsquo;re an established service business with healthy margins and
        the patience for work that compounds.
      </p>
    </section>
  );
}
