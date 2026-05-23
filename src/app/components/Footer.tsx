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
          <a href="mailto:hello@scaleseo.co">
            Email ↗
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.tagline}>
          Built in Brisbane &nbsp;·&nbsp; Serving Australia &amp; Canada
        </div>
      </div>
    </footer>
  );
}
