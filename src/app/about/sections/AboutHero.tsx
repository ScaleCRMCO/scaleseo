import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <header className={styles.hero}>
      {/* Curtain reveal */}
      <div className={styles.curtain} aria-hidden="true" />

      {/* Corner labels */}
      <div className={`${styles.corner} ${styles.topLeft}`}>
        <span className={styles.dot} />
        Available — 2 spots, Q2 2026
      </div>
      <div className={`${styles.corner} ${styles.topRight}`}>
        About &nbsp;—&nbsp; Index 02
      </div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
      <div className={`${styles.corner} ${styles.bottomRight}`}>
        Est. Canada &nbsp;·&nbsp; 2025
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>About</div>

        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>I&apos;m Corbin.</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              I run <span className={styles.italic}>Scale SEO.</span>
            </span>
          </span>
        </h1>

        <p className={styles.sub}>
          Canadian by birth, Australian by address. I take a few service
          businesses each year and turn search into the channel that actually
          pays them back.
        </p>
      </div>
    </header>
  );
}
