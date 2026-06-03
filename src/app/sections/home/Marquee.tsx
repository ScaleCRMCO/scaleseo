import styles from "./Marquee.module.css";

const items = [
  "On-page SEO",
  "Local SEO",
  "Google Business Profile",
  "AI Search Optimisation",
  "Monthly Reports",
  "Technical SEO",
  "Content Strategy",
];

export default function Marquee() {
  // duplicate the list so the scroll loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {loop.map((item, i) => (
          <span key={i} className={styles.item}>
            <span>{item}</span>
            <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
