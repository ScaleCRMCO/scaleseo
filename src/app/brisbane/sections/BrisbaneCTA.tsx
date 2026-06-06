import styles from "./BrisbaneCTA.module.css";

export default function BrisbaneCTA() {
  return (
    <section className={`${styles.section} section-dark`} id="brisbane-cta">
      <div className="section-label reveal-up">Now Booking · Brisbane</div>

      <div className={`${styles.inner} reveal-up`}>
        <h2 className={styles.heading}>
          Let&rsquo;s see if we&rsquo;re <em>a fit.</em>
        </h2>
        <p className={styles.sub}>
          A 30-minute conversation is enough to know. If it&rsquo;s not
          the right fit, you&rsquo;ll still leave with a clear picture
          of where your SEO stands.
        </p>
        <div className={styles.ctaGroup}>
          <a href="/#contact" className={styles.cta}>
            <span>Send an enquiry</span>
            <span className={styles.arrow}>→</span>
          </a>
          <span className={styles.reply}>Reply within 24 hours</span>
        </div>
      </div>

      <div className={styles.coordBl}>Brisbane · QLD · AU</div>
      <div className={styles.coordBr}>27.46°S / 153.02°E</div>
    </section>
  );
}
