import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO for Financial Services Businesses in Canada | Scale SEO",
  description:
    "SEO built for accounting firms, financial advisors, and other high-margin professional service businesses across Canada — not tied to one city, run by one specialist.",
};

const industries = [
  {
    name: "Accounting Firms",
    desc: "SEO for accounting and advisory practices going after institutional retainers and higher-value clients — not tax-season foot traffic.",
    href: "/industries/accounting-firms",
    status: "live",
  },
  {
    name: "Financial Advisors",
    desc: "Search visibility for advisors and wealth management practices where trust and compliance matter as much as rankings.",
    href: null,
    status: "Coming soon",
  },
  {
    name: "Corporate & Professional Services",
    desc: "Consultancies, legal-adjacent practices, and other B2B professional service firms selling on expertise, not price.",
    href: null,
    status: "Coming soon",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Industries</p>
          <h1 className={styles.title}>
            SEO for Financial &amp;{" "}
            <span className={styles.accent}>Professional Services.</span>
          </h1>
          <p className={styles.sub}>
            I work with a small number of high-margin service businesses
            across Canada — not one city. Accounting firms are the priority:
            the work compounds, the clients are worth landing, and I keep the
            roster deliberately small.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className="section-label reveal-up">Who I Work With</div>
        <div className={styles.grid}>
          {industries.map((ind) => {
            const content = (
              <>
                <div className={styles.itemTop}>
                  <h2 className={styles.itemName}>{ind.name}</h2>
                  {!ind.href && (
                    <span className={styles.itemStatus}>{ind.status}</span>
                  )}
                </div>
                <p className={styles.itemDesc}>{ind.desc}</p>
                {ind.href && (
                  <span className={styles.itemLink}>
                    Learn more <span className={styles.arrow}>→</span>
                  </span>
                )}
              </>
            );
            return ind.href ? (
              <Link
                key={ind.name}
                href={ind.href}
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                {content}
              </Link>
            ) : (
              <div key={ind.name} className={`${styles.item} reveal-up`}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Not seeing your industry? <span className={styles.accent}>Ask anyway.</span>
        </h2>
        <p className={styles.ctaSub}>
          These are the industries I focus on, not the only ones I&rsquo;ll
          consider. If the fit is right, let&rsquo;s talk.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book a call</span>
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
