import Link from "next/link";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={`${styles.section} section-dark`} id="about" data-nav-theme="dark">
      <div className={styles.grid}>
        <div className={`${styles.text} reveal-up`}>
          <h2 className={styles.headline}>
            SEO Managed Directly by a Calgary SEO Specialist
          </h2>
          <p className={styles.lead}>
            Scale SEO is an independent SEO practice based in{" "}
            <em>Calgary, Alberta</em>, helping professional service and B2B
            businesses improve their organic search visibility in Canada and
            beyond.
          </p>
          <div className={styles.body}>
            <p>
              That includes keyword research, technical SEO, content strategy,
              on-page optimization, internal linking, local SEO, reporting, and
              the website improvements needed to support organic growth.
            </p>
            <p>
              There are no layers between your business and the person doing
              the work. If I identify a technical problem, content opportunity,
              weak service page, or website issue holding your rankings back, I
              can work directly on fixing it rather than simply adding it to a
              report.
            </p>
          </div>
          <div className={styles.sig}>— Corbin</div>
          <Link href="/about" className={styles.cta}>
            <span>More About Scale SEO</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
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
                  src="/images/logo-mark.svg"
                  alt=""
                  className={styles.photoLogoImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
