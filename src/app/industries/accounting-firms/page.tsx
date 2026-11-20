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
  { title: "Corporate Tax & Compliance", body: "Reach businesses looking for T2 corporate tax returns, year-end filing, tax planning and ongoing compliance support." },
  { title: "Bookkeeping & Payroll", body: "Improve visibility among businesses searching for monthly bookkeeping, payroll and cloud accounting services." },
  { title: "Fractional CFO & Advisory", body: "Connect with companies seeking outsourced financial leadership, financial reporting, budgeting and strategic advice." },
  { title: "Personal & Specialized Tax", body: "Reach clients searching for personal tax preparation, complex returns and specialized accounting services where relevant to your practice." },
];

const included = [
  { title: "Keyword & Competitor Research", icon: "search", body: "We identify how prospective clients search for your accounting services, review competing firms, and prioritize the opportunities worth pursuing." },
  { title: "Service-Page SEO", icon: "page", body: ["We develop and improve pages for corporate tax, bookkeeping, fractional CFO, personal tax and advisory services.", "Each page is written to answer relevant questions and help potential clients take the next step."] },
  { title: "Technical SEO", icon: "gear", body: "We improve website structure, indexing, metadata, internal linking and structured data to build a stronger technical foundation." },
  { title: "Accounting Content", icon: "pen", body: "We develop useful articles around Canadian business and tax questions, including corporate tax deadlines, shareholder loans, capital cost allowance and other relevant topics." },
  { title: "Local SEO", icon: "pin", body: "We improve your firm’s visibility in relevant local searches through Google Business Profile optimization, location targeting and website improvements." },
  { title: "Ongoing Optimization", icon: "chart", body: "We review search performance, identify new opportunities, and continue improving your website as your firm’s priorities develop." },
];

const faqs = [
  { q: "How much does SEO cost for an accounting firm?", a: ["Our monthly SEO campaigns start at $3,000 CAD plus applicable GST. Pricing depends on your website, competition, target services and campaign requirements."] },
  { q: "How long does accounting SEO take?", a: ["SEO generally takes several months to develop. We review your website’s current visibility and competitive market before recommending priorities and discussing realistic expectations."] },
  { q: "Can you help us attract more corporate tax and business clients?", a: ["Yes. We can focus your campaign on corporate tax, bookkeeping, fractional CFO and advisory searches rather than broad accounting keywords alone."] },
  { q: "Can you develop content for our accounting website?", a: ["Yes. We develop and optimize service pages, articles and supporting resources. Technical tax and accounting content should be reviewed by a qualified professional at your firm before publication."] },
  { q: "Do you manage Google Ads alongside SEO?", a: ["Yes. We provide Google Ads management alongside SEO, helping your firm reach prospective clients through paid search while organic visibility develops."] },
  { q: "Do you work with competing accounting firms?", a: ["We review potential conflicts before accepting new engagements and avoid working with directly competing accounting firms targeting the same services and customers in the same market."] },
];

