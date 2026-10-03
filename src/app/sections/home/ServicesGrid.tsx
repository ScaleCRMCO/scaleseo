"use client";
import Link from "next/link";
import { motion } from "motion/react";
import styles from "./ServicesGrid.module.css";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

function ExploreButton({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      className={styles.exploreBtn}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
    >
      {label}
    </motion.a>
  );
}

// Card colours alternate through the palette (see .tone* in the CSS)
const services: {
  href: string;
  num: string;
  title: string;
  tone: "cyan" | "pink" | "white" | "lime" | "navy";
  subtitle: string;
  desc: string;
  cta: string;
}[] = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO Services",
    tone: "cyan",
    subtitle: "Ongoing Organic Search Growth",
    desc: "Monthly SEO campaigns combining technical SEO, keyword research, on-page optimization, content, local SEO, internal linking, and website improvements to increase your visibility across Google.",
    cta: "Explore SEO Services",
  },
  {
    href: "/services/seo-audits",
    num: "02",
    title: "SEO Audits",
    tone: "pink",
    subtitle: "Find Out What\u2019s Holding Your Website Back",
    desc: "Standalone technical and on-page SEO audits that identify indexing issues, content gaps, site architecture problems, ranking opportunities, and practical next steps.",
    cta: "Explore SEO Audits",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development",
    tone: "white",
    subtitle: "Websites Built With Search in Mind",
    desc: "Fast, responsive websites built around clean site architecture, organic search visibility, user experience, and conversions\u2014not just appearance.",
    cta: "Explore Web Development",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search Optimization",
    tone: "lime",
    subtitle: "Improve Visibility Across AI Search",
    desc: "Improve how your business and content are understood by AI-powered search experiences, while tracking brand visibility across platforms such as ChatGPT, Perplexity, and Google AI experiences.",
    cta: "Explore AI Search",
  },
  {
    href: "/services/google-ads-management",
    num: "05",
    title: "Google Ads Management",
    tone: "navy",
    subtitle: "Paid Search for High-Intent Leads",
    desc: "Google Ads campaigns built around high-intent searches, practical conversion tracking, negative keyword management, and continuous optimization.",
    cta: "Explore Google Ads",
  },
];

const toneClass = {
  cyan: styles.toneCyan,
  pink: styles.tonePink,
  white: styles.toneWhite,
  lime: styles.toneLime,
  navy: styles.toneNavy,
};

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
          <div key={s.href} className={`${styles.card} ${toneClass[s.tone]}`}>
            <div className={styles.cardHead}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <span className={`index ${styles.cardIndex}`}>{s.num}</span>
            </div>
            <div className={styles.cardSubtitle}>{s.subtitle}</div>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ExploreButton href={s.href} label={s.cta} />
          </div>
        ))}

        <motion.div className={styles.highlight} whileHover={{ scale: 1.01 }} transition={spring}>
          <Link href="/services" className={styles.highlightLink}>
            <span className={styles.highlightStar} aria-hidden="true">✺</span>
            <span className={styles.highlightEyebrow}>Core Services</span>
            <h3 className={styles.highlightHeading}>
              SEO, PPC, and AI Search Optimization.
            </h3>
            <p className={styles.highlightDesc}>
              Every campaign is customized to your industry, focused
              strictly on generating qualified business inquiries, and
              tracked using daily keyword reports.
            </p>
            <span className={styles.highlightCta}>
              <span>View all services</span>
              <span className={styles.highlightCtaArrow}>→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
