import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import RevealOnScroll from "../components/RevealOnScroll";
import { posts } from "../blog/posts";

// Sections from the shared /services hub system, editorial rows / fact
// sheet / result card from the About page; styles below are only the
// pieces specific to this page.
import hub from "../services/page.module.css";
import ind from "../industries/page.module.css";
import about from "../about/page.module.css";
import styles from "./page.module.css";

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
    title: "Technical SEO",
    body: [
      "Technical SEO work includes identifying and resolving issues that can affect how search engines crawl, understand, index, and navigate a website.",
      "Corbin’s work includes crawlability and indexation analysis, redirects, canonicalization, XML sitemaps, robots directives, website performance, mobile usability, URL structure, duplicate content, structured data, and technical site architecture.",
    ],
  },
  {
    title: "On-Page SEO & Search Intent",
    body: [
      "Corbin uses keyword research, search results, competitor analysis, and existing performance data to understand what potential customers are searching for and which pages should satisfy those searches.",
      "This includes service-page optimization, keyword targeting, heading structure, metadata, content improvements, search-intent alignment, and identifying opportunities where existing pages can be strengthened rather than unnecessarily replaced.",
    ],
  },
  {
    title: "Content Strategy",
    body: [
      "SEO content should support the expertise and services of the business publishing it.",
      "Corbin develops content strategies around relevant search demand, existing rankings, service priorities, competitor coverage, and the questions potential clients research before making contact.",
      "The objective is to build useful topical depth while creating clear relationships between informational content and the commercial pages responsible for generating enquiries.",
    ],
  },
  {
    title: "Local SEO",
    body: [
      "For businesses that depend on a defined geographic market, Corbin works across both traditional organic search and local visibility.",
      "His local SEO experience includes Google Business Profile optimization, local keyword research, location and service targeting, competitor analysis, review strategy, local landing pages, business information consistency, and local rank tracking.",
    ],
  },
  {
    title: "Website Architecture & Internal Linking",
    body: [
      "How pages relate to one another can be just as important as the content on the individual pages.",
      "Corbin works on website structures that establish clear relationships between services, industries, locations, resources, and supporting content.",
      "Internal linking is then used to help visitors discover relevant information while reinforcing those relationships for search engines.",
    ],
  },
  {
    title: "Structured Data",
    body: [
      "Corbin implements and reviews structured data to help search engines better understand the entities and content represented on a website.",
      "His work includes Organization, LocalBusiness, Service, Article, Person, ProfilePage, BreadcrumbList, ItemList, and other Schema.org types where appropriate to the page and business.",
    ],
  },
  {
    title: "SEO-Focused Web Development",
    body: [
      "Many SEO recommendations eventually require changes to the website itself.",
      "Corbin works directly within platforms including Webflow and WordPress, as well as modern web environments, allowing technical, structural, content, and on-page recommendations to be implemented rather than remaining in an audit document.",
    ],
  },
];

const tools = [
  {
    title: "Search & Analytics",
    items: ["Google Search Console", "Google Analytics 4"],
    body: "Used to evaluate search visibility, queries, landing-page performance, indexing, traffic, and campaign progress.",
  },
  {
    title: "SEO Research & Analysis",
    items: ["Semrush", "Ahrefs", "Local Falcon"],
    body: "Used for keyword research, competitor analysis, backlink and search analysis, rank tracking, and local visibility research.",
  },
  {
    title: "Website Platforms",
    items: ["Webflow", "WordPress", "Next.js / Vercel"],
    body: "Corbin works directly within client websites to implement technical, structural, content, metadata, schema, and on-page improvements.",
  },
  {
    title: "Local Search",
    items: ["Google Business Profile", "Bing Places", "Apple Business Connect"],
    body: "Used as part of local search campaigns to strengthen business information and visibility across major search and mapping platforms.",
  },
];

