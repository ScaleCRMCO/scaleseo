import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        <div className={`${styles.text} reveal-up`}>
          <h2 className={styles.headline}>
            Hi, I&rsquo;m Corbin. Your Calgary SEO Specialist.
          </h2>
          <div className={styles.body}>
            <p>
              I&rsquo;m the founder of Scale SEO, an independent SEO
              consultancy based in Calgary, Alberta, working with businesses
              across Canada and internationally.
            </p>
            <p>
              I work directly with professional service and B2B businesses to
              improve their search visibility through technical SEO, content
              optimization, and website development.
            </p>
            <p>
              I manage every campaign personally, from the initial strategy to
              implementation and ongoing performance analysis. That means you
              work directly with the specialist responsible for your results.
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
