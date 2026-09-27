import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Section/card system shared with the /services hub so both pages match.
import hub from "../page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO Services | Technical, On-Page & Local SEO | Scale SEO",
  description:
    "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const flow = [
  "Relevant searches",
  "The right pages",
  "Qualified organic traffic",
  "Real business opportunities",
];

const areas: {
  title: string;
  body: string[];
  listLabel: string;
  list: string[];
  note?: string[];
}[] = [
  {
    title: "SEO Strategy & Keyword Research",
    body: [
      "Good SEO starts with understanding what your potential customers actually search for and why.",
      "I research the commercial queries, services, problems, and topics relevant to your business, then map those searches to the pages that should rank for them.",
      "This helps prevent multiple pages from unnecessarily competing for the same keywords and identifies where existing pages should be improved versus where genuinely useful new pages are needed.",
    ],
    listLabel: "Strategy can include:",
    list: [
      "Commercial keyword research",
      "Search intent analysis",
      "Competitor research",
      "Keyword-to-page mapping",
      "Existing ranking analysis",
      "Content gap identification",
      "Prioritization based on commercial value",
      "Local, regional, and national search opportunities",
    ],
    note: [
      "The goal isn’t to target every keyword with search volume. It’s to identify the searches most likely to put your business in front of the right potential customers.",
    ],
  },
  {
    title: "Technical SEO",
    body: [
      "Before a page can rank, search engines need to be able to find, crawl, render, understand, and index it correctly.",
      "I review and improve the technical foundation supporting your organic visibility rather than treating technical SEO as a one-time score from an automated audit tool.",
    ],
    listLabel: "Depending on your website, technical SEO can include:",
    list: [
      "Crawling and indexation issues",
      "XML sitemaps",
      "Robots directives",
      "Canonicalization",
      "Redirects and broken URLs",
      "Duplicate content",
      "Core Web Vitals and performance",
      "Mobile usability",
      "JavaScript rendering issues",
      "Structured data and schema markup",
      "HTTPS and technical site configuration",
      "Website migrations",
      "Search Console errors",
    ],
    note: [
      "I work directly with platforms including WordPress, Webflow, custom-coded websites, and modern JavaScript frameworks, allowing many technical recommendations to be implemented as part of the campaign rather than simply handed back to you in a report.",
    ],
  },
  {
    title: "On-Page SEO",
    body: [
      "On-page optimization helps search engines understand what each page represents and helps visitors quickly determine whether they’ve found what they’re looking for.",
      "I review your most important commercial pages against search intent, competing results, and the wider structure of your website.",
    ],
    listLabel: "Improvements can include:",
    list: [
      "Page titles and meta descriptions",
      "H1, H2, and H3 structure",
      "Service page content",
      "Keyword and topical relevance",
      "Search intent alignment",
      "Internal linking",
      "Image optimization",
      "Calls to action",
      "Supporting entities and terminology",
      "Content structure and readability",
    ],
    note: [
      "The objective isn’t to repeat a target keyword as many times as possible. It’s to create the strongest useful page for the search intent you’re trying to satisfy.",
    ],
  },
  {
    title: "SEO Content Strategy",
    body: [
      "More content isn’t automatically better.",
      "Publishing dozens of articles that have little connection to your services can generate traffic without generating meaningful business.",
      "I use search data, competitor research, existing rankings, and customer intent to identify content that supports your wider organic strategy.",
    ],
    listLabel: "That may involve:",
    list: [
      "Creating new service pages",
      "Expanding thin commercial pages",
      "Building industry-specific content",
      "Updating existing articles",
      "Developing supporting guides",
      "Consolidating overlapping pages",
      "Building topic clusters",
      "Answering questions potential customers research before making contact",
    ],
    note: [
      "Every new page should have a clear reason to exist and a defined role within the wider site architecture.",
    ],
  },
  {
    title: "Local SEO",
    body: [
      "For businesses serving customers within a specific city or region, traditional organic rankings are only part of the search landscape.",
      "Local SEO focuses on improving the signals that help your business appear for geographically relevant searches and within Google’s local results.",
    ],
    listLabel: "Depending on your business, this can include:",
    list: [
      "Google Business Profile optimization",
      "Local keyword research",
      "Google Maps visibility",
      "Business citations and NAP consistency",
      "Review strategy",
      "Local service pages",
      "Location and service-area content",
      "Local competitor analysis",
      "Internal links supporting geographic relevance",
      "Local authority and business mentions",
    ],
    note: [
      "Scale SEO is based in Calgary, but I also manage local search strategies for businesses operating in other Canadian and international markets.",
    ],
  },
  {
    title: "Internal Linking & Site Architecture",
    body: [
      "Your website’s structure influences how easily both users and search engines can discover and understand important pages.",
      "I review how authority and context move through your website and build internal relationships between your homepage, service pages, industry pages, location pages, articles, and case studies.",
    ],
    listLabel: "This can involve:",
    list: [
      "Navigation improvements",
      "Service hub architecture",
      "Industry and topic hubs",
      "Contextual internal links",
      "Breadcrumbs",
      "URL structure",
      "Orphan page identification",
      "Page hierarchy",
      "Content consolidation",
      "Redirect planning",
    ],
    note: [
      "A well-structured website makes it clearer which pages are most important and how different services and topics relate to one another.",
    ],
  },
  {
    title: "Authority & Link Building",
    body: [
      "Strong websites need signals beyond their own pages.",
      "Depending on the campaign, I look for legitimate opportunities to strengthen the authority and prominence of your business online.",
    ],
    listLabel: "This can include:",
    list: [
      "Relevant business citations",
      "Industry directories",
      "Existing unlinked brand mentions",
      "Digital PR opportunities",
      "Partnerships and associations",
      "Supplier or professional relationships",
      "Competitor backlink analysis",
      "Relevant editorial links",
      "Local business mentions",
    ],
    note: [
      "The objective is quality and relevance rather than hitting an arbitrary monthly backlink quota.",
      "I don’t use bulk link packages or automated link networks simply to increase a third-party authority score.",
    ],
  },
  {
    title: "Website & Conversion Improvements",
    body: [
      "Getting somebody to your website is only half the job.",
      "If a page ranks but doesn’t clearly communicate your service, establish credibility, or make the next step obvious, increasing traffic alone may not produce better business results.",
      "Because I work directly with websites as part of my SEO campaigns, I can also improve the pages receiving organic traffic.",
    ],
    listLabel: "That can include:",
    list: [
      "Page layouts",
      "Calls to action",
      "Navigation",
      "Service page structure",
      "Trust signals",
      "Mobile usability",
      "Forms and conversion paths",
      "Page speed",
      "Content presentation",
      "New landing pages",
    ],
    note: [
      "This allows SEO and the website itself to develop together rather than treating them as completely separate projects.",
    ],
  },
  {
    title: "SEO Tracking & Reporting",
    body: [
      "SEO decisions should be based on what is actually happening in search.",
      "I monitor organic performance using first-party search and analytics data alongside keyword tracking and campaign-specific metrics.",
    ],
    listLabel: "Depending on the business, reporting can include:",
    list: [
      "Google Search Console performance",
      "Organic traffic",
      "Keyword visibility",
      "Important landing pages",
      "Local search performance",
      "Conversions and enquiries",
      "Technical issues",
      "Content performance",
      "Competitor movement",
      "Work completed and upcoming priorities",
    ],
    note: [
      "Reporting is designed to explain what changed, why it matters, and what we’re doing next rather than simply sending a monthly collection of charts.",
    ],
  },
];

