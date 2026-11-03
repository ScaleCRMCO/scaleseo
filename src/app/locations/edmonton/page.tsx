import type { Metadata } from "next";
import Link from "next/link";
import AreasWeServe from "../../components/AreasWeServe";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import CountUp from "../../components/CountUp";
import PinnedPoints, { type PinnedItem } from "../../components/PinnedPoints";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
import ServicesMark from "../../sections/home/ServicesMark";
import t from "../../services/svc.module.css";
import g from "../../sections/home/ServicesGrid.module.css";

const TITLE = "SEO Services Edmonton, AB | Scale SEO";
const DESCRIPTION =
  "Founder-led SEO services in Edmonton for accounting firms, contractors, professional services and B2B companies. Improve your Google visibility with Scale SEO.";
const URL = "https://scaleseo.co/locations/edmonton";
const CONTACT_URL = "/contact";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations/edmonton" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: ["/images/edmonton-skyline.webp"] },
};

/* === Content ============================================================ */

const matters: PinnedItem[] = [
  {
    title: "Focus on High-Value Services",
    body: [
      "Not every website visitor is a potential customer.",
      "For accounting firms, contractors, and professional service businesses, the goal is to reach people searching for the services you actually want to provide.",
      "This starts with understanding search intent and building useful pages around your core offerings, rather than trying to rank for every possible keyword.",
    ],
  },
  {
    title: "Target the Right Areas",
    body: [
      "Edmonton businesses don\u2019t all serve the same geographic market.",
      "Some work primarily within the city, while others serve Sherwood Park, St. Albert, Spruce Grove, Leduc, and surrounding communities.",
      "A contractor covering the Edmonton region may need a different local SEO strategy than an accounting firm with one office or a consultancy serving clients throughout Alberta.",
      "Your website should reflect where you genuinely operate and how customers search for your services.",
    ],
  },
  {
    title: "Show Why Customers Should Choose You",
    body: [
      "For professional services and larger projects, customers often compare several businesses before making contact.",
      "Your website should clearly explain your experience, services, qualifications, and past work.",
      "Detailed service pages, genuine reviews, team information, and real project examples can help build confidence before the first conversation.",
    ],
  },
  {
    title: "Make Your Website Easy to Use",
    body: [
      "Getting visitors to your website is only part of the process.",
      "Clear navigation, fast-loading pages, straightforward service information, and accessible contact options help potential customers take the next step.",
      "SEO should support both search visibility and the experience people have once they arrive.",
    ],
  },
];

const sectors = [
  {
    title: "Accounting & Financial Services",
    body: [
      "Accounting firms can benefit from dedicated pages for corporate tax, bookkeeping, financial reporting, and business advisory services.",
      "Useful resources addressing common business tax and accounting questions can also help prospective clients understand a firm\u2019s expertise.",
    ],
  },
  {
    title: "Construction & Contracting",
    body: [
      "Construction businesses often need visibility for specific project types and service areas.",
      "A concrete contractor, for example, may benefit from separate pages for driveways, commercial concrete, sidewalks, and other services, supported by genuine project photos and clear geographic coverage.",
    ],
  },
  {
    title: "Professional Services & B2B",
    body: [
      "Consultancies and other B2B providers may serve a narrower audience across a much larger geographic area.",
      "For these businesses, SEO often involves clearly explaining specialized services, demonstrating relevant experience, and reaching decision-makers researching potential providers.",
    ],
  },
];

const services = [
  {
    href: "/services/seo",
    title: "Search Engine Optimization",
    body: "Ongoing SEO focused on improving your website’s technical foundations, service pages, content, and visibility for relevant searches.",
    cta: "Explore SEO Services",
  },
  {
    href: "/services/web-development",
    title: "Website Development",
    body: "Website development and improvements focused on clear structure, useful content, usability, and search engine accessibility.",
    cta: "Explore Website Development",
  },
  {
    href: "/services/google-ads-management",
    title: "Google Ads Management",
    body: "Search advertising campaigns designed to reach potential customers actively looking for your services, with ongoing attention to targeting and campaign performance.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/geo",
    title: "AI Search Optimization",
    body: "Website and content improvements that help AI-powered search platforms better understand your business, services, and expertise.",
    cta: "Explore AI Search Optimization",
  },
];

