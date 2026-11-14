import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import ServicesMark from "../../sections/home/ServicesMark";
// Shared service page template (new brand)
import t from "../svc.module.css";

export const metadata: Metadata = {
  title: { absolute: "Google Ads Management Calgary | Scale SEO" },
  description:
    "Google Ads management in Calgary for accounting firms and professional services. Search campaigns, conversion tracking, and ongoing optimization.",
  alternates: { canonical: "/services/google-ads-management" },
};

const PAGE = "https://scaleseo.co/services/google-ads-management";

const included: { title: string; body: string[] }[] = [
  {
    title: "Campaign Strategy & Setup",
    body: [
      "We research relevant search terms, assess competition, and structure campaigns around your services, locations, and advertising budget.",
      "This includes keyword targeting, ad copy, campaign settings, and negative keywords.",
    ],
  },
  {
    title: "Conversion Tracking",
    body: [
      "We track meaningful actions, including phone calls and website enquiries, to understand how campaigns contribute to your business.",
      "The focus is on lead quality, not just clicks.",
    ],
  },
  {
    title: "Landing Page Optimization",
    body: [
      "A good advertisement needs a relevant landing page.",
      "We review your service pages, messaging, and enquiry process to help visitors find the information they need and take the next step.",
    ],
  },
  {
    title: "Ongoing Optimization",
    body: [
      "We monitor search terms, budgets, bidding, and conversion performance.",
      "Campaigns are refined using actual performance data, with a focus on reducing wasted spend and improving results over time.",
    ],
  },
];

const steps: { title: string; body: string[] }[] = [
  { title: "01 \u2014 Review", body: ["We assess your website, target market, advertising goals, and existing campaign performance."] },
  { title: "02 \u2014 Launch", body: ["We develop the campaign structure, configure targeting and tracking, and prepare the landing pages."] },
  { title: "03 \u2014 Optimize", body: ["We monitor campaign performance, refine targeting, and report on enquiries, costs, and opportunities for improvement."] },
];

const faqs: FaqItem[] = [
  { q: "Can I use Google Ads without monthly SEO?", a: ["Yes. We offer standalone Google Ads management as well as integrated SEO and paid search campaigns."] },
  { q: "How quickly can Google Ads generate leads?", a: ["Campaigns can begin showing eligible ads shortly after launch. Generating qualified enquiries depends on your budget, competition, targeting, and landing page performance."] },
  { q: "Do I need a separate landing page?", a: ["Not always. Existing service pages may be suitable if they\u2019re relevant to the advertisement and make it easy for visitors to enquire."] },
  { q: "Do you manage Google Ads outside Calgary?", a: ["Yes. We work with accounting firms and established service businesses across Canada and Australia, tailoring campaigns to their target markets."] },
  { q: "Do I own my Google Ads account?", a: ["Yes. You retain ownership of your advertising account, campaign data, and assets."] },
];

const adsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Google Ads Management Calgary | Scale SEO",
      description:
        "Google Ads management in Calgary for accounting firms and professional services. Search campaigns, conversion tracking, and ongoing optimization.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      mainEntity: { "@id": `${PAGE}#service` },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": `${PAGE}#breadcrumb` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${PAGE}#service`,
      name: "Google Ads Management",
      alternateName: ["PPC Management", "Google Search Ads Management"],
      serviceType: "Google Ads Management",
      url: PAGE,
      description:
        "Google Ads management including campaign setup and targeting, conversion tracking, landing page improvements and ongoing campaign optimization, managed alongside or independently of SEO.",
      provider: { "@id": "https://scaleseo.co/#organization" },
      mainEntityOfPage: { "@id": `${PAGE}#webpage` },
      areaServed: [
        { "@type": "City", name: "Calgary" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
      audience: { "@type": "BusinessAudience", audienceType: "Professional service and B2B businesses" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://scaleseo.co/services" },
        { "@type": "ListItem", position: 3, name: "Google Ads Management", item: PAGE },
      ],
    },
  ],
};

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

