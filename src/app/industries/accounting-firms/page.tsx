import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
// Shared service-page template (new brand)
import t from "../../services/svc.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO for Accounting Firms in Canada | Scale SEO" },
  description:
    "SEO for accounting firms across Canada. Improve visibility for corporate tax, bookkeeping, advisory and other high-value services with founder-led SEO.",
  alternates: { canonical: "/industries/accounting-firms" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const chips = ["Founder-led SEO", "Month-to-month engagements", "Market conflict checks"];

const included: { title: string; body: string[] }[] = [
  {
    title: "Accounting Service Page Optimization",
    body: [
      "Improving the pages that target commercial searches for corporate tax, bookkeeping, business advisory, fractional CFO, payroll, and other accounting services.",
      "This includes keyword research, search intent, on-page optimization, internal linking, and content improvements.",
    ],
  },
  {
    title: "Local SEO & Google Business Profile",
    body: [
      "Strengthening your firm\u2019s visibility in relevant local searches and Google Maps through Google Business Profile optimization, local search research, reviews, and location-specific website improvements.",
      "For firms serving multiple locations, I develop strategies around genuine office locations and the markets they serve.",
    ],
  },
  {
    title: "Accounting Content Strategy",
    body: [
      "Developing useful content around the questions business owners research before engaging an accountant.",
      "This can include corporate tax guides, payroll resources, accounting software information, and other topics that support your firm\u2019s services.",
      "Technical accounting content should be reviewed by appropriately qualified professionals to maintain accuracy.",
    ],
  },
  {
    title: "Technical SEO & Website Architecture",
    body: [
      "Improving crawlability, indexing, website structure, performance, structured data, and internal linking.",
      "I also review how your service pages, industry pages, team profiles, and educational resources work together to support organic search visibility.",
    ],
  },
];

const cases = [
  {
    name: "Jensen CPA \u2014 Calgary, Canada",
    body: "SEO and content improvements for a Calgary CPA firm, including technical optimization, service-page development, and accounting resources.",
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
  },
  {
    name: "Empire Accountants \u2014 Brisbane, Australia",
    body: "An ongoing SEO campaign involving accounting service pages, technical improvements, structured data, and content development.",
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
];

const reasons = [
  {
    title: "Direct Access to Your SEO Specialist",
    body: "I manage the research, strategy, implementation, and reporting personally. You\u2019ll work directly with the person responsible for your campaign.",
  },
  {
    title: "SEO & Website Improvements Together",
    body: "I can implement many technical, structural, and content improvements directly rather than simply providing recommendations for another team to complete.",
  },
  {
    title: "Accounting Industry Experience",
    body: "I\u2019m familiar with the services, terminology, and website structures used by accounting practices, allowing us to focus on your firm\u2019s particular goals.",
  },
  {
    title: "Month-to-Month Engagements",
    body: "Ongoing campaigns operate month-to-month, without long-term lock-in contracts.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does SEO for an accounting firm cost?",
    a: [
      "Ongoing SEO campaigns at Scale SEO start from $3,000 CAD per month, plus applicable GST. Pricing depends on your firm\u2019s website, competition, services, and campaign requirements.",
    ],
  },
  {
    q: "How long does accounting firm SEO take?",
    a: [
      "SEO generally develops over several months. Timelines depend on your current visibility, website condition, competition, and target searches.",
      "I review your starting position before establishing campaign priorities and expectations.",
    ],
  },
  {
    q: "Can you work with accounting firms outside Calgary?",
    a: [
      "Yes. Scale SEO works remotely with accounting firms across Canada and internationally. Strategies are tailored to the locations and clients your firm serves.",
    ],
  },
  {
    q: "Do you create accounting content?",
    a: [
      "Yes. I develop and optimize service pages, articles, and supporting resources. Technical accounting and tax content should be reviewed by qualified professionals at your firm before publication.",
    ],
  },
  {
    q: "Do you work with competing accounting firms?",
    a: [
      "I avoid engagements that create a meaningful conflict between accounting clients targeting the same services and customers in the same market.",
    ],
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service + BreadcrumbList graph, linked to the
   global #website and #organization nodes in layout.tsx. Includes this
   page's BreadcrumbList, so <Breadcrumbs> is rendered with schema={false}.
   The FAQPage schema comes from <ServicesFaq>. === */
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
      "description": "SEO services for accounting firms and CPA practices across Canada, including technical SEO, service page optimization, local SEO, content strategy, internal linking and website improvements.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Accounting firms, CPA firms, bookkeeping firms and tax advisory practices in Canada"
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

/* === Page =============================================================== */

export default function AccountingFirmsPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingJsonLd) }}
      />

      {/* === HERO — breadcrumbs + big title, then image band === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Industries", href: "/industries" },
                { name: "Accounting Firms" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>SEO for Accounting Firms &amp; CPA Practices</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/calgary-skyline.webp" alt="Calgary skyline" style={{ objectPosition: "center 60%" }} />
        </div>
      </header>

      {/* === INTRO — chips left, intro + actions right === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <div className={t.chips}>
            {chips.map((c) => (
              <span key={c} className={t.chip}>{c}</span>
            ))}
          </div>
          <div>
            <div className={t.stat}>Page 5 → 1</div>
            <p className={t.statLabel}>Target keyword rankings for an accounting firm</p>
          </div>
        </div>
        <div className={t.splitRight}>
          <div className={t.body}>
            <p className={t.lead}>
              Scale SEO provides specialized SEO services for accounting firms
              across Canada, helping practices improve Google visibility and
              attract qualified enquiries for their most valuable services.
            </p>
            <p>
              From corporate tax and bookkeeping to business advisory and
              fractional CFO services, I develop strategies around the searches
              that matter to your firm&rsquo;s growth.
            </p>
            <p>
              Every campaign is managed directly by me, with no account managers
              or outsourced handoffs.
            </p>
          </div>
          <div className={t.boxRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Consultation &rarr;</span>
            </a>
            <Link href="/services/seo" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>Explore SEO Services &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === MOST VALUABLE SERVICES — heading left, text right === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>SEO Built Around Your Firm&rsquo;s Most Valuable Services</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32 }}>
            <p className={t.lead}>Not every accounting firm wants to attract the same clients.</p>
            <p>
              Some practices prioritize corporate tax and business accounting,
              while others want to grow recurring bookkeeping, tax planning, or
              advisory engagements.
            </p>
            <p>
              I start by understanding your firm&rsquo;s services, target
              clients, and competitive market before identifying which search
              opportunities deserve attention.
            </p>
            <p>
              The goal isn&rsquo;t simply more website traffic. It&rsquo;s
              stronger visibility for the accounting services your firm actually
              wants to grow.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — big heading + ruled rows === */}
      <section className={t.listSection} style={{ padding: 0 }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>What&rsquo;s Included in Accounting Firm SEO?</h2>
          <p className={`${t.lead} ${t.listIntro}`}>
            Every campaign is tailored to your firm&rsquo;s website, services,
            and market. Depending on your priorities, the work may include:
          </p>
        </div>
        <div className={t.rows}>
          {included.map((item, i) => (
            <div key={item.title} className={t.row}>
              <div>
                <span className={t.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={t.h3}>{item.title}</h3>
              </div>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
          <div className={t.row}>
            <div />
            <Link href="/services/seo" className={`${t.box} ${t.boxBlue}`}>
              <Corner />
              <span>Explore Ongoing SEO Services &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — navy feature box with the two case studies === */}
      <section className={t.featureWrap}>
        <div className={t.feature}>
          <div className={t.featureText}>
            <span className={t.eyebrow}>Accounting Industry Experience</span>
            <h2 className={t.h2}>Experience Working With Accounting Firms</h2>
            <div className={t.body}>
              <p>Accounting is an industry where I already have direct SEO experience.</p>
              <p>
                I&rsquo;ve worked on websites for accounting and advisory firms in
                Canada and Australia, improving technical SEO, service-page
                architecture, local search visibility, and content strategies.
              </p>
              <p>
                That experience includes projects involving corporate tax,
                bookkeeping, SMSF administration, business advisory, and
                fractional CFO services.
              </p>
            </div>
          </div>
          <div className={t.featureSide}>
            {cases.map((c) => (
              <div key={c.href} className={t.metric}>
                <h3 className={t.h3}>{c.name}</h3>
                <p className={t.metricLabel} style={{ fontSize: 16, lineHeight: 1.5 }}>{c.body}</p>
                <Link href={c.href} className={t.metricLabel} style={{ color: "var(--h-blue)", fontSize: 16 }}>
                  {c.cta} &rarr;
                </Link>
              </div>
            ))}
            <div className={t.featureLinks}>
              <Link href="/results" className={`${t.box} ${t.boxGrey}`}>
                <Corner />
                <span>View All Client Results &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY WORK WITH SCALE SEO — grey, aside + four white boxes === */}
      <section className={t.grey}>
        <div className={t.asideGrid}>
          <div className={t.aside}>
            <h2 className={t.h2}>Why Work With Scale SEO?</h2>
          </div>
          <div className={t.cardGrid}>
            {reasons.map((r, i) => (
              <article key={r.title} className={t.card}>
                <span className={t.cardLabel}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={t.h3}>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === MARKET EXCLUSIVITY — split === */}
      <section className={t.pricing} style={{ padding: 0 }}>
        <div className={t.pricingAside}>
          <h2 className={t.h2}>Accounting Firm Market Exclusivity</h2>
        </div>
        <div className={t.pricingBody}>
          <p className={t.pricingLead}>
            I avoid working with directly competing accounting firms targeting
            the same primary services and clients within the same market.
          </p>
          <p className={t.body}>
            Before starting a new engagement, I&rsquo;ll review potential
            conflicts with existing accounting clients.
          </p>
          <p className={t.body}>
            Scale SEO is based in Calgary and works remotely with accounting
            firms across Canada and internationally. Your campaign is focused on
            the markets your firm serves, not where I&rsquo;m located.
          </p>
          <Link href="/pricing" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>View SEO Pricing &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Grow Your Accounting Firm's Organic Visibility"
        lead="Looking to attract more clients for your firm's most valuable accounting services? Let's discuss your website, current search visibility, and where SEO could support your growth."
        cta={{ href: BOOKING_URL, label: "Book a Consultation →" }}
      />
    </main>
  );
}
