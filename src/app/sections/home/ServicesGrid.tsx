import Link from "next/link";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO for Accounting Firms",
    cta: "Explore SEO Services",
    desc: [
      "Improve your visibility for searches related to corporate tax, bookkeeping, business advisory, and other valuable accounting services.",
      "Our SEO campaigns cover technical improvements, service page optimization, content development, and local search.",
    ],
  },
  {
    href: "/services/google-ads-management",
    num: "02",
    title: "Google Ads Management",
    cta: "Explore Google Ads",
    desc: [
      "Reach potential clients actively searching for accounting and tax services.",
      "We build and manage targeted Google Ads campaigns, focusing on relevant searches, lead tracking, and ongoing performance improvements.",
    ],
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Accounting Website Development",
    cta: "Explore Website Development",
    desc: [
      "Professional websites designed to represent your firm, explain your services clearly, and make it easier for potential clients to get in touch.",
      "Every website is developed with search visibility, usability, and long-term growth in mind.",
    ],
  },
  {
    href: "/services/seo-audits",
    num: "04",
    title: "SEO Audits & Consulting",
    cta: "Explore SEO Audits",
    desc: [
      "Understand what\u2019s holding your accounting website back.",
      "We review technical issues, keyword targeting, existing content, competitors, and opportunities to improve your search visibility.",
    ],
  },
  {
    href: "/services/geo",
    num: "05",
    title: "AI Search Optimization",
    cta: "Explore AI Search Optimization",
    desc: [
      "Help search engines and AI-powered platforms better understand your firm, its services, and areas of expertise.",
      "We improve website content, structured data, and business information to support visibility across evolving search experiences.",
    ],
  },
];

// Bilberrry-style list: heading + subline top-left, closing note
// bottom-left, numbered service rows on the right.
export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.listLayout}>
        <div className={styles.listAside}>
          <div>
            <h2 className={styles.listTitle}>SEO &amp; Digital Marketing for Accounting Firms</h2>
            <p className={styles.listSub}>
              We bring together organic search, paid advertising, and website
              development to help accounting firms attract new clients and grow
              their businesses.
            </p>
          </div>
          <div className={styles.listNote}>
            <p>
              SEO, Google Ads, and your website shouldn&rsquo;t operate as
              separate marketing efforts.
            </p>
            <p>
              We bring them together around your firm&rsquo;s goals, whether
              that&rsquo;s attracting more corporate tax clients, growing monthly
              bookkeeping revenue, or expanding your advisory services.
            </p>
            <Link href="/services" className={styles.allLink}>
              Explore All Services →
            </Link>
          </div>
        </div>
        <ol className={styles.list}>
          {services.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className={styles.listRow}>
                <span className={styles.listNum}>/ {s.num}</span>
                <span className={styles.listName}>
                  {s.title}
                  <svg className={styles.listArrow} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M1 1.5h7.5V9" />
                  </svg>
                </span>
                <span className={styles.listDesc}>
                  {s.desc.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
