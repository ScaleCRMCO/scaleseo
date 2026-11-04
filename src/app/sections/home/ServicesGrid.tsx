import Link from "next/link";
import ServicesMark from "./ServicesMark";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO Services",
    cta: "Explore SEO Services",
    desc: "Ongoing SEO campaigns covering technical optimization, content, local search, and organic growth.",
  },
  {
    href: "/services/seo-audits",
    num: "02",
    title: "SEO Audits",
    cta: "Explore SEO Audits",
    desc: "Standalone audits identifying technical issues, content gaps, and opportunities to improve search performance.",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development",
    cta: "Explore Web Development",
    desc: "Fast, search-friendly websites built for usability, organic visibility, and conversions.",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search Optimization",
    cta: "Explore AI Search Optimization",
    desc: "Improve how your business is represented and discovered across AI-powered search experiences.",
  },
  {
    href: "/services/google-ads-management",
    num: "05",
    title: "Google Ads Management",
    cta: "Explore Google Ads",
    desc: "Targeted search campaigns focused on relevant enquiries, conversion tracking, and ongoing optimization.",
  },
];

function Card({ s }: { s: (typeof services)[number] }) {
  return (
    <Link href={s.href} className={styles.cell}>
      <span className={styles.cellIndex}>{s.num}</span>
      <h3 className={styles.cellTitle}>{s.title}</h3>
      <p className={styles.cellDesc}>{s.desc}</p>
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
      <h2 className={styles.introTitle}>SEO &amp; Digital Growth Services</h2>

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
          <p>
            SEO is at the core of what we do. Rather than treating each service
            separately, we bring together the right mix of strategy, content,
            and website improvements to support your business goals.
          </p>
          <Link href="/services" className={styles.allLink}>
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
