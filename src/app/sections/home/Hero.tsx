"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./Hero.module.css";

const paths = [
  {
    n: "01",
    title: "Audit",
    desc: "Find out exactly what's holding your rankings back.",
    href: "/contact",
  },
  {
    n: "02",
    title: "Scale",
    desc: "Already ranking — grow traffic and pipeline faster.",
    href: "/services/seo",
  },
  {
    n: "03",
    title: "Dominate",
    desc: "Full-funnel SEO + Google Ads engineered for revenue.",
    href: "/services",
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  return (
    <header ref={ref} className={styles.hero}>
      <FollowScrollPath pathLength={pathLength} pathOpacity={pathOpacity} />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          Calgary SEO &amp; Growth &middot; Canada &amp; Remote
        </p>

        <h1 className={styles.title}>
          Finally, an SEO
          <br />
          specialist that
          <br />
          <span className={styles.titleAccent}>actually delivers.</span>
        </h1>

        <p className={styles.intro}>
          I run technical SEO, local search, and Google Ads for accounting
          firms and professional service brands across Canada — no
          outsourcing, no account managers, just the work.
        </p>

        <div className={styles.ctaGroup}>
          <a href="/contact" className={styles.cta}>
            <span>Request a Free Audit</span>
            <span className={styles.arrow}>→</span>
          </a>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Book a Strategy Call
          </a>
        </div>
      </div>

      <div className={styles.pathRow}>
        <p className={styles.pathLabel}>Pick your path</p>
        <div className={styles.pathCards}>
          {paths.map((p) => (
            <a key={p.n} href={p.href} className={styles.pathCard}>
              <span className={styles.pathNum}>{p.n}</span>
              <span className={styles.pathBody}>
                <span className={styles.pathTitle}>{p.title}</span>
                <span className={styles.pathDesc}>{p.desc}</span>
              </span>
              <span className={styles.pathArrow} aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function FollowScrollPath({
  pathLength,
  pathOpacity,
}: {
  pathLength: any;
  pathOpacity: any;
}) {
  return (
    <svg
      className={styles.followPath}
      width="1278"
      height="1400"
      viewBox="0 0 1278 1400"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M876.6 234.1c-87.6-58.2-180.4-36-184.8 22.2-6.4 85.1 161.9 82.1 250.1-6.6 74.1-74.6 66.7-222.8-35.8-266.9-99.1-42.6-193.4 55.7-117.1 102.3 100 61 197 -128.2 51.5-201.9-96.6-48.9-162.5 13.9-168.2 68.9-5.7 55 40.3 60.7 64.1 50.9 23.8-9.9 27.8-42.2 10.3-69.7-29.2-46-107.7-15.5-145.6 23.6-32.9 33.9-44 84.1-24.5 129.9 16.9 39.8 53.8 63.6 95.2 55.7 84.4-16.2 58-96.1 10.2-116.2-51.3-21.5-189.9 22.9-186.8 101.2 1.8 46.9 23.4 78.8 87.4 79.6 97.6 1.3 189.1-67.8 316.2-74.8 108.4-6 294 16.9 343.7 89.8 24.6 36.1 31.3 60.8 5.4 92.2-30.4 36.9-98.3 36.8-150.9-8.4-52.5-45.1-67.7-85.5-62.8-141.9 4.3-50.7 35.5-95.2 83.2-107.8 35-9.3 71.1-2.8 77.2 28.7 7.1 35.9-62.2 35-93.9 27.5-35.2-8.2-56.3-37.9-67.7-71.3-13.5-39.3-3.1-70.3 23.7-100.4 29.7-33.6 87.5-46.4 119.3-14.9 31.2 31 11 57.2-19.6 80.5-43.6 33.3-103.6 19.6-156.4-11.5-42.5-25-100.7-91.4-68.5-128.8 20.8-24.2 65 -22.4 76 17.3 10.9 39.7-3.7 79-31.3 119.8-27.6 40.7-68.7 91.8-62.4 157.7 6.2 64.7 77.4 176 150.3 182.3 47.6 4.1 102.9 8.6 111.8-38.9 15.8-84.6-74.4-129.5-145.4-87.5-59.2 35-74 106.6-76.5 184.6-6.2 193.8 243.8 380.2-17.7 579-190.3 144.7-614.1-189.9-801.5 61.5-141.2 189.5-188 453.2-2.6 558.3 346.4 196.4 992.3-245.4 1069.4 237.4 72.4 453.4-1100.4-133.2-897.4 671" fill="none"
        stroke="var(--accent)"
        strokeWidth="18"
        strokeLinecap="round"
        style={{
          pathLength,
          opacity: pathOpacity,
          strokeDashoffset: 0,
        }}
      />
    </svg>
  );
}
