import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Section/card system shared with the /services hub so all service pages match.
import hub from "../page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Audits | Standalone Website & Technical SEO Audits | Scale SEO",
  description:
    "Standalone SEO audits for businesses that want a clear, documented assessment of their website without committing to ongoing monthly SEO. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo-audits" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const questions = [
  "What’s limiting your organic performance?",
  "Where are the strongest opportunities?",
  "What should you do first?",
];

const coreIncluded = [
  "Full technical website crawl",
  "Google indexing and crawlability review",
  "XML sitemap and robots.txt review",
  "Redirects, broken links, and 404 errors",
  "Canonical tag review",
  "Page titles and meta descriptions",
  "Heading structure",
  "Duplicate and thin content issues",
  "Internal linking",
  "Website speed and Core Web Vitals",
  "Mobile usability",
  "Basic keyword and ranking review",
  "Google Search Console review, where access is available",
  "Prioritized list of recommended fixes",
];

const advancedIncluded = [
  "Detailed keyword and ranking analysis",
  "Competitor SEO analysis",
  "Content and keyword gap analysis",
  "Website architecture review",
  "Deeper internal linking analysis",
  "Local SEO and Google Business Profile review, where relevant",
  "Search intent and page targeting review",
  "Identification of high-value SEO opportunities",
  "Prioritized implementation roadmap",
  "45–60 minute strategy call to walk through the findings",
];

const coverage: {
  title: string;
  body: string[];
  listLabel?: string;
  list?: string[];
  after?: string[];
}[] = [
  {
    title: "Technical SEO & Indexing",
    body: [
      "I review whether search engines can efficiently discover, crawl, render, and index the pages that matter.",
    ],
    listLabel: "This can include:",
    list: [
      "Crawlability and indexation",
      "XML sitemaps",
      "Robots.txt directives",
      "Canonical tags",
      "Redirects",
      "Broken URLs and 404s",
      "Duplicate URLs",
      "Core Web Vitals",
      "Mobile usability",
      "Structured data and schema",
      "Technical site architecture",
    ],
    after: [
      "The objective is to identify technical problems that could be preventing otherwise valuable pages from performing properly.",
    ],
  },
  {
    title: "On-Page SEO",
    body: [
      "I review how effectively your important pages communicate their purpose to both search engines and potential customers.",
      "This includes elements such as page titles, headings, metadata, content structure, topical relevance, internal links, and search intent.",
      "The audit can also uncover situations where multiple pages target the same search or where an important service doesn’t have a strong page supporting it.",
    ],
  },
  {
    title: "Content & Search Intent",
    body: [
      "Content should have a defined role within your organic search strategy.",
      "I review whether your existing pages actually satisfy the searches they’re targeting, where content is too thin or overlapping, and whether important commercial topics are missing.",
      "For Advanced audits, this expands into a broader content and keyword gap analysis to identify searches competitors are capturing that your website currently isn’t.",
    ],
  },
  {
    title: "Internal Linking & Website Architecture",
    body: [
      "How pages connect matters.",
      "I review how users and search engines move between your homepage, service pages, industry pages, location pages, articles, and other important content.",
      "The audit can identify orphan pages, weak internal linking, unnecessary page depth, confusing hierarchies, overlapping content, and opportunities to strengthen the relationships between important pages.",
    ],
  },
  {
    title: "Keyword & Search Visibility",
    body: [
      "Understanding where you already appear in search can reveal opportunities that aren’t obvious from looking at the website alone.",
      "Depending on the audit scope, I review existing keyword rankings, important queries, ranking URLs, near-page-one opportunities, search intent, and areas where Google is already beginning to associate your website with valuable searches.",
      "Advanced audits include a deeper analysis of these opportunities.",
    ],
  },
  {
    title: "Competitor Analysis",
    body: [
      "For Advanced audits, I also review the businesses competing with you in organic search.",
      "The goal isn’t simply to count how many keywords a competitor ranks for.",
      "I look at why their important pages may be outperforming yours—whether that’s stronger service content, better website architecture, more complete topical coverage, stronger local relevance, or a clearer match with search intent.",
      "That helps identify realistic opportunities rather than copying competitors blindly.",
    ],
  },
  {
    title: "Local SEO",
    body: [
      "If your business depends on customers in a particular city or service area, the Advanced audit can also examine your local search presence.",
      "This can include your Google Business Profile, local landing pages, geographic relevance, business information consistency, reviews, local search visibility, and how effectively your website supports the locations you actually serve.",
    ],
  },
  {
    title: "Google Search Console Analysis",
    body: [
      "Where access is available, Google Search Console provides valuable first-party information about how your website is performing in Google Search.",
    ],
    listLabel: "I can use this data to review:",
    list: [
      "Search queries",
      "Clicks and impressions",
      "Click-through rates",
      "Average ranking positions",
      "Ranking URLs",
      "Indexing issues",
      "Pages gaining or losing visibility",
      "Existing search opportunities",
    ],
    after: [
      "This helps connect what I find on the website with how Google is actually treating it in search.",
    ],
  },
];

