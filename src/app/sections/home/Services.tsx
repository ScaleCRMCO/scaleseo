import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    name: "SEO",
    desc: "Technical, on-page, and local SEO built to improve real rankings and revenue — not just a checklist of tasks.",
    tag: "Core",
    href: "/services/seo",
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
    desc: "Fast, clean websites for accounting and professional service businesses — designed and built with SEO in from the start.",
    tag: "Core",
    href: "/services/web-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "AI Search Optimisation (GEO)",
    desc: "Setting up your site so ChatGPT, Perplexity, and Google's AI answers name you.",
    tag: "Emerging",
    href: "/services/geo",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" strokeLinejoin="round" />
        <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Reporting & Strategy",
    desc: "A monthly call where I show you what moved, what's next, and what it means for leads.",
    tag: "Ongoing",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20V4M4 20h16" strokeLinecap="round" />
        <path d="M8 16l3.5-4 3 2.5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    name: "Google Ads",
    desc: "Paid search to bring in leads while your SEO builds. In active development — open to current clients on request.",
    tag: "2026",
    href: null,
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
          {services.map((s) => {
            const content = (
              <>
                <div className={styles.itemTop}>
                  <div className={styles.itemTopLeft}>
                    <span className={styles.itemIcon}>{s.icon}</span>
                    <span className={styles.itemNum}>{s.num}</span>
                  </div>
                  <span className={styles.itemTag}>{s.tag}</span>
                </div>
                <h3 className={styles.itemName}>{s.name}</h3>
                <p className={styles.itemDesc}>{s.desc}</p>
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
