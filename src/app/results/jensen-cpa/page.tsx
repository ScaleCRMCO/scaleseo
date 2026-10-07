import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import RevealOnScroll from "../../components/RevealOnScroll";

// Same building blocks as the other case studies: hero from the industries
// hub, sections from the /services hub system, editorial rows + founder
// block from the About page, shared case study styles.
import hub from "../../services/page.module.css";
import ind from "../../industries/page.module.css";
import about from "../../about/page.module.css";
import styles from "../caseStudy.module.css";
import Contact from "../../components/ContactCta";

export const metadata: Metadata = {
  title: "Jensen CPA SEO Case Study | Scale SEO",
  description:
    "Building a stronger digital presence for a Calgary CPA firm through website redevelopment, SEO, content strategy, and Google Ads.",
  alternates: { canonical: "/results/jensen-cpa" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const CLIENT_URL = "https://www.jensencpa.ca/";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* Dashed image slot shown until the real screenshot is supplied. */
function Placeholder({ label, dark }: { label: string; dark?: boolean }) {
  return (
    <div className={`${styles.placeholder} ${dark ? styles.placeholderDark : ""}`}>
      <span className={styles.placeholderTag}>Image coming soon</span>
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

/* === Content ============================================================ */

const tags = ["Website Redesign", "SEO Campaign", "Content Strategy", "Technical SEO", "Google Ads"];

const priorityAreas = [
  "Corporate tax",
  "Monthly bookkeeping",
  "Personal tax",
  "Fractional CFO & controller services",
];

const problems: { problem: string; solution: string; tone: string }[] = [
  {
    problem:
      "The existing website didn’t fully represent the depth of the firm’s services, expertise, or target clients.",
    solution:
      "The site was redesigned and expanded with clear pathways between services, client types, team, pricing, and resources.",
    tone: "toneBlue",
  },
  {
    problem:
      "Several commercially important accounting services needed stronger dedicated pages.",
    solution:
      "Core services were expanded into detailed landing pages built around specific client needs and search intent.",
    tone: "tonePink",
  },
  {
    problem:
      "Educational content was limited, and the firm’s expertise wasn’t connected to what potential clients search for.",
    solution:
      "Articles were built around Alberta tax and business questions tied directly to Jensen CPA’s services.",
    tone: "toneNavy",
  },
  {
    problem:
      "The website architecture needed to be expanded and its technical foundations strengthened.",
    solution:
      "Page targeting, internal linking, crawl and indexation, structured data, and breadcrumbs were improved as the site grew.",
    tone: "toneOrange",
  },
  {
    problem:
      "Organic visibility was limited compared with the opportunity in the Calgary market.",
    solution:
      "Targeted Google Ads captured high-intent searches and generated new client conversions while organic visibility grew.",
    tone: "toneStone",
  },
];

const headlineStats = [
  { value: "+227%", label: "Average daily search impressions" },
  { value: "+92%", label: "Average daily organic clicks" },
  { value: "4 Months", label: "Initial SEO growth period" },
];

const resultStats = [
  { value: "+227%", label: "Average daily search impressions" },
  { value: "+92%", label: "Average daily organic clicks" },
  { value: "700–1,100", label: "Impressions on typical recent days" },
];

type Row = {
  title: string;
  before: string[];
  listLabel?: string;
  list?: string[];
  after?: string[];
};

const strategy: Row[] = [
  {
    title: "Website Redesign & Expansion",
    before: [
      "The Jensen CPA website was substantially redesigned and expanded to better represent the firm’s services, team, expertise, and positioning.",
      "The new structure created clearer pathways between:",
    ],
    list: [
      "Core accounting services",
      "Business and professional client pages",
      "Team and expertise information",
      "Pricing",
      "Educational resources",
      "Contact and consultation pages",
    ],
    after: [
      "The objective wasn’t simply a visual redesign.",
      "The website architecture was built to give important services and topics their own place within the site while making it easier for prospective clients to understand how Jensen CPA could help them.",
    ],
  },
  {
    title: "Dedicated Accounting Service Pages",
    before: [
      "Core services were expanded into detailed landing pages built around specific client needs and search intent.",
      "Priority areas included:",
    ],
    list: [
      "Corporate tax",
      "Monthly bookkeeping",
      "Personal tax",
      "Fractional CFO & controller services",
    ],
    after: [
      "Each page was developed around its own topic rather than expecting the homepage to rank for every accounting service.",
      "This created a stronger foundation for Jensen CPA to build visibility across a wider range of commercially relevant searches.",
    ],
  },
  {
    title: "Small Business & Professional Client Targeting",
    before: [
      "The website was also expanded around the types of clients Jensen CPA wants to attract.",
      "Dedicated sections now support Calgary small businesses and professional clients alongside the firm’s individual accounting services.",
      "This gives search engines more context about who Jensen CPA serves, while giving prospective clients a clearer route to information relevant to their situation.",
    ],
  },
  {
    title: "Accounting Content Strategy",
    before: [
      "Educational content became another important part of the strategy.",
      "Articles were developed around specific tax and business questions relevant to Alberta corporations and business owners, including topics such as:",
    ],
    list: [
      "Small business tax deductions",
      "Sole proprietorships vs. corporations",
      "Passive investment income",
      "Section 85 rollovers",
      "Alberta payroll compliance",
    ],
    after: [
      "Content topics were selected based on their relationship to Jensen CPA’s actual services and expertise rather than simply chasing search volume.",
      "That allows informational visibility to support the firm’s broader commercial search presence.",
    ],
  },
  {
    title: "Technical SEO & Site Architecture",
    before: [
      "The website’s technical and on-page foundations were improved alongside the content expansion.",
      "Work has included:",
    ],
    list: [
      "Page targeting and metadata",
      "Internal linking",
      "Website architecture",
      "Crawl and indexation improvements",
      "Structured data",
      "Breadcrumbs",
      "Business entity information",
      "Author and professional information",
      "Search performance monitoring",
    ],
    after: [
      "As the website expands, new pages are connected into the wider architecture rather than operating as isolated pieces of content.",
    ],
  },
  {
    title: "Google Ads",
    before: [
      "SEO has been supported by targeted Google Ads campaigns designed to capture high-intent searches while organic visibility continues to grow.",
      "The campaigns have generated new client conversions for Jensen CPA, providing another acquisition channel alongside organic search.",
      "Paid search data can also provide useful information about the types of searches and services associated with actual enquiries, helping inform the broader search strategy.",
    ],
  },
];

const queries = [
  { query: "CPA Calgary", position: "7.31" },
  { query: "CPA in Calgary", position: "4.72" },
  { query: "Accountants Calgary", position: "9.91" },
  { query: "Calgary Accounting Firms", position: "10.01" },
];

const articles = [
  { impressions: "6,215", title: "Passive Income & Small Business Deduction", position: "6.52" },
  { impressions: "3,103", title: "Small Business Tax Deductions", position: "7.13" },
  { impressions: "2,218", title: "Sole Proprietor vs. Corporation", position: "6.56" },
  { impressions: "1,047", title: "Section 85 Rollovers", position: "7.58" },
];

const contentChain = [
  "Search Question",
  "Expert Content",
  "Relevant Accounting Service",
  "Jensen CPA",
];

const pathways = [
  "Someone looking for a corporate tax accountant can now land directly on detailed corporate tax information.",
  "A growing company looking for higher-level financial support can discover Jensen CPA’s fractional CFO services.",
  "Small-business owners can find resources specifically relevant to their needs.",
  "Business owners researching complex tax questions can discover the firm through educational content before they’re ready to engage an accountant.",
  "And Google Ads can direct high-intent searches toward landing pages that already clearly explain the firm’s services.",
];

const drivers = [
  "Website redevelopment created a stronger foundation for future growth.",
  "Dedicated service pages expanded the number of commercially relevant searches Jensen CPA could compete for.",
  "Content strategy created visibility around questions Alberta business owners are actively researching.",
  "Internal linking and site architecture connected those resources with the firm’s priority services.",
  "Technical SEO and structured data improved how the growing website is organized and represented to search engines.",
  "Google Ads added another channel for capturing high-intent searches and generating client opportunities.",
];

const formula = ["Services", "Expertise", "People", "Content", "Location", "Search Intent"];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/results/jensen-cpa#webpage",
      url: "https://scaleseo.co/results/jensen-cpa",
      name: "Jensen CPA SEO Case Study | Scale SEO",
      description: "See how website redevelopment, SEO, content strategy and Google Ads helped Jensen CPA significantly increase organic search visibility in Calgary.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/jensen-cpa#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/jensen-cpa#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/jensen-cpa#case-study",
      url: "https://scaleseo.co/results/jensen-cpa",
      headline: "Jensen CPA SEO Case Study",
      description: "How website redevelopment, ongoing SEO, accounting content strategy and Google Ads helped a Calgary CPA firm increase average daily Google Search impressions by 227% during the initial campaign.",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/jensen-cpa#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/#corbin-jensen"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Jensen CPA",
        url: CLIENT_URL
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "accounting firm SEO",
        "CPA SEO",
        "SEO for accountants",
        "Calgary accounting SEO",
        "professional services SEO",
        "SEO case study"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/jensen-cpa#breadcrumb",
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
          name: "Results",
          item: "https://scaleseo.co/results"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jensen CPA",
          item: "https://scaleseo.co/results/jensen-cpa"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function JensenCpaCaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      {/* === HERO === */}
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Results", href: "/results" },
          { name: "Jensen CPA" },
        ]}
        breadcrumbSchema={false}
        title={
          <>
            Jensen CPA <span className="title-block">SEO Case Study</span>
          </>
        }
        icon="caseStudy"
        actions={
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer">
            <span>Visit Jensen CPA</span>
            <span>→</span>
          </a>
        }
      >
        <p>
          Building a stronger digital presence for a Calgary CPA firm through
          website redevelopment, SEO, content strategy, and Google Ads.
        </p>
        <ul className={styles.tags}>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </PageHero>

      {/* === FULL-WIDTH WEBSITE IMAGE === */}
      <figure className={styles.showcase}>
        <img
          src="/images/jensen-cpa-website.webp"
          alt="Jensen CPA website: Fractional CFO Services for Calgary Businesses"
          className={styles.showcaseImg}
        />
      </figure>

      {/* === OVERVIEW === */}
      <section className={`${hub.section} ${hub.light} ${styles.overviewSection}`}>
        <div className={styles.overview}>
          <div className={`${styles.overviewBody} reveal-up`}>
            <div className="section-label">Overview</div>
            <p>
              Jensen CPA is a Chartered Professional Accounting firm based in
              Calgary, Alberta. Founded in 2017, the firm provides corporate
              tax, monthly bookkeeping, personal tax, and fractional CFO and
              controller services for businesses and individuals.
            </p>
            <p>
              When I began working with Jensen CPA, the firm already had an
              established reputation and experienced accounting team. The
              opportunity was to build a digital presence that better reflected
              the quality of the firm behind it&mdash;and create a stronger
              foundation for attracting new clients through search.
            </p>
          </div>

          <aside className={`${styles.overviewAside} reveal-up`}>
            <div className="section-label">Services</div>
            <ul className={styles.asideList}>
              {strategy.map((x) => (
                <li key={x.title}>{x.title}</li>
              ))}
            </ul>
            <div className="section-label">Priority Areas</div>
            <ul className={styles.asideList}>
              {priorityAreas.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="section-label">Industry</div>
            <ul className={styles.asideList}>
              <li>Accounting &amp; Tax</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* === PROBLEM / SOLUTION — coloured cards === */}
      <section className={`${hub.section} ${hub.light} ${styles.workSection}`}>
        <div className={styles.workSplit}>
          <div className={styles.workAside}>
            <div className="section-label reveal-up">The Work</div>
            <h2 className={`${hub.h2} ${styles.bigH2} reveal-up`}>Problems Solved</h2>
          </div>
          <div className={styles.cards}>
            {problems.map((c) => (
              <article key={c.solution} className={`${styles.card} ${styles[c.tone]} reveal-up`}>
                <div className={styles.cardLabel}>Problem</div>
                <p className={styles.cardProblem}>{c.problem}</p>
                <div className={styles.cardLabel}>Solution</div>
                <p className={styles.cardSolution}>{c.solution}</p>
              </article>
            ))}
            <figure className={`${styles.figure} reveal-up`}>
              <div className={styles.figureFrame}>
                <img
                  src="/images/jensen-cpa-bookkeeping-service-page.webp"
                  alt="Jensen CPA monthly bookkeeping services page"
                  className={styles.figureImg}
                  loading="lazy"
                />
              </div>
              <figcaption className={styles.caption}>
                Example of a dedicated service page: Monthly Bookkeeping
                Services in Calgary.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* === THE RESULTS — light === */}
      <section className={`${hub.section} ${hub.light}`} id="results">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The Results</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Building Organic Visibility in a Competitive Calgary Market
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Within the first four months of the engagement, Jensen CPA&rsquo;s
                organic search visibility increased substantially.
              </p>
              <p>
                Comparing equal 28-day periods, average daily Google Search
                impressions increased from approximately 240 to 784 per day.
              </p>
              <p>
                Average daily organic clicks increased from 2.8 to 5.4 per day
                over the same comparison period.
              </p>
            </div>
          </div>

          <p className={`${styles.resultsIntro} reveal-up`}>That represents:</p>
          <div className={styles.resultGrid}>
            {resultStats.map((r, i) => (
              <article
                key={r.label}
                className={`${styles.resultCard} ${i === 0 ? styles.resultLead : ""} reveal-up`}
              >
                <span className={styles.resultValue}>{r.value}</span>
                <span className={`${styles.resultLabel} ${styles.resultLabelBare}`}>{r.label}</span>
              </article>
            ))}
          </div>

          <p className={`${styles.resultsNote} reveal-up`}>
            The growth has also extended beyond branded searches, with Jensen CPA
            gaining first-page visibility for commercially relevant Calgary
            accounting searches.
          </p>

          <figure className={`${styles.figure} reveal-up`}>
            <div className={styles.figureFrame}>
              <img
                src="/images/jensen-cpa-google-search-console.webp"
                alt="Google Search Console performance report for Jensen CPA"
                className={styles.figureImg}
                loading="lazy"
              />
            </div>
            <figcaption className={styles.caption}>
              Google Search Console performance showing the growth in organic
              search visibility during the initial SEO campaign.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* === SEARCH VISIBILITY — light, query cards === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>Search Visibility</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Growing Visibility for Calgary Accounting Searches
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>The increase in overall impressions is only one part of the result.</p>
              <p>
                Jensen CPA has also developed visibility for competitive
                non-branded searches directly related to its Calgary accounting
                services.
              </p>
            </div>
          </div>

          <p className={`${styles.resultsIntro} reveal-up`}>
            Examples from Google Search Console include:
          </p>
          <div className={styles.queryGrid}>
            {queries.map((q) => (
              <article key={q.query} className={`${styles.queryCard} reveal-up`}>
                <span className={styles.queryText}>&ldquo;{q.query}&rdquo;</span>
                <div className={styles.queryPos}>
                  <span className={styles.queryPosValue}>{q.position}</span>
                  <span className={styles.queryPosLabel}>Average position</span>
                </div>
              </article>
            ))}
          </div>

          <p className={`${styles.resultsNote} reveal-up`}>
            These searches are particularly important because they represent
            people actively looking for accounting firms and CPAs in the Calgary
            market rather than people already searching for Jensen CPA by name.
          </p>

          <figure className={`${styles.figure} reveal-up`}>
            <Placeholder label="Search query / ranking visual" />
            <figcaption className={styles.caption}>
              Examples of non-branded Calgary accounting searches generating
              visibility for Jensen CPA.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* === CONTENT GROWTH — dark, article cards + chain === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>Content Growth</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Turning Accounting Expertise Into Organic Visibility
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                The expanded content strategy has also created new ways for
                potential clients to discover Jensen CPA before they&rsquo;re
                ready to contact an accountant.
              </p>
              <p>
                Several educational resources began generating significant
                search visibility during the initial campaign.
              </p>
            </div>
          </div>

          <div className={styles.queryGrid}>
            {articles.map((a) => (
              <article key={a.title} className={`${styles.articleCard} reveal-up`}>
                <span className={styles.articleValue}>
                  {a.impressions}
                  <small>Impressions</small>
                </span>
                <span className={styles.articleTitle}>{a.title}</span>
                <span className={styles.articleMeta}>
                  Average Google position: {a.position}
                </span>
              </article>
            ))}
          </div>

          <div className={`${styles.chainBlock} reveal-up`}>
            <div className={styles.whyIntro}>
              <p className={styles.whyIntroStrong}>
                These articles aren&rsquo;t treated as standalone traffic pieces.
              </p>
              <p>
                Relevant content is connected back to Jensen CPA&rsquo;s services
                and areas of expertise through internal linking, helping create a
                broader information architecture around corporate tax, business
                accounting, and financial management.
              </p>
            </div>
            <ol className={styles.chain}>
              {contentChain.map((c) => (
                <li key={c} data-sep="→">
                  <span>{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* === WEBSITE STRATEGY — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>Website Strategy</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Building More Than a Higher-Traffic Website
              </h2>
            </div>
            <div className={`${styles.proseList} reveal-up`}>
              <p>
                The goal isn&rsquo;t simply to increase the number of
                impressions displayed in Google Search Console.
              </p>
              <p className={about.strongInk}>
                The larger objective is to build a website capable of supporting
                Jensen CPA&rsquo;s growth over the long term.
              </p>
            </div>
          </div>

          <div className={styles.lightList}>
            {pathways.map((p, i) => (
              <div key={p} className={`${styles.driver} reveal-up`}>
                <span className={styles.driverNum}>{pad(i)}</span>
                <p>{p}</p>
              </div>
            ))}
            <p className={`${styles.driversClose} reveal-up`}>
              The website has evolved from a relatively limited online presence
              into a broader search and client acquisition platform.
            </p>
          </div>
        </div>
      </section>

      {/* === WHY IT WORKED — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark} ${about.label}`}>
                Why It Worked
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What Drove the <em>Growth?</em>
              </h2>
            </div>
            <div className={`${styles.whyIntro} reveal-up`}>
              <p>There wasn&rsquo;t one SEO change responsible for the increase.</p>
              <p className={styles.whyIntroStrong}>
                The growth came from improving multiple parts of the website
                together.
              </p>
            </div>
          </div>

          <div className={styles.drivers}>
            {drivers.map((d, i) => (
              <div key={d} className={`${styles.driver} reveal-up`}>
                <span className={styles.driverNum}>{pad(i)}</span>
                <p>{d}</p>
              </div>
            ))}
            <p className={`${styles.driversClose} reveal-up`}>
              Together, those improvements created a much broader search presence
              than optimizing a handful of existing pages would have achieved.
            </p>
          </div>
        </div>
      </section>

      {/* === THE FIRST FOUR MONTHS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The First Four Months</div>
              <h2 className={`${hub.h2} reveal-up`}>Early Results, With More Room to Grow</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              This case study represents approximately the first four months of
              ongoing work with Jensen CPA.
            </p>
            <p className={about.strongInk}>That context matters.</p>
            <p>
              The website and content strategy are still developing, and many of
              the pages contributing to the firm&rsquo;s search presence are
              relatively new.
            </p>
            <p>
              The next stage is focused on continuing to strengthen visibility
              around commercially important services, expanding topical
              authority, improving pages based on real Search Console data, and
              turning increased visibility into more qualified enquiries.
            </p>
            <p>
              The initial results provide a measurable foundation for that
              continued growth.
            </p>
          </div>
        </div>
      </section>

      {/* === ACCOUNTING SEO EXPERIENCE — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark} ${about.label}`}>
                Accounting SEO Experience
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                SEO Built Around How <em>Accounting Firms Grow</em>
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              Working directly with accounting firms has shaped how I approach
              SEO for professional services.
            </p>
            <p>
              Accounting websites need to do more than target phrases such as
              &ldquo;accountant near me.&rdquo;
            </p>
            <p>
              Potential clients may research corporate tax, bookkeeping, business
              structures, payroll, tax planning, financial reporting,
              restructuring, and advisory services before deciding which firm to
              contact.
            </p>
            <p>
              At the same time, accounting content needs to accurately represent
              complex financial topics and make the expertise of the
              professionals behind the firm clear.
            </p>
            <p>The SEO strategy therefore needs to connect:</p>
            <ol className={styles.chain}>
              {formula.map((f) => (
                <li key={f} data-sep="+">
                  <span>{f}</span>
                </li>
              ))}
            </ol>
            <p>
              Jensen CPA demonstrates how those elements can be built into one
              connected website strategy.
            </p>
            <Link href="/industries/accounting-firms" className={hub.pillLime}>
              <span>Explore SEO for Accounting Firms</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === PROJECT LEAD — light, portrait + copy === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${about.founder}`}>
          <div className={`${about.portrait} ${styles.portraitSmall} reveal-up`}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, founder of Scale SEO"
              className={about.portraitImg}
              loading="lazy"
            />
            <div className={about.portraitCaption}>
              <span>Corbin Jensen</span>
              <span>Scale SEO</span>
            </div>
          </div>
          <div className={`${about.founderBody} reveal-up`}>
            <div className={`section-label ${about.label}`}>Project Lead</div>
            <h2 className={hub.h2}>Strategy &amp; Implementation by Corbin Jensen</h2>
            <div className={about.prose}>
              <p>
                The Jensen CPA engagement is managed directly by{" "}
                <strong className={about.strongInk}>Corbin Jensen</strong>,
                founder and SEO specialist at Scale SEO.
              </p>
              <p>
                My work with the firm has included website redevelopment, SEO
                strategy, technical SEO, service-page development, content
                planning and optimization, internal linking, structured data,
                search performance analysis, and Google Ads management.
              </p>
              <p>
                Because strategy and implementation are handled directly, search
                data can be turned into website changes without passing
                recommendations between separate account management, SEO,
                content, and development teams.
              </p>
            </div>
            <Link href="/corbin-jensen" className={hub.pillDark}>
              <span>About Corbin Jensen</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
