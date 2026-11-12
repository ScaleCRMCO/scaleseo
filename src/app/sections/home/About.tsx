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
            Scale SEO was founded in 2025 by Corbin Jensen to provide businesses
            with a more direct, hands-on approach to search engine optimization.
          </p>
          <p>
            Through his work with accounting firms in Canada and Australia,
            Corbin has developed an understanding of how accounting practices
            compete online and attract different types of clients.
          </p>
          <p>
            From corporate tax and bookkeeping to business advisory and
            fractional CFO services, he works closely with firms to improve their
            websites, strengthen their search visibility, and reach the customers
            they want to work with.
          </p>
          <p>
            Every campaign is managed directly by Corbin, from strategy and
            technical SEO to content development and ongoing optimization.
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
            <p>
              &ldquo;I started Scale SEO because I believe good marketing should
              create real opportunities for the businesses investing in it.
            </p>
            <p>
              For accounting firms, that means more than appearing on Google. It
              means reaching the right clients, building a stronger reputation,
              and developing a reliable source of new business.
            </p>
            <p>
              Our focus is on doing the work properly, communicating clearly, and
              building relationships that last.&rdquo;
            </p>
          </blockquote>
          <div className={styles.signRow}>
            <div className={styles.sign}>
              <Signature className={styles.signature} />
              <span className={styles.signName}>Corbin Jensen</span>
              <span className={styles.signRole}>Founder, Scale SEO</span>
            </div>
            <Link href="/corbin-jensen" className={styles.cta}>
              <svg className={styles.cornerIcon} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>More About Corbin</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
