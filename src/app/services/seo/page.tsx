import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesMark from "../../sections/home/ServicesMark";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Shared service page template (new brand)
import t from "../svc.module.css";
import ab from "../../about/page.module.css";
import g from "../../sections/home/ServicesGrid.module.css";
import CountUp from "../../components/CountUp";
import PinnedPoints, { type PinnedItem } from "../../components/PinnedPoints";

export const metadata: Metadata = {
  title: "Search Engine Optimization Services Calgary | Scale SEO",
  description:
    "Ongoing SEO services for professional service and B2B businesses. Technical SEO, content, on-page and local SEO managed directly from Calgary.",
  alternates: { canonical: "/services/seo" },
};


/* === Content ============================================================ */

const included = [
  { title: "SEO Strategy & Research", body: "Identify valuable search opportunities through keyword research, competitor analysis, and an assessment of your existing website performance." },
  { title: "Technical SEO", body: "Address crawling, indexing, redirects, structured data, website performance, and other technical issues that may limit organic visibility." },
  { title: "On-Page SEO", body: "Improve service pages, headings, metadata, internal linking, and website structure to better match search intent and help visitors find what they need." },
  { title: "SEO Content Strategy", body: "Develop useful service content and supporting resources around the questions, services, and industries most relevant to your customers." },
  { title: "Local & National SEO", body: "Improve visibility in the markets your business serves, whether that\u2019s Calgary, multiple Canadian cities, or customers across the country." },
  { title: "Website Optimization & Reporting", body: "Improve navigation, calls to action, and other website elements while monitoring organic traffic, search rankings, and relevant enquiries." },
];

