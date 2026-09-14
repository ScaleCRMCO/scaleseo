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
    subtitle: "Google Organic Search Growth",
    desc: "Improving your organic rankings and visibility on Google to ensure buyers find your website first.",
    cta: "Explore SEO",
  },
  {
    href: "/services/google-ads-management",
    num: "02",
    title: "PPC Management",
    subtitle: "Google Ads & Bing Ads Management",
    desc: "Creating and managing paid search campaigns, optimizing ad copy, and building daily negative keyword lists to lower your cost-per-lead.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/web-development",
    num: "03",
    title: "Web Development",
    subtitle: "Fast, Conversion-Ready Websites",
    desc: "Building fast, fully responsive websites with clean code architecture, designed and structured for both high SEO visibility and conversions.",
    cta: "Explore Web Development",
  },
  {
    href: "/services/geo",
    num: "04",
    title: "AI SEO Service",
    subtitle: "ChatGPT & Perplexity Brand Tracking",
    desc: "Structuring web content for machine-readability and tracking your active brand citations daily across ChatGPT, Copilot, and Google AI Overviews.",
    cta: "Explore AI SEO",
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services" data-nav-theme="dark">
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>
          Are you looking to rank better in Google and Bing for your target
          keywords?
        </h2>
      </div>

      <div className={styles.grid}>
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
