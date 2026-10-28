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
              I founded Scale SEO to offer businesses a more personal,
              hands-on approach to search engine optimization.
            </p>
            <p>
              Having worked with clients across Canada and Australia, I&rsquo;ve
              seen how different industries and markets require different
              strategies. I take the time to understand each business before
              deciding where to focus.
            </p>
            <p>
              From the initial strategy to technical implementation and ongoing
              performance analysis, I manage every campaign personally.
              You&rsquo;ll always work directly with the person responsible for
              the work, without account managers or unnecessary handoffs.
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
