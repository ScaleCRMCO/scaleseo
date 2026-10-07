import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SketchIcon from "../components/SketchIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import ServicesFaq from "./ServicesFaq";
import styles from "./page.module.css";
import cs from "../results/caseStudy.module.css";
import Contact from "../components/ContactCta";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services Calgary | Scale SEO",
  description:
    "Explore SEO, SEO audits, web development, Google Ads and AI search services from Scale SEO in Calgary. Direct, month-to-month support with no long-term contracts.",
  alternates: { canonical: "/services" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const services: {
  id: string;
  num: string;
  title: string;
  tagline: string;
  body: string[];
  listLabel: string;
  list: string[];
  cta: { href: string; label: string };
  core?: boolean;
}[] = [
  {
    id: "seo",
    num: "01",
    title: "Search Engine Optimization (SEO)",
    tagline:
      "Build sustainable visibility in Google and turn organic search into a customer acquisition channel.",
    body: [
      "SEO is the primary ongoing service at Scale SEO.",
      "I manage month-to-month SEO campaigns designed to improve how your website is crawled, understood, ranked, and ultimately found by the people searching for your services.",
      "Rather than focusing on one area of SEO in isolation, campaigns can combine technical SEO, keyword research, on-page optimization, content, internal linking, local SEO, structured data, competitor analysis, and ongoing website improvements.",
      "The exact work changes as your website and rankings develop. The objective stays the same: increase relevant organic visibility and turn that visibility into qualified business opportunities.",
    ],
    listLabel: "SEO campaigns can include:",
    list: [
      "Technical SEO and indexation improvements",
      "Keyword and competitor research",
      "Service page and on-page optimization",
      "Local SEO and Google Business Profile strategy",
      "Content planning and optimization",
      "Internal linking and site architecture",
      "Structured data and schema",
      "Website and conversion improvements",
      "Google Search Console analysis and reporting",
    ],
    cta: { href: "/services/seo", label: "Explore SEO Services" },
    core: true,
  },
  {
    id: "seo-audits",
    num: "02",
    title: "SEO Audits",
    tagline:
      "Understand what’s limiting your organic performance before deciding what to fix.",
    body: [
      "Not every business needs an ongoing SEO campaign immediately.",
      "A standalone SEO audit provides a detailed assessment of your website’s current organic search performance and identifies the issues and opportunities most likely to affect future growth.",
      "I review the technical foundation of your site alongside its content, on-page optimization, internal linking, search visibility, and competitive landscape. Findings are prioritized so you know what matters, what can wait, and what should happen next.",
      "SEO audits are available as a standalone engagement with no requirement to continue into monthly SEO.",
    ],
    listLabel: "Depending on scope, an audit can examine:",
    list: [
      "Crawling and indexation",
      "Site architecture and internal linking",
      "Technical SEO issues",
      "Existing keyword visibility",
      "On-page optimization",
      "Service and landing page quality",
      "Content gaps and opportunities",
      "Competitor search visibility",
      "Structured data",
      "Prioritized recommendations",
    ],
    cta: { href: "/services/seo-audits", label: "Explore SEO Audits" },
  },
  {
    id: "web-development",
    num: "03",
    title: "Web Development",
    tagline:
      "Build a faster, stronger website around search visibility and conversions from the beginning.",
    body: [
      "A website shouldn’t need to be rebuilt immediately after launch because SEO wasn’t considered during development.",
      "I build and improve websites with site architecture, page structure, technical performance, organic search, mobile usability, and conversion paths considered from the start.",
      "Web development can be provided as a standalone project or incorporated into a broader SEO engagement when the existing website is limiting organic growth.",
      "For SEO clients, this also means recommendations don’t have to sit untouched in an audit. Where appropriate, I can work directly on the website and implement the improvements the campaign requires.",
    ],
    listLabel: "Web development can include:",
    list: [
      "SEO-friendly site architecture",
      "Service and landing page development",
      "Responsive development",
      "Technical SEO foundations",
      "Page speed and performance improvements",
      "Conversion-focused page layouts",
      "Analytics and search tracking",
      "Website migrations and rebuilds",
    ],
    cta: { href: "/services/web-development", label: "Explore Web Development" },
  },
  {
    id: "google-ads",
    num: "04",
    title: "Google Ads Management",
    tagline:
      "Reach high-intent prospects while organic search builds over the longer term.",
    body: [
      "Google Ads can put your business in front of potential customers immediately when they search for commercially valuable services.",
      "I build and manage search campaigns around high-intent keywords, relevant landing pages, conversion tracking, negative keyword management, and ongoing optimization rather than simply maximizing clicks.",
      "For businesses using both SEO and paid search, the two channels can also provide useful information to each other. Paid search can reveal which queries and landing-page messages produce enquiries, while organic search data can uncover additional keyword opportunities and customer search behaviour.",
    ],
    listLabel: "Google Ads management can include:",
    list: [
      "Search campaign setup and management",
      "Commercial keyword research",
      "Negative keyword management",
      "Ad copy development",
      "Landing page recommendations",
      "Conversion tracking",
      "Search term analysis",
      "Ongoing campaign optimization",
    ],
    cta: {
      href: "/services/google-ads-management",
      label: "Explore Google Ads Management",
    },
  },
  {
    id: "ai-search",
    num: "05",
    title: "AI Search Optimization",
    tagline:
      "Improve how your business is understood and represented across AI-driven search experiences.",
    body: [
      "Search behaviour is expanding beyond traditional Google results.",
      "Potential customers increasingly encounter businesses and information through AI-assisted experiences such as ChatGPT, Perplexity, and Google’s AI-powered search features.",
      "AI search optimization at Scale SEO focuses on strengthening the underlying content, structure, entities, and authority signals that make your business easier for search and AI systems to understand.",
      "This complements traditional SEO rather than replacing it. A technically sound website, useful content, clear entity information, authoritative references, and strong organic visibility remain important foundations.",
    ],
    listLabel: "AI search work can include:",
    list: [
      "AI brand visibility monitoring",
      "Entity and brand signal analysis",
      "Content structure improvements",
      "Structured data implementation",
      "Citation and source analysis",
      "Content gap identification",
      "Brand mention monitoring",
      "Improvements that support machine readability",
    ],
    cta: { href: "/services/geo", label: "Explore AI Search Optimization" },
  },
];

const serviceIcon: Record<string, string> = {
  seo: "search",
  "seo-audits": "ledger",
  "web-development": "browser",
  "google-ads": "target",
  "ai-search": "consulting",
};

const comboTones = ["toneBlue", "tonePink", "toneNavy", "toneOrange"];

const combos: { title: string; body: string[] }[] = [
  {
    title: "SEO + Web Development",
    body: [
      "If an existing website has poor architecture, weak service pages, technical limitations, or conversion problems, development work can be incorporated directly into the SEO strategy.",
      "Instead of optimizing around a weak foundation, the website itself can be improved as organic visibility grows.",
    ],
  },
  {
    title: "SEO + Google Ads",
    body: [
      "SEO builds organic visibility over time, while Google Ads can generate immediate exposure for high-intent searches.",
      "Running the channels together can also produce useful search-term and conversion data that informs both strategies.",
    ],
  },
  {
    title: "SEO + AI Search Optimization",
    body: [
      "Traditional search and AI-driven discovery increasingly overlap.",
      "Strong content, clear business entities, structured information, authoritative mentions, and technically accessible websites can support visibility across both conventional search engines and AI-powered discovery platforms.",
    ],
  },
  {
    title: "SEO Audit + Ongoing SEO",
    body: [
      "A standalone audit is appropriate when you primarily need to understand what’s wrong and want your internal team or developer to implement the recommendations.",
      "Businesses that want the strategy implemented and continuously developed can instead move into an ongoing SEO campaign.",
      "There is no requirement to do so.",
    ],
  },
];

const industries: {
  num: string;
  title: string;
  body: string[];
  link?: { href: string; label: string };
}[] = [
  {
    num: "01",
    title: "Accounting & Financial Services",
    body: [
      "Accounting firms and financial service businesses often compete across a combination of local, service-specific, and informational searches.",
      "SEO strategies can connect core service pages, industry expertise, local visibility, and useful content to reach potential clients throughout that research process.",
    ],
    link: {
      href: "/industries/accounting-firms",
      label: "Explore SEO for Accounting Firms",
    },
  },
  {
    num: "02",
    title: "Professional Service Firms",
    body: [
      "Professional service businesses depend heavily on expertise and trust.",
      "SEO can help these firms become visible when prospective clients search for a specific service, compare providers, or research a problem before deciding who to contact.",
    ],
    link: { href: "/industries", label: "Explore Industries" },
  },
  {
    num: "03",
    title: "B2B & Consulting Businesses",
    body: [
      "B2B search strategies often involve lower search volumes but significantly higher-value enquiries.",
      "The focus is therefore not simply generating more traffic, but identifying the commercial searches most closely connected to the services and customers the business actually wants.",
    ],
  },
];

const proofs = [
  {
    title: "Empire Accountants — Organic SEO",
    metric: "Page 5 → Page 1",
    label: "Target keyword search rankings",
    desc: "Technical improvements, stronger service-page architecture, on-page optimization, and ongoing SEO helped a Brisbane accounting firm move important commercial searches from page five into first-page positions.",
    link: { href: "/results", label: "View SEO Results" },
  },
  {
    title: "Kinsmen Consulting — Website & SEO",
    metric: "26%",
    label: "Revenue growth in six months",
    desc: "A new SEO-focused website and search strategy helped a Calgary concrete contractor strengthen its digital presence while supporting growth across higher-value residential and commercial work.",
    link: { href: "/results", label: "View the Case Study" },
  },
  {
    title: "MSV Plumbing Services — Local Search",
    metric: "0 → Weekly",
    label: "Consistent bookings",
    desc: "A new website combined with local SEO and Google Maps visibility helped a Brisbane service business move from no consistent online enquiries to regular weekly work.",
    link: { href: "/results", label: "View Client Results" },
  },
];

const principles = [
  {
    num: "01",
    title: "Direct Execution",
    body: "You communicate directly with the person researching, planning, and implementing the work.",
  },
  {
    num: "02",
    title: "Month-to-Month",
    body: "Ongoing services are provided without long-term contract lock-ins.",
  },
  {
    num: "03",
    title: "Small Client Roster",
    body: "I intentionally limit the number of businesses I work with so each campaign receives meaningful attention.",
  },
  {
    num: "04",
    title: "Your Assets Stay Yours",
    body: "Your website, accounts, data, content, and other digital assets remain under your ownership.",
  },
  {
    num: "05",
    title: "Reporting Based on Performance",
    body: "Reporting focuses on meaningful changes in organic visibility, rankings, traffic, enquiries, and other relevant business outcomes rather than simply listing completed tasks.",
  },
];

/* === Schema — /services only. Links to the global #website and
   #organization nodes in layout.tsx; includes this page's BreadcrumbList
   (so <Breadcrumbs> is rendered with schema={false}). === */
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://scaleseo.co/services#webpage",
      url: "https://scaleseo.co/services",
      name: "SEO & Digital Marketing Services in Calgary | Scale SEO",
      description:
        "Explore SEO, SEO audits, web development, Google Ads management, and AI search optimization services from Scale SEO in Calgary. Services are managed directly for professional service and B2B businesses.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": "https://scaleseo.co/#organization" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      mainEntity: { "@id": "https://scaleseo.co/services#services" },
      breadcrumb: { "@id": "https://scaleseo.co/services#breadcrumb" },
      inLanguage: "en-CA",
    },
    {
      "@type": "ItemList",
      "@id": "https://scaleseo.co/services#services",
      name: "Scale SEO Services",
      description: "SEO and digital marketing services offered by Scale SEO.",
      numberOfItems: 5,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Search Engine Optimization (SEO)",
          url: "https://scaleseo.co/services/seo",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SEO Audits",
          url: "https://scaleseo.co/services/seo-audits",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Web Development",
          url: "https://scaleseo.co/services/web-development",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Google Ads Management",
          url: "https://scaleseo.co/services/google-ads-management",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "AI Search Optimization",
          url: "https://scaleseo.co/services/geo",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://scaleseo.co/services",
        },
      ],
    },
  ],
};

