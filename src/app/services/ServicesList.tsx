"use client";
import { motion } from "motion/react";
import styles from "./page.module.css";

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

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO",
    desc: "Technical, on-page, and local search strategies focused on rankings and revenue.",
    cta: "Explore SEO Services",
  },
  {
    href: "/services/web-development",
    num: "02",
    title: "Web Development & Design",
    desc: "Fast, clean, SEO-first websites optimized for Core Web Vitals and conversions.",
    cta: "Explore Web Development & Design",
  },
  {
    href: "/services/geo",
    num: "03",
    title: "AI Search Optimization (GEO)",
    desc: "Machine-readable structuring to ensure visibility on ChatGPT, Perplexity, and AI Overviews.",
    cta: "Explore AI SEO Services",
  },
  {
    href: "/services/google-ads-management",
    num: "04",
    title: "Google Ads (PPC) Management",
    desc: "Profitable ad campaigns with waste elimination and high-converting landing pages.",
    cta: "Explore Google Ads Management",
  },
  {
    href: "/contact",
    num: "05",
    title: "Reporting & Strategy",
    desc: "Plain-English, 1-on-1 monthly reviews linked directly to pipeline revenue with a capped client roster.",
    cta: "Explore Strategy & Reporting",
  },
];

export default function ServicesList() {
  return (
    <div className={styles.grid}>
      {services.map((s) => (
        <div key={s.href} className={`${styles.card} reveal-up`}>
          <div className={styles.cardHead}>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <span className={`index ${styles.cardIndex}`}>{s.num}</span>
          </div>
          <p className={styles.cardDesc}>{s.desc}</p>
          <ExploreButton href={s.href} label={s.cta} />
        </div>
      ))}
    </div>
  );
}
