import styles from "./BrisbaneServices.module.css";

const services = [
  {
    num: "01",
    name: "On-Page SEO",
    desc: "Page-by-page optimisation of titles, structure, internal linking, and intent — the foundation everything else builds on.",
    tag: "Core",
  },
  {
    num: "02",
    name: "Local SEO & Google Maps",
    desc: "Google Business Profile management, map pack rankings, local citations, and geo-targeted content for Brisbane service-area businesses.",
    tag: "Core",
  },
  {
    num: "03",
    name: "Technical SEO",
    desc: "Site speed, crawlability, schema, indexation. The plumbing that decides whether anything else you do gets credit.",
    tag: "Core",
  },
  {
    num: "04",
    name: "SEO Reporting & Strategy",
    desc: "Plain-English monthly reporting — rankings, keywords, revenue movements, and what happens next.",
    tag: "Ongoing",
  },
  {
    num: "05",
    name: "AI Search Optimisation",
    desc: "Structuring your site so ChatGPT, Perplexity, and Google's AI Overviews quote you instead of your Brisbane competitors.",
    tag: "Emerging",
  },
];

export default function BrisbaneServices() {
  return (
    <section className={styles.services} id="brisbane-services">
      <div className="section-label reveal-up">Services · Brisbane</div>
      <div className={`${styles.intro} reveal-up`}>
        <h2 className={styles.heading}>
          The work that actually <em>moves the needle.</em>
        </h2>
        <p className={styles.body}>
          <strong>I don&rsquo;t do everything.</strong> I do the work that
          actually moves the needle for Brisbane service businesses — and I do
          it myself, not via a junior or an offshore team. If you need a
          40-person agency, I&rsquo;m not your person. If you need one
          specialist who&rsquo;ll learn your business and own the outcome,
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