const whenToAudit = [
  {
    title: "Your Organic Traffic or Rankings Have Dropped",
    body: [
      "If search visibility has declined, an audit can help determine whether technical changes, content issues, page changes, competition, or other factors may be contributing.",
      "The goal is to investigate the evidence before making unnecessary changes.",
    ],
  },
  {
    title: "Your Website Isn’t Generating Organic Leads",
    body: [
      "A website can be technically healthy and still perform poorly in search.",
      "If your important service pages aren’t gaining visibility or organic traffic isn’t turning into enquiries, an audit can help identify whether the problem is targeting, content, structure, search intent, technical SEO, or the wider search strategy.",
    ],
  },
  {
    title: "You’re Planning a Website Redesign or Migration",
    body: [
      "A redesign or migration can affect existing rankings if valuable URLs, content, metadata, redirects, or internal links aren’t handled correctly.",
      "Auditing the website before major changes can help identify what should be preserved, improved, consolidated, or redirected as part of the project.",
    ],
  },
  {
    title: "You’re Not Sure Whether Your Current SEO Is Working",
    body: [
      "If you’ve been investing in SEO but aren’t sure whether the website is moving in the right direction, an independent audit can provide another perspective.",
      "It can identify areas that are working, issues that may have been overlooked, and opportunities that deserve greater attention.",
    ],
  },
  {
    title: "You Want an SEO Roadmap Without a Monthly Retainer",
    body: [
      "Not every business needs someone managing SEO every month.",
      "If you already have developers, writers, or an internal marketing team capable of making changes, an audit can provide the strategy and priorities while your team handles implementation.",
      "There is no requirement to sign up for ongoing SEO after the audit.",
    ],
  },
];

const deliverables = [
  {
    title: "Findings Explained in Plain English",
    body: [
      "You’ll receive a written audit documenting the issues and opportunities I identified.",
      "Rather than simply listing technical warnings, I explain what each important finding means and how it relates to your website’s organic performance.",
    ],
  },
  {
    title: "Recommendations Prioritized by Impact",
    body: [
      "Not every SEO issue deserves the same attention.",
      "Recommendations are prioritized so you can distinguish between problems that should be addressed first, meaningful improvements that should follow, and lower-priority items that can wait.",
      "That prevents your team from spending time fixing minor warnings while more important opportunities remain untouched.",
    ],
  },
  {
    title: "A Roadmap Your Team Can Actually Implement",
    body: [
      "The recommendations are designed to be actionable.",
      "You can use the audit internally, provide it to your developer or marketing team, or ask Scale SEO to help implement the recommended changes.",
      "Advanced audits also include a 45–60 minute strategy call where we’ll walk through the findings, priorities, and recommended next steps together.",
    ],
  },
];

const auditFit = [
  "Want an independent assessment of your website",
  "Need to understand what’s wrong before investing further",
  "Have an internal team capable of implementing recommendations",
  "Want a defined project rather than an ongoing engagement",
  "Need a roadmap for your developer or marketing team",
  "Want a second opinion on existing SEO work",
];