const cases = [
  {
    name: "Jensen CPA",
    body: [
      "During the first four months, Jensen CPA increased Google Search impressions by 125% and organic clicks by 92%.",
      "The campaign focused on corporate tax services, website structure, and commercially relevant search opportunities.",
    ],
    stats: [
      { from: 0, to: 125, prefix: "+", suffix: "%", label: "Search Impressions" },
      { from: 0, to: 92, prefix: "+", suffix: "%", label: "Organic Clicks" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants",
    body: [
      "Ongoing SEO helped improve priority commercial keyword rankings and organic search performance.",
      "The work included service-page optimization, technical SEO, content development, and internal linking.",
    ],
    stats: [
      { from: 5, to: 1, prefix: "Page ", suffix: "", label: "Up from page 5" },
      { from: 0, to: 2, prefix: "", suffix: "\u00d7", label: "Search Visibility & Clicks" },
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const markets = [
  {
    title: "Local SEO",
    body: "For businesses targeting customers in Calgary or other specific service areas, SEO can include Google Business Profile improvements, local service pages, and geographic keyword targeting.",
  },
  {
    title: "National SEO",
    body: "For businesses serving customers across Canada, the focus shifts toward broader search competition, specialized service pages, website structure, and content relevant to a national audience.",
    href: "/services/national-seo",
    cta: "Explore National SEO Services",
  },
  {
    title: "Professional Services & B2B SEO",
    body: "For accounting firms, consultants, and B2B businesses, I prioritize commercially relevant searches rather than traffic volume alone.",
    href: "/industries/accounting-firms",
    cta: "Explore SEO for Accounting Firms",
  },
];

const process: PinnedItem[] = [
  { title: "Review & Research", body: ["Assess your website\u2019s current search performance, technical issues, competitors, and opportunities."] },
  { title: "Build a Strategy", body: ["Develop a prioritized SEO plan based on your most valuable services and the improvements your website needs."] },
  { title: "Implement Improvements", body: ["Make technical changes, optimize important pages, improve website structure, and develop relevant content."] },
  { title: "Monitor & Refine", body: ["Track search performance, review results, and adjust priorities as your website develops."] },
];

const fit = [
  "Offers services people actively search for on Google.",
  "Operates in a competitive local or national market.",
  "Wants to improve its existing website and search visibility.",
  "Values ongoing website improvements rather than one-off recommendations.",
];

const pricingPoints = [
  "Month-to-month engagements",
  "No long-term contract lock-ins",
  "Direct access to the person doing the work",
  "You retain ownership of your website, content, and accounts",
];

const faqs: FaqItem[] = [
  { q: "How long does SEO take to work?", a: ["SEO generally takes several months to produce meaningful results. Timelines depend on your website\u2019s current condition, competition, existing visibility, and target searches."] },
  { q: "How much do SEO services cost?", a: ["Ongoing SEO starts at $3,000 CAD per month, plus applicable taxes. Each campaign is scoped individually based on your business needs."] },
  { q: "Do you provide SEO outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and works remotely with businesses across Canada, including [Vancouver](/locations/vancouver) and [Edmonton](/locations/edmonton). I also work with international clients."] },
  { q: "Can you make SEO changes directly to my website?", a: ["Yes. I implement technical, content, and structural improvements directly on client websites, including those built with Webflow, WordPress, and other supported platforms."] },
  { q: "Do you guarantee Google rankings?", a: ["No. Google rankings cannot be guaranteed. I focus on practical improvements and measurable progress in relevant search visibility, traffic, and business enquiries."] },
];

const CONTACT_URL = "/contact";

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service + BreadcrumbList graph, linked to the
   global #website and #organization nodes in layout.tsx. Includes this
   page's BreadcrumbList, so <Breadcrumbs> is rendered with schema={false}.
   The FAQPage schema comes from <ServicesFaq>. === */
const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo#webpage",
      "url": "https://scaleseo.co/services/seo",
      "name": "Search Engine Optimization Services | Scale SEO",
      "description": "Ongoing search engine optimization services for professional service and B2B businesses. Scale SEO combines technical SEO, on-page optimization, content, local SEO and website improvements to grow qualified organic traffic.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo#service",
      "name": "Search Engine Optimization Services",
      "alternateName": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "url": "https://scaleseo.co/services/seo",
      "description": "Ongoing SEO services combining SEO strategy, keyword research, technical SEO, on-page optimization, content strategy, local SEO, internal linking, website improvements and performance reporting.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Professional service and B2B businesses"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Campaign Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Strategy and Keyword Research"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Content Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal Linking and Site Architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website and Conversion Improvements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Tracking and Reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo#breadcrumb",
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
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://scaleseo.co/services/seo"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function SeoServicePage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />

      {/* === HERO — breadcrumbs + big title, then image band === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>SEO Services in Calgary</h1>
        </div>
        <div className={t.heroBand}>
          <ServicesMark className={t.heroMark} slow />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gsc-performance-mockup-3d.webp"
            alt="Google Search Console performance data showing clicks and impressions growth"
          />
        </div>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Scale SEO provides hands-on search engine optimization for
            professional service and B2B businesses in Calgary and across Canada.
          </p>
          <p>
            I&rsquo;m Corbin Jensen, founder of Scale SEO. I manage every
            campaign directly, combining technical SEO, website improvements, and
            content strategy to help your business reach the right customers.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Ongoing SEO for businesses that want more qualified enquiries through Google.</strong>
          </span>
          <div className={t.btnRow}>
            <Link href="/results" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>View Client Results &rarr;</span>
            </Link>
            <Link href={CONTACT_URL} className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — About-page staggered boxes === */}
      <section className={ab.partners} style={{ borderTop: "1px solid var(--h-rule)" }}>
        <div className={ab.partnersHead}>
          <h2 className={ab.partnersTitle}>What&rsquo;s Included in SEO Services?</h2>
          <div className={ab.partnersText}>
            <p>
              Every website has different priorities. I focus on the
              improvements most likely to strengthen your search visibility and
              generate relevant business opportunities.
            </p>
          </div>
        </div>
        <div className={ab.partnersGrid}>
          {included.map((item, i) => (
            <article
              key={item.title}
              className={ab.pBox}
              style={i < 3 ? { gridColumn: i + 2, gridRow: 1 } : { gridColumn: i - 2, gridRow: 2 }}
            >
              <span className={ab.pNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={ab.pTitle}>{item.title}</h3>
              <p className={ab.pBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === RESULTS — full-bleed navy with case study rows === */}
      <section className={t.expSection}>
        <div className={t.expTop}>
          <h2 className={t.expTitle}>SEO Results From Real Client Campaigns</h2>
          <div className={t.expBody}>
            <p>SEO should contribute to meaningful business outcomes, not just higher traffic numbers.</p>
            <p>
              Scale SEO works directly with businesses to improve the pages,
              content, and technical foundations that support their organic
              search performance.
            </p>
          </div>
        </div>
        {cases.map((c) => (
          <div key={c.href} className={t.expRow}>
            <div className={t.expLeft}>
              <h3 className={t.expName}>{c.name}</h3>
              <Link href={c.href} className={`${t.box} ${t.boxBlue}`}>
                <Corner />
                <span>{c.cta} &rarr;</span>
              </Link>
            </div>
            <div className={t.expText}>
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className={t.expStats}>
                {c.stats.map((m) => (
                  <div key={m.label}>
                    <span className={t.expStat}>
                      <CountUp from={m.from} to={m.to} prefix={m.prefix} suffix={m.suffix} />
                    </span>
                    <span className={t.expStatLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href={c.href} className={t.expImg} tabIndex={-1} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" loading="lazy" />
            </Link>
          </div>
        ))}
        <p className={t.expStatLabel} style={{ display: "block", padding: "0 40px 48px" }}>
          Results reflect individual client campaigns and are not guarantees of future performance.
        </p>
      </section>

      {/* === LOCAL / NATIONAL / B2B — homepage-style blue cards === */}
      <section className={g.section}>
        <h2 className={g.introTitle} style={{ maxWidth: "18ch" }}>
          SEO for Local, National &amp; Professional Service Businesses
        </h2>
        <div className={g.grid}>
          {markets.map((m, i) => {
            const inner = (
              <>
                <span className={g.cellIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={g.cellTitle}>{m.title}</h3>
                <p className={g.cellDesc}>{m.body}</p>
                {m.href && (
                  <span className={g.cellLink}>
                    <span>{m.cta} &rarr;</span>
                    <span className={g.plus} aria-hidden="true">+</span>
                  </span>
                )}
              </>
            );
            return m.href ? (
              <Link key={m.title} href={m.href} className={g.cell}>{inner}</Link>
            ) : (
              <div key={m.title} className={g.cell}>{inner}</div>
            );
          })}
          <div className={g.outro} style={{ marginTop: 48 }}>
            <p>The right SEO strategy depends on your customers, competition, and geographic market.</p>
          </div>
        </div>
      </section>

      {/* === PROCESS — pinned scroll section === */}
      <PinnedPoints
        title="How My SEO Process Works"
        lead={
          <>
            Every campaign begins with understanding your website, customers,
            and business goals. You work directly with me throughout the
            engagement, from strategy to implementation and reporting.
          </>
        }
        items={process}
      />

      {/* === GOOD FIT — big H2, label left, text right === */}
      <section className={t.prioSection} style={{ borderTop: "1px solid var(--h-rule)" }}>
        <h2 className={t.prioTitle}>Is Ongoing SEO Right for Your Business?</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>
            Ongoing SEO is generally best suited to businesses that want to build
            a sustainable source of qualified enquiries through organic search.
          </p>
          <div className={t.prioBody}>
            <p>It&rsquo;s particularly relevant if your business:</p>
            <ul className={t.checks}>
              {fit.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p>
              I primarily work with accounting firms, professional service
              businesses, consultants, and B2B companies.
            </p>
            <p>
              If your business needs a one-time technical assessment or more
              immediate lead generation, an{" "}
              <Link href="/services/seo-audits" className={t.inlineLink}>SEO audit</Link> or{" "}
              <Link href="/services/google-ads-management" className={t.inlineLink}>Google Ads campaign</Link>{" "}
              may be a better starting point.
            </p>
          </div>
        </div>
      </section>

      {/* === PRICING — navy, big H2, label left, text right === */}
      <section className={t.prioSection} style={{ background: "var(--h-navy)", color: "var(--h-white)" }}>
        <h2 className={t.prioTitle}>Monthly SEO Pricing</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel}>Ongoing SEO starts at $3,000 CAD per month, plus applicable taxes.</p>
          <div className={t.prioBody}>
            <p>
              Every engagement is scoped around your website, competition,
              target markets, and business priorities.
            </p>
            <p>
              There are no fixed Bronze, Silver, or Gold packages. Instead, the
              work is planned around the improvements most relevant to your
              business.
            </p>
            <ul className={t.checks} style={{ borderTopColor: "rgba(254,254,254,0.2)" }}>
              {pricingPoints.map((f) => (
                <li key={f} style={{ borderBottomColor: "rgba(254,254,254,0.2)" }}>{f}</li>
              ))}
            </ul>
            <Link href="/pricing" className={`${t.box} ${t.boxBlue}`} style={{ alignSelf: "flex-start", marginTop: 16, color: "var(--h-white)" }}>
              <Corner />
              <span>View SEO Pricing &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Let's Improve Your Organic Search Performance"
        lead="If your website isn't attracting enough qualified enquiries, I can help identify what's limiting its performance and where the best opportunities may be. You'll work directly with me to understand your website, competition, and the SEO improvements worth prioritizing."
        cta={{ href: CONTACT_URL, label: "Book a Strategy Call →" }}
        note={
          <>
            Looking for a one-time assessment?{" "}
            <Link href="/services/seo-audits">Explore SEO Audits</Link>.
          </>
        }
      />
    </main>
  );
}
