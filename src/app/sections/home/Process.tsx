import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    name: "Conversation",
    body: "A 30-minute call. I learn your business, you learn whether I'm the right fit. No deck, no pitch.",
    time: "Week 1",
  },
  {
    num: "02",
    name: "Audit",
    body: "A complete teardown of your current site, rankings, competitors, and opportunities. You get the document either way.",
    time: "Week 1–2",
  },
  {
    num: "03",
    name: "Execution",
    body: "I do the work. On-page, local, technical, content, links — handled directly, not delegated.",
    time: "Month 1–3",
  },
  {
    num: "04",
    name: "Compounding",
    body: "Monthly reporting in plain English. Rankings, calls, revenue. The numbers either move or we figure out why.",
    time: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">How It Works</div>

      <h2 className={`${styles.heading} reveal-up`}>
        A simple, <em>uncomplicated</em> rhythm.
      </h2>

      <div className={`${styles.grid} reveal-up`}>
        {steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <div>
              <div className={styles.num}>{step.num}</div>
              <h3 className={styles.name}>{step.name}</h3>
              <p className={styles.body}>{step.body}</p>
            </div>
            <div className={styles.time}>{step.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
