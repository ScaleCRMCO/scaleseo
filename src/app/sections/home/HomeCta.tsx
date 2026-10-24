import Link from "next/link";
import styles from "./HomeCta.module.css";

// Closing CTA: one large navy box, label top-left, headline, short note
// bottom-left and a light "Let's talk" box linking to /contact.
export default function HomeCta() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.box}>
        <span className={styles.label}>Contact</span>
        <h2 className={styles.headline}>
          Ready to Improve Your Organic Search Visibility?
        </h2>
        <div className={styles.bottom}>
          <p className={styles.note}>
            Tell me about your business and where you want to grow. You&rsquo;ll
            hear back from me directly, usually within 24 hours.
          </p>
          <Link href="/contact" className={styles.talk}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>Let&rsquo;s talk</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
