import styles from "./AboutSections.module.css";

export default function NumbersSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.label} reveal-up`}>The Numbers · 04</div>

      <div className={`${styles.headline} reveal-up`} style={{ marginBottom: 60 }}>
        Numbers I&apos;m <em>proud of.</em> Numbers I plan to outgrow.
      </div>

      <div className={`${styles.numbersGrid} reveal-up`}>
        <div className={styles.numItem}>
          <div className={styles.numValue}>
            $<span className={styles.numAccent}>250K+</span>
          </div>
          <div className={styles.numLabel}>Revenue for one client in 60 days</div>
        </div>
        <div className={styles.numItem}>
          <div className={styles.numValue}>
            <span className={styles.numAccent}>2</span>
          </div>
          <div className={styles.numLabel}>Countries · Australia &amp; Canada</div>
        </div>
        <div className={styles.numItem}>
          <div className={styles.numValue}>
            1<span className={styles.numAccent}>yr+</span>
          </div>
          <div className={styles.numLabel}>Self-taught, in the work</div>
        </div>
        <div className={styles.numItem}>
          <div className={styles.numValue}>
            100<span className={styles.numAccent}>%</span>
          </div>
          <div className={styles.numLabel}>Direct-to-freelancer · no managers</div>
        </div>
      </div>
    </section>
  );
}
