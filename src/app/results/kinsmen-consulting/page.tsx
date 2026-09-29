import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import RevealOnScroll from "../../components/RevealOnScroll";

// Same building blocks as the Empire Accountants case study: hero from the
// industries hub, sections from the /services hub system, editorial rows +
// founder block from the About page, shared case study styles.
import hub from "../../services/page.module.css";
import ind from "../../industries/page.module.css";
import about from "../../about/page.module.css";
import styles from "../caseStudy.module.css";

export const metadata: Metadata = {
  title: "Kinsmen Consulting SEO Case Study | Scale SEO",
  description:
    "How SEO and website development helped a Calgary concrete contractor generate more than $400,000 in revenue from new projects over six months.",
  alternates: { canonical: "/results/kinsmen-consulting" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const CLIENT_URL = "https://www.kinsmenconsulting.ca";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Content ============================================================ */

const headlineStats = [
  { value: "$400K+", label: "Revenue from generated projects" },
  { value: "6 Months", label: "Measurement period" },
  { value: "Residential + Commercial", label: "High-value concrete projects" },
];

type Row = { title: string; before: string[]; list?: string[]; after?: string[] };

const strategy: Row[] = [
  {
    title: "SEO-Focused Website Development",
    before: [
      "The website was developed to give important concrete services their own clear place within the site architecture.",
      "This created dedicated pathways for residential, commercial, and specialty concrete work rather than relying on a single general services page.",
      "The website also needed to make it easy for potential customers to understand Kinsmen’s capabilities, review relevant projects, and request a quote.",
    ],
  },
  {
    title: "High-Value Service Targeting",
    before: [
      "Keyword and market research were used to identify the types of searches most closely connected to valuable projects.",
      "The strategy included services such as:",
    ],
    list: [
      "Concrete driveways",
      "Concrete patios",
      "Sidewalks and walkways",
      "Retaining walls",
      "Structural concrete",
      "Commercial concrete",
      "Parkades",
      "Sport courts",
      "Gas station concrete",
      "EV charging infrastructure",
    ],
    after: [
      "This allowed the website to build relevance around specific services while still strengthening Kinsmen’s broader visibility as a Calgary concrete contractor.",
    ],
  },
  {
    title: "Residential & Commercial SEO",
    before: [
      "Residential and commercial customers don’t necessarily search the same way or need the same information.",
      "The website was structured to account for both.",
      "Residential pages focus on projects homeowners commonly research, while commercial content communicates Kinsmen’s ability to work on larger and more technically demanding projects.",
      "That separation helped position the company for a broader range of opportunities without making the website feel unfocused.",
    ],
  },
  {
    title: "Local SEO Across Calgary",
    before: [
      "Local search optimization focused on establishing Kinsmen’s relevance to Calgary and the surrounding market.",
      "This included website location signals, service targeting, Google Business Profile optimization, internal linking, and ongoing improvements based on search performance.",
      "The objective was to build genuine local relevance around the services Kinsmen actually provides rather than creating large numbers of repetitive location pages.",
    ],
  },
  {
    title: "Ongoing SEO & Website Improvements",
    before: [
      "The website hasn’t been treated as a finished project.",
      "Search performance, service opportunities, and business priorities continue to inform improvements to pages, content, internal links, and the overall website.",
      "This allows the SEO strategy to evolve around the types of projects Kinsmen wants to win.",
    ],
  },
];

const journey = [
  "High-Intent Search",
  "Relevant Service Page",
  "Qualified Lead",
  "Estimate",
  "Concrete Project",
];

const results = [
  { value: "$400K+", label: "Revenue from generated projects" },
  { value: "6 Months", label: "Measurement period" },
  {
    value: "Residential + Commercial",
    label: "Projects generated across both sides of the business",
  },
];

const drivers = [
  "Website development created the foundation.",
  "Service-specific SEO connected Kinsmen with people actively searching for particular types of concrete work.",
  "Local SEO strengthened visibility across the Calgary market.",
  "Commercial and residential positioning allowed the company to compete for different types of projects.",
  "And ongoing optimization allowed the strategy to change as new opportunities emerged.",
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/results/kinsmen-consulting#webpage",
      url: "https://scaleseo.co/results/kinsmen-consulting",
      name: "Kinsmen Consulting SEO Case Study | Scale SEO",
      description: "See how SEO and website development helped Kinsmen Consulting generate more than $400,000 in revenue from new concrete projects over six months.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/kinsmen-consulting#case-study",
      url: "https://scaleseo.co/results/kinsmen-consulting",
      headline: "Kinsmen Consulting SEO Case Study",
      description: "How SEO and website development helped a Calgary concrete contractor generate more than $400,000 in revenue from new projects over a six-month period.",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/#corbin-jensen"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Kinsmen Consulting Ltd.",
        url: "https://www.kinsmenconsulting.ca/"
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "SEO case study",
        "Calgary SEO case study",
        "construction SEO",
        "contractor SEO",
        "local SEO",
        "SEO website development"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/kinsmen-consulting#breadcrumb",
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
          name: "Kinsmen Consulting",
          item: "https://scaleseo.co/results/kinsmen-consulting"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function KinsmenConsultingCaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      {/* === HERO — dark, copy left, site screenshot right, stats below === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={ind.heroContent}>
          <div className={ind.crumbsOnDark}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Results", href: "/results" },
                { name: "Kinsmen Consulting" },
              ]}
              schema={false}
            />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroMain}>
              <h1 className={ind.title}>
                Kinsmen Consulting{" "}
                <span className="title-block">SEO Case Study</span>
              </h1>
              <p className={styles.heroLead}>
                How SEO and website development helped a Calgary concrete
                contractor generate more than $400,000 in revenue from new
                projects over six months.
              </p>
              <p className={styles.heroMeta}>Concrete &amp; Construction · Calgary, Alberta</p>
              <a
                href={CLIENT_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={ind.heroCta}
              >
                <span>Visit Kinsmen Consulting</span>
                <span className={ind.arrow}>→</span>
              </a>
            </div>

            <div className={styles.browser}>
              <div className={styles.browserBar} aria-hidden="true">
                <span />
                <span />
                <span />
                <em>kinsmenconsulting.ca</em>
              </div>
              <img
                src="/images/kinsmen-hero.jpg"
                alt="Kinsmen Consulting website homepage"
                className={styles.browserImg}
              />
            </div>
          </div>

          <div className={styles.statRow}>
            {headlineStats.map((s, i) => (
              <div key={s.label} className={`${styles.stat} ${i === 0 ? styles.statLead : ""}`}>
                <span className={`${styles.statValue} ${styles.statValueWrap}`}>{s.value}</span>
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
              <h2 className={`${hub.h2} reveal-up`}>About Kinsmen Consulting</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Kinsmen Consulting is a Calgary concrete contractor providing
              residential and commercial concrete services across Calgary and
              surrounding communities.
            </p>
            <p>
              Their work ranges from driveways, patios, sidewalks, and retaining
              walls to larger commercial and specialty concrete projects.
            </p>
            <p>
              The opportunity wasn&rsquo;t simply to bring more visitors to the
              website.
            </p>
            <p>
              The goal was to position Kinsmen for larger, higher-value concrete
              projects and turn search visibility into qualified opportunities
              that could generate meaningful revenue.
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
              Attracting Higher-Value Concrete Projects
            </h2>
            <p className={hub.lead}>
              Concrete SEO in Calgary is competitive, particularly across broad
              searches where established contractors have been competing for
              visibility for years.
            </p>
            <p>
              Kinsmen also provides a wide range of services to very different
              types of customers.
            </p>
            <p>
              A homeowner searching for a new driveway has different
              requirements from a commercial contractor looking for concrete
              work on a parkade, structural slab, or commercial development.
            </p>
          </div>

          <div className={`${styles.goals} reveal-up`}>
            <p className={hub.panelLabel}>The website therefore needed to accomplish two things:</p>
            <div className={`${styles.goal} ${styles.goalLead}`}>
              <span className={styles.panelNum}>01</span>
              <p>Build local visibility for valuable concrete searches across Calgary.</p>
            </div>
            <span className={styles.goalJoin}>And</span>
            <div className={styles.goal}>
              <span className={styles.panelNum}>02</span>
              <p>
                Clearly communicate Kinsmen&rsquo;s ability to handle both
                residential and commercial projects.
              </p>
            </div>
          </div>
        </div>

        <div className={hub.inner}>
          <p className={`${styles.objective} reveal-up`}>
            Rather than trying to rank one generic concrete page for everything,
            the strategy was built around the individual services and project
            types Kinsmen wanted more of.
          </p>
        </div>
      </section>

      {/* === THE STRATEGY — light, editorial rows === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>The Strategy</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Building the Website Around High-Value Services
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>SEO and website development were approached together.</p>
              <p>
                Instead of building the website first and trying to optimize it
                afterwards, search demand, services, website architecture, and
                lead generation were considered as part of the same strategy.
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
                  {s.before.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className={styles.chips}>
                      {s.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === THE APPROACH — dark, copy + search-to-revenue journey === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>The Approach</div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              From Search Visibility to Revenue
            </h2>
            <p className={hub.lead}>Traffic alone wasn&rsquo;t the objective.</p>
            <p>
              For a concrete contractor, one qualified commercial project can be
              worth considerably more than dozens of low-value website visits.
            </p>
            <p>That changed how the campaign was approached.</p>
          </div>

          <div className={`${styles.journey} reveal-up`}>
            <p className={hub.panelLabel}>
              Instead of measuring success purely through traffic growth, the
              strategy focused on connecting relevant searches with the services
              Kinsmen wanted to sell:
            </p>
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
              This made it possible to evaluate SEO and website performance
              against actual business outcomes rather than rankings alone.
            </p>
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
                More Than $400,000 in Revenue From Generated Projects
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Over a six-month period, projects generated through the website
                and search strategy produced more than $400,000 in revenue for
                Kinsmen Consulting.
              </p>
            </div>
          </div>

          <div className={styles.resultGrid}>
            {results.map((r, i) => (
              <article
                key={r.label}
                className={`${styles.resultCard} ${i === 0 ? styles.resultLead : ""} reveal-up`}
              >
                <span className={`${styles.resultValue} ${styles.statValueWrap}`}>{r.value}</span>
                <span className={`${styles.resultLabel} ${styles.resultLabelBare}`}>{r.label}</span>
              </article>
            ))}
          </div>

          <p className={`${styles.resultsNote} reveal-up`}>
            The projects included a mix of residential and commercial concrete
            work, demonstrating the value of targeting multiple high-intent
            service categories rather than relying on one broad concrete
            keyword.
          </p>
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
                SEO Built Around the <em>Jobs Kinsmen Wanted</em>
              </h2>
            </div>
            <div className={`${styles.whyIntro} reveal-up`}>
              <p>
                The campaign wasn&rsquo;t designed around generating the largest
                possible amount of website traffic.
              </p>
              <p className={styles.whyIntroStrong}>
                It was designed around the economics of Kinsmen&rsquo;s business.
              </p>
              <p>
                That meant identifying valuable services, building pages around
                genuine search demand, improving local visibility, and creating
                a website capable of turning that visibility into enquiries.
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
              The result was search visibility tied to measurable project
              revenue rather than traffic for traffic&rsquo;s sake.
            </p>
          </div>
        </div>
      </section>

      {/* === ONGOING WORK — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>Ongoing Work</div>
              <h2 className={`${hub.h2} reveal-up`}>
                Continuing to Target Higher-Value Opportunities
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              SEO and website work for Kinsmen Consulting continues to evolve
              alongside the business.
            </p>
            <p>
              As Kinsmen takes on different types of projects, the website can
              be expanded around the services and markets that represent the
              strongest opportunities.
            </p>
            <p>
              That includes continued development of commercial concrete
              visibility alongside established residential services.
            </p>
            <p>
              The objective remains the same: use search and the website to put
              Kinsmen in front of potential customers looking for the work the
              company wants to win.
            </p>
          </div>
        </div>
      </section>

      {/* === THE SEO SPECIALIST — dark, portrait + copy === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
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
            <div className={`section-label ${ind.labelOnDark} ${about.label}`}>
              The SEO Specialist
            </div>
            <h2 className={hub.h2}>Strategy &amp; Implementation by Corbin Jensen</h2>
            <div className={`${about.prose} ${styles.proseDark}`}>
              <p>
                Website development and SEO strategy for Kinsmen Consulting are
                managed directly by{" "}
                <strong className={styles.strongOnDark}>Corbin Jensen</strong>,
                founder and SEO specialist at Scale SEO.
              </p>
              <p>
                The engagement has included website development, technical SEO,
                service-page strategy, local SEO, Google Business Profile
                optimization, internal linking, content development, and ongoing
                search performance analysis.
              </p>
            </div>
            <Link href="/corbin-jensen" className={hub.pillLime}>
              <span>About Corbin Jensen</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WORK WITH SCALE SEO — light CTA (follows a dark section) === */}
      <section className={`${hub.cta} ${styles.ctaLight}`}>
        <div className={`section-label ${styles.labelCenter} ${styles.ctaLabelInk}`}>
          Work With Scale SEO
        </div>
        <h2 className={hub.ctaHeadline}>
          Turn Search Visibility Into{" "}
          <span className="title-block">Business Growth</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>Good SEO shouldn&rsquo;t stop at rankings and traffic.</p>
          <p>
            For B2B and service businesses, the real objective is getting in
            front of the right potential customers and turning that visibility
            into qualified opportunities.
          </p>
          <p>
            Scale SEO combines search strategy with hands-on website
            improvements to build organic visibility around the services that
            matter to your business.
          </p>
        </div>
        <div className={`${hub.buttonGroupCenter} ${styles.ctaButtons}`}>
          <Link href="/services/seo" className={styles.ctaSecondary}>
            <span>Explore SEO Services</span>
            <span className={hub.arrow}>→</span>
          </Link>
          <Link href="/services/web-development" className={styles.ctaSecondary}>
            <span>Explore Web Development</span>
            <span className={hub.arrow}>→</span>
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            <span>Book a Strategy Call</span>
            <span className={hub.arrow}>→</span>
          </a>
        </div>
      </section>

      <RevealOnScroll />
    </main>
  );
}
