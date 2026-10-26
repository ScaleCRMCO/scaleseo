import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SketchIcon from "../../components/SketchIcon";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import Contact from "../../components/ContactCta";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Web Development & Website Design in Calgary | Scale SEO",
  description:
    "Custom website design and development in Calgary for established businesses across Canada. Responsive, SEO-ready websites built for performance, search visibility and enquiries. Projects from $6,000 + GST.",
  alternates: { canonical: "/services/web-development" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

/* === Content ============================================================ */

const services: {
  title: string;
  body: string[];
  listLabel?: string;
  list?: string[];
  after?: string;
  link?: { href: string; label: string };
}[] = [
  {
    title: "Custom Website Design & Development",
    body: [
      "For businesses launching a new website or replacing an outdated one, I develop complete websites with professional layouts, responsive design, clear navigation, and the functionality required to support your services.",
    ],
    listLabel: "Projects can include:",
    list: [
      "Custom website design and development",
      "Mobile-responsive page layouts",
      "Service and industry landing pages",
      "Contact forms and calls to action",
      "Navigation and site architecture",
      "Content management functionality where required",
      "Analytics and search tracking setup",
    ],
  },
  {
    title: "Website Redesigns & Rebuilds",
    body: [
      "Not every website needs to be rebuilt. But when an existing design, platform, or structure is limiting performance, a redesign may provide a better long-term foundation.",
      "I review what can be retained, what needs improvement, and how existing pages and search visibility should be handled during the transition.",
      "The goal is to create a better website without unnecessarily discarding content, functionality, or existing SEO value.",
    ],
  },
  {
    title: "Existing Website Improvements",
    body: [
      "If your website already has a suitable foundation, individual improvements may make more sense than a complete rebuild.",
    ],
    listLabel: "I work across existing website platforms to implement changes such as:",
    list: [
      "Service-page improvements",
      "Navigation and internal linking",
      "Responsive layout adjustments",
      "Page speed and technical fixes",
      "Forms and conversion improvements",
      "Structured data and metadata",
      "New landing pages and content sections",
    ],
    after: "The scope depends on your platform, access, and the changes required.",
  },
  {
    title: "SEO-Focused Website Development",
    body: [
      "A website should be designed for the people using it while remaining accessible and understandable to search engines.",
      "I incorporate SEO foundations into website development, including logical page structures, crawlable navigation, appropriate metadata, internal linking, mobile usability, redirects where needed, and technical search requirements.",
      "This gives your website a stronger foundation for future organic search campaigns without suggesting that development alone guarantees rankings.",
    ],
    link: { href: "/services/seo", label: "Explore Ongoing SEO Services" },
  },
];

const platforms = [
  {
    title: "Webflow Websites",
    tone: "tBlue",
    body: [
      "Webflow is often a good fit for professional service businesses that need a custom-designed marketing website with structured content, responsive layouts, and a visual content management experience.",
      "I use Webflow for new website projects where its design and CMS capabilities match the business's requirements.",
    ],
  },
  {
    title: "Custom-Coded Websites",
    tone: "tNavy",
    body: [
      "For projects requiring greater flexibility, I also develop websites using modern web technologies and GitHub-based development workflows.",
      "Depending on the project, this can include frameworks such as Next.js, with deployment and hosting through services such as Vercel.",
      "Custom development can provide greater control over website structure, functionality, and future extensions. The editing and maintenance arrangement is determined by how the website is built.",
    ],
  },
  {
    title: "Existing Website Platforms",
    tone: "tPink",
    body: [
      "If you already have a website, you don't necessarily need to migrate to Webflow or a custom-coded setup.",
      "I can work within existing platforms, including WordPress and other content management systems, where the required changes are supported and appropriate access is available.",
      "The objective is to improve the website you have when that makes business and technical sense.",
    ],
  },
];

const steps = [
  {
    name: "Discovery & Planning",
    body: [
      "We establish your services, target audience, website goals, required functionality, and existing digital assets.",
      "For redesigns, I also review your current website to identify pages, content, functionality, and search visibility that should be retained.",
    ],
  },
  {
    name: "Site Structure & Design",
    body: [
      "I plan the website's navigation, page structure, and key layouts before development.",
      "The focus is on helping visitors understand your services, navigate the website, and reach the appropriate enquiry points.",
    ],
  },
  {
    name: "Development & SEO Foundations",
    body: [
      "The approved design is developed with responsive layouts, appropriate technical configurations, and SEO considerations incorporated.",
      "Depending on the project, this can include structured data, metadata, internal linking, forms, analytics, and content management functionality.",
    ],
  },
  {
    name: "Testing & Launch",
    body: [
      "Before launch, I review the website across relevant devices and screen sizes, check navigation and forms, and address identified technical issues.",
      "For existing websites, launch planning also includes appropriate redirect and URL considerations.",
    ],
  },
  {
    name: "Ongoing Support",
    body: [
      "After launch, additional development, website improvements, hosting arrangements, and SEO services can be scoped according to your needs.",
      "Ongoing SEO is available separately and is not required as part of a website project.",
    ],
  },
];

const pricingRows = [
  { title: "One-time project fee", body: "Website development is quoted as a standalone project." },
  { title: "Optional hosting", body: "Hosting or ongoing technical support can be arranged separately depending on the platform and setup." },
  { title: "Ongoing SEO", body: "Monthly SEO services can be added after launch but are not required." },
];

const faqs: FaqItem[] = [
  {
    q: "How much does website development cost in Calgary?",
    a: [
      "Website projects at Scale SEO start from $6,000 CAD + GST.",
      "The final price depends on the required design, number and complexity of page layouts, content requirements, functionality, integrations, and development platform.",
      "You'll receive a defined project scope and quote before work begins.",
    ],
  },
  {
    q: "Which website platforms do you use?",
    a: [
      "For new website builds, I generally use Webflow or custom-coded development workflows involving GitHub and modern web frameworks.",
      "If you already have a website, I can work with WordPress and other existing platforms depending on their capabilities and the required changes.",
      "I recommend the platform based on the project's requirements rather than using one system for every business.",
    ],
  },
  {
    q: "Can you improve my existing website instead of rebuilding it?",
    a: [
      "Yes. If your current website has a suitable foundation, I can make targeted improvements to its design, structure, content, technical SEO, and conversion elements.",
      "A rebuild is generally considered when the existing platform or website structure makes those improvements unnecessarily difficult or restrictive.",
    ],
  },
  {
    q: "Will my new website be optimized for SEO?",
    a: [
      "SEO foundations are considered throughout development, including site architecture, responsive design, crawlability, page structure, internal linking, and technical configuration.",
      "These elements help prepare a website for organic search, but they don't guarantee rankings. Ongoing SEO campaigns can be added separately when required.",
    ],
  },
  {
    q: "Will I be able to update the website myself?",
    a: [
      "That depends on the website platform and content management setup.",
      "Webflow websites can be configured with CMS functionality for updating supported content. Custom-coded websites may require a CMS integration or developer support for certain changes.",
      "We'll establish your content editing requirements before choosing the development approach.",
    ],
  },
  {
    q: "Do you offer website hosting and maintenance?",
    a: [
      "Hosting can be arranged as an optional service, depending on the website platform.",
      "Maintenance, ongoing development, and SEO support can also be scoped separately. These requirements will be explained as part of your project proposal.",
    ],
  },
  {
    q: "Who owns the completed website?",
    a: [
      "You retain ownership of the agreed website deliverables and your business content, subject to any applicable third-party licences or services.",
      "The project proposal will outline how access, hosting, repositories, and other relevant assets are handled.",
    ],
  },
  {
    q: "Do you only build websites for businesses in Calgary?",
    a: [
      "No. Scale SEO is based in Calgary, Alberta, but website design and development projects can be delivered remotely for businesses across Canada and internationally.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/web-development#webpage",
      "url": "https://scaleseo.co/services/web-development",
      "name": "Web Development & Website Design in Calgary | Scale SEO",
      "description": "Custom web development and website design for established businesses in Calgary and across Canada. Scale SEO builds professional, SEO-ready websites using Webflow and modern development technologies.",
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

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Page =============================================================== */

export default function WebDevelopmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Web Development" },
        ]}
        breadcrumbSchema={false}
        title={
          <>
            Web Development &amp; Website Design in{" "}
            <span className="title-block">Calgary</span>
          </>
        }
        icon="browser"
        image={{
          src: "/images/web-development-hero.webp",
          alt: "Laptop showing a website technical health dashboard",
        }}
        actions={
          <>
            <Link href="/contact">
              <span>Request a Website Quote</span>
              <span>→</span>
            </Link>
            <Link href="/results">
              <span>View Website Projects</span>
              <span>→</span>
            </Link>
          </>
        }
      >
        <p className={styles.heroTag}>
          Custom websites built for performance, search visibility, and
          business growth.
        </p>
        <p>
          Scale SEO provides web development and website design services for
          established businesses in Calgary and across Canada. I build
          professional, responsive websites with clear navigation, strong
          technical foundations, and a focus on turning visitors into enquiries.
        </p>
        <p>
          Whether you&rsquo;re launching a new website, replacing an outdated
          one, or improving an existing site, the objective is the same: create
          a website that supports your business today and can grow alongside it.
        </p>
      </PageHero>

      {/* === WEBSITE DESIGN THAT SUPPORTS YOUR BUSINESS — navy split === */}
      <section className={styles.navy} data-nav-theme="dark">
        <div className={styles.split}>
          <div>
            <h2 className={`${styles.bigH2} reveal-up`}>
              Website Design That{" "}
              <span className={styles.accent}>Supports Your Business</span>
            </h2>
            <SketchIcon name="browser" className={styles.sketch} />
          </div>
          <div className={`${styles.prose} reveal-up`}>
            <p className={styles.lead}>
              Your website is often one of the first places a prospective
              client evaluates your business.
            </p>
            <p>
              It needs to communicate what you do, who you work with, and why
              someone should choose you. It also needs to work properly across
              devices, load efficiently, and make it easy for visitors to find
              information and take the next step.
            </p>
            <p>
              At Scale SEO, website design and development are approached
              together.
            </p>
            <p>
              I consider site structure, user experience, technical performance,
              search visibility, and conversion opportunities from the beginning
              rather than treating SEO as something to address after launch.
            </p>
            <p className={styles.lead}>
              The result is a website built around your services, customers,
              and commercial priorities&mdash;not simply a collection of
              attractive pages.
            </p>
          </div>
        </div>
      </section>

      {/* === WEB DEVELOPMENT SERVICES — intro + alternating bands === */}
      <section className={styles.svcHead}>
        <h2 className={`${styles.bigH2} reveal-up`}>Web Development Services</h2>
        <p className={`${styles.intro} reveal-up`}>
          I provide both new website development and improvements to existing
          business websites. Every project is scoped around the functionality,
          design, content, and technical requirements involved.
        </p>
      </section>
      {services.map((s, i) => (
        <section
          key={s.title}
          className={`${styles.band} ${i % 2 ? styles.bandAlt : ""}`}
        >
          <div className={styles.bandGrid}>
            <div>
              <span className={styles.num}>{pad(i)}</span>
              <h3 className={`${styles.bandTitle} reveal-up`}>{s.title}</h3>
            </div>
            <div className={`${styles.prose} ${styles.proseDark} reveal-up`}>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <>
                  <p className={styles.listLabel}>{s.listLabel}</p>
                  <ul className={styles.list}>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </>
              )}
              {s.after && <p>{s.after}</p>}
              {s.link && (
                <Link href={s.link.href} className={styles.textLink}>
                  {s.link.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* === PLATFORMS — coloured cards === */}
      <section className={styles.platforms}>
        <div className={styles.headRow}>
          <h2 className={`${styles.bigH2} reveal-up`}>
            Website Platforms I Work With
          </h2>
          <p className={`${styles.intro} reveal-up`}>
            The right platform depends on your business, the functionality
            required, and how the website will be managed after launch.
          </p>
        </div>
        <div className={styles.cards}>
          {platforms.map((p) => (
            <article
              key={p.title}
              className={`${styles.card} ${styles[p.tone]} reveal-up`}
            >
              <h3 className={styles.cardTitle}>{p.title}</h3>
              {p.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* === PROCESS — heading left, numbered rows right === */}
      <section className={styles.process}>
        <div className={styles.processGrid}>
          <div className={styles.processAside}>
            <h2 className={`${styles.bigH2} reveal-up`}>
              What&rsquo;s Included in a Website Project?
            </h2>
            <p className={`${styles.intro} reveal-up`}>
              Every website has different requirements, but a typical project
              follows a structured development process.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.name} className={`${styles.step} reveal-up`}>
                <span className={styles.stepNum}>{pad(i)}</span>
                <h3 className={styles.stepName}>{s.name}</h3>
                <div className={styles.stepBody}>
                  {s.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === SELECTED WORK — navy split === */}
      <section className={styles.navy} data-nav-theme="dark">
        <div className={styles.split}>
          <h2 className={`${styles.bigH2} reveal-up`}>
            Website Projects &amp;{" "}
            <span className={styles.accent}>Selected Work</span>
          </h2>
          <div className={`${styles.prose} reveal-up`}>
            <p className={styles.lead}>
              Website development should be evaluated by more than appearance
              alone.
            </p>
            <p>
              When reviewing a project, I consider how clearly the website
              communicates its services, how visitors move through the pages,
              how the technical structure supports search, and whether the
              website is suitable for the business using it.
            </p>
            <p>
              Explore selected website and client projects to see examples of
              the structure, design, development, and search-focused
              improvements involved.
            </p>
            <Link href="/results" className={styles.btnLight}>
              <span>View Website Projects &amp; Case Studies</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === PRICING — light blue, full-width rows === */}
      <section className={styles.pricing}>
        <div className={styles.label}>Website Development Pricing</div>
        <h2 className={`${styles.bigH2} reveal-up`}>
          Websites Starting From $6,000 + GST
        </h2>
        <div className={`${styles.pricingIntro} reveal-up`}>
          <p>
            New website projects start from $6,000 CAD + GST, with the final
            quote determined by the design, content, functionality,
            integrations, and development requirements.
          </p>
          <p>
            I don&rsquo;t use a fixed per-page pricing model. Each project is
            scoped around what your business needs, with the agreed deliverables
            and price confirmed before development begins.
          </p>
        </div>
        <div className={styles.rows}>
          {pricingRows.map((r) => (
            <div key={r.title} className={`${styles.row} reveal-up`}>
              <h3 className={styles.rowTitle}>{r.title}</h3>
              <p className={styles.rowBody}>{r.body}</p>
            </div>
          ))}
        </div>
        <Link href="/pricing" className={styles.btnDark}>
          <span>View All Pricing</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <ServicesFaq
        items={faqs}
        eyebrow="FAQs"
        title={
          <>
            Website Design &amp; Development <em>FAQs</em>
          </>
        }
      />

      {/* === DISCUSS YOUR PROJECT — navy === */}
      <section className={styles.navy} data-nav-theme="dark">
        <div className={styles.split}>
          <h2 className={`${styles.bigH2} reveal-up`}>
            Discuss Your{" "}
            <span className={styles.accent}>Website Project</span>
          </h2>
          <div className={`${styles.prose} reveal-up`}>
            <p className={styles.lead}>
              Whether you need a new business website, a complete redesign, or
              improvements to your existing site, I can help determine the most
              appropriate development approach.
            </p>
            <p>
              Tell me about your business, current website, and what
              you&rsquo;re looking to achieve. I&rsquo;ll review the
              requirements and outline a practical scope for the project.
            </p>
            <div className={styles.btnRow}>
              <Link href="/contact" className={styles.btnLight}>
                <span>Request a Website Quote</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                <span>Book a Consultation</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className={styles.meta}>
              Based in Calgary · Serving Canada &amp; Internationally · Website
              Projects From $6,000 + GST
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <RevealOnScroll />
    </main>
  );
}
