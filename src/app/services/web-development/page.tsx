import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
// Shared service page template (new brand)
import t from "../svc.module.css";

export const metadata: Metadata = {
  title: "Web Development & Website Design in Calgary | Scale SEO",
  description:
    "Custom website design and development in Calgary for established businesses across Canada. Responsive, SEO-ready websites built for performance, search visibility and enquiries. Projects from $6,000 + GST.",
  alternates: { canonical: "/services/web-development" },
};

const included: { title: string; body: string }[] = [
  {
    title: "Website Design & User Experience",
    body: "Clean, responsive layouts that communicate your services clearly and make it easy for prospective customers to find relevant information.",
  },
  {
    title: "Service Pages & Website Architecture",
    body: "Dedicated pages for important services, industries, and customer needs, organized into a logical website structure.",
  },
  {
    title: "Technical SEO Foundations",
    body: "Crawlable navigation, metadata, canonical URLs, redirects, structured data, mobile usability, and other technical elements appropriate to the website.",
  },
  {
    title: "Content Management & Ongoing Development",
    body: "Websites built to accommodate new pages, updated services, supporting resources, and future improvements without unnecessary redevelopment.",
  },
  {
    title: "Conversion-Focused Improvements",
    body: "Clear calls to action, contact pathways, service information, and relevant trust signals that help visitors evaluate your business and make an enquiry.",
  },
];

