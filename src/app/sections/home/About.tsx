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
               CORBIN JENSEN · EST. CANADA · CA · CORBIN JENSEN · SEO SPECIALIST · CALGARY ·&nbsp;
               </textPath>
              </text>
            </svg>
           <div className={styles.photo}>
              <div className={styles.photoLogo}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                  <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" strokeDasharray="1,3" />
                  <path d="M 50,10 L 54,46 L 90,50 L 54,54 L 50,90 L 46,54 L 10,50 L 46,46 Z" fill="var(--accent)" strokeLinejoin="round" />
                  <path d="M 78,22 L 53,47 M 22,78 L 47,53 M 78,78 L 53,53 M 22,22 L 47,47" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="50" cy="50" r="2.2" fill="var(--bg)" />
                  <line x1="50" y1="2" x2="50" y2="6" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.text} reveal-up`}>
          <div className="section-label" style={{ marginBottom: 40 }}>
            About
          </div>
          <p>
            <p>
             I&rsquo;m a <em>freelancer</em>, not an agency. I work with a small
              roster of established Calgary businesses across trades and professional
              services.
              </p>
          </p>
          <p>
            I learned this craft by doing it. My first major project generated
            over a quarter of a million dollars in revenue for the client in
            sixty days. That&rsquo;s the kind of outcome I look to repeat.
          </p>
          <p>
            If you&rsquo;d rather hire a 40-person agency with a slide deck, I
            respect it. If you&rsquo;d rather work directly with the person
            doing the work — that&rsquo;s me.
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
