import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import CountUp from "../../components/CountUp";
import PinnedPoints, { type PinnedItem } from "../../components/PinnedPoints";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
import ServicesMark from "../../sections/home/ServicesMark";
import t from "../../services/svc.module.css";
import g from "../../sections/home/ServicesGrid.module.css";

const TITLE = "SEO Services Vancouver, BC | Scale SEO";
const DESCRIPTION =
  "Founder-led SEO services for Vancouver businesses. Scale SEO helps accounting firms, consultants and B2B companies improve Google visibility.";
const URL = "https://scaleseo.co/locations/vancouver";
const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/locations/vancouver" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: ["/images/vancouver-skyline.webp"] },
};

/* === Content ============================================================ */

const matters: PinnedItem[] = [
  {
    title: "Target the Services Your Customers Actually Need",
    body: [
      "A business offering several services shouldn’t rely on one general homepage to explain everything.",
      "Dedicated, useful service pages help potential customers find specific solutions and understand whether your business is the right fit.",
      "For professional service firms, this might include corporate tax, bookkeeping, business advisory, consulting, or other specialized services.",
    ],
  },
  {
    title: "Understand Your Geographic Market",
    body: [
      "Not every Vancouver business needs to target the entire Lower Mainland.",
      "Some depend on customers within Vancouver itself. Others serve Burnaby, Richmond, North Vancouver, Surrey, or clients throughout British Columbia.",
      "The right approach depends on where your customers are located, whether you have physical offices, and how people search for your services.",
    ],
  },
  {
    title: "Build Trust Through Your Website",
    body: [
      "For accounting firms, consultants, and other professional service businesses, choosing a provider often involves more research than a single Google search.",
      "Clear service descriptions, genuine client reviews, professional credentials, team profiles, and useful resources help visitors evaluate your business before making contact.",
    ],
  },
  {
    title: "Turn Search Visibility Into Enquiries",
    body: [
      "Higher rankings are only useful when they help your business reach the right audience.",
      "Your website should make it easy for visitors to understand what you offer, who you work with, and how to get started.",
      "SEO and website improvements should support that entire process.",
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
    body: "New websites and improvements to existing sites, with an emphasis on clear navigation, useful content, and a strong foundation for search engines.",
    cta: "Explore Website Development",
  },
  {
    href: "/services/google-ads-management",
    title: "Google Ads Management",
    body: "Paid search campaigns designed to reach potential customers searching for your services, with attention to targeting, conversion tracking, and ongoing optimization.",
    cta: "Explore Google Ads",
  },
  {
    href: "/services/geo",
    title: "AI Search Optimization",
    body: "Improvements to website content, structure, and business information that help search engines and AI-powered search platforms understand your business.",
    cta: "Explore AI Search Optimization",
  },
];

const cases = [
  {
    name: "Jensen CPA",
    body: [
      "SEO and website development for a Calgary accounting firm, including improvements to corporate tax, bookkeeping, and other business accounting service pages.",
      "The campaign recorded a 125% increase in Google Search impressions and a 92% increase in organic clicks during its initial four-month reporting period.",
    ],
    stats: [
      { to: 125, label: "Increase in Google Search impressions" },
      { to: 92, label: "Increase in organic clicks" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants",
    body: [
      "Ongoing SEO for an accounting and advisory firm, including technical improvements, service-page optimization, structured data, and educational accounting content.",
    ],
    stats: [],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const steps = [
  { title: "Understand Your Business", body: "Review your website, core services, target customers, current search visibility, and competitive market." },
  { title: "Identify Search Opportunities", body: "Determine which services, pages, and search terms offer relevant opportunities, then establish priorities based on your website and business goals." },
  { title: "Improve Your Website", body: "Implement technical, structural, and content improvements directly where website access and platform capabilities allow." },
  { title: "Monitor and Refine", body: "Review search performance, rankings, and available enquiry data to guide ongoing improvements." },
];

const reasons = [
  { title: "Direct Specialist Involvement", body: "Work directly with the person responsible for your SEO strategy and website improvements, without layers of account management." },
  { title: "Experience With Professional Services", body: "Scale SEO has worked on accounting, advisory, consulting, and service-business websites across Canadian and Australian markets." },
  { title: "Hands-On Implementation", body: "SEO recommendations are supported by practical website improvements, rather than reports alone." },
  { title: "Flexible Monthly Engagements", body: "Ongoing SEO services operate month-to-month, without long-term lock-in contracts." },
];

const faqs: FaqItem[] = [
  {
    q: "Do you provide SEO services in Vancouver?",
    a: ["Yes. Scale SEO works remotely with Vancouver businesses from its Calgary base. Campaigns are tailored to each client’s services, customers, and target geographic markets."],
  },
  {
    q: "Does my SEO company need to be located in Vancouver?",
    a: [
      "Not necessarily. Many SEO activities, including website optimization, content development, technical improvements, and reporting, can be managed remotely.",
      "What matters is understanding your business and the markets you’re trying to reach.",
    ],
  },
  {
    q: "Can you help my business rank across Metro Vancouver?",
    a: [
      "Scale SEO can develop strategies for businesses serving Vancouver and surrounding communities, including Burnaby, Richmond, North Vancouver, and Surrey.",
      "The approach depends on your actual service area, business locations, and customer demand. Rankings in individual markets cannot be guaranteed.",
    ],
  },
  {
    q: "How much do SEO services cost?",
    a: [
      "Ongoing SEO engagements at Scale SEO start from $3,000 CAD per month, plus applicable taxes.",
      "Pricing depends on your website, competition, services, and campaign requirements.",
    ],
    link: { href: "/pricing", label: "View SEO Pricing →" },
  },
  {
    q: "How long does SEO take?",
    a: [
      "SEO improvements generally develop over several months, depending on your website’s current condition, competition, and target searches.",
      "Scale SEO reviews your starting position before establishing priorities and realistic expectations.",
    ],
  },
  {
    q: "Do you work with accounting firms in Vancouver?",
    a: [
      "Yes. Scale SEO has particular experience with accounting and advisory firms, including SEO for corporate tax, bookkeeping, business advisory, and fractional CFO services.",
      "Potential conflicts with existing accounting clients are reviewed before accepting new engagements.",
    ],
    link: { href: "/industries/accounting-firms", label: "Explore SEO for Accounting Firms →" },
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service (areaServed Vancouver) + BreadcrumbList,
   linked to the global #website and #organization nodes. FAQPage comes from
   <ServicesFaq>. === */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": `${URL}#service` },
      mainEntity: { "@id": `${URL}#service` },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      primaryImageOfPage: { "@type": "ImageObject", url: "https://scaleseo.co/images/vancouver-skyline.webp" },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "SEO Services in Vancouver, BC",
      serviceType: "Search Engine Optimization",
      url: URL,
      description: DESCRIPTION,
      mainEntityOfPage: { "@id": `${URL}#webpage` },
      provider: { "@id": "https://scaleseo.co/#organization" },
      areaServed: [
        { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" } },
        { "@type": "City", name: "Burnaby" },
        { "@type": "City", name: "Richmond" },
        { "@type": "City", name: "North Vancouver" },
        { "@type": "City", name: "Surrey" },
      ],
      offers: { "@type": "Offer", priceSpecification: { "@type": "UnitPriceSpecification", price: 3000, priceCurrency: "CAD", unitText: "MONTH" } },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Vancouver", item: URL },
      ],
    },
  ],
};

/* === Page =============================================================== */

export default function VancouverPage() {
  return (
    <main className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Vancouver" }]} schema={false} />
          </div>
          <h1 className={t.title}>SEO Services in Vancouver, BC</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vancouver-skyline.webp"
            alt="Black and white view of the downtown Vancouver skyline and False Creek marina at dusk, with BC Place and the North Shore mountains behind"
            style={{ objectPosition: "center 55%" }}
          />
        </div>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Scale SEO provides search engine optimization services for Vancouver
            businesses looking to improve their visibility on Google and attract
            more qualified enquiries.
          </p>
          <p>
            Based in Calgary and working with clients remotely across Canada,
            Scale SEO specializes in SEO for accounting firms, professional
            service businesses, and B2B companies.
          </p>
          <p>
            From website improvements and content strategy to ongoing SEO
            management, every campaign is tailored to the services, customers,
            and markets that matter most to your business.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Independent, founder-led SEO for Vancouver businesses.</strong>
          </span>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Book an SEO Consultation &rarr;</span>
          </a>
        </div>
      </section>

      {/* === VANCOUVER MARKET — big H2, label left, text right === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>SEO for Vancouver&rsquo;s Business Market</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>Each business needs a different approach to search.</p>
          <div className={t.prioBody}>
            <p>
              Vancouver has a diverse business economy, with established
              professional service firms, growing consultancies, technology
              businesses, and companies serving customers across Metro Vancouver.
            </p>
            <p>
              For these businesses, appearing on Google isn&rsquo;t simply about
              ranking for a broad industry keyword.
            </p>
            <p>
              An accounting firm in downtown Vancouver may want to attract
              corporate tax clients. A consultant in Burnaby may serve businesses
              throughout British Columbia. A professional service firm in
              Richmond may be focused on a specific industry rather than
              customers in one neighbourhood.
            </p>
            <p>
              Scale SEO develops strategies around these differences, helping
              businesses identify the services and searches most relevant to
              their growth.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT MATTERS — pinned scroll section === */}
      <PinnedPoints title="What Matters for SEO in Vancouver?" items={matters} />

      {/* === SERVICES — blue grid === */}
      <section className={g.section} id="services">
        <h2 className={g.introTitle} style={{ maxWidth: "16ch" }}>
          SEO &amp; Website Services for Vancouver Businesses
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
              Scale SEO provides ongoing SEO management alongside related
              services that support website visibility and customer acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — full-bleed navy with case study rows === */}
      <section className={t.expSection}>
        <div className={t.expTop}>
          <h2 className={t.expTitle}>SEO Experience With Professional Service Businesses</h2>
          <div className={t.expBody}>
            <p>
              Scale SEO has hands-on experience improving websites for
              professional service and B2B businesses in Canada and Australia.
            </p>
            <p>
              These projects have involved technical SEO, service-page
              development, content strategy, website improvements, and ongoing
              organic search management.
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
                        <CountUp to={m.to} prefix="+" suffix="%" />
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
        <h2 className={t.h2}>How Scale SEO Works With Vancouver Clients</h2>
        <div className={t.body} style={{ maxWidth: 720, marginTop: 24 }}>
          <p>Scale SEO is based in Calgary and works with businesses in Vancouver remotely.</p>
          <p>
            Clients work directly with founder Corbin Jensen throughout the
            engagement, from initial research and strategy to website
            implementation and performance analysis.
          </p>
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
        <p className={t.body} style={{ maxWidth: 720, marginTop: 56 }}>
          The process is collaborative, with regular communication and clear
          priorities throughout the campaign.
        </p>
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

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Grow Your Business With SEO in Vancouver"
        lead="Looking to improve your website's visibility and attract more relevant enquiries? Scale SEO works with Vancouver businesses that want practical, hands-on SEO supported by clear communication and ongoing website improvements."
        cta={{ href: BOOKING_URL, label: "Book an SEO Consultation →" }}
      />
    </main>
  );
}
