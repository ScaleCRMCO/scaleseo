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
  title: { absolute: "SEO Services Calgary | Accounting & Business SEO | Scale SEO" },
  description:
    "Calgary SEO services for accounting firms and established businesses. Technical SEO, content strategy, local SEO and ongoing optimization from Scale SEO.",
  alternates: { canonical: "/services/seo" },
};


/* === Content ============================================================ */

const included = [
  { title: "SEO Strategy & Research", body: "We research your market, competitors, and the searches most relevant to your business. Every campaign starts with clear priorities and an understanding of what your customers are looking for." },
  { title: "Technical SEO", body: "We address crawling, indexing, site structure, website performance, and other technical issues that affect how search engines access and understand your website." },
  { title: "On-Page SEO", body: "We improve page content, titles, headings, internal links, and website architecture to better match relevant searches and help visitors find the right services." },
  { title: "Content Strategy", body: "We develop service pages and supporting articles that answer real customer questions, demonstrate expertise, and strengthen your website\u2019s coverage of important topics." },
  { title: "Local & National SEO", body: "Whether you\u2019re targeting customers in Calgary or businesses across Canada, we build strategies around your service areas, competition, and search demand." },
  { title: "Website Improvements & Reporting", body: "We make ongoing website improvements and track search visibility, organic traffic, and enquiries to understand what\u2019s working and where to focus next." },
];

