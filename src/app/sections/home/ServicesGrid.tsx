"use client";
import { motion } from "motion/react";
import styles from "./ServicesGrid.module.css";

const spring = { type: "spring" as const, stiffness: 100, damping: 15 };

function Pills({ items }: { items: string[] }) {
  return (
    <div className={styles.pillRow}>
      {items.map((item) => (
        <span key={item} className={styles.pill}>
          {item}
        </span>
      ))}
    </div>
  );
}

function CardLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a href={href} className={styles.cardLink} initial="rest" whileHover="hover" animate="rest">
      <span>{label}</span>
      <motion.span
        className={styles.cardLinkArrow}
        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
        transition={spring}
      >
        →
      </motion.span>
    </motion.a>
  );
}

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>
          Four pillars,
          <br />
          one integrated team.
        </h2>
        <p className={styles.introBody}>
          Scale SEO covers everything a growing professional services firm
          needs from a single marketing partner — no outsourcing, no
          hand-offs between specialists.
        </p>
      </div>

      <div className={styles.grid}>
      <div className={`${styles.cell} ${styles.seo}`}>
        <div className={styles.cellHead}>
          <h3 className={styles.cellTitle}>SEO</h3>
          <span className={`index ${styles.cellIndex}`}>01</span>
        </div>
        <p className={styles.cellDesc}>
          Technical audits, local search scaling, and intent-based keyword
          architecture engineered for #1 organic positions.
        </p>

        <Pills items={["Technical SEO", "Local SEO", "Link Building"]} />

        <div className={styles.serpMock} aria-hidden="true">
          <div className={styles.mockDots}>
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
          </div>
          <div className={styles.serpBar}>
            <span className={styles.serpBarIcon}>🔍</span>
            <span className={styles.serpBarText}>
              accounting firm calgary
            </span>
          </div>

          <div className={styles.serpResult}>
            <span className={styles.serpUrl}>
              scaleseo.co <span className={styles.serpUrlPath}>› services › accounting-firms</span>
            </span>
            <span className={styles.serpTitle}>
              Top Calgary Accounting Firms | Ranked #1 on Google
            </span>
            <span className={styles.serpSnippet}>
              Trusted by growing accounting practices across Alberta —
              technical SEO, local scaling, and conversion-focused pages
              built for high-margin B2B search intent.
            </span>
          </div>
        </div>

        <CardLink href="/services/seo" label="SEO Calgary" />
      </div>

      <div className={`${styles.cell} ${styles.ads}`}>
        <div className={styles.cellHead}>
          <h3 className={styles.cellTitle}>Google Ads</h3>
          <span className={`index ${styles.cellIndex}`}>02</span>
        </div>
        <p className={styles.cellDesc}>
          Profitable spend, measured weekly — built for lead quality, not
          vanity clicks.
        </p>

        <Pills items={["Performance Max", "Remarketing", "Landing Pages"]} />

        <CardLink href="/services/google-ads-management" label="Google Ads Management" />

        <div className={styles.dashMock} aria-hidden="true">
          <div className={styles.mockDots}>
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
          </div>
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
      </div>

      <div className={`${styles.cell} ${styles.badge}`}>
        <span className={styles.badgeValue}>200+</span>
        <span className={styles.badgeLabel}>campaigns shipped</span>
      </div>

      <div className={`${styles.cell} ${styles.web}`}>
        <div className={styles.cellHead}>
          <h3 className={styles.cellTitle}>Web Design</h3>
          <span className={`index ${styles.cellIndex}`}>03</span>
        </div>
        <p className={styles.cellDesc}>
          Premium, fast-loading headless builds engineered to convert.
        </p>

        <Pills items={["Landing Pages", "Headless Builds", "CRO"]} />

        <div className={styles.browserMock} aria-hidden="true">
          <div className={styles.mockDots}>
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
            <span className={styles.mockDot} />
          </div>
          <div className={styles.browserScreen}>
            <div className={styles.browserNav} />
            <div className={styles.browserHero}>
              <div className={styles.browserHeroLine} />
              <div className={styles.browserHeroLineShort} />
            </div>
            <div className={styles.browserGrid}>
              <span className={styles.browserBlock} />
              <span className={styles.browserBlock} />
              <span className={styles.browserBlock} />
            </div>
          </div>
        </div>

        <CardLink href="/services/web-development" label="Web Design" />
      </div>

      <div className={`${styles.cell} ${styles.ai}`}>
        <div className={styles.cellHead}>
          <h3 className={styles.cellTitle}>AI / Agentic Marketing</h3>
          <span className={`index ${styles.cellIndex}`}>04</span>
        </div>
        <p className={styles.cellDesc}>
          Custom AI agents for lead qualification, content ops, and
          always-on client reporting.
        </p>

        <Pills items={["Lead Qualification", "Content Ops", "Reporting"]} />

        <div className={styles.chatMock} aria-hidden="true">
          <div className={styles.chatBubbleUser}>
            Which pages should we prioritize for Q3 rankings?
          </div>
          <div className={styles.chatBubbleAi}>
            <span className={styles.chatAiLabel}>Scale SEO Agent</span>
            Based on current search volume and conversion data, prioritize
            /accounting-firms and /google-ads-management — both show
            rising intent with underserved organic coverage.
          </div>
        </div>

        <CardLink href="/services/geo" label="AI Search / GEO" />
      </div>
      </div>
    </section>
  );
}
