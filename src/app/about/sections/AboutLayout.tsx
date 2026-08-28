import Image from "next/image";
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

          {/* ====== SECTION 01 — PURPOSE ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>The Purpose · 01</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Built for precision, <em>not volume.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                Scale SEO was established with a singular, disciplined
                purpose: to provide highly precise, technical search engine
                optimization for corporate entities, accounting firms, and
                professional service practices across Canada.
              </p>
              <p>
                It was never engineered to operate as a high-volume digital
                agency. My focus has always been complex algorithmic
                alignment, senior-level technical oversight, and
                sustainable, long-term client visibility. The architecture
                of Scale SEO follows a deliberate and disciplined
                operational model, prioritising technical credibility,
                transparency, and data accuracy over rapid scale.
              </p>
            </div>
          </article>

          {/* ====== SECTION 02 — PHASE ONE ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Phase One · 02</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Architectural <em>Foundations.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                The initial phase focuses on absolute infrastructure
                clarity. I define and diagnose exactly how your digital
                asset communicates with search engines and Large Language
                Models (LLMs). I run deep technical audits, resolving
                legacy indexing errors, site latency issues, and hidden
                crawl blockages while deploying robust schema markup. This
                phase builds a highly credible, technically immaculate
                foundation that satisfies strict search guidelines from
                inception.
              </p>
            </div>
          </article>

          {/* ====== SECTION 03 — PHASE TWO ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Phase Two · 03</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Intent Alignment{" "}
              <em>&amp; Market Entry.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                Rather than executing generic, volume-based keyword
                campaigns, I target high-value corporate intent. This phase
                involves a deep re-engineering of your on-page structure and
                internal linking around the precise terms your
                institutional buyers actually search. I prioritize the
                production of high-quality technical insights and
                structural compliance patterns, ensuring early visibility
                traction is achieved through topical authority rather than
                superficial marketing tactics.
              </p>
            </div>
          </article>

          {/* ====== SECTION 04 — PHASE THREE ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Phase Three · 04</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Local Presence &{" "}
              <em>Regional Consistency.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                As organic authority stabilizes, the strategy expands to
                secure multi-market local footprints. For firms operating
                across multiple Canadian financial hubs — such as Calgary,
                Toronto, and Vancouver — I develop distinct, authentic
                regional landing pages and optimized Google Business
                Profiles. This disciplined local scaling captures localized
                map pack placement and ensures consistent search
                performance across all target cities without diluting core
                brand authority.
              </p>
            </div>
          </article>

          {/* ====== SECTION 05 — PHASE FOUR ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Phase Four · 05</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Compounding Results{" "}
              <em>&amp; Revenue Mapping.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                With technical and local frameworks embedded, organic
                traffic shifts from an unstable funnel into a predictable
                pipeline. Superficial traffic screenshots are replaced with
                plain-English, revenue-aligned diagnostic reports tracking
                corporate acquisition data and incoming leads. Growth
                becomes highly selective and compounding, permanently
                breaking seasonal revenue dips and securing consistent
                inbound client appointments.
              </p>
            </div>
          </article>

          {/* ====== SECTION 06 — THE RESULT ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>The Result · 06</div>
            <h2 className={`${styles.headline} reveal-up`}>
              A resilient, <em>specialist search boutique.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                Scale SEO functions as a resilient, specialist search
                boutique built to deliver institutional authority for firms
                handling high-value files. By removing account managers,
                outsourced execution layers, and lock-in contracts, every
                diagnostic audit and content pipeline is executed directly
                by me, the lead specialist.
              </p>
              <p>
                The outcome is a highly sustainable, transparent search
                asset engineered to protect and grow your market position
                multi-year.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* ====== SECTION 07 — NUMBERS (full bleed, breaks out) ====== */}
      <div className={`${styles.numbersBleed} reveal-up`}>
        <div className={styles.numbersLabel}>The Numbers · 07</div>
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