const details: { label: string; value: React.ReactNode }[] = [
  { label: "Name", value: "Corbin Jensen" },
  { label: "Role", value: "Founder & SEO Specialist" },
  { label: "Company", value: "Scale SEO" },
  { label: "Based in", value: "Calgary, Alberta, Canada" },
  {
    label: "Areas of expertise",
    value:
      "Technical SEO, on-page SEO, content strategy, local SEO, website architecture, internal linking, structured data, and SEO-focused web development",
  },
  { label: "Industry focus", value: "Professional services, B2B, and accounting firms" },
  { label: "Markets worked in", value: "Canada & Australia" },
  { label: "Website platforms", value: "Webflow, WordPress, Next.js / Vercel" },
  {
    label: "Professional profile",
    value: (
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={about.glanceLink}
      >
        LinkedIn <span className={ind.arrow}>→</span>
      </a>
    ),
  },
  {
    label: "Company",
    value: (
      <Link href="/about" className={about.glanceLink}>
        Scale SEO <span className={ind.arrow}>→</span>
      </Link>
    ),
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
        "@id": "https://scaleseo.co/#corbin-jensen"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/corbin-jensen#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Person",
      "@id": "https://scaleseo.co/#corbin-jensen",
      name: "Corbin Jensen",
      jobTitle: "Founder & SEO Specialist",
      url: "https://scaleseo.co/corbin-jensen",
      image: "https://scaleseo.co/images/corbin-about.jpg",
      description: "Corbin Jensen is an SEO specialist and the founder of Scale SEO, based in Calgary, Alberta. He works with professional service and B2B businesses across technical SEO, on-page SEO, content strategy, local SEO, website architecture and structured data.",
      worksFor: {
        "@id": "https://scaleseo.co/#organization"
      },
      homeLocation: {
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
  const article = posts.find(
    (p) => p.slug === "how-accounting-firms-rank-on-google-in-canada"
  );

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
                Corbin Jensen is an SEO specialist and the founder of Scale SEO,
                an independent search marketing practice based in Calgary,
                Alberta.
              </p>
              <p>
                He works directly with professional service and B2B businesses
                on technical SEO, on-page optimization, content strategy, local
                SEO, website architecture, structured data, and organic search
                strategy.
              </p>
              <p>
                Corbin&rsquo;s work focuses on connecting search visibility with
                the services that matter commercially to a business. Rather than
                treating rankings or traffic as the end goal, he looks at how
                people search for a company&rsquo;s services, how its website
                communicates its expertise, and where organic search can
                contribute to qualified enquiries and long-term growth.
              </p>
              <p>
                His current work has a particular focus on accounting and
                professional service firms, alongside broader experience across
                B2B and local search campaigns in Canada and Australia.
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
              with business websites rather than through a traditional agency
              account-management model.
            </p>
            <p>
              His work has included researching search demand, auditing
              websites, restructuring service pages, resolving technical SEO
              issues, developing content strategies, implementing structured
              data, improving local search visibility, and making changes
              directly within client websites.
            </p>
            <p>
              Before establishing Scale SEO in Calgary, Corbin worked with
              businesses in Australia across organic search, local SEO, and
              website optimization. That experience provided exposure to
              different industries, competitive environments, website
              platforms, and geographic search markets.
            </p>
            <p>In 2025, he established Scale SEO as an independent SEO practice.</p>
            <p>
              Today, Corbin manages a deliberately limited client roster and
              remains directly involved in both strategy and implementation. His
              work increasingly focuses on professional service and B2B
              businesses, with accounting firms becoming a particular area of
              industry experience.
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
                Corbin works across the technical, content, and website elements
                that influence organic search performance.
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
              <h2 className={`${hub.h2} reveal-up`}>Industry Experience</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin has worked across different types of business websites,
                with his current focus increasingly centred on professional
                services and B2B.
              </p>
            </div>
          </div>

          <div className={styles.industryGrid}>
            <article className={`${hub.lightCard} ${about.audienceCard} reveal-up`}>
              <span className="index">01</span>
              <h3 className={about.audienceTitle}>
                Accounting &amp; Professional Services
              </h3>
              <div className={hub.cardBody}>
                <p>
                  Accounting has become one of Corbin&rsquo;s strongest areas of
                  industry-specific SEO experience.
                </p>
                <p>
                  His work with accounting and advisory firms has included
                  technical SEO, local search, service-page strategy, content
                  development, website architecture, internal linking,
                  structured data, and organic search strategy.
                </p>
                <p>
                  This has included working with websites covering services such
                  as corporate tax, bookkeeping, business advisory, fractional
                  CFO and controller services, personal tax, payroll, and other
                  areas of accounting.
                </p>
                <p>
                  The work has also involved reviewing and structuring
                  educational accounting and tax content so that it supports
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
                B2B &amp; Local Service Businesses
              </h3>
              <div className={hub.cardBody}>
                <p>
                  Corbin&rsquo;s broader experience includes B2B organizations
                  and location-based service businesses in both Canada and
                  Australia.
                </p>
                <p>
                  These campaigns have provided hands-on experience with
                  competitive local search results, Google Business Profiles,
                  multi-service websites, location targeting, lead generation,
                  website redevelopment, and the relationship between organic
                  search visibility and real customer acquisition.
                </p>
                <p>
                  While the industries vary, the underlying approach remains
                  consistent: understand how customers search, determine which
                  opportunities have commercial relevance, and build the website
                  and search strategy around them.
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
                Corbin&rsquo;s work is measured using real search performance
                rather than traffic projections alone.
              </p>
              <p>Selected campaign results include:</p>
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
                  Increase in Google Search impressions.
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
                  Other client work has included improvements to local search
                  visibility, service-page rankings, organic impressions,
                  website architecture, and visibility for commercially
                  important search terms.
                </p>
                <p>
                  Where client confidentiality permits, Scale SEO publishes
                  selected campaign results and case studies showing the work
                  behind those improvements.
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

      {/* === WORKING STYLE — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Working Style
              </div>
              <h2 className={`${hub.h2} reveal-up`}>How Corbin Works</h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Corbin remains directly involved throughout each Scale SEO
              engagement.
            </p>
            <p>
              There is no handoff from a sales conversation to a separate
              account manager or junior SEO team.
            </p>
            <p>
              His work typically spans the full campaign lifecycle&mdash;from
              initial research and technical analysis through implementation,
              content direction, website changes, measurement, and ongoing
              prioritization.
            </p>
            <p>
              That hands-on structure allows decisions to be made with a
              detailed understanding of both the website and the business
              behind it.
            </p>
            <p>
              Corbin intentionally manages a limited client roster so that this
              level of involvement can be maintained as Scale SEO grows.
            </p>
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
            My Approach to SEO
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
              an existing service page considerably better, fixing a technical
              problem, restructuring part of the website, or connecting content
              that already exists.
            </p>
            <p>
              I also prefer implementation over producing recommendations that
              never make it onto the website. Where access and platform
              capabilities allow, I make the changes directly and then use
              search data to understand what should happen next.
            </p>
            <p className={styles.manifestoLead}>The goal is not simply more traffic.</p>
            <p className={styles.manifestoClose}>
              It&rsquo;s{" "}
              <strong>better visibility for the searches that matter to the business.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* === TOOLS & PLATFORMS — light, 2x2 === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Tools &amp; Platforms
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Tools &amp; Platforms</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Corbin works directly with the search, analytics, local SEO, and
                website platforms required to research, implement, and measure
                SEO campaigns.
              </p>
            </div>
          </div>

          <div className={hub.comboGrid}>
            {tools.map((t, i) => (
              <article key={t.title} className={`${hub.lightCard} reveal-up`}>
                <span className="index">{pad(i)}</span>
                <h3 className={hub.cardTitle}>{t.title}</h3>
                <ul className={styles.chips}>
                  {t.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={hub.cardBody}>
                  <p>{t.body}</p>
                </div>
              </article>
            ))}
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
                Corbin writes about SEO strategy, search visibility, and the
                application of organic search within professional service
                industries.
              </p>
              <p>
                His articles draw on the same research, search data, and
                practical campaign experience used in client work.
              </p>
            </div>
          </div>

          <div className={styles.articleGrid}>
            {article && (
              <article className={`${hub.darkCard} ${styles.articleCard} reveal-up`}>
                <span className={styles.articleTag}>Article</span>
                <h3 className={styles.articleTitle}>
                  How Accounting Firms Can Rank on Google in Canada
                </h3>
                <div className={hub.cardBody}>
                  <p>
                    A practical guide to how accounting firms can approach
                    service pages, local SEO, content, technical foundations,
                    and search visibility in competitive Canadian markets.
                  </p>
                </div>
                <Link href={`/blog/${article.slug}`} className={hub.pillLime}>
                  <span>Read Article</span>
                  <span className={hub.arrow}>→</span>
                </Link>
              </article>
            )}
            <article className={`${styles.futureCard} reveal-up`}>
              <span className={styles.articleTag}>More coming</span>
              <p className={styles.futureText}>
                As additional Scale SEO articles are published, recent articles
                authored by Corbin can be featured here.
              </p>
              <Link href="/blog" className={about.rowLinkDark}>
                View All SEO Insights <span className={ind.arrow}>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* === PROFESSIONAL DETAILS — light, fact sheet === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${about.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${about.label}`}>
                Professional Details
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Professional Information</h2>
            </div>
          </div>
          <dl className={`${about.glance} reveal-up`}>
            {details.map((d, i) => (
              <div key={`${d.label}-${i}`} className={about.glanceRow}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* === CTA — dark === */}
      <section className={hub.cta} data-nav-theme="dark">
        <h2 className={hub.ctaHeadline}>
          Work With <span className={hub.accent}>Corbin</span>
        </h2>
        <div className={hub.ctaSub}>
          <p>
            Corbin works directly with a limited number of businesses through
            Scale SEO.
          </p>
          <p>
            If you&rsquo;re looking for ongoing SEO support, a standalone SEO
            audit, or help improving the search performance and structure of an
            existing website, you can get in touch directly.
          </p>
        </div>
        <p className={styles.ctaPromise}>
          Based in Calgary · Working with businesses across Canada &amp;
          internationally
        </p>
        <div className={`${hub.buttonGroupCenter} ${styles.ctaButtons}`}>
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
        <p className={about.ctaNote}>
          <Link href="/services" className={about.ctaNoteLink}>
            Explore Scale SEO Services →
          </Link>
        </p>
      </section>

      <RevealOnScroll />
    </main>
  );
}
