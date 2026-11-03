import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import CountUp from "../../components/CountUp";
import PinnedPoints, { type PinnedItem } from "../../components/PinnedPoints";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import t from "../svc.module.css";

const TITLE = "National SEO Services Canada | Scale SEO";
const DESCRIPTION =
  "National SEO services for Canadian businesses. Improve search visibility across Canada with founder-led SEO, technical improvements and content strategy.";
const URL = "https://scaleseo.co/services/national-seo";
const CONTACT_URL = "/contact";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services/national-seo" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, images: ["/images/toronto-cn-tower.webp"] },
};

/* === Content ============================================================ */

const audiences = [
  {
    title: "Accounting & Financial Services",
    body: [
      "Accounting firms offering specialized services, such as corporate tax, business advisory, and fractional CFO support, may work with clients across multiple provinces.",
      "A national SEO strategy can help these firms reach businesses searching for their expertise rather than focusing exclusively on local accounting searches.",
    ],
  },
  {
    title: "Professional Services & Consulting",
    body: [
      "Consultancies, advisory firms, and other professional service businesses often work with clients remotely.",
      "Their SEO strategy should reflect the industries, business problems, and specialized services they support, not necessarily the city where their office is located.",
    ],
  },
  {
    title: "B2B & Specialized Service Providers",
    body: [
      "B2B companies may serve a smaller group of potential customers spread across a much larger geographic market.",
      "National SEO helps these businesses develop visibility for relevant industry searches, specialized solutions, and the questions prospective customers ask before choosing a provider.",
    ],
  },
];

const included = [
  {
    title: "National Keyword & Competitor Research",
    body: [
      "Research the terms potential customers use across your target country and examine the websites already competing for those searches.",
      "This helps identify relevant opportunities, content gaps, and the level of competition your business faces.",
    ],
  },
  {
    title: "Technical SEO Improvements",
    body: [
      "Review the technical foundations of your website, including crawling, indexing, internal linking, redirects, canonical tags, structured data, and site architecture.",
      "The priority is fixing issues that affect search accessibility, usability, and the performance of important pages.",
    ],
  },
  {
    title: "Service Page Optimization",
    body: [
      "Improve existing service pages and develop new pages where they address distinct customer needs.",
      "Each page should clearly explain the service, demonstrate relevant experience, and help visitors understand whether your business is the right fit.",
    ],
  },
  {
    title: "Content Strategy & Development",
    body: [
      "Create and improve useful content around the questions, challenges, and services relevant to your target audience.",
      "For professional service businesses, this may include educational articles, industry resources, and detailed explanations of specialized services.",
    ],
  },
  {
    title: "Website Structure & Internal Linking",
    body: [
      "Organize your website so customers and search engines can navigate your services, industries, and supporting resources.",
      "A clear structure helps important pages connect with relevant information without relying on unnecessary or repetitive landing pages.",
    ],
  },
  {
    title: "Performance Monitoring & Reporting",
    body: [
      "Monitor organic visibility, relevant keyword rankings, search traffic, and available conversion data.",
      "Regular reporting helps identify what’s improving, where opportunities remain, and which changes should be prioritized next.",
    ],
  },
];

const strategy: PinnedItem[] = [
  {
    title: "Start With Your Most Valuable Services",
    body: [
      "A business doesn’t need to rank for every industry-related search.",
      "The starting point is identifying the services that generate meaningful business opportunities and understanding how prospective customers search for them.",
    ],
  },
  {
    title: "Understand the National Competition",
    body: [
      "Your competitors in organic search may be different from the businesses you compete with locally.",
      "National keyword research helps identify established competitors, relevant search intent, and opportunities where your business can offer something useful or distinctive.",
    ],
  },
  {
    title: "Develop Content Worth Finding",
    body: [
      "Detailed service pages, original insights, useful resources, and real examples of your work can help customers evaluate your expertise.",
      "The objective is to build a website that answers relevant questions and gives visitors a reason to choose your business.",
    ],
  },
  {
    title: "Improve Based on Performance",
    body: [
      "National SEO is an ongoing process.",
      "As your website develops, search performance and customer behaviour provide information that helps refine content, improve existing pages, and identify new opportunities.",
    ],
  },
];

