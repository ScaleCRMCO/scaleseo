"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { caseStudies } from "../../data/caseStudies";
import styles from "./CaseStudy.module.css";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };
const kinsmen = caseStudies.find((c) => c.client.startsWith("Kinsmen"))!;

export default function CaseStudy() {
  return (
    <section className={styles.case} id="work">
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            SEO Results From Real Client Campaigns
          </h2>
          <div className={styles.intro}>
            <p>
              Search rankings are useful, but they only matter when increased
              visibility contributes to real business growth.
            </p>
            <p>
              Scale SEO campaigns are built around improving the search
              visibility that matters to each client, whether that means
              ranking important service pages, expanding organic traffic,
              generating qualified enquiries, or supporting broader revenue
              growth.
            </p>
          </div>
        </div>

        <Link href="/results" className={styles.cardLinkWrap}>
          <motion.article
            className={styles.card}
            whileHover={{ y: -4 }}
            transition={spring}
          >
            <div className={styles.mockup}>
              <div className={styles.mockDots}>
                <span className={styles.mockDot} />
                <span className={styles.mockDot} />
                <span className={styles.mockDot} />
              </div>
              <div className={styles.mockImageWrap}>
                <Image
                  src={kinsmen.image}
                  alt={`${kinsmen.client} website`}
                  fill
                  className={styles.mockImage}
                  unoptimized
                />
              </div>
            </div>

            <div className={styles.data}>
              <span className={styles.meta}>
                CASE 01 // KINSMEN CONSULTING // CALGARY, AB
              </span>

              <h3 className={styles.statement}>
                Six Months to 26% Revenue Growth for a Calgary Construction
                Company
              </h3>

              <p className={styles.summary}>
                A new search-focused website and ongoing SEO campaign helped
                Kinsmen Consulting strengthen its organic presence while
                supporting measurable business growth.
              </p>

              <div className={styles.metricCard}>
                <span className={styles.metricValue}>26%</span>
                <span className={styles.metricLabel}>Revenue Growth</span>
              </div>

              <span className={styles.cta}>
                Read the Full Case Study <span>→</span>
              </span>
            </div>
          </motion.article>
        </Link>
      </div>
    </section>
  );
}
