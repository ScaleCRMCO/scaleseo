import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import styles from "./page.module.css";

function MockDots() {
  return (
    <div className={styles.mockDots} aria-hidden="true">
      <span className={styles.mockDot} />
      <span className={styles.mockDot} />
      <span className={styles.mockDot} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "SEO & Web Development Services in Calgary | Scale SEO",
  description:
    "SEO, web development, and AI search optimization for established businesses, based in Calgary and working across Canada and internationally. Handled directly by one specialist.",
  alternates: { canonical: "/services" },
};


export default function ServicesPage() {
  return (
    <main>
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
          </div>
          <h1 className={styles.title}>
            SEO Services in <span className={styles.accent}>Calgary</span>,
            Built for Growth Everywhere.
          </h1>
          <p className={styles.sub}>
            I&rsquo;m based in Calgary, Alberta, and it&rsquo;s where my work
            is most concentrated — but the businesses I work with aren&rsquo;t
            limited to one city. Every service below is built the same way,
            whether the client is down the street or across the country: one
            specialist, doing the work directly.
          </p>
        </div>
      </header>

      <section className={styles.list}>
        <div className={styles.listInner}>
          <div className="section-label reveal-up">What I Do</div>
          <div className={styles.gridShell}>
            <div className={styles.grid}>
              {/* 01 — SEO, with the SERP mockup from the homepage grid */}
              <Link
                href="/services/seo"
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                <div className={styles.itemNum}>01</div>
                <h2 className={styles.itemName}>SEO</h2>
                <p className={styles.itemDesc}>
                  Technical, on-page, and local SEO built to improve real
                  rankings and revenue — not just a checklist of tasks.
                </p>

                <div className={styles.serpMock} aria-hidden="true">
                  <MockDots />
                  <div className={styles.serpBar}>
                    <span className={styles.serpBarIcon}>🔍</span>
                    <span className={styles.serpBarText}>
                      accounting firm calgary
                    </span>
                  </div>
                  <div className={styles.serpResult}>
                    <span className={styles.serpUrl}>
                      scaleseo.co{" "}
                      <span className={styles.serpUrlPath}>
                        › services › accounting-firms
                      </span>
                    </span>
                    <span className={styles.serpTitle}>
                      Top Calgary Accounting Firms | Ranked #1 on Google
                    </span>
                    <span className={styles.serpSnippet}>
                      Trusted by growing accounting practices across
                      Alberta — technical SEO, local scaling, and
                      conversion-focused pages.
                    </span>
                  </div>
                </div>

                <span className={styles.itemLink}>
                  Learn more <span className={styles.itemArrow}>→</span>
                </span>
              </Link>

              {/* 02 — Web Development & Design */}
              <Link
                href="/services/web-development"
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                <div className={styles.itemNum}>02</div>
                <h2 className={styles.itemName}>Web Development &amp; Design</h2>
                <p className={styles.itemDesc}>
                  Fast, clean websites for accounting and professional
                  service businesses — designed and built with SEO in from
                  the start.
                </p>
                <span className={styles.itemLink}>
                  Learn more <span className={styles.itemArrow}>→</span>
                </span>
              </Link>

              {/* 03 — Content Strategy */}
              <Link
                href="/services/seo"
                className={`${styles.item} ${styles.itemLinked} reveal-up`}
              >
                <div className={styles.itemNum}>03</div>
                <h2 className={styles.itemName}>Content Strategy</h2>
                <p className={styles.itemDesc}>
                  Content built around real search intent and buyer
                  questions, not filler — the kind that ranks and actually
                  converts.
                </p>
                <span className={styles.itemLink}>
                  Learn more <span className={styles.itemArrow}>→</span>
                </span>
              </Link>

              {/* 04 — AI Search Optimization (GEO), with the chat mockup */}
              <Link
                href="/services/geo"
                className={`${styles.item} ${styles.itemLinked} ${styles.itemSpaced} reveal-up`}
              >
                <div className={styles.itemTop}>
                  <div className={styles.itemNum}>04</div>
                  <h2 className={styles.itemName}>AI Search Optimization (GEO)</h2>
                  <p className={styles.itemDesc}>
                    Positioning your site so ChatGPT, Perplexity, and
                    Google&rsquo;s AI answers name you when buyers ask.
                  </p>

                  <div className={styles.chatMock} aria-hidden="true">
                    <div className={styles.chatBubbleUser}>
                      Which pages should we prioritize for Q3 rankings?
                    </div>
                    <div className={styles.chatBubbleAi}>
                      <span className={styles.chatAiLabel}>Scale SEO Agent</span>
                      Based on current search volume and conversion data,
                      prioritize /accounting-firms and
                      /google-ads-management — both show rising intent.
                    </div>
                  </div>
                </div>

                <span className={styles.itemLink}>
                  Learn more <span className={styles.itemArrow}>→</span>
                </span>
              </Link>

              {/* 05 — Google Ads (PPC) Management, with the dashboard mockup */}
              <Link
                href="/services/google-ads-management"
                className={`${styles.item} ${styles.itemLinked} ${styles.itemSpaced} reveal-up`}
              >
                <div className={styles.itemTop}>
                  <div className={styles.itemNum}>05</div>
                  <h2 className={styles.itemName}>Google Ads (PPC) Management</h2>
                  <p className={styles.itemDesc}>
                    Profitable Google Ads campaigns for accounting firms
                    and professional service businesses — built and
                    managed directly by me.
                  </p>
                </div>

                <div>
                  <div className={styles.dashMock} aria-hidden="true">
                    <MockDots />
                    <div className={styles.dashStats}>
                      <div className={styles.dashStat}>
                        <span className={styles.dashStatLabel}>Conversions</span>
                        <span className={styles.dashStatValue}>+64%</span>
                      </div>
                      <div className={styles.dashStat}>
                        <span className={styles.dashStatLabel}>Cost / Lead</span>
                        <span className={styles.dashStatValue}>-38%</span>
                      </div>
                    </div>
                    <svg
                      className={styles.dashChart}
                      viewBox="0 0 240 60"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points="0,50 30,45 60,48 90,32 120,36 150,20 180,24 210,10 240,14"
                        stroke="#9a9a9a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.itemLink}>
                    Learn more <span className={styles.itemArrow}>→</span>
                  </span>
                </div>
              </Link>

              {/* 06 — Reporting & Strategy, lime highlight card */}
              <div className={`${styles.item} ${styles.itemHighlight} reveal-up`}>
                <div className={styles.itemNum}>06</div>
                <h2 className={styles.itemName}>Reporting &amp; Strategy</h2>
                <p className={styles.itemDesc}>
                  Monthly calls and plain-English reporting on what moved,
                  what&rsquo;s next, and what it means for leads and
                  revenue.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.industriesNote}>
            Looking for something specific to your industry?{" "}
            <a href="/industries" className={styles.industriesLink}>
              See who I work with →
            </a>
          </p>
        </div>
      </section>

      <section className={styles.cta} data-nav-theme="dark">
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>
          Calgary-based. <span className={styles.accent}>Working everywhere.</span>
        </h2>
        <p className={styles.ctaSub}>
          Tell me about your business and where you&rsquo;re trying to grow —
          I&rsquo;ll tell you honestly whether I&rsquo;m the right fit.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book a call</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
      </section>
      <RevealOnScroll />
    </main>
  );
}
