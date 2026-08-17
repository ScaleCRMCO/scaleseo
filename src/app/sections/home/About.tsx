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
          <div className="section-label" style={{ marginBottom: 40 }}>
            About
          </div>
          <p>
            Based in <em>Calgary, Alberta</em>, I operate as an independent
            search engine optimization specialist and digital growth
            partner for elite professional service firms. I deliver remote
            SEO architecture, conversion-focused web development, and
            precision Google Ads management for high-tier accounting firms,
            legal practices, and corporate consultancies across Toronto,
            Vancouver, Edmonton, and global markets.
          </p>
          <p>
            My methodology is rooted in absolute transparency and
            measurable performance. I eliminate the overhead, communication
            gaps, and rotating junior staff characteristic of traditional
            marketing agencies. Instead, clients receive direct, hands-on
            advisory and rigorous data strategy designed exclusively to
            scale high-intent organic traffic, capture market share, and
            convert visitors into qualified lead pipelines.
          </p>
          <p>
            Every architectural change, content asset, and search campaign
            is engineered to protect your brand&rsquo;s reputation while
            driving predictable, high-margin revenue growth.
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
