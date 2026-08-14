import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    name: "On-Page SEO",
    desc: "I rewrite your titles, structure, and internal links around what your buyers actually search — so the right pages rank for the right terms.",
    tag: "Core",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5h16M4 12h10M4 19h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Local SEO",
    desc: "Google Business Profile, reviews, citations, and location pages built to win the map pack in every city you actually serve.",
    tag: "Core",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-7-6.5-7-11a7 7 0 1114 0c0 4.5-7 11-7 11z" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Technical SEO",
    desc: "Speed, crawlability, schema, indexing. The unglamorous groundwork that decides whether the rest of your SEO counts for anything.",
    tag: "Core",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.3 5.7a3.5 3.5 0 00-4.6 4.6l-2.4 2.4a2 2 0 102.8 2.8l2.4-2.4a3.5 3.5 0 004.6-4.6l-2 2-1.4-1.4 2-2z" strokeLinejoin="round" />
        <path d="M14 14l4.5 4.5a1.8 1.8 0 002.5-2.5L16.5 11.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Reporting & Strategy",
    desc: "A monthly call where I show you what moved, what's next, and what it means for leads.",
    tag: "Ongoing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20V4M4 20h16" strokeLinecap="round" />
        <path d="M8 16l3.5-4 3 2.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "AI Search Optimisation",
    desc: "Setting up your site so ChatGPT, Perplexity, and Google's AI answers name you.",
    tag: "Emerging",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" strokeLinejoin="round" />
        <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "06",
    name: "Google Ads",
    desc: "Paid search to bring in leads while your SEO builds. In active development — open to current clients on request.",
    tag: "2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className={`${styles.services} section-dark`} id="services">
      <div className={styles.split}>
        <div className={styles.left}>
          <div className="section-label">What I Do</div>
          <h2 className={styles.heading}>
            A hyper-focused framework,<br />engineered <em>for scale.</em>
          </h2>
          <p className={styles.body}>
            We eliminate typical agency overhead and fluff to focus strictly
            on the core variables that move search rankings and corporate
            revenue. By aligning technical execution, data-driven content
            strategy, and visibility engines into one unified framework, we
            deliver direct, partner-level accountability that protects your
            return on investment.
          </p>
          <a href="#contact" className={styles.cta}>
            <span>Start a conversation</span>
            <span>→</span>
          </a>
          <Link href="/services" className={styles.servicesLink}>
            View all SEO services →
          </Link>
        </div>

        <div className={styles.right}>
          {services.map((s) => (
            <div key={s.num} className={`${styles.item} reveal-up`}>
              <div className={styles.itemTop}>
                <div className={styles.itemTopLeft}>
                  <span className={styles.itemIcon}>{s.icon}</span>
                  <span className={styles.itemNum}>{s.num}</span>
                </div>
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
