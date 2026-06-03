import styles from "./CaseStudy.module.css";

export default function CaseStudy() {
  return (
    <section className={`${styles.case} section-dark`} id="work">
      <div className="section-label reveal-up">Case Study · 01</div>

      <div className={`${styles.eyebrow} reveal-up`}>
        <h2 className={styles.title}>
          How a concrete contractor went from invisible to{" "}
          <em>booked solid</em> in 90 days.
        </h2>
        <div className={styles.meta}>
          <strong>Kinsmen Consulting</strong>
          <br />
          Calgary, Alberta
          <br />
          Concrete &amp; Construction
          <br />
          Engagement: Ongoing
        </div>
      </div>

      <div className={`${styles.numbers} reveal-up`}>
        <div className={styles.num}>
          <div className={styles.value}>
            $<span className={styles.accent}>250K+</span>
          </div>
          <div className={styles.label}>Revenue Generated</div>
        </div>
        <div className={styles.num}>
          <div className={styles.value}>
            90<span className={styles.accent}>d</span>
          </div>
          <div className={styles.label}>From Launch</div>
        </div>
        <div className={styles.num}>
          <div className={styles.value}>
            #<span className={styles.accent}>1</span>
          </div>
          <div className={styles.label}>ON ONE SERVICE</div>
        </div>
        <div className={styles.num}>
          <div className={styles.value}>
            100<span className={styles.accent}>%</span>
          </div>
          <div className={styles.label}>Organic</div>
        </div>
      </div>

      <blockquote className={`${styles.quote} reveal-up`}>
        "Corbin understood our business from day one. Three months later, we're getting more clients."
        <div className={styles.attr}>
          Kinsmen Consulting&nbsp;&nbsp;·&nbsp;&nbsp;
          <a
            href="https://www.kinsmenconsulting.ca"
            target="_blank"
            rel="noopener"
          >
            kinsmenconsulting.ca →
          </a>
        </div>
      </blockquote>
    </section>
  );
}
