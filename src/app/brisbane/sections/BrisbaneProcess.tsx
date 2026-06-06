"use client";
import { useEffect, useRef } from "react";
import styles from "./BrisbaneProcess.module.css";

const STEPS = [
  { num: "01", title: "Conversation", timing: "Week 1", body: "A 30-minute call. You learn if I'm the right fit. I learn your business, competitors, and what's been tried before." },
  { num: "02", title: "Audit", timing: "Week 1–2", body: "A complete teardown of your site, rankings, and Brisbane competitors. You get the document either way." },
  { num: "03", title: "Execution", timing: "Month 1–3", body: "On-page, local, technical, content, and links. Handled directly — not delegated. No surprises." },
  { num: "04", title: "Compounding", timing: "Ongoing", body: "Monthly reporting in plain English. Rankings, calls, revenue. The numbers move or we figure out why." },
];

export default function BrisbaneProcess() {
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
      <div className="section-label">How It Works</div>

      <h2 className={`${styles.heading} reveal-up`}>
        Simple from day one.<br />
        <em>Compounding from month one.</em>
      </h2>

      <div className={styles.steps}>
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={`${styles.step} reveal-up`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className={styles.stepTop}>
              <span className={styles.stepNum}>{s.num}</span>
              <span className={styles.stepTiming}>{s.timing}</span>
            </div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepBody}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
