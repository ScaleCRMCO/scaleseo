import styles from "./AboutSections.module.css";

export default function WorkSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.label} reveal-up`}>The Work · 02</div>

      <h2 className={`${styles.headline} reveal-up`}>
        A few clients. Two countries. <em>One pair of hands.</em>
      </h2>

      <div className={`${styles.body} reveal-up`}>
        <p>
          I run a small roster of clients at a time, split between Canada and
          Australia. Each one gets the same thing: me, doing the work. Not a
          junior. Not an offshore team. Not a project manager forwarding
          emails.
        </p>
        <p>A typical month with me looks like this:</p>
        <ul>
          <li>A detailed audit early on — site, rankings, competitors, the gaps</li>
          <li>On-page work, technical fixes, content strategy, local SEO setup</li>
          <li>Earned backlinks from real publications in your industry</li>
          <li>Monthly strategy calls where we look at the data together</li>
          <li>Reporting in plain English — what moved, what didn&apos;t, what&apos;s next</li>
        </ul>
        <p>
          I focus on accounting practices and trade contractors specifically
          because they&apos;re &ldquo;big-ticket&rdquo; businesses. Three good
          leads a month means more for them than three hundred bad leads means
          for most. The work compounds. The deals are large. The math works.
        </p>
      </div>
    </section>
  );
}
