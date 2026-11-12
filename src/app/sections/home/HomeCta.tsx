import styles from "./HomeCta.module.css";

// Closing CTA: one large navy box, label top-left, headline, short note
// bottom-left and a light "Let's talk" box linking to /contact.
export default function HomeCta() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.box}>
        <span className={styles.label}>Contact</span>
        <h2 className={styles.headline}>
          Ready to Grow Your Accounting Firm?
        </h2>
        <div className={styles.bottom}>
          <p className={styles.note}>
            Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and
            opportunities to attract more clients through Google. Tell us about
            your practice and the services you want to grow. You&rsquo;ll hear
            back directly, usually within 24 hours.
          </p>
          <a href="https://cal.com/corbinjensen-scaleseo/30min" target="_blank" rel="noopener noreferrer" className={styles.talk}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>Book a Strategy Call →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