export default function GoogleAdsPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adsJsonLd) }}
      />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Google Ads Management" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>Google Ads Management in Calgary</h1>
        </div>
        <div className={t.heroBand}>
          <ServicesMark className={t.heroMark} slow />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/google-ads-search-results.webp"
            alt="Monitor showing sponsored Google Ads results for a corporate tax search"
            style={{ height: "clamp(220px, 30vw, 440px)", transform: "translate(6%, 12%)" }}
          />
        </div>
      </header>

      {/* === INTRO === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <p className={t.lead}>
            <strong>
              Reach potential clients when they&rsquo;re searching for your
              services.
            </strong>
          </p>
          <div className={t.chips}>
            {["Search Campaigns", "Conversion Tracking", "Landing Pages", "Keyword Research", "Optimization"].map((c) => (
              <span key={c} className={t.chip}>{c}</span>
            ))}
          </div>
        </div>
        <div className={t.splitRight}>
          <div className={t.body}>
            <p className={t.lead}>
              Scale SEO provides Google Ads management for accounting firms,
              professional services, and established businesses across Canada
              and Australia.
            </p>
            <p>
              We build and manage search campaigns around relevant keywords,
              qualified enquiries, and measurable business outcomes.
            </p>
          </div>
          <div className={t.boxRow}>
            <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === ADS & SEO === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>Google Ads &amp; SEO, Working Together</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <p className={t.lead}>Paid visibility today. Organic growth over time.</p>
            <p>
              Google Ads helps businesses reach potential customers through
              sponsored search results, while SEO builds long-term organic
              visibility.
            </p>
            <p>
              We manage both channels with your wider website strategy in mind,
              aligning keywords, landing pages, and conversion tracking.
            </p>
            <p>
              For accounting firms, this can mean targeting searches for
              corporate tax, bookkeeping, and advisory services while developing
              organic visibility for those same services.
            </p>
            <Link href="/services/seo" className={`${t.box} ${t.boxGrey}`} style={{ marginTop: 16 }}>
              <Corner />
              <span>Explore Monthly SEO Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === INCLUDED === */}
      <section className={t.steps}>
        <h2 className={t.h2}>What&rsquo;s Included in Google Ads Management?</h2>
        <div className={t.stepGrid}>
          {included.map((item, i) => (
            <div key={item.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> {item.title}
              </h3>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === IN PRACTICE — navy feature === */}
      <section className={t.featureWrap}>
        <div className={t.feature}>
          <div className={t.featureText}>
            <span className={t.eyebrow}>Client Work</span>
            <h2 className={t.h2}>Google Ads Management in Practice</h2>
          </div>
          <div className={t.featureSide}>
            <div className={t.body}>
              <p>
                <strong>MSV Plumbing Services &mdash; Brisbane, Australia</strong>
                <br />
                Google Ads, SEO &amp; Website Development
              </p>
              <p>
                We manage Google Search campaigns for MSV Plumbing Services,
                targeting high-intent plumbing searches across Brisbane.
              </p>
              <p>
                Our work includes keyword research, location targeting, negative
                keywords, call conversion tracking, and ongoing optimization.
              </p>
              <p>
                With SEO and website development managed alongside advertising,
                we can make improvements across both the campaigns and the pages
                receiving traffic.
              </p>
            </div>
            <div className={t.featureLinks}>
              <Link href="/results/msv-plumbing-services" className={`${t.box} ${t.boxGrey}`}>
                <Corner />
                <span>View MSV Plumbing Services Case Study</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>Our Google Ads Process</h2>
        </div>
        <div className={t.rowsList}>
          {steps.map((s) => (
            <div key={s.title} className={t.rowsItem}>
              <h3 className={t.h3}>{s.title}</h3>
              <div className={t.body}>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PRICING === */}
      <section className={t.pricing} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.pricingAside}>
          <h2 className={t.h2}>Google Ads Management Pricing</h2>
        </div>
        <div className={t.pricingBody}>
          <p className={t.pricingLead}>Custom Monthly Quote</p>
          <div className={t.body}>
            <p>
              Our management fees are based on your campaign scope, target
              markets, and advertising requirements.
            </p>
            <p>Google Ads can be managed independently or alongside an ongoing SEO campaign.</p>
            <p>
              Advertising spend is paid directly to Google and is separate from
              our management fees. You retain ownership of your account and
              campaign data.
            </p>
          </div>
          <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Discuss Google Ads Management</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Get More From Google Ads"
        lead="Whether you're starting a new campaign or looking to improve an existing one, we'll review your goals and recommend a practical approach."
        points={[
          "Campaigns focused on qualified enquiries",
          "Clear reporting and ongoing optimization",
          "Full ownership of your advertising account and data",
        ]}
        cta={{ href: "/contact", label: "Book a Strategy Call →" }}
      />
    </main>
  );
}
