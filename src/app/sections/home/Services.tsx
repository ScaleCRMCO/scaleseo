import styles from "./Services.module.css";
const services = [
  {
    num: "01",
    name: "On-Page SEO",
    desc: "I rewrite your titles, structure, and internal links around what your buyers actually search — so the right pages rank for the right terms.",
    tag: "Core",
  },
  {
    num: "02",
    name: "Local SEO",
    desc: "Getting you into the Calgary map pack: Google Business Profile, reviews, citations, and location pages that win the searches near you.",
    tag: "Core",
  },
  {
    num: "03",
    name: "Technical",
    desc: "Speed, crawlability, schema, indexing. The unglamorous groundwork that decides whether the rest of your SEO counts for anything.",
    tag: "Core",
  },
  {
    num: "04",
    name: "Reporting & Strategy",
    desc: "A monthly call where I show you what moved, what's next, and what it means for leads — in plain English, not a dashboard you'll never open.",
    tag: "Ongoing",
  },
  {
    num: "05",
    name: "AI Search Optimisation",
    desc: "Setting up your site so ChatGPT, Perplexity, and Google's AI answers name you — not the competitor down the road — when buyers ask.",
    tag: "Emerging",
  },
  {
    num: "06",
    name: "Google Ads",
    desc: "Paid search to bring in leads while your SEO builds. In active development — open to current clients on request.",
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
          <strong>I don&rsquo;t do everything &mdash; on purpose.</strong> I do
          the handful of things that actually bring established Calgary
          businesses more leads, and I do them myself. No juniors, no offshore
          team, no account manager between you and the person doing the work. If
          you want a 40-person agency, I&rsquo;m not your guy. If you want one
          specialist who learns your business and owns the result, keep reading.
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