const scenarios = [
  "If important pages aren’t being indexed correctly, publishing more blog content probably isn’t the first priority.",
  "If the technical foundation is healthy but competitors have substantially stronger service pages, improving those pages may produce a greater return.",
  "If rankings and traffic are increasing but enquiries aren’t, the problem may have shifted from visibility to conversion.",
  "And if your strongest pages are beginning to rank on page two, strengthening those existing opportunities may make more sense than starting another completely unrelated content campaign.",
];

const models = [
  {
    title: "Local SEO",
    body: [
      "Local SEO is important when proximity influences who a customer chooses.",
      "A Calgary business, for example, may need visibility across traditional organic results as well as Google Maps and its Google Business Profile.",
      "The strategy therefore needs to strengthen both the website and the business’s local search presence.",
    ],
  },
  {
    title: "Regional & National SEO",
    body: [
      "Not every customer cares whether the provider is five kilometres away.",
      "Businesses serving customers across Alberta or Canada may rely much more heavily on strong service pages, industry expertise, content, technical SEO, internal architecture, and authority.",
      "The website becomes the primary platform for capturing demand across a much larger market.",
    ],
  },
  {
    title: "B2B & Professional Services SEO",
    body: [
      "B2B and professional service SEO often involves lower search volumes but much higher-value enquiries.",
      "A search term doesn’t need thousands of searches per month to be commercially important.",
      "For an accounting firm, consultancy, financial service provider, or other professional business, a relatively small number of highly qualified searches can produce significantly more value than thousands of unrelated website visitors.",
      "That’s why I prioritize commercial relevance over raw traffic volume.",
    ],
  },
];

