import Link from "next/link";
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
          <span className={styles.h1Line}>SEO &amp; Google Ads for</span>{" "}
          <span className={styles.h1Line}>Accounting Firms</span>
        </h1>
        <p className={styles.heroSub}>Good SEO should pay for itself. That&rsquo;s what we work toward.</p>
        <div className={styles.topBottom}>
          <div className={styles.leftGroup}>
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
            <a
              href="https://clutch.co/profile/scale-seo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clutchBadge}
              aria-label="Scale SEO reviews on Clutch"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={158} height={30} />
            </a>
          </div>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.box} ${styles.boxBlue}`}
          >
            <Corner />
            <span>Book A Strategy Call</span>
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
            Scale SEO is a Calgary-based SEO and digital marketing company
            specializing in accounting firms. We help practices improve their
            visibility on Google, attract qualified enquiries, and grow their
            most valuable services.
          </p>
          <p>
            Founded in 2025 by Corbin Jensen, Scale SEO combines SEO, Google Ads,
            and website development for CPA firms, tax accountants, and advisory
            practices across Canada and Australia, helping them reach clients
            actively searching for their services.
          </p>
          <p>
            From corporate tax and bookkeeping to fractional CFO and business
            advisory, we build strategies around the clients your firm wants to
            attract.
          </p>
        </div>
      </section>
    </header>
  );
}
