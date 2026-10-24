import Link from "next/link";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO Services",
    desc: "Ongoing SEO campaigns covering technical optimization, content, local search, and organic growth.",
  },
  {
    href: "/services/seo-audits",
    num: "02",
    title: "SEO Audits",
    desc: "Standalone audits identifying technical issues, content gaps, and opportunities to improve search performance.",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development",
    desc: "Fast, search-friendly websites built for usability, organic visibility, and conversions.",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search Optimization",
    desc: "Improve how your business is represented and discovered across AI-powered search experiences.",
  },
  {
    href: "/services/google-ads-management",
    num: "05",
    title: "Google Ads Management",
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
        <span>See service</span>
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
        <div className={styles.markCell} aria-hidden="true">
          <svg className={styles.mark} viewBox="0 0 330 570" fill="none" stroke="currentColor">
            <circle cx="110" cy="110" r="98" strokeWidth="22" />
            <path d="M170 232 L306 553" strokeWidth="21" strokeLinecap="round" />
          </svg>
        </div>
        <Card s={services[1]} />
        <Card s={services[2]} />
        <Card s={services[3]} />
        <Card s={services[4]} />
        <div className={styles.outro}>
          <p>
            SEO is at the core of Scale SEO. I combine search strategy,
            technical improvements, content, and website development to help
            businesses compete in organic and paid search.
          </p>
          <Link href="/services" className={styles.allLink}>
            Explore all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
