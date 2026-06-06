"use client";
import { useEffect, useRef } from "react";
import styles from "./BrisbaneCTA.module.css";

export default function BrisbaneCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${styles.section} section-dark`}>
      <div className={styles.inner}>
        <div className="section-label">Now Booking · Brisbane</div>

        <h2 className={`${styles.heading} reveal-up`}>
          Let&apos;s see if we&apos;re<br />
          <em>a fit.</em>
        </h2>

        <p className={`${styles.sub} reveal-up`}>
          A 30-minute conversation is enough to know. If it&apos;s not
          the right fit, you&apos;ll still leave with a clear picture
          of where your SEO stands.
        </p>

        <div className={`${styles.ctaGroup} reveal-up`}>
          <a href="/#contact" className={styles.cta}>
            <span>Send an enquiry</span>
            <span className={styles.arrow}>→</span>
          </a>
          <span className={styles.reply}>Reply within 24 hours</span>
        </div>
      </div>

      {/* Corner coords */}
      <div className={styles.coordBl}>Brisbane · QLD · AU</div>
      <div className={styles.coordBr}>27.46°S / 153.02°E</div>
    </section>
  );
}
