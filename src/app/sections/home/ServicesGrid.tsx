"use client";
import Link from "next/link";
import styles from "./ServicesGrid.module.css";

const services: {
  href: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
}[] = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO Services",
    subtitle: "Ongoing Organic Search Growth",
    desc: "Monthly SEO campaigns combining technical SEO, keyword research, on-page optimization, content, local SEO, internal linking, and website improvements to increase your visibility across Google.",
    cta: "Explore SEO Services",
  },
  {
    href: "/services/seo-audits",
    num: "02",
    title: "SEO Audits",
    subtitle: "Find Out What\u2019s Holding Your Website Back",
    desc: "Standalone technical and on-page SEO audits that identify indexing issues, content gaps, site architecture problems, ranking opportunities, and practical next steps.",
    cta: "Explore SEO Audits",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development",
    subtitle: "Websites Built With Search in Mind",
    desc: "Fast, responsive websites built around clean site architecture, organic search visibility, user experience, and conversions\u2014not just appearance.",
    cta: "Explore Web Development",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search Optimization",
    subtitle: "Improve Visibility Across AI Search",
    desc: "Improve how your business and content are understood by AI-powered search experiences, while tracking brand visibility across platforms such as ChatGPT, Perplexity, and Google AI experiences.",
    cta: "Explore AI Search",
  },
  {
    href: "/services/google-ads-management",
    num: "05",
    title: "Google Ads Management",
    subtitle: "Paid Search for High-Intent Leads",
    desc: "Google Ads campaigns built around high-intent searches, practical conversion tracking, negative keyword management, and continuous optimization.",
    cta: "Explore Google Ads",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services" data-nav-theme="dark">
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>SEO &amp; Digital Growth Services</h2>
        <div className={styles.introBody}>
          <p>
            SEO is the core of what I do at Scale SEO. I build and manage
            ongoing search campaigns designed around your website, market,
            competitors, and business goals rather than forcing every client
            into the same package.
          </p>
          <p>
            From technical improvements and content to website development and
            paid search, the focus stays on generating meaningful search
            visibility and qualified enquiries.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <article key={s.href} className={styles.cell}>
            <span className={styles.cellIndex}>{s.num}</span>
            <h3 className={styles.cellTitle}>{s.title}</h3>
            <div className={styles.cellSubtitle}>{s.subtitle}</div>
            <p className={styles.cellDesc}>{s.desc}</p>
            <Link href={s.href} className={styles.cellLink}>
              {s.cta} →
            </Link>
          </article>
        ))}

        <article className={styles.cell}>
          <span className={styles.cellIndex}>Core Services</span>
          <h3 className={styles.cellTitle}>
            SEO, PPC, and AI Search Optimization.
          </h3>
          <p className={styles.cellDesc}>
            Every campaign is customized to your industry, focused
            strictly on generating qualified business inquiries, and
            tracked using daily keyword reports.
          </p>
          <Link href="/services" className={styles.cellLink}>
            View all services →
          </Link>
        </article>
      </div>
    </section>
  );
}
