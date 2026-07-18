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

          {/* ====== SECTION 01 — STORY ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>The Story · 01</div>
            <h2 className={`${styles.headline} reveal-up`}>
              It took a lot of <em>wrong turns</em> to get here.
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                I tried to be an entrepreneur for most of last year. The first version was helping local businesses with their Google reviews. Then I pivoted into web design. Then again into something else. Each road ended somewhere I didn&apos;t want to be.
              </p>
              <p>
                The breakthrough came when I stopped trying to sell what I thought people wanted and started solving what they actually needed: visibility. People searching for them, finding them, calling them. That&apos;s when SEO clicked.
              </p>
              <p>
                My first real client was a concrete contractor in Calgary, the one that changed everything. In sixty days the work generated over $250,000 in revenue.
              </p>
              <p>That&apos;s when I stopped pivoting.</p>
            </div>
          </article>

          {/* ====== SECTION 02 — WORK with pull quote ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>The Work · 02</div>
            <h2 className={`${styles.headline} reveal-up`}>
              A small roster. <em>One pair of hands.</em>
            </h2>
            <div className={`${styles.body} reveal-up`}>
              <p>
                I work with a small number of established businesses at a time, based mostly across Canada, with a few long-standing clients internationally. Every one of them gets the same thing: me, doing the work. Not a junior. Not an offshore team. Not a project manager forwarding emails.
              </p>
              <p>
                A typical month: a detailed audit early on, then on-page work, technical fixes, content strategy, local SEO setup, and earned backlinks from real publications. Monthly strategy calls. Reporting in plain English.
              </p>
            </div>

            <blockquote className={`${styles.pullquote} reveal-up`}>
              &ldquo;Three good leads a month means more for them than three hundred bad leads means for most.&rdquo;
            </blockquote>

            <div className={`${styles.body} reveal-up`}>
              <p>
                I focus on accounting practices and other high-margin service businesses because the deals are large and the work compounds. Good SEO on a $50 job doesn&rsquo;t move the needle. Good SEO on a $5,000 client does.
              </p>
            </div>
          </article>

          {/* ====== SECTION 03 — PRINCIPLES (numbered list) ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>The Principles · 03</div>
            <h2 className={`${styles.headline} reveal-up`}>
              Most of what gives SEO a bad name, I <em>won&apos;t do.</em>
            </h2>

            <ol className={`${styles.principles} reveal-up`}>
              <li>
                <span className={styles.pNum}>01</span>
                <span className={styles.pText}>
                  <strong>No 40-person agencies pretending to be specialists.</strong> You&apos;ll work directly with me — every email, every call, every audit.
                </span>
              </li>
              <li>
                <span className={styles.pNum}>02</span>
                <span className={styles.pText}>
                  <strong>No volume play.</strong> I keep my roster small. If you need someone who&apos;ll squeeze you into slot #47, that&apos;s not me.
                </span>
              </li>
              <li>
                <span className={styles.pNum}>03</span>
                <span className={styles.pText}>
                  <strong>No black-hat shortcuts.</strong> No PBNs, no link farms, no schemes that age into a penalty. Work I do today should still be working in three years.
                </span>
              </li>
              <li>
                <span className={styles.pNum}>04</span>
                <span className={styles.pText}>
                  <strong>No vanity reports.</strong> If your rankings improved but your phone isn&apos;t ringing, the job isn&apos;t done.
                </span>
              </li>
            </ol>
          </article>
        </div>
      </div>

      {/* ====== SECTION 04 — NUMBERS (full bleed, breaks out) ====== */}
      <div className={`${styles.numbersBleed} reveal-up`}>
        <div className={styles.numbersLabel}>The Numbers · 04</div>
        <div className={styles.numbersGrid}>
          <div className={styles.numItem}>
            <div className={styles.numValue}>$<span className={styles.numAccent}>250K+</span></div>
            <div className={styles.numLabel}>Revenue for one client in 60 days</div>
          </div>
          <div className={styles.numItem}>
            <div className={`${styles.numValue} ${styles.numValueSmall}`}>30 → <span className={styles.numAccent}>14.2</span></div>
            <div className={styles.numLabel}>Avg. search position moved for one client in 6 months</div>
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

      {/* Back into two-column for sections 5 & 6 */}
      <div className={styles.container}>
        <aside className={styles.sidebarSpacer} aria-hidden="true" />

        <div className={styles.content}>

          {/* ====== SECTION 05 — OFF THE CLOCK ====== */}
          <article className={styles.block}>
            <div className={`${styles.label} reveal-up`}>Off The Clock · 05</div>

            <div className={`${styles.locations} reveal-up`}>
              <span className={styles.locA}>Singapore</span>
              <span className={styles.locB}>Tokyo</span>
              <span className={styles.locC}>Brisbane</span>
              <span className={styles.locD}>Kuala Lumpur</span>
              <span className={styles.locE}>Calgary</span>
              <span className={styles.locF}>Vancouver</span>
            </div>

            <h2 className={`${styles.headline} reveal-up`}>
              Born in Canada. <em>Travelling Often.</em> Global Work.
            </h2>

            <div className={`${styles.body} reveal-up`}>
              <p>
                Born and raised in Calgary, Alberta. I developed Scale SEO to bring established companies high value clientele through organic SEO practice.
              </p>
              <p>
                When I&apos;m not working, I&apos;m travelling. Singapore, Japan, and Malaysia have been favourites lately. The fully-remote nature of this business is the whole point.
              </p>
              <p>
                That mobility is also why I&apos;m picky about clients. I work with people who understand that the <em>output</em> matters more than the <em>office hours.</em>
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
