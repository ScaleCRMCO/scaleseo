import styles from "./BrisbaneProcess.module.css";

const steps = [
  { num: "01", title: "Conversation", timing: "Week 1",    body: "A 30-minute call. You learn if I'm the right fit. I learn your business, your competitors, and what's been tried before." },
  { num: "02", title: "Audit",        timing: "Week 1–2",  body: "A complete teardown of your site, rankings, and Brisbane competitors. You get the document either way." },
  { num: "03", title: "Execution",    timing: "Month 1–3", body: "On-page, local, technical, content, and links — handled directly. Not delegated. No surprises." },
  { num: "04", title: "Compounding",  timing: "Ongoing",   body: "Monthly reporting in plain English. Rankings, calls, revenue. The numbers move or we figure out why." },
];

export default function BrisbaneProcess() {
  return (
    <section className={styles.section} id="brisbane-process">
      <div className="section-label reveal-up">How It Works</div>
      <div className={`${styles.intro} reveal-up`}>
        <h2 className={styles.heading}>
          A simple, <em>uncomplicated</em> rhythm.
        </h2>
        <p className={styles.body}>
          Four stages, in order, every time. No onboarding decks,
          no kick-off ceremonies. Just clear work, done well, reported
          honestly.
        </p>
      </div>
      <ul className={styles.list}>
        {steps.map((s) => (
          <li key={s.num} className={`${styles.item} reveal-up`}>
            <span className={styles.itemNum}>{s.num}</span>
            <span className={styles.itemName}>{s.title}</span>
            <span className={styles.itemDesc}>{s.body}</span>
            <span className={styles.itemTag}>{s.timing}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
