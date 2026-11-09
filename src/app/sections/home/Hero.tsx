import Link from "next/link";
import TrustindexWidget from "../../components/TrustindexWidget";
import styles from "./Hero.module.css";
import ClientLogos from "../../components/ClientLogos";
import HeroMark from "./HeroMark";

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Hero: big H1 over a large light-blue logo mark; reviews bottom-left,
          contact button bottom-right */}
      <div className={styles.darkHero} data-nav="dark">
      <div className={styles.top}>
        <HeroMark className={styles.mark} />
        <h1 className={styles.h1}>
          <span className={styles.h1Line}>SEO Company in</span>{" "}
          <span className={styles.h1Line}>Calgary, Alberta</span>
        </h1>
        <p className={styles.heroSub}>Good SEO should pay for itself. That&rsquo;s what we work toward.</p>
        <div className={styles.topBottom}>
          <div className={styles.leftGroup}>
            <TrustindexWidget id="9776d3285310379d5646ecc7f73" className={styles.reviews} />
            <div className={styles.metric}>
              <span className={styles.metricValue}>$1M+</span>
              <span className={styles.metricLabel}>in Client Revenue Generated</span>
            </div>
            <a
              href="https://agencies.semrush.com/scale-seo/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badge}
              aria-label="Scale SEO — Semrush Certified Agency Partner"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner badge" width={64} height={64} />
            </a>
          </div>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.box} ${styles.boxBlue}`}
          >
            <Corner />
            <span>Book A Strategy Call →</span>
          </a>
        </div>
      </div>

      {/* Client logo strip (shared component), part of the navy hero */}
      <ClientLogos dark />
      </div>

      {/* Intro: large statement, label bottom-left, About button bottom-right */}
      <section className={styles.introSection}>
        <div className={styles.statement}>
          <p>
            Scale SEO is an independent SEO and digital marketing consultancy
            based in Calgary, Alberta. We help accounting firms, professional
            service businesses, and B2B companies improve their visibility on
            Google, attract qualified enquiries, and grow their business.
          </p>
          <p>
            Founded in 2025 by Corbin Jensen, Scale SEO provides search engine
            optimization, website development, Google Ads management, and AI
            search optimization. Every engagement combines practical strategy,
            hands-on implementation, and ongoing improvements focused on
            long-term results.
          </p>
        </div>
      </section>
    </header>
  );
}
