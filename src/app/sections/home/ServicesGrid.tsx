import Link from "next/link";
import ServicesMark from "./ServicesMark";
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

function Card({ s }: { s: (typeof services)[number] }) {
  return (
    <Link href={s.href} className={styles.cell}>
      <span className={styles.cellIndex}>{s.num}</span>
      <h3 className={styles.cellTitle}>{s.title}</h3>
      <div className={styles.cellDesc}>{s.desc.map((d) => <p key={d} style={{ marginBottom: 10 }}>{d}</p>)}</div>
      <span className={styles.cellLink}>
        <span>{s.cta} &rarr;</span>
        <span className={styles.plus} aria-hidden="true">+</span>
      </span>
    </Link>
  );
}

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <h2 className={styles.introTitle}>SEO &amp; Digital Marketing for Accounting Firms</h2>
      <p className={styles.introSub}>
        We bring together organic search, paid advertising, and website
        development to help accounting firms attract new clients and grow their
        businesses.
      </p>

      {/* 3-column grid: card | logo mark | card, then three cards, then the
          intro paragraph in the bottom-right cell */}
      <div className={styles.grid}>
        <Card s={services[0]} />
        <ServicesMark />
        <Card s={services[1]} />
        <Card s={services[2]} />
        <Card s={services[3]} />
        <Card s={services[4]} />
        <div className={styles.outro}>
          <h3 className={styles.outroTitle}>One Strategy. Focused on Your Firm&rsquo;s Growth.</h3>
          <p>
            SEO, Google Ads, and your website shouldn&rsquo;t operate as separate
            marketing efforts.
          </p>
          <p className={styles.outroSmall}>
            We bring them together around your firm&rsquo;s goals, whether
            that&rsquo;s attracting more corporate tax clients, growing monthly
            bookkeeping revenue, or expanding your advisory services.
          </p>
          <Link href="/services" className={styles.allLink}>
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
