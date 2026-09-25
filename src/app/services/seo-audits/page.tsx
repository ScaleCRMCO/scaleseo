import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Audits | Standalone Website & Technical SEO Audits | Scale SEO",
  description:
    "Standalone SEO audits for businesses that want a clear, documented assessment of their website without committing to ongoing monthly SEO. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo-audits" },
};

const coreIncluded = [
  "Full technical website crawl",
  "Google indexing and crawlability review",
  "XML sitemap and robots.txt review",
  "Redirects, broken links and 404 errors",
  "Canonical tag review",
  "Page titles and meta descriptions",
  "Heading structure",
  "Duplicate and thin content issues",
  "Internal linking",
  "Website speed and Core Web Vitals",
  "Mobile usability",
  "Basic keyword and ranking review",
  "Google Search Console review, where access is available",
  "Prioritised list of recommended fixes",
];

const advancedIncluded = [
  "Detailed keyword and ranking analysis",
  "Competitor SEO analysis",
  "Content and keyword gap analysis",
  "Backlink profile review",
  "Website architecture review",
  "Deeper internal linking analysis",
  "Local SEO and Google Business Profile review, where relevant",
  "Identification of high-value SEO opportunities",
  "Prioritised implementation roadmap",
  "45–60 minute strategy call to walk through the findings",
];

