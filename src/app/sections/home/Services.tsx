import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Get found by your ideal clients on Google.",
    desc: "We fix technical site issues, optimize your core pages, and build your online authority so your firm ranks at the top when local clients are actively searching for your services.",
    cta: "Explore SEO Services",
  },
  {
    href: "/services/google-ads-management",
    num: "02",
    title: "Google Ads (PPC) Management",
    subtitle: "Generate immediate, high-quality business leads.",
    desc: "We build and manage targeted ad campaigns designed to put your firm in front of ready-to-hire clients, continuously optimizing your ad spend to maximize your return on investment.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development & Design",
    subtitle: "Turn casual website visitors into paying clients.",
    desc: "We build lightning-fast, mobile-friendly websites that look highly professional, load instantly, and are engineered from day one to turn traffic into concrete business inquiries.",
    cta: "Explore Web Design",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search Optimization (GEO)",
    subtitle: "Secure your presence in AI-driven search results.",
    desc: "We format and structure your website's data so modern AI assistants like ChatGPT, Perplexity, and Google AI Overviews can easily find, understand, and recommend your firm to users.",
    cta: "Explore AI Search Services",
  },
  {
    href: "/services/seo-audits",
    num: "05",
    title: "SEO Audits",
    subtitle: "Find out what's holding your website back.",
    desc: "A standalone technical and on-page SEO audit with practical, prioritised recommendations — no ongoing monthly commitment required.",
    cta: "Explore SEO Audits",
  },
];

export default function Services() {
  return (
    <section className={`${styles.services} section-dark`} id="services">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className="section-label reveal-up">What I Do</div>
          <h2 className={`${styles.heading} reveal-up`}>Core Services</h2>
          <p className={`${styles.body} reveal-up`}>
            SEO solutions to drive measurable growth across paid and organic channels.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.href} className={`${styles.card} reveal-up`}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <span className={`index ${styles.cardIndex}`}>{s.num}</span>
              </div>
              <div className={styles.cardSubtitle}>{s.subtitle}</div>
              <p className={styles.cardDesc}>{s.desc}</p>
              <Link href={s.href} className={styles.exploreBtn}>
                {s.cta}
              </Link>
            </div>
          ))}

          <div className={`${styles.highlight} reveal-up`}>
            <Link href="/results" className={styles.highlightLink}>
              <span className={styles.highlightStar} aria-hidden="true">✺</span>
              <span className={styles.highlightEyebrow}>The Matrix</span>
              <h3 className={styles.highlightHeading}>
                Every discipline, one execution model.
              </h3>
              <p className={styles.highlightDesc}>
                Five services, one specialist — no scope creep, no
                hand-offs between teams, no outsourced pieces bolted on.
              </p>
              <span className={styles.highlightCta}>
                <span>See the results</span>
                <span className={styles.highlightCtaArrow}>→</span>
              </span>
            </Link>
          </div>
        </div>

        <Link href="/services" className={styles.servicesLink}>
          Explore all SEO, web development &amp; Google Ads services →
        </Link>
      </div>
    </section>
  );
}
