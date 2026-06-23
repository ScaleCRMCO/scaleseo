import Image from "next/image";
import styles from "./CaseStudy.module.css";

const cases = [
  {
    index: "01",
    client: "Kinsmen Consulting Ltd",
    location: "Calgary, Alberta",
    industry: "Concrete & Construction",
    description:
    "Positioned a premium concrete contractor in Calgary to attract high-value residential and commercial projects",
    metric: "26%",
    metricLabel: "Revenue Growth",
    image: "/images/kinsmen-hero.jpg",
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
    metric: "0 → Weekly",
    metricLabel: "Consistent booked clients from scratch",
    image: "/images/msv-screenshot.png",
    url: "https://msvplumbingservices.com.au/",
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
       <div className="section-label reveal-up">Success Stories · $250K+ generated for clients</div>

        <h2 className={`${styles.heading} reveal-up`}>
          A proven track record<em>in SEO.</em>
        </h2>

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
                  fill
                  className={styles.image}
                  priority={i === 0}
                  unoptimized
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    {c.urlLabel} →
                  </span>
                </div>
              </a>

              <div className={styles.content}>
                <div className={styles.index}>SS — {c.index}</div>
                <h3 className={styles.client}>{c.client}</h3>
                <p className={styles.location}>
                  {c.location}&nbsp;&nbsp;·&nbsp;&nbsp;{c.industry}
                </p>
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
