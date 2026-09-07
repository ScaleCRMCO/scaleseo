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
    <section className={styles.grid} id="services">
      <div className={`${styles.cell} ${styles.seo}`}>
        <span className="index">01</span>
        <h3 className={styles.cellTitle}>SEO</h3>
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

        <CardLink href="/services/seo" label="SEO Calgary →" />
      </div>

      <div className={`${styles.cell} ${styles.ads}`}>
        <span className="index">02</span>
        <h3 className={styles.cellTitle}>Google Ads</h3>
        <p className={styles.cellDesc}>
          Profitable spend, measured weekly — built for lead quality, not
          vanity clicks.
        </p>

        <Pills items={["Performance Max", "Remarketing", "Landing Pages"]} />

        <CardLink href="/services/google-ads-management" label="Google Ads Management →" />
      </div>

      <div className={`${styles.cell} ${styles.badge}`}>
        <span className={styles.badgeValue}>200+</span>
        <span className={styles.badgeLabel}>campaigns shipped</span>
      </div>

      <div className={`${styles.cell} ${styles.web}`}>
        <span className="index">03</span>
        <h3 className={styles.cellTitle}>Web Design</h3>
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

        <CardLink href="/services/web-development" label="Web Design →" />
      </div>

      <div className={`${styles.cell} ${styles.ai}`}>
        <span className="index">04</span>
        <h3 className={styles.cellTitle}>AI / Agentic Marketing</h3>
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

        <CardLink href="/services/geo" label="AI Search / GEO →" />
      </div>
    </section>
  );
}
