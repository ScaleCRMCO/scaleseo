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
    <section className={styles.section} id="industries">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={`${styles.heading} reveal-up`}>
            SEO for Professional Service <em>&amp; B2B Businesses</em>
          </h2>
          <div className={`${styles.introBody} reveal-up`}>
            <p>
              I work primarily with businesses where a single qualified search
              enquiry can turn into a valuable, long-term client relationship.
            </p>
            <p>
              Rather than taking on hundreds of businesses across unrelated
              industries, I keep the roster small and focus on companies where
              organic search can become a meaningful customer acquisition
              channel.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {industries.map((item) => (
            <div key={item.num} className={`${styles.card} reveal-up`}>
              <span className={`index ${styles.cardIndex}`}>{item.num}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
              {item.link && (
                <Link href={item.link.href} className={styles.cardLink}>
                  <span>{item.link.label}</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              )}
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
