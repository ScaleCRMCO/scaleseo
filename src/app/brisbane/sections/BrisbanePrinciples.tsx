import styles from "./BrisbanePrinciples.module.css";

const principles = [
  {
    num: "01",
    name: "Direct. No middlemen.",
    desc: "Every email, every audit, every call — handled by Corbin Jensen directly. No account managers, no junior staff learning on your retainer.",
  },
  {
    num: "02",
    name: "Small roster. Real focus.",
    desc: "Working with a small number of Brisbane clients at a time means your business gets real attention — not slot #47 in a 200-client agency spreadsheet.",
  },
  {
    num: "03",
    name: "No shortcuts that age into penalties.",
    desc: "No PBNs, no link farms, no keyword stuffing. Work done properly compounds over time. Work done cheaply costs you twice.",
  },
  {
    num: "04",
    name: "Revenue, not vanity rankings.",
    desc: "If your phone isn't ringing, the job isn't done. Rankings are a means to an end. The end is enquiries, clients, and revenue.",
  },
];

export default function BrisbanePrinciples() {
  return (
    <section className={styles.section} id="brisbane-principles">
      <div className="section-label reveal-up">Why Freelancer</div>
      <div className={`${styles.intro} reveal-up`}>
        <h2 className={styles.heading}>
          Most of what gives SEO a bad name, <em>I won&rsquo;t do.</em>
        </h2>
        <p className={styles.body}>
          If you&rsquo;ve been burned by an agency before, this is why.
          These are the four things I commit to every Brisbane client
          from day one.
        </p>
      </div>
      <ul className={styles.list}>
        {principles.map((p) => (
          <li key={p.num} className={`${styles.item} reveal-up`}>
            <span className={styles.itemNum}>{p.num}</span>
            <span className={styles.itemName}>{p.name}</span>
            <span className={styles.itemDesc}>{p.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
