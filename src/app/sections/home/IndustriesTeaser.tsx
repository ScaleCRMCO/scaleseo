import Link from "next/link";
import styles from "./IndustriesTeaser.module.css";

const industries: {
  num: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}[] = [
  {
    num: "01",
    title: "CPA & Chartered Accounting Firms",
    body: "SEO and Google Ads for accounting practices looking to attract more corporate tax, business accounting, and ongoing advisory clients.",
  },
  {
    num: "02",
    title: "Corporate Tax & Tax Advisory Firms",
    body: "Search strategies focused on reaching businesses that need corporate tax filing, tax planning, restructuring, and specialized tax advice.",
  },
  {
    num: "03",
    title: "Bookkeeping & Cloud Accounting Practices",
    body: "Improve visibility for monthly bookkeeping, payroll, cloud accounting, and outsourced financial management services.",
  },
  {
    num: "04",
    title: "Fractional CFO & Advisory Firms",
    body: "Reach business owners searching for financial planning, cash flow management, outsourced CFO support, and strategic business advice.",
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
          Who We Work With
        </h2>
        <Link href="/industries/accounting-firms" className={`${styles.introLink} reveal-up`}>
          <svg className={styles.introCorner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M1 1.5h7.5V9" />
          </svg>
          <span>Explore SEO for Accounting Firms</span>
        </Link>
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
                  <span>{item.cta}</span>
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
