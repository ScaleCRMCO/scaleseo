import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
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
        "@id": "https://scaleseo.co/#corbin-jensen"
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

      {/* === HERO — dark, copy + stats left, site screenshot right === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={ind.heroContent}>
          <div className={ind.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Results", href: "/results" },
                { name: "Empire Accountants" },
              ]}
              schema={false}
            />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <h1 className={ind.title}>
                Empire Accountants{" "}
                <span className="title-block">SEO Case Study</span>
              </h1>
              <p className={styles.heroLead}>
                How ongoing SEO helped a Brisbane accounting firm improve search
                visibility, move priority keywords onto page one, and generate
                more organic enquiries.
              </p>
              <p className={styles.heroMeta}>Accounting &amp; Advisory · Brisbane, Australia</p>
              <a
                href={CLIENT_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={ind.heroCta}
              >
                <span>Visit Empire Accountants</span>
                <span className={ind.arrow}>→</span>
              </a>
            </div>

            <div className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <span />
                <span />
                <span />
                <em>empireaccountants.com.au</em>
              </div>
              <img
                src="/images/empireaccountants-hero-image.png"
                alt="Empire Accountants website homepage"
                className={styles.browserImg}
              />
            </div>
          </div>

          <div className={styles.statRow}>
            {headlineStats.map((s, i) => (
              <div key={s.label} className={`${styles.stat} ${i === 0 ? styles.statLead : ""}`}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* === THE CLIENT — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The Client</div>
              <h2 className={`${hub.h2} reveal-up`}>About Empire Accountants</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Empire Accountants is an accounting and business advisory firm
              based in Brisbane, Australia.
            </p>
            <p>
              The firm works primarily with businesses and provides services
              across tax, accounting, business advisory, bookkeeping, SMSFs, and
              other areas of financial management.
            </p>
            <p>
              When I began working with Empire Accountants, the opportunity
              wasn&rsquo;t simply to generate more website traffic. The priority
              was to improve visibility for the commercial accounting services
              and searches most relevant to the clients the firm wanted to
              attract.
            </p>
          </div>
        </div>
      </section>

      {/* === THE CHALLENGE — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>The Challenge</div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              Building Visibility for High-Value Accounting Services
            </h2>
            <p className={hub.lead}>
              Empire Accountants already had an established website, service
              offering, and experienced team.
            </p>
            <p>
              The challenge was translating that expertise into stronger organic
              search visibility.
            </p>
            <p>
              Several commercially important services had limited search
              visibility, while parts of the website needed clearer page
              targeting, stronger content, improved internal linking, and a more
              structured relationship between services, industries, articles,
              and the accounting firm itself.
            </p>
          </div>

          <div className={`${styles.panel} reveal-up`}>
            <p className={hub.panelLabel}>Priority areas included services such as:</p>
            <ol className={styles.panelList}>
              {priorityServices.map((s, i) => (
                <li key={s}>
                  <span className={styles.panelNum}>{pad(i)}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={hub.inner}>
          <p className={`${styles.objective} reveal-up`}>
            The objective was to build a stronger organic search presence around
            these services while attracting more relevant business and advisory
            enquiries.
          </p>
        </div>
      </section>

      {/* === THE STRATEGY — light, editorial rows === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The Strategy</div>
              <h2 className={`${hub.h2} reveal-up`}>The SEO Strategy</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>There wasn&rsquo;t one isolated change behind the improvement.</p>
              <p>
                The campaign has involved ongoing work across technical SEO,
                service pages, content, website structure, local search, and
                structured data.
              </p>
            </div>
          </div>

          <div className={about.rows}>
            {strategy.map((s, i) => (
              <article key={s.title} className={`${about.row} reveal-up`}>
                <div className={about.rowHead}>
                  <span className={about.rowNum}>{pad(i)}</span>
                  <h3 className={about.rowTitle}>{s.title}</h3>
                </div>
                <div className={about.rowBody}>
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
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