// Secondary highlight palette — see --pop-* tokens in globals.css.
// The core SEO card stays black + lime; the rest take a meaning-based tint.
const serviceTint: Record<string, string> = {
  "seo-audits": styles.tintBlue,
  "web-development": styles.tintPink,
  "google-ads": styles.tintYellow,
  "ai-search": styles.tintPurple,
};
const comboTints = [styles.tintPink, styles.tintYellow, styles.tintPurple, styles.tintBlue];
const proofTints = [styles.tintBlue, styles.tintYellow, styles.tintBlue];

/* === Page =============================================================== */

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* === HERO === */}
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
        breadcrumbSchema={false}
        title={
          <>
            SEO &amp; Digital Marketing Services in{" "}
            <span className="title-block">Calgary</span>
          </>
        }
        icon="search"
        actions={
          <>
            <Link href="/services/seo">
              <span>Explore SEO Services</span>
              <span>→</span>
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span>Book a Strategy Call</span>
              <span>→</span>
            </a>
          </>
        }
      >
        <p>
          Scale SEO provides SEO, SEO audits, web development, Google Ads
          management, and AI search optimization for professional service and
          B2B businesses.
        </p>
        <p>
          Based in Calgary and working with businesses across Canada, I manage
          every engagement directly. There are no account managers or
          outsourced campaign teams&mdash;just a search strategy built around
          your website, market, competition, and business goals.
        </p>
      </PageHero>

      {/* === QUICK-JUMP BAR === */}
      <nav className={styles.jumpBar} aria-label="Services on this page">
        {services.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            <span>{s.num}</span> {s.title}
          </a>
        ))}
      </nav>

      {/* === SERVICES — editorial rows === */}
      <section className={`${styles.section} ${styles.light} ${styles.afterJump}`} id="services">
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={`${styles.h2} ${styles.bigH2} reveal-up`}>
              Search &amp; Digital Growth Services Built Around Your Business
            </h2>
            <div className={`${styles.headBody} reveal-up`}>
              <p>Not every business needs the same combination of services.</p>
              <p>
                Some clients need an ongoing SEO campaign to improve organic
                visibility. Others need a technical audit, a better website,
                paid search support, or help understanding how their brand
                appears in AI-driven search.
              </p>
              <p>
                Each service below can solve a specific problem independently
                or work alongside your broader search strategy.
              </p>
            </div>
          </div>

          <div className={styles.svcRows}>
            {services.map((s) => (
              <article key={s.id} id={s.id} className={`${styles.svcRow} reveal-up`}>
                <div className={styles.svcAside}>
                  <div className={styles.svcMeta}>
                    <span>{s.num}</span>
                    {s.core && <span className={styles.svcCore}>Core service</span>}
                  </div>
                  <h3 className={styles.svcTitle}>{s.title}</h3>
                  <p className={styles.svcTagline}>{s.tagline}</p>
                  <SketchIcon name={serviceIcon[s.id] ?? "article"} className={styles.svcIcon} />
                </div>
                <div className={styles.svcBody}>
                  {s.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  <div className={styles.svcListLabel}>{s.listLabel}</div>
                  <ul className={styles.svcList}>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href={s.cta.href} className={styles.svcLink}>
                    {s.cta.label} <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW SERVICES WORK TOGETHER — coloured cards === */}
      <section className={`${styles.section} ${styles.light} ${cs.workSection}`}>
        <div className={cs.workSplit}>
          <div className={cs.workAside}>
            <div className="section-label reveal-up">Combinations</div>
            <h2 className={`${styles.h2} ${cs.bigH2} ${styles.comboH2} reveal-up`}>
              How These Services Work Together
            </h2>
            <div className={`${styles.comboIntro} reveal-up`}>
              <p>
                You don&rsquo;t necessarily need every service listed on this
                page.
              </p>
              <p>
                The right combination depends on where your business is today
                and what&rsquo;s preventing it from generating more
                opportunities through search.
              </p>
            </div>
          </div>
          <div className={cs.cards}>
            {combos.map((c, i) => (
              <article key={c.title} className={`${cs.card} ${cs[comboTones[i % comboTones.length]]} reveal-up`}>
                <div className={cs.cardLabel}>Combination {String(i + 1).padStart(2, "0")}</div>
                <h3 className={`${cs.cardSolution} ${styles.comboTitle}`}>{c.title}</h3>
                {c.body.map((para) => (
                  <p key={para} className={styles.comboBody}>{para}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === WHO SCALE SEO WORKS WITH — dark === */}
      <section className={`${styles.section} ${styles.dark}`} data-nav-theme="dark">
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={`${styles.h2} reveal-up`}>
              Who Scale SEO <em>Works With</em>
            </h2>
            <div className={`${styles.headBody} reveal-up`}>
              <p>
                Scale SEO primarily works with professional service and B2B
                businesses where a qualified search enquiry can lead to a
                valuable client relationship.
              </p>
              <p>
                This makes search particularly useful for businesses where
                potential customers actively research providers, compare
                expertise, evaluate credibility, and search for specific
                services before making contact.
              </p>
            </div>
          </div>

          <div className={styles.threeGrid}>
            {industries.map((item) => (
              <div key={item.num} className={`${styles.darkCard} reveal-up`}>
                <span className="index">{item.num}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardBody}>
                  {item.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {item.link && (
                  <Link href={item.link.href} className={styles.pillLime}>
                    <span>{item.link.label}</span>
                    <span className={styles.arrow}>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className={`${styles.footNote} reveal-up`}>
            Based in Calgary, Alberta, with campaigns managed for businesses
            across Canada and internationally.
          </p>
        </div>
      </section>

      {/* === RESULTS — light section, dark proof cards === */}
      <section className={`${styles.section} ${styles.light}`} id="results">
        <div className={styles.inner}>
          <div className={styles.head}>
            <div>
              <div className="section-label reveal-up" style={{ marginBottom: 24 }}>
                Proof, Not Promises
              </div>
              <h2 className={`${styles.h2} reveal-up`}>
                Results Across SEO, <em>Websites &amp; Search</em>
              </h2>
            </div>
            <div className={`${styles.headBody} reveal-up`}>
              <p>
                Different businesses require different search strategies. These
                projects show how SEO, website improvements, content, and local
                search can be applied based on the client&rsquo;s market and
                starting position.
              </p>
            </div>
          </div>

          <div className={styles.threeGrid}>
            {proofs.map((p, i) => (
              <div
                key={p.title}
                className={`${styles.darkCard} ${styles.pastel} ${proofTints[i % proofTints.length]} reveal-up`}
              >
                <h3 className={styles.proofTitle}>{p.title}</h3>
                <div className={styles.metric}>{p.metric}</div>
                <div className={styles.metricLabel}>{p.label}</div>
                <p className={styles.proofDesc}>{p.desc}</p>
                <Link href={p.link.href} className={styles.textLink}>
                  {p.link.label} <span className={styles.arrow}>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.centerRow}>
            <Link href="/results" className={styles.pillDark}>
              <span>See All Results &amp; Case Studies</span>
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT WORKING WITH SCALE SEO LOOKS LIKE — dark === */}
      <section className={`${styles.section} ${styles.dark}`} data-nav-theme="dark">
        <div className={styles.inner}>
          <div className={styles.head}>
            <h2 className={`${styles.h2} reveal-up`}>
              What Working With <em>Scale SEO Looks Like</em>
            </h2>
            <div className={`${styles.headBody} reveal-up`}>
              <p>
                Every engagement is managed directly by me rather than passed
                between salespeople, account managers, developers, writers, and
                junior SEO staff.
              </p>
              <p>
                That gives me a complete view of how the website, content,
                technical SEO, rankings, and business objectives fit together.
              </p>
              <p>
                For ongoing engagements, priorities are determined by what is
                most likely to improve performance&mdash;not by filling a
                predetermined monthly deliverables checklist.
              </p>
            </div>
          </div>

          <div className={styles.principleGrid}>
            {principles.map((p) => (
              <div key={p.num} className={`${styles.darkCard} reveal-up`}>
                <span className="index">{p.num}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <div className={styles.cardBody}>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ — light === */}
      <ServicesFaq />

      <Contact />
      <RevealOnScroll />
    </main>
  );
}