const months = [
  {
    title: "Month 1 — Audit, Research & Priorities",
    body: [
      "The campaign begins by establishing where your website stands today.",
      "I review your technical foundation, Google Search Console data, existing rankings, important pages, competitors, content, internal structure, and target market.",
      "This creates a prioritized roadmap based on the problems and opportunities actually present on your website.",
    ],
  },
  {
    title: "Month 2 — Fix & Optimize",
    body: [
      "Once priorities are clear, implementation becomes the focus.",
      "That can include technical fixes, restructuring important pages, improving on-page SEO, strengthening internal links, implementing schema, updating content, and addressing local search issues.",
      "The highest-impact work comes first.",
    ],
  },
  {
    title: "Month 3 — Expand & Measure",
    body: [
      "As the foundation improves, the campaign begins expanding into additional opportunities.",
      "That may mean creating new service or supporting pages, developing content, strengthening local visibility, improving authority, or pushing pages already beginning to move in search.",
      "Early Search Console and ranking data also starts informing future priorities.",
    ],
  },
  {
    title: "Month 4+ — Compound What Works",
    body: [
      "SEO doesn’t reset every month.",
      "The work completed earlier should create a stronger foundation for everything that follows.",
      "As more data becomes available, I continue improving pages gaining traction, address new opportunities, expand relevant content, strengthen authority, and adjust the strategy around what Google and your customers are actually responding to.",
    ],
  },
];

const goodFit = [
  "Offer services people actively search for",
  "Have valuable customer or client relationships",
  "Want to reduce reliance on paid acquisition over time",
  "Operate in a competitive search market",
  "Have the capacity to take on additional business",
  "Are prepared to invest beyond a few weeks",
  "Want someone to implement the work rather than only provide recommendations",
];

const pricingFactors = [
  "Your website’s current condition",
  "Existing organic visibility",
  "Market competition",
  "Number of services",
  "Target locations",
  "Technical requirements",
  "Content requirements",
  "Existing authority",
  "Website platform",
  "Commercial objectives",
];

