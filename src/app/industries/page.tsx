import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
// Section/card system shared with the /services pages so the site matches.
import hub from "../services/page.module.css";
import styles from "./page.module.css";
import Contact from "../components/ContactCta";

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
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
        breadcrumbSchema={false}
        title={
          <>
            SEO for Professional Services &amp;{" "}
            <span className="title-block">B2B Businesses</span>
          </>
        }
        icon="industries"
        actions={
          <>
            <a href="#industries">
              <span>Explore Industries</span>
              <span>↓</span>
            </a>
            <Link href="/services">
              <span>View SEO Services</span>
              <span>→</span>
            </Link>
          </>
        }
      >
        <p>
          Scale SEO provides specialized SEO services for accounting firms,
          consultants, financial advisors, and other professional service
          businesses across Canada and internationally.
        </p>
      </PageHero>

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

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
