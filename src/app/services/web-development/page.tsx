import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Shared service page template (new brand)
import t from "../svc.module.css";
import ServicesMark from "../../sections/home/ServicesMark";

export const metadata: Metadata = {
  title: { absolute: "Website Design & Development Calgary | Scale SEO" },
  description:
    "Website design and development in Calgary for accounting firms and established businesses. Custom websites, technical SEO, and ongoing improvements.",
  alternates: { canonical: "/services/web-development" },
};

const included: { title: string; body: string }[] = [
  { title: "Website Design & User Experience", body: "Clean, responsive websites that communicate your services clearly and work across desktop, tablet, and mobile devices." },
  { title: "Service Pages & Site Architecture", body: "Dedicated pages for important services, organized into a logical structure that helps visitors and search engines navigate your website." },
  { title: "Technical SEO Foundations", body: "Search-friendly navigation, metadata, canonical URLs, redirects, structured data, and other technical elements needed for a well-structured website." },
  { title: "Content Management & Development", body: "Flexible website structures that support new services, content updates, and ongoing development without unnecessary redevelopment." },
  { title: "Conversion-Focused Design", body: "Clear service information, enquiry forms, calls to action, and relevant trust signals that help visitors take the next step." },
];

const steps: { title: string; body: string[] }[] = [
  { title: "Plan", body: ["We review your business, customers, services, and website requirements to establish a clear structure and project scope."] },
  { title: "Design & Build", body: ["We develop responsive layouts, service pages, and technical foundations with usability and search visibility in mind."] },
  { title: "Test & Launch", body: ["We review functionality, mobile usability, analytics, and essential technical SEO settings before launch."] },
  { title: "Improve", body: ["Websites can continue evolving through ongoing development, new content, and improvements informed by search performance."] },
];

const faqs: FaqItem[] = [
  { q: "Can you improve my existing website?", a: ["Yes. We regularly improve established websites through design updates, new service pages, technical SEO fixes, and structural improvements. A complete rebuild isn\u2019t always necessary."] },
  { q: "Which website platforms do you work with?", a: ["Our experience includes Webflow and other content management systems, along with custom code and technical website implementations. We recommend platforms based on each project\u2019s requirements."] },
  {
    q: "Is SEO included with a new website?",
    a: [
      "New websites include foundational SEO considerations such as site architecture, metadata, internal linking, and search accessibility.",
      "Ongoing optimization and content development are available through our [monthly SEO services](/services/seo).",
    ],
  },
  { q: "Will I own my website?", a: ["Yes. You retain ownership of your website, content, accounts, and digital assets."] },
  { q: "Do you work with businesses outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and works with accounting firms and established businesses across Canada and Australia."] },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/web-development#webpage",
      "url": "https://scaleseo.co/services/web-development",
      "name": "Web Development & Website Design in Calgary | Scale SEO",
      "description": "Website design and development in Calgary for accounting firms and established businesses. Custom websites, technical SEO, and ongoing improvements.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/web-development#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/web-development#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/web-development#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/web-development#service",
      "name": "Web Development & Website Design",
      "serviceType": "Website Design and Development",
      "url": "https://scaleseo.co/services/web-development",
      "description": "Custom website design, development, redesigns, and improvements for established businesses in Calgary and across Canada. Services include Webflow development, custom-coded websites, responsive design, website architecture, and technical SEO foundations.",
      "mainEntityOfPage": {
        "@id": "https://scaleseo.co/services/web-development#webpage"
      },
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Alberta"
          }
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "6000",
        "priceCurrency": "CAD",
        "offerCount": 1,
        "description": "Custom website development projects start from $6,000 CAD plus GST. Final pricing depends on project scope and requirements."
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/web-development#breadcrumb",
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
          "name": "Web Development",
          "item": "https://scaleseo.co/services/web-development"
        }
      ]
    }
  ]
};

