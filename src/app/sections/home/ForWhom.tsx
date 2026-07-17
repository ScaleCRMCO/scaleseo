import styles from "./ForWhom.module.css";

const industries = [
  {
    tag: "01 / Professional & Financial Services",
    title: "Corporate & Financial Practices",
    body: "We build high-intent search authority for accounting firms, corporate consultancies, and private practices looking to secure institutional retainers and advisory clients.",
  },
  {
    tag: "02 / Commercial & Premium Contracting",
    title: "High-Ticket Trade Operations",
    body: "Re-engineering search visibility for established commercial contractors and premium home service brands where a single inbound lead translates into a five or six-figure contract.",
  },
  {
    tag: "03 / High-Margin B2B Enterprises",
    title: "B2B & Enterprise Services",
    body: "Optimizing complex digital footprints to capture B2B decision-makers at the precise moment they search for operational solutions, software integrations, or corporate logistics.",
  },
  {
    tag: "04 / The Revenue Fit (Your Qualifier)",
    title: "Maximum Scalability",
    body: "We exclusively partner with businesses that have the operational infrastructure and sales capacity to handle a substantial, predictable influx of inbound pipeline traffic.",
  },
];

export default function ForWhom() {
  return (
    <section className={styles.section}>
      <div className="section-label reveal-up">Who I Work With</div>

      <h2 className={`${styles.statement} reveal-up`}>
        Industries built for <em>volume &amp; margin.</em>
      </h2>

      <div className={styles.list}>
        {industries.map((item) => (
          <div key={item.tag} className={`${styles.item} reveal-up`}>
            <div className={styles.itemTag}>{item.tag}</div>
            <div className={styles.itemMain}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
