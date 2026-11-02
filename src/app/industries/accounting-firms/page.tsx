import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
// Shared service-page template (new brand)
import t from "../../services/svc.module.css";
import g from "../../sections/home/ServicesGrid.module.css";
import ServicesMark from "../../sections/home/ServicesMark";

export const metadata: Metadata = {
  title: { absolute: "SEO for Accounting Firms in Canada | Scale SEO" },
  description:
    "SEO for accounting firms across Canada. Improve visibility for corporate tax, bookkeeping, advisory and other high-value services with founder-led SEO.",
  alternates: { canonical: "/industries/accounting-firms" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const chips = ["Founder-led SEO", "Month-to-month engagements", "Market conflict checks"];

const digital: { href: string; title: string; body: string[]; cta: string }[] = [
  {
    href: "/services/seo",
    title: "Search Engine Optimization (SEO)",
    body: [
      "Improve your firm\u2019s visibility for the accounting services you want to grow. This includes service-page improvements, local search optimization, technical SEO, and helpful content that answers prospective clients\u2019 questions.",
    ],
    cta: "Explore SEO Services",
  },
  {
    href: "/services/web-development",
    title: "Website Development",
    body: [
      "Your website should make it easy for prospective clients to understand your services, learn about your team, and get in touch.",
      "Scale SEO builds and improves accounting websites with clear navigation, useful service information, and a strong foundation for organic search.",
    ],
    cta: "Explore Website Development",
  },
  {
    href: "/services/google-ads-management",
    title: "Google Ads Management",
    body: [
      "Google Ads can help your firm reach prospective clients searching for specific accounting services while your organic visibility develops.",
      "Scale SEO manages search campaigns with a focus on relevant enquiries, practical budgets, and clear performance tracking.",
    ],
    cta: "Explore Google Ads",
  },
  {
    href: "/services/geo",
    title: "AI Search Optimization (GEO)",
    body: [
      "Prospective clients are also using AI-powered search tools to research accounting services and compare firms.",
      "Scale SEO helps improve how your firm\u2019s services, expertise, and business information are presented and understood across traditional and AI-powered search platforms.",
    ],
    cta: "Explore AI Search Optimization",
  },
];

const cases = [
  {
    name: "Jensen CPA \u2014 Calgary, Canada",
    body: "SEO and content improvements for a Calgary CPA firm, including technical optimization, service-page development, and accounting resources.",
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-website.webp",
  },
  {
    name: "Empire Accountants \u2014 Brisbane, Australia",
    body: "An ongoing SEO campaign involving accounting service pages, technical improvements, structured data, and content development.",
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-website.webp",
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

      {/* === INTRO — large statement, label bottom-left, button bottom-right === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Running an accounting firm means balancing client work, deadlines,
            and the day-to-day demands of the business. Finding time to improve
            your website and attract new clients through Google isn&rsquo;t
            always a priority.
          </p>
          <p>
            But when business owners search for help with corporate tax,
            bookkeeping, or financial advisory services, your firm needs to be
            visible.
          </p>
          <p>
            Scale SEO helps accounting and CPA firms across Canada improve their
            online presence through search engine optimization, website
            development, Google Ads, and AI search optimization.
          </p>
          <p>
            The focus is on helping your firm reach the right clients, promote
            its most valuable services, and build a stronger source of enquiries
            over time.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            {chips.map((c) => (
              <span key={c}>
                {c}
                <br />
              </span>
            ))}
          </span>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Book a Consultation &rarr;</span>
          </a>
        </div>
      </section>

      {/* === PRIORITIES — heading left, text right === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>SEO Built Around Your Firm&rsquo;s Priorities</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32 }}>
            <p className={t.lead}>Not every accounting firm wants more of the same clients.</p>
            <p>
              Some firms want to grow their corporate tax and business advisory
              work. Others want more recurring bookkeeping clients, fractional
              CFO engagements, or enquiries from specific industries.
            </p>
            <p>
              Scale SEO starts by understanding which services your firm wants
              to grow and who you&rsquo;re trying to reach.
            </p>
            <p>
              From there, the strategy focuses on making those services easier
              to find, helping prospective clients understand your expertise,
              and improving how your website turns visits into enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* === SERVICES — homepage-style blue grid: card | mark | card,
          then card | card | intro === */}
      <section className={g.section} id="services">
        <h2 className={g.introTitle} style={{ maxWidth: "16ch" }}>
          SEO &amp; Digital Services for Accounting Firms
        </h2>
        <div className={g.grid}>
          {[digital[0], null, digital[1], digital[2], digital[3]].map((s, i) =>
            s ? (
              <Link key={s.href} href={s.href} className={g.cell}>
                <span className={g.cellIndex}>{String(digital.indexOf(s) + 1).padStart(2, "0")}</span>
                <h3 className={g.cellTitle}>{s.title}</h3>
                <div className={g.cellDesc}>
                  {s.body.map((p) => (
                    <p key={p} style={{ marginBottom: 12 }}>{p}</p>
                  ))}
                </div>
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
              SEO is the main focus, supported by website development, paid
              search, and AI search optimization where they make sense for your
              firm.
            </p>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — full-bleed navy: H2 top-left, body right and lower,
          then one ruled row per case study (name | text + button | image) === */}
      <section className={t.expSection}>
        <div className={t.expTop}>
          <h2 className={t.expTitle}>Experience Working With Accounting Firms</h2>
          <div className={t.expBody}>
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
        {cases.map((c) => (
          <div key={c.href} className={t.expRow}>
            <h3 className={t.expName}>{c.name}</h3>
            <div className={t.expText}>
              <p>{c.body}</p>
              <Link href={c.href} className={`${t.box} ${t.boxBlue}`}>
                <Corner />
                <span>{c.cta} &rarr;</span>
              </Link>
            </div>
            <Link href={c.href} className={t.expImg} tabIndex={-1} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" loading="lazy" />
            </Link>
          </div>
        ))}
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