const faqs: FaqItem[] = [
  {
    q: "How long does SEO take to work?",
    a: [
      "SEO typically develops over months rather than days or weeks.",
      "Some technical or on-page improvements can produce relatively quick movement, while competitive commercial searches can take considerably longer.",
      "Your existing website authority, competition, technical condition, content, target market, and starting rankings all affect the timeline.",
      "I provide a more realistic assessment after reviewing your website rather than promising the same timeframe to every business.",
    ],
  },
  {
    q: "How much do SEO services cost?",
    a: [
      "Ongoing SEO is priced as a monthly retainer based on the scope required for your website and market.",
      "Factors such as competition, website size, technical requirements, content needs, target locations, and current search visibility all affect the amount of work required.",
      "I don’t use fixed packages because different businesses rarely need exactly the same SEO work.",
    ],
  },
  {
    q: "Do you guarantee first-page or #1 Google rankings?",
    a: [
      "No.",
      "No SEO provider controls Google’s search results, and rankings can change as algorithms, competitors, websites, and search behaviour evolve.",
      "I focus on improving the factors we can influence and measuring whether organic visibility, relevant traffic, and business opportunities are moving in the right direction.",
    ],
  },
  {
    q: "Do you provide technical SEO?",
    a: [
      "Yes.",
      "Technical SEO is included where required as part of ongoing campaigns and can cover crawling, indexation, redirects, canonicalization, performance, structured data, internal architecture, migrations, and other technical issues affecting organic search.",
    ],
  },
  {
    q: "Do you provide local SEO?",
    a: [
      "Yes.",
      "For businesses targeting specific geographic markets, SEO campaigns can include Google Business Profile optimization, local keyword research, citations, reviews, location content, local landing pages, and other work designed to strengthen local search visibility.",
    ],
  },
  {
    q: "Do you create SEO content?",
    a: [
      "Yes.",
      "Content work can include improving existing service pages, creating new commercial pages, building industry or location content, updating articles, and developing supporting resources around genuine search opportunities.",
      "The goal is to create content that supports the wider SEO strategy rather than publishing articles simply to hit a monthly quota.",
    ],
  },
  {
    q: "Can you make SEO changes directly to my website?",
    a: [
      "Yes.",
      "One of the advantages of working with Scale SEO is that I can implement many technical, content, structural, and on-page improvements directly rather than only providing recommendations for another developer or marketing team.",
    ],
  },
  {
    q: "How do you measure whether SEO is working?",
    a: [
      "I look at a combination of Google Search Console data, organic traffic, keyword visibility, important landing pages, conversions, enquiries, and other metrics relevant to the business.",
      "Rankings are useful, but they’re considered alongside whether the website is becoming more visible to the right audience and generating meaningful opportunities.",
    ],
  },
  {
    q: "Do I have to sign a long-term SEO contract?",
    a: [
      "No.",
      "Ongoing SEO campaigns are month-to-month.",
      "Your website, accounts, content, data, and digital assets remain yours.",
    ],
  },
];

/* === Page =============================================================== */

