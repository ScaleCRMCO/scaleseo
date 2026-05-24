import styles from "./AboutSections.module.css";

export default function StorySection() {
  return (
    <section className={`${styles.section} ${styles.dark}`}>
      <div className={`${styles.label} reveal-up`}>The Story · 01</div>

      <h2 className={`${styles.headline} reveal-up`}>
        It took a lot of <em>wrong turns</em> to get here.
      </h2>

      <div className={`${styles.body} reveal-up`}>
        <p>
          I tried to be an entrepreneur for most of last year. The first
          version was helping local businesses with their Google reviews. Then
          I pivoted into web design. Then again into something else. Each time
          the road ended somewhere I didn&apos;t want to be.
        </p>
        <p>
          The breakthrough came when I stopped trying to sell what I thought
          people wanted and started solving what they actually needed:
          visibility. People searching for them, finding them, calling them.
          That&apos;s when SEO clicked.
        </p>
        <p>
          My first real client was a plumber in Brisbane. Then an accounting
          firm in the same city. Then a concrete contractor in Calgary — the
          one that changed everything. In sixty days the work I did there
          generated over $250,000 in revenue.
        </p>
        <p>That&apos;s when I stopped pivoting.</p>
      </div>
    </section>
  );
}
