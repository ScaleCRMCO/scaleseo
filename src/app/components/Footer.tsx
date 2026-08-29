import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Left: crow brand mark */}
        <div className={styles.brandCol}>
          <img
            src="/images/scaleseo-logo.png"
            alt="Scale SEO"
            className={styles.brandMark}
          />
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <div className={styles.colLabel}>Quick Links</div>
          <Link href="/" className={styles.colLink}>Home</Link>
          <Link href="/industries" className={styles.colLink}>Industries</Link>
          <Link href="/results" className={styles.colLink}>Results</Link>
          <Link href="/blog" className={styles.colLink}>Blog</Link>
          <Link href="/about" className={styles.colLink}>About</Link>
          <Link href="/contact" className={styles.colLink}>Contact</Link>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <div className={styles.colLabel}>Services</div>
          <Link href="/services" className={styles.colLink}>All Services</Link>
          <Link href="/services/seo" className={styles.colLink}>SEO</Link>
          <Link href="/services/geo" className={styles.colLink}>GEO (AI Search)</Link>
          <Link href="/services/web-development" className={styles.colLink}>Web Development</Link>
          <Link href="/services/google-ads" className={styles.colLink}>Google Ads</Link>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <div className={styles.colLabel}>Contact</div>
          <a href="tel:+14038751110" className={styles.colLink}>(403) 875-1110</a>
          <a href="mailto:team@scaleseo.co" className={styles.colLink}>team@scaleseo.co</a>
        </div>

        {/* Service Area */}
        <div className={styles.col}>
          <div className={styles.colLabel}>Service Area</div>
          <span className={styles.colText}>Calgary</span>
          <span className={styles.colText}>Alberta · Canada</span>
          <span className={styles.colText}>Remote · Est. 2025</span>
        </div>

        {/* Connect */}
        <div className={styles.col}>
          <div className={styles.colLabel}>Connect</div>
          <Link href="/corbin-jensen" className={styles.colLink}>Corbin Jensen</Link>
          <a href="https://www.linkedin.com/in/corbin-jensen-9a9b77127/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>LinkedIn</a>
          <a href="https://www.instagram.com/scaleseo.co/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Instagram</a>
          <a href="https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Google Business</a>
          <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Clutch</a>
          <a href="mailto:team@scaleseo.co" className={styles.colLink}>Email</a>
          <Link href="/llm-info" className={styles.colLink}>LLM Info</Link>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className={styles.wordmarkLarge} aria-hidden="true">
        <span className={styles.wordmarkText}>
          Scale<em>SEO</em>
        </span>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Scale SEO · Corbin Jensen</div>
        <div className={styles.tagline}>SEO for Calgary · Serving Canada</div>
      </div>
    </footer>
  );
}
