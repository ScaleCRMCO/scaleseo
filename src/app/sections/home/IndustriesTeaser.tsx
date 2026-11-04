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
  {
    num: "04",
    title: "Contractors",
    body: "Local SEO and service pages for contractors who win high-value projects across their service area.",
  },
];

// Grid positions (About-page staggered layout): content boxes fill the
// central 2x2, with an empty outlined box at top-right and bottom-left.
const slots = [
  { col: 2, row: 1 },
  { col: 3, row: 1 },
  { col: 2, row: 2 },
  { col: 3, row: 2 },
];

// Navy section: heading + intro top-left, then six outlined boxes below in
// the About page's staggered layout (four industries in the centre).
export default function IndustriesTeaser() {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.head}>
        <h2 className={`${styles.heading} reveal-up`}>
          SEO for Professional Service &amp; B2B Businesses
        </h2>
        <p className={`${styles.introLead} reveal-up`}>
          We specialize in businesses where search visibility can lead to
          valuable enquiries, long-term clients, and measurable commercial
          growth.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.box} ${styles.empty}`} style={{ gridColumn: 4, gridRow: 1 }} aria-hidden="true" />
        {industries.map((item, i) => {
          const inner = (
            <>
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
          const pos = { gridColumn: slots[i].col, gridRow: slots[i].row };
          return item.href ? (
            <Link key={item.num} href={item.href} className={`${styles.box} ${styles.boxLink} reveal-up`} style={pos}>
              {inner}
            </Link>
          ) : (
            <div key={item.num} className={`${styles.box} reveal-up`} style={pos}>
              {inner}
            </div>
          );
        })}
        <div className={`${styles.box} ${styles.empty}`} style={{ gridColumn: 1, gridRow: 2 }} aria-hidden="true" />
      </div>
    </section>
  );
}
