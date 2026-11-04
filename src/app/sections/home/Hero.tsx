import Link from "next/link";
import TrustindexWidget from "../../components/TrustindexWidget";
import styles from "./Hero.module.css";

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
      <div className={styles.top}>
        <svg className={styles.mark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="183" cy="183" r="164" strokeWidth="36" />
          <path d="M101 139 H224.5 V262" strokeWidth="38" />
        </svg>
        <h1 className={styles.h1}>
          <span className={styles.h1Line}>Independent SEO</span>{" "}
          <span className={styles.h1Line}>Consultancy Located</span>{" "}
          <span className={styles.h1Line}>in Calgary</span>
        </h1>
        <div className={styles.topBottom}>
          <div className={styles.leftGroup}>
            <TrustindexWidget id="cebaa07845048474c13615cd1b2" className={styles.reviews} />
            <div className={styles.metric}>
              <span className={styles.metricValue}>$1M+</span>
              <span className={styles.metricLabel}>in Client Revenue Generated</span>
            </div>
          </div>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.box} ${styles.boxNavy}`}
          >
            <Corner />
            <span>Book A Strategy Call →</span>
          </a>
        </div>
      </div>

      {/* Client logo strip: light grey logos on white, between hero and intro */}
      <div className={styles.logos} aria-label="Selected clients">
        {[
          { src: "/images/client-logo-jensen-cpa.png", alt: "Jensen CPA", h: 32 },
          { src: "/images/client-logo-kinsmen-consulting.png", alt: "Kinsmen Consulting Limited", h: 34 },
          { src: "/images/client-logo-empire-accountants.png", alt: "Empire Accountants", h: 42 },
          { src: "/images/client-logo-msv-plumbing.png", alt: "MSV Plumbing Services", h: 40 },
        ].map((l) => (
          <div key={l.src} className={styles.logoCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.src} alt={l.alt} style={{ height: l.h }} />
          </div>
        ))}
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
        <div className={styles.introBottom}>
          <span className={styles.since}>
            Founder-led
            <br />
            since 2025
          </span>
          <Link href="/about" className={`${styles.box} ${styles.boxNavy}`}>
            <Corner />
            <span>More About Scale SEO →</span>
          </Link>
        </div>
      </section>
    </header>
  );
}
