"use client";
import { useEffect, useRef } from "react";
import styles from "./BrisbaneForWhom.module.css";

const VERTICALS = [
  {
    icon: "§",
    label: "Vertical 01",
    title: "Accounting & Advisory Firms",
    body: "Boutique accounting practices, CPAs, tax specialists, and bookkeeping firms in Brisbane that want more qualified leads through search — not more time chasing them.",
    items: [
      "Boutique accounting practices",
      "CPAs & tax specialists",
      "Bookkeeping firms",
      "Business advisory & financial planning",
    ],
  },
  {
    icon: "⌖",
    label: "Vertical 02",
    title: "Trade Contractors & Specialists",
    body: "Plumbers, electricians, concreters, and builders in Brisbane and South East Queensland who want to show up when locals search for their trade.",
    items: [
      "Concrete & construction",
      "Plumbers & HVAC",
      "Electricians",
      "Roofing, landscaping & premium builds",
    ],
  },
];

export default function BrisbaneForWhom() {
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
    <section ref={ref} className={`${styles.section} section-dark`}>
      <div className="section-label">Who It&apos;s For</div>

      <h2 className={`${styles.heading} reveal-up`}>
        Built for two types of<br />
        <em>Brisbane business.</em>
      </h2>

      <div className={styles.grid}>
        {VERTICALS.map((v, i) => (
          <div
            key={v.label}
            className={`${styles.card} reveal-up`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.cardLabel}>
              <span className={styles.icon}>{v.icon}</span>
              <span className={styles.vertLabel}>{v.label}</span>
            </div>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardBody}>{v.body}</p>
            <ul className={styles.list}>
              {v.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className={`${styles.note} reveal-up`}>
        Not on this list? Reach out anyway — but only if you&apos;re an established
        service business with healthy margins and the patience for work that compounds.
      </p>
    </section>
  );
}
