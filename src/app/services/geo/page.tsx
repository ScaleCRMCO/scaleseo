import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";

// Hero from the industries hub, sections from the shared /services hub
// system; styles below are only the pieces specific to this page.
import hub from "../page.module.css";
import ind from "../../industries/page.module.css";
import styles from "./page.module.css";
import Contact from "../../components/ContactCta";

export const metadata: Metadata = {
  title: "AI Search Optimization & GEO Services | Scale SEO",
  description:
    "AI search optimization and GEO services for professional service and B2B businesses. Improve visibility across Google AI Overviews, ChatGPT and AI-powered search.",
  alternates: { canonical: "/services/geo" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const pad = (i: number) => String(i + 1).padStart(2, "0");

const geoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/geo#webpage",
      url: "https://scaleseo.co/services/geo",
      name: "AI Search Optimization & Generative Engine Optimization | Scale SEO",
      description: "AI search optimization and GEO services for professional service and B2B businesses. Improve how your website is understood across Google, ChatGPT and AI-powered search.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      about: {
        "@id": "https://scaleseo.co/services/geo#service"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/services/geo#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/geo#service",
      name: "AI Search Optimization & Generative Engine Optimization",
      alternateName: [
        "Generative Engine Optimization",
        "GEO",
        "AI Search Optimization",
        "AI SEO"
      ],
      serviceType: "AI Search Optimization and Generative Engine Optimization",
      url: "https://scaleseo.co/services/geo",
      description: "AI search optimization and Generative Engine Optimization services focused on technical accessibility, entity clarity, structured data, content quality and visibility across traditional and AI-powered search.",
      provider: {
        "@id": "https://scaleseo.co/#organization"
      },
      areaServed: {
        "@type": "Country",
        name: "Canada"
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Professional service and B2B businesses"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Search Optimization Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Crawlability and Technical SEO"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entity and Business Optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Structured Data Optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Content Optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Expertise and Trust Signal Optimization"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Visibility Monitoring"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/geo#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Search Optimization",
          item: "https://scaleseo.co/services/geo"
        }
      ]
    }
  ]
};

/* === Content ============================================================ */

const understand = [
  "Who your business is",
  "What services you provide",
  "What topics you have expertise in",
  "Who is behind your content",
  "Why your information can be trusted",
];

const flow = [
  "Strong SEO",
  "Clear Content",
  "Defined Entities",
  "Demonstrated Expertise",
  "Broader Search Visibility",
];

type Included = {
  title: string;
  before: string[];
  listLabel?: string;
  list?: string[];
  note?: string;
  after?: string[];
};

