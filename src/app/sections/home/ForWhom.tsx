import styles from "./ForWhom.module.css";

const criteria = [
  {
    num: "01",
    title: "Healthy margins",
    body: "Enough room per client that ranking higher actually moves revenue, not just traffic.",
  },
  {
    num: "02",
    title: "Room to grow",
    body: "A sales process that can absorb more leads without falling over.",
  },
  {
    num: "03",
    title: "Exclusivity",
    body: "No more than two direct competitors as clients in the same city.",
  },
  {
    num: "04",
    title: "Patience",
    body: "Comfortable investing months, not days, in results that compound.",
  },
];

export default function ForWhom() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">Who I Work With</div>

      <h2 className={`${styles.statement} reveal-up`}>
        I don&rsquo;t specialize in an industry &mdash;{" "}
        <em>I specialize in fit.</em>
      </h2>

      <p className={`${styles.sub} reveal-up`}>
        Right now that&rsquo;s accounting firms, home service businesses, and
        trade contractors across Canada and Australia. The industry matters
        less than whether the business is ready for what SEO actually
        delivers.
      </p>

      <div className={`${styles.grid} reveal-up`}>
        {criteria.map((c) => (
          <div key={c.num} className={styles.item}>
            <span className={styles.num}>{c.num}</span>
            <h3 className={styles.itemTitle}>{c.title}</h3>
            <p className={styles.itemBody}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
