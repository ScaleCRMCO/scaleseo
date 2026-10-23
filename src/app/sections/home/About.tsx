import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={`${styles.text} reveal-up`}>
          <h2 className={styles.headline}>
            SEO Managed Directly by a Calgary SEO Specialist
          </h2>
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
          <Link href="/about" className={styles.cta}>
            <span>More About Scale SEO</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
        <div className={`${styles.stamp} reveal-up`}>
          <figure className={styles.portrait}>
            <Image
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, Calgary SEO specialist and founder of Scale SEO"
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              className={styles.portraitImg}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
