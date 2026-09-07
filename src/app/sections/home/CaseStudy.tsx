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
          <span className={`index ${styles.eyebrow}`}>( 01 // RECENT WORK )</span>
          <h2 className={styles.heading}>Real clients. Real numbers.</h2>
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
                Six months to 26% revenue growth for a premium construction
                brand.
              </h3>

              <div className={styles.metricCard}>
                <span className={styles.metricValue}>26%</span>
                <span className={styles.metricLabel}>Revenue growth</span>
              </div>

              <span className={styles.cta}>
                Read the full case study <span>→</span>
              </span>
            </div>
          </motion.article>
        </Link>
      </div>
    </section>
  );
}
