import styles from "./BrisbaneForWhom.module.css";

const verticals = [
  {
    num: "01",
    name: "Accounting & Advisory Firms",
    desc: "Boutique practices, CPAs, tax specialists, and bookkeeping firms in Brisbane that want more qualified leads through search — not more time chasing them.",
    items: ["Boutique accounting practices", "CPAs & tax specialists", "Bookkeeping firms", "Business advisory & financial planning"],
  },
  {
    num: "02",
    name: "Trade Contractors & Specialists",
    desc: "Plumbers, electricians, concreters, and builders in Brisbane and South East Queensland who want to show up when locals search for their trade.",
    items: ["Concrete & construction", "Plumbers & HVAC", "Electricians", "Roofing, landscaping & premium builds"],
  },
];

export default function BrisbaneForWhom() {
  return (
    <section className={`${styles.section} section-dark`} id="brisbane-for-whom">
      <div className="section-label reveal-up">Who It&apos;s For</div>
      <div className={`${styles.intro} reveal-up`}>
        <h2 className={styles.heading}>
          Built for two types of <em>Brisbane business.</em>
        </h2>
        <p className={styles.body}>
          I focus on accounting practices and trade contractors because
          they&rsquo;re high-ticket service businesses. The deals are large,
          the work compounds, and the math works.
        </p>
      </div>
      <ul className={styles.list}>
        {verticals.map((v) => (
          <li key={v.num} className={`${styles.item} reveal-up`}>
            <span className={styles.itemNum}>{v.num}</span>
            <span className={styles.itemName}>{v.name}</span>
            <span className={styles.itemDesc}>{v.desc}</span>
            <ul className={styles.subList}>
              {v.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={`${styles.note} reveal-up`}>
        Not on this list? Reach out anyway — but only if you&rsquo;re an
        established service business with healthy margins and the patience
        for work that compounds.
      </p>
    </section>
  );
}
