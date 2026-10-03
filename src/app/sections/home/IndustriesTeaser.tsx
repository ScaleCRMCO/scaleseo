import Link from "next/link";
import styles from "./IndustriesTeaser.module.css";

const industries: {
  num: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
}[] = [
  {
    num: "01",
    title: "Accounting & Financial Services",
    body: "SEO strategies for accounting firms and financial service businesses competing for valuable commercial searches.",
    link: {
      href: "/industries/accounting-firms",
      label: "Explore SEO for Accounting Firms",
    },
  },
  {
    num: "02",
    title: "Professional Services",
    body: "Organic search strategies for established professional service businesses that depend on expertise, reputation, and qualified enquiries rather than high-volume consumer traffic.",
  },
  {
    num: "03",
    title: "B2B & Consulting",
    body: "SEO for consultants and B2B companies with longer sales cycles, higher-value engagements, and customers who research extensively before making contact.",
  },
];

export default function IndustriesTeaser() {
  return (
    <section className={styles.section} id="industries" data-nav-theme="dark">
      <div className={styles.inner}>
        <h2 className={`${styles.heading} reveal-up`}>
          SEO for Professional Service &amp; B2B Businesses
        </h2>
        <div className={`${styles.intro} reveal-up`}>
          <p className={styles.introLead}>
            I work primarily with businesses where a single qualified search
            enquiry can turn into a valuable, long-term client relationship.
          </p>
        </div>

        {/* One row per industry: name left, description + link right */}
        <div className={styles.rows}>
          {industries.map((item) => (
            <div key={item.num} className={`${styles.row} reveal-up`}>
              <h3 className={styles.rowTitle}>{item.title}</h3>
              <div className={styles.rowBody}>
                <p>{item.body}</p>
                {item.link && (
                  <Link href={item.link.href} className={styles.rowLink}>
                    <span>{item.link.label}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className={`${styles.footNote} reveal-up`}>
          Based in Calgary. Working with businesses across Canada and
          internationally.
        </p>
      </div>
    </section>
  );
}