const processSteps = [
  {
    title: "1. Website & Goals",
    body: [
      "We start with a short conversation about your website, business, current search performance, and what you’re trying to understand or improve.",
      "I’ll also confirm which audit level is appropriate before the project begins.",
    ],
  },
  {
    title: "2. Crawl & Search Data Analysis",
    body: [
      "I crawl the website and review the technical signals, page structure, indexing, and other SEO data relevant to the audit.",
      "Where available, I also review Google Search Console to understand how the website is currently appearing in search.",
    ],
  },
  {
    title: "3. Manual Review",
    body: [
      "Automated tools can identify potential issues, but they can’t determine the business importance of every finding.",
      "I manually review the website, important pages, search intent, structure, and—in Advanced audits—competitors and wider organic opportunities.",
    ],
  },
  {
    title: "4. Findings & Prioritization",
    body: [
      "The findings are consolidated into a written audit and prioritized according to their potential impact and urgency.",
      "The objective is to give you a manageable roadmap rather than an overwhelming list of every warning an SEO tool can produce.",
    ],
  },
  {
    title: "5. Delivery & Next Steps",
    body: [
      "Once complete, you’ll receive the audit and recommendations.",
      "Advanced audits include a 45–60 minute strategy call to walk through the findings and answer questions.",
      "From there, you can implement the recommendations internally, hand them to another provider, or discuss implementation with Scale SEO.",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does an SEO audit cost?",
    a: [
      "Scale SEO offers two standalone audit options.",
      "The standard SEO Audit is $700 + GST and focuses on the core technical and on-page factors affecting organic search performance.",
      "The Advanced SEO Audit is $1,500 + GST and adds deeper keyword, competitor, content, architecture, local SEO, and opportunity analysis.",
      "There is no requirement to purchase ongoing SEO afterward.",
    ],
  },
  {
    q: "How long does an SEO audit take?",
    a: [
      "The timeframe depends on the size and complexity of the website and the audit selected.",
      "I’ll confirm the expected delivery timeframe before beginning the project so you know when to expect the completed audit.",
    ],
  },
  {
    q: "What access do you need?",
    a: [
      "I can complete much of the website review without administrative access.",
      "Where available, access to Google Search Console can provide additional first-party search data and help identify indexing, query, page, and visibility trends.",
      "I’ll let you know exactly what access would be useful before beginning.",
    ],
  },
  {
    q: "Do you fix the problems found in the audit?",
    a: [
      "Implementation isn’t automatically included in the standalone audit price.",
      "The audit is designed to identify and prioritize what needs to be done.",
      "You can implement the recommendations internally, give them to your existing developer or marketing team, or discuss having Scale SEO implement the work separately.",
    ],
  },
  {
    q: "Can I give the SEO audit to my developer?",
    a: [
      "Yes.",
      "The recommendations are designed so they can be used by your internal team, developer, marketing provider, or other appropriate specialist.",
      "You retain the completed audit and can use it independently.",
    ],
  },
  {
    q: "Do I need to sign up for monthly SEO afterward?",
    a: [
      "No.",
      "The audit is a standalone service with no ongoing commitment.",
      "If you later decide you want Scale SEO to manage the strategy and implementation, we can discuss an ongoing SEO campaign separately.",
    ],
  },
  {
    q: "What’s the difference between an SEO audit and a technical SEO audit?",
    a: [
      "Technical SEO is one major component of an SEO audit.",
      "It focuses on areas such as crawling, indexation, redirects, canonicalization, website performance, structured data, and other technical factors.",
      "Scale SEO’s audits also review relevant on-page SEO, content, internal linking, search visibility, and—with the Advanced audit—broader keyword, competitor, architecture, and local search opportunities.",
    ],
  },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Schema — WebPage + Service (with both audit offers) + BreadcrumbList
   graph, linked to the global #website and #organization nodes in
   layout.tsx. Includes this page's BreadcrumbList, so <Breadcrumbs> is
   rendered with schema={false}. The FAQPage schema comes from <ServicesFaq>. === */
const auditsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo-audits#webpage",
      "url": "https://scaleseo.co/services/seo-audits",
      "name": "SEO Audit Services Calgary | Scale SEO",
      "description": "Standalone SEO audits for Calgary businesses. Identify technical, on-page and search performance issues with clear findings and prioritized recommendations.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo-audits#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo-audits#service",
      "name": "SEO Audit Services",
      "alternateName": [
        "SEO Audits",
        "Website SEO Audit",
        "Technical SEO Audit"
      ],
      "serviceType": "SEO Audit",
      "url": "https://scaleseo.co/services/seo-audits",
      "description": "Standalone SEO audit services that assess technical SEO, crawlability, indexing, on-page optimization, content, internal linking, website architecture and organic search performance, with prioritized recommendations for improvement.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses seeking an independent SEO assessment and prioritized implementation roadmap"
      },
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#standard-audit-offer",
          "name": "SEO Audit",
          "description": "Standalone SEO audit covering technical website health, crawlability, indexing, on-page SEO, internal linking, website performance, basic keyword visibility and prioritized recommendations.",
          "url": "https://scaleseo.co/services/seo-audits",
          "price": "700.00",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Audit"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#advanced-audit-offer",
          "name": "Advanced SEO Audit",
          "description": "Advanced SEO audit including technical and on-page analysis plus detailed keyword research, competitor analysis, content gaps, website architecture, internal linking, local SEO where relevant, and a prioritized implementation roadmap.",
          "url": "https://scaleseo.co/services/seo-audits",
          "price": "1500.00",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced SEO Audit"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo-audits#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Audits",
          "item": "https://scaleseo.co/services/seo-audits"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function SeoAuditsPage() {


  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditsJsonLd) }}
      />

      {/* === HERO — dark === */}
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO Audits" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>
            SEO Audit Services <span className={styles.accent}>in Calgary</span>
          </h1>
          <p className={styles.heroLead}>
            Find out what&rsquo;s limiting your organic search performance and
            what you should fix first.
          </p>
          <div className={styles.sub}>
            <p>
              Scale SEO provides standalone SEO audits for businesses that want
              a detailed assessment of their website without committing to
              ongoing monthly SEO.
            </p>
            <p>
              I review the technical foundation, content, on-page SEO, website
              structure, rankings, and search performance to identify problems,
              missed opportunities, and the changes most likely to make a
              difference.
            </p>
            <p>
              You&rsquo;ll receive clear findings and prioritized
              recommendations that you can implement internally, give to your
              developer or marketing team, or work with me to address.
            </p>
          </div>
          <div className={styles.heroCtaGroup}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              <span>Book an SEO Audit</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#tiers" className={styles.heroCtaSecondary}>
              <span>Compare Audit Options</span>
              <span>↓</span>
            </a>
          </div>
          <p className={styles.heroTrust}>
            Standalone Service · Clear Recommendations · No Monthly SEO
            Commitment Required
          </p>
        </div>
      </header>

      {/* === WHAT'S HOLDING YOUR WEBSITE BACK — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <h2 className={`${hub.h2} reveal-up`}>
              Find Out What&rsquo;s Actually{" "}
              <em>Holding Your Website Back</em>
            </h2>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={styles.leadInk}>SEO problems aren&rsquo;t always obvious.</p>
            <p>
              Your website might look good and function properly for visitors
              while important pages aren&rsquo;t being indexed correctly. You
              might have several pages competing for the same searches, weak
              internal linking, missing commercial content, or technical issues
              making it harder for Google to understand your site.
            </p>
            <p>
              And sometimes the website isn&rsquo;t technically broken at
              all&mdash;the bigger problem is that competitors have better pages
              or your current content doesn&rsquo;t align with what potential
              customers are searching for.
            </p>
            <p className={styles.leadInk}>
              An SEO audit is designed to separate what actually matters from
              what doesn&rsquo;t.
            </p>
            <p>
              Rather than handing you an automated report containing hundreds of
              warnings, I investigate the website manually, use search and crawl
              data to understand what&rsquo;s happening, and prioritize the
              findings based on their potential impact.
            </p>
            <p>The result is a clearer answer to three questions:</p>
            <ol className={styles.questions}>
              {questions.map((q, i) => (
                <li key={q} className={styles.question}>
                  <span className={styles.questionNum}>{pad(i)}</span>
                  <span className={styles.questionText}>{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* === AUDIT OPTIONS — dark, two-tier comparison (kept design) === */}
      <section className={styles.tiers} id="tiers" data-nav-theme="dark">
        <div className={styles.tiersInner}>
          <div className={styles.tiersHead}>
            <div>
              <div className={`section-label reveal-up ${styles.labelOnDark}`}>
                Audit Options
              </div>
              <h2 className={`${styles.tiersHeading} reveal-up`}>
                Choose the Right <em>SEO Audit</em>
              </h2>
            </div>
            <div className={`${styles.tiersIntro} reveal-up`}>
              <p>
                There are two audit options depending on how deeply you need to
                investigate your website and organic search strategy.
              </p>
              <p>
                The standard SEO Audit focuses primarily on identifying
                technical and on-page problems.
              </p>
              <p>
                The Advanced SEO Audit goes further into your keywords,
                competitors, content, website architecture, and broader organic
                growth opportunities.
              </p>
            </div>
          </div>

          <div className={styles.tierGrid}>
            <div className={`${styles.tierCard} reveal-up`}>
              <h3 className={styles.tierName}>SEO Audit &mdash; $700 + GST</h3>
              <p className={styles.tierBestFor}>
                Best for businesses that want to identify technical and on-page
                SEO problems and receive a prioritized list of fixes.
              </p>
              <div className={styles.tierDesc}>
                <p>
                  This audit is designed for small to medium-sized websites
                  that need a clear assessment of their SEO health.
                </p>
                <p>
                  I&rsquo;ll review the core factors affecting whether your
                  website can be properly crawled, indexed, understood, and
                  ranked by Google.
                </p>
              </div>
              <div className={styles.tierIncludedLabel}>What&rsquo;s Included</div>
              <ul className={styles.tierList}>
                {coreIncluded.map((item) => (
                  <li key={item} className={styles.tierListItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.tierNote}>
                You&rsquo;ll receive a written audit explaining what I found,
                why it matters, and what I recommend addressing first.
              </p>
              <div className={styles.tierFooter}>
                <span className={styles.tierPrice}>$700 + GST</span>
                <a
                  href={BOOKING_URL}
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
              <h3 className={styles.tierName}>
                Advanced SEO Audit &mdash; $1,500 + GST
              </h3>
              <p className={styles.tierBestFor}>
                Best for businesses that want to understand not only
                what&rsquo;s wrong with the website, but where the broader
                organic search opportunities are.
              </p>
              <div className={styles.tierDesc}>
                <p>
                  The Advanced SEO Audit includes everything in the standard
                  audit, then expands the analysis into your existing rankings,
                  competitors, content, website architecture, and search
                  opportunities.
                </p>
              </div>
              <div className={styles.tierIncludedLabel}>
                Everything in the SEO Audit, Plus:
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
                Rather than only identifying technical problems, this audit is
                designed to answer the bigger question:
              </p>
              <p className={styles.tierQuestion}>
                Where should your business focus its SEO resources next?
              </p>
              <div className={styles.tierFooter}>
                <span className={styles.tierPrice}>$1,500 + GST</span>
                <a
                  href={BOOKING_URL}
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

      {/* === WHAT DOES AN SEO AUDIT COVER — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              What Does an <em>SEO Audit Cover?</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                An SEO audit looks at the different systems that influence how
                your website performs in organic search.
              </p>
              <p>
                Not every issue uncovered during an audit will require action.
                Part of the process is determining which problems are genuinely
                limiting performance and which aren&rsquo;t worth prioritizing.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {coverage.map((c, i) => (
              <div key={c.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{c.title}</h3>
                <div className={hub.cardBody}>
                  {c.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  {c.list && (
                    <>
                      <p className={styles.listLabel}>{c.listLabel}</p>
                      <ul className={styles.inkList}>
                        {c.list.map((item) => (
                          <li key={item}>
                            <span className={hub.check} aria-hidden="true">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {c.after?.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHEN SHOULD YOU GET AN SEO AUDIT — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              When Should You Get <em>an SEO Audit?</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                You don&rsquo;t need to wait until something is obviously
                broken.
              </p>
              <p>
                An audit can be useful whenever you need a clearer understanding
                of your current organic search performance before deciding what
                to do next.
              </p>
            </div>
          </div>

          <div className={hub.principleGrid}>
            {whenToAudit.map((w, i) => (
              <div key={w.title} className={`${hub.darkCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{w.title}</h3>
                <div className={hub.cardBody}>
                  {w.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === THE DELIVERABLE — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className="section-label reveal-up" style={{ marginBottom: 24 }}>
                The Deliverable
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What You Receive <em>After the Audit</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                An audit shouldn&rsquo;t leave you with a spreadsheet full of
                errors and no idea where to start.
              </p>
              <p>
                The value is in understanding which findings matter, why they
                matter, and what should happen next.
              </p>
            </div>
          </div>

          <div className={hub.threeGrid}>
            {deliverables.map((d, i) => (
              <div key={d.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{d.title}</h3>
                <div className={hub.cardBody}>
                  {d.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SEO AUDIT vs ONGOING SEO — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              SEO Audit <em>vs. Ongoing SEO</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Both services are designed to improve organic search
                performance, but they solve different problems.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            <div className={`${hub.darkCard} reveal-up`}>
              <h3 className={hub.cardTitle}>Choose an SEO Audit When&hellip;</h3>
              <div className={hub.cardBody}>
                <p>An audit is usually the better fit when you:</p>
              </div>
              <ul className={hub.checkList}>
                {auditFit.map((item) => (
                  <li key={item}>
                    <span className={hub.check} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={hub.cardBody}>
                <p>
                  Once the audit is delivered, you&rsquo;re free to implement
                  the recommendations however you choose.
                </p>
              </div>
            </div>

            <div className={`${hub.darkCard} ${styles.ongoingCard} reveal-up`}>
              <h3 className={hub.cardTitle}>Choose Ongoing SEO When&hellip;</h3>
              <div className={hub.cardBody}>
                <p>
                  Ongoing SEO makes more sense when you want someone to
                  continually research, prioritize, implement, measure, and
                  improve your organic search strategy.
                </p>
                <p>
                  Instead of stopping at recommendations, I work directly on
                  the website over time and adjust priorities as rankings,
                  competitors, content, and search data change.
                </p>
              </div>
              <Link href="/services/seo" className={hub.pillLime}>
                <span>Explore Ongoing SEO Services</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </div>
          </div>

          <p className={`${hub.footNote} reveal-up`}>
            Not sure which approach makes sense? I&rsquo;ll help you determine
            that before you commit to either.
          </p>
        </div>
      </section>

      {/* === STANDALONE AUDIT vs FREE ASSESSMENT — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Standalone SEO Audits <em>vs. Free SEO Assessments</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Scale SEO offers both, but they&rsquo;re designed for two very
                different purposes.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            <div className={`${hub.lightCard} reveal-up`}>
              <h3 className={hub.cardTitle}>Free SEO Assessment</h3>
              <div className={hub.cardBody}>
                <p>
                  I provide an initial high-level SEO assessment for businesses
                  considering an ongoing monthly SEO campaign.
                </p>
                <p>
                  The purpose is to understand your current situation, identify
                  obvious opportunities, and determine whether working together
                  makes sense.
                </p>
                <p>It&rsquo;s not a comprehensive audit or implementation roadmap.</p>
                <p>
                  There is no cost for this initial assessment when you&rsquo;re
                  considering ongoing SEO with Scale SEO.
                </p>
              </div>
            </div>
            <div className={`${hub.darkCard} reveal-up`}>
              <h3 className={hub.cardTitle}>Standalone SEO Audit</h3>
              <div className={hub.cardBody}>
                <p>A paid standalone audit is a defined consulting engagement.</p>
                <p>
                  It involves a substantially deeper review of your website and
                  provides documented findings and recommendations that you can
                  use independently.
                </p>
                <p>
                  You are paying for the analysis and roadmap itself&mdash;not
                  for a sales assessment leading into a required retainer.
                </p>
                <p>There is no obligation to continue with Scale SEO afterward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === THE PROCESS — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.labelOnDark}`}>
                The Process
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                How the SEO Audit <em>Process Works</em>
              </h2>
            </div>
          </div>

          <div className={hub.principleGrid}>
            {processSteps.map((step) => (
              <div key={step.title} className={`${hub.darkCard} reveal-up`}>
                <h3 className={hub.cardTitle}>{step.title}</h3>
                <div className={hub.cardBody}>
                  {step.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ — light === */}
      <ServicesFaq
        items={faqs}
        title={
          <>
            Frequently Asked Questions <em>About SEO Audits</em>
          </>
        }
      />

      {/* === CTA — dark === */}
      <section className={hub.cta} data-nav-theme="dark">
        <h2 className={hub.ctaHeadline}>
          Find Out What&rsquo;s{" "}
          <span className={hub.accent}>Holding Your Website Back</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>
            If you&rsquo;re not sure why your website isn&rsquo;t performing as
            well as it should in Google, an SEO audit can give you a clearer
            place to start.
          </p>
          <p>
            I&rsquo;ll review your website, identify the issues and
            opportunities that matter, and give you a prioritized roadmap for
            what should happen next.
          </p>
          <p>
            Choose a standalone audit if you want the findings and
            recommendations without committing to monthly SEO.
          </p>
        </div>
        <div className={styles.ctaPrices}>
          <span className={styles.ctaPrice}>SEO Audit &mdash; $700 + GST</span>
          <span className={styles.ctaPrice}>
            Advanced SEO Audit &mdash; $1,500 + GST
          </span>
        </div>
        <div className={hub.buttonGroupCenter}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={hub.buttonPrimaryDark}
          >
            <span>Book an SEO Audit</span>
            <span className={hub.arrow}>→</span>
          </a>
          <Link href="/contact" className={hub.buttonSecondaryDark}>
            <span>Send a Message</span>
            <span className={hub.arrow}>→</span>
          </Link>
        </div>
        <p className={styles.ctaNote}>
          Looking for ongoing implementation and strategy instead?{" "}
          <Link href="/services/seo" className={styles.ctaNoteLink}>
            Explore Ongoing SEO Services →
          </Link>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
