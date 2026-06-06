"use client";
import { useEffect, useRef } from "react";
import styles from "./BrisbaneServices.module.css";

const SERVICES = [
  {
    num: "01",
    title: "On-Page SEO",
    body: "Page-by-page optimisation of titles, headings, structure, and internal linking. The foundation every other signal builds on — if this is weak, nothing else earns credit.",
    tag: "Core",
  },
  {
    num: "02",
    title: "Local SEO & Google Maps",
    body: "Google Business Profile management, map pack rankings, local citations, and geo-targeted content. Brisbane clients find you before they find anyone else.",
    tag: "Core",
  },
  {
    num: "03",
    title: "Technical SEO",
    body: "Site speed, crawlability, schema markup, and indexation. The plumbing that decides whether your content actually earns credit from Google.",
    tag: "Core",
  },
  {
    num: "04",
    title: "SEO Reporting & Strategy",
    body: "Plain-English monthly reporting — rankings, keywords, revenue movements, and what's next. No dashboards that need a decoder ring.",
    tag: "Ongoing",
  },
];

export default function BrisbaneServices() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className="section-label">Services</div>

      <div className={styles.header}>
        <h2 className={`${styles.heading} reveal-up`}>
          The work that actually<br />
          <em>moves the needle.</em>
        </h2>
        <p className={`${styles.intro} reveal-up`}>
          Six things done properly. Not fifty things done passably.
          Every engagement covers these four as the foundation,
          built on top of each other in sequence.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.card} reveal-up`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.cardTop}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.tag}>{s.tag}</span>
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardBody}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
