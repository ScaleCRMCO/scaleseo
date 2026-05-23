import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Logo size={32} />
          <span>
            Scale<em>SEO</em>
          </span>
        </div>
        <div className={styles.center}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.right}>
          <a href="mailto:team@scaleseo.co">team@scaleseo.co</a>
        </div>
      </div>
    </footer>
  );
}
