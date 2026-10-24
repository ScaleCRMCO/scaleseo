import Link from "next/link";
import styles from "./IndustriesTeaser.module.css";

const industries: {
  num: string;
  title: string;
  body: string;
  href?: string;
}[] = [
  {
    num: "01",
    title: "Accounting & Financial Services",
    body: "SEO for accounting and financial service firms targeting competitive, high-value commercial searches.",
    href: "/industries/accounting-firms",
  },
  {
    num: "02",
    title: "Professional Services",
    body: "Search strategies for established firms that depend on expertise, reputation, and qualified enquiries.",
  },
  {
    num: "03",
    title: "B2B & Consulting",
    body: "SEO for businesses with longer sales cycles, specialist services, and research-driven buyers.",
  },
];

// Navy section: heading + intro top-left with open space, then the three
// boxes stepping down the grid in a staircase (col 3, col 2, col 1).
export default function IndustriesTeaser() {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.grid}>
        <div className={styles.head}>
          <h2 className={`${styles.heading} reveal-up`}>
            SEO for Professional Service &amp; B2B Businesses
          </h2>
          <p className={`${styles.introLead} reveal-up`}>
            I specialize in businesses where search visibility can lead to
            valuable enquiries, long-term clients, and measurable commercial
            growth.
          </p>
        </div>

        {industries.map((item, i) => {
          const inner = (
            <>
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
              {item.href && (
                <span className={styles.more}>
                  <span>Explore SEO for Accounting Firms</span>
                  <span className={styles.plus} aria-hidden="true">+</span>
                </span>
              )}
            </>
          );
          const cls = `${styles.box} ${styles[`step${i + 1}`]} reveal-up`;
          return item.href ? (
            <Link key={item.num} href={item.href} className={`${cls} ${styles.boxLink}`}>
              {inner}
            </Link>
          ) : (
            <div key={item.num} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
