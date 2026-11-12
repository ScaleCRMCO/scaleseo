import Link from "next/link";
import styles from "./CampaignAreas.module.css";

const steps = [
  {
    num: "01",
    title: "Attract More Valuable Clients",
    body: "Not every accounting enquiry has the same value. We help firms target services such as corporate tax, business advisory, bookkeeping, and fractional CFO support to reach clients looking for ongoing professional services.",
  },
  {
    num: "02",
    title: "Improve Your Visibility on Google",
    body: "We optimize your website for the services and locations your prospective clients are searching for. This includes improving existing pages, creating useful content, fixing technical issues, and building stronger connections between related services.",
  },
  {
    num: "03",
    title: "Turn More Visitors Into Enquiries",
    body: "Getting found is only part of the process. We improve how your website presents your services, answers potential clients\u2019 questions, and guides visitors toward contacting your firm.",
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
            How We Help Accounting Firms Grow Through Search
          </h2>
          <p className={`${styles.intro} reveal-up`}>
            Accounting firms compete for different clients, services, and
            locations. We build search strategies around the opportunities that
            matter most to each practice.
          </p>
          <Link href="/services/seo" className={styles.cta}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M1 1.5h7.5V9" />
            </svg>
            <span>Explore Our SEO Services →</span>
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