export default function SeoAuditsPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Audits",
    description:
      "Standalone SEO audits covering technical health, on-page optimisation, and overall search performance — for businesses that want a clear assessment without committing to ongoing monthly SEO.",
    serviceType: "SEO Audit",
    url: "https://scaleseo.co/services/seo-audits",
    provider: {
      "@type": "ProfessionalService",
      name: "Scale SEO",
      url: "https://scaleseo.co",
      founder: {
        "@type": "Person",
        name: "Corbin Jensen",
        url: "https://scaleseo.co/corbin-jensen",
      },
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      { "@type": "Country", name: "Canada" },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* === HERO — black, matches sitewide dark hero pattern === */}
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO Audits" },
              ]}
            />
          </div>
          <h1 className={styles.title}>
            SEO Audits: Find Out What&rsquo;s{" "}
            <span className={styles.accent}>Holding Your Website Back</span>
          </h1>
          <p className={styles.sub}>
            If your website isn&rsquo;t ranking as well as it should, an SEO
            audit can help uncover why. Scale SEO provides standalone SEO
            audits for businesses that want a clear assessment of their
            website without committing to ongoing monthly SEO.
          </p>
          <div className={styles.heroCtaGroup}>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              <span>Book an SEO Audit</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#tiers" className={styles.heroCtaSecondary}>
              <span>See Audit Options</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* === INTRO — light, rounded === */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introBody}>
            I review the technical health, on-page optimisation and overall
            search performance of your website to identify problems, missed
            opportunities and the changes most likely to make a difference.
          </p>
          <p className={styles.introBody}>
            You&rsquo;ll receive practical recommendations you can take to
            your developer, marketing team, or implement internally.
          </p>
        </div>
      </section>

      {/* === PRICING TIERS — dark, rounded === */}
      <section className={styles.tiers} id="tiers" data-nav-theme="dark">
        <div className={styles.tiersInner}>
          <div className="section-label reveal-up">Choose the Right SEO Audit</div>
          <h2 className={`${styles.tiersHeading} reveal-up`}>
            Two levels of audit, <em>built for where you&rsquo;re at.</em>
          </h2>

          <div className={styles.tierGrid}>
            <div className={`${styles.tierCard} reveal-up`}>
              <div className={styles.tierName}>SEO Audit</div>
              <p className={styles.tierDesc}>
                For small to medium-sized websites that need a clear
                assessment of their SEO health. This audit covers the core
                technical and on-page factors that can affect your
                website&rsquo;s ability to be crawled, indexed and ranked by
                Google.
              </p>
              <div className={styles.tierIncludedLabel}>What&rsquo;s included:</div>
              <ul className={styles.tierList}>
                {coreIncluded.map((item) => (
                  <li key={item} className={styles.tierListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.tierNote}>
                You&rsquo;ll receive a written audit outlining what I found,
                why it matters and what I recommend addressing first.
              </p>
              <div className={styles.tierFooter}>
                <span className={styles.tierPrice}>$700 + GST</span>
                <a
                  href="https://cal.com/corbinjensen-scaleseo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tierCta}
                >
                  <span>Book This Audit</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>

            <div className={`${styles.tierCard} ${styles.tierCardFeatured} reveal-up`}>
              <div className={styles.tierBadge}>Advanced</div>
              <div className={styles.tierName}>Advanced SEO Audit</div>
              <p className={styles.tierDesc}>
                For businesses that want a deeper analysis of their website
                and organic search strategy. The Advanced SEO Audit includes
                everything in the standard audit, along with a broader review
                of your rankings, competitors, backlinks, content and SEO
                opportunities.
              </p>
              <div className={styles.tierIncludedLabel}>
                Everything in the SEO Audit, plus:
              </div>
              <ul className={styles.tierList}>
                {advancedIncluded.map((item) => (
                  <li key={item} className={styles.tierListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.tierNote}>
                Rather than simply identifying technical errors, this audit is
                designed to give you a clearer roadmap for improving your
                overall organic search performance.
              </p>
              <div className={styles.tierFooter}>
                <span className={styles.tierPrice}>$1,500 + GST</span>
                <a
                  href="https://cal.com/corbinjensen-scaleseo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tierCta}
                >
                  <span>Book This Audit</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT HAPPENS AFTER — light, rounded === */}
      <section className={styles.after}>
        <div className={styles.afterInner}>
          <div className="section-label reveal-up">What Happens After the Audit?</div>
          <h2 className={`${styles.afterHeading} reveal-up`}>
            No spreadsheet full of errors, <em>no idea where to start.</em>
          </h2>
          <p className={`${styles.afterBody} reveal-up`}>
            An SEO audit shouldn&rsquo;t leave you with a spreadsheet
            containing hundreds of errors and no idea where to start.
            Recommendations are prioritised based on their potential impact
            and urgency, so you can understand what should be addressed first
            and what can wait.
          </p>
          <p className={`${styles.afterBody} reveal-up`}>
            You can implement the recommendations internally, provide the
            audit to your developer, or work with Scale SEO to implement the
            changes. There is no requirement to sign up for ongoing SEO
            services.
          </p>
        </div>
      </section>

      {/* === STANDALONE VS FREE ASSESSMENT — dark, rounded === */}
      <section className={styles.compare} data-nav-theme="dark">
        <div className={styles.compareInner}>
          <div className="section-label reveal-up">Standalone Audits vs. Free SEO Assessments</div>
          <h2 className={`${styles.compareHeading} reveal-up`}>
            Two different things, <em>built for two different needs.</em>
          </h2>
          <div className={styles.compareGrid}>
            <div className={`${styles.compareCard} reveal-up`}>
              <h3 className={styles.compareCardName}>Free SEO Assessment</h3>
              <p className={styles.compareCardBody}>
                Scale SEO also offers an initial SEO assessment for
                businesses considering ongoing monthly SEO services. These
                assessments provide a high-level look at your current search
                visibility and potential opportunities — included at no cost
                for prospective monthly retainer clients.
              </p>
            </div>
            <div className={`${styles.compareCard} reveal-up`}>
              <h3 className={styles.compareCardName}>Standalone SEO Audit</h3>
              <p className={styles.compareCardBody}>
                A standalone SEO audit is different. It involves a much
                deeper review of your website and provides documented
                findings and recommendations that your business can use
                independently, with no obligation to sign up for ongoing
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA — light, rounded === */}
      <section className={styles.cta}>
        <div className={styles.ctaEyebrow}>
          <span className={styles.dot} />
          Now booking · 1 spot Q3 2026
        </div>
        <h2 className={styles.ctaHeadline}>Not Sure Which Audit You Need?</h2>
        <p className={styles.ctaSub}>
          The right level of audit depends on the size of your website, your
          current SEO performance and what you&rsquo;re trying to accomplish.
          Book a short discovery call and I&rsquo;ll take a look at your
          website, discuss what you&rsquo;re experiencing and recommend the
          appropriate scope.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href="https://cal.com/corbinjensen-scaleseo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Book an SEO Audit</span>
            <span className={styles.arrow}>→</span>
          </a>
          <Link href="/contact" className={styles.ctaButtonSecondary}>
            <span>Send a Message</span>
          </Link>
        </div>
        <p className={styles.relatedNote}>
          Looking for ongoing monthly SEO instead?{" "}
          <a href="/services/seo">See how core SEO works →</a>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
