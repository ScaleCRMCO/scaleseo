import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    name: "Conversation",
    body: "A 30-minute strategy call to understand your business, current marketing, target customers, and what you\u2019re trying to achieve.",
    time: "Week 1",
  },
  {
    num: "02",
    name: "Audit & Strategy",
    body: "I review your website, current rankings, competitors, technical foundation, and organic search opportunities to determine where the biggest gains are likely to come from.",
    time: "Week 1\u20132",
  },
  {
    num: "03",
    name: "Execution",
    body: "I implement the strategy directly. Depending on the campaign, that can include technical SEO, on-page optimization, content, local SEO, internal linking, and website improvements.",
    time: "Month 1\u20133",
  },
  {
    num: "04",
    name: "Compounding Growth",
    body: "SEO continues to evolve as rankings improve and new opportunities emerge. Performance is tracked and the strategy is adjusted based on real search data rather than a fixed monthly checklist.",
    time: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.layout}>
        {/* LEFT — heading + intro, same column as the FAQ heading */}
        <div className={styles.aside}>
          <h2 className={`${styles.headingBig} reveal-up`}>
            4 easy steps to get started.
          </h2>
          <p className={`${styles.intro} ${styles.introStrong} reveal-up`}>
            Every engagement starts by understanding where your website stands
            today and whether SEO represents a realistic growth opportunity for
            your business.
          </p>
        </div>

        {/* RIGHT — numbered rows: big number | name | description */}
        <ol className={styles.rows}>
          {steps.map((step) => (
            <li key={step.num} className={`${styles.row} reveal-up`}>
              <span className={styles.num}>{step.num}</span>
              <h3 className={styles.name}>{step.name}</h3>
              <div>
                <p className={styles.body}>{step.body}</p>
                <span className={styles.time}>{step.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
