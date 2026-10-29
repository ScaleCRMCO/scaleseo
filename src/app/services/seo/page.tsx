import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Shared service page template (new brand)
import t from "../svc.module.css";

export const metadata: Metadata = {
  title: "Search Engine Optimization Services Calgary | Scale SEO",
  description:
    "Ongoing SEO services for professional service and B2B businesses. Technical SEO, content, on-page and local SEO managed directly from Calgary.",
  alternates: { canonical: "/services/seo" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const included: { title: string; lead: string; body: string[] }[] = [
  {
    title: "SEO Strategy & Research",
    lead: "Identify the searches that can generate meaningful business opportunities.",
    body: [
      "Keyword research goes beyond search volume. I assess commercial intent, existing rankings, competing websites, and the services your business wants to grow.",
      "This includes mapping keywords to appropriate pages, identifying content gaps, and determining whether existing pages should be improved before new ones are created.",
    ],
  },
  {
    title: "Technical SEO",
    lead: "Resolve technical issues that can limit organic visibility.",
    body: [
      "I investigate crawling, indexation, rendering, redirects, canonicalization, website performance, structured data, and other technical issues affecting how search engines access and understand your website.",
      "Working directly with platforms including Webflow, WordPress, and custom-coded websites allows me to implement many improvements rather than simply provide recommendations.",
    ],
  },
  {
    title: "On-Page SEO & Website Structure",
    lead: "Strengthen the pages most important to your business.",
    body: [
      "I improve commercial landing pages around search intent, content quality, headings, metadata, internal linking, and site architecture.",
      "The objective is to make each page a useful resource for potential customers while establishing a clearer relationship between your website’s services, industries, and supporting content.",
    ],
  },
  {
    title: "SEO Content Strategy",
    lead: "Create content with a clear purpose.",
    body: [
      "More content doesn’t automatically produce better SEO results.",
      "I prioritize improving existing pages, developing commercially relevant service content, and publishing useful supporting resources where genuine search opportunities exist.",
      "Content should answer real customer questions and connect naturally to the services your business provides.",
    ],
  },
  {
    title: "Local SEO",
    lead: "Improve visibility in the geographic markets you serve.",
    body: [
      "For businesses targeting local customers, campaigns can include Google Business Profile optimization, local keyword research, Google Maps visibility, citations, location content, and local search performance analysis.",
      "The approach depends on whether your business serves one city, multiple locations, or a broader regional market.",
    ],
  },
  {
    title: "Website & Conversion Improvements",
    lead: "Turn relevant search traffic into better business opportunities.",
    body: [
      "A page can rank well without generating enquiries.",
      "Where necessary, I improve website navigation, service-page layouts, calls to action, trust signals, forms, and other elements that influence how visitors interact with your website.",
      "Because I work directly on client websites, these improvements can be incorporated into the wider SEO strategy.",
    ],
  },
  {
    title: "Tracking & Reporting",
    lead: "Measure what changes and what matters.",
    body: [
      "I use Google Search Console, website analytics, keyword tracking, and relevant conversion data to monitor campaign performance.",
      "Reporting focuses on changes in organic visibility, important landing pages, qualified traffic, enquiries, completed work, and upcoming priorities.",
      "The objective is to understand what’s working and use that information to guide future decisions.",
    ],
  },
];

const exampleWork: [string, string][] = [
  ["Service-page optimization", "Expanding important accounting pages around relevant services, customer questions, and commercial search intent."],
  ["Website architecture", "Strengthening relationships between the main accounting services, individual service pages, and industry content."],
  ["Internal linking", "Connecting supporting articles, service pages, and team profiles to improve navigation and reinforce topical relationships."],
  ["Technical SEO", "Reviewing crawling, indexing, structured data, and other technical foundations."],
  ["Content strategy", "Developing supporting resources connected to the accounting services the firm wanted to grow."],
];

const models: { title: string; body: string[] }[] = [
  {
    title: "Local SEO",
    body: [
      "For businesses serving customers in a specific city or region, local search visibility can be an important source of enquiries.",
      "A Calgary business may need to compete in traditional organic search results while also strengthening its Google Business Profile and visibility within Google Maps.",
      "The strategy needs to reflect its actual service area, competitors, and how customers search locally.",
    ],
  },
  {
    title: "Regional & National SEO",
    body: [
      "Businesses serving customers across Alberta or Canada often depend more heavily on strong service pages, industry-specific content, technical foundations, and website authority.",
      "In these markets, the website needs to clearly communicate its services and expertise without relying entirely on proximity-based searches.",
    ],
  },
  {
    title: "B2B & Professional Services SEO",
    body: [
      "Professional service searches often have lower search volumes but greater commercial value.",
      "For example, someone searching for fractional CFO services in Calgary may represent a more relevant opportunity for an accounting firm than a much broader informational search attracting thousands of visitors.",
      "That doesn’t mean low-volume keywords are automatically valuable. Search intent, service relevance, competition, and potential client value all need to be considered.",
      "This is why my approach prioritizes commercially relevant search opportunities rather than traffic volume alone.",
    ],
  },
];

const months: { title: string; body: string[] }[] = [
  {
    title: "Month 1 — Audit, Research & Strategy",
    body: [
      "The first step is understanding your website’s existing performance and identifying the most important opportunities.",
      "I review Google Search Console data, technical issues, existing rankings, priority service pages, competitors, website architecture, and target markets.",
      "From there, I establish a prioritized roadmap that identifies what needs attention first and why.",
    ],
  },
  {
    title: "Month 2 — Implementation & Optimization",
    body: [
      "Once the main priorities are established, the focus shifts toward implementing improvements.",
      "Depending on the website, this may involve resolving technical problems, improving commercial service pages, restructuring content, strengthening internal links, or optimizing local search signals.",
      "The highest-priority work is addressed first rather than spreading effort equally across every SEO activity.",
    ],
  },
  {
    title: "Month 3 — Expansion & Performance Review",
    body: [
      "As initial improvements are implemented, I review available performance data and identify the next opportunities.",
      "This may involve expanding service content, improving pages gaining search visibility, developing supporting articles, or addressing additional technical and competitive issues.",
      "The next phase is determined by the website’s progress and remaining opportunities.",
    ],
  },
  {
    title: "Month 4+ — Continue Improving What Works",
    body: [
      "SEO is an ongoing process, not a series of disconnected monthly projects.",
      "As more search data becomes available, I refine existing pages, expand into relevant opportunities, monitor competitors, and adjust priorities based on performance and business goals.",
      "The aim is to build on previous improvements rather than repeatedly starting from scratch.",
    ],
  },
];

const goodFit = [
  "Offer services potential customers actively search for",
  "Have valuable client relationships or commercially important services",
  "Operate in competitive local, regional, or national markets",
  "Want to strengthen organic visibility over time",
  "Have the capacity to take on additional customers",
  "Need someone who can implement improvements directly",
];

const faqs: FaqItem[] = [
  {
    q: "How long does SEO take to work?",
    a: [
      "SEO generally develops over months rather than days or weeks. Some technical and on-page improvements can produce relatively quick changes, while competitive commercial searches may take considerably longer.",
      "The timeline depends on your website’s starting position, competition, existing authority, content, and target market. I assess these factors before setting expectations.",
    ],
  },
  {
    q: "How much do SEO services cost?",
    a: [
      "Monthly SEO campaigns start from $3,000 CAD + GST, with the final scope determined by your website, competition, and business goals.",
    ],
    link: { href: "/pricing", label: "View SEO Pricing" },
  },
  {
    q: "Do you guarantee first-page Google rankings?",
    a: [
      "No. No SEO provider controls Google’s rankings or can guarantee specific positions.",
      "I focus on improving the factors within our control and measuring progress through organic visibility, relevant traffic, and business opportunities.",
    ],
  },
  {
    q: "Can you implement SEO changes directly on my website?",
    a: [
      "Yes. I implement many technical, structural, content, and on-page improvements directly on client websites.",
      "This includes working with platforms such as Webflow, WordPress, and custom-coded websites, depending on the project.",
    ],
  },
  {
    q: "Do you provide local SEO?",
    a: [
      "Yes. Local SEO can form part of an ongoing campaign for businesses targeting specific cities or service areas.",
      "This may include Google Business Profile optimization, local landing pages, geographic keyword targeting, citations, and local search performance monitoring.",
    ],
  },
  {
    q: "How do you measure SEO performance?",
    a: [
      "I review Google Search Console data, organic traffic, important keyword rankings, landing-page performance, conversions, enquiries, and other metrics relevant to the business.",
      "The goal is to understand whether your website is becoming more visible to the right audience and contributing to meaningful business opportunities.",
    ],
  },
  {
    q: "Do I need a long-term SEO contract?",
    a: [
      "No. Ongoing SEO campaigns are month-to-month.",
      "Your website, content, accounts, and other digital assets remain yours.",
    ],
  },
];

// Paragraph text with [label](/path) links rendered as <Link>s
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
function rich(text: string) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    out.push(
      <Link key={m.index} href={m[2]} className={t.inlineLink}>
        {m[1]}
      </Link>
    );
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Schema — WebPage + Service + BreadcrumbList graph, linked to the
   global #website and #organization nodes in layout.tsx. Includes this
   page's BreadcrumbList, so <Breadcrumbs> is rendered with schema={false}.
   The FAQPage schema comes from <ServicesFaq>. === */
const seoJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/seo#webpage",
      "url": "https://scaleseo.co/services/seo",
      "name": "Search Engine Optimization Services | Scale SEO",
      "description": "Ongoing search engine optimization services for professional service and B2B businesses. Scale SEO combines technical SEO, on-page optimization, content, local SEO and website improvements to grow qualified organic traffic.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/seo#service"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/seo#breadcrumb"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/seo#service",
      "name": "Search Engine Optimization Services",
      "alternateName": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "url": "https://scaleseo.co/services/seo",
      "description": "Ongoing SEO services combining SEO strategy, keyword research, technical SEO, on-page optimization, content strategy, local SEO, internal linking, website improvements and performance reporting.",
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
        "audienceType": "Professional service and B2B businesses"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SEO Campaign Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Strategy and Keyword Research"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Content Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal Linking and Site Architecture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website and Conversion Improvements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Tracking and Reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/seo#breadcrumb",
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
          "name": "SEO Services",
          "item": "https://scaleseo.co/services/seo"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function SeoServicePage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />

      {/* === HERO — breadcrumbs + big title, then image band === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "SEO" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>SEO Services in Calgary</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/calgary-skyline.webp" alt="Calgary skyline" style={{ objectPosition: "center 60%" }} />
        </div>
      </header>

      {/* === INTRO — stat left, intro + actions right === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <div className={t.chips}>
            {["Strategy", "Technical SEO", "On-Page", "Content", "Local SEO", "Conversion", "Reporting"].map((c) => (
              <span key={c} className={t.chip}>{c}</span>
            ))}
          </div>
          <div>
            <div className={t.stat}>Page 5 → 1</div>
            <p className={t.statLabel}>Priority keyword rankings for an accounting firm</p>
          </div>
        </div>
        <div className={t.splitRight}>
          <div className={t.body}>
            <p className={t.lead}>
              Scale SEO provides ongoing search engine optimization for
              professional service and B2B businesses looking to attract more
              qualified enquiries through Google.
            </p>
            <p>
              Based in Calgary, I manage every campaign directly, combining
              technical SEO, service-page improvements, content strategy, and
              ongoing performance analysis. The work is tailored to your website,
              market, and commercial priorities rather than a fixed monthly
              checklist.
            </p>
          </div>
          <div className={t.boxRow}>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call</span>
            </a>
            <Link href="/results" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>View Client Results</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — big heading + ruled rows === */}
      <section className={t.listSection} id="included" style={{ padding: 0 }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>What&rsquo;s Included in an Ongoing SEO Campaign?</h2>
          <div className={`${t.body} ${t.listIntro}`}>
            <p>
              Every website has different challenges. Some need technical
              improvements, others need stronger service pages, and some have
              existing rankings that aren&rsquo;t generating enough enquiries.
            </p>
            <p>
              I assess where your website stands, identify the opportunities most
              relevant to your business, and prioritize the work accordingly.
            </p>
          </div>
        </div>
        <div className={t.rows}>
          {included.map((item, i) => (
            <div key={item.title} className={t.row}>
              <div>
                <span className={t.rowNum}>{pad(i)}</span>
                <h3 className={t.h3}>{item.title}</h3>
                <p className={t.rowLead}>{item.lead}</p>
              </div>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === HOW I PRIORITIZE — heading left, text right === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>How I Prioritize SEO Work</h2>
        </div>
        <div className={t.rowsList}>
          <div className={t.body} style={{ paddingTop: 32, paddingBottom: 32 }}>
            <p className={t.lead}>
              SEO campaigns shouldn&rsquo;t revolve around completing the same
              list of tasks every month.
            </p>
            <p>
              A website with indexing problems needs a different strategy from
              one that ranks well but struggles to convert visitors. Likewise, an
              established website with strong service pages may benefit more from
              improving existing rankings than publishing additional content.
            </p>
            <p>
              My approach is to identify the constraints and opportunities that
              matter most before deciding what to implement.
            </p>
          </div>
        </div>
      </section>

      {/* === EXAMPLE — navy feature box === */}
      <section className={t.featureWrap}>
        <div className={t.feature}>
          <div className={t.featureText}>
            <span className={t.eyebrow}>Case Example</span>
            <h2 className={t.h2}>An Example From a Real Accounting SEO Campaign</h2>
            <div className={t.body}>
              <p>
                When working with{" "}
                <Link href="/results/empire-accountants" className={t.inlineLink}>Empire Accountants</Link>,
                a Brisbane accounting and advisory firm, the opportunity extended
                beyond increasing general website traffic.
              </p>
              <p>
                The firm offered established services across business
                accounting, tax, bookkeeping, SMSFs, and advisory. The website
                needed to represent those services more effectively in organic
                search.
              </p>
            </div>
          </div>
          <div className={t.featureSide}>
            <div className={t.body}>
              <p>The campaign involved several connected improvements:</p>
              <ul className={t.darkList}>
                {exampleWork.map(([k, v]) => (
                  <li key={k}>
                    <strong>{k}:</strong> {v}
                  </li>
                ))}
              </ul>
              <p>
                Rather than treating each activity as an isolated task, the work
                focused on building a more connected website around the
                firm&rsquo;s actual expertise and services.
              </p>
              <p>
                This is how I approach ongoing SEO: identify the opportunity,
                improve the relevant parts of the website, measure the response,
                and adjust priorities as new information becomes available.
              </p>
            </div>
            <div className={t.featureLinks}>
              <Link href="/results/empire-accountants" className={`${t.box} ${t.boxGrey}`}>
                <Corner />
                <span>Read the Empire Accountants Case Study &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === RESULTS — grey, heading + two metric boxes === */}
      <section className={t.grey} id="results">
        <div className={t.asideGrid}>
          <div className={t.aside}>
            <h2 className={t.h2}>SEO Results From Real Client Campaigns</h2>
            <p className={t.body}>
              SEO performance should be evaluated using real search data, not
              just reports of completed tasks.
            </p>
            <span className={t.eyebrow} style={{ margin: 0 }}>Empire Accountants &mdash; Brisbane, Australia</span>
          </div>
          <div className={t.cardGrid}>
            <article className={t.card}>
              <span className={t.metricValue}>Page 5 &rarr; Page 1</span>
              <p>
                Priority commercial keyword rankings improved from deeper Google
                search results to first-page positions.
              </p>
            </article>
            <article className={t.card}>
              <span className={t.metricValue}>2&times; Search Impressions and Clicks</span>
              <p>
                The campaign has produced substantial improvements in organic
                search visibility and clicks, supported by ongoing technical SEO,
                service-page optimization, content development, and internal
                linking.
              </p>
            </article>
            <article className={`${t.card} ${t.cardWide}`}>
              <p>
                The work focused on improving visibility for services relevant to
                the firm&rsquo;s prospective clients rather than simply increasing
                traffic through unrelated informational content.
              </p>
              <p className={t.cardLabel}>
                These results reflect the wider campaign, not a single isolated
                optimization. Rankings and performance vary between businesses,
                markets, and reporting periods.
              </p>
              <Link href="/results/empire-accountants" className={`${t.box} ${t.boxBlue}`}>
                <Corner />
                <span>View Full SEO Case Study &rarr;</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* === LOCAL / NATIONAL / B2B — blue section, light boxes === */}
      <section className={t.blue}>
        <div className={t.blueHead}>
          <h2 className={t.h2}>Local, National &amp; Professional Services SEO</h2>
          <p className={t.lead}>Different businesses require different search strategies.</p>
        </div>
        <div className={t.threeGrid}>
          {models.map((m, i) => (
            <div key={m.title} className={t.lightBox}>
              <span className={t.cardLabel}>{pad(i)}</span>
              <h3 className={t.h3}>{m.title}</h3>
              <div className={t.body}>
                {m.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={t.blueFoot}>
          <Link href="/industries/accounting-firms" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Explore SEO for Accounting Firms &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === FIRST 90 DAYS — heading left, month rows right === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>What the First 90 Days of an SEO Campaign Look Like</h2>
          <p className={t.body}>
            Every campaign begins from a different position, but the first few
            months generally focus on establishing priorities, implementing
            improvements, and building a foundation for continued growth.
          </p>
        </div>
        <div className={t.rowsList}>
          {months.map((m) => (
            <div key={m.title} className={t.rowsItem}>
              <h3 className={t.h3}>{m.title}</h3>
              <div className={t.body}>
                {m.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === GOOD FIT — two boxes === */}
      <section className={t.twoWrap}>
        <div className={t.twoHead}>
          <h2 className={t.h2}>Who Is Ongoing SEO Right For?</h2>
          <p className={t.lead}>
            Ongoing SEO is best suited to businesses where organic search can
            become a meaningful source of qualified enquiries.
          </p>
        </div>
        <div className={t.two}>
          <div className={`${t.panel} ${t.panelGrey}`}>
            <h3 className={t.h3}>It&rsquo;s generally a good fit for businesses that:</h3>
            <ul className={t.checks}>
              {goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={`${t.body} ${t.dim}`}>
              I primarily work with professional service and B2B businesses,
              particularly accounting firms, consultants, and advisory practices.
            </p>
          </div>
          <div className={`${t.panel} ${t.panelNavy}`}>
            <h3 className={t.h3}>When Monthly SEO Might Not Be the Best Option</h3>
            <div className={t.body}>
              <p>Ongoing SEO isn&rsquo;t necessarily the right starting point for every business.</p>
              <p>{rich("If you need immediate enquiries, [Google Ads management](/services/google-ads-management) may be more suitable in the short term.")}</p>
              <p>{rich("If your website has significant problems but you already have an internal team capable of implementing changes, a [standalone SEO audit](/services/seo-audits) may be a better investment.")}</p>
              <p>{rich("And if your website needs substantial redevelopment before it can support your growth objectives, [web development](/services/web-development) may need to come first.")}</p>
              <p>The right recommendation depends on your website, market, and business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === PRICING — split === */}
      <section className={t.pricing} style={{ padding: 0 }}>
        <div className={t.pricingAside}>
          <h2 className={t.h2}>Monthly SEO Pricing &amp; Engagements</h2>
          <p className={t.lead}>SEO campaigns start from $3,000 CAD + GST per month.</p>
        </div>
        <div className={t.pricingBody}>
          <div className={t.body}>
            <p>
              Campaigns are scoped individually rather than sold through fixed
              Bronze, Silver, or Gold packages.
            </p>
            <p>
              The appropriate monthly investment depends on your website&rsquo;s
              current condition, competition, target locations, technical
              requirements, content needs, and commercial objectives.
            </p>
            <p>
              Before starting, I&rsquo;ll review your website and explain the
              priorities I recommend, the scope of work involved, and why those
              improvements matter.
            </p>
          </div>
          <p className={t.pricingLead}>
            All ongoing SEO campaigns are month-to-month, without long-term
            contract lock-ins.
          </p>
          <p className={t.body}>
            You work directly with me, and your website, content, accounts, and
            data remain under your ownership.
          </p>
          <Link href="/pricing" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>View SEO Pricing &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions About SEO Services</>} />

      <ContactSection
        heading="Find Out What's Limiting Your Organic Growth"
        lead="If your website isn't generating enough qualified enquiries through Google, I can help identify where the most valuable opportunities and constraints are. We'll discuss your current website, search visibility, competition, target customers, and business goals to determine whether ongoing SEO makes sense. If we're a good fit, I'll explain what I would prioritize and why."
        points={["Month-to-month SEO", "Direct founder involvement", "Based in Calgary"]}
        cta={{ href: BOOKING_URL, label: "Book a Strategy Call →" }}
        note={
          <>
            Looking for an independent assessment instead?{" "}
            <Link href="/services/seo-audits">Explore SEO Audits &rarr;</Link>
          </>
        }
      />
    </main>
  );
}
