import type { Metadata } from "next";
import Image from "next/image";
import ServiceTemplate, { ICONS } from "../../services/ServiceTemplate";
import tpl from "../../services/template.module.css";
import v from "../../sections/v3/v3.module.css";
import { Btn } from "../../sections/v3/ui";

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
  { title: "Business Tax & BAS", body: "Reach companies looking for tax compliance, BAS lodgements and ongoing business accounting." },
  { title: "SMSF Accounting", body: "Improve visibility for SMSF setup, administration, annual returns and compliance support." },
  { title: "Bookkeeping & Payroll", body: "Reach businesses searching for ongoing bookkeeping, payroll and cloud accounting support." },
  { title: "Business Advisory", body: "Build visibility for businesses seeking financial reporting, cash flow support and strategic accounting advice." },
];

const included = [
  { title: "Keyword & Competitor Research", icon: "search", body: "We identify how prospective clients search for your services, where competing firms are visible, and which opportunities deserve attention." },
  { title: "Service-Page SEO", icon: "page", body: ["We improve existing pages and develop new ones for services such as business tax, BAS, SMSF accounting, bookkeeping and advisory.", "Each page is built to answer relevant client questions and make it easier to get in touch."] },
  { title: "Technical SEO", icon: "gear", body: "We work directly on website structure, indexing, internal links, metadata and structured data to improve your site\u2019s technical foundations." },
  { title: "Accounting Content", icon: "pen", body: "We develop useful content around the questions Australian business owners search for, including EOFY planning, company tax, SMSF administration and business expenses." },
  { title: "Local SEO", icon: "pin", body: "We improve your firm\u2019s presence in relevant local searches through Google Business Profile, location targeting and website improvements." },
  { title: "Ongoing Optimization", icon: "chart", body: "We monitor performance, review new opportunities and continue improving your website as your firm\u2019s priorities evolve." },
];

const reasons = [
  { title: "We\u2019ve Done the Work Before.", icon: ICONS.pin, body: "Our experience with Empire Accountants means we\u2019re familiar with Australian accounting services, their search markets and the content needed to represent them online." },
  { title: "We Handle the Implementation.", icon: ICONS.gear, body: "We don\u2019t just provide recommendations. We can improve service pages, website structure, technical SEO and content directly." },
  { title: "You\u2019ll Know Who\u2019s Doing the Work.", icon: ICONS.briefcase, body: "Your campaign is managed directly by the person responsible for its strategy and implementation, with clear communication and reporting." },
  { title: "No Long-Term Lock-In Contracts.", icon: ICONS.chart, body: "Our monthly SEO engagements are flexible, with a strategy and scope tailored to your firm." },
];