const cases = [
  {
    name: "Jensen CPA",
    body: [
      "Scale SEO worked with Jensen CPA, a Calgary accounting firm, to improve service-page targeting, website structure, and content around corporate tax and other business accounting services.",
      "During the first four months, Google Search impressions increased by 125%, while organic clicks increased by 92%.",
    ],
    stats: [
      { from: 0, to: 125, prefix: "+", suffix: "%", label: "Increase in Google Search impressions" },
      { from: 0, to: 92, prefix: "+", suffix: "%", label: "Increase in organic clicks" },
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
    img: "/images/jensen-cpa-cover.webp",
  },
  {
    name: "Empire Accountants",
    body: [
      "Ongoing SEO for a Brisbane accounting and advisory firm, including service-page improvements, technical optimization, structured data, and educational content.",
      "The project demonstrates Scale SEO’s experience supporting specialized professional service businesses in different markets.",
    ],
    stats: [
      { from: 5, to: 1, prefix: "Page ", suffix: "", label: "Target keyword rankings, up from page 5" },
      { from: 0, to: 100, prefix: "+", suffix: "%+", label: "Organic search visibility" },
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
    img: "/images/empire-accountants-cover.webp",
  },
];

const steps = [
  { title: "Website & Market Review", body: "Assess your current website, search visibility, target services, and national competitors." },
  { title: "Strategy & Priorities", body: "Develop a plan based on relevant search opportunities, technical requirements, and business objectives." },
  { title: "Implementation", body: "Improve existing pages, resolve technical issues, develop content, and strengthen your website’s structure." },
  { title: "Ongoing Optimization", body: "Monitor performance, review results, and adjust the strategy as new opportunities and challenges emerge." },
];

const reasons = [
  { title: "Direct Access to Your SEO Specialist", body: "Every campaign is managed by Corbin Jensen. You work directly with the person responsible for your strategy and website improvements." },
  { title: "Experience With Specialized Businesses", body: "Scale SEO has particular experience with accounting firms, advisory businesses, and other professional service providers where expertise and trust play an important role in attracting customers." },
  { title: "SEO & Website Development Together", body: "Technical recommendations, content improvements, and website changes can be managed together, helping turn strategy into practical improvements." },
  { title: "Flexible Monthly Engagements", body: "Ongoing SEO services are provided month-to-month, without long-term lock-in contracts." },
];

const faqs: FaqItem[] = [
  {
    q: "How much do national SEO services cost?",
    a: [
      "Ongoing SEO services at Scale SEO start from $3,000 CAD per month, plus applicable taxes.",
      "The cost of a national campaign depends on your website, target market, competition, and the work required.",
    ],
    link: { href: "/pricing", label: "View SEO Pricing →" },
  },
  {
    q: "How long does national SEO take?",
    a: [
      "National SEO generally takes several months to produce meaningful improvements, although timelines vary depending on your website’s starting position, competition, and target searches.",
      "Highly competitive national keywords may require a longer-term approach.",
    ],
  },
  {
    q: "Can a small business compete nationally?",
    a: [
      "Yes, but targeting the right searches is important.",
      "Smaller businesses may have better opportunities with specialized services, industry-specific searches, and useful content than with broad keywords dominated by established brands.",
    ],
  },
  {
    q: "Do I need separate pages for every Canadian city?",
    a: [
      "Not necessarily.",
      "If your business serves customers nationally, useful service and industry pages may be more appropriate than creating separate landing pages for every city.",
      "Location pages can be valuable when they provide distinct information relevant to customers in those markets.",
    ],
  },
  {
    q: "Do you provide national SEO services outside Canada?",
    a: [
      "Yes. Scale SEO is based in Calgary and primarily serves Canadian businesses, but also works with clients internationally, including businesses in the United States and Australia.",
      "National SEO strategies can be developed for other countries based on the business’s target audience, competition, and website requirements.",
    ],
  },
  {
    q: "Is national SEO different from international SEO?",
    a: [
      "Yes. National SEO focuses on search visibility within a particular country.",
      "International SEO involves targeting audiences across multiple countries or languages and may require additional considerations such as localized content, country-specific targeting, and international website architecture.",
    ],
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service (areaServed Canada) + BreadcrumbList.
   FAQPage comes from <ServicesFaq>. === */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/national-seo#webpage",
      "url": "https://scaleseo.co/services/national-seo",
      "name": "National SEO Services Canada | Scale SEO",
      "description": "National SEO services for Canadian businesses. Improve search visibility across Canada with founder-led SEO, technical improvements and content strategy.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/national-seo#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/national-seo#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/national-seo#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/national-seo#service",
      "name": "National SEO Services",
      "serviceType": "National Search Engine Optimization",
      "description": "Founder-led national SEO services helping Canadian businesses improve organic search visibility across the country through technical SEO, keyword research, service page optimization, content strategy, and ongoing search optimization.",
      "url": "https://scaleseo.co/services/national-seo",
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Accounting firms, professional service businesses, consulting firms, and B2B companies"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "National SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "National Keyword and Competitor Research"
          },
          {
            "@type": "OfferCatalog",
            "name": "Technical SEO"
          },
          {
            "@type": "OfferCatalog",
            "name": "Service Page Optimization"
          },
          {
            "@type": "OfferCatalog",
            "name": "SEO Content Strategy"
          },
          {
            "@type": "OfferCatalog",
            "name": "Website Structure and Internal Linking"
          },
          {
            "@type": "OfferCatalog",
            "name": "SEO Performance Monitoring"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/national-seo#breadcrumb",
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
          "name": "National SEO Services",
          "item": "https://scaleseo.co/services/national-seo"
        }
      ]
    }
  ]
};

