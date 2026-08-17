import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    name: "Search Engine Optimisation (SEO)",
    href: "/services/seo",
    offer: [
      "Technical SEO audits",
      "Intent-based keyword architecture",
      "Local search map scaling",
    ],
    outcomes: [
      "Increased high-intent organic traffic",
      "Top positions across high-margin target terms",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-5.5-5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Web Development & Design",
    href: "/services/web-development",
    offer: [
      "Conversion-optimized site design",
      "Clean speed budgets",
      "Integrated schema markup",
    ],
    outcomes: [
      "Faster loading speeds",
      "Higher visitor-to-lead conversion rates",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Google Ads Management",
    href: null,
    offer: [
      "Strict query mapping",
      "Custom landing pages",
      "Automated lead quality tracking",
    ],
    outcomes: [
      "Immediate inbound leads",
      "Reduced ad spend waste",
      "Lower cost-per-acquisition",
    ],
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
             SEO solutions to drive measurable growth across paid and organic channels.
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
          {services.map((s) => {
            const content = (
              <>
                <div className={styles.itemTop}>
                  <div className={styles.itemTopLeft}>
                    <span className={styles.itemIcon}>{s.icon}</span>
                    <span className={styles.itemNum}>{s.num}</span>
                  </div>
                </div>
                <h3 className={styles.itemName}>{s.name}</h3>

                <div className={styles.matrix}>
                  <div className={styles.matrixCol}>
                    <div className={styles.matrixLabel}>What I Offer</div>
                    <ul className={styles.matrixList}>
                      {s.offer.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.matrixCol}>
                    <div className={styles.matrixLabel}>Expected Outcomes</div>
                    <ul className={styles.matrixList}>
                      {s.outcomes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {s.href && (
                  <span className={styles.itemLink}>
                    Learn more <span className={styles.itemArrow}>→</span>
                  </span>
                )}
              </>
            );
            return s.href ? (
              <Link
                key={s.num}
                href={s.href}
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                {content}
              </Link>
            ) : (
              <div key={s.num} className={`${styles.item} reveal-up`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
