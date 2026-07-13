import styles from "./ForWhom.module.css";

export default function ForWhom() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">Who I Work With</div>

      <div className={`${styles.grid} reveal-up`}>
        <div className={styles.card}>
          <div className={styles.vertical}>Proven vertical</div>
          <h3 className={styles.title}>
            Accounting &amp; <em>advisory firms</em>
          </h3>
          <ul className={styles.list}>
            <li>Boutique accounting practices</li>
            <li>CPAs &amp; tax specialists</li>
            <li>Bookkeeping firms</li>
            <li>Business advisory</li>
            <li>Financial planning practices</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.vertical}>Open to</div>
          <h3 className={styles.title}>
            Any established <em>service business</em>
          </h3>
          <ul className={styles.list}>
            <li>Healthy margins on each client</li>
            <li>A sales process that can handle more leads</li>
            <li>No more than two direct competitors as clients per city</li>
            <li>Comfortable investing months, not days, in results</li>
            <li>Wants one specialist, not a rotating team</li>
          </ul>
        </div>
      </div>

      <p className={`${styles.not} reveal-up`}>
        <strong>Industry isn&rsquo;t the filter — fit is.</strong> I take on a
        small number of clients at a time so each one gets full attention. If
        that&rsquo;s what you&rsquo;re looking for, reach out.
      </p>
    </section>
  );
}
