import styles from "./AboutSections.module.css";

export default function OffTheClockSection() {
  return (
    <section className={`${styles.section} ${styles.dark}`}>
      <div className={`${styles.label} reveal-up`}>Off The Clock · 05</div>

      <h2 className={`${styles.headline} reveal-up`}>
        Born in Calgary. <em>Currently in Brisbane.</em> Often somewhere else.
      </h2>

      <div className={`${styles.body} reveal-up`}>
        <p>
          I was born and raised in Calgary, Alberta. I&apos;ve been living in
          Australia for the last three years. The two-country thing
          isn&apos;t a marketing line — it&apos;s just where my life is.
        </p>
        <p>
          When I&apos;m not working, I&apos;m usually travelling. Singapore,
          Japan, and Malaysia have been favourites lately. The fully-remote
          nature of this business is the whole point. I can run a client
          meeting from Tokyo at 7am, do keyword research from a café in Kuala
          Lumpur, and send a report from Brisbane that night.
        </p>
        <p>
          That mobility is also why I&apos;m picky about clients. I work with
          people who understand that the <em>output</em> matters more than the{" "}
          <em>office hours.</em>
        </p>
      </div>
    </section>
  );
}
