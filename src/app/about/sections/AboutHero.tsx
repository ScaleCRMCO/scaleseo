import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <header className={styles.hero}>
      {/* Curtain reveal */}
      <div className={styles.curtain} aria-hidden="true" />

      {/* Organic blurred accent shape — unique to this page */}
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>About Corbin Jensen</p>

          {/* Rotating badge — small brand signature, distinct from homepage hero */}
          <div className={styles.badge} aria-hidden="true">
            <svg className={styles.badgeRing} viewBox="0 0 160 160">
              <defs>
                <path
                  id="aboutHeroRingPath"
                  d="M 80,80 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"
                />
              </defs>
              <text className={styles.badgeRingText}>
                <textPath href="#aboutHeroRingPath" startOffset="0%">
                  SEO SPECIALIST · CALGARY · FREELANCE ·&nbsp;
                </textPath>
              </text>
            </svg>
            <span className={styles.badgeDot} />
          </div>
        </div>

        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>I&rsquo;m Corbin —</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              I run <span className={styles.italic}>Scale SEO.</span>
            </span>
          </span>
        </h1>

        <p className={styles.sub}>
          An independent SEO specialist based in Calgary, working with a
          small number of established businesses across Canada &mdash; and a
          few internationally. No agency, no account managers. Just the work.
        </p>
      </div>

      <div className={styles.scrollCue}>
        <span className={styles.scrollLabel}>Scroll to read the story</span>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </header>
  );
}
