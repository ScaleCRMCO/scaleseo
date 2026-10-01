import Link from "next/link";
import styles from "./Footer.module.css";

const X_PATH =
  "M 449.996094 418.410156 C 280.851562 643.261719 143.730469 506.144531 368.585938 336.996094 C 143.730469 167.851562 280.851562 30.734375 449.996094 255.585938 C 619.140625 30.734375 756.261719 167.851562 531.410156 336.996094 C 756.261719 506.144531 619.140625 643.261719 449.996094 418.410156 Z";

function LimeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="140 120 620 440" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={X_PATH} fill="var(--highlight)" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer} data-nav-theme="dark">
      {/* Lime glow rising from the bottom-right + film grain */}
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Wordmark — top left */}
        <Link href="/" className={styles.wordmark} aria-label="Scale SEO home">
          <span>Scale</span>
          <span className={styles.wordmarkAccent}>SEO</span>
        </Link>

        {/* Link groups left, X mark right */}
        <div className={styles.middle}>
          <div className={styles.grid}>
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
              <Link href="/services/google-ads-management" className={styles.colLink}>Google Ads</Link>
              <Link href="/services/seo-audits" className={styles.colLink}>SEO Audits</Link>
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
              <a href="https://www.linkedin.com/company/scale-seo/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>LinkedIn</a>
              <a href="https://www.instagram.com/scaleseo.co/" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Instagram</a>
              <a href="https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Google Business</a>
              <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" className={styles.colLink}>Clutch</a>
            </div>
          </div>

          <div className={styles.markWrap} aria-hidden="true">
            <LimeMark className={styles.mark} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.copy}>© 2026 Scale SEO · Corbin Jensen</div>
          <div className={styles.taglineGroup}>
            <Link href="/llm-info" className={styles.llmLink}>LLM Info</Link>
            <span className={styles.tagline}>SEO for Calgary · Serving Canada</span>
          </div>
          {/* Google "Add to Preferred Sources" button */}
          <div google-add-preferred-source-btn="" data-theme="dark" className={styles.preferredSource} />
        </div>
      </div>
    </footer>
  );
}
