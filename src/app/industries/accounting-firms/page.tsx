import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
// Shared section/card system (from /services) and the full-width industries
// hero (from /industries), so this page matches the rest of the site.
import hub from "../../services/page.module.css";
import ind from "../page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO for Accounting Firms & CPA Practices in Canada | Scale SEO",
  description:
    "SEO built for accounting firms and CPA practices across Canada — designed to attract institutional retainers, fractional CFO leads, and advisory relationships, not tax-season foot traffic. Run personally by one specialist, with a strict two-firms-per-city cap.",
  alternates: { canonical: "/industries/accounting-firms" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const searchTypes: {
  title: string;
  body: string[];
  listLabel?: string;
  list?: string[];
  after?: string[];
}[] = [
  {
    title: "Accountant & CPA Searches",
    body: [
      "Some potential clients start with the provider.",
      "They may search for an accountant, CPA firm, business accountant, or tax accountant in their city and compare several firms before making contact.",
      "For firms that depend on a local market, these searches make traditional organic visibility and local SEO particularly important.",
      "Your website and Google Business Profile need to clearly communicate who you help, what you do, and where you do it.",
    ],
  },
  {
    title: "Service-Specific Searches",
    body: [
      "Other prospects already know what they need.",
      "Instead of searching for a generic accountant, they may be looking specifically for:",
    ],
    list: [
      "Corporate tax services",
      "Small business accounting",
      "Bookkeeping",
      "Tax planning",
      "Fractional CFO or controller services",
      "Payroll support",
      "Business advisory",
      "Personal tax services",
    ],
    after: [
      "These searches often deserve dedicated service pages rather than expecting one general “Accounting Services” page to rank for everything.",
      "Which services we prioritize depends on what your firm actually wants to grow.",
    ],
  },
  {
    title: "Research & Problem-Based Searches",
    body: [
      "Not every potential client is ready to contact an accounting firm immediately.",
      "Business owners also use Google to research tax questions, incorporation, payroll, business structures, financial reporting, tax deadlines, corporate planning, and other problems before choosing an advisor.",
      "Useful content can introduce your firm earlier in that research process.",
      "The strongest opportunities are usually topics that naturally connect back to a service your firm provides rather than articles created simply to generate traffic.",
    ],
  },
];

const includes: {
  title: string;
  body: string[];
  listLabel?: string;
  list?: string[];
  after?: string[];
}[] = [
  {
    title: "Accounting Service Page Optimization",
    body: [
      "Your most commercially important accounting services should have pages capable of ranking independently.",
      "I review how those pages are structured, what searches they target, whether they satisfy the underlying search intent, and how they compare with the firms currently ranking above you.",
      "Depending on your practice, that may include pages for corporate tax, bookkeeping, business advisory, fractional CFO, tax planning, payroll, personal tax, or other specialized services.",
    ],
    listLabel: "Improvements can involve:",
    list: [
      "Keyword and search intent research",
      "Page structure and headings",
      "Service content",
      "Titles and metadata",
      "Internal linking",
      "Calls to action",
      "Trust signals",
      "Schema markup",
      "Supporting content",
      "Conversion improvements",
    ],
    after: [
      "The objective is to make each important service clearly understandable to both potential clients and search engines.",
    ],
  },
  {
    title: "Local SEO & Google Business Profile",
    body: [
      "For accounting firms serving a specific city or region, local search can be a major part of the acquisition strategy.",
      "I look at how your website and Google Business Profile work together to establish relevance within the markets you actually serve.",
    ],
    listLabel: "That can include:",
    list: [
      "Google Business Profile optimization",
      "Local keyword research",
      "Google Maps visibility",
      "Review strategy",
      "Business information consistency",
      "Local service-page optimization",
      "Office and location pages where appropriate",
      "Local internal linking",
      "Competitor analysis",
    ],
    after: [
      "The strategy is built around real locations and markets rather than publishing dozens of thin city pages simply to target more keywords.",
    ],
  },
  {
    title: "Accounting Content Strategy",
    body: [
      "Educational content can build search visibility around the questions business owners research before they choose an accountant.",
      "But more content isn’t automatically better.",
      "I use keyword research, existing rankings, competitor analysis, and your service priorities to identify topics that genuinely support the wider accounting SEO strategy.",
      "That can include new guides, updates to existing articles, service-supporting resources, and content built around recurring client questions.",
      "Every article should have a reason to exist within the broader site.",
    ],
  },
  {
    title: "Internal Linking",
    body: [
      "Internal links help connect educational expertise with the services responsible for generating revenue.",
      "A useful corporate tax article, for example, shouldn’t sit isolated in a blog archive.",
      "It should connect naturally to the firm’s Corporate Tax service page and, where relevant, related resources or advisory services.",
      "I use internal linking to create clearer relationships between your services, industries, locations, articles, and other important pages while helping users find the next useful resource.",
    ],
  },
  {
    title: "Technical SEO & Website Architecture",
    body: [
      "Accounting firms often accumulate pages over time as services, offices, team members, resources, and industries expand.",
      "Without a clear structure, important pages can become difficult for users and search engines to navigate.",
    ],
    listLabel: "I review the technical foundation and architecture supporting the site, including:",
    list: [
      "Crawlability and indexation",
      "Canonicals and redirects",
      "XML sitemaps",
      "Website performance",
      "Mobile usability",
      "Schema markup",
      "URL structure",
      "Service hierarchy",
      "Duplicate or overlapping pages",
      "Internal architecture",
    ],
    after: [
      "The goal is to make the website easier to crawl while clearly establishing which services, topics, and pages are most important.",
    ],
  },
  {
    title: "Trust, Expertise & Content Accuracy",
    body: [
      "Accounting and tax information can influence important financial decisions, so accuracy and credibility matter.",
      "Your website should make it easy for potential clients to understand who is behind the advice and why they should trust the firm.",
    ],
    listLabel: "Depending on the site, that can include:",
    list: [
      "Clear author attribution",
      "CPA credentials and professional biographies",
      "Accurate service information",
      "Appropriate references to authoritative sources",
      "Publication and update dates",
      "Clear firm and contact information",
      "Relevant professional affiliations",
      "Appropriate disclaimers",
      "Structured data",
      "Regular review of time-sensitive tax content",
    ],
    after: [
      "These aren’t substitutes for strong SEO fundamentals, but they help build a website that demonstrates genuine professional expertise rather than anonymous search content.",
    ],
  },
];

const siteStructure = [
  {
    label: "Services",
    items: [
      "Corporate Tax",
      "Bookkeeping",
      "Fractional CFO & Controller",
      "Business Advisory",
      "Personal Tax",
      "Other Priority Services",
    ],
  },
  {
    label: "Industries",
    items: ["Industries or client groups the firm genuinely specializes in"],
  },
  {
    label: "Resources",
    items: [
      "Corporate Tax Guides",
      "Business Accounting Resources",
      "Payroll & Compliance Articles",
      "Other service-supporting content",
    ],
  },
];

const locations = [
  {
    title: "Single-Office Accounting Firms",
    body: [
      "For a firm primarily serving one city or region, the priority is usually building strong visibility within that market.",
      "That can mean strengthening your main service pages, Google Business Profile, local relevance, reviews, and website content around the services potential clients in that area are searching for.",
      "The goal isn’t to mention the city everywhere. It’s to build convincing evidence that your firm provides the relevant services within that market.",
    ],
  },
  {
    title: "Multi-Location Accounting Firms",
    body: [
      "Firms with legitimate offices in multiple markets require a more structured approach.",
      "Each location needs to fit naturally within the wider website while providing genuinely useful information about the office, services, team, and market it serves.",
      "Where appropriate, that can involve individual office pages, eligible Google Business Profiles, location-specific internal linking, and consistent service architecture across the website.",
      "I don’t recommend manufacturing location pages for cities where the firm doesn’t genuinely operate simply to capture additional keywords.",
    ],
  },
  {
    title: "Accounting Firms Serving Clients Across Canada",
    body: [
      "Some accounting and advisory services are less dependent on physical proximity.",
      "A firm offering specialized tax, virtual bookkeeping, fractional CFO, or advisory services may be able to serve clients well beyond its immediate city.",
      "In those situations, broader service pages, educational content, technical SEO, and authority can complement local visibility and help the firm reach a larger Canadian market.",
      "The right balance depends on how your firm actually delivers its services.",
    ],
  },
];

const firmTypes = [
  {
    title: "CPA Firms",
    body: [
      "CPA firms often provide several services across tax, accounting, advisory, and financial management.",
      "SEO can help establish clearer search visibility for each priority service while strengthening the firm’s overall professional presence in its target market.",
    ],
  },
  {
    title: "Small & Mid-Sized Accounting Firms",
    body: [
      "Smaller accounting firms don’t necessarily need thousands of monthly visitors.",
      "A relatively small number of qualified searches from business owners looking for ongoing accounting, tax, bookkeeping, or advisory support can represent substantial value.",
      "The strategy should prioritize those commercial opportunities rather than competing for every broad accounting term.",
    ],
  },
  {
    title: "Bookkeeping & Cloud Accounting Firms",
    body: [
      "Bookkeeping firms can use organic search to reach businesses looking for recurring financial support, cloud accounting, payroll, reporting, and related services.",
      "Where the firm serves clients remotely, the search strategy may also extend beyond traditional local SEO.",
    ],
  },
  {
    title: "Tax & Advisory Firms",
    body: [
      "Firms with deeper expertise in corporate tax, tax planning, restructuring, or business advisory often have opportunities to build visibility around more specialized searches.",
      "These searches may have lower volume, but the potential client value and level of intent can be significantly higher.",
    ],
  },
  {
    title: "Multi-Office Accounting Practices",
    body: [
      "Larger firms operating from multiple offices need a clear relationship between their overall brand, individual locations, services, and industry expertise.",
      "SEO can help organize that information so individual offices can build local relevance without fragmenting the authority of the wider website.",
    ],
  },
];

const contentClusters = [
  {
    service: "Corporate Tax",
    articles: [
      "Section 85 rollover guide",
      "Passive investment income guide",
      "Corporate tax deadline resources",
    ],
  },
  {
    service: "Fractional CFO & Controller",
    articles: [
      "Cash-flow forecasting resources",
      "CFO vs. controller guidance",
      "Financial reporting articles",
    ],
  },
  {
    service: "Bookkeeping",
    articles: [
      "Payroll compliance guides",
      "Bookkeeping requirement resources",
      "Accounting software guidance",
    ],
  },
];

const reasons = [
  {
    title: "Direct SEO Specialist Access",
    body: [
      "You work directly with me throughout the campaign.",
      "I handle the research, strategy, implementation, content direction, technical work, and reporting rather than passing your account between salespeople, account managers, and junior specialists.",
    ],
  },
  {
    title: "Website & SEO Work Together",
    body: [
      "Many SEO recommendations ultimately require changes to the website.",
      "Because I work directly with websites as part of my campaigns, I can implement many technical, structural, content, and on-page improvements rather than simply sending your firm a list of recommendations for somebody else to complete.",
    ],
  },
  {
    title: "Accounting Industry Experience",
    body: [
      "I already work with accounting businesses and understand how services such as corporate tax, bookkeeping, fractional CFO, business advisory, payroll, and tax planning fit within an accounting website.",
      "That means less time explaining basic industry terminology and more time understanding your particular firm, clients, services, and growth priorities.",
    ],
  },
  {
    title: "Month-to-Month SEO",
    body: [
      "Ongoing SEO engagements are month-to-month.",
      "There are no long-term lock-in contracts.",
      "The objective is to retain your firm by continuing to create value—not because a contract prevents you from leaving.",
    ],
  },
];

const markets = [
  "Calgary",
  "Vancouver",
  "Edmonton",
  "Toronto",
  "Ottawa",
  "Winnipeg",
  "Halifax",
  "and other Canadian markets",
];

const faqs: FaqItem[] = [
  {
    q: "How does SEO work for an accounting firm?",
    a: [
      "Accounting SEO improves how your firm appears when potential clients search for accountants, CPAs, specific accounting services, and questions related to the work your firm provides.",
      "A campaign can involve technical SEO, service-page optimization, keyword research, local SEO, Google Business Profile optimization, accounting content, internal linking, website architecture, and ongoing measurement.",
      "The exact strategy depends on your firm’s services, market, competition, and growth priorities.",
    ],
  },
  {
    q: "How long does SEO take for an accounting firm?",
    a: [
      "SEO generally develops over months rather than weeks.",
      "The timeline depends on your existing website, current rankings, market competition, authority, technical condition, content, and the searches you’re targeting.",
      "A firm already ranking on page two for valuable services may see progress differently from a new website entering a competitive market with little existing visibility.",
      "I review the starting position before setting expectations.",
    ],
  },
  {
    q: "What accounting services can SEO target?",
    a: [
      "The strategy can be built around whichever services your firm genuinely provides and wants to grow.",
      "That may include corporate tax, bookkeeping, small-business accounting, fractional CFO and controller services, business advisory, tax planning, payroll, personal tax, or more specialized accounting services.",
      "I don’t automatically prioritize every service equally.",
    ],
  },
  {
    q: "Do you provide local SEO for accounting firms?",
    a: [
      "Yes.",
      "For firms targeting clients within a particular city or region, campaigns can include Google Business Profile optimization, local keyword research, local service pages, reviews, business citations, website localization, and other work supporting local organic and Google Maps visibility.",
    ],
  },
  {
    q: "Can you work with accounting firms anywhere in Canada?",
    a: [
      "Yes.",
      "Scale SEO is based in Calgary, but I work remotely with businesses across Canada.",
      "The SEO strategy is built around the markets your accounting firm serves rather than where Scale SEO is located.",
    ],
  },
  {
    q: "Do you create content for accounting firms?",
    a: [
      "Yes.",
      "Content strategy can include improving existing service pages, developing new commercial pages, updating existing articles, and creating educational resources around topics relevant to your firm’s services.",
      "For technical tax or accounting topics, accuracy and appropriate professional review are important. Your firm remains the subject-matter authority on the accounting advice it publishes.",
    ],
  },
  {
    q: "Do you work with more than one accounting firm in the same market?",
    a: [
      "I don’t take on directly competing accounting firms targeting the same primary services and clients within the same market.",
      "If I believe an existing engagement creates a meaningful conflict, I’ll tell you before we move forward.",
    ],
  },
  {
    q: "Can you make changes directly to our accounting website?",
    a: [
      "In many cases, yes.",
      "I work with common platforms including WordPress, Webflow, and custom websites and can implement many technical, structural, content, and on-page improvements directly.",
      "We’ll establish the appropriate level of website access before work begins.",
    ],
  },
  {
    q: "How do you measure accounting firm SEO results?",
    a: [
      "I look at metrics including Google Search Console visibility, important keyword rankings, organic traffic, landing-page performance, local visibility where relevant, and enquiries or conversions where tracking is available.",
      "The objective isn’t simply to increase traffic. It’s to improve visibility around searches with genuine relevance to the firm’s services and target clients.",
    ],
  },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Page =============================================================== */

export default function AccountingFirmsPage() {
  return (
    <main>
      {/* === HERO — dark, full-width left-aligned === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={ind.heroContent}>
          <div className={ind.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Industries", href: "/industries" },
                { name: "Accounting Firms" },
              ]}
            />
          </div>
          <h1 className={ind.title}>
            SEO for Accounting Firms &amp;{" "}
            <span className="title-block">CPA Practices in Canada</span>
          </h1>

          <div className={ind.heroBottom}>
            <div className={ind.heroMain}>
              <div className={ind.sub}>
                <p>
                  Scale SEO helps accounting firms across Canada improve their
                  visibility in Google and attract more of the clients and
                  services they actually want to grow.
                </p>
                <p>
                  From corporate tax and bookkeeping to advisory and fractional
                  CFO services, I build SEO strategies around the searches that
                  can lead to valuable client relationships.
                </p>
                <p>
                  Every campaign is managed directly by me, combining technical
                  SEO, service-page optimization, content, local search,
                  internal linking, and website improvements into one ongoing
                  strategy.
                </p>
              </div>
              <div className={ind.heroCtaGroup}>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ind.heroCta}
                >
                  <span>Book a Strategy Call</span>
                  <span className={ind.arrow}>→</span>
                </a>
                <Link href="/services/seo" className={ind.heroCtaSecondary}>
                  <span>Explore SEO Services</span>
                  <span className={ind.arrow}>→</span>
                </Link>
              </div>
              <p className={styles.heroTrust}>
                One accounting firm per primary market · Month-to-month · No
                long-term contracts
              </p>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>Page 5 → Page 1</span>
                <span className={styles.heroStatLabel}>
                  Target keyword rankings for an accounting &amp; advisory firm
                </span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>+125%</span>
                <span className={styles.heroStatLabel}>
                  Growth in search impressions
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* === BUILT AROUND THE CLIENTS YOU WANT — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <h2 className={`${hub.h2} reveal-up`}>
              SEO Built Around the Clients Your Accounting Firm{" "}
              <em>Actually Wants</em>
            </h2>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Not every accounting firm wants more of the same work.
            </p>
            <p>
              One firm may want to grow corporate tax engagements. Another may
              want recurring bookkeeping clients. Another may be investing
              heavily in business advisory or fractional CFO services.
            </p>
            <p className={ind.leadInk}>Your SEO strategy should reflect that.</p>
            <p>
              Rather than chasing every accounting-related keyword with search
              volume, I start by understanding which services and client
              relationships are most valuable to your firm.
            </p>
            <p>
              From there, we can determine what potential clients are searching
              for, which pages should rank for those searches, where your firm
              already has visibility, and what needs to be improved or created.
            </p>
            <p>The objective is simple:</p>
            <p className={styles.objective}>
              Build organic visibility around the accounting services your firm
              actually wants to grow.
            </p>
          </div>
        </div>
      </section>

      {/* === HOW ACCOUNTING CLIENTS SEARCH — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              How Potential <em>Accounting Clients Search</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>Accounting searches don&rsquo;t all represent the same intent.</p>
              <p>
                Someone looking for an accountant by location is at a different
                stage than a business owner researching a corporate tax issue or
                comparing fractional CFO providers.
              </p>
              <p>
                A strong accounting SEO strategy needs to account for those
                different search journeys.
              </p>
            </div>
          </div>

          <div className={hub.threeGrid}>
            {searchTypes.map((t, i) => (
              <div key={t.title} className={`${hub.darkCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{t.title}</h3>
                <div className={hub.cardBody}>
                  {t.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {t.list && (
                  <ul className={hub.checkList}>
                    {t.list.map((item) => (
                      <li key={item}>
                        <span className={hub.check} aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {t.after && (
                  <div className={hub.cardBody}>
                    {t.after.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHAT ACCOUNTING SEO INCLUDES — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className="section-label reveal-up" style={{ marginBottom: 24 }}>
                Accounting SEO Strategy
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What SEO for Accounting <em>Firms Includes</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Accounting SEO requires more than inserting
                &ldquo;accountant&rdquo; and a city name throughout a website.
              </p>
              <p>
                The strongest campaigns connect your services, expertise,
                locations, educational content, technical foundation, and local
                presence into one search strategy.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {includes.map((c, i) => (
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
                    <p key={para} className={styles.takeaway}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WEBSITE STRUCTURE — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              Building an Accounting Website <em>Around Search Demand</em>
            </h2>
            <p className={hub.lead}>
              One of the biggest opportunities I see with accounting websites
              is structure.
            </p>
            <p>
              A simple website with Home, About, Services, Blog, Contact may
              work as a brochure, but it doesn&rsquo;t always give individual
              accounting services enough depth or context to compete in organic
              search.
            </p>
            <p>A stronger structure might look more like:</p>
          </div>

          <div className={`${styles.siteTree} reveal-up`}>
            {siteStructure.map((group) => (
              <div key={group.label} className={styles.treeGroup}>
                <div className={styles.treeRoot}>{group.label}</div>
                <ul className={styles.treeList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={hub.inner}>
        <div className={`${styles.afterTree} reveal-up`}>
          <p>The exact structure depends on the firm.</p>
          <p>
            The point isn&rsquo;t to create as many pages as possible. It&rsquo;s
            to give important services a clear place within the website and then
            support those pages with relevant expertise.
          </p>
          <p>
            That creates a stronger relationship between what the firm does,
            what it knows, and what potential clients search for.
          </p>
        </div>
        </div>
      </section>

      {/* === LOCAL SEO BY FIRM SETUP — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Local SEO for Single &amp; <em>Multi-Location Accounting Firms</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Scale SEO works with accounting firms across Canada, but that
                doesn&rsquo;t mean every firm needs a national SEO strategy.
              </p>
              <p>
                The geographic strategy should reflect where your actual clients
                come from.
              </p>
            </div>
          </div>

          <div className={hub.threeGrid}>
            {locations.map((l, i) => (
              <div key={l.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{l.title}</h3>
                <div className={hub.cardBody}>
                  {l.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === RESULTS — dark === */}
      <section className={`${hub.section} ${hub.dark}`} id="results" data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Real Accounting SEO Results
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                Accounting Firm <em>SEO Results</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                I already manage SEO for accounting and advisory businesses, so
                the strategy isn&rsquo;t built from assumptions about how
                accounting firms operate.
              </p>
              <p>
                One campaign began with important commercial searches sitting
                around page five of Google.
              </p>
              <p>
                Over six months, I worked on the firm&rsquo;s technical
                foundation, service-page structure, on-page optimization,
                content, and internal linking around the searches most relevant
                to the business.
              </p>
            </div>
          </div>

          <article className={`${styles.proofFeature} reveal-up`}>
            <div className={styles.proofMain}>
              <h3 className={styles.proofTitle}>
                Page 5 → Page 1 for Target Keywords
              </h3>
              <div className={styles.metricRow}>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>Page 5 → Page 1</span>
                  <span className={styles.metricLabel}>Target keyword rankings</span>
                </div>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>+125%</span>
                  <span className={styles.metricLabel}>Search impressions</span>
                </div>
              </div>
              <div className={styles.proofBody}>
                <p>
                  The objective wasn&rsquo;t simply to increase overall website
                  traffic.
                </p>
                <p>
                  The campaign focused on improving visibility around the
                  services and searches most closely connected to the
                  firm&rsquo;s target clients.
                </p>
                <p>
                  As those pages improved, important keywords moved into
                  first-page positions and Google Search Console showed
                  substantial growth in overall search visibility.
                </p>
              </div>
              <div className={styles.proofLinks}>
                <Link
                  href="/blog/how-accounting-firms-rank-on-google-in-canada"
                  className={hub.pillLime}
                >
                  <span>Read: How Accounting Firms Can Rank on Google in Canada</span>
                  <span className={hub.arrow}>→</span>
                </Link>
                <Link href="/results" className={styles.textLinkOnDark}>
                  View More SEO Results <span className={hub.arrow}>→</span>
                </Link>
              </div>
            </div>
            <div className={styles.proofVisual}>
              <img
                src="/images/google-search-console-empire-accountants-data-case-study.png"
                alt="Google Search Console performance report for an accounting firm SEO campaign"
                className={styles.proofImg}
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </section>

      {/* === TYPES OF ACCOUNTING FIRMS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              SEO for Different Types <em>of Accounting Firms</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                The underlying SEO principles remain consistent, but the
                strategy should reflect the type of practice and the clients it
                serves.
              </p>
            </div>
          </div>

          <div className={hub.principleGrid}>
            {firmTypes.map((f, i) => (
              <div key={f.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{f.title}</h3>
                <div className={hub.cardBody}>
                  {f.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTENT SUPPORTS REAL SERVICES — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Accounting Content Should <em>Support Real Services</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                A blog shouldn&rsquo;t exist just because someone decided an
                accounting firm needs four new articles every month.
              </p>
              <p>
                The strongest accounting content usually supports a genuine
                service or answers a question your potential clients research
                before engaging that service.
              </p>
            </div>
          </div>

          <p className={`${styles.clusterIntro} reveal-up`}>For example:</p>
          <div className={hub.threeGrid}>
            {contentClusters.map((c) => (
              <div key={c.service} className={`${styles.cluster} reveal-up`}>
                <div className={styles.clusterService}>{c.service}</div>
                <ul className={styles.clusterList}>
                  {c.articles.map((a) => (
                    <li key={a}>
                      <span className={styles.clusterArrow} aria-hidden="true">↑</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`${styles.afterTree} reveal-up`}>
            <p>
              The educational content builds topical depth and captures research
              searches.
            </p>
            <p>
              Internal links then help readers&mdash;and search engines&mdash;understand
              the relationship between that information and the firm&rsquo;s
              commercial services.
            </p>
            <p className={hub.lead}>
              That&rsquo;s a much stronger strategy than publishing disconnected
              accounting articles simply to increase the number of pages on the
              website.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY ACCOUNTING FIRMS WORK WITH SCALE SEO — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Why Accounting Firms <em>Work With Scale SEO</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Accounting is not just another industry card on my website.
              </p>
              <p>
                It&rsquo;s an area where I already have hands-on experience
                building service architecture, technical SEO, local search
                strategies, accounting content, structured data, and organic
                growth campaigns.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {reasons.map((r, i) => (
              <div key={r.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{r.title}</h3>
                <div className={hub.cardBody}>
                  {r.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={hub.centerRow}>
            <Link href="/services/seo" className={hub.pillDark}>
              <span>Explore Ongoing SEO Services</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === MARKET EXCLUSIVITY — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div className={`section-label reveal-up ${ind.labelOnDark}`}>
              Market Exclusivity
            </div>
            <h2 className={`${hub.h2} reveal-up`}>
              One Accounting Firm <em>Per Primary Market</em>
            </h2>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              I don&rsquo;t want to build the same search strategy for two
              directly competing accounting firms going after the same clients
              in the same market.
            </p>
            <p>
              For that reason, I limit ongoing accounting-firm SEO engagements to
              one directly competing firm per primary market.
            </p>
            <p>
              If I&rsquo;m already working with an accounting firm that directly
              competes for the same services and clients in your market,
              I&rsquo;ll tell you before we discuss an engagement.
            </p>
            <p>
              This gives each accounting client a clearer alignment of interests
              while allowing me to work with firms across different Canadian
              markets.
            </p>
            <ul className={styles.markets} aria-label="Canadian markets">
              {markets.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* === FAQ — light === */}
      <ServicesFaq
        items={faqs}
        title={
          <>
            Frequently Asked Questions About{" "}
            <em>SEO for Accounting Firms</em>
          </>
        }
      />

      {/* === CTA — dark === */}
      <section className={hub.cta} data-nav-theme="dark">
        <h2 className={hub.ctaHeadline}>
          Grow Your Accounting Firm{" "}
          <span className={hub.accent}>Through Organic Search</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>
            If your accounting firm wants to generate more qualified
            opportunities through Google, the first step is understanding where
            you stand today.
          </p>
          <p>
            I&rsquo;ll review your website, current search visibility, services,
            competitors, and target market to identify where the strongest
            organic opportunities exist.
          </p>
          <p>
            If I think ongoing SEO is a good fit, I&rsquo;ll explain what I
            would prioritize and why.
          </p>
          <p>
            If your primary market is already represented by a directly
            competing Scale SEO client, I&rsquo;ll tell you upfront.
          </p>
        </div>
        <p className={styles.ctaPromise}>
          SEO for accounting firms across Canada · Month-to-month · Managed
          directly by me
        </p>
        <div className={hub.buttonGroupCenter}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={hub.buttonPrimaryDark}
          >
            <span>Book a Strategy Call</span>
            <span className={hub.arrow}>→</span>
          </a>
          <Link href="/contact" className={hub.buttonSecondaryDark}>
            <span>Send a Message</span>
            <span className={hub.arrow}>→</span>
          </Link>
        </div>
        <p className={styles.ctaNote}>
          Not ready for ongoing SEO?{" "}
          <Link href="/services/seo-audits" className={styles.ctaNoteLink}>
            Explore Standalone SEO Audits →
          </Link>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
