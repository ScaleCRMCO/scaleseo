import Link from "next/link";
import styles from "./Comparison.module.css";

const rows: { capability: string; us: string; them: string }[] = [
  {
    capability: "Who does the work",
    us: "Your SEO campaign is managed directly by the founder.",
    them: "Work may move between salespeople, account managers, junior staff, and contractors.",
  },
  {
    capability: "SEO strategy",
    us: "Technical SEO, content, local search, and website improvements work together.",
    them: "SEO tasks may be divided between separate departments.",
  },
  {
    capability: "Client roster",
    us: "Small roster focused primarily on professional service and B2B businesses.",
    them: "Larger rosters spread across unrelated industries.",
  },
  {
    capability: "Contracts",
    us: "Month-to-month campaigns with no long-term lock-in.",
    them: "Long-term contracts are common.",
  },
  {
    capability: "Website ownership",
    us: "You retain ownership of your website and assets.",
    them: "Proprietary platforms can sometimes create unnecessary dependency.",
  },
  {
    capability: "Reporting",
    us: "Rankings, organic traffic, enquiries, and business outcomes.",
    them: "Reporting can focus heavily on activity and surface-level metrics.",
  },
];

export default function Comparison() {
  return (
    <section className={styles.section} id="comparison" data-nav-theme="dark">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          A Different Approach{" "}
          <br />
          <em>to SEO Campaigns</em>
        </h2>
        <div className={styles.sub}>
          <p>
            Scale SEO is an independent SEO practice, not a large generalist
            marketing agency.
          </p>
          <p>
            I keep my client roster intentionally small and personally handle
            the strategy and implementation behind every campaign. That means
            the person reviewing your rankings is also the person making
            changes to your website, researching opportunities, improving
            content, and deciding what happens next.
          </p>
        </div>

        <h3 className={styles.tableTitle}>Scale SEO vs. Generalist Agencies</h3>

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
          <span>See Client Results</span>
          <span className={styles.ctaArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
