import Link from "next/link";
import styles from "./Comparison.module.css";

const rows: { capability: string; us: string; them: string }[] = [
  {
    capability: "Client roster",
    us: "B2B & professional services only",
    them: "Mixed, unrelated verticals",
  },
  {
    capability: "Full-funnel strategy",
    us: "SEO, paid, web, and AI search aligned",
    them: "Channel-specific silos",
  },
  {
    capability: "Growth focus",
    us: "Built around qualified, signed clients",
    them: "Often optimized for vanity metrics",
  },
  {
    capability: "Who does the work",
    us: "Every campaign run personally by the founder",
    them: "Generic frameworks, junior-run accounts",
  },
  {
    capability: "Website ownership",
    us: "Full ownership, regardless of platform",
    them: "Platform lock-in risk",
  },
  {
    capability: "Paid media optimization",
    us: "Outcome-based feedback loops",
    them: "Surface-level cost-per-lead reporting",
  },
  {
    capability: "SEO + AI visibility",
    us: "Included in every engagement",
    them: "Often SEO-only, or missing AI entirely",
  },
  {
    capability: "Conversion-focused websites",
    us: "UX built to drive real inquiries",
    them: "Design-first, conversion second",
  },
  {
    capability: "Transparent reporting",
    us: "Traffic, leads, and revenue insights",
    them: "Often vanity metrics",
  },
  {
    capability: "Who you work with",
    us: "1-on-1 with the founder · 100% Canadian",
    them: "Rotating account teams",
  },
];

export default function Comparison() {
  return (
    <section className={styles.section} id="comparison">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Scale SEO vs.
          <br />
          <em>Generalist Agencies.</em>
        </h2>
        <p className={styles.sub}>What&rsquo;s the real difference?</p>

        <div className={styles.tableWrap}>
          <div className={styles.tableHead}>
            <span>Capability</span>
            <span>Scale SEO</span>
            <span>Generalist Agency</span>
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

        <Link href="/results" className={styles.cta}>
          <span>See more results</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
