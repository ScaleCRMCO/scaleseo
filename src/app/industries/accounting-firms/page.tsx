import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceTemplate, { ICONS } from "../../services/ServiceTemplate";
import tpl from "../../services/template.module.css";
import v from "../../sections/v3/v3.module.css";
import { Btn } from "../../sections/v3/ui";

export const metadata: Metadata = {
  title: { absolute: "SEO for Accounting Firms in Canada | Scale SEO" },
  description:
    "SEO for accounting firms across Canada. Improve visibility for corporate tax, bookkeeping, advisory and other high-value services with founder-led SEO.",
  alternates: { canonical: "/industries/accounting-firms" },
};

const accountingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/industries/accounting-firms#webpage",
      "url": "https://scaleseo.co/industries/accounting-firms",
      "name": "SEO for Accounting Firms in Canada | Scale SEO",
      "description": "SEO for accounting firms across Canada. Improve visibility for corporate tax, bookkeeping, advisory and other high-value services with founder-led SEO.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/industries/accounting-firms#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/industries/accounting-firms#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/industries/accounting-firms#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/industries/accounting-firms#service",
      "name": "SEO for Accounting Firms",
      "alternateName": [
        "Accounting Firm SEO",
        "SEO for Accountants",
        "CPA Firm SEO"
      ],
      "serviceType": "Search Engine Optimization for Accounting Firms",
      "url": "https://scaleseo.co/industries/accounting-firms",
      "description": "Founder-led SEO services for accounting firms and CPA practices across Canada, including technical SEO, accounting service page optimization, local SEO, content strategy, internal linking and website improvements.",
      "mainEntityOfPage": {
        "@id": "https://scaleseo.co/industries/accounting-firms#webpage"
      },
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Accounting firms, CPA practices, bookkeeping firms and tax advisory businesses"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/industries/accounting-firms#breadcrumb",
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
          "name": "Accounting Firms",
          "item": "https://scaleseo.co/industries/accounting-firms"
        }
      ]
    }
  ]
};

const services = [
  { title: "Corporate Tax & Compliance", body: "For firms providing T2 corporate tax returns, year-end financial statements, corporate tax planning, and ongoing business tax compliance." },
  { title: "Bookkeeping & Payroll", body: "For practices looking to develop recurring relationships with businesses requiring monthly bookkeeping, payroll, financial reporting, and cloud accounting support." },
  { title: "Fractional CFO & Business Advisory", body: "For firms providing outsourced financial leadership, cash flow planning, budgeting, forecasting, and strategic financial advice." },
  { title: "Personal & Specialized Tax", body: "For practices offering personal tax preparation, complex returns, and other specialist taxation services where these align with the firm’s goals." },
];

const lessons: { title: string; body: React.ReactNode[] }[] = [
  { title: "Not All Accounting Traffic Is Equal", body: ["A firm specializing in corporate tax and advisory services may have little interest in attracting hundreds of individual tax-return enquiries.", "We start by understanding which services the firm wants to grow and which types of clients are most valuable to its business.", "Search visibility should support those priorities, not distract from them."] },
  { title: "Important Services Need Room to Stand on Their Own", body: ["Corporate tax, bookkeeping, and fractional CFO services solve different problems for different clients.", "Combining them into one general accounting page can make it harder to explain each service in sufficient detail.", "For Jensen CPA, we developed dedicated pages around its core accounting services, supported by clearer navigation and internal linking."] },
  { title: "Accounting Expertise Should Be Visible on the Website", body: ["Tax legislation, filing obligations, and business structures can be difficult for prospective clients to understand.", "Useful articles offer accounting firms an opportunity to explain these subjects while helping readers discover relevant services.", "Our content work with Jensen CPA has included topics such as shareholder loans, capital cost allowance, corporate tax deadlines, and Section 85 rollovers.", "The accounting knowledge comes from the firm. Our role is to make that expertise accessible, well-organized, and easier to discover through search."] },
  { title: "Local Reputation and Search Visibility Work Together", body: ["For many Canadian accounting firms, clients still search locally, even when the services themselves can be delivered remotely.", "A clear business profile, accurate company information, relevant service pages, and a well-structured website all contribute to how a firm presents itself online.", "We consider the firm’s location, target clients, and service area when developing its search strategy."] },
];

