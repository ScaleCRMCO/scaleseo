import styles from "./AboutSections.module.css";

const principles = [
  {
    num: "01",
    headline: "No 40-person agencies pretending to be specialists.",
    body: "You'll work directly with me, every email, every call, every audit.",
  },
  {
    num: "02",
    headline: "No volume play.",
    body: "I keep my roster small. If you need someone who'll squeeze you into slot #47, that's not me.",
  },
  {
    num: "03",
    headline: "No black-hat shortcuts.",
    body: "No PBNs, no cheap link farms, no schemes that age into a Google penalty. The work I do today should still be working in three years.",
  },
  {
    num: "04",
    headline: "No vanity reports.",
    body: "If your rankings improved but your phone isn't ringing, we haven't done the job. Revenue is the number that matters.",
  },
];

export default function PrinciplesSection() {
  return (
    <section className={`${styles.section} ${styles.dark}`}>
      <div className={`${styles.label} reveal-up`}>The Principles · 03</div>

      <h2 className={`${styles.headline} reveal-up`}>
        What I <em>won&apos;t</em> do is most of what gives SEO a bad name.
      </h2>

      <ul className={`${styles.principles} reveal-up`}>
        {principles.map((p) => (
          <li key={p.num} className={styles.principleItem}>
            <span className={styles.principleNum}>{p.num}</span>
            <div className={styles.principleBody}>
              <strong>{p.headline}</strong> {p.body}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
