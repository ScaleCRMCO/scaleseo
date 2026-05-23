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
          
            href="https://www.linkedin.com/in/corbin-jensen-9a9b77127/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          
            href="https://www.instagram.com/scaleseo.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a href="mailto:hello@scaleseo.co">Email ↗</a>
        </nav>
      </di
