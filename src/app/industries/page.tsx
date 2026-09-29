import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
// Section/card system shared with the /services pages so the site matches.
import hub from "../services/page.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SEO for Professional Services & B2B | Scale SEO",
  description:
    "SEO for professional service and B2B businesses, including accounting firms, consultants and advisory businesses. Build qualified organic visibility with Scale SEO.",
  alternates: { canonical: "/industries" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const industries: {
  id: string;
  title: string;
  body: string[];
  featured?: boolean;
  link?: { href: string; label: string };
}[] = [
  {
    id: "accounting-firms",
    title: "Accounting Firms",
    featured: true,
    body: [
      "Accounting is currently the strongest industry focus at Scale SEO.",
      "I work with accounting and advisory firms to improve visibility for the services that drive long-term client relationships—from corporate tax and bookkeeping to business advisory and other high-value accounting services.",
      "The strategy can combine technical SEO, service-page optimization, local search, content, internal linking, and industry-specific search research to build visibility around the work your firm actually wants more of.",
    ],
    link: {
      href: "/industries/accounting-firms",
      label: "Explore SEO for Accounting Firms",
    },
  },
  {
    id: "consulting-firms",
    title: "Consulting Firms",
    body: [
      "Consulting businesses often sell complex services where credibility and expertise matter as much as visibility.",
      "SEO can help consulting firms build stronger service pages, demonstrate subject-matter expertise, and appear when businesses are actively researching the problems and services your consultants specialize in.",
      "For firms serving clients beyond a single city, the strategy can also extend beyond local SEO into broader regional or national organic search opportunities.",
    ],
  },
  {
    id: "financial-advisory",
    title: "Financial & Advisory Services",
    body: [
      "Financial and advisory businesses operate in markets where trust plays an important role in how potential clients evaluate providers.",
      "SEO strategies need to balance search visibility with accurate service content, clear expertise, strong website structure, and a professional online presence.",
      "Rather than chasing broad financial traffic, the focus should be on relevant searches connected to the services and clients the business actually wants to attract.",
    ],
  },
  {
    id: "professional-b2b",
    title: "Other Professional & B2B Services",
    body: [
      "Scale SEO also works with other expertise-led professional and B2B businesses where organic search can become a meaningful source of qualified opportunities.",
      "That can include specialized service providers, corporate services, B2B companies, and other businesses selling expertise rather than high-volume consumer products.",
      "I don’t build generic industry campaigns from a template. The search strategy is based on your specific services, customers, competitors, geography, and growth objectives.",
    ],
  },
];

const differences = [
  {
    title: "High-Value Search Intent",
    body: [
      "The most valuable keyword isn’t necessarily the one with the highest search volume.",
      "For a professional service firm, a relatively small number of searches from people actively looking for a specialized service can be far more valuable than a large volume of informational traffic.",
      "I prioritize searches based on their relevance to the business and the potential value of the customer behind them.",
    ],
  },
  {
    title: "Expertise Needs to Be Visible",
    body: [
      "Potential clients often research a firm before making contact.",
      "Strong service pages, useful industry content, case studies, team expertise, and a well-structured website help demonstrate that your business understands the work you’re asking Google to rank it for.",
      "SEO and credibility therefore need to develop together.",
    ],
  },
  {
    title: "Local & National Search Opportunities",
    body: [
      "Some professional service businesses depend heavily on their local market. Others can serve clients throughout Alberta, across Canada, or internationally.",
      "Your SEO strategy should reflect how your clients actually choose a provider rather than automatically creating dozens of location pages.",
      "That may mean focusing on local search and Google Business Profile visibility, broader organic service rankings, or a combination of both.",
    ],
  },
];

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Schema — CollectionPage + ItemList of industries + BreadcrumbList,
   linked to the global #website and #organization nodes in layout.tsx.
   Includes this page's BreadcrumbList, so <Breadcrumbs> is rendered with
   schema={false}. === */
const industriesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scaleseo.co/industries#webpage",
      "url": "https://scaleseo.co/industries",
      "name": "SEO for Professional Services & B2B Businesses | Scale SEO",
      "description": "SEO for professional service and B2B businesses, including accounting firms, consultants, financial and advisory businesses. Strategies built around qualified search visibility and long-term organic growth.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/#organization"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/industries#industries"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/industries#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "ItemList",
      "@id": "https://scaleseo.co/industries#industries",
      "name": "Industries Scale SEO Works With",
      "description": "Professional service and B2B industries served by Scale SEO.",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accounting Firms",
          "url": "https://scaleseo.co/industries/accounting-firms"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Consulting Firms"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Financial & Advisory Services"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Other Professional & B2B Services"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/industries#breadcrumb",
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
          "name": "Industries",
          "item": "https://scaleseo.co/industries"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function IndustriesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />

      {/* === HERO — dark, full-width left-aligned (matches /services/seo-audits) === */}
      <header className={styles.hero} data-nav-theme="dark">
        <div className={styles.heroContent}>
          <div className={styles.crumbsOnDark}>
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Industries" }]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>
            SEO for Professional Services &amp;{" "}
            <span className="title-block">B2B Businesses</span>
          </h1>

          <div className={styles.heroBottom}>
            <div className={styles.heroMain}>
              <div className={styles.sub}>
                <p>
                  Scale SEO works with professional service and B2B businesses
                  where search visibility can translate into valuable client
                  relationships&mdash;not just more website traffic.
                </p>
                <p>
                  From accounting firms and consultants to other expertise-led
                  businesses, I build SEO strategies around the services your
                  potential clients are actually searching for, the questions
                  they research before making contact, and the markets you want
                  to grow in.
                </p>
                <p>
                  Based in Calgary, I work with businesses across Canada and
                  internationally.
                </p>
              </div>
              <div className={styles.heroCtaGroup}>
                <a href="#industries" className={styles.heroCta}>
                  <span>Explore Industries</span>
                  <span className={styles.arrow}>↓</span>
                </a>
                <Link href="/services" className={styles.heroCtaSecondary}>
                  <span>View SEO Services</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>

            {/* Quick jump list to the industry cards below */}
            <nav className={styles.heroIndex} aria-label="Industries">
              {industries.map((ind, i) => (
                <a key={ind.id} href={`#${ind.id}`} className={styles.heroIndexItem}>
                  <span className={styles.heroIndexNum}>{pad(i)}</span>
                  <span>{ind.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* === SEO BUILT FOR EXPERTISE-LED BUSINESSES — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <h2 className={`${hub.h2} reveal-up`}>
              SEO Built for <em>Expertise-Led Businesses</em>
            </h2>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={styles.leadInk}>
              Professional services require a different approach to organic
              search.
            </p>
            <p>
              Potential clients aren&rsquo;t simply looking for the closest or
              cheapest provider. They&rsquo;re evaluating expertise, experience,
              services, credibility, and whether your business understands the
              problem they&rsquo;re trying to solve.
            </p>
            <p className={styles.leadInk}>
              That means SEO needs to do more than increase traffic.
            </p>
            <p>
              Your website needs strong service pages, clear site architecture,
              useful content, technical foundations, and the right trust signals
              to turn relevant searches into qualified enquiries.
            </p>
            <p>
              For B2B businesses in particular, search volume doesn&rsquo;t
              always need to be high to be valuable. A smaller number of
              searches from the right decision-makers can represent
              significantly more commercial value than thousands of unrelated
              visitors.
            </p>
          </div>
        </div>
      </section>

      {/* === INDUSTRIES — dark === */}
      <section
        className={`${hub.section} ${hub.dark}`}
        id="industries"
        data-nav-theme="dark"
      >
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.labelOnDark}`}>
                Industries I Work With
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                SEO for Professional <em>Service Industries</em>
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                I keep my client roster relatively small and focus on businesses
                where I can understand the services, customers, and commercial
                value behind the searches we&rsquo;re targeting.
              </p>
            </div>
          </div>

          <div className={styles.industryGrid}>
            {industries.map((ind, i) => (
              <article
                key={ind.id}
                id={ind.id}
                className={`${hub.darkCard} ${ind.featured ? styles.featuredCard : ""} reveal-up`}
              >
                <div className={styles.cardMeta}>
                  <span className="index">{pad(i)}</span>
                </div>
                <h3 className={styles.industryTitle}>{ind.title}</h3>
                <div className={hub.cardBody}>
                  {ind.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {ind.link && (
                  <Link href={ind.link.href} className={hub.pillLime}>
                    <span>{ind.link.label}</span>
                    <span className={hub.arrow}>→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY SEO WORKS DIFFERENTLY — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <h2 className={`${hub.h2} reveal-up`}>
              Why SEO Works Differently <em>for Professional Services</em>
            </h2>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Professional service SEO often comes down to three things:{" "}
                <strong className={styles.strongInk}>
                  intent, expertise, and trust.
                </strong>
              </p>
            </div>
          </div>

          <div className={hub.threeGrid}>
            {differences.map((d, i) => (
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

      {/* === ONE STRATEGY, ADAPTED TO YOUR MARKET — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <h2 className={`${hub.h2} reveal-up`}>
              One SEO Strategy, <em>Adapted to Your Market</em>
            </h2>
            <Link href="/services/seo" className={`${hub.pillLime} reveal-up`}>
              <span>Explore Ongoing SEO Services</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              The fundamentals of SEO remain consistent, but the priorities
              change from one industry to another.
            </p>
            <p>
              An accounting firm targeting Calgary business owners doesn&rsquo;t
              need the same search strategy as a B2B consultancy selling
              specialized services across Canada.
            </p>
            <p>
              I look at your existing search visibility, competitors, service
              mix, target clients, website, and market before determining where
              the strongest opportunities exist.
            </p>
            <p>
              Depending on the business, that can involve technical SEO, keyword
              research, service-page improvements, content strategy, local SEO,
              internal linking, website architecture, and conversion
              improvements.
            </p>
          </div>
        </div>
      </section>

      {/* === DON'T SEE YOUR INDUSTRY — light CTA === */}
      <section className={`${hub.section} ${hub.light} ${styles.ctaLight}`}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>
            Don&rsquo;t See <span className="title-block">Your Industry?</span>
          </h2>
          <div className={styles.ctaBody}>
            <p>
              You don&rsquo;t need to fit neatly into one of the industries
              above to work with Scale SEO.
            </p>
            <p>
              If you run a professional service or B2B business and potential
              clients use Google to research the services you provide, there may
              be an opportunity to build organic search into a meaningful
              acquisition channel.
            </p>
            <p>
              Tell me what your business does, who you&rsquo;re trying to reach,
              and where you want to grow. I&rsquo;ll take a look at the search
              opportunity and tell you whether I think SEO makes sense.
            </p>
          </div>
          <div className={styles.ctaGroup}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              <span>Book a Strategy Call</span>
              <span className={styles.arrow}>→</span>
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              <span>Send a Message</span>
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      <RevealOnScroll />
    </main>
  );
}