const Icon = ({ d }: { d: string }) => (
  <span className={v.icon} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

const ExpBox = ({ title, client, img, alt, stats, body, href, cta, note }: { title: string; client: string; img: string; alt: string; stats: [string, string][]; body: React.ReactNode; href: string; cta: string; note: string }) => (
  <div className={tpl.expBox} style={{ marginTop: 32 }}>
    <div className={tpl.expImg}><Image src={img} alt={alt} fill sizes="(max-width: 900px) 100vw, 560px" /></div>
    <div className={tpl.expText}>
      <h3 className={v.h3}>{title}</h3>
      <p className={tpl.expClient}>{client}</p>
      <div className={tpl.expStats}>{stats.map(([k, d]) => <div key={k}><strong>{k}</strong><span>{d}</span></div>)}</div>
      {body}
      <Btn href={href} tone="navy">{cta}</Btn>
      <p className={tpl.splitSmall}><em>{note}</em></p>
    </div>
  </div>
);

export default function AccountingFirmsPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingJsonLd) }} />
      <ServiceTemplate
        crumb="Accounting Firms"
        parent={{ name: "Industries", href: "/industries" }}
        primaryLabel="Book a Consultation"
        title="SEO for Accounting Firms & CPA Practices in Canada"
        heroLead="Get your accounting firm in front of more businesses searching for corporate tax, bookkeeping, fractional CFO and advisory services."
        heroImage={{ src: "/images/gsc-performance-mockup-3d.webp", alt: "Google Search Console performance data showing clicks and impressions growth" }}
        primaryHref="/contact"
        hideSecondary
        statementLabel="Canadian accounting firms"
        statement="We help Canadian accounting firms improve their Google rankings, build better websites, and attract enquiries for the services they want to grow."
        statementNote="Founder-led SEO · Month-to-month engagements · Market conflict checks"
        top={
          <section className={`${v.white} ${v.sec}`} style={{ paddingTop: 0 }}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>We Know the Accounting Industry.</h2>
                <div>
                  <p className={tpl.fitLabel}>Getting found on Google is competitive, especially when you&rsquo;re trying to attract established businesses rather than individual tax returns.</p>
                  <p className={v.p}>We&rsquo;ve worked directly with accounting and advisory firms, building websites and SEO campaigns around corporate tax, bookkeeping, fractional CFO, and other specialized services.</p>
                  <p className={v.p}>That experience helps us focus on the searches that matter to your firm, rather than simply increasing website traffic.</p>
                </div>
              </div>
              <ExpBox
                title="Experience You Can See."
                client="Jensen CPA — Calgary, Alberta"
                img="/images/jensen-cpa-cover.webp"
                alt="The Jensen CPA team in Calgary, a Scale SEO client"
                stats={[["+395%", "Google Search impressions"], ["+205%", "Organic search clicks"], ["~25 pages", "Added through website redevelopment and ongoing SEO"]]}
                body={<><p className={v.p}>We redeveloped Jensen CPA&rsquo;s website from a small template site into a more complete accounting website, expanding its service pages, educational content, and technical SEO foundations.</p><p className={v.p}>The campaign has also included ongoing search optimization and Google Ads management.</p></>}
                href="/results/jensen-cpa"
                cta="Explore the Jensen CPA Case Study"
                note="Search results compare the first and latest 30-day reporting periods in Google Search Console, June–November 2026."
              />
              <ExpBox
                title="Also Trusted by Australian Accounting Firms"
                client="Empire Accountants — Brisbane, Australia"
                img="/images/empire-accountants-cover.webp"
                alt="Empire Accountants, a Brisbane accounting firm and Scale SEO client"
                stats={[["Page 5 → Page 1", "Priority Google keyword rankings"], ["2×", "Organic search impressions and clicks"]]}
                body={<p className={v.p}>Our ongoing work with Empire Accountants includes accounting service-page development, local SEO, structured data, and content covering business tax, SMSF and advisory services.</p>}
                href="/results/empire-accountants"
                cta="Explore the Empire Accountants Case Study"
                note="Client results are not a guarantee of equivalent performance."
              />
            </div>
          </section>
        }
        included={{
          title: "Your Website and SEO, Taken Care Of.",
          lead: "From keyword research to technical improvements and content development, we handle the work needed to strengthen your firm’s presence on Google. No standard monthly checklist. We focus on the opportunities that make sense for your firm.",
          items: included,
          cta: { href: "/services/seo", label: "Explore Our SEO Services" },
          image: { src: "/images/toronto-skyline-bw.webp", alt: "Black and white downtown Toronto skyline" },
        }}
        feature={
          <section className={`${v.white} ${v.sec}`}>
            <div className={v.wrap}>
              <div className={tpl.svcIntro}>
                <h2 className={v.h2}>Built Around the Clients You Want.</h2>
                <div>
                  <p className={tpl.fitLabel}>Not every accounting firm wants more personal tax returns.</p>
                  <p className={v.p}>You might be looking to attract larger companies, increase recurring bookkeeping engagements, or grow your corporate tax and fractional CFO services.</p>
                  <p className={v.p}>We build your SEO strategy around those priorities, targeting the services and searches most relevant to your business.</p>
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
              <div className={`${v.points} ${v.cols3}`} style={{ rowGap: 40 }}>
                {[
                  { title: "We’ve Done the Work Before.", icon: ICONS.building, body: <>Our experience with Jensen CPA and Empire Accountants means we&rsquo;re familiar with accounting services, industry terminology, and the website structure these firms need.</> },
                  { title: "We Handle the Implementation.", icon: ICONS.gear, body: <>We don&rsquo;t just provide a list of recommendations. We can develop service pages, improve technical SEO, update website content, and implement the changes directly.</> },
                  { title: "You’ll Know Who’s Doing the Work.", icon: ICONS.briefcase, body: <>Your campaign is led by Scale SEO founder <Link href="/corbin-jensen" className={v.inlineLink}>Corbin Jensen</Link>, with direct communication and clear reporting throughout the engagement.</> },
                  { title: "No Long-Term Lock-In Contracts.", icon: ICONS.chart, body: <>Our monthly SEO campaigns operate month-to-month, with work tailored to your firm&rsquo;s website, market and growth objectives.</> },
                  { title: "Market Conflict Checks.", icon: ICONS.pin, body: <>We review potential conflicts before accepting new accounting clients and avoid directly competing engagements targeting the same services and customers within the same market.</> },
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
        }
        fit={{
          title: "Working With Canadian Accounting Firms.",
          label: "Scale SEO is based in Calgary, Alberta, and works with accounting practices throughout Canada.",
          body: (
            <>
              <p>Whether your firm serves clients in one city or operates across several markets, we tailor the strategy to your services, competitive landscape and target clients.</p>
              <p>Monthly SEO campaigns start at <strong>$3,000 CAD</strong>, plus applicable GST. Final pricing depends on your website and campaign requirements.</p>
              <p><Link href="/pricing">View Our Pricing</Link></p>
            </>
          ),
        }}
        faqs={faqs}
        cta={{
          title: "Let’s See What Your Firm Could Be Missing.",
          lead: (
            <>
              <p>Tell us about your website, the accounting services you&rsquo;re looking to grow, and the clients you want to reach.</p>
              <p>We&rsquo;ll review your current search presence, discuss the opportunities in your market, and see whether we&rsquo;re the right fit.</p>
              <p>Looking for accounting SEO in Australia? <Link href="/industries/accounting-firms-australia" className={tpl.ctaLink}>Explore our Australian accounting SEO services</Link>.</p>
            </>
          ),
        }}
      />
    </main>
  );
}
