import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import ServicesMark from "../../sections/home/ServicesMark";
// Shared service page template (new brand)
import t from "../svc.module.css";

export const metadata: Metadata = {
  title: { absolute: "SEO Audit Services Calgary | Scale SEO" },
  description:
    "Independent SEO audits for Calgary and Canadian businesses. Get a clear review of your website, technical issues, search visibility and opportunities.",
  alternates: { canonical: "/services/seo-audits" },
};

const included: { title: string; body: string }[] = [
  {
    title: "Technical SEO & Indexing",
    body: "We review how Google can discover and access your website, including indexing issues, redirects, canonical URLs, broken links, and other technical problems affecting important pages.",
  },
  {
    title: "Website Content & Structure",
    body: "We assess your main pages, headings, metadata, internal links, and website organization to identify weaknesses, overlapping content, and opportunities for improvement.",
  },
  {
    title: "Keywords & Search Performance",
    body: "Where search data is available, we review the queries bringing visitors to your website, the pages gaining visibility, and potential opportunities you’re currently missing.",
  },
  {
    title: "Competitors & Local SEO",
    body: "For audits requiring a broader strategy review, we examine relevant search competitors and local visibility to identify where your website could better compete for valuable searches.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does an SEO audit cost?",
    a: [
      "Standalone audits are quoted individually. The cost depends on your website’s size, technical complexity, and whether you need a focused technical review or a broader assessment of keywords, competitors, and search opportunities.",
      "We’ll confirm the scope and price before beginning.",
    ],
  },
  {
    q: "Do you fix the issues found during the audit?",
    a: [
      "Implementation isn’t automatically included in a standalone audit.",
      "You’ll receive recommendations that you can use independently. If you need help making the changes, we can discuss a separate development project or ongoing SEO engagement.",
    ],
  },
  {
    q: "Do I need to sign up for monthly SEO?",
    a: ["No. A standalone audit is a one-time consulting service with no ongoing commitment."],
  },
  {
    q: "What access do you need?",
    a: [
      "We can review many aspects of a website without administrative access. Google Search Console access is useful for understanding existing search performance and indexing issues, but we’ll confirm what’s needed before the audit begins.",
    ],
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

const auditsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo-audits#webpage",
      "url": "https://scaleseo.co/services/seo-audits",
      "name": "SEO Audit Services Calgary | Scale SEO",
      "description": "Independent SEO audits for Calgary and Canadian businesses. Get a clear review of your website, technical issues, search visibility and opportunities.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo-audits#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo-audits#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo-audits#service",
      "name": "SEO Audit Services",
      "alternateName": [
        "SEO Audits",
        "Website SEO Audit",
        "Technical SEO Audit"
      ],
      "serviceType": "SEO Audit",
      "url": "https://scaleseo.co/services/seo-audits",
      "description": "Standalone SEO audit services that assess technical SEO, crawlability, indexing, on-page optimization, content, internal linking, website architecture and organic search performance, with prioritized recommendations for improvement.",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Alberta"
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses seeking an independent SEO assessment and prioritized implementation roadmap"
      },
      "offers": [
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#standard-audit-offer",
          "name": "SEO Audit",
          "description": "Standalone SEO audit covering technical website health, crawlability, indexing, on-page SEO, internal linking, website performance, basic keyword visibility and prioritized recommendations.",
          "url": "https://scaleseo.co/services/seo-audits",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Audit"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://scaleseo.co/services/seo-audits#advanced-audit-offer",
          "name": "Advanced SEO Audit",
          "description": "Advanced SEO audit including technical and on-page analysis plus detailed keyword research, competitor analysis, content gaps, website architecture, internal linking, local SEO where relevant, and a prioritized implementation roadmap.",
          "url": "https://scaleseo.co/services/seo-audits",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced SEO Audit"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo-audits#breadcrumb",
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
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Audits",
          "item": "https://scaleseo.co/services/seo-audits"
        }
      ]
    }
  ]
};

