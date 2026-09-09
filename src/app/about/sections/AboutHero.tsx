import Breadcrumbs from "../../components/Breadcrumbs";
import Logo from "../../components/Logo";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <header className={styles.hero} data-nav-theme="dark">
      {/* Curtain reveal */}
      <div className={styles.curtain} aria-hidden="true" />

      {/* Organic blurred accent shape — unique to this page */}
      <div className={styles.orb} aria-hidden="true" />

      {/* Rotating badge — enlarged to fill the empty upper-right of the
          hero, positioned independently of the text content column */}
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
              SCALE SEO · CALGARY · FOUNDED 2025 ·&nbsp;
            </textPath>
          </text>
        </svg>
        <Logo className={styles.badgeLogo} />
      </div>

      <div className={styles.content}>
        <div className={styles.crumbsOnDark}>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
        </div>

        <h1 className={styles.title}>
          <span className={styles.line}>
            <span className={styles.lineInner}>About</span>
          </span>
          <span className={styles.line}>
            <span className={styles.lineInner}>
              <span className={styles.italic}>Scale SEO.</span>
            </span>
          </span>
        </h1>

        <p className={styles.sub}>
          Scale SEO was established with a singular, disciplined purpose: to
          provide highly precise, technical search engine optimization for
          corporate entities, accounting firms, and professional service
          practices across Canada.
        </p>
      </div>
    </header>
  );
}