const cases = [
  {
    name: "Jensen CPA",
    body: [
      "Jensen CPA is a Calgary accounting firm providing corporate tax, bookkeeping, and fractional CFO services.",
      "Scale SEO improved the firm\u2019s website structure, developed service-focused content, and implemented ongoing SEO improvements.",
      "During the first four months, Google Search impressions increased by 125% and organic clicks increased by 92%.",
    ],
    stats: [
      { to: 125, prefix: "+", suffix: "%", label: "Increase in Google Search impressions" },
      { to: 92, prefix: "+", suffix: "%", label: "Increase in organic clicks" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Kinsmen Consulting",
    body: [
      "Kinsmen Consulting is a concrete contractor serving Calgary and surrounding areas.",
      "Scale SEO worked on the company\u2019s website, developing dedicated service pages, improving technical SEO, and targeting relevant construction searches.",
      "The project demonstrates how a service-based contractor can use its website to explain specific capabilities and attract enquiries for different types of work.",
    ],
    stats: [{ to: 500, prefix: "$", suffix: "K", label: "Revenue generated from new jobs" }],
    href: "/results/kinsmen-consulting",
    cta: "View Kinsmen Consulting Case Study",
    img: "/images/kinsmen-hero.jpg",
  },
];

const steps = [
  { title: "Review Your Website", body: "Start with an assessment of your website, existing search visibility, competitors, and the services you want to grow." },
  { title: "Build a Focused Strategy", body: "Identify relevant keywords, technical issues, content opportunities, and website improvements based on your business priorities." },
  { title: "Implement Improvements", body: "Make practical changes to your website, including service-page updates, technical fixes, content development, and internal linking." },
  { title: "Measure and Improve", body: "Monitor organic search performance, review available enquiry data, and adjust priorities as the campaign develops." },
];

const reasons = [
  { title: "Work Directly With Your SEO Specialist", body: "Your campaign is handled by the person developing the strategy and making the improvements. There are no account managers or outsourced handoffs." },
  { title: "Experience With Alberta Businesses", body: "Scale SEO has worked with Alberta accounting and construction businesses, providing hands-on SEO and website development." },
  { title: "SEO Supported by Website Improvements", body: "Recommendations are backed by implementation, helping address the website issues that may be limiting your visibility." },
  { title: "Flexible Monthly Services", body: "Ongoing SEO engagements are month-to-month, with no long-term contracts." },
];

const faqs: FaqItem[] = [
  {
    q: "Do you provide SEO services in Edmonton?",
    a: ["Yes. Scale SEO is based in Calgary and works remotely with businesses in Edmonton and across Alberta."],
  },
  {
    q: "Can you help businesses rank in Edmonton and surrounding areas?",
    a: [
      "Scale SEO can develop local SEO strategies for businesses serving Edmonton, Sherwood Park, St. Albert, Spruce Grove, Leduc, and other relevant communities.",
      "The approach depends on your actual service areas, business locations, and target customers. Specific rankings cannot be guaranteed.",
    ],
  },
  {
    q: "Do you work with Edmonton accounting firms?",
    a: [
      "Yes. Scale SEO specializes in SEO for accounting and professional service businesses, including firms offering corporate tax, bookkeeping, and advisory services.",
      "Potential conflicts with existing accounting clients are reviewed before accepting new engagements.",
    ],
    link: { href: "/industries/accounting-firms", label: "SEO for Accounting Firms \u2192" },
  },
  {
    q: "How much do SEO services cost in Edmonton?",
    a: [
      "Ongoing SEO services start at $3,000 CAD per month, plus applicable taxes.",
      "Pricing depends on your website, competition, and the work required.",
    ],
    link: { href: "/pricing", label: "View SEO Pricing \u2192" },
  },
  {
    q: "How long does SEO take to produce results?",
    a: [
      "SEO improvements typically take several months to develop, depending on your website\u2019s current condition, competition, and target keywords.",
      "Scale SEO focuses on ongoing improvements rather than promising immediate rankings.",
    ],
  },
  {
    q: "Can SEO be managed remotely?",
    a: [
      "Yes. Website audits, technical improvements, content development, reporting, and most other SEO activities can be managed remotely.",
      "Scale SEO works directly with clients through online communication and shared access to the relevant website and analytics platforms.",
    ],
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service (areaServed Edmonton) + BreadcrumbList,
   linked to the global #website and #organization nodes. FAQPage comes from
   <ServicesFaq>. === */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/locations/edmonton#webpage",
      "url": "https://scaleseo.co/locations/edmonton",
      "name": "SEO Services Edmonton, AB | Scale SEO",
      "description": "Founder-led SEO services for Edmonton businesses. Scale SEO helps accounting firms, professional services, contractors, and B2B companies improve their Google visibility.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/locations/edmonton#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/locations/edmonton#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/locations/edmonton#service",
      "name": "SEO Services in Edmonton, Alberta",
      "serviceType": "Search Engine Optimization",
      "description": "Search engine optimization services for Edmonton businesses, including technical SEO, service page optimization, content strategy, website improvements, and ongoing SEO management.",
      "url": "https://scaleseo.co/locations/edmonton",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Edmonton",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Alberta"
          }
        },
        {
          "@type": "City",
          "name": "St. Albert"
        },
        {
          "@type": "Place",
          "name": "Sherwood Park"
        },
        {
          "@type": "City",
          "name": "Spruce Grove"
        },
        {
          "@type": "City",
          "name": "Leduc"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Accounting firms, professional service businesses, construction contractors, and B2B companies"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/locations/edmonton#breadcrumb",
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
          "name": "Edmonton SEO Services",
          "item": "https://scaleseo.co/locations/edmonton"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function EdmontonPage() {
  return (
    <main className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Edmonton SEO Services" }]} schema={false} />
          </div>
          <h1 className={t.title}>SEO Services in Edmonton, Alberta</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/edmonton-skyline.webp"
            alt="Black and white view of the downtown Edmonton skyline above the North Saskatchewan River valley, with the Walterdale Bridge and Rossdale power plant in the foreground"
            style={{ objectPosition: "center 55%" }}
          />
        </div>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Scale SEO helps Edmonton businesses improve their visibility on
            Google, strengthen their websites, and attract more qualified
            enquiries through search engine optimization.
          </p>
          <p>
            Based in Calgary, Scale SEO works with accounting firms, professional
            service businesses, contractors, and B2B companies across Alberta.
            Every campaign is managed directly by founder Corbin Jensen, with a
            focus on practical improvements that support long-term growth.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Independent SEO services for Edmonton businesses.</strong>
          </span>
          <Link href={CONTACT_URL} className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Book an SEO Consultation &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === EDMONTON MARKET — big H2, label left, text right === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>SEO for Edmonton&rsquo;s Business Community</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>But different businesses need different approaches.</p>
          <div className={t.prioBody}>
            <p>
              Edmonton is home to a broad mix of professional services,
              construction companies, industrial businesses, and growing local
              firms.
            </p>
            <p>
              For many of these businesses, Google is an important way for
              potential customers to compare providers and find the right
              services.
            </p>
            <p>
              An Edmonton accounting firm might want to attract more corporate
              tax and business advisory clients. A concrete contractor may need
              visibility for driveways, commercial slabs, and other projects. A
              B2B consultancy might serve companies across Alberta rather than
              customers in one city.
            </p>
            <p>
              Scale SEO builds strategies around these differences, focusing on
              the services, locations, and types of customers that matter most to
              each business.
            </p>
            <p>
              For businesses serving clients across Canada rather than one
              region, see{" "}
              <Link href="/services/national-seo" className={t.inlineLink}>national SEO services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT MATTERS — pinned scroll section === */}
      <PinnedPoints title="What Matters for SEO in Edmonton?" items={matters} />

      {/* === KEY SECTORS — heading + ruled rows === */}
      <section className={t.listSection} style={{ padding: 0 }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>SEO for Edmonton&rsquo;s Key Business Sectors</h2>
          <div className={`${t.body} ${t.listIntro}`}>
            <p>
              Edmonton&rsquo;s economy includes established professional
              services, construction, manufacturing, and businesses supporting
              Alberta&rsquo;s wider industrial sector.
            </p>
            <p>
              These industries often depend on different types of searches and
              customer relationships.
            </p>
          </div>
        </div>
        <div className={t.rows}>
          {sectors.map((item) => (
            <div key={item.title} className={t.row}>
              <h3 className={t.h3}>{item.title}</h3>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SERVICES — blue grid === */}
      <section className={g.section} id="services">
        <h2 className={g.introTitle} style={{ maxWidth: "16ch" }}>
          SEO &amp; Digital Services for Edmonton Businesses
        </h2>
        <div className={g.grid}>
          {[services[0], null, services[1], services[2], services[3]].map((s, i) =>
            s ? (
              <Link key={s.href} href={s.href} className={g.cell}>
                <span className={g.cellIndex}>{String(services.indexOf(s) + 1).padStart(2, "0")}</span>
                <h3 className={g.cellTitle}>{s.title}</h3>
                <p className={g.cellDesc}>{s.body}</p>
                <span className={g.cellLink}>
                  <span>{s.cta} &rarr;</span>
                  <span className={g.plus} aria-hidden="true">+</span>
                </span>
              </Link>
            ) : (
              <ServicesMark key={i} />
            ),
          )}
          <div className={g.outro} style={{ marginTop: 0, justifyContent: "flex-end" }}>
            <p>
              Scale SEO provides ongoing SEO management and related digital
              services to help Edmonton businesses improve their online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — full-bleed navy with case study rows === */}
      <section className={t.expSection}>
        <div className={t.expTop}>
          <h2 className={t.expTitle}>Experience Working With Alberta Businesses</h2>
          <div className={t.expBody}>
            <p>
              Scale SEO has worked with businesses in Calgary and the surrounding
              Alberta market, helping improve their websites, search visibility,
              and ability to attract relevant customers.
            </p>
            <p>
              While these projects are not based in Edmonton, they demonstrate
              practical experience with Alberta businesses and the services
              Scale SEO provides.
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
              {c.stats.length > 0 && (
                <div className={t.expStats}>
                  {c.stats.map((m) => (
                    <div key={m.label}>
                      <span className={t.expStat}>
                        <CountUp from={(m as { from?: number }).from ?? 0} to={m.to} prefix={m.prefix} suffix={m.suffix} />
                      </span>
                      <span className={t.expStatLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link href={c.href} className={t.expImg} tabIndex={-1} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" loading="lazy" />
            </Link>
          </div>
        ))}
      </section>

      {/* === HOW WE WORK — steps === */}
      <section className={t.steps}>
        <h2 className={t.h2}>Working With Scale SEO in Edmonton</h2>
        <div className={t.body} style={{ maxWidth: 720, marginTop: 24 }}>
          <p>Scale SEO operates from Calgary and provides SEO services to Edmonton businesses remotely.</p>
          <p>
            As both cities are in Alberta, clients work with a consultant
            familiar with the provincial business environment, while benefiting
            from a straightforward, remote working relationship.
          </p>
          <p>Every engagement is managed directly by founder Corbin Jensen.</p>
        </div>
        <div className={t.stepGrid}>
          {steps.map((s, i) => (
            <div key={s.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> &mdash; {s.title}
              </h3>
              <p className={`${t.body} ${t.dim}`}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === WHY WORK WITH SCALE SEO — marquee heading + points === */}
      <section className={t.whySection}>
        <div className={t.whyMarquee}>
          <div className={t.whyTrack}>
            {[0, 1, 2, 3].map((n) => (
              <span key={n} className={t.whyItem} aria-hidden={n > 0}>
                {n === 0 ? <h2 className={t.whyTitle}>Why Work With Scale SEO?</h2> : <span className={t.whyTitle}>Why Work With Scale SEO?</span>}
                <svg className={t.whyMark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
                  <circle cx="183" cy="183" r="164" strokeWidth="36" />
                  <path d="M101 139 H224.5 V262" strokeWidth="38" />
                </svg>
              </span>
            ))}
          </div>
        </div>
        <div className={t.whyList}>
          {reasons.map((r) => (
            <article key={r.title} className={t.whyPoint}>
              <h3 className={t.whyPointTitle}>{r.title}</h3>
              <p className={t.whyPointBody}>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === AREAS WE SERVE — details + Google Maps embed === */}
      <AreasWeServe place="Edmonton, AB" others={[{ label: "Calgary", href: "/" }, { label: "Vancouver", href: "/locations/vancouver" }]} />

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Grow Your Business With SEO in Edmonton"
        lead="Looking to improve your website's visibility and attract more relevant enquiries? Scale SEO provides founder-led SEO services for Edmonton businesses, combining practical website improvements with ongoing search optimization. Get in touch to discuss your website, business goals, and where SEO could make a difference."
        cta={{ href: CONTACT_URL, label: "Book an SEO Consultation →" }}
      />
    </main>
  );
}