const included: Included[] = [
  {
    title: "AI Crawlability & Technical SEO",
    before: [
      "Your content needs to be accessible before a search or AI platform can use it.",
      "I review technical factors including crawlability, indexation, robots directives, XML sitemaps, canonicalization, internal linking, redirects, site architecture, and relevant AI crawler access.",
    ],
    note: "The goal is simple: make sure the content you want discovered can actually be found and understood.",
  },
  {
    title: "Entity & Business Clarity",
    before: [
      "Search and AI systems should be able to clearly understand who your business is, what it does, where it operates, and who is behind it.",
    ],
    listLabel: "This can involve strengthening:",
    list: [
      "Organization information",
      "Services and service areas",
      "Founder and team profiles",
      "Author information",
      "About pages",
      "Business information consistency",
      "Relationships between important pages and entities",
    ],
    after: [
      "For professional service businesses, this is particularly important because expertise is often connected to both the company and the people behind it.",
    ],
  },
  {
    title: "Structured Data",
    before: [
      "Structured data provides search engines with machine-readable information about the content and entities represented on your website.",
      "Depending on the site, I may implement or improve schema for organizations, people, services, articles, breadcrumbs, local businesses, and other relevant entities.",
    ],
    note: "Schema isn’t a shortcut to AI citations. It is one part of making the website’s information clearer and more consistent for machines to interpret.",
  },
  {
    title: "Clear, Useful Content",
    before: [
      "Good AI search content shouldn’t sound like it was written for a machine.",
    ],
    listLabel:
      "I focus on making important information easier for both people and search systems to understand through:",
    list: [
      "Clear headings",
      "Direct explanations",
      "Useful definitions",
      "Focused sections",
      "Supporting examples",
      "Relevant evidence",
      "Authoritative sources",
      "Logical internal links",
    ],
    after: [
      "The objective is useful content that clearly demonstrates what your business knows—not pages stuffed with phrases designed to attract an AI crawler.",
    ],
  },
  {
    title: "Expertise & Trust Signals",
    before: [
      "For professional service businesses, it’s important that users and search systems can understand who is providing the information and why they have relevant expertise.",
    ],
    listLabel: "Depending on the website, that can include:",
    list: [
      "Clear author attribution",
      "Professional biographies",
      "Relevant credentials",
      "First-hand examples",
      "Original insights",
      "Citations to authoritative sources",
      "Publication and update dates",
      "Accurate company information",
      "Relevant external profiles and references",
    ],
    after: [
      "These signals are particularly important when your content covers complex financial, legal, technical, or other professional topics.",
    ],
  },
  {
    title: "AI Visibility Monitoring",
    before: [
      "Where reliable data is available, I can monitor how the business is appearing across AI-powered search experiences.",
    ],
    listLabel: "This can include:",
    list: [
      "AI citations",
      "Pages being referenced",
      "Topics associated with citations",
      "AI referral traffic",
      "Brand visibility",
      "Changes in visibility over time",
    ],
    after: [
      "AI search reporting is still developing, so I distinguish between verified data and observed visibility rather than presenting AI mentions as fixed keyword rankings.",
    ],
  },
];

const platforms = [
  {
    id: "google-ai-overviews",
    title: "Google AI Overviews",
    body: "AI-generated answers are increasingly integrated directly into Google Search, making traditional SEO and AI visibility closely connected.",
  },
  {
    id: "chatgpt-search",
    title: "ChatGPT Search",
    body: "ChatGPT can search the web and reference external sources when answering relevant questions, creating another way for useful business content to be discovered.",
  },
  {
    id: "microsoft-copilot",
    title: "Microsoft Copilot",
    body: "Microsoft combines Bing’s search infrastructure with AI-powered answers, making strong search fundamentals relevant across both traditional Bing and Copilot experiences.",
  },
  {
    id: "perplexity",
    title: "Perplexity & Other AI Search Tools",
    body: "Platforms such as Perplexity provide additional ways for users to research businesses, services, and complex topics through AI-generated answers.",
  },
];

const research = [
  "Which type of professional they need",
  "How a particular service works",
  "What requirements or regulations apply",
  "How different services compare",
  "What questions they should ask",
  "Which providers have relevant expertise",
];

const measures = [
  {
    title: "AI Citations & Mentions",
    body: [
      "Relevant searches and prompts can be monitored to identify where the business or its website appears within AI-generated answers.",
    ],
  },
  {
    title: "Referenced Pages",
    body: [
      "When a website is cited, we can look at which pages are being referenced and what topics those pages are associated with.",
    ],
  },
  {
    title: "AI Referral Traffic",
    body: [
      "Website analytics can identify traffic arriving from certain AI platforms, helping show when AI discovery leads to an actual website visit.",
    ],
  },
  {
    title: "Organic Search Performance",
    body: [
      "Traditional SEO data remains important.",
      "Google Search Console impressions, clicks, rankings, organic landing pages, enquiries, and conversions provide context for whether the wider search strategy is improving.",
    ],
  },
];

const controllable = [
  "Technical accessibility",
  "Website structure",
  "Content quality",
  "Entity clarity",
  "Structured data",
  "Author and expert information",
  "Supporting evidence and sources",
  "Internal linking",
  "Topical depth",
  "Overall search visibility",
];

