import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import RevealOnScroll from "../../components/RevealOnScroll";

// Hero from the industries hub, sections from the shared /services hub
// system, editorial rows + founder block from the About page; styles below
// are only the pieces specific to this case study.
import hub from "../../services/page.module.css";
import ind from "../../industries/page.module.css";
import about from "../../about/page.module.css";
import styles from "../caseStudy.module.css";
import Contact from "../../components/ContactCta";

export const metadata: Metadata = {
  title: "Empire Accountants SEO Case Study | Scale SEO",
  description:
    "How ongoing SEO helped a Brisbane accounting firm improve search visibility, move priority keywords onto page one, and generate more organic enquiries.",
  alternates: { canonical: "/results/empire-accountants" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const CLIENT_URL = "https://www.empireaccountants.com.au/";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Content ============================================================ */

const tags = ["SEO Campaign", "Technical SEO", "Content Strategy", "Local SEO", "Structured Data"];

const servicesProvided = [
  "Ongoing SEO",
  "Service Page Optimization",
  "Website Architecture & Internal Linking",
  "Accounting Content Strategy",
  "Technical SEO & Structured Data",
  "Local SEO",
];

const problems: { problem: string; solution: string; tone: string }[] = [
  {
    problem:
      "Several commercially important accounting services had limited search visibility.",
    solution:
      "Priority service pages were expanded around the questions, services, and search intent of prospective clients.",
    tone: "toneBlue",
  },
  {
    problem:
      "Parts of the website needed clearer page targeting and a more structured relationship between services, industries, articles, and the firm.",
    solution:
      "The service structure and internal linking were rebuilt to direct authority toward commercially valuable pages.",
    tone: "tonePink",
  },
  {
    problem:
      "The firm’s expertise wasn’t visible online in the way potential clients actually search.",
    solution:
      "Supporting articles were built around client questions and connected back to the relevant services.",
    tone: "toneNavy",
  },
  {
    problem:
      "Pages needed to be easier for search engines to crawl, index, and understand.",
    solution:
      "Technical and on-page issues were addressed, with business, service, article, and breadcrumb structured data added.",
    tone: "toneOrange",
  },
  {
    problem:
      "Empire needed a stronger presence for relevant accounting searches in Brisbane.",
    solution:
      "Google Business Profile, content, and location signals were strengthened to build genuine local relevance.",
    tone: "toneStone",
  },
];

const headlineStats = [
  { value: "Page 5 → Page 1", label: "Target keyword rankings" },
  { value: "2×", label: "Search impressions and clicks" },
  { value: "Weekly", label: "New client enquiries" },
];

const priorityServices = [
  "Business accounting",
  "Tax accounting and tax planning",
  "Business advisory",
  "SMSF accounting",
  "Bookkeeping",
  "Xero accounting",
];

const strategy = [
  {
    title: "Service Page Optimization",
    body: [
      "Priority service pages were reviewed and expanded around the questions, services, and search intent relevant to prospective clients.",
      "Rather than simply adding keywords, the focus was on making each page a stronger resource for someone actually considering that service.",
      "This included improving pages covering areas such as SMSFs, tax accounting, bookkeeping, business advisory, and other priority accounting services.",
    ],
  },
  {
    title: "Website Architecture & Internal Linking",
    body: [
      "The website’s service structure was improved to create clearer relationships between the main accounting services hub and individual service pages.",
      "Internal links were also strengthened between relevant services, industry pages, articles, and team profiles.",
      "This helped make important pages easier for both users and search engines to discover while directing more internal authority toward commercially valuable services.",
    ],
  },
  {
    title: "Accounting Content Strategy",
    body: [
      "Educational content was developed around topics potential clients research before engaging an accountant.",
      "Rather than publishing articles simply to increase blog volume, topics were selected based on their relationship to Empire’s services and target clients.",
      "This created supporting content around the firm’s areas of expertise while providing natural opportunities to direct readers toward relevant accounting services.",
    ],
  },
  {
    title: "Technical SEO & Structured Data",
    body: [
      "Technical and on-page issues were reviewed throughout the website to improve how pages could be crawled, indexed, and understood.",
      "Structured data was also implemented and refined across the site, including appropriate business, service, article, and breadcrumb markup.",
      "The objective was to create a technically cleaner website with clearer information about Empire Accountants, its services, and the people behind the firm.",
    ],
  },
  {
    title: "Local SEO",
    body: [
      "Local search was another important part of the campaign.",
      "Empire’s Google Business Profile, website content, services, and location signals were reviewed to strengthen the firm’s presence for relevant accounting searches in Brisbane.",
      "The strategy has focused on building genuine local relevance rather than creating large numbers of repetitive location pages.",
    ],
  },
];

const journey = [
  "Search Question",
  "Helpful Content",
  "Relevant Service",
  "Empire Accountant",
];

const results = [
  {
    value: "Page 5 → Page 1",
    label: "Priority Google rankings",
    body: "Target searches that previously had limited visibility have moved from deeper search results onto page one of Google.",
  },
  {
    value: "2×",
    label: "Search impressions and clicks",
    body: "Organic search visibility and traffic have grown as more of the website’s service and content pages have begun appearing for relevant searches.",
  },
  {
    value: "Weekly",
    label: "New client enquiries",
    body: "Empire Accountants now receives regular new client opportunities through its online presence, helping connect increased search visibility with actual business growth.",
  },
];

const drivers = [
  "Technical improvements created stronger foundations.",
  "Better service pages gave important commercial searches stronger landing pages.",
  "Supporting content expanded the topics the website could be discovered for.",
  "Internal linking connected that information back to priority services.",
  "Local SEO strengthened the relationship between Empire Accountants and the Brisbane market.",
  "And clearer business, author, and structured data signals helped better represent the firm and its expertise online.",
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/results/empire-accountants#webpage",
      url: "https://scaleseo.co/results/empire-accountants",
      name: "Empire Accountants SEO Case Study | Scale SEO",
      description: "See how ongoing SEO helped Empire Accountants improve organic search visibility, move priority keywords onto page one and generate more enquiries.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/empire-accountants#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/empire-accountants#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/empire-accountants#case-study",
      url: "https://scaleseo.co/results/empire-accountants",
      headline: "Empire Accountants SEO Case Study",
      description: "How ongoing SEO helped a Brisbane accounting firm improve search visibility, move priority keywords onto page one and generate more organic enquiries.",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/empire-accountants#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Empire Accountants",
        url: CLIENT_URL
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "SEO case study",
        "accounting firm SEO",
        "SEO for accountants",
        "accounting SEO",
        "professional services SEO"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/empire-accountants#breadcrumb",
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
          name: "Empire Accountants",
          item: "https://scaleseo.co/results/empire-accountants"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function EmpireAccountantsCaseStudy() {
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
          { name: "Empire Accountants" },
        ]}
        breadcrumbSchema={false}
        title={
          <>
            Empire Accountants{" "}
            <span className="title-block">SEO Case Study</span>
          </>
        }
        icon="caseStudy"
        actions={
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer">
            <span>Visit Empire Accountants</span>
            <span>→</span>
          </a>
        }
      >
        <p>
          How ongoing SEO helped a Brisbane accounting firm improve search
          visibility, move priority keywords onto page one, and generate more
          organic enquiries.
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
          src="/images/empire-accountants-website.webp"
          alt="Empire Accountants website: Dedicated Business Accountants in Brisbane Since 2015"
          className={styles.showcaseImg}
        />
      </figure>

      {/* === OVERVIEW — copy left, services + results right === */}
      <section className={`${hub.section} ${hub.light} ${styles.overviewSection}`}>
        <div className={styles.overview}>
          <div className={`${styles.overviewBody} reveal-up`}>
            <div className="section-label">Overview</div>
            <p>
              Empire Accountants is an accounting and business advisory firm
              based in Brisbane, Australia, providing services across tax,
              accounting, business advisory, bookkeeping, SMSFs, and other
              areas of financial management.
            </p>
            <p>
              When I began working with Empire Accountants, the opportunity
              wasn&rsquo;t simply to generate more website traffic. The priority
              was to improve visibility for the commercial accounting services
              and searches most relevant to the clients the firm wanted to
              attract.
            </p>
            <p>
              The firm already had an established website, service offering,
              and experienced team. The challenge was translating that
              expertise into stronger organic search visibility.
            </p>
          </div>

          <aside className={`${styles.overviewAside} reveal-up`}>
            <div className="section-label">Services</div>
            <ul className={styles.asideList}>
              {servicesProvided.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="section-label">Priority Areas</div>
            <ul className={styles.asideList}>
              {priorityServices.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="section-label">Industry</div>
            <ul className={styles.asideList}>
              <li>Accounting &amp; Advisory</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* === PROBLEM / SOLUTION — coloured cards === */}
      <section className={`${hub.section} ${hub.light} ${styles.workSection}`}>
        <div className={styles.workSplit}>
          <div className={styles.workAside}>
            <div className="section-label reveal-up">The Work</div>
            <h2 className={`${hub.h2} ${styles.bigH2} reveal-up`}>
              Problems Solved
            </h2>
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
          </div>
        </div>
      </section>

      {/* === THE WORK — dark, copy + content journey === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>The Work</div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              Turning Accounting Expertise Into Searchable Content
            </h2>
            <p className={hub.lead}>
              One of the biggest opportunities was making the firm&rsquo;s
              existing expertise more visible online.
            </p>
            <p>
              Empire Accountants already had experienced accountants and
              advisors. SEO helped connect that expertise with the way potential
              clients actually search.
            </p>
            <p>
              For example, priority service pages were expanded to explain not
              only what Empire offers, but the situations in which a business or
              individual may need that service.
            </p>
            <p>
              Supporting articles were then developed around more specific
              questions and topics related to those services.
            </p>
          </div>

          <div className={`${styles.journey} reveal-up`}>
            <p className={hub.panelLabel}>The result is a more connected website structure:</p>
            <ol className={styles.journeyList}>
              {journey.map((j, i) => (
                <li
                  key={j}
                  className={i === journey.length - 1 ? styles.journeyEnd : undefined}
                >
                  <span className={styles.journeyNum}>{pad(i)}</span>
                  {j}
                </li>
              ))}
            </ol>
            <p className={styles.journeyNote}>
              This approach allows informational content to support commercial
              service pages rather than operating as a separate blog with little
              connection to the firm&rsquo;s actual services.
            </p>
          </div>
        </div>
      </section>

      {/* === THE RESULTS — light, metric cards + GSC === */}
      <section className={`${hub.section} ${hub.light}`} id="results">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The Results</div>
              <h2 className={`${hub.h2} reveal-up`}>SEO Results</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                The campaign has produced measurable improvements in Empire
                Accountants&rsquo; organic search performance.
              </p>
            </div>
          </div>

          <div className={styles.resultGrid}>
            {results.map((r, i) => (
              <article
                key={r.label}
                className={`${styles.resultCard} ${i === 0 ? styles.resultLead : ""} reveal-up`}
              >
                <span className={styles.resultValue}>{r.value}</span>
                <span className={styles.resultLabel}>{r.label}</span>
                <p className={styles.resultBody}>{r.body}</p>
              </article>
            ))}
          </div>

          <figure className={`${styles.figure} reveal-up`}>
            <div className={styles.figureFrame}>
              <img
                src="/images/google-search-console-empire-accountants-data-case-study.png"
                alt="Google Search Console performance report for Empire Accountants"
                className={styles.figureImg}
                loading="lazy"
              />
            </div>
            <figcaption className={styles.caption}>
              Google Search Console performance showing growth in organic search
              visibility during the SEO campaign.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* === WHY IT WORKED — dark, stacked drivers === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark} ${about.label}`}>
                Why It Worked
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                What Drove the <em>Improvement?</em>
              </h2>
            </div>
            <div className={`${styles.whyIntro} reveal-up`}>
              <p>
                The growth didn&rsquo;t come from chasing one keyword or making
                one technical change.
              </p>
              <p className={styles.whyIntroStrong}>It came from improving the website as a whole.</p>
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
              Each improvement supported the others.
            </p>
          </div>
        </div>
      </section>

      {/* === ONGOING SEO — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>Ongoing SEO</div>
              <h2 className={`${hub.h2} reveal-up`}>Continuing to Build Organic Visibility</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>SEO for Empire Accountants is an ongoing engagement.</p>
            <p>
              As the website has grown, the focus has expanded beyond initial
              ranking improvements toward strengthening visibility for specific
              services the firm wants to grow.
            </p>
            <p>
              That includes areas such as SMSF accounting, tax strategy,
              business advisory, and other higher-value accounting services.
            </p>
            <p>
              Search performance is reviewed regularly to identify where pages
              are gaining visibility, where opportunities are emerging, and
              where additional improvements can support the firm&rsquo;s
              broader business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* === ACCOUNTING SEO — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark} ${about.label}`}>
                Accounting SEO
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                SEO Experience Built Around <em>Accounting Firms</em>
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              Working closely with Empire Accountants has provided direct
              experience with the challenges involved in marketing an accounting
              firm through organic search.
            </p>
            <p>
              Accounting SEO requires more than targeting phrases such as
              &ldquo;accountant near me.&rdquo;
            </p>
            <p>
              Potential clients research complex questions around tax, business
              structures, SMSFs, bookkeeping, compliance, advisory, and
              financial management before deciding who to contact.
            </p>
            <p>
              The website therefore needs to balance search visibility with
              accuracy, expertise, trust, and clear service positioning.
            </p>
            <p>
              That experience now informs how Scale SEO approaches organic
              search for accounting and professional service firms more broadly.
            </p>
            <Link href="/industries/accounting-firms" className={hub.pillLime}>
              <span>Explore SEO for Accounting Firms</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === THE SEO SPECIALIST — light, portrait + copy === */}
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
            <div className={`section-label ${about.label}`}>The SEO Specialist</div>
            <h2 className={hub.h2}>Strategy &amp; Implementation by Corbin Jensen</h2>
            <div className={about.prose}>
              <p>
                SEO strategy and implementation for Empire Accountants are
                managed directly by{" "}
                <strong className={about.strongInk}>Corbin Jensen</strong>,
                founder and SEO specialist at Scale SEO.
              </p>
              <p>
                The engagement has included hands-on technical SEO, service-page
                optimization, content strategy, internal linking, structured
                data, local SEO, and ongoing search performance analysis.
              </p>
              <p>
                There is no separate account manager between the strategy and
                the work being implemented.
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