const faqs = [
  { q: "How much does SEO cost for an Australian accounting firm?", a: ["Every campaign is quoted individually in AUD. Pricing depends on your website, competition, target services and the work required."] },
  { q: "How long does accounting SEO take?", a: ["SEO typically takes several months to develop. We review your website and competitive market before recommending priorities and discussing realistic expectations."] },
  { q: "Can you help us attract more business clients?", a: ["Yes. We can focus your SEO campaign on business tax, BAS, bookkeeping, SMSF and advisory services rather than general accounting searches alone."] },
  { q: "Can you manage Google Ads alongside SEO?", a: ["Yes. We also manage Google Ads, allowing your firm to reach prospective clients through paid search while building its organic visibility."] },
  { q: "Do you only work with Brisbane firms?", a: ["No. We work remotely with accounting firms throughout Australia. Our existing Australian accounting experience includes Empire Accountants in Brisbane."] },
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
        heroLead="Get your accounting firm in front of more businesses searching for tax, bookkeeping, SMSF and advisory services."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        heroSecondary={{ href: "/results/empire-accountants", label: "Empire Accountants Case Study" }}
        statementLabel="Australian accounting firms"
        statement="We’ve helped Australian accounting practices improve their Google rankings, strengthen their websites, and attract more relevant client enquiries."
        statementNote="Accounting industry experience · Hands-on SEO & web development · Month-to-month engagements"
        top={
          <section className={`${v.white} ${v.sec}`} style={{ paddingTop: 0 }}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>We Know the Australian Accounting Market.</h2>
                <div>
                  <p className={tpl.fitLabel}>Accounting is competitive, particularly when firms are trying to attract business clients rather than individual tax returns.</p>
                  <p className={v.p}>We&rsquo;ve worked directly with Australian accounting practices, improving their websites and search visibility for services such as business tax, BAS, SMSF administration, bookkeeping and business advisory.</p>
                  <p className={v.p}>That experience means we understand the difference between attracting more website traffic and reaching the clients your firm actually wants.</p>
                </div>
              </div>
              <div className={tpl.expBox}>
                <div className={tpl.expImg}>
                  <Image src="/images/empire-accountants-cover.webp" alt="Empire Accountants, a Brisbane accounting firm and Scale SEO client" fill sizes="(max-width: 900px) 100vw, 560px" />
                </div>
                <div className={tpl.expText}>
                  <h3 className={v.h3}>Experience You Can See.</h3>
                  <p className={tpl.expClient}>Empire Accountants &mdash; Brisbane, Australia</p>
                  <div className={tpl.expStats}>
                    <div><strong>Page 5 &rarr; Page 1</strong><span>Priority Google keyword rankings</span></div>
                    <div><strong>2&times;</strong><span>Organic search impressions and clicks</span></div>
                    <div><strong>Regular enquiries</strong><span>New client opportunities through the firm&rsquo;s online presence</span></div>
                  </div>
                  <p className={v.p}>Our ongoing work with Empire Accountants has included technical SEO, service-page development, local search improvements and content focused on Australian business accounting.</p>
                  <Btn href="/results/empire-accountants" tone="navy">Explore the Empire Accountants Case Study</Btn>
                  <p className={tpl.splitSmall}><em>Results reflect one client engagement and are not a guarantee of future performance.</em></p>
                </div>
              </div>
            </div>
          </section>
        }
        included={{
          title: "Your Website and SEO, Taken Care Of.",
          lead: "From research and strategy to website improvements and reporting, we handle the work needed to strengthen your firm\u2019s organic search presence. No standard packages or unnecessary deliverables. We focus on the opportunities that make sense for your firm.",
          items: included,
          cta: { href: "/services/seo", label: "Explore Our SEO Services" },
          image: { src: "/images/melbourne-skyline-bw.webp", alt: "Black and white view of the downtown Melbourne skyline in Victoria, Australia" },
        }}
        feature={
          <section className={`${v.white} ${v.sec}`}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>Built Around the Clients You Want.</h2>
                <div>
                  <p className={tpl.fitLabel}>Not every accounting firm wants more individual tax returns.</p>
                  <p className={v.p}>You might be looking to grow your business advisory work, take on larger companies, or build a stronger base of recurring bookkeeping and tax clients.</p>
                  <p className={v.p}>We start by understanding your firm&rsquo;s priorities, then focus your SEO campaign on the services and searches that support them.</p>
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
            </div>
          </section>
        }
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
          title: "Working With Australian Accounting Firms.",
          label: "Scale SEO is based in Calgary, Canada, and works remotely with accounting practices across Australia.",
          body: (
            <>
              <p>We&rsquo;ve already established working relationships with Brisbane businesses and are familiar with managing websites, SEO campaigns and communication across time zones.</p>
              <p>Australian campaigns are quoted individually in AUD, based on your website, competition and the services you want to grow.</p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{
          title: "Let\u2019s See What Your Firm Could Be Missing.",
          lead: (
            <>
              <p>Tell us about your website and the accounting services you&rsquo;re looking to grow.</p>
              <p>We&rsquo;ll review your current search presence, discuss the opportunities in your market, and see whether we&rsquo;re the right fit.</p>
            </>
          ),
        }}
      />
    </main>
  );
}