const cases = [
  {
    name: "Jensen CPA \u2014 Calgary, Canada",
    body: [
      "Website redevelopment, technical SEO, and accounting service-page improvements helped Jensen CPA increase its organic search visibility during the first four months of the campaign.",
    ],
    stats: [
      { from: 0, to: 92, prefix: "+", suffix: "%", label: "Organic Clicks" },
      { from: 0, to: 125, prefix: "+", suffix: "%", label: "Search Impressions" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants \u2014 Brisbane, Australia",
    body: [
      "A combination of technical improvements, accounting-focused content, and service-page optimization helped Empire Accountants move priority searches from page five to page one.",
    ],
    stats: [
      { from: 5, to: 1, prefix: "Page ", suffix: "", label: "Visibility for Priority Searches" },
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const markets: { title: string; body: string; href?: string; cta?: string }[] = [
  {
    title: "Accounting & Financial Services",
    body: "SEO for CPA firms, tax accountants, bookkeeping practices, and financial advisory businesses looking to attract more qualified clients.",
    href: "/industries/accounting-firms",
    cta: "Explore SEO for Accounting Firms",
  },
  {
    title: "Professional Services & B2B",
    body: "Search strategies for consultants and specialist businesses whose clients research and compare providers before making an enquiry.",
  },
  {
    title: "Construction & Contracting",
    body: "Local and service-based SEO for contractors looking to improve visibility for relevant residential and commercial projects.",
    href: "/results",
    cta: "View Our Client Work",
  },
];

const process: PinnedItem[] = [
  { title: "Research", body: ["We review your website, search performance, competitors, and business priorities to identify where the best opportunities exist."] },
  { title: "Implement", body: ["We improve technical foundations, service pages, content, and internal linking based on the agreed strategy."] },
  { title: "Refine", body: ["We monitor performance, review changes in search demand, and adjust priorities as your website develops."] },
];

const pricingPoints = [
  "Flexible month-to-month engagements",
  "No long-term contract lock-ins",
  "Clear priorities and performance reporting",
  "Full ownership of your website, content, and data",
];

const faqs: FaqItem[] = [
  { q: "How long does SEO take to work?", a: ["SEO typically takes several months to produce meaningful improvements. Timelines depend on your website\u2019s existing visibility, competition, and the work required."] },
  { q: "How much do SEO services cost?", a: ["Ongoing SEO starts at $3,000 CAD per month, plus applicable GST. Final pricing reflects your website, target markets, and campaign requirements."] },
  { q: "Do you provide SEO outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and works with businesses across Canada and Australia, with particular experience in accounting and professional services."] },
  { q: "Can you make SEO changes directly to our website?", a: ["Yes. Our services include hands-on implementation, from technical fixes and page optimization to content and website improvements. The exact scope depends on your website platform and engagement."] },
  { q: "Do you guarantee Google rankings?", a: ["No. Search rankings are influenced by competition, Google\u2019s algorithms, and other factors outside any agency\u2019s control. We focus on measurable improvements, relevant visibility, and sustainable growth."] },
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
      "name": "SEO Services Calgary | Accounting & Business SEO | Scale SEO",
      "description": "Calgary SEO services for accounting firms and established businesses. Technical SEO, content strategy, local SEO and ongoing optimization from Scale SEO.",
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
            Scale SEO provides search engine optimization for accounting firms,
            professional services, and established businesses across Canada and
            Australia.
          </p>
          <p>
            We combine technical SEO, content strategy, and website improvements
            to help businesses reach the people searching for their services.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Better search visibility. More qualified enquiries.</strong>
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
          <h2 className={ab.partnersTitle}>What Goes Into Our SEO Campaigns?</h2>
          <div className={ab.partnersText}>
            <p>
              Good SEO involves more than keywords and rankings. We identify
              what&rsquo;s holding your website back, find opportunities in your
              market, and make the improvements needed to compete.
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
          <h2 className={t.expTitle}>SEO Results From Real Businesses</h2>
          <div className={t.expBody}>
            <p>Our work is measured through actual client campaigns, not hypothetical projections.</p>
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
        <div className={t.expRow} style={{ alignItems: "center" }}>
          <p className={t.expStatLabel}>Results vary by client, competition, and campaign scope.</p>
          <div />
          <Link href="/results" className={`${t.box} ${t.boxBlue}`} style={{ color: "var(--h-white)" }}>
            <Corner />
            <span>Explore All Client Results &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === LOCAL / NATIONAL / B2B — homepage-style blue cards === */}
      <section className={g.section}>
        <h2 className={g.introTitle} style={{ maxWidth: "18ch" }}>
          Specialized in Accounting. Experienced Across Industries.
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
            <p>Accounting and professional services are central to our work, but our experience extends across consulting, construction, and other established service businesses.</p>
          </div>
        </div>
      </section>

      {/* === PROCESS — pinned scroll section === */}
      <PinnedPoints
        title="Our SEO Process"
        lead={
          <>
            SEO is ongoing work. Each stage builds on the improvements made
            before it.
          </>
        }
        items={process}
      />

      {/* === GOOD FIT — big H2, label left, text right === */}
      <section className={t.prioSection} style={{ borderTop: "1px solid var(--h-rule)" }}>
        <h2 className={t.prioTitle}>Is Ongoing SEO Right for Your Business?</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>
            Our campaigns are suited to established businesses looking to build
            a long-term source of qualified enquiries through Google.
          </p>
          <div className={t.prioBody}>
            <p>
              We typically work with businesses that have clear services, defined
              growth objectives, and a willingness to invest in ongoing website
              improvements.
            </p>
            <p>
              For businesses needing a one-time assessment, we also provide{" "}
              <Link href="/services/seo-audits" className={t.inlineLink}>SEO audits</Link>. Those looking for paid search
              support can explore our{" "}
              <Link href="/services/google-ads-management" className={t.inlineLink}>Google Ads management</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* === PRICING — navy, big H2, label left, text right === */}
      <section className={t.prioSection} style={{ background: "var(--h-navy)", color: "var(--h-white)" }}>
        <h2 className={t.prioTitle}>Monthly SEO Pricing</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel}>Starting at $3,000 CAD per month + applicable GST</p>
          <div className={t.prioBody}>
            <p>
              Our monthly SEO campaigns are scoped around your website,
              competitive market, and business objectives.
            </p>
            <p>
              Rather than fixed packages, we prioritize the work your website
              needs.
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
        heading="Let's Improve Your Search Visibility"
        lead="Tell us about your business, the services you want to grow, and what you're looking to achieve through Google. We'll review your requirements and discuss where SEO could make the greatest difference."
        cta={{ href: CONTACT_URL, label: "Book a Strategy Call →" }}
      />
    </main>
  );
}
