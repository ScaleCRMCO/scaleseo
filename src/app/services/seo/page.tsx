import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SketchIcon from "../../components/SketchIcon";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Section/card system shared with the /services hub so both pages match.
import hub from "../page.module.css";
import styles from "./page.module.css";
import cs from "../../results/caseStudy.module.css";
import Contact from "../../components/ContactCta";

export const metadata: Metadata = {
  title: "Search Engine Optimization Services Calgary | Scale SEO",
  description:
    "Ongoing SEO services for professional service and B2B businesses. Technical SEO, content, on-page and local SEO managed directly from Calgary.",
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

const included: { title: string; body: string; icon: string }[] = [
  {
    title: "SEO Strategy & Research",
    body: "Keyword research, search intent, competitor analysis, existing rankings, content gaps, and keyword-to-page mapping help determine where the strongest organic opportunities exist.",
    icon: "search",
  },
  {
    title: "Technical SEO",
    body: "I identify and resolve issues affecting crawling, indexation, rendering, performance, redirects, canonicalization, structured data, sitemaps, migrations, and other technical foundations.",
    icon: "ledger",
  },
  {
    title: "On-Page SEO & Site Structure",
    body: "Important service and landing pages are improved around search intent, content quality, headings, internal linking, metadata, topical relevance, site architecture, and usability.",
    icon: "b2b",
  },
  {
    title: "SEO Content",
    body: "Content strategy can include improving existing service pages, creating new commercial pages, building useful guides, developing industry content, and consolidating pages that overlap or compete.",
    icon: "article",
  },
  {
    title: "Local SEO",
    body: "For businesses targeting specific geographic markets, campaigns can include Google Business Profile optimization, local search research, Google Maps visibility, citations, reviews, location content, and local authority signals.",
    icon: "about",
  },
  {
    title: "Website & Conversion Improvements",
    body: "Where required, I can improve layouts, calls to action, navigation, trust signals, forms, landing pages, and other elements affecting how organic visitors interact with your website.",
    icon: "browser",
  },
  {
    title: "Tracking & Reporting",
    body: "Performance is monitored through Google Search Console, analytics, keyword visibility, important landing pages, conversions, enquiries, local search performance, and campaign-specific metrics.",
    icon: "caseStudy",
  },
];

const scenarioTones = ["toneBlue", "tonePink", "toneNavy", "toneOrange"];

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

/* === Schema — WebPage + Service + BreadcrumbList graph, linked to the
   global #website and #organization nodes in layout.tsx. Includes this
   page's BreadcrumbList, so <Breadcrumbs> is rendered with schema={false}.
   The FAQPage schema comes from <ServicesFaq>. === */
const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo#webpage",
      "url": "https://scaleseo.co/services/seo",
      "name": "Search Engine Optimization Services | Scale SEO",
      "description": "Ongoing search engine optimization services for professional service and B2B businesses. Scale SEO combines technical SEO, on-page optimization, content, local SEO and website improvements to grow qualified organic traffic.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo#service",
      "name": "Search Engine Optimization Services",
      "alternateName": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "url": "https://scaleseo.co/services/seo",
      "description": "Ongoing SEO services combining SEO strategy, keyword research, technical SEO, on-page optimization, content strategy, local SEO, internal linking, website improvements and performance reporting.",
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
        "audienceType": "Professional service and B2B businesses"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Campaign Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Strategy and Keyword Research"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Content Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal Linking and Site Architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website and Conversion Improvements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Tracking and Reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo#breadcrumb",
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
          "name": "SEO Services",
          "item": "https://scaleseo.co/services/seo"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function SeoServicePage() {


  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "SEO" },
        ]}
        breadcrumbSchema={false}
        title={
          <>
            SEO Services in <span className="title-block">Calgary</span>
          </>
        }
        icon="search"
        actions={
          <>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span>Book a Strategy Call</span>
              <span>→</span>
            </a>
            <a href="#results">
              <span>View Client Results</span>
              <span>↓</span>
            </a>
          </>
        }
      >
        <p>
          Scale SEO provides ongoing SEO campaign management for professional
          service and B2B businesses in Calgary and across Canada.
        </p>
      </PageHero>

      {/* === WHAT'S INCLUDED — alternating full-width bands === */}
      <section className={styles.inclHead} id="included">
        <div className="section-label reveal-up">What&rsquo;s Included</div>
        <h2 className={`${hub.h2} ${hub.bigH2} reveal-up`}>
          What&rsquo;s Included in an Ongoing SEO Campaign?
        </h2>
      </section>
      {included.map((item, i) => (
        <section
          key={item.title}
          className={`${styles.inclBand} ${i % 2 ? styles.inclAlt : ""}`}
        >
          <div className={styles.inclTop}>
            <span className={styles.inclNum}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={`${styles.inclTitle} reveal-up`}>{item.title}</h3>
            <SketchIcon name={item.icon} className={styles.inclIcon} />
          </div>
          <p className={`${styles.inclBody} reveal-up`}>{item.body}</p>
        </section>
      ))}

      {/* === HOW I DECIDE WHAT TO WORK ON — coloured cards === */}
      <section className={`${hub.section} ${hub.light} ${cs.workSection}`}>
        <div className={cs.workSplit}>
          <div className={cs.workAside}>
            <div className="section-label reveal-up">Monthly Priorities</div>
            <h2 className={`${hub.h2} ${cs.bigH2} ${hub.comboH2} reveal-up`}>
              How I Decide What to Work on Each Month
            </h2>
            <div className={`${hub.comboIntro} reveal-up`}>
              <p>
                SEO campaigns shouldn&rsquo;t be built around completing the
                same list of tasks every 30 days.
              </p>
              <p>Priorities change as your website improves.</p>
            </div>
          </div>
          <div className={cs.cards}>
            {scenarios.map((text, i) => (
              <article key={text} className={`${cs.card} ${cs[scenarioTones[i % scenarioTones.length]]} reveal-up`}>
                <div className={cs.cardLabel}>Scenario {String(i + 1).padStart(2, "0")}</div>
                <p className={cs.cardSolution}>{text}</p>
              </article>
            ))}
            <article className={`${cs.card} ${cs.toneStone} reveal-up`}>
              <div className={cs.cardLabel}>The Approach</div>
              <p className={cs.cardProblem}>
                That&rsquo;s why I work from an evolving strategy rather than a
                fixed package. Each month, I look at the available search data,
                current rankings, completed work, competitive landscape, and
                business priorities to determine what should happen next.
              </p>
              <p className={cs.cardSolution}>
                The campaign changes as the opportunity changes.
              </p>
            </article>
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
                SEO with important commercial keywords sitting around page five
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
                Accounting Firm SEO: Page 5 → Page 1
              </h3>
              <div className={styles.metricRow}>
                <div className={styles.metricBox}>
                  <span className={styles.metricValue}>Page 5 → Page 1</span>
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

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
