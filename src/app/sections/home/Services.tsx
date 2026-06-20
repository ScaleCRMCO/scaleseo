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
    name: "Technical SEO",
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
    <section className={`${styles.services} section-dark`} id="services">
      <div className={styles.split}>
        {/* LEFT — sticky anchor */}
        <div className={styles.left}>
          <div className="section-label">What I Do</div>
          <h2 className={styles.heading}>
            Six things,<br />done <em>properly.</em>
          </h2>
          <p className={styles.body}>
            <strong>I don&rsquo;t do everything &mdash; on purpose.</strong> I do
            the handful of things that bring established Calgary businesses more
            leads, and I do them myself. No juniors, no offshore team, no account
            manager between you and the person doing the work.
          </p>
          <a href="#contact" className={styles.cta}>
            <span>Start a conversation</span>
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>

        {/* RIGHT — scrolling list */}
        <div className={styles.right}>
          {services.map((s) => (
            <div key={s.num} className={`${styles.item} reveal-up`}>
              <div className={styles.itemTop}>
                <span className={styles.itemNum}>{s.num}</span>
                <span className={styles.itemTag}>{s.tag}</span>
              </div>
              <h3 className={styles.itemName}>{s.name}</h3>
              <p className={styles.itemDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
