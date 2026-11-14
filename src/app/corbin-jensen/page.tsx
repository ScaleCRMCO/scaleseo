import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactSection from "../components/ContactSection";
import t from "../services/svc.module.css";
import styles from "./bio.module.css";

export const metadata: Metadata = {
  title: "Corbin Jensen | Founder & Lead Specialist, Scale SEO",
  description:
    "Corbin Jensen is an independent organic search specialist and founder of Scale SEO, based in Calgary, Alberta — engineering technical search architectures for accounting practices, B2B companies, and professional services across Canada.",
  alternates: { canonical: "/corbin-jensen" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/corbin-jensen-seo/";

const expertise: [string, string][] = [
  ["Technical SEO", "Website crawling, indexing, structured data, internal linking, redirects, and technical improvements."],
  ["Content & Search Strategy", "Keyword research, service-page development, competitor analysis, and useful content built around customer search intent."],
  ["Local SEO", "Google Business Profile optimization, geographic targeting, local service pages, and local search visibility."],
  ["Website Development", "Building and improving websites, including their structure, content, navigation, and technical foundations."],
];

const work = [
  {
    name: "Jensen CPA — Calgary, Canada",
    body: [
      "Website redevelopment and SEO for a Calgary accounting firm, including technical improvements, service-page optimization, and content strategy.",
      "The campaign recorded a 227% increase in average daily Google Search impressions and a 92% increase in organic clicks over the comparison periods documented in the case study.",
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
  },
  {
    name: "Empire Accountants — Brisbane, Australia",
    body: [
      "Ongoing SEO and website improvements for an accounting and advisory firm, including service-page development, industry content, structured data, and technical optimization.",
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
  {
    name: "MSV Plumbing Services — Brisbane, Australia",
    body: [
      "Website development and local SEO for a plumbing business, including a website of approximately 100 pages covering plumbing services and locations across Brisbane.",
    ],
    href: "/results/msv-plumbing-services",
    cta: "View MSV Plumbing Services Case Study",
  },
];

const articles = [
  {
    title: "How Much Does SEO Cost in Canada? 2026 Pricing Guide",
    body: "A practical guide to SEO pricing, monthly services, standalone audits, and the factors that affect costs.",
    href: "/blog/seo-cost-canada",
  },
  {
    title: "How Long Does SEO Take? A Realistic Timeline for Canadian Businesses",
    body: "An overview of realistic SEO timelines and the factors that influence organic search growth.",
    href: "/blog/how-long-does-seo-take",
  },
  {
    title: "How Accounting Firms Can Rank on Google in Canada",
    body: "A guide to service-page SEO, local search, website content, and technical improvements for Canadian accounting firms.",
    href: "/blog/how-accounting-firms-rank-on-google-in-canada",
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

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
      image: "https://scaleseo.co/images/corbin-portrait.webp",
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

export default function CorbinJensenPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* === HERO — name + intro left, B&W portrait right === */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={t.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Corbin Jensen" }]} schema={false} />
          </div>
          <h1 className={styles.name}>Corbin Jensen</h1>
          <p className={styles.role}>Founder &amp; SEO Specialist at Scale SEO</p>
          <div className={`${t.body} ${styles.intro}`}>
            <p className={t.lead}>
              Corbin Jensen is the founder of Scale SEO, an independent SEO
              consultancy based in Calgary, Alberta.
            </p>
            <p>
              He works directly with professional service and B2B businesses across
              Canada and internationally, helping them improve their Google Search
              visibility through technical SEO, content strategy, website
              development, and ongoing optimization.
            </p>
            <p>
              His experience includes working with accounting firms, consultants,
              contractors, and local service businesses in Canadian and Australian
              markets.
            </p>
          </div>
          <p className={styles.location}>Calgary, Alberta &middot; Serving Canada &amp; International Clients</p>
          <div className={t.boxRow}>
            <a href="https://www.linkedin.com/in/corbin-jensen-seo/" target="_blank" rel="noopener noreferrer" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>LinkedIn</span>
            </a>
            <Link href="/contact" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>Contact Corbin</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.portrait}>
            <Image
              src="/images/corbin-portrait.webp"
              alt="Corbin Jensen, founder and SEO specialist at Scale SEO"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 40vw"
            />
          </div>
        </div>
      </header>

      {/* === BACKGROUND === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>Background &amp; SEO Experience</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <p className={t.lead}>
              Corbin developed his SEO experience through hands-on work improving
              business websites, researching search opportunities, and
              implementing changes directly.
            </p>
            <p>
              Before establishing Scale SEO in Calgary in 2025, he worked with
              businesses in Australia on local SEO, website development, and
              organic search strategy.
            </p>
            <p>
              Today, his work focuses primarily on professional service and B2B
              businesses, particularly accounting and advisory firms.
            </p>
            <p>
              Unlike a traditional agency account manager, Corbin remains directly
              involved in each client&rsquo;s SEO strategy, website improvements, and
              performance analysis.
            </p>
            <Link href="/about" className={`${t.box} ${t.boxGrey}`} style={{ marginTop: 16 }}>
              <Corner />
              <span>Learn More About Scale SEO</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPERTISE — 2-column numbered === */}
      <section className={t.steps}>
        <h2 className={t.h2}>Areas of Expertise</h2>
        <p className={t.lead} style={{ marginTop: 20, maxWidth: 720 }}>
          Corbin&rsquo;s work covers the technical, content, and website development
          elements of SEO.
        </p>
        <div className={t.stepGrid}>
          {expertise.map(([title, body], i) => (
            <div key={title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> {title}
              </h3>
              <p className={`${t.body} ${t.dim}`}>{body}</p>
            </div>
          ))}
        </div>
        <p className={t.body} style={{ marginTop: 48, maxWidth: 760 }}>
          His approach combines SEO research with direct implementation, helping
          businesses move beyond recommendations and make practical improvements to
          their websites.
        </p>
      </section>

      {/* === CLIENT WORK — grey, aside + boxes === */}
      <section className={t.grey}>
        <div className={t.asideGrid}>
          <div className={t.aside}>
            <h2 className={t.h2}>Selected Client Work</h2>
            <p className={t.body}>
              Corbin has worked on SEO and website development projects for
              businesses across Canada and Australia.
            </p>
            <Link href="/results" className={`${t.box} ${t.boxBlue}`}>
              <Corner />
              <span>View All Client Projects</span>
            </Link>
          </div>
          <div className={styles.workList}>
            {work.map((w) => (
              <article key={w.href} className={t.card} style={{ minHeight: 0 }}>
                <h3 className={t.h3}>{w.name}</h3>
                <div className={`${t.body} ${t.dim}`} style={{ fontSize: 16 }}>
                  {w.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <Link href={w.href} className={t.inlineLink} style={{ fontSize: 16 }}>
                  {w.cta} &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === APPROACH — navy feature === */}
      <section className={t.featureWrap}>
        <div className={t.feature} style={{ minHeight: 0 }}>
          <div className={t.featureText}>
            <span className={t.eyebrow}>In Corbin&rsquo;s words</span>
            <h2 className={t.h2}>My Approach to SEO</h2>
            <p className={t.lead}>
              I believe good SEO starts with understanding the business, not simply
              creating a list of keywords.
            </p>
          </div>
          <div className={t.featureSide}>
            <div className={t.body}>
              <p>
                Before making changes, I look at which services matter most, how
                potential customers search for them, and where the website has
                opportunities to improve.
              </p>
              <p>
                Sometimes that means developing new service pages or content. Other
                times, it means improving existing pages, fixing technical problems,
                or making the website easier to navigate.
              </p>
              <p>
                I prefer working directly on client websites rather than producing
                recommendations that never get implemented.
              </p>
              <p>
                The goal is to improve visibility for searches that are relevant to
                the business and create more opportunities for qualified enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === ARTICLES — heading left, ruled rows right === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>Articles by Corbin Jensen</h2>
          <div className={t.body}>
            <p>
              Corbin writes about SEO strategy, technical SEO, search visibility,
              and the practical application of organic search for Canadian
              businesses.
            </p>
            <p>
              His articles draw on industry research, Google documentation, search
              performance data, and firsthand experience working on client
              websites.
            </p>
          </div>
          <Link href="/blog" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>View All SEO Articles</span>
          </Link>
        </div>
        <div className={t.rowsList}>
          {articles.map((a) => (
            <div key={a.href} className={t.rowsItem}>
              <h3 className={t.h3}>{a.title}</h3>
              <p className={`${t.body} ${t.dim}`}>{a.body}</p>
              <Link href={a.href} className={t.inlineLink} style={{ display: "inline-block", marginTop: 12 }}>
                Read Article &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ContactSection
        heading="Work Directly With Corbin"
        lead="As the founder of Scale SEO, Corbin works directly with clients on SEO strategy, technical improvements, website development, and ongoing search performance. If you're considering SEO for your business, you can discuss your website, goals, and opportunities directly with him."
        cta={{ href: BOOKING_URL, label: "Book an SEO Consultation →" }}
      />
    </main>
  );
}
