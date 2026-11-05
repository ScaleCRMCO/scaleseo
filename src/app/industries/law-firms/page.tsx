import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../../services/ServicesFaq";
import t from "../../services/svc.module.css";
import ab from "../../about/page.module.css";

const TITLE = "SEO for Law Firms in Canada | Scale SEO";
const DESCRIPTION =
  "SEO services for Canadian law firms. Improve visibility for your practice areas with technical SEO, practice area page optimization, local SEO and useful content.";
const URL = "https://scaleseo.co/industries/law-firms";
const CONTACT_URL = "/contact";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/industries/law-firms" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: ["/images/law-books.webp"] },
};

/* === Content ============================================================ */

const included = [
  { title: "SEO Strategy & Keyword Research", body: "Identify relevant searches based on your practice areas, target clients, and geographic markets." },
  { title: "Technical SEO", body: "Review crawling, indexing, website performance, structured data, and technical issues that may affect your search visibility." },
  { title: "Practice Area Page Optimization", body: "Improve your legal service pages with clear headings, relevant content, internal links, and information that answers potential clients’ questions." },
  { title: "Local SEO & Google Business Profile", body: "Improve your firm’s local search presence through Google Business Profile optimization, location information, and relevant local content." },
  { title: "Content Strategy", body: "Develop useful articles and resources that explain common legal questions, with legal accuracy reviewed by your firm." },
  { title: "Website Improvements & Reporting", body: "Improve website navigation, contact forms, and calls to action while tracking organic search performance and relevant enquiries." },
];

const practiceAreas = [
  "Corporate and commercial law",
  "Employment law",
  "Real estate law",
  "Family law",
  "Estate planning and wills",
  "Civil litigation",
];

const trust = [
  "Clear lawyer biographies and professional qualifications.",
  "Detailed explanations of your practice areas.",
  "Accurate office locations and contact information.",
  "Relevant client testimonials, where permitted.",
  "Helpful resources written or reviewed by qualified legal professionals.",
];

