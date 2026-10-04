"use client";
import { motion } from "motion/react";
import styles from "./Hero.module.css";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

export default function Hero() {
  return (
    <header className={styles.hero}>
            <div className={styles.grid}>
      <div className={styles.inner}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.25 }}
        >
          Calgary SEO Expert&nbsp;–
          <br />
          SEO, Google Ads,
          <br />
          and AI Search Services.
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.4 }}
        >
          Scale SEO helps professional service businesses across Canada
          secure more customers, leads, and sales through search
          optimization and paid advertising. Run entirely by Corbin Jensen,
          this practice provides direct, hands-on execution without
          rotating account managers or outsourced white-labeling.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.55 }}
        >
          <motion.a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={spring}
          >
            Book a Strategy Call →
          </motion.a>
          <motion.a
            href="#contact"
            className={styles.ctaSecondary}
            whileHover={{ y: -2 }}
            transition={spring}
          >
            Send an Email →
          </motion.a>
        </motion.div>
      </div>

      <motion.figure
        className={styles.proof}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.5 }}
      >
        <div className={styles.proofStat}>
          <span className={styles.proofValue}>+125%</span>
          <span className={styles.proofLabel}>
            Search impressions for an accounting firm
          </span>
        </div>
        <img
          src="/images/gsc-performance-mockup-3d.webp"
          alt="Google Search Console performance data showing clicks and impressions growth"
          className={styles.proofImg}
        />
        <figcaption className={styles.proofCaption}>
          Real Google Search Console Data
        </figcaption>
      </motion.figure>
      </div>
    </header>
  );
}
