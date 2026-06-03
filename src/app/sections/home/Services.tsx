import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    name: "On-Page SEO",
    desc: "Page-by-page optimisation of titles, structure, internal linking, and intent — the foundation everything else builds on.",
    tag: "Core",
  },
  {
    num: "02",
    name: "Local SEO",
    desc: "Google Business Profile, map pack rankings, local citations, and geo-targeted landing pages for service-area businesses.",
    tag: "Core",
  },
  {
    num: "03",
    name: "Technical",
    desc: "Site speed, crawlability, schema, indexation. The plumbing that decides whether anything else you do gets credit.",
    tag: "Core",
  },
  {
    num: "04",
    name: "SEO Reporting & Strategy",
    desc: "Clear monthly Reporting — rankings, keywords, and future process.",
    tag: "Ongoing",
  },
  {
    num: "05",
    name: "AI Search Optimisation",
    desc: "Structuring your site so ChatGPT, Perplexity, and Google's AI Overviews quote you instead of your competitors.",
    tag: "Emerging",
  },
  {
    num: "06",
    name: "Google Ads (Coming)",
    desc: "Paid search to bridge the gap while SEO compounds. Currently in active study — available to existing clients by request.",
    tag: "2026",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="section-label reveal-up">What I Do</div>

      <div className={`${styles.intro} reveal-up`}>
        <h2 className={styles.heading}>
          Six things, done <em>properly.</em>
        </h2>
        <p className={styles.body}>
          <strong>I don&rsquo;t do everything.</strong> I do the work that
          actually moves the needle for service-based businesses — and I do it
          myself, not via a junior or an offshore team. If you need a 40-person
          agency with a 4-month runway, I&rsquo;m not your person. If you need
          one specialist who&rsquo;ll learn your business and own the outcome,
          keep reading.
        </p>
      </div>

      <ul className={styles.list}>
        {services.map((s) => (
          <li key={s.num} className={`${styles.item} reveal-up`}>
            <span className={styles.itemNum}>{s.num}</span>
            <span className={styles.itemName}>{s.name}</span>
            <span className={styles.itemDesc}>{s.desc}</span>
            <span className={styles.itemTag}>{s.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
