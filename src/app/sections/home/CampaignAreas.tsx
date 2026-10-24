import Link from "next/link";
import styles from "./CampaignAreas.module.css";

const steps = [
  {
    num: "01",
    title: "Technical SEO & Website Improvements",
    body: "Fixing crawlability, indexing, site structure, internal linking, and website issues that affect search visibility and user experience.",
  },
  {
    num: "02",
    title: "Content & Search Optimization",
    body: "Improving existing pages, targeting relevant search intent, and developing useful content that supports your services and customers.",
  },
  {
    num: "03",
    title: "Local Visibility & Performance",
    body: "Strengthening local search presence where relevant, monitoring organic performance, and adjusting priorities based on results.",
  },
];

// Three-step layout: heading + intro on the left, then full-width ruled
// rows (big number | title | description) on the right.
export default function CampaignAreas() {
  return (
    <section className={styles.section} id="campaign">
      <div className={styles.layout}>
        <div className={styles.aside}>
          <span className={styles.square} aria-hidden="true" />
          <h2 className={`${styles.heading} reveal-up`}>
            What Goes Into an SEO Campaign?
          </h2>
          <p className={`${styles.intro} reveal-up`}>
            Effective SEO involves more than rankings. Every campaign combines
            the improvements your website needs with an ongoing strategy shaped
            by search data and business priorities.
          </p>
          <Link href="/services/seo" className={styles.cta}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>Explore SEO Services →</span>
          </Link>
        </div>

        <ol className={styles.rows}>
          {steps.map((s) => (
            <li key={s.num} className={`${styles.row} reveal-up`}>
              <span className={styles.num}>{s.num}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