const faqs = [
  { q: "How much does SEO cost for an accounting firm?", a: ["Our ongoing SEO engagements start at $3,000 CAD per month, plus applicable GST. Pricing depends on your website, target services, competition, and the work required."] },
  { q: "How long does accounting SEO take?", a: ["SEO generally takes several months to produce meaningful results. The timeline depends on your existing website, competition, and the changes required. We establish realistic priorities after reviewing your current search presence."] },
  { q: "Can you help our firm attract more corporate tax and business clients?", a: ["Yes. We can prioritize corporate tax, bookkeeping, fractional CFO, and business advisory searches rather than focusing exclusively on general accounting keywords."] },
  { q: "Can you develop content for our accounting website?", a: ["Yes. We develop service pages, educational articles, and other supporting website content. Technical tax and accounting information should be reviewed by a qualified professional at your firm before publication."] },
  { q: "Do you manage Google Ads alongside SEO?", a: ["Yes. Where appropriate, we use Google Ads to support organic search campaigns and reach prospective clients searching for relevant accounting services."] },
  { q: "Do you work with competing accounting firms?", a: ["We review potential conflicts before accepting new engagements. Our policy is to avoid directly competing accounting firms targeting the same services and customers within the same market."] },
];

const Icon = ({ d }: { d: string }) => (
  <span className={v.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

export default function AccountingFirmsPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingJsonLd) }} />
      <ServiceTemplate
        crumb="Accounting Firms"
        parent={{ name: "Industries", href: "/industries" }}
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        hideSecondary
        title="SEO for Accounting Firms & CPA Practices in Canada"
        heroLead="Search strategies for Canadian accounting firms looking to attract more corporate tax, bookkeeping, fractional CFO, and advisory clients."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        statementLabel="Canadian accounting firms"
        statementHeading
        statement="Built Around the Work You Want More Of."
        statementNote="Founder-led SEO · Month-to-month engagements · Market conflict checks"
        statementBody={[
          "Not every accounting firm wants more personal tax returns. Some are looking to attract established companies, develop recurring bookkeeping relationships, or expand their corporate tax and advisory work.",
          "We help Canadian accounting firms improve their search visibility around those priorities, combining industry knowledge with hands-on SEO and website development.",
        ]}
        top={
          <section className={`${v.white} ${v.sec}`} style={{ paddingTop: 0 }}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>Accounting SEO, Informed by Experience.</h2>
                <div>
                  <p className={tpl.fitLabel}>Accounting is a specialist industry. The terminology matters, the services are often complex, and potential clients need confidence in the firm they&rsquo;re choosing.</p>
                  <p className={v.p}>Our work with Canadian and Australian accounting practices has given us direct experience developing websites and search strategies around corporate tax, bookkeeping, fractional CFO, and business advisory services.</p>
                  <p className={v.p}>We&rsquo;ve learned that a successful accounting website needs more than a list of services. It needs to explain each service clearly, demonstrate the firm&rsquo;s expertise, and help the right clients find what they&rsquo;re looking for.</p>
                  <p className={v.p}>That understanding informs how we approach every accounting engagement.</p>
                </div>
              </div>
            </div>
          </section>
        }
        feature={
          <section className={`${v.grey} ${v.sec}`}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <div>
                  <span className={tpl.secLabel}>Our work in Calgary</span>
                  <h2 className={v.h2}>Jensen CPA: From a Small Website to a Stronger Search Presence</h2>
                </div>
                <div>
                  <p className={tpl.fitLabel}>Jensen CPA is a Calgary accounting firm providing corporate tax, bookkeeping, personal tax, and fractional CFO services.</p>
                  <p className={v.p}>When we began working together, the firm&rsquo;s website didn&rsquo;t fully reflect the range of services it provided or the businesses it wanted to reach.</p>
                  <p className={v.p}>We redeveloped the website, introduced dedicated service pages, improved its technical structure, and developed educational content addressing Canadian tax and business questions.</p>
                  <p className={v.p}>The result was a more complete website and measurable growth in organic search visibility.</p>
                </div>
              </div>
              <div className={tpl.expBox} style={{ background: "#FEFEFE" }}>
                <div className={tpl.expImg}><Image src="/images/jensen-cpa-cover.webp" alt="The Jensen CPA team in Calgary, a Scale SEO client" fill sizes="(max-width: 900px) 100vw, 560px" /></div>
                <div className={tpl.expText}>
                  <div className={tpl.expStats}>
                    <div><strong>+395%</strong><span>Google Search impressions</span></div>
                    <div><strong>+205%</strong><span>Organic search clicks</span></div>
                    <div><strong>~25 pages</strong><span>Approximately 25 pages added through website redevelopment and ongoing SEO</span></div>
                  </div>
                  <p className={tpl.splitSmall}><em>Search performance compares the first and latest 30-day reporting periods in Google Search Console, June&ndash;November 2026.</em></p>
                  <Btn href="/results/jensen-cpa" tone="navy">Read the Jensen CPA Case Study</Btn>
                </div>
              </div>
            </div>
          </section>
        }
        feature2={
          <>
            <section className={`${v.white} ${v.sec}`}>
              <div className={v.wrap}>
                <div className={v.head}>
                  <div><h2 className={v.h2}>What We&rsquo;ve Learned About Accounting Websites</h2></div>
                  <p className={v.p}>Our work with accounting firms has shaped how we approach search strategy. A few things consistently matter.</p>
                </div>
                <ol className={tpl.lessons}>
                  {lessons.map((l, i) => (
                    <li key={l.title}>
                      <span className={tpl.lnum}>0{i + 1}</span>
                      <h3>{l.title}</h3>
                      <div className={tpl.lbody}>{l.body.map((b, j) => <p key={j}>{b}</p>)}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
            <section className={`${v.grey} ${v.sec}`}>
              <div className={v.wrap}>
                <div className={tpl.svcIntro}>
                  <h2 className={v.h2}>Built Around Your Accounting Services</h2>
                  <div>
                    <p className={tpl.fitLabel}>Every accounting practice has different priorities. We focus on the services your firm wants to grow rather than applying the same keyword strategy to every client.</p>
                    <div><Btn href="/services/seo" tone="navy">Explore Our SEO Services</Btn></div>
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
            <section className={`${v.white} ${v.sec}`}>
              <div className={v.wrap}>
                <div className={tpl.svcIntro}>
                  <h2 className={v.h2}>An Independent Consultancy. Direct Accountability.</h2>
                  <div>
                    <p className={tpl.fitLabel}>Scale SEO was founded in Calgary by <Link href="/corbin-jensen" className={v.inlineLink}>Corbin Jensen</Link>, who remains directly involved in client strategy and implementation.</p>
                    <p className={v.p}>We work with a select number of accounting firms and take a practical approach to every engagement.</p>
                  </div>
                </div>
                <div className={`${v.points} ${v.cols4}`}>
                  {[
                    { title: "Hands-On Implementation", icon: ICONS.gear, body: "We don’t stop at recommendations. We develop content, improve websites, and implement the agreed SEO strategy." },
                    { title: "Clear Communication", icon: ICONS.briefcase, body: "You’ll know who’s responsible for your campaign, what we’re working on, and how performance is progressing." },
                    { title: "Flexible Agreements", icon: ICONS.chart, body: "Our ongoing SEO engagements operate month-to-month, without long-term lock-in contracts." },
                    { title: "Market Conflict Checks", icon: ICONS.pin, body: "We review potential conflicts before accepting new accounting clients and avoid directly competing engagements targeting the same services and customers in the same market." },
                  ].map((r) => (
                    <div key={r.title} className={v.point}>
                      <Icon d={r.icon} />
                      <h3 className={v.h3}>{r.title}</h3>
                      <p className={v.p}>{r.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        }
        fit={{
          title: "Working With Accounting Firms Across Canada",
          label: "Scale SEO is based in Calgary, Alberta, and works with CPA firms and accounting practices across Canada.",
          body: (
            <>
              <p>Whether your firm operates in one city or serves clients nationally, we develop search strategies around your services, competition, and business objectives.</p>
              <p>Monthly SEO engagements start at <strong>$3,000 CAD, plus applicable GST</strong>. Final pricing depends on the scope of your website and campaign.</p>
              <p><Link href="/pricing">View Our Pricing</Link></p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{
          title: "Let’s Talk About Your Firm.",
          lead: (
            <>
              <p>Tell us which accounting services you want to grow and where you&rsquo;d like your business to be in the coming years.</p>
              <p>We&rsquo;ll take a look at your current search presence, discuss the opportunities worth exploring, and determine whether Scale SEO is the right fit.</p>
              <p>Looking for accounting SEO in Australia? <Link href="/industries/accounting-firms-australia" className={tpl.ctaLink}>Explore our Australian accounting SEO services</Link>.</p>
            </>
          ),
        }}
      />
    </main>
  );
}
