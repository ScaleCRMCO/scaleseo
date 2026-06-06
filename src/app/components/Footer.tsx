import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo size={32} />
          <span className={styles.wordmark}>
            Scale<em>SEO</em>
          </span>
        </div>

        <nav className={styles.socials}>
          <a href="https://www.linkedin.com/in/corbin-jensen-9a9b77127/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://www.instagram.com/scaleseo.co/" target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
          <a href="https://share.google/zj7YeUAnnpFse6phm" target="_blank" rel="noopener noreferrer">
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
          <a href="tel:+61492251241" className={styles.napLink}>0492 251 241</a>
          <a href="mailto:team@scaleseo.co" className={styles.napLink}>team@scaleseo.co</a>
        </div>

        <div className={styles.napCol}>
          <div className={styles.napLabel}>Service Area</div>
          <div className={styles.napText}>Brisbane &nbsp;·&nbsp; Calgary &nbsp;·&nbsp; Remote</div>
          <div className={styles.napText}>Australia &amp; Canada</div>
        </div>

        <div className={styles.napCol}>
          <div className={styles.napLabel}>Find Us On Google</div>
          <a href="https://share.google/zj7YeUAnnpFse6phm" target="_blank" rel="noopener noreferrer" className={styles.napLink}>
            View our Google Business Profile ↗
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.tagline}>
          SEO for Brisbane &amp; Calgary &nbsp;·&nbsp; Serving AU &amp; Canada
        </div>
      </div>
    </footer>
  );
}