const faqs: FaqItem[] = [
  { q: "How long does SEO take for a law firm?", a: ["SEO generally takes several months to produce meaningful results. The timeline depends on your website’s current condition, competition, and the legal services you’re targeting."] },
  { q: "Can SEO help our law firm attract more clients?", a: ["SEO can improve your visibility for relevant searches and help potential clients discover your services. Results depend on competition, your website, and how effectively visitors turn into enquiries."] },
  { q: "Do you work with law firms outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and provides SEO services remotely to businesses across Canada."] },
  { q: "Do you write legal content for law firms?", a: ["We can help plan, structure, and optimize legal website content. Your firm’s qualified legal professionals should review and approve legal information before publication."] },
  { q: "Can you improve our existing law firm website?", a: ["Yes. We can review your existing website and make technical, content, and structural improvements, depending on the platform and access available."] },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service + BreadcrumbList. FAQPage comes from
   <ServicesFaq>. === */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/industries/law-firms#webpage",
      "url": "https://scaleseo.co/industries/law-firms",
      "name": "SEO for Law Firms in Canada | Scale SEO",
      "description": "SEO services for Canadian law firms. Improve visibility for legal services, attract qualified enquiries, and grow your practice with Scale SEO.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/industries/law-firms#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/industries/law-firms#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/industries/law-firms#service",
      "name": "SEO for Law Firms in Canada",
      "serviceType": "Search Engine Optimization for Law Firms",
      "description": "Founder-led SEO services for Canadian law firms, including technical SEO, practice area page optimization, local SEO, content strategy, and website improvements.",
      "url": "https://scaleseo.co/industries/law-firms",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Law firms and legal practices"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Law Firm SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "SEO Strategy and Keyword Research"
          },
          {
            "@type": "OfferCatalog",
            "name": "Technical SEO"
          },
          {
            "@type": "OfferCatalog",
            "name": "Practice Area Page Optimization"
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO and Google Business Profile Optimization"
          },
          {
            "@type": "OfferCatalog",
            "name": "SEO Content Strategy"
          },
          {
            "@type": "OfferCatalog",
            "name": "Website Optimization and Reporting"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/industries/law-firms#breadcrumb",
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
          "name": "Law Firms",
          "item": "https://scaleseo.co/industries/law-firms"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function LawFirmsPage() {
  return (
    <main className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: "Law Firms" }]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>SEO for Law Firms in Canada</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/law-books.webp"
            alt="Black and white close-up of a row of numbered legal reference volumes on a law office bookshelf"
            style={{ objectPosition: "center 45%" }}
          />
        </div>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Scale SEO helps Canadian law firms improve their organic search
            visibility through technical SEO, service page optimization, local
            SEO, and useful website content.
          </p>
          <p>
            Whether your firm serves clients in Calgary or across multiple
            Canadian markets, we build SEO strategies around your practice areas,
            target locations, and business goals.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>SEO services for law firms looking to attract more qualified enquiries through Google.</strong>
          </span>
          <Link href={CONTACT_URL} className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Discuss Your SEO Strategy &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === RIGHT CLIENTS — big H2, label left, text right === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>Helping Law Firms Reach the Right Clients</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "22ch" }}>
            When someone needs legal advice, Google is often one of the first places they look.
          </p>
          <div className={t.prioBody}>
            <p>
              They may search for a corporate lawyer in their city, an employment
              law firm, or legal advice related to a specific business issue.
            </p>
            <p>
              Your website needs to clearly explain your services and help
              potential clients understand whether your firm is the right fit.
            </p>
            <p>
              Our approach to law firm SEO focuses on improving the pages and
              search terms most relevant to your practice, rather than simply
              increasing website traffic.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — About-page staggered boxes === */}
      <section className={ab.partners} style={{ borderTop: "1px solid var(--h-rule)" }}>
        <div className={ab.partnersHead}>
          <h2 className={ab.partnersTitle}>What&rsquo;s Included in Our Law Firm SEO Services?</h2>
          <div className={ab.partnersText}>
            <p>
              Every law firm has different practice areas, competition, and
              growth priorities. We focus on the improvements that make the most
              sense for your website.
            </p>
            <Link href="/services/seo" className={`${t.box} ${t.boxNavy}`} style={{ alignSelf: "flex-start", marginTop: 8 }}>
              <Corner />
              <span>Explore Our SEO Services &rarr;</span>
            </Link>
          </div>
        </div>
        <div className={ab.partnersGrid}>
          {included.map((item, i) => (
            <article
              key={item.title}
              className={ab.pBox}
              style={i < 3 ? { gridColumn: i + 2, gridRow: 1 } : { gridColumn: i - 2, gridRow: 2 }}
            >
              <span className={ab.pNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={ab.pTitle}>{item.title}</h3>
              <p className={ab.pBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === PRACTICE AREAS — navy, label left, list right === */}
      <section className={t.prioSection} style={{ background: "var(--h-navy)", color: "var(--h-white)" }}>
        <h2 className={t.prioTitle}>SEO for Different Legal Practice Areas</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "22ch" }}>
            People searching for legal services often have a specific problem they need help with.
          </p>
          <div className={t.prioBody}>
            <p>
              A business owner looking for a corporate lawyer may use very
              different search terms from someone looking for an employment or
              family lawyer.
            </p>
            <p>We can develop SEO strategies around practice areas such as:</p>
            <ul className={t.checks} style={{ borderTopColor: "rgba(254,254,254,0.2)" }}>
              {practiceAreas.map((a) => (
                <li key={a} style={{ borderBottomColor: "rgba(254,254,254,0.2)" }}>{a}</li>
              ))}
            </ul>
            <p>
              Each practice area should have clear, useful content that explains
              the services available and who they are intended for.
            </p>
            <p>
              Rather than creating pages for every possible keyword, we focus on
              building a website structure that reflects your firm&rsquo;s actual
              services.
            </p>
          </div>
        </div>
      </section>

      {/* === LOCAL & MULTI-LOCATION === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>Local &amp; Multi-Location SEO for Law Firms</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "22ch" }}>
            Many law firms rely on clients from specific cities or regions.
          </p>
          <div className={t.prioBody}>
            <p>
              For these practices, local SEO can help improve visibility for
              searches that include a city or geographic area.
            </p>
            <p>
              Law firms operating in multiple locations may also benefit from
              dedicated office pages, provided those locations are genuine and
              the pages contain useful information.
            </p>
            <p>
              For firms serving businesses across Canada, a broader{" "}
              <Link href="/services/national-seo" className={t.inlineLink}>national SEO strategy</Link>{" "}
              may help reach clients searching for specialized legal services
              beyond one city.
            </p>
            <p>
              The right approach depends on where your firm operates, the
              services it offers, and the clients it wants to attract.
            </p>
          </div>
        </div>
      </section>

      {/* === TRUST — grey, label left, list right === */}
      <section className={t.prioSection} style={{ background: "var(--h-grey)" }}>
        <h2 className={t.prioTitle}>Building Trust Through Your Law Firm&rsquo;s Website</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "22ch" }}>
            Choosing a lawyer is an important decision.
          </p>
          <div className={t.prioBody}>
            <p>
              Potential clients want to know who they&rsquo;re contacting and
              whether the firm has the right experience. Your website should make
              that information easy to find.
            </p>
            <p>Useful elements include:</p>
            <ul className={t.checks}>
              {trust.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p>
              Legal content should be accurate and follow the professional
              advertising requirements that apply to your firm.
            </p>
            <p>
              Our role is to improve how this information is organized,
              presented, and found through search engines.
            </p>
          </div>
        </div>
      </section>

      {/* === OUR APPROACH === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>Our Approach to Law Firm SEO</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "22ch" }}>
            Scale SEO is an independent, founder-led SEO consultancy based in Calgary, Alberta.
          </p>
          <div className={t.prioBody}>
            <p>
              Every engagement is managed directly by founder{" "}
              <Link href="/corbin-jensen" className={t.inlineLink}>Corbin Jensen</Link>, from initial strategy and
              technical improvements to ongoing website optimization.
            </p>
            <p>
              We focus on practical work that supports your firm&rsquo;s goals,
              with clear communication and regular reporting.
            </p>
            <p>
              Our experience working with professional service businesses informs
              our approach to industries where trust, expertise, and qualified
              enquiries matter.
            </p>
            <Link href="/about" className={`${t.box} ${t.boxGrey}`} style={{ alignSelf: "flex-start", marginTop: 16 }}>
              <Corner />
              <span>Learn More About Scale SEO &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === PRICING — navy === */}
      <section className={t.prioSection} style={{ background: "var(--h-navy)", color: "var(--h-white)" }}>
        <h2 className={t.prioTitle}>Law Firm SEO Pricing</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel}>Ongoing SEO services start at $3,000 CAD per month, plus applicable taxes.</p>
          <div className={t.prioBody}>
            <p>
              Every campaign is scoped around your website, practice areas,
              competition, and target markets.
            </p>
            <p>We offer month-to-month engagements without long-term contract lock-ins.</p>
            <Link href="/pricing" className={`${t.box} ${t.boxBlue}`} style={{ alignSelf: "flex-start", marginTop: 16, color: "var(--h-white)" }}>
              <Corner />
              <span>View Our Pricing &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Let's Improve Your Law Firm's Search Visibility"
        lead="If your law firm wants to attract more relevant enquiries through Google, we can help identify opportunities to improve your website and organic search performance. Work directly with Scale SEO to develop a practical SEO strategy around your practice areas and business goals."
        cta={{ href: CONTACT_URL, label: "Discuss Your SEO Strategy →" }}
      />
    </main>
  );
}
