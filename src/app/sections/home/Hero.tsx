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
        <h1 className={styles.h1}>Independent SEO Consultancy in Calgary</h1>
        <div className={styles.topBottom}>
          <TrustindexWidget id="6c14fb6849673601c4969fa538a" className={styles.reviews} />
          <Link href="/contact" className={`${styles.box} ${styles.boxNavy}`}>
            <Corner />
            <span>Start a Project →</span>
          </Link>
        </div>
      </div>

      {/* Intro: large statement, label bottom-left, About button bottom-right */}
      <section className={styles.introSection}>
        <div className={styles.statement}>
          <p>
            Scale SEO is an independent SEO consultancy based in Calgary,
            Alberta, helping accounting firms, professional service businesses,
            and B2B companies improve their visibility on Google and attract
            qualified enquiries.
          </p>
          <p>
            Founded in 2025, Scale SEO provides search engine optimization,
            website development, Google Ads management, and AI search
            optimization. Each engagement combines practical strategy, hands-on
            implementation, and ongoing improvements focused on long-term
            organic growth.
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
