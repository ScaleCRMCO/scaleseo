import Link from "next/link";
import styles from "./ServicesComparison.module.css";

const rows: { capability: string; us: string; them: string }[] = [
  {
    capability: "Who does the work",
    us: "Direct from the founder, every time",
    them: "Rotating junior account managers",
  },
  {
    capability: "Client roster",
    us: "Capped, B2B & professional services only",
    them: "Mixed, unrelated industries",
  },
  {
    capability: "Reporting",
    us: "Plain-English, tied to leads & revenue",
    them: "Jargon-heavy decks, vanity metrics",
  },
  {
    capability: "Website ownership",
    us: "Yours, on any platform",
    them: "Agency templates, lock-in risk",
  },
  {
    capability: "Contract terms",
    us: "Month-to-month, no lock-in",
    them: "Long-term retainers required",
  },
];

export default function ServicesComparison() {
  return (
    <section className={styles.section} data-nav-theme="dark">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Freelancer vs. <em>Agency.</em>
          </h2>
          <p className={styles.sub}>
            A capped roster and one specialist doing the work, instead of a
            junior team learning on your budget.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <div className={styles.tableHead}>
            <span>Capability</span>
            <span>Scale SEO</span>
            <span>Typical Agency</span>
          </div>
          <div className={styles.tableBody}>
            {rows.map((row) => (
              <div key={row.capability} className={styles.row}>
                <span className={styles.capability}>{row.capability}</span>
                <span className={styles.us}>
                  <span className={styles.checkIcon} aria-hidden="true">✓</span>
                  {row.us}
                </span>
                <span className={styles.them}>
                  <span className={styles.xIcon} aria-hidden="true">✕</span>
                  {row.them}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="https://cal.com/corbinjensen-scaleseo/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <span>Book a strategy call</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
