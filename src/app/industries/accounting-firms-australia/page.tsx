import type { Metadata } from "next";
import Link from "next/link";
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

const services = [
  { title: "Business Tax & BAS", body: "For firms supporting companies with tax compliance, BAS and IAS lodgements, company tax returns, and ongoing accounting obligations." },
  { title: "SMSF Accounting", body: "For practices providing SMSF setup, administration, annual reporting, tax compliance and audit coordination." },
  { title: "Bookkeeping & Payroll", body: "For firms looking to build recurring client relationships through bookkeeping, payroll, cloud accounting and financial reporting." },
  { title: "Business Advisory", body: "For practices working with business owners on financial performance, cash flow planning, budgeting and strategic decisions." },
];

const lessons: { title: string; body: React.ReactNode[] }[] = [
  { title: "Business Clients Search Differently", body: ["Someone looking for help with an individual tax return has different needs from a company seeking ongoing accounting and advisory support.", "For firms prioritising business clients, broad accounting traffic isn’t always the most valuable opportunity.", "We consider the type of client behind each search and whether the service aligns with the firm’s commercial priorities."] },
  { title: "Established Websites Still Have Room to Improve", body: ["A website doesn’t always need replacing to perform better.", "With Empire Accountants, we focused on improving the existing website by expanding important service pages, strengthening navigation, and creating clearer relationships between related content.", "That allowed us to build on what the firm already had rather than starting again."] },
  { title: "Complex Services Need Clear Explanations", body: ["Business tax, BAS, SMSF accounting and advisory services involve different obligations, processes and client questions.", "Presenting these services clearly helps prospective clients understand what a firm offers and whether it suits their needs.", "Our work has included developing more useful information around specialist accounting services and connecting it with relevant supporting articles."] },
  { title: "Local Search Matters, Even for Business-Focused Firms", body: ["Many businesses still look for an accountant in their city or surrounding area.", "We’ve worked on strengthening Empire Accountants’ local search presence in Brisbane through service-page improvements, business information, technical SEO and local optimisation.", "The right approach depends on where a firm operates and the clients it intends to serve."] },
];

