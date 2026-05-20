import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          Scale<em>SEO</em>
        </div>
        <div className={styles.center}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.right}>
          <a href="mailto:hello@scaleseo.co">team@scaleseo.co</a>
        </div>
      </div>
    </footer>
  );
}
