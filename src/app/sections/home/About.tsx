import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={`${styles.stamp} reveal-up`}>
          <div className={styles.circle}>
            <div className={styles.initials}>CJ</div>
            <div>
              Corbin Jensen
              <br />
              Est. Brisbane · AU
            </div>
          </div>
        </div>

        <div className={`${styles.text} reveal-up`}>
          <div className="section-label" style={{ marginBottom: 40 }}>
            About
          </div>
          <p>
            I&rsquo;m a <em>freelancer</em>, not an agency. I work with four
            clients at a time — two in Australia, two in Canada — across trades
            and professional services.
          </p>
          <p>
            I learned this craft by doing it. My first major client was Kinsmen Consulting Ltd
            in Canada. In sixty days the work I did there
            generated over a quarter of a million dollars in revenue.
            That&rsquo;s the kind of outcome I look to repeat.
          </p>
          <p>
            If you&rsquo;d rather hire a 40-person agency with a slide deck, I
            respect it. If you&rsquo;d rather work directly with the person
            doing the work — that&rsquo;s me.
          </p>
          <div className={styles.sig}>— Corbin</div>
        </div>
      </div>
    </section>
  );
}
