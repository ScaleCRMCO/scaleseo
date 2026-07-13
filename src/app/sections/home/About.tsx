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
            I&rsquo;m a <em>freelancer</em>, not an agency. I work with a small
            roster of established businesses across Canada — accounting firms
            first, and a handful of other industries where I know I can move
            the needle.
          </p>
          <p>
            I learned this by doing it. My first major project generated over
            a quarter of a million dollars in revenue for the client in sixty
            days. That&rsquo;s the kind of outcome I look to repeat.
          </p>
          <p>
            If you&rsquo;d rather hire a large agency with a slide deck and a
            rotating cast of juniors, I respect it. If you&rsquo;d rather work
            directly with the person doing the work — that&rsquo;s me.
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
