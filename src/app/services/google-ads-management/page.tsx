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
    "Google Ads management for Calgary and Canadian businesses. Founder-led campaigns, conversion tracking and landing page improvements, with or without SEO.",
  alternates: { canonical: "/services/google-ads-management" },
};

const PAGE = "https://scaleseo.co/services/google-ads-management";

const included: { title: string; body: string[] }[] = [
  {
    title: "Campaign Setup & Targeting",
    body: [
      "I build or improve Google Search campaigns around your services, target locations, and business goals.",
      "This includes campaign structure, keyword research, location targeting, ad copy, and relevant ad assets.",
    ],
  },
  {
    title: "Conversion Tracking",
    body: [
      "Clicks alone don’t tell us whether advertising is working.",
      "I review or configure appropriate conversion tracking, such as phone calls and enquiry forms, so we can better understand which campaigns are generating useful customer actions.",
    ],
  },
  {
    title: "Landing Page Improvements",
    body: [
      "The page someone visits after clicking an ad matters.",
      "I review your landing pages to ensure they match the searcher’s intent, clearly explain your services, and make it easy to enquire.",
      "Where needed, I can also make website improvements or develop dedicated landing pages as part of an agreed project scope.",
    ],
  },
  {
    title: "Ongoing Campaign Optimization",
    body: [
      "Once campaigns are running, I monitor search terms, negative keywords, budgets, bidding, and conversion performance.",
      "I use the available data to identify wasted spend, test improvements, and adjust the campaigns as performance develops.",
    ],
  },
];

const steps: { title: string; body: string[] }[] = [
  {
    title: "01 — Review & Strategy",
    body: [
      "I review your business, website, advertising goals, and existing campaigns if you have them.",
      "From there, I recommend a suitable approach, including the campaign focus, initial budget, and any website improvements needed before launch.",
    ],
  },
  {
    title: "02 — Setup & Launch",
    body: [
      "I develop the campaigns, configure targeting and relevant tracking, and review the landing pages before launching.",
    ],
  },
  {
    title: "03 — Monitor & Improve",
    body: [
      "After launch, I review performance and make adjustments based on search terms, enquiries, costs, and available conversion data.",
      "You’ll receive clear updates on campaign performance and the changes being made.",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Can I use Google Ads without monthly SEO?",
    a: [
      "Yes. I also consider standalone Google Ads projects.",
      "Before recommending a campaign, I’ll review your website, goals, and available budget to determine whether paid search is likely to be a suitable investment.",
    ],
  },
  {
    q: "How quickly can Google Ads generate leads?",
    a: [
      "Google Ads can begin showing your business in sponsored search results shortly after an eligible campaign launches.",
      "However, the time required to generate enquiries varies depending on competition, budget, search demand, landing pages, and campaign performance.",
    ],
  },
  {
    q: "Do I need a separate landing page?",
    a: [
      "Not always. If your existing service pages are relevant and make it easy for visitors to enquire, they may be suitable.",
      "If the website needs improvement, I’ll explain what I recommend before additional development work begins.",
    ],
  },
  {
    q: "Do I own my Google Ads account?",
    a: ["Yes. Your Google Ads account, campaign data, and advertising assets remain under your ownership."],
  },
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
        "Google Ads management for Calgary and Canadian businesses. Founder-led campaigns, conversion tracking and landing page improvements, with or without SEO.",
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
              Google Ads campaigns focused on reaching potential customers when
              they&rsquo;re actively searching for your services.
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
              Scale SEO provides Google Ads management for professional service and
              B2B businesses in Calgary and across Canada.
            </p>
            <p>
              I manage search campaigns alongside SEO to help businesses generate
              enquiries while building their longer-term organic visibility.
            </p>
            <p>
              Standalone Google Ads management is also available when your website,
              budget, and business goals make it a good fit.
            </p>
          </div>
          <div className={t.boxRow}>
            <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call &rarr;</span>
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
            <p className={t.lead}>
              Google Ads can help your business appear in sponsored search results
              while your organic visibility is still developing.
            </p>
            <p>
              Rather than managing advertising separately from your website, I look
              at how your campaigns, landing pages, and SEO strategy work together.
            </p>
            <p>
              Paid search can also reveal which search terms generate enquiries,
              helping identify opportunities for new service pages and ongoing SEO
              improvements.
            </p>
            <p>
              For businesses investing in both services, this creates a more
              coordinated approach to attracting customers through Google.
            </p>
            <Link href="/services/seo" className={`${t.box} ${t.boxGrey}`} style={{ marginTop: 16 }}>
              <Corner />
              <span>Explore Monthly SEO Services &rarr;</span>
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
                My Google Ads work includes managing search campaigns for MSV
                Plumbing Services, a Brisbane plumbing business.
              </p>
              <p>
                The campaigns focus on high-intent searches for services such as
                blocked drain clearing, with geographic targeting, call conversion
                tracking, and ongoing keyword and search-term optimization.
              </p>
              <p>
                Because I also manage MSV&rsquo;s website and SEO, I can review the
                advertising and landing pages together rather than treating them as
                separate projects.
              </p>
            </div>
            <div className={t.featureLinks}>
              <Link href="/results/msv-plumbing-services" className={`${t.box} ${t.boxGrey}`}>
                <Corner />
                <span>View MSV Plumbing Services Case Study &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === PROCESS === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>How Google Ads Management Works</h2>
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
          <p className={t.pricingLead}>
            Google Ads management is quoted individually based on your campaign
            requirements, advertising budget, and whether you&rsquo;re also working
            with Scale SEO on monthly SEO.
          </p>
          <div className={t.body}>
            <p>
              Your advertising spend is paid directly to Google and is separate
              from Scale SEO&rsquo;s management fees.
            </p>
            <p>You retain ownership of your Google Ads account and its data.</p>
          </div>
          <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Discuss Google Ads Management &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Work Directly With Your Google Ads Manager"
        lead="If you're considering Google Ads, either independently or alongside monthly SEO, I can review your goals and recommend an appropriate starting point."
        cta={{ href: "/contact", label: "Book a Strategy Call →" }}
        note={
          <>
            I&rsquo;m <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of
            Scale SEO. I work directly on Google Ads campaigns and client websites,
            connecting paid search with the SEO and development work that supports
            longer-term visibility.
          </>
        }
      />
    </main>
  );
}
