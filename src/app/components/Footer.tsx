import Logo from "./Logo";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
       <div className={styles.top}>
        <nav className={styles.socials}>
          <a href="https://www.linkedin.com/in/corbin-jensen-9a9b77127/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://www.instagram.com/scaleseo.co/" target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
          <a href="https://maps.app.goo.gl/Lbyio2SoqzhDjttT8" target="_blank" rel="noopener noreferrer">
            Google ↗
          </a>
          <a href="mailto:team@scaleseo.co">
            Email ↗
          </a>
        </nav>
      </div>
      <div className={styles.nap}>
        <div className={styles.napCol}>
          <div className={styles.napLabel}>Contact</div>
          <a href="tel:+14038751110" className={styles.napLink}>(403) 875-1110</a>
          <a href="mailto:team@scaleseo.co" className={styles.napLink}>team@scaleseo.co</a>
        </div>
        <div className={styles.napCol}>
          <div className={styles.napLabel}>Service Area</div>
          <div className={styles.napText}>
          Calgary &nbsp;·&nbsp; Alberta &nbsp;·&nbsp; Remote
          </div>
          <div className={styles.napText}>EST. 2025</div>
        </div>
        <div className={styles.napCol}>
          <div className={styles.napLabel}>Find Us On Google</div>
          <a href="https://maps.app.goo.gl/Lbyio2SoqzhDjttT8" target="_blank" rel="noopener noreferrer" className={styles.napLink}>
            View our Google Business Profile ↗
          </a>
        </div>
      </div>

     {/* Large blended wordmark + deer */}
      <div className={styles.wordmarkLarge} aria-hidden="true">
        <img
          src="/images/scaleseo-deer-removedbackground.png"
          alt=""
          className={styles.wordmarkDeer}
        />
        <span className={styles.wordmarkText}>
          Scale<em>SEO</em>
        </span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.tagline}>
          SEO for Calgary &nbsp; Serving Canada
        </div>
      </div>
    </footer>
  );
}
