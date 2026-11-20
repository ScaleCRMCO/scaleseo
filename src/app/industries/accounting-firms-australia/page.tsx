import type { Metadata } from "next";
import Image from "next/image";
import ServiceTemplate, { ICONS } from "../../services/ServiceTemplate";
import tpl from "../../services/template.module.css";
import v from "../../sections/v3/v3.module.css";

const URL = "https://scaleseo.co/industries/accounting-firms-australia";
const TITLE = "SEO for Accounting Firms Australia | Scale SEO";
const DESCRIPTION =
  "SEO for Australian accounting firms, backed by real experience with Brisbane practices. Grow visibility for business tax, BAS, SMSF and advisory services.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/industries/accounting-firms-australia" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: ["/images/melbourne-skyline-bw.webp"] },
};

const services = [
  { title: "Business Tax & BAS", body: "Company tax returns, BAS lodgements, tax planning, and ongoing business accounting." },
  { title: "SMSF Accounting", body: "SMSF setup, administration, annual returns, and compliance services." },
  { title: "Bookkeeping & Payroll", body: "Recurring bookkeeping, payroll, and cloud accounting services." },
  { title: "Business Advisory", body: "Cash flow planning, management reporting, business structures, and financial advice within your firm’s scope." },
];

const included = [
  { title: "SEO Strategy & Research", icon: "search", body: "Research the accounting services prospective clients search for, review competing firms, and identify opportunities in your target market." },
  { title: "Technical SEO", icon: "gear", body: "Improve crawling, indexing, structured data, website architecture, and other technical elements that can affect search visibility." },
  { title: "Service-Page Optimization", icon: "page", body: "Develop and improve pages for business tax, BAS, SMSF, bookkeeping, and advisory services, with clear information that helps prospective clients make informed decisions." },
  { title: "Accounting Content Strategy", icon: "pen", body: "Create useful articles addressing Australian tax and accounting questions, including EOFY planning, business structures, SMSF administration, and ATO requirements." },
  { title: "Local SEO", icon: "pin", body: "Improve your firm’s visibility in relevant Australian markets through Google Business Profile optimization, local search targeting, and location-specific website improvements." },
  { title: "Website Improvements & Reporting", icon: "chart", body: "Improve navigation, internal linking, and enquiry pathways while monitoring search impressions, clicks, rankings, and website performance." },
];

const reasons = [
  { title: "Experience in the Australian Market", icon: ICONS.pin, body: "We’ve worked directly with Australian accounting firms, including projects involving BAS, SMSF accounting, business tax, and advisory services." },
  { title: "SEO & Website Development Together", icon: ICONS.gear, body: "We handle both SEO strategy and website improvements. This allows us to make technical changes, develop service pages, and improve existing content as part of the same campaign." },
  { title: "Direct Communication", icon: ICONS.briefcase, body: "You’ll work directly with the specialist responsible for your SEO campaign, with clear communication about priorities, progress, and results." },
  { title: "Flexible Monthly Engagements", icon: ICONS.chart, body: "Our SEO services operate month-to-month without long-term lock-in contracts. Australian engagements are quoted individually in AUD." },
];

const faqs = [
  { q: "Do you work with accounting firms throughout Australia?", a: ["Yes. We work remotely with accounting firms across Australia, including Brisbane, Sydney, Melbourne, and other markets. Our direct Australian accounting experience includes Empire Accountants in Brisbane."] },
  { q: "How long does SEO take for an accounting firm?", a: ["SEO generally takes several months to produce meaningful results. The timeline depends on your website’s current visibility, competition, and the accounting services you’re targeting."] },
  { q: "Can you help us attract more business accounting clients?", a: ["Yes. We can prioritize services such as business tax, BAS, bookkeeping, SMSF accounting, and advisory rather than focusing only on individual tax returns."] },
  { q: "Do you also manage Google Ads?", a: ["Yes. Google Ads can support your firm’s lead generation while organic SEO develops. We can manage paid search alongside your ongoing SEO campaign."] },
  { q: "How much does accounting SEO cost in Australia?", a: ["Every engagement is quoted individually in Australian dollars (AUD). Pricing depends on your website, target markets, competition, and the work required.", "We offer flexible month-to-month SEO engagements without long-term lock-in contracts."] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/industries/accounting-firms-australia#webpage",
      "url": "https://scaleseo.co/industries/accounting-firms-australia",
      "name": "SEO for Accounting Firms Australia | Scale SEO",
      "description": "SEO for Australian accounting firms, backed by real experience in Brisbane. Grow visibility for business tax, BAS, SMSF and advisory services.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/industries/accounting-firms-australia#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/industries/accounting-firms-australia#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/industries/accounting-firms-australia#breadcrumb"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/industries/accounting-firms-australia#service",
      "name": "SEO for Accounting Firms in Australia",
      "serviceType": "Search Engine Optimization for Accounting Firms",
      "url": "https://scaleseo.co/industries/accounting-firms-australia",
      "description": "Search engine optimization services for Australian accounting and advisory firms, including technical SEO, service-page optimization, local SEO, accounting content strategy, website improvements and performance reporting.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Australia",
        "identifier": "AU"
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Australian accounting and advisory firms"
      },
      "serviceOutput": "Improved organic search visibility and website content for relevant accounting services.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Accounting SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "SEO Strategy and Research"
          },
          {
            "@type": "OfferCatalog",
            "name": "Technical SEO"
          },
          {
            "@type": "OfferCatalog",
            "name": "Accounting Service-Page Optimization"
          },
          {
            "@type": "OfferCatalog",
            "name": "Accounting Content Strategy"
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO"
          },
          {
            "@type": "OfferCatalog",
            "name": "Website Improvements and Reporting"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/industries/accounting-firms-australia#breadcrumb",
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
          "name": "Industries",
          "item": "https://scaleseo.co/industries"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Accounting Firms Australia",
          "item": "https://scaleseo.co/industries/accounting-firms-australia"
        }
      ]
    }
  ]
};