export default function WebDevelopmentPage() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* === HERO === */}
      <header>
        <div className={t.hero}>
          <div className={t.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Web Development" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={t.title}>Website Design &amp; Development in Calgary</h1>
        </div>
        <div className={t.heroBand}>
          {/* Translucent animated logo mark behind the laptop */}
          <ServicesMark className={t.heroMark} slow />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/web-development-tablets.webp"
            alt="Two tablets showing a business website being designed and coded in a website builder"
          />
        </div>
      </header>

      {/* === INTRO === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <p className={t.lead}>
            <strong>
              Professional websites built for visibility, usability, and growth.
            </strong>
          </p>
          <div>
            <div className={t.stat}>~100</div>
            <p className={t.statLabel}>Pages built for MSV Plumbing Services</p>
          </div>
        </div>
        <div className={t.splitRight}>
          <div className={t.body}>
            <p className={t.lead}>
              Scale SEO designs, builds, and improves websites for accounting
              firms, professional services, and established businesses across
              Canada and Australia.
            </p>
            <p>
              We combine website development with SEO expertise, creating
              websites that clearly communicate your services, make it easy for
              customers to enquire, and provide a strong foundation for organic
              search.
            </p>
          </div>
          <div className={t.boxRow}>
            <Link href="/contact" className={`${t.box} ${t.boxNavy}`}>
              <Corner />
              <span>Book a Strategy Call &rarr;</span>
            </Link>
            <Link href="/results" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>View Website Projects &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === BEYOND THE BUILD — two boxes === */}
      <section className={t.twoWrap}>
        <div className={t.twoHead}>
          <h2 className={t.h2}>New Websites &amp; Ongoing Development</h2>
          <p className={t.lead}>Whether you&rsquo;re launching a new website or improving an existing one, we focus on practical design, clear structure, and long-term usability.</p>
        </div>
        <div className={t.two}>
          <div className={`${t.panel} ${t.panelGrey}`}>
            <h3 className={t.h3}>New Website Design &amp; Development</h3>
            <div className={t.body}>
              <p><strong>Built around your business, not a template.</strong></p>
              <p>
                We develop custom websites with responsive layouts, clear
                navigation, and dedicated pages for your most important services.
              </p>
              <p>
                From the initial structure to technical SEO foundations, every
                element is planned to support your business and make future
                growth easier.
              </p>
            </div>
          </div>
          <div className={`${t.panel} ${t.panelNavy}`}>
            <h3 className={t.h3}>Existing Website Development</h3>
            <div className={t.body}>
              <p><strong>Improve what you already have.</strong></p>
              <p>
                Not every business needs a new website. We regularly improve
                established websites through new service pages, updated layouts,
                technical fixes, and structural improvements.
              </p>
              <p>
                Development can also be included in an ongoing{" "}
                <Link href="/services/seo" className={t.inlineLink}>SEO campaign</Link>, allowing your website to evolve
                alongside your search strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — ruled rows === */}
      <section className={t.listSection} style={{ padding: 0, borderTop: "1px solid var(--h-rule)", marginTop: 56 }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>What&rsquo;s Included in Website Development?</h2>
          <p className={`${t.lead} ${t.listIntro}`}>
            Every project is scoped around your business, your services, and
            the website you already have.
          </p>
        </div>
        <div className={t.rows}>
          {included.map((item, i) => (
            <div key={item.title} className={t.row}>
              <div>
                <span className={t.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={t.h3}>{item.title}</h3>
              </div>
              <p className={`${t.body} ${t.dim}`}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === COVER CARDS — full-width client project images === */}
      <section className={t.covers} aria-label="Selected website projects">
        <div className={t.coversHead}>
          <h2 className={t.h2}>Selected Website Projects</h2>
          <p className={t.lead}>
            Real websites developed and improved for businesses in Canada and
            Australia.
          </p>
        </div>
        {[
          {
            href: "/results/jensen-cpa",
            img: "/images/jensen-cpa-cover.webp",
            alt: "Jensen CPA team in Calgary, website redevelopment client of Scale SEO",
            tags: ["Website Redesign & SEO"],
            title: "Jensen CPA \u2014 Calgary, Canada",
            desc: "Redeveloped the website for a Calgary accounting firm, improving its service-page structure, navigation, and technical SEO foundations.",
          },
          {
            href: "/results/empire-accountants",
            img: "/images/empire-accountants-cover.webp",
            alt: "Empire Accountants team in their Brisbane office, ongoing SEO and website development client of Scale SEO",
            tags: ["Ongoing Website Development & SEO"],
            title: "Empire Accountants \u2014 Brisbane, Australia",
            desc: "Improved website structure, service pages, internal linking, and technical SEO to support greater visibility for accounting and advisory services.",
          },
          {
            href: "/results/msv-plumbing-services",
            img: "/images/msv-plumbing-cover.webp",
            alt: "Matthew Main of MSV Plumbing Services with his work ute in Brisbane, website and SEO client of Scale SEO",
            tags: ["100-Page Website Development & Local SEO"],
            title: "MSV Plumbing Services \u2014 Brisbane, Australia",
            desc: "Built and expanded a large service-based website for a Brisbane plumbing company, including dedicated service and location pages.",
          },
        ].map((c) => (
          <Link key={c.href} href={c.href} className={t.cover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.img} alt={c.alt} loading="lazy" />
            <div className={t.coverText}>
              <div className={t.coverTags}>
                {c.tags.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <h3 className={t.coverTitle}>{c.title}</h3>
              <p className={t.coverDesc}>{c.desc}</p>
              <span className={t.coverLink}>View Project</span>
            </div>
          </Link>
        ))}
      </section>

      {/* === PROCESS — heading, then 2-column grid of numbered steps === */}
      <section className={t.steps}>
        <h2 className={t.h2}>Our Website Development Process</h2>
        <div className={t.stepGrid}>
          {steps.map((step, i) => (
            <div key={step.title} className={t.step}>
              <h3 className={t.stepTitle}>
                <span>{String(i + 1).padStart(2, "0")}</span> {step.title}
              </h3>
              <div className={`${t.body} ${t.dim}`}>
                {step.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === PRICING — split === */}
      <section className={t.pricing} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.pricingAside}>
          <h2 className={t.h2}>Website Development Pricing</h2>
          <p className={t.lead}><strong>Starting at $6,000 CAD + applicable GST</strong></p>
        </div>
        <div className={t.pricingBody}>
          <div className={t.body}>
            <p>
              Website projects are quoted individually based on design
              requirements, page count, functionality, and technical complexity.
            </p>
            <p>
              We provide a clear scope before development begins. Hosting,
              ongoing maintenance, and monthly SEO services are available
              separately.
            </p>
          </div>
          <p className={t.pricingLead}>You retain ownership of your website, content, accounts, and data.</p>
          <Link href="/pricing" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>View Website &amp; SEO Pricing &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Build a Better Website"
        lead="Whether you're planning a new website or looking to improve an existing one, we'll help you identify the right approach for your business. Tell us about your project, and we'll discuss the next steps."
        cta={{ href: "/contact", label: "Book a Strategy Call →" }}
      />
    </main>
  );
}