export default function SeoAuditsPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditsJsonLd) }}
      />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO Audits" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>SEO Audit Services in Calgary</h1>
        </div>
        <div className={t.heroBand}>
          <ServicesMark className={t.heroMark} slow />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/web-development-hero.webp"
            alt="Laptop showing an SEO audit dashboard with site health scores and issue reports"
          />
        </div>
      </header>

      {/* === INTRO === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <p className={t.lead}>
            <strong>
              Find out what&rsquo;s holding your website back in Google Search and
              what you should improve first.
            </strong>
          </p>
          <div className={t.chips}>
            {["Technical SEO", "Indexing", "Content", "Site Structure", "Keywords", "Competitors", "Local SEO"].map((c) => (
              <span key={c} className={t.chip}>{c}</span>
            ))}
          </div>
        </div>
        <div className={t.splitRight}>
          <div className={t.body}>
            <p className={t.lead}>
              Scale SEO provides independent SEO audits for businesses in Calgary
              and across Canada.
            </p>
            <p>
              Scale SEO reviews your website&rsquo;s technical health, search visibility,
              content, and structure to identify problems and opportunities worth
              addressing.
            </p>
            <p>
              You&rsquo;ll receive clear findings and practical recommendations,
              without committing to ongoing monthly SEO.
            </p>
          </div>
          <div className={t.boxRow}>
            <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Request an SEO Audit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT IS === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>What Is an SEO Audit?</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <p className={t.lead}>
              An SEO audit is an assessment of how well your website is set up to
              appear in Google Search.
            </p>
            <p>
              Sometimes the problem is technical, such as important pages not being
              indexed. Other times, the website simply isn&rsquo;t targeting the
              right searches, or competitors have more useful service pages.
            </p>
            <p>
              We use website crawling tools, Google Search Console data where
              available, and manual analysis to understand what&rsquo;s happening.
            </p>
            <p>
              The goal isn&rsquo;t to produce a long list of technical warnings.
              It&rsquo;s to identify what actually matters for your business and
              where improvements should begin.
            </p>
          </div>
        </div>
      </section>

      {/* === INCLUDED === */}
      <section className={t.steps}>
        <h2 className={t.h2}>What&rsquo;s Included in an SEO Audit?</h2>
        <p className={t.lead} style={{ marginTop: 20, maxWidth: 720 }}>
          Each audit is scoped to your website, business goals, and the questions
          you need answered.
        </p>
        <div className={t.stepGrid}>
          {included.map((item, i) => (
            <div key={item.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> {item.title}
              </h3>
              <p className={`${t.body} ${t.dim}`}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === WHAT YOU'LL RECEIVE — navy feature box === */}
      <section className={t.featureWrap}>
        <div className={t.feature}>
          <div className={t.featureText}>
            <span className={t.eyebrow}>Deliverables</span>
            <h2 className={t.h2}>What You&rsquo;ll Receive</h2>
          </div>
          <div className={t.featureSide}>
            <div className={t.body}>
              <p>
                A completed standalone SEO audit includes a written assessment of
                your website, with findings explained in plain English and
                recommendations prioritized by importance.
              </p>
              <p>
                Rather than recommending every possible improvement, we focus on the
                issues and opportunities most relevant to your business.
              </p>
              <p>
                You can implement the recommendations yourself, share them with your
                developer or marketing team, or discuss having Scale SEO handle the
                work separately.
              </p>
              <p style={{ color: "var(--h-white)" }}>
                <strong>Standalone audits are quoted individually</strong> based on
                your website&rsquo;s size, complexity, and the depth of analysis
                required.
              </p>
            </div>
            <div className={t.featureLinks}>
              <Link href="/contact" className={`${t.box} ${t.boxGrey}`}>
                <Corner />
                <span>Request a Custom Audit Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === AUDITS VS MONTHLY — two boxes === */}
      <section className={t.twoWrap}>
        <div className={t.twoHead}>
          <h2 className={t.h2}>SEO Audits vs. Monthly SEO</h2>
          <p className={t.lead}>Not every business needs ongoing SEO management.</p>
        </div>
        <div className={t.two}>
          <div className={`${t.panel} ${t.panelGrey}`}>
            <h3 className={t.h3}>Standalone SEO Audit</h3>
            <div className={t.body}>
              <p>
                A standalone audit is useful when you want an independent
                assessment, a second opinion, or a practical roadmap for your
                existing team to implement.
              </p>
            </div>
          </div>
          <div className={`${t.panel} ${t.panelNavy}`}>
            <h3 className={t.h3}>Monthly SEO</h3>
            <div className={t.body}>
              <p>
                If you&rsquo;re considering{" "}
                <Link href="/services/seo" className={t.inlineLink}>monthly SEO services</Link>,
                we provide a complimentary initial SEO assessment as part of
                evaluating a potential engagement.
              </p>
              <p>
                This covers your website&rsquo;s main SEO issues, relevant
                competitors, and initial search opportunities, including local SEO
                considerations where applicable.
              </p>
              <p>
                Monthly SEO goes further by implementing improvements, developing
                content, monitoring performance, and adjusting the strategy over
                time.
              </p>
              <p style={{ fontSize: 15, opacity: 0.75 }}>
                The initial assessment is not a substitute for a detailed standalone
                audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Get an Independent Review of Your Website"
        lead="If you're unsure why your website isn't performing as expected, we can review your requirements and recommend an appropriate audit scope."
        cta={{ href: "/contact", label: "Request an SEO Audit →" }}
      />
    </main>
  );
}
