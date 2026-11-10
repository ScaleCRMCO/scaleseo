import Link from "next/link";
import styles from "./Differently.module.css";

// "Here is what we do differently." — label left, three points divided by
// thin vertical rules (Mamba-style), between the intro and services.
const points = [
  {
    icon: "M13 2L4 14h7l-1 8 9-12h-7z",
    title: "30 Days to Action",
    body: "We get to work from day one, delivering meaningful SEO improvements within your first 30 days.",
  },
  {
    icon: "M7 11V7a5 5 0 0 1 9.9-1M5 11h14v10H5z",
    title: "No Long-Term Contracts",
    body: "Flexible month-to-month SEO services. No lengthy commitments, with the freedom to cancel anytime.",
  },
  {
    icon: "M12 21s-7-4.4-9.3-9C1.2 8.8 3 5 6.6 5c2 0 3.4 1 5.4 3 2-2 3.4-3 5.4-3C21 5 22.8 8.8 21.3 12 19 16.6 12 21 12 21z",
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
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={p.icon} />
            </svg>
          </span>
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
