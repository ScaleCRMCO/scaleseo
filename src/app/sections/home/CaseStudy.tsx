import Image from "next/image";
import styles from "./CaseStudy.module.css";

const cases = [
  {
    index: "01",
    client: "Kinsmen Consulting",
    location: "Calgary, Alberta",
    industry: "Concrete & Construction",
    description:
      "From invisible to booked solid. A full SEO build that took a concrete contractor from no online presence to #1 on their primary service term in 90 days.",
    metric: "$250K+",
    metricLabel: "Revenue generated in 90 days",
    image: "/kinsmen-hero.jpg",
    logo: "/images/Kinsmen Consulting LTD Logo.png",
    url: "https://www.kinsmenconsulting.ca",
    urlLabel: "kinsmenconsulting.ca",
  },
  {
    index: "02",
    client: "MSV Plumbing Services",
    location: "Brisbane, Queensland",
    industry: "Plumbing & Trade Services",
    description:
      "Built from zero. A new website and local SEO strategy that took MSV from no clients to consistent weekly bookings — enough to hire staff and expand the business.",
    metric: "0 → Booked",
    metricLabel: "Consistent weekly clients from scratch",
    image: "/images/MSV Plumbing Website Screenshot.png",
    logo: "/images/msv-hero.png",
    url: "#",
    urlLabel: "msvplumbing.com.au",
  },
];

export default function CaseStudy() {
  return (
    <section className={`${styles.case} section-dark`} id="work">

      <div className={styles.grid} aria-hidden="true">
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
      </div>

      <div className={styles.inner}>
        <div className="section-label reveal-up">Success Stories</div>

        <div className={`${styles.header} reveal-up`}>
          <h2 className={styles.heading}>
            Real businesses. <em>Real revenue.</em>
          </h2>
          <div className={styles.globalStat}>
            <div className={styles.globalValue}>$250K+</div>
            <div className={styles.globalLabel}>Revenue generated across all clients</div>
          </div>
        </div>

        <div className={styles.stories}>
          {cases.map((c, i) => (
            <div
              key={c.index}
              className={`${styles.story} reveal-up`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageWrap}
              >
                <Image
                  src={c.image}
                  alt={`${c.client} website`}
                  width={1400}
                  height={900}
                  className={styles.image}
                  priority={i === 0}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayLogo}>
                    <Image
                      src={c.logo}
                      alt={`${c.client} logo`}
                      width={200}
                      height={80}
                      className={styles.logoImg}
                    />
                  </div>
                  <div className={styles.overlayLink}>
                    {c.urlLabel} →
                  </div>
                </div>
              </a>

              <div className={styles.content}>
                <div className={styles.contentTop}>
                  <span className={styles.index}>SS — {c.index}</span>
                  <span className={styles.tag}>{c.industry}</span>
                </div>
                <h3 className={styles.client}>{c.client}</h3>
                <p className={styles.location}>{c.location}</p>
                <p className={styles.description}>{c.description}</p>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{c.metric}</div>
                  <div className={styles.metricLabel}>{c.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
