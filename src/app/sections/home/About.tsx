import Link from "next/link";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={`${styles.stamp} reveal-up`}>
          <div className={styles.circleOuter}>
            <svg className={styles.circleText} viewBox="0 0 240 240" aria-hidden="true">
              <defs>
                <path
                  id="aboutCirclePath"
                  d="M 120,120 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
              </defs>
              <text className={styles.circleTextInner}>
                <textPath href="#aboutCirclePath" startOffset="0%">
               SCALE SEO · EST 2025 · CANADA · CORBIN JENSEN · SEO SPECIALIST · REMOTE ·&nbsp;
               </textPath>
              </text>
            </svg>
           <div className={styles.photo}>
              <div className={styles.photoLogo}>
                <img
                  src="/images/scaleseo-logo.png"
                  alt=""
                  className={styles.photoLogoImg}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.text} reveal-up`}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            About
          </div>
          <h2 className={styles.headline}>
            Bespoke SEO Architecture Designed in Calgary
          </h2>
          <p>
            Based in <em>Calgary, Alberta</em>, I deliver remote search
            engine optimization (SEO), web development, and Google Ads
            management for high-tier accounting firms, legal practices, and
            corporate consultancies across Calgary, Toronto, Vancouver, and
            global markets.
          </p>
          <p>
            My methodology removes agency layers to provide direct
            accountability and transparent data. Every architectural
            change, content asset, and search campaign is engineered to
            scale high-intent organic traffic, protect your brand&rsquo;s
            reputation, and drive predictable revenue growth.
          </p>
          <div className={styles.sig}>— Corbin</div>
          <Link href="/about" className={styles.cta}>
            <span>Read the full story</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