const faqs = [
  { q: "How much does SEO cost for an Australian accounting firm?", a: ["Australian campaigns are quoted individually in AUD. Pricing depends on your website, competition, target services and the work required."] },
  { q: "Do you work with accounting firms outside Brisbane?", a: ["Yes. We work remotely with accounting firms across Australia. Our existing Australian accounting experience includes Empire Accountants in Brisbane."] },
  { q: "How long does accounting SEO take?", a: ["SEO usually takes several months to produce meaningful improvements. The timeframe depends on your website’s current condition, competition and the changes required.", "We review those factors before establishing priorities and discussing realistic expectations."] },
  { q: "Can you help our firm attract more business clients?", a: ["Yes. We can focus your search strategy on business tax, BAS, SMSF, bookkeeping and advisory services rather than pursuing general accounting traffic alone."] },
  { q: "Can you develop content for Australian accounting services?", a: ["Yes. We develop and improve service pages, educational articles and supporting website content.", "Technical tax and accounting information should be reviewed by a qualified professional at your firm before publication."] },
  { q: "Do you work with competing accounting firms?", a: ["We review potential conflicts before accepting new accounting engagements and avoid working with directly competing firms targeting the same services and customers in the same agreed market."] },
];

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
        heroSecondary={{ href: "/results/empire-accountants", label: "View Our Australian Client Work" }}
        title="SEO for Accounting Firms in Australia"
        heroLead="Specialist SEO for Australian accounting firms looking to grow their business tax, bookkeeping, SMSF and advisory services."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        statementLabel="Australian accounting firms"
        statementHeading
        statement="Better Visibility. Better-Fit Clients."
        statementNote="Accounting industry experience · Hands-on implementation · Flexible monthly engagements"
        statementBody={[
          "More traffic isn’t always the answer. For an accounting firm looking to grow its business client base, attracting another hundred personal tax enquiries may not be particularly useful.",
          "We work with Australian accounting practices to strengthen their websites, improve visibility for commercially relevant searches, and reach the clients they want to work with. Our approach is shaped by hands-on experience with Australian accounting websites, not a standard agency playbook.",
        ]}
        top={
          <section className={`${v.white} ${v.sec}`} style={{ paddingTop: 0 }}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>We Understand the Business Behind the Search.</h2>
                <div>
                  <p className={tpl.fitLabel}>Accounting firms don&rsquo;t all compete for the same work.</p>
                  <p className={v.p}>Some focus on business tax and compliance. Others want to expand into SMSF administration, recurring bookkeeping, or higher-value business advisory engagements.</p>
                  <p className={v.p}>Those differences matter when deciding which services to promote and how a website should be structured.</p>
                  <p className={v.p}>Through our ongoing work with Empire Accountants in Brisbane, we&rsquo;ve gained practical experience with the way Australian accounting firms present their services and compete for relevant searches.</p>
                  <p className={v.p}>Our focus is on connecting a firm&rsquo;s expertise with the businesses looking for it.</p>
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
                  <span className={tpl.secLabel}>Our work in Brisbane</span>
                  <h2 className={v.h2}>Empire Accountants: Strengthening an Established Search Presence</h2>
                </div>
                <div>
                  <p className={tpl.fitLabel}>Empire Accountants is a Brisbane accounting and business advisory firm providing taxation, bookkeeping, SMSF and advisory services.</p>
                  <p className={v.p}>When we began working together, the firm already had an established website and experienced accounting team. The opportunity was to improve how its existing services were presented, connected and discovered through search.</p>
                  <p className={v.p}>Our ongoing work has included improving service pages, strengthening internal links, developing Australian accounting content, and addressing technical and local SEO opportunities.</p>
                </div>
              </div>
              <div className={tpl.expBox} style={{ background: "#FEFEFE" }}>
                <div className={tpl.expImg}><Image src="/images/empire-accountants-cover.webp" alt="Empire Accountants, a Brisbane accounting firm and Scale SEO client" fill sizes="(max-width: 900px) 100vw, 560px" /></div>
                <div className={tpl.expText}>
                  <div className={tpl.expStats}>
                    <div><strong>Page 5 &rarr; Page 1</strong><span>Priority commercial keyword rankings</span></div>
                    <div><strong>2&times;</strong><span>Organic search impressions and clicks</span></div>
                    <div><strong>Regular enquiries</strong><span>New client opportunities through the firm&rsquo;s online presence</span></div>
                  </div>
                  <p className={v.p}>The improvements reflect ongoing work across the website, rather than one isolated change.</p>
                  <Btn href="/results/empire-accountants" tone="navy">Read the Empire Accountants Case Study</Btn>
                  <p className={tpl.splitSmall}><em>Results reflect an individual client engagement and do not guarantee equivalent outcomes.</em></p>
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
                  <div><h2 className={v.h2}>What We&rsquo;ve Learned Working With Australian Accountants</h2></div>
                  <p className={v.p}>Working directly with an Australian accounting firm has given us a clearer understanding of where search strategy can make a difference.</p>
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
                  <h2 className={v.h2}>Different Services. Different Opportunities.</h2>
                  <div>
                    <p className={tpl.fitLabel}>Every accounting practice has its own priorities. The work we recommend depends on which services your firm wants to grow.</p>
                    <p className={v.p}>Rather than pursuing every accounting keyword, we focus on the opportunities relevant to your firm&rsquo;s services and target clients.</p>
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
                  <h2 className={v.h2}>Working With Scale SEO</h2>
                  <div>
                    <p className={tpl.fitLabel}>We&rsquo;re an independent SEO consultancy based in Calgary, Canada, with established client relationships in Australia.</p>
                    <p className={v.p}>Our approach is straightforward.</p>
                  </div>
                </div>
                <div className={`${v.points} ${v.cols4}`}>
                  {[
                    { title: "Direct Involvement", icon: ICONS.briefcase, body: <>Your campaign is led by Scale SEO founder <Link href="/corbin-jensen" className={v.inlineLink}>Corbin Jensen</Link>, with hands-on involvement in strategy and implementation.</> },
                    { title: "Practical Implementation", icon: ICONS.gear, body: <>We work directly on the website, from content and internal linking to technical improvements and ongoing optimisation.</> },
                    { title: "Flexible Engagements", icon: ICONS.chart, body: <>Our ongoing SEO arrangements operate month-to-month, without lengthy lock-in contracts.</> },
                    { title: "Clear Communication", icon: ICONS.pin, body: <>We maintain regular communication, explain what we&rsquo;re working on, and report on the performance that matters to your business.</> },
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
          title: "Supporting Australian Accounting Firms, Wherever They’re Based.",
          label: "Although Scale SEO is headquartered in Calgary, we’ve built working relationships with businesses in Australia, including Empire Accountants in Brisbane.",
          body: (
            <>
              <p>We manage our Australian engagements remotely, with direct communication and a practical understanding of working across time zones.</p>
              <p>Campaigns are individually scoped and quoted in <strong>Australian dollars (AUD)</strong>, based on your website, competitive market and business priorities.</p>
              <p><a href="https://cal.com/corbinjensen-scaleseo/30min" target="_blank" rel="noopener noreferrer">Book a Consultation</a></p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{
          title: "Let’s Talk About Your Firm.",
          lead: (
            <>
              <p>Tell us about your accounting practice, the clients you want to reach, and the services you&rsquo;d like to grow.</p>
              <p>We&rsquo;ll discuss your existing search presence, the opportunities worth considering, and whether Scale SEO is the right fit.</p>
              <p>Based in Canada? <Link href="/industries/accounting-firms" className={tpl.ctaLink}>Explore our Canadian accounting SEO services</Link>.</p>
            </>
          ),
        }}
      />
    </main>
  );
}
