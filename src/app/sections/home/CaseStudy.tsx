import Image from "next/image";
import styles from "./CaseStudy.module.css";

const cases = [
  {
    index: "01",
    client: "Kinsmen Consulting Ltd",
    location: "Calgary, Alberta",
    industry: "Concrete & Construction",
    description:
      "Positioned a premium concrete contractor in Calgary to attract high-value residential and commercial projects.",
    metric: "26%",
    metricLabel: "Revenue growth",
    image: "/images/kinsmen-hero.jpg",
    url: "https://www.kinsmenconsulting.ca",
    urlLabel: "kinsmenconsulting.ca",
  },
  {
    index: "02",
    client: "MSV Plumbing Services",
    location: "Brisbane, Queensland",
    industry: "Plumbing Services",
    description:
      "Built from zero — a new website and local SEO strategy that took MSV from no clients to consistent weekly bookings.",
    metric: "0 → Weekly",
    metricLabel: "Consistent bookings",
    image: "/images/msv-screenshot.png",
    url: "https://msvplumbingservices.com.au/",
    urlLabel: "msvplumbing.com.au",
  },
  {
    index: "03",
    client: "Empire Accountants",
    location: "Brisbane, Queensland",
    industry: "Accounting & Advisory",
    description:
      "Six months of technical fixes, on-page structure, and content built around the terms their clients actually search — average search position moved from 30 to 14.2, doubling impressions and clicks. Now booking new clients weekly.",
    metric: "30 → 14.2",
    metricLabel: "Avg. search position (6 months)",
    image: "/images/empireaccountants-hero-image.png",
    url: "https://www.empireaccountants.com.au/",
    urlLabel: "empireaccountants.com.au",
  },
];

export default function CaseStudy() {
  return (
    <section className={`${styles.case} section-dark`} id="work">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className="section-label reveal-up">Featured Work</div>
            <h2 className={`${styles.heading} reveal-up`}>
              Real clients,<em> real revenue.</em>
            </h2>
          </div>
          <span className={`${styles.proofLine} reveal-up`}>
            $250K+ generated for clients
          </span>
        </div>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <a
              key={c.index}
              href={c.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`${styles.tile} reveal-left`}
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={c.image}
                  alt={`${c.client} website`}
                  fill
                  className={styles.image}
                  priority={i === 0}
                  unoptimized
                />
              </div>
              <div className={styles.tileFooter}>
                <div>
                  <h3 className={styles.client}>{c.client}</h3>
                  <p className={styles.location}>
                    {c.location} &middot; {c.industry}
                  </p>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{c.metric}</div>
                  <div className={styles.metricLabel}>{c.metricLabel}</div>
                </div>
              </div>
              <p className={styles.description}>{c.description}</p>
              <span className={styles.visit}>{c.urlLabel} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