const steps: { title: string; body: string[] }[] = [
  {
    title: "01 — Review & Planning",
    body: [
      "We discuss your business, services, target customers, existing website, and what the new site needs to accomplish.",
      "I review the required pages, functionality, content, and technical considerations before defining the project scope.",
    ],
  },
  {
    title: "02 — Design & Development",
    body: [
      "I build the website around the agreed structure, developing the layouts, navigation, service pages, and technical foundations.",
      "The emphasis is on a clear, functional website that accurately represents your business.",
    ],
  },
  {
    title: "03 — Review & Launch",
    body: [
      "Before launch, I review the website’s mobile layouts, navigation, page content, key functionality, redirects where required, and search accessibility.",
      "The website is then prepared for launch with the agreed tracking and search setup.",
    ],
  },
  {
    title: "04 — Ongoing Improvements",
    body: [
      "After launch, you can manage the website yourself or continue working with Scale SEO.",
      "Ongoing SEO campaigns can include additional development, new service pages, technical improvements, and content updates based on search performance.",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Can you improve my existing website instead of rebuilding it?",
    a: [
      "Yes. Many of my clients already have established websites.",
      "I regularly develop new pages, improve existing content, update website structure, and implement technical changes as part of ongoing SEO campaigns.",
      "If the existing platform is suitable, a complete rebuild may not be necessary.",
    ],
  },
  {
    q: "Which website platforms do you work with?",
    a: [
      "My client work includes Webflow and other content management systems, along with websites that require custom code and technical implementation.",
      "The appropriate platform depends on your website’s requirements, editing needs, and future development plans.",
    ],
  },
  {
    q: "Is SEO included with a new website?",
    a: [
      "New website projects include foundational technical and on-page SEO considerations, such as website structure, metadata, crawlable navigation, and search accessibility.",
      "Ongoing keyword research, content expansion, local SEO, and performance optimization are available through a separate monthly SEO engagement.",
    ],
    link: { href: "/services/seo", label: "Explore Monthly SEO Services" },
  },
  {
    q: "Will I own my website?",
    a: ["Yes. Your website, content, accounts, and digital assets remain under your ownership."],
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: ["Yes. Scale SEO is based in Calgary and works with businesses across Canada, as well as international clients."],
  },
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
        <div className={t.band} style={{ background: "#031B36" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/web-development-hero.webp"
            alt="Laptop showing a responsive business website built by Scale SEO"
            style={{ objectFit: "contain" }}
          />
        </div>
      </header>

      {/* === INTRO === */}
      <section className={t.split} style={{ padding: 0 }}>
        <div className={t.splitLeft}>
          <p className={t.lead}>
            <strong>
              Custom websites and ongoing development for businesses that want
              more than a good-looking website.
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
              Scale SEO designs, builds, and improves websites for professional
              service and B2B businesses in Calgary and across Canada.
            </p>
            <p>
              I handle website development alongside SEO, so the structure,
              content, and technical foundations support how your business wants
              to grow. Whether you need a new website or improvements to an
              existing one, the work is managed directly by me.
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
          <h2 className={t.h2}>Website Development That Goes Beyond the Initial Build</h2>
          <p className={t.lead}>Most of my website development work falls into two categories.</p>
        </div>
        <div className={t.two}>
          <div className={`${t.panel} ${t.panelGrey}`}>
            <h3 className={t.h3}>New Website Design &amp; Development</h3>
            <div className={t.body}>
              <p>
                For businesses starting from scratch or replacing an outdated
                website, I develop complete websites around their services,
                customers, and business goals.
              </p>
              <p>
                This includes planning the site structure, designing responsive
                layouts, developing individual pages, organizing content, and
                implementing the technical foundations needed for search engines
                to access and understand the website.
              </p>
              <p>
                The result is a professional website designed to support future
                content, services, and SEO improvements.
              </p>
            </div>
          </div>
          <div className={`${t.panel} ${t.panelNavy}`}>
            <h3 className={t.h3}>Existing Website Development &amp; Improvements</h3>
            <div className={t.body}>
              <p>Not every business needs a new website.</p>
              <p>
                Much of my ongoing work involves developing and improving
                websites that clients already own.
              </p>
              <p>
                This can include creating new service pages, restructuring
                navigation, expanding industry content, improving internal
                linking, updating page layouts, implementing structured data, and
                resolving technical issues.
              </p>
              <p>
                When development is part of an ongoing SEO campaign, these
                changes are prioritized around search performance and commercial
                opportunities rather than a fixed list of monthly website
                updates.
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
            The scope depends on whether we&rsquo;re building a new website or
            improving an existing one.
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
        {[
          {
            href: "/results/jensen-cpa",
            img: "/images/jensen-cpa-cover.webp",
            alt: "Jensen CPA team in Calgary, website redevelopment client of Scale SEO",
            tags: ["Website Redesign", "SEO"],
            title: "Jensen CPA. Website redevelopment for a Calgary accounting firm.",
          },
          {
            href: "/results/empire-accountants",
            img: "/images/empire-accountants-cover.webp",
            alt: "Empire Accountants team in their Brisbane office, ongoing SEO and website development client of Scale SEO",
            tags: ["Website Development", "SEO"],
            title: "Empire Accountants. Ongoing website development for a Brisbane accounting firm.",
          },
          {
            href: "/results/msv-plumbing-services",
            img: "/images/msv-plumbing-cover.webp",
            alt: "Matthew Main of MSV Plumbing Services with his work ute in Brisbane, website and SEO client of Scale SEO",
            tags: ["Website Design", "Local SEO"],
            title: "MSV Plumbing Services. A 100-page website for a Brisbane plumbing business.",
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
              <span className={t.coverLink}>View Project</span>
            </div>
          </Link>
        ))}
      </section>

      {/* === CLIENT PROJECTS — grey, aside + boxes === */}
      <section className={t.grey}>
        <div className={t.asideGrid}>
          <div className={t.aside}>
            <h2 className={t.h2}>Website Development From Real Client Projects</h2>
            <p className={t.body}>
              My approach to website development comes from working directly on
              client websites, not simply producing designs for a portfolio.
            </p>
          </div>
          <div className={t.cardGrid}>
            <article className={t.card}>
              <span className={t.cardLabel}>Jensen CPA &mdash; Calgary, Alberta</span>
              <h3 className={t.h3}>Website redevelopment for an established accounting firm.</h3>
              <div className={`${t.body} ${t.dim}`} style={{ fontSize: 16 }}>
                <p>
                  Jensen CPA needed a website that better represented its
                  corporate tax, bookkeeping, personal tax, and fractional CFO
                  services.
                </p>
                <p>
                  I redesigned and expanded the website with dedicated service
                  pages, improved navigation, supporting accounting resources, and
                  technical SEO foundations.
                </p>
                <p>
                  The redevelopment formed part of a wider SEO campaign that
                  increased average daily Google Search impressions by 227% and
                  organic clicks by 92% over the first four months.
                </p>
              </div>
              <Link href="/results/jensen-cpa" className={t.inlineLink} style={{ marginTop: "auto", fontSize: 16 }}>
                View Jensen CPA Case Study &rarr;
              </Link>
            </article>
            <article className={t.card}>
              <span className={t.cardLabel}>MSV Plumbing Services &mdash; Brisbane, Australia</span>
              <h3 className={t.h3}>A complete website built for a growing local plumbing business.</h3>
              <div className={`${t.body} ${t.dim}`} style={{ fontSize: 16 }}>
                <p>
                  MSV Plumbing Services needed a professional website capable of
                  supporting customer acquisition beyond word-of-mouth referrals.
                </p>
                <p>
                  I designed and developed a website of approximately 100 pages,
                  organized around core plumbing services, Brisbane service areas,
                  and supporting resources.
                </p>
                <p>
                  The project combined website development, local SEO, and ongoing
                  content improvements. Within approximately six months, the
                  business was receiving weekly customer calls for services
                  including blocked drains and hot water systems.
                </p>
              </div>
              <Link href="/results/msv-plumbing-services" className={t.inlineLink} style={{ marginTop: "auto", fontSize: 16 }}>
                View MSV Plumbing Services Case Study &rarr;
              </Link>
            </article>
            <article className={`${t.card} ${t.cardWide}`}>
              <span className={t.cardLabel}>Ongoing Development</span>
              <h3 className={t.h3}>Development as Part of Ongoing SEO</h3>
              <p>Website development doesn&rsquo;t always involve a full redesign.</p>
              <p>
                For Empire Accountants, I&rsquo;ve expanded and improved existing
                accounting service pages, industry content, internal links, and
                technical website elements.
              </p>
              <p>
                For Kinsmen Consulting, I&rsquo;ve developed dedicated landing
                pages targeting higher-value concrete services, including sport
                court construction in Calgary.
              </p>
              <p>
                These projects demonstrate how ongoing development can improve an
                existing website without requiring a complete rebuild.
              </p>
              <Link href="/results" className={`${t.box} ${t.boxBlue}`}>
                <Corner />
                <span>Explore All Client Results &rarr;</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* === PROCESS — heading left, step rows right === */}
      <section className={t.rowsSplit} style={{ padding: 0, borderTop: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>How a Website Project Works</h2>
        </div>
        <div className={t.rowsList}>
          {steps.map((s) => (
            <div key={s.title} className={t.rowsItem}>
              <h3 className={t.h3}>{s.title}</h3>
              <div className={t.body}>
                {s.body.map((p) => (
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
          <p className={t.lead}><strong>New websites start from $6,000 CAD + GST.</strong></p>
        </div>
        <div className={t.pricingBody}>
          <div className={t.body}>
            <p>
              Projects are quoted individually based on the website&rsquo;s size,
              design requirements, content, functionality, and technical
              complexity.
            </p>
            <p>
              There are no fixed website packages. I&rsquo;ll review what your
              business needs and provide a clear scope before work begins.
            </p>
            <p>Website hosting and ongoing SEO are available separately where appropriate.</p>
          </div>
          <p className={t.pricingLead}>Your website, content, accounts, and data remain yours.</p>
          <Link href="/pricing" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>View Website &amp; SEO Pricing &rarr;</span>
          </Link>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Work Directly With Your Website Developer"
        lead="I'm Corbin Jensen, founder of Scale SEO. I work directly on client websites, from initial development through ongoing technical improvements and service-page expansion. If you're planning a new website or need to improve an existing one, I can review your requirements and recommend a practical approach."
        cta={{ href: "/contact", label: "Book a Strategy Call →" }}
        note={
          <>
            More about <Link href="/corbin-jensen">Corbin Jensen &rarr;</Link>
          </>
        }
      />
    </main>
  );
}
