import Link from "next/link";
import styles from "./Differently.module.css";

// "Here is what we do differently." — label left, three points divided by
// thin vertical rules (Mamba-style), between the intro and services.
const points = [
  {
    title: "30 Days to Action",
    body: "We get to work from day one, delivering meaningful SEO improvements within your first 30 days.",
  },
  {
    title: "No Long-Term Contracts",
    body: "Flexible month-to-month SEO services. No lengthy commitments, with the freedom to cancel anytime.",
  },
  {
    title: "100% Client Retention",
    body: "Every ongoing SEO client has stayed with us, reflecting the value we place on results and lasting relationships.",
  },
];

export default function Differently() {
  return (
    <section className={styles.section} aria-labelledby="differently-label">
      <h2 id="differently-label" className={styles.label}>Here is what we do differently.</h2>
      {points.map((p) => (
        <div key={p.title} className={styles.point}>
          <h3 className={styles.title}>{p.title}</h3>
          <p className={styles.body}>{p.body}</p>
        </div>
      ))}
      <div className={styles.foot}>
        <Link href="/about" className={styles.more}>
          <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M1 1.5h7.5V9" />
          </svg>
          <span>More About Scale SEO &rarr;</span>
        </Link>
      </div>
    </section>
  );
}