function CheckList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`${hub.checkList} ${dark ? "" : styles.checkInk} ${items.length > 6 ? styles.checkTwo : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className={hub.check} aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* === Page =============================================================== */

export default function GeoServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoJsonLd) }}
      />

      {/* === HERO — dark, full-width left-aligned === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={ind.heroContent}>
          <div className={ind.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "AI Search Optimization" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={ind.title}>
            AI Search Optimization &amp;{" "}
            <span className="title-block">Generative Engine Optimization</span>
          </h1>

          <div className={ind.heroBottom}>
            <div className={ind.heroMain}>
              <div className={ind.sub}>
                <p>
                  AI tools like ChatGPT and Google AI Overviews are changing how
                  people find businesses and information online.
                </p>
                <p>
                  AI search optimization (GEO) helps make your website easier
                  for search engines and AI platforms to find, understand, and
                  reference when answering relevant questions.
                </p>
                <p>
                  At Scale SEO, GEO works alongside traditional SEO to
                  strengthen your website&rsquo;s content, technical
                  foundations, and overall search visibility.
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
                <Link href="/contact" className={ind.heroCtaSecondary}>
                  <span>Send a Message</span>
                  <span className={ind.arrow}>→</span>
                </Link>
              </div>
              <p className={styles.trust}>
                Independent SEO Specialist · Professional Services &amp; B2B ·
                No Lock-In Contracts
              </p>
            </div>

            <nav className={ind.heroIndex} aria-label="AI search platforms">
              {platforms.map((p, i) => (
                <a key={p.id} href={`#${p.id}`} className={ind.heroIndexItem}>
                  <span className={ind.heroIndexNum}>{pad(i)}</span>
                  {p.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* === THE SHIFT IN SEARCH — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                The Shift in Search
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Search Is Changing</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Google is no longer the only place people go to find information,
              compare businesses, or research a service.
            </p>
            <p>
              Potential customers can now ask ChatGPT, Google AI Overviews,
              Microsoft Copilot, Perplexity, and other AI tools detailed
              questions and receive an answer directly.
            </p>
            <p>Sometimes those answers reference websites and businesses as sources.</p>
            <p className={styles.inkStrong}>
              That creates another opportunity for your business to be
              discovered.
            </p>
            <p>
              Traditional Google rankings still matter. AI search optimization
              expands your SEO strategy to account for the new ways people are
              searching and finding information.
            </p>
          </div>
        </div>
      </section>

      {/* === GEO EXPLAINED — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>GEO Explained</div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              What Is Generative Engine Optimization?
            </h2>
            <p className={hub.lead}>
              Generative Engine Optimization (GEO) is the process of improving
              your website&rsquo;s visibility across AI-powered search
              experiences.
            </p>
            <p>
              You may also hear it called AI search optimization, AI SEO, or LLM
              optimization.
            </p>
          </div>

          <div className={`${styles.understand} reveal-up`}>
            <p className={hub.panelLabel}>
              In simple terms, the goal is to make it easier for search engines
              and AI platforms to understand:
            </p>
            <ol className={styles.understandList}>
              {understand.map((u, i) => (
                <li key={u}>
                  <span className={styles.understandNum}>{pad(i)}</span>
                  {u}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={`${hub.inner} ${styles.afterSplit} reveal-up`}>
          <p>
            This can involve technical SEO, content improvements, structured
            data, clear authorship, website architecture, and stronger business
            and entity signals.
          </p>
          <p className={styles.caveat}>
            GEO can&rsquo;t guarantee that ChatGPT or another AI platform will
            cite your website. Instead, the goal is to give your business the
            strongest practical foundation for visibility as AI becomes a larger
            part of how people search.
          </p>
        </div>
      </section>

      {/* === SEO + GEO — light, flow diagram === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>SEO + GEO</div>
              <h2 className={`${hub.h2} reveal-up`}>GEO Doesn&rsquo;t Replace SEO</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                There isn&rsquo;t a switch that makes a website &ldquo;optimized
                for AI.&rdquo;
              </p>
              <p>
                Many of the same fundamentals that help a website perform in
                Google also make its information easier for AI-powered search
                systems to discover and understand.
              </p>
            </div>
          </div>

          <ol className={`${styles.flow} reveal-up`}>
            {flow.map((f, i) => (
              <li
                key={f}
                className={`${styles.flowStep} ${i === flow.length - 1 ? styles.flowEnd : ""}`}
              >
                <span className={styles.flowNum}>{pad(i)}</span>
                {f}
              </li>
            ))}
          </ol>

          <div className={`${styles.twoCol} reveal-up`}>
            <p className={ind.leadInk}>
              That&rsquo;s why I treat GEO as an extension of SEO rather than a
              completely separate marketing channel.
            </p>
            <div className={styles.twoColBody}>
              <p>
                Technical accessibility, useful content, clear website
                structure, identifiable expertise, structured data, and
                consistent information about your business all contribute to a
                stronger search presence.
              </p>
              <p>
                The difference is that we&rsquo;re now considering visibility
                beyond the traditional list of Google results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — dark, service stack === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                What&rsquo;s Included
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What&rsquo;s Included in AI Search Optimization?
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Scale SEO looks at the technical, content, and authority signals
                that can influence how clearly your business is understood
                across traditional and AI-powered search.
              </p>
            </div>
          </div>

          <div className={hub.serviceStack}>
            {included.map((item, i) => (
              <article key={item.title} className={`${hub.serviceCard} reveal-up`}>
                <div className={hub.serviceMain}>
                  <div className={hub.serviceMeta}>
                    <span className="index">{pad(i)}</span>
                  </div>
                  <h3 className={hub.serviceTitle}>{item.title}</h3>
                  <div className={hub.serviceBody}>
                    {item.before.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {item.after?.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                {item.list ? (
                  <div className={hub.servicePanel}>
                    <p className={hub.panelLabel}>{item.listLabel}</p>
                    <CheckList items={item.list} dark />
                  </div>
                ) : (
                  <div className={`${hub.servicePanel} ${styles.notePanel}`}>
                    <p>{item.note}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === PLATFORMS — light, 2x2 === */}
      <section className={`${hub.section} ${hub.light}`} id="platforms">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>Platforms</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Search Visibility Across AI Platforms
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Different AI platforms find, retrieve, and present information in
                different ways.
              </p>
              <p>
                Rather than building a strategy around one tool, Scale SEO
                considers the broader AI search landscape.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {platforms.map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className={`${hub.lightCard} ${styles.platformCard} reveal-up`}
              >
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{p.title}</h3>
                <div className={hub.cardBody}>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={`${styles.closing} reveal-up`}>
            <p className={styles.closingLead}>The platforms will continue to change.</p>
            <p>
              That&rsquo;s why I focus on strengthening the underlying website
              rather than chasing a tactic designed for one specific AI model.
            </p>
          </div>
        </div>
      </section>

      {/* === PROFESSIONAL SERVICES — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>
              Professional Services
            </div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              AI Search Optimization for Professional Services
            </h2>
            <p className={hub.lead}>
              AI search is particularly relevant for businesses where customers
              research extensively before choosing a provider.
            </p>
            <p>
              Accounting firms, consultants, advisors, and other professional
              service businesses often need to demonstrate expertise before
              someone is ready to make contact.
            </p>
          </div>

          <div className={`${styles.understand} reveal-up`}>
            <p className={hub.panelLabel}>
              Potential clients may use search and AI tools to research:
            </p>
            <ol className={styles.understandList}>
              {research.map((r, i) => (
                <li key={r}>
                  <span className={styles.understandNum}>{pad(i)}</span>
                  {r}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={`${hub.inner} ${styles.afterSplit} reveal-up`}>
          <p>
            This makes AI search optimization about more than getting your
            company name mentioned.
          </p>
          <p className={styles.onDarkStrong}>
            Your website needs to clearly communicate what you do, what you
            know, who provides the expertise, and why that information can be
            trusted.
          </p>
          <Link href="/industries" className={hub.pillLime}>
            <span>Explore Industries</span>
            <span className={hub.arrow}>→</span>
          </Link>
        </div>
      </section>

      {/* === ACCOUNTING FIRMS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                Accounting Firms
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                AI Search &amp; GEO for Accounting Firms
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Accounting firms are a good example of where SEO and AI search
              increasingly overlap.
            </p>
            <p>
              Potential clients research detailed questions around corporate
              tax, bookkeeping, business structures, payroll, financial
              reporting, tax planning, and advisory services before contacting
              an accountant.
            </p>
            <p>
              A well-structured accounting website can connect those questions
              with relevant services, qualified professionals, accurate
              educational content, and authoritative sources.
            </p>
            <p>
              Scale SEO&rsquo;s existing accounting SEO experience means AI
              search optimization can be incorporated into a broader organic
              strategy rather than treated as a disconnected service.
            </p>
            <Link href="/industries/accounting-firms" className={hub.pillDark}>
              <span>Explore SEO for Accounting Firms</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === MEASUREMENT — dark, 2x2 === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Measurement
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                How Do You Measure AI Search Visibility?
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                AI search doesn&rsquo;t currently have one universal equivalent
                of a traditional Google ranking report.
              </p>
              <p>
                Different platforms provide different levels of information, so
                I use several signals to understand how visibility is
                developing.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {measures.map((m, i) => (
              <article key={m.title} className={`${hub.darkCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{m.title}</h3>
                <div className={hub.cardBody}>
                  {m.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className={`${styles.objective} reveal-up`}>
            The objective isn&rsquo;t to chase the highest possible number of AI
            mentions. It&rsquo;s to improve relevant search visibility that
            supports the business.
          </p>
        </div>
      </section>

      {/* === EXPECTATIONS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${styles.label}`}>Expectations</div>
            <h2 className={`${hub.h2} ${styles.inkH2}`}>Can You Guarantee AI Citations?</h2>
            <p className={ind.leadInk}>
              No&mdash;and you should be cautious of anyone who does.
            </p>
            <p>
              ChatGPT, Google AI Overviews, Copilot, Perplexity, and other AI
              platforms ultimately decide which sources they use and reference.
            </p>
            <p>
              Those answers can also change depending on the question, platform,
              available sources, location, and other factors outside the control
              of a website owner.
            </p>
          </div>

          <div className={`${hub.lightCard} ${styles.controlCard} reveal-up`}>
            <p className={styles.controlLabel}>
              What we can improve are the things your business controls:
            </p>
            <CheckList items={controllable} />
            <p className={styles.controlClose}>
              That&rsquo;s where Scale SEO focuses its work.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY SCALE SEO — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Why Scale SEO
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                AI Search Optimization <em>Without the Hype</em>
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              AI search is moving quickly, but that doesn&rsquo;t mean
              businesses need to rebuild their entire marketing strategy every
              time a new AI tool launches.
            </p>
            <p>
              I approach GEO the same way I approach SEO: start with the
              fundamentals, understand the business, make evidence-based
              improvements, and measure what we can actually verify.
            </p>
            <p>
              Scale SEO is an independent, founder-led SEO practice, so
              you&rsquo;ll work directly with me throughout the process.
            </p>
            <p>
              AI search work can be incorporated into an ongoing SEO campaign or
              approached as part of a broader review of your website&rsquo;s
              technical, content, and entity foundations.
            </p>
            <p className={styles.trust}>
              Direct SEO specialist access · No outsourcing · Month-to-month ·
              No long-term contracts
            </p>
          </div>
        </div>
      </section>

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
