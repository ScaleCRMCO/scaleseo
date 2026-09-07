"use client";
import { motion } from "motion/react";
import styles from "./Hero.module.css";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.ambient} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.p
          className={`index ${styles.meta}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          ( SCALE SEO · CALGARY SEO &amp; DIGITAL MARKETING COMPANY // )
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.25 }}
        >
          Finally, an SEO
          <br />
          specialist that{" "}
          <span className={styles.titleBlock}>actually delivers.</span>
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.4 }}
        >
          I run technical SEO, local search, and Google Ads for accounting
          firms and professional service brands across Canada — no
          outsourcing, no account managers, just the work.
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
    </header>
  );
}
