import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={`${styles.text} reveal-up`}>
          <h2 className={styles.headline}>
            Hi, I&rsquo;m Corbin. Your SEO Specialist.
          </h2>
          <div className={styles.body}>
            <p>
              I&rsquo;m the founder of Scale SEO, an independent SEO
              consultancy based in Calgary, working with businesses across
              Canada and internationally.
            </p>
            <p>
              I value long-term client relationships, honest communication,
              and doing work that makes a measurable difference. From SEO
              strategy to technical improvements and content, I manage every
              campaign personally.
            </p>
            <p>
              No account managers, unnecessary complexity, or agency fluff.
              Just straightforward SEO focused on helping your business grow.
            </p>
          </div>
          <Link href="/corbin-jensen" className={styles.cta}>
            <span>More About Me</span>
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
