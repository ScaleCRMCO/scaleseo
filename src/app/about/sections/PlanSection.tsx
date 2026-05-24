import styles from "./AboutSections.module.css";

export default function PlanSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.label} reveal-up`}>The Plan · 06</div>

      <h2 className={`${styles.headline} reveal-up`}>
        Solo today. <em>Selective</em> tomorrow.
      </h2>

      <div className={`${styles.body} reveal-up`}>
        <p>
          The current shape — me, a few clients, two countries — works. Next
          year it&apos;ll probably grow, but only in ways I can control. A
          third country, maybe. A vetted SEO specialist alongside me,
          eventually. Never an agency.
        </p>
        <p>
          The goal isn&apos;t to scale headcount. The goal is to be the
          freelancer that established businesses think of first when
          they&apos;re tired of being burned by agencies. The one who answers
          the phone, knows their business, and shows them the numbers that
          actually moved.
        </p>
        <p>
          If that&apos;s the kind of working relationship you&apos;ve been
          looking for, we should talk.
        </p>
      </div>
    </section>
  );
}
