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

const services = [
  {
    href: "/services/seo",
    num: "01",
    title: "SEO",
    subtitle: "Owned & Earned Growth",
    desc: "Technical SEO, on-page fixes, and local scaling engineered to secure #1 organic ranking positions for B2B brands.",
    cta: "Explore SEO",
  },
  {
    href: "/services/google-ads-management",
    num: "02",
    title: "Google Ads",
    subtitle: "Answer Customer Wants & Needs",
    desc: "Profitable, data-driven pay-per-click campaigns built to drive high-quality leads and lower cost-per-acquisition.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Design & Development",
    subtitle: "Fast Sites That Convert",
    desc: "Ultra-fast, fully responsive website builds with clean code, built for high SEO visibility from day one.",
    cta: "Explore Web Design",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI Search (GEO)",
    subtitle: "Get Cited By AI Engines",
    desc: "Generative Engine Optimization tailored to secure citations in ChatGPT, Perplexity, and Google AI Overviews.",
    cta: "Explore AI Search",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services" data-nav-theme="dark">
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>
          Four pillars,
          <br />
          one integrated team.
        </h2>
        <p className={styles.introBody}>
          Scale SEO covers everything a growing professional services firm
          needs from a single marketing partner — no outsourcing, no
          hand-offs between specialists.
        </p>
      </div>

      <div className={styles.grid}>
        <motion.div className={styles.highlight} whileHover={{ scale: 1.01 }} transition={spring}>
          <Link href="/services" className={styles.highlightLink}>
            <span className={styles.highlightStar} aria-hidden="true">✺</span>
            <span className={styles.highlightEyebrow}>Explore</span>
            <h3 className={styles.highlightHeading}>
              Every service,
              <br />
              one hub.
            </h3>
            <p className={styles.highlightDesc}>
              SEO, Google Ads, Web Development, and AI Search — one
              specialist covering all four, end to end. See how they fit
              together.
            </p>
            <span className={styles.highlightCta}>
              <span>View all services</span>
              <span className={styles.highlightCtaArrow}>→</span>
            </span>
          </Link>
        </motion.div>

        <div className={styles.cardGrid}>
          {services.map((s) => (
            <div key={s.href} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <span className={`index ${styles.cardIndex}`}>{s.num}</span>
              </div>
              <div className={styles.cardSubtitle}>{s.subtitle}</div>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ExploreButton href={s.href} label={s.cta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
