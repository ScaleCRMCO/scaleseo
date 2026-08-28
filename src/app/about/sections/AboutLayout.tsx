import Image from "next/image";
import Link from "next/link";
import styles from "./AboutLayout.module.css";

export default function AboutLayout() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* ============ LEFT: STICKY SIDEBAR ============ */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarInner}>

            {/* Portrait */}
            <div className={styles.portrait}>
              {/* When you have a photo, replace this with: */}
              {/* <img src="/images/corbin-about.jpg" alt="Corbin Jensen" className={styles.portraitImg} /> */}
              <img
                src="/images/corbin-about.jpg"
                alt="Corbin Jensen"
                className={styles.portraitImg}
              />
            </div>

            {/* Metadata */}
            <div className={styles.meta}>
              <div className={styles.metaName}>Corbin Jensen</div>
              <div className={styles.metaRole}>SEO Specialist · Freelance</div>
              <div className={styles.metaRoute}>Calgary, Canada · Worldwide</div>
              <div className={styles.metaCoords}>51.04°N / 114.07°W</div>
              <Link href="/corbin-jensen" className={styles.metaBioLink}>
                View full bio →
              </Link>
            </div>

            {/* Currently widget */}
            <div className={styles.currently}>
              <div className={styles.currentlyLabel}>Currently</div>
              <ul className={styles.currentlyList}>
                <li>
                  <span className={styles.cKey}>Working on</span>
                  <span className={styles.cVal}>Local SEO for an accounting firm in Calgary</span>
                </li>
                <li>
                  <span className={styles.cKey}>Based in</span>
                  <span className={styles.cVal}>Calgary, Alberta — serving Canada &amp; beyond</span>
                </li>
                <li>
                  <span className={styles.cKey}>Developing</span>
                  <span className={styles.cVal}>Google Ads</span>
                </li>
                <li>
                  <span className={styles.cKey}>Reading</span>
                  <span className={styles.cVal}>AI Overview</span>
                </li>
                <li>
                  <span className={styles.cKey}>Listening</span>
                  <span className={styles.cVal}>Bonobo — Fragments</span>
                </li>
              </ul>
            </div>

          </div>
        </aside>

        {/* ============ RIGHT: SCROLLING CONTENT ============ */}
        <div className={styles.content}>

          {/* ====== SECTION 01 — THE WELCOME ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Welcome · 01</div>
            <h2 className={`${styles.headline} reveal-up`}>
              A place of <em>intentional search strategy.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                Scale SEO was born out of a clear realization: the
                traditional digital marketing model is fundamentally broken
                for high-value professional service practices. High-volume
                agencies rely on layers of account managers, standardized
                templates, and outsourced execution — methods that fail to
                meet the rigorous compliance, accuracy, and depth required
                by institutional firms.
              </p>
              <p>
                In May 2025, I established Scale SEO to pioneer a direct,
                non-agency alternative. Built on a model of absolute
                transparency and elite technical alignment, I eliminate the
                agency fluff to give firms direct, unfiltered access to
                senior search expertise.
              </p>
            </div>
          </article>

          {/* ====== SECTION 02 — OUR EVOLUTION ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Our Evolution · 02</div>
            <h2 className={`${styles.headline} reveal-up`}>
              From cross-border roots{" "}
              <em>to a Canadian practice.</em>
            </h2>

            <div className={`${styles.values} reveal-up`}>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>Cross-Border Origins</h3>
                <p className={styles.valueBody}>
                  My foundation was laid in Australia, where I first
                  deployed this specialized, direct-to-founder search
                  framework for highly regulated corporate environments.
                  Navigating competitive, multi-national markets proved
                  that sustainable search visibility relies on deep
                  technical equity and institutional trust rather than
                  superficial marketing trends. This international exposure
                  refined my methodology into a bulletproof, globally
                  proven system.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>Establishing the Canadian Practice</h3>
                <p className={styles.valueBody}>
                  Today, Scale SEO is permanently anchored in Canada,
                  delivering premium, multi-channel search assets for
                  accounting firms, CPA practices, and top-tier professional
                  services nationwide. By focusing strictly on the Canadian
                  landscape, I combine international algorithmic expertise
                  with deep localized market intelligence.
                </p>
              </div>
              <div className={styles.valueItem}>
                <h3 className={styles.valueTitle}>The Elite Boutique Model</h3>
                <p className={styles.valueBody}>
                  I intentionally remain a lean, specialist search boutique.
                  I don&rsquo;t measure success by the volume of accounts I
                  sign, but by the compounding revenue and market share I
                  secure for a select roster of clients. By maintaining a
                  direct, freelancer-style agility backed by corporate-grade
                  technical execution, your firm&rsquo;s digital enterprise
                  is handled with absolute care, precision, and{" "}
                  <Link href="/corbin-jensen" className={styles.inlineLink}>
                    senior oversight
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ====== SECTION 03 — NUMBERS (full bleed, breaks out) ====== */}
      <div className={`${styles.numbersBleed} reveal-up`}>
        <div className={styles.numbersLabel}>The Numbers · 03</div>
        <div className={styles.numbersGrid}>
          <div className={styles.numItem}>
            <div className={styles.numValue}>$<span className={styles.numAccent}>250K+</span></div>
            <div className={styles.numLabel}>Revenue for one client in 60 days</div>
          </div>
          <div className={styles.numItem}>
            <div className={`${styles.numValue} ${styles.numValueSmall}`}>30 → <span className={styles.numAccent}>Top 10</span></div>
            <div className={styles.numLabel}>Search ranking for target keywords, one client in 6 months</div>
          </div>
          <div className={styles.numItem}>
            <div className={styles.numValue}>1<span className={styles.numAccent}>yr+</span></div>
            <div className={styles.numLabel}>Self-taught, in the work</div>
          </div>
          <div className={styles.numItem}>
            <div className={styles.numValue}>100<span className={styles.numAccent}>%</span></div>
            <div className={styles.numLabel}>Direct-to-freelancer · no managers</div>
          </div>
        </div>
        <div className={styles.numbersCaption}>
          Numbers I&apos;m proud of. Numbers I plan to outgrow.
        </div>
      </div>
    </section>
  );
}
