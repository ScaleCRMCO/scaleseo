import Link from "next/link";
import Image from "next/image";
import Signature from "../../components/Signature";
import styles from "./About.module.css";

// Founder section (Sincro "people" layout): heading top-left, intro left /
// portrait right, then a founder's note signed by Corbin.
export default function About() {
  return (
    <section className={styles.section} id="about">
      <h2 className={styles.headline}>Meet Corbin Jensen, Founder of Scale SEO</h2>

      <div className={styles.grid}>
        <div className={styles.body}>
          <p>
            Scale SEO was founded in 2025 by Corbin Jensen to offer businesses a
            more personal, hands-on approach to search engine optimization.
          </p>
          <p>
            Having worked with clients across Canada and Australia, Corbin
            understands that every business and market requires a different
            approach. We develop strategies around each client&rsquo;s goals,
            competition, and opportunities.
          </p>
          <p>
            Every campaign is managed directly by Corbin, from strategy and
            technical SEO to ongoing website design and development. We work
            closely with every client, building lasting relationships through
            clear communication, personal attention, and a shared focus on
            business growth.
          </p>
        </div>
        <figure className={styles.portrait}>
          <Image
            src="/images/corbin-portrait.webp"
            alt="Corbin Jensen, founder of Scale SEO"
            fill
            sizes="(max-width: 900px) 90vw, 32vw"
            className={styles.portraitImg}
          />
        </figure>
      </div>

      <div className={styles.note}>
        <span className={styles.noteLabel}>A Note From Our Founder</span>
        <div className={styles.noteBody}>
          <blockquote className={styles.quote}>
            &ldquo;I built Scale SEO around a simple principle that good marketing
            should lead to real business growth. Rankings and traffic matter, but
            they&rsquo;re only part of the picture. We focus on attracting the
            right customers, generating meaningful opportunities, and building
            long-term value for the businesses we work with.&rdquo;
          </blockquote>
          <div className={styles.signRow}>
            <div className={styles.sign}>
              <Signature className={styles.signature} />
              <span className={styles.signName}>Corbin Jensen</span>
              <span className={styles.signRole}>Founder, Scale SEO</span>
            </div>
            <Link href="/corbin-jensen" className={styles.cta}>
              <span>More About Corbin</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