const Icon = ({ d }: { d: string }) => (
  <span className={v.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

export default function AccountingFirmsAustraliaPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceTemplate
        crumb="Accounting Firms Australia"
        parent={{ name: "Industries", href: "/industries" }}
        primaryLabel="Book a Consultation"
        title="SEO for Accounting Firms in Australia"
        heroLead="Scale SEO helps Australian accounting firms improve their visibility on Google and attract more enquiries for the services they want to grow."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        heroSecondary={{ href: "/results/empire-accountants", label: "Empire Accountants Case Study" }}
        statementLabel="Australian accounting firms"
        statement="Whether your firm focuses on business tax, BAS, SMSF accounting, bookkeeping, or business advisory, we develop SEO strategies around your services and the clients you’re looking to reach."
        top={
          <section className={`${v.white} ${v.sec}`} style={{ paddingTop: 0 }}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>SEO Built Around Your Accounting Services</h2>
                <div>
                  <p className={tpl.fitLabel}>Not every accounting firm wants to attract the same clients.</p>
                  <p className={v.p}>Some practices want to grow their business tax and advisory work. Others are looking for more SMSF clients, recurring bookkeeping engagements, or businesses that need ongoing accounting support.</p>
                  <p className={v.p}>We start by understanding which services are most important to your firm and how prospective clients search for them.</p>
                  <p className={v.p}><strong>Our experience covers:</strong></p>
                </div>
              </div>
              <div className={tpl.svcGrid}>
                {services.map((x) => (
                  <div key={x.title}>
                    <h3 className={v.h3}>{x.title}</h3>
                    <p className={v.p}>{x.body}</p>
                  </div>
                ))}
              </div>
              <p className={tpl.callout} style={{ marginTop: 48 }}>The goal is to help your firm become more visible for relevant searches, rather than simply increasing website traffic.</p>
              <div className={tpl.mkImg}>
                <Image src="/images/melbourne-skyline-bw.webp" alt="Black and white view of the downtown Melbourne skyline in Victoria, Australia" fill sizes="(max-width: 1360px) 100vw, 1280px" />
              </div>
            </div>
          </section>
        }
        included={{
          title: "What’s Included in Our Accounting SEO Services?",
          lead: "Every campaign is tailored to your website, competition, and business goals.",
          items: included,
          cta: { href: "/services/seo", label: "Explore Our SEO Services" },
          image: { src: "/images/empire-accountants-cover.webp", alt: "The Empire Accountants team in their Brisbane office" },
        }}
        splits={[
          {
            title: "Our Experience With Australian Accounting Firms",
            lead: "Empire Accountants — Brisbane, Queensland",
            body: (
              <>
                <p><strong>Page 5 → Page 1</strong> — Priority Google search rankings<br /><strong>2×</strong> — Organic search impressions and clicks</p>
                <p>Empire Accountants is an established Brisbane accounting and business advisory firm offering business tax, bookkeeping, SMSF, and advisory services.</p>
                <p>Our ongoing SEO work has included:</p>
                <ul className={tpl.splitList}>
                  <li>Expanding business accounting and tax service pages.</li>
                  <li>Improving SMSF and business advisory content.</li>
                  <li>Developing articles around Australian accounting and tax questions.</li>
                  <li>Strengthening technical SEO, structured data, and internal linking.</li>
                  <li>Improving local search visibility across Brisbane.</li>
                </ul>
                <p>The campaign has helped the firm achieve first-page rankings for priority searches, increase organic visibility, and generate regular new client enquiries.</p>
                <p className={tpl.splitSmall}>Results reflect an individual client engagement and are not a guarantee of future performance.</p>
              </>
            ),
            image: { src: "/images/empire-accountants-cover.webp", alt: "Empire Accountants, a Brisbane accounting firm and Scale SEO client" },
            cta: { href: "/results/empire-accountants", label: "Read the Empire Accountants Case Study" },
          },
        ]}
        feature2={
          <section className={`${v.grey} ${v.sec}`}>
            <div className={v.wrap}>
              <div className={v.head}><div><h2 className={v.h2}>Why Work With Scale SEO?</h2></div></div>
              <div className={`${v.points} ${v.cols4}`}>
                {reasons.map((r) => (
                  <div key={r.title} className={v.point}>
                    <Icon d={r.icon} />
                    <h3 className={v.h3}>{r.title}</h3>
                    <p className={v.p}>{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
        fit={{
          title: "How We Work With Australian Firms",
          label: "Scale SEO is based in Calgary, Canada, and works remotely with accounting firms in Australia.",
          body: (
            <>
              <p>Our existing experience with Brisbane-based clients means we&rsquo;re familiar with collaborating across time zones and managing ongoing website and SEO work remotely.</p>
              <p>We begin by reviewing your firm&rsquo;s website, target services, and competitive market. From there, we develop a plan and handle the ongoing implementation.</p>
              <p>You retain ownership of your website, content, and accounts throughout the engagement.</p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{
          title: "Let’s Discuss Your Firm’s SEO",
          lead: (
            <>
              <p>If you&rsquo;re looking to improve your accounting firm&rsquo;s visibility on Google, we&rsquo;d be happy to learn more about your business.</p>
              <p>Tell us which services you want to grow, who your ideal clients are, and what you&rsquo;d like to improve.</p>
              <p>We&rsquo;ll review your website and discuss an approach suited to your firm.</p>
            </>
          ),
          secondary: { href: "/results", label: "View Our Accounting SEO Experience" },
        }}
      />
    </main>
  );
}
