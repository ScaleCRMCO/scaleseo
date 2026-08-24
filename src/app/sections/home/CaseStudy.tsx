import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";
import styles from "./CaseStudy.module.css";

const cases = caseStudies.filter((c) => c.country === "Canada");

export default function CaseStudy() {
  return (
    <section className={`${styles.case} section-dark`} id="work">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className="section-label reveal-up">Featured Work</div>
            <h2 className={`${styles.heading} reveal-up`}>
              Real clients,<em> real revenue.</em>
            </h2>
          </div>
          <span className={`${styles.proofLine} reveal-up`}>
            $250K+ generated for clients
          </span>
        </div>

        <div className={styles.grid}>
          {cases.map((c, i) => (
            <a
              key={c.index}
              href={c.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={`${styles.tile} reveal-left`}
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={c.image}
                  alt={`${c.client} website`}
                  fill
                  className={styles.image}
                  priority={i === 0}
                  unoptimized
                />
              </div>
              <div className={styles.tileFooter}>
                <div>
                  <h3 className={styles.client}>{c.client}</h3>
                  <p className={styles.subhead}>{c.subhead}</p>
                  <p className={styles.location}>
                    {c.location} &middot; {c.industry}
                  </p>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>{c.metric}</div>
                  <div className={styles.metricLabel}>{c.metricLabel}</div>
                </div>
              </div>
              <p className={styles.description}>{c.description}</p>
              <span className={styles.visit}>{c.urlLabel} →</span>
            </a>
          ))}
        </div>

        <Link href="/results" className={`${styles.moreLink} reveal-up`}>
          <span>See more client results</span>
          <span className={styles.moreArrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
