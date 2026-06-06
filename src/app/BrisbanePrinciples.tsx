"use client";
import { useEffect, useRef } from "react";
import styles from "./BrisbanePrinciples.module.css";

const PRINCIPLES = [
  {
    num: "01",
    title: "You work directly with the person doing the work.",
    body: "No account managers forwarding your emails. No junior staff learning on your retainer. Every audit, every call, every piece of copy — handled by Corbin Jensen directly.",
  },
  {
    num: "02",
    title: "Small roster. Real focus.",
    body: "Working with a small number of Brisbane clients at a time means your business actually gets attention — not slot #47 in a 200-client agency spreadsheet.",
  },
  {
    num: "03",
    title: "No shortcuts that age into penalties.",
    body: "No PBNs, no link farms, no keyword stuffing. Work done properly compounds over time. Work done cheaply costs you twice — once now, once when Google catches it.",
  },
  {
    num: "04",
    title: "Revenue, not rankings.",
    body: "If your phone isn't ringing, the job isn't done. Rankings are a means to an end. The end is enquiries, clients, and revenue that you can actually measure.",
  },
];

export default function BrisbanePrinciples() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className="section-label">Why Freelancer</div>

      <h2 className={`${styles.heading} reveal-up`}>
        Why Brisbane businesses choose<br />
        <em>a specialist over an agency.</em>
      </h2>

      <div className={styles.list}>
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.num}
            className={`${styles.item} reveal-up`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className={styles.num}>{p.num}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
