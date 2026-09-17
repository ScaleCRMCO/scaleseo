import Link from "next/link";
import styles from "./ServicesProof.module.css";

const proofs = [
  {
    metric: "30 → Top 10",
    label: "Search ranking, target keywords",
    client: "Empire Accountants",
    tag: "SEO",
    desc: "Technical fixes and on-page structure moved a Brisbane accounting firm from page 3 to the first page for their core terms.",
  },
  {
    metric: "26%",
    label: "Revenue growth in 6 months",
    client: "Kinsmen Consulting",
    tag: "Web Development",
    desc: "A rebuilt, SEO-first site positioned a Calgary concrete contractor to win higher-value residential and commercial projects.",
  },
  {
    metric: "0 → Weekly",
    label: "Consistent bookings",
    client: "MSV Plumbing Services",
    tag: "Local SEO & Ads",
    desc: "A new site plus a local search and map-pack strategy took a Brisbane plumber from zero clients to steady weekly work.",
  },
];

export default function ServicesProof() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className="section-label reveal-up">Proof, Not Promises</div>
        <h2 className={`${styles.heading} reveal-up`}>
          Real numbers, tied to real work.
        </h2>

        <div className={styles.grid}>
          {proofs.map((p) => (
            <div key={p.client} className={`${styles.card} reveal-up`}>
              <span className={styles.tag}>{p.tag}</span>
              <div className={styles.metric}>{p.metric}</div>
              <div className={styles.metricLabel}>{p.label}</div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.client}>{p.client}</div>
            </div>
          ))}
        </div>

        <Link href="/results" className={styles.link}>
          See the full case studies <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