export default function SeoServicePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services",
    description:
      "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic.",
    serviceType: "Search Engine Optimization",
    url: "https://scaleseo.co/services/seo",
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

      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroTop}>
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO" },
              ]}
            />
          </div>
          <h1 className={styles.title}>
            Calgary SEO Specialist for{" "}
            <span className={styles.accent}>B2B &amp; Professional Services</span>
          </h1>
          <p className={styles.sub}>
            We engineer high-intent search optimization that turns local
            organic visibility into premium corporate inquiries, signed
            contracts, and qualified pipeline revenue. No vanity metrics. No
            checklist fluff. Just founder-led search engineering built to
            dominate Calgary and Canadian markets.
          </p>
          <div className={styles.heroCtaGroup}>
            <a
              href="https://cal.com/corbinjensen-scaleseo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroCta}
            >
              <span>Book a Calgary Strategy Call</span>
              <span className={styles.arrow}>→</span>
            </a>
            <a href="#results" className={styles.heroCtaSecondary}>
              <span>Explore Our Alberta Case Studies</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualFrame}>
            <img
              src="/images/gsc-performance-mockup-3d.webp"
              alt="Google Search Console performance data showing clicks and impressions growth"
              className={styles.visualImg}
            />
            <div className={styles.visualBadge}>
              <span className={styles.visualBadgeValue}>+125%</span>
              <span className={styles.visualBadgeLabel}>
                Search impressions for an accounting firm
              </span>
            </div>
          </div>
          <span className={styles.visualCaption}>
            Real Google Search Console Data
          </span>
        </div>
        </div>

        {/* === TRUST BAR — thin strip attached to the bottom of the hero,
            no card/rounded treatment === */}
        <div className={styles.trustBar}>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">★</span>
            5.0 Client Rating | Founder-Led in Calgary, AB
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">✺</span>
            Advanced SEO Content Built for Google AI Overviews &amp; ChatGPT
          </span>
          <span className={styles.trustItem}>
            <span className={styles.trustIcon} aria-hidden="true">✓</span>
            Flexible Month-to-Month Retainers | No Long-Term Lock-in Contracts
          </span>
        </div>
      </header>

      {/* === SEO SHOULD GENERATE MORE THAN RANKINGS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <h2 className={`${hub.h2} reveal-up`}>
              SEO Should Generate <em>More Than Rankings</em>
            </h2>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={styles.leadInk}>
              Ranking higher is useful, but rankings alone don&rsquo;t grow a
              business.
            </p>
            <p>
              The purpose of an SEO campaign is to connect your website with
              the people already searching for the services you provide&mdash;and
              make sure they reach a page capable of turning that search into
              an enquiry.
            </p>
            <p className={styles.leadInk}>
              That means looking beyond individual keywords.
            </p>
            <p>
              A successful SEO strategy needs to consider what your potential
              customers search for, which pages should appear, whether Google
              can properly crawl and understand those pages, how your website
              compares with competing results, and what happens after somebody
              arrives.
            </p>
            <p>
              At Scale SEO, the objective is to build a search presence that
              connects:
            </p>
            <ol className={styles.flow} aria-label="How an SEO campaign connects searches to business">
              {flow.map((step, i) => (
                <li key={step} className={styles.flowStep}>
                  <span className={styles.flowNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.flowText}>{step}</span>
                </li>
              ))}
            </ol>
            <p>That requires several areas of SEO working together.</p>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — dark, wide service-area cards === */}
      <section
        className={`${hub.section} ${hub.dark}`}
        id="included"
        data-nav-theme="dark"
      >
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.labelOnDark}`}>
                What&rsquo;s Included
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What&rsquo;s Included in an <em>Ongoing SEO Campaign?</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>Every website starts from a different position.</p>
              <p>
                Some businesses have strong websites with weak content. Others
                have good content sitting on a poor technical foundation. Some
                rank well outside their target city but struggle locally.
                Others have hundreds of pages competing against each other.
              </p>
              <p>
                For that reason, I don&rsquo;t run SEO from a fixed monthly
                checklist.
              </p>
              <p>
                Instead, each campaign draws from the areas below based on what
                will have the greatest impact.
              </p>
            </div>
          </div>

          <div className={hub.serviceStack}>
            {areas.map((area, i) => (
              <article key={area.title} className={`${hub.serviceCard} reveal-up`}>
                <div className={hub.serviceMain}>
                  <div className={hub.serviceMeta}>
                    <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className={hub.serviceTitle}>{area.title}</h3>
                  <div className={hub.serviceBody}>
                    {area.body.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                  {area.note && (
                    <div className={styles.serviceNote}>
                      {area.note.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className={hub.servicePanel}>
                  <div className={hub.panelLabel}>{area.listLabel}</div>
                  <ul className={hub.checkList}>
                    {area.list.map((item) => (
                      <li key={item}>
                        <span className={hub.check} aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW I DECIDE WHAT TO WORK ON — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              How I Decide What to Work on <em>Each Month</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                SEO campaigns shouldn&rsquo;t be built around completing the
                same list of tasks every 30 days.
              </p>
              <p>Priorities change as your website improves.</p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {scenarios.map((text, i) => (
              <div key={text} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.scenario}>{text}</p>
              </div>
            ))}
          </div>

          <div className={`${styles.closing} reveal-up`}>
            <p>
              That&rsquo;s why I work from an evolving strategy rather than a
              fixed package.
            </p>
            <p>
              Each month, I look at the available search data, current
              rankings, completed work, competitive landscape, and business
              priorities to determine what should happen next.
            </p>
            <p className={styles.closingLead}>
              The campaign changes as the opportunity changes.
            </p>
          </div>
        </div>
      </section>

      {/* === LOCAL vs NATIONAL vs B2B — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Local SEO, National SEO &amp; B2B Search{" "}
              <em>Require Different Strategies</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                There isn&rsquo;t one SEO model that works equally well for
                every business.
              </p>
              <p>
                The strategy depends heavily on where your customers are, how
                they search, and how they choose a provider.
              </p>
            </div>
          </div>

          <div className={hub.threeGrid}>
            {models.map((m, i) => (
              <div key={m.title} className={`${hub.darkCard} reveal-up`}>
                <span className="index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={hub.cardTitle}>{m.title}</h3>
                <div className={hub.cardBody}>
                  {m.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.rowCta}>
            <Link href="/industries" className={hub.pillLime}>
              <span>Explore Industries I Work With</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === RESULTS — light, featured proof card === */}
      <section className={`${hub.section} ${hub.light}`} id="results">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className="section-label reveal-up" style={{ marginBottom: 24 }}>
                Real Client Results
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                SEO Results From <em>Real Campaigns</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>SEO should eventually show up in real search data.</p>
              <p>
                One of the professional service firms I work with came to Scale
                SEO with important commercial keywords sitting around page three
                of Google.
              </p>
              <p>
                After improving the site&rsquo;s technical foundation,
                service-page structure, internal linking, content, and overall
                search strategy, those terms moved into first-page positions.
              </p>
            </div>
          </div>

          <article className={`${styles.proofFeature} reveal-up`}>
            <div className={styles.proofMain}>
              <h3 className={styles.proofTitle}>
                Accounting Firm SEO: Position 30 → Top 10
              </h3>
              <div className={styles.metricRow}>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>30 → Top 10</span>
                  <span className={styles.metricLabel}>
                    Target commercial keyword rankings
                  </span>
                </div>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>+125%</span>
                  <span className={styles.metricLabel}>Search impressions</span>
                </div>
              </div>
              <div className={styles.proofBody}>
                <p>
                  The campaign focused on strengthening the pages most closely
                  connected to the firm&rsquo;s actual services rather than
                  chasing unrelated traffic.
                </p>
                <p>
                  As rankings improved, Google Search Console showed
                  substantial growth in search visibility and clicks, giving
                  the firm a stronger organic presence for the searches its
                  potential clients actually make.
                </p>
              </div>
              <div className={styles.proofLinks}>
                <Link href="/industries/accounting-firms" className={hub.pillLime}>
                  <span>See How SEO Works for Accounting Firms</span>
                  <span className={hub.arrow}>→</span>
                </Link>
                <Link href="/results" className={styles.textLinkOnDark}>
                  View More Client Results <span className={hub.arrow}>→</span>
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

      {/* === THE FIRST 90 DAYS — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.labelOnDark}`}>
                The First 90 Days
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What an SEO Campaign <em>Looks Like in Practice</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Every campaign is different, but the first few months usually
                establish the technical foundation, search strategy, priority
                pages, and measurement needed for longer-term growth.
              </p>
            </div>
          </div>

          <div className={styles.monthGrid}>
            {months.map((m) => (
              <div key={m.title} className={`${hub.darkCard} reveal-up`}>
                <h3 className={hub.cardTitle}>{m.title}</h3>
                <div className={hub.cardBody}>
                  {m.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHO IS ONGOING SEO A GOOD FIT FOR — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Who Is Ongoing SEO <em>a Good Fit For?</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Ongoing SEO makes the most sense when organic search can become
                a meaningful customer acquisition channel for your business.
              </p>
            </div>
          </div>

          <div className={styles.fitGrid}>
            <div className={`${hub.lightCard} reveal-up`}>
              <div className={styles.panelLabelInk}>
                It&rsquo;s generally a strong fit for businesses that:
              </div>
              <ul className={styles.fitList}>
                {goodFit.map((item) => (
                  <li key={item}>
                    <span className={hub.check} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.fitNote}>
                I primarily work with professional service and B2B businesses
                because qualified organic enquiries in these markets can have
                significant long-term value.
              </p>
              <Link href="/industries" className={hub.pillDark}>
                <span>Explore Industries</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </div>

            <div className={`${hub.darkCard} reveal-up`}>
              <h3 className={hub.cardTitle}>
                When Ongoing SEO Might Not Be the Right Fit
              </h3>
              <div className={hub.cardBody}>
                <p>
                  SEO isn&rsquo;t automatically the right acquisition channel
                  for every business.
                </p>
                <p>
                  If you need enquiries immediately, paid search may be more
                  appropriate in the short term.
                </p>
                <p>
                  If very few people search for what you sell, another
                  acquisition channel may offer a better opportunity.
                </p>
                <p>
                  And if you already have an internal marketing or development
                  team and simply need an independent assessment of your
                  website, you may not need an ongoing SEO retainer at all.
                </p>
                <p>
                  In that situation, a standalone audit can give your team a
                  prioritized roadmap to work from.
                </p>
              </div>
              <Link href="/services/seo-audits" className={hub.pillLime}>
                <span>Explore Standalone SEO Audits</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PRICING — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} reveal-up`}>
            <h2 className={hub.h2}>
              How Monthly <em>SEO Pricing Works</em>
            </h2>
            <p className={styles.asideBody}>
              SEO campaigns are scoped around the business rather than sold as
              Bronze, Silver, or Gold packages.
            </p>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={hub.servicePanel}>
              <div className={hub.panelLabel}>
                The amount of work required depends on factors such as:
              </div>
              <ul className={`${hub.checkList} ${styles.twoColList}`}>
                {pricingFactors.map((item) => (
                  <li key={item}>
                    <span className={hub.check} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              After reviewing your website and search landscape, I&rsquo;ll
              explain what I think needs to be done and what an appropriate
              monthly scope looks like.
            </p>
            <p className={hub.lead}>
              All ongoing SEO engagements are month-to-month with no long-term
              lock-in contract.
            </p>
            <p>
              For businesses that aren&rsquo;t ready for ongoing SEO,
              standalone audits are also available.
            </p>
            <div className={styles.buttonRow}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={hub.buttonPrimaryDark}
              >
                <span>Book a Strategy Call</span>
                <span className={hub.arrow}>→</span>
              </a>
              <Link href="/services/seo-audits" className={hub.buttonSecondaryDark}>
                <span>View SEO Audit Services</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ — light === */}
      <ServicesFaq
        items={faqs}
        title={
          <>
            Frequently Asked Questions <em>About SEO Services</em>
          </>
        }
      />

      {/* === CTA — dark === */}
      <section className={hub.cta} data-nav-theme="dark">
        <h2 className={hub.ctaHeadline}>
          Find Out What&rsquo;s Limiting{" "}
          <span className={hub.accent}>Your Organic Growth</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>
            If your website isn&rsquo;t generating enough qualified traffic
            from Google, I&rsquo;ll help you identify where the biggest
            opportunities and constraints are.
          </p>
          <p>
            We&rsquo;ll look at your current search visibility, website,
            competitors, target customers, and growth goals to determine whether
            ongoing SEO makes sense and what I would prioritize first.
          </p>
          <p>If we&rsquo;re a good fit, I&rsquo;ll explain the recommended scope and why.</p>
          <p>If we&rsquo;re not, I&rsquo;ll tell you that too.</p>
        </div>
        <p className={styles.ctaPromise}>
          Month-to-month SEO · No long-term contracts · Managed directly from
          Calgary
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
          Looking for an independent assessment rather than ongoing SEO?{" "}
          <Link href="/services/seo-audits" className={styles.ctaNoteLink}>
            Explore SEO Audits →
          </Link>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
