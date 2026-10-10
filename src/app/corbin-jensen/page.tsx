import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";

// Sections from the shared /services hub system, editorial rows / fact
// sheet / result card from the About page; styles below are only the
// pieces specific to this page.
import hub from "../services/page.module.css";
import ind from "../industries/page.module.css";
import about from "../about/page.module.css";
import styles from "./page.module.css";
import Contact from "../components/ContactCta";

export const metadata: Metadata = {
  title: "Corbin Jensen | Founder & Lead Specialist, Scale SEO",
  description:
    "Corbin Jensen is an independent organic search specialist and founder of Scale SEO, based in Calgary, Alberta — engineering technical search architectures for accounting practices, B2B companies, and professional services across Canada.",
  alternates: { canonical: "/corbin-jensen" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/corbin-jensen-seo/";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Content ============================================================ */

const expertise = [
  {
    title: "Technical & On-Page SEO",
    body: [
      "Corbin identifies and resolves issues affecting how search engines crawl, index, understand, and navigate websites. His work includes indexation, canonicalization, redirects, XML sitemaps, robots directives, structured data, URL structure, site architecture, metadata, internal linking, and on-page optimization.",
      "He also uses keyword research, search results, competitor analysis, and existing search performance to determine which pages should target specific searches and where existing pages can be strengthened.",
    ],
  },
  {
    title: "Content & Search Strategy",
    body: [
      "Corbin develops content strategies around relevant search demand, existing rankings, business priorities, competitor coverage, and the questions potential customers research before choosing a provider.",
      "The focus is not simply publishing more content. It is building useful topical coverage that demonstrates expertise and creates clear relationships between informational content and commercially important service pages.",
    ],
  },
  {
    title: "Local SEO",
    body: [
      "For businesses competing within defined geographic markets, Corbin works across both traditional organic search and local search visibility.",
      "This includes Google Business Profile optimization, local keyword and competitor research, location and service targeting, review strategy, business information consistency, local landing pages, and local rank tracking.",
    ],
  },
  {
    title: "Website Architecture & Implementation",
    body: [
      "Corbin works directly within client websites to implement SEO recommendations rather than limiting engagements to reports and strategy documents.",
      "His experience includes Webflow, WordPress, and modern web environments such as Next.js and Vercel. This allows technical, structural, content, internal linking, metadata, and structured-data improvements to be implemented directly where platform access allows.",
    ],
  },
];

const articles = [
  {
    slug: "seo-cost-canada",
    title: "How Much Does SEO Cost in Canada? 2026 Pricing Guide",
    body: "A practical look at SEO pricing in Canada, including monthly campaigns, standalone audits, freelancers, agencies, and the factors that influence what businesses can expect to pay.",
  },
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Take? A Realistic Timeline for Canadian Businesses",
    body: "A practical guide to what businesses can expect during the first 12 months of an SEO campaign and the factors that can influence how quickly organic search performance improves.",
  },
  {
    slug: "how-accounting-firms-rank-on-google-in-canada",
    title: "How Accounting Firms Can Rank on Google in Canada",
    body: "A guide to how accounting firms can approach service pages, local SEO, content, technical foundations, and organic visibility in competitive Canadian search markets.",
  },
];

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://scaleseo.co/corbin-jensen#profilepage",
      url: "https://scaleseo.co/corbin-jensen",
      name: "Corbin Jensen | Founder & SEO Specialist at Scale SEO",
      description: "Corbin Jensen is the founder and SEO specialist behind Scale SEO, working with professional service and B2B businesses across technical SEO, content strategy, local SEO and website optimization.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/corbin-jensen#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Person",
      "@id": "https://scaleseo.co/corbin-jensen#person",
      name: "Corbin Jensen",
      jobTitle: "Founder & SEO Specialist",
      url: "https://scaleseo.co/corbin-jensen",
      image: "https://scaleseo.co/images/corbin-about.jpg",
      description: "Corbin Jensen is an SEO specialist and the founder of Scale SEO, based in Calgary, Alberta. He works with professional service and B2B businesses across technical SEO, on-page SEO, content strategy, local SEO, website architecture and structured data.",
      worksFor: {
        "@id": "https://scaleseo.co/#organization"
      },
      workLocation: {
        "@type": "Place",
        name: "Calgary, Alberta, Canada"
      },
      knowsAbout: [
        "Search Engine Optimization",
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "SEO Content Strategy",
        "Website Architecture",
        "Internal Linking",
        "Structured Data",
        "SEO Audits",
        "B2B SEO",
        "Professional Services SEO",
        "Accounting Firm SEO"
      ],
      sameAs: [
        LINKEDIN_URL
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/corbin-jensen#breadcrumb",
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
          name: "About",
          item: "https://scaleseo.co/about"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Corbin Jensen",
          item: "https://scaleseo.co/corbin-jensen"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function CorbinJensenPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* === HERO — dark, bio left + portrait right === */}
      <header className={ind.hero} data-nav-theme="dark">
        <div className={`${ind.heroContent} ${styles.heroGrid}`}>
          <div className={styles.heroMain}>
            <div className={ind.crumbsOnDark}>
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Corbin Jensen" },
                ]}
                schema={false}
              />
            </div>
            <h1 className={`${ind.title} ${styles.title}`}>
              Corbin <span className="title-block">Jensen</span>
            </h1>
            <p className={styles.role}>Founder &amp; SEO Specialist at Scale SEO</p>

            <div className={ind.sub}>
              <p>
                Corbin Jensen is the founder and SEO specialist behind Scale
                SEO, an independent SEO company based in Calgary, Alberta. He
                works directly with professional service and B2B businesses
                across Canada, with particular experience in accounting and
                advisory firms.
              </p>
              <p>
                His work spans technical SEO, on-page optimization, content
                strategy, local SEO, website architecture, structured data, and
                direct website implementation.
              </p>
              <p>
                Rather than treating rankings or traffic as the end goal, Corbin
                focuses on how potential customers search for a business&rsquo;s
                services, how effectively its website communicates expertise,
                and where organic search can contribute to qualified enquiries
                and long-term growth.
              </p>
            </div>

            <p className={styles.heroMeta}>
              Based in Calgary, Alberta · Working across Canada &amp;
              internationally
            </p>

            <div className={ind.heroCtaGroup}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ind.heroCta}
              >
                <span>LinkedIn</span>
                <span className={ind.arrow}>→</span>
              </a>
              <Link href="/contact" className={ind.heroCtaSecondary}>
                <span>Contact Corbin</span>
                <span className={ind.arrow}>→</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroPortrait}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, founder of Scale SEO"
              className={styles.heroPortraitImg}
            />
            <div className={styles.heroPortraitCaption}>
              <span>Corbin Jensen</span>
              <span>Calgary, AB</span>
            </div>
          </div>
        </div>
      </header>

      {/* === BACKGROUND — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Background
              </div>
              <h2 className={`${hub.h2} reveal-up`}>SEO Experience</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Corbin&rsquo;s experience in SEO developed through hands-on work
              researching, improving, and managing business websites rather
              than through a traditional agency account-management role.
            </p>
            <p>
              His work has included analyzing search demand, auditing websites,
              resolving technical SEO issues, restructuring service pages,
              developing content strategies, implementing structured data,
              improving local search visibility, and making changes directly
              within client websites.
            </p>
            <p>
              Before establishing Scale SEO in Calgary, Corbin worked with
              businesses in Australia across organic search, local SEO, and
              website optimization. This provided experience across different
              industries, competitive environments, website platforms, and
              geographic search markets.
            </p>
            <p>In 2025, he established Scale SEO as an independent SEO company.</p>
            <p>
              Today, Corbin manages a deliberately limited client roster and
              remains directly involved in strategy, implementation, and
              performance analysis. His work is increasingly focused on
              professional service and B2B businesses where a relatively small
              number of commercially relevant searches can represent
              significant value.
            </p>
            <Link href="/about" className={hub.pillDark}>
              <span>About Scale SEO</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPERTISE — dark, editorial rows === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Expertise
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Areas of SEO Expertise</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin works across the technical, content, local search, and
                website elements that influence organic visibility.
              </p>
            </div>
          </div>

          <div className={`${about.rows} ${about.rowsDark}`}>
            {expertise.map((e, i) => (
              <article key={e.title} className={`${about.row} ${about.rowDark} reveal-up`}>
                <div className={about.rowHead}>
                  <span className={about.rowNum}>{pad(i)}</span>
                  <h3 className={about.rowTitle}>{e.title}</h3>
                </div>
                <div className={about.rowBody}>
                  {e.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === INDUSTRIES — light, two cards === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Industries
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Professional Services &amp; B2B Experience</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin&rsquo;s current work is primarily focused on professional
                service and B2B businesses, with accounting and advisory firms
                becoming a particular area of industry experience.
              </p>
            </div>
          </div>

          <div className={styles.industryGrid}>
            <article className={`${hub.lightCard} ${about.audienceCard} reveal-up`}>
              <span className="index">01</span>
              <h3 className={about.audienceTitle}>
                Accounting &amp; Advisory Firms
              </h3>
              <div className={hub.cardBody}>
                <p>
                  Corbin has worked extensively on SEO for accounting and
                  advisory websites, including technical SEO, service-page
                  strategy, local search, content development, website
                  architecture, internal linking, structured data, and ongoing
                  organic search strategy.
                </p>
                <p>
                  This work has covered searches and content related to
                  corporate tax, bookkeeping, business advisory, fractional CFO
                  and controller services, personal tax, payroll, SMSFs, and
                  other accounting services across Canadian and Australian
                  markets.
                </p>
                <p>
                  His work with accounting firms also includes structuring
                  educational tax and accounting content so that it supports
                  relevant commercial services while maintaining clear
                  authorship, professional context, and appropriate references.
                </p>
              </div>
              <Link href="/industries/accounting-firms" className={hub.pillDark}>
                <span>Explore SEO for Accounting Firms</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </article>
            <article className={`${hub.lightCard} ${about.audienceCard} reveal-up`}>
              <span className="index">02</span>
              <h3 className={about.audienceTitle}>
                Broader B2B &amp; Local Search Experience
              </h3>
              <div className={hub.cardBody}>
                <p>
                  Corbin&rsquo;s broader experience includes B2B organizations
                  and location-based service businesses across Canada and
                  Australia.
                </p>
                <p>
                  These campaigns have provided hands-on experience with
                  competitive local search results, Google Business Profiles,
                  multi-service websites, geographic targeting, website
                  redevelopment, and the relationship between organic
                  visibility and customer acquisition.
                </p>
                <p>
                  While industries and search markets differ, the underlying
                  approach remains consistent: understand how customers search,
                  determine which opportunities have commercial relevance, and
                  build the website and SEO strategy around them.
                </p>
              </div>
              <Link href="/industries" className={hub.pillDark}>
                <span>Explore Industries</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* === SELECTED WORK — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Selected Work
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Selected SEO Results</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin evaluates SEO performance using actual search visibility
                and business-relevant outcomes rather than traffic projections
                alone.
              </p>
            </div>
          </div>

          <div className={styles.workGrid}>
            <article className={`${about.result} reveal-up`}>
              <h3 className={about.resultTitle}>Accounting &amp; Advisory SEO</h3>
              <div className={about.resultMetric}>
                <span className={about.resultValue}>Page 5 → Page 1</span>
                <span className={about.resultLabel}>
                  Improvement in target keyword rankings during a six-month SEO
                  engagement.
                </span>
              </div>
              <div className={about.resultMetric}>
                <span className={about.resultValue}>+125%</span>
                <span className={about.resultLabel}>
                  Google Search Impressions
                </span>
              </div>
              <p className={about.resultBody}>
                The campaign combined technical SEO, stronger service-page
                architecture, on-page optimization, content improvements, and
                internal linking around commercially relevant accounting and
                advisory searches.
              </p>
            </article>

            <article className={`${hub.darkCard} ${styles.workCard} reveal-up`}>
              <h3 className={styles.workTitle}>
                Organic Search Growth Across Client Campaigns
              </h3>
              <div className={hub.cardBody}>
                <p>
                  Other client campaigns have included improvements to local
                  search visibility, service-page rankings, organic
                  impressions, website architecture, and visibility for
                  commercially important search terms.
                </p>
                <p>
                  Where client confidentiality permits, Scale SEO publishes
                  selected results and case studies showing both the outcomes
                  and the work behind them.
                </p>
              </div>
              <Link href="/results" className={hub.pillLime}>
                <span>View SEO Results &amp; Case Studies</span>
                <span className={hub.arrow}>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* === APPROACH — dark, first-person manifesto === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${styles.manifesto}`}>
          <div className={`section-label reveal-up ${ind.labelOnDark} ${about.labelCenter}`}>
            Approach
          </div>
          <h2 className={`${hub.h2} ${styles.manifestoH2} reveal-up`}>
            How I Approach SEO
          </h2>
          <div className={`${styles.manifestoBody} reveal-up`}>
            <p className={styles.manifestoLead}>
              I don&rsquo;t think SEO should begin with a list of keywords or a
              generic technical checklist.
            </p>
            <p className={styles.manifestoLead}>
              It should begin with understanding the business.
            </p>
            <p>
              I want to know which services matter, who the ideal customer is,
              where those customers are located, how they choose a provider, and
              what a qualified enquiry is actually worth.
            </p>
            <p>
              From there, I look at search demand, existing rankings,
              competitors, website structure, content, and technical performance
              to determine where the strongest opportunities exist.
            </p>
            <p>
              Sometimes that means creating something new. Often it means making
              an existing service page considerably better, resolving a technical
              problem, restructuring part of the website, or connecting content
              that already exists.
            </p>
            <p>
              I also prefer implementation over producing recommendations that
              never make it onto the website. Where access and platform
              capabilities allow, I make the changes directly and then use
              search data to determine what should happen next.
            </p>
            <p className={styles.manifestoLead}>The goal isn&rsquo;t simply more traffic.</p>
            <p className={styles.manifestoClose}>
              It&rsquo;s{" "}
              <strong>better visibility for the searches that matter to the business.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* === ARTICLES — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Writing &amp; Research
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Articles by Corbin Jensen</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin writes about SEO strategy, technical SEO, search
                visibility, and the practical application of organic search for
                professional service and B2B businesses.
              </p>
              <p>
                His articles draw on search data, industry research, Google
                documentation, and practical experience working directly on
                client websites and SEO campaigns.
              </p>
            </div>
          </div>

          <div className={styles.articleGrid}>
            {articles.map((a) => (
              <article key={a.slug} className={`${hub.darkCard} ${styles.articleCard} reveal-up`}>
                <span className={styles.articleTag}>Article</span>
                <h3 className={styles.articleTitle}>{a.title}</h3>
                <div className={hub.cardBody}>
                  <p>{a.body}</p>
                </div>
                <Link href={`/blog/${a.slug}`} className={hub.pillLime}>
                  <span>Read Article</span>
                  <span className={hub.arrow}>→</span>
                </Link>
              </article>
            ))}
          </div>
          <Link href="/blog" className={`${about.rowLinkDark} ${styles.allArticles}`}>
            View All SEO Insights <span className={ind.arrow}>→</span>
          </Link>
        </div>
      </section>

      {/* === WORK DIRECTLY — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Work Together
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Work Directly With Corbin</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Every Scale SEO engagement is managed directly by Corbin, from
              initial research and strategy through to technical improvements,
              content direction, website implementation, and ongoing
              performance analysis.
            </p>
            <p>
              If you&rsquo;re looking to improve your business&rsquo;s organic
              search visibility, you can speak directly with Corbin about your
              website, current search performance, and where SEO may fit into
              your broader growth strategy.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={hub.pillDark}
            >
              <span>Book an SEO Consultation</span>
              <span className={hub.arrow}>→</span>
            </a>
          </div>
        </div>
      </section>

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