/* === Page =============================================================== */

export default function NationalSeoPage() {
  return (
    <main className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "National SEO Services" }]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>National SEO Services in Canada</h1>
        </div>
        <div className={t.band}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/toronto-cn-tower.webp"
            alt="Black and white street view of downtown Toronto from Front Street, with the CN Tower rising above Union Station and a glass office tower"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Scale SEO provides national SEO services for businesses looking to
            improve their visibility on Google and reach customers across Canada.
          </p>
          <p>
            Based in Calgary, Scale SEO works with accounting firms, professional
            service businesses, and B2B companies that serve customers beyond a
            single city or region.
          </p>
          <p>
            From technical SEO and website improvements to content strategy and
            competitor research, every campaign is managed directly by founder
            Corbin Jensen and built around your business goals.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Reach customers beyond your local market.</strong>
          </span>
          <Link href={CONTACT_URL} className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Discuss Your SEO Project &rarr;</span>
          </Link>
        </div>
      </section>

      {/* === WHAT IS NATIONAL SEO — big H2, label left, text right === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>What Is National SEO?</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "26ch" }}>
            National SEO is the process of improving a website&rsquo;s
            visibility for searches across an entire country, rather than
            focusing primarily on one city or local service area.
          </p>
          <div className={t.prioBody}>
            <p>
              For example, an accounting firm serving businesses throughout
              Canada may want to appear for searches related to corporate tax
              planning or fractional CFO services, regardless of where the
              potential client is located.
            </p>
            <p>
              Unlike local SEO, which often focuses on location-specific searches
              and Google Business Profiles, national SEO places greater emphasis
              on broader search terms, specialized service pages, website
              authority, and competition across larger markets.
            </p>
            <p>
              The goal isn&rsquo;t simply to attract more visitors. It&rsquo;s to
              reach people across your target country who are actively looking
              for the services you provide.
            </p>
          </div>
        </div>
      </section>

      {/* === WHO BENEFITS — heading + ruled rows === */}
      <section className={t.listSection} style={{ padding: 0 }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>Who Benefits From National SEO?</h2>
          <p className={`${t.lead} ${t.listIntro}`}>
            National SEO is particularly relevant for businesses that
            aren&rsquo;t limited by their physical location.
          </p>
        </div>
        <div className={t.rows}>
          {audiences.map((item) => (
            <div key={item.title} className={t.row}>
              <h3 className={t.h3}>{item.title}</h3>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === WHAT'S INCLUDED — numbered grid === */}
      <section className={t.steps}>
        <h2 className={t.h2}>What&rsquo;s Included in National SEO Services?</h2>
        <p className={t.body} style={{ maxWidth: 720, marginTop: 24 }}>
          Every national SEO campaign begins with an assessment of your website,
          competition, and target customers. The work is then prioritized around
          the opportunities most relevant to your business.
        </p>
        <div className={t.stepGrid}>
          {included.map((item, i) => (
            <div key={item.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}.</span> {item.title}
              </h3>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === NATIONAL VS LOCAL — big H2, then two columns === */}
      <section className={t.prioSection} style={{ borderTop: "1px solid var(--h-rule)" }}>
        <h2 className={t.prioTitle} style={{ maxWidth: "18ch" }}>How National SEO Differs From Local SEO</h2>
        <p className={t.prioBody} style={{ maxWidth: 720, marginTop: 32 }}>
          National and local SEO share many of the same foundations, but the
          audience and competitive environment can be different.
        </p>
        <div className={t.stepGrid}>
          <div className={t.step}>
            <h3 className={t.stepTitle}>Local SEO</h3>
            <p className={`${t.body} ${t.dim}`}>
              Local SEO focuses on reaching customers in a particular city or
              service area. It may involve Google Business Profile optimization,
              local service pages, and location-specific search terms.
            </p>
          </div>
          <div className={t.step}>
            <h3 className={t.stepTitle}>
              <span>National SEO</span>
            </h3>
            <p className={`${t.body} ${t.dim}`}>
              National SEO focuses on reaching customers across a country. The
              strategy generally places greater emphasis on broader search
              demand, specialized content, competitive research, and the
              strength of your website as a whole.
            </p>
          </div>
        </div>
        <div className={t.prioRow}>
          <p className={t.prioLabel}>Some businesses benefit from both approaches.</p>
          <div className={t.prioBody}>
            <p>
              For example, an accounting firm may want to attract local
              bookkeeping clients while also reaching businesses across Canada
              for specialized tax advisory services.
            </p>
            <p>
              The right strategy depends on where your customers are located and
              which services you want to grow.
            </p>
          </div>
        </div>
      </section>

      {/* === BUILDING A STRATEGY — pinned scroll section === */}
      <PinnedPoints
        title="Building a National SEO Strategy"
        lead="Competing nationally requires more than adding the word “Canada” to your website."
        items={strategy}
      />

      {/* === EXPERIENCE — full-bleed navy with case study rows === */}
      <section className={t.expSection}>
        <div className={t.expTop}>
          <h2 className={t.expTitle}>Experience With Professional Service SEO</h2>
          <div className={t.expBody}>
            <p>
              Scale SEO has worked with professional service and B2B businesses
              in Canada and Australia, providing technical SEO, website
              development, content strategy, and ongoing search optimization.
            </p>
            <p>
              These projects demonstrate relevant SEO experience, although their
              results should not be interpreted as evidence of nationwide
              rankings.
            </p>
          </div>
        </div>
        {cases.map((c) => (
          <div key={c.href} className={t.expRow}>
            <div className={t.expLeft}>
              <h3 className={t.expName}>{c.name}</h3>
              <Link href={c.href} className={`${t.box} ${t.boxBlue}`}>
                <Corner />
                <span>{c.cta} &rarr;</span>
              </Link>
            </div>
            <div className={t.expText}>
              {c.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className={t.expStats}>
                {c.stats.map((m) => (
                  <div key={m.label}>
                    <span className={t.expStat}>
                      <CountUp from={m.from} to={m.to} prefix={m.prefix} suffix={m.suffix} />
                    </span>
                    <span className={t.expStatLabel}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href={c.href} className={t.expImg} tabIndex={-1} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" loading="lazy" />
            </Link>
          </div>
        ))}
      </section>

      {/* === HOW ENGAGEMENTS WORK — steps === */}
      <section className={t.steps}>
        <h2 className={t.h2}>How National SEO Engagements Work</h2>
        <p className={t.body} style={{ maxWidth: 720, marginTop: 24 }}>
          Scale SEO takes a hands-on approach, with each engagement managed
          directly by founder Corbin Jensen.
        </p>
        <div className={t.stepGrid}>
          {steps.map((s, i) => (
            <div key={s.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> &mdash; {s.title}
              </h3>
              <p className={`${t.body} ${t.dim}`}>{s.body}</p>
            </div>
          ))}
        </div>
        <p className={t.body} style={{ maxWidth: 720, marginTop: 56 }}>
          The focus is on practical implementation, clear communication, and
          steady improvements rather than unnecessary deliverables.
        </p>
      </section>

      {/* === WHY WORK WITH SCALE SEO — marquee heading + points === */}
      <section className={t.whySection}>
        <div className={t.whyMarquee}>
          <div className={t.whyTrack}>
            {[0, 1, 2, 3].map((n) => (
              <span key={n} className={t.whyItem} aria-hidden={n > 0}>
                {n === 0 ? <h2 className={t.whyTitle}>Why Work With Scale SEO?</h2> : <span className={t.whyTitle}>Why Work With Scale SEO?</span>}
                <svg className={t.whyMark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
                  <circle cx="183" cy="183" r="164" strokeWidth="36" />
                  <path d="M101 139 H224.5 V262" strokeWidth="38" />
                </svg>
              </span>
            ))}
          </div>
        </div>
        <div className={t.whyList}>
          {reasons.map((r) => (
            <article key={r.title} className={t.whyPoint}>
              <h3 className={t.whyPointTitle}>{r.title}</h3>
              <p className={t.whyPointBody}>{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="National SEO Built Around Your Business"
        lead="Whether you're an accounting firm serving clients across Canada, a B2B company reaching customers nationwide, or a professional service business expanding beyond its local market, Scale SEO can help develop a search strategy around your goals. Work directly with an independent SEO specialist who understands the importance of useful content, sound technical foundations, and ongoing website improvements."
        cta={{ href: CONTACT_URL, label: "Get in Touch With Scale SEO →" }}
      />
    </main>
  );
}
