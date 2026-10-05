import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";

// Hero from the industries hub, sections from the shared /services hub
// system; styles below are only the pieces specific to this page.
import hub from "../services/page.module.css";
import ind from "../industries/page.module.css";
import styles from "./page.module.css";
import Contact from "../components/ContactCta";

export const metadata: Metadata = {
  title: "About Scale SEO — Corbin Jensen",
  description:
    "Scale SEO provides precise, technical search engine optimization for corporate entities, accounting firms, and professional service practices across Canada. Run directly by lead specialist Corbin Jensen.",
  alternates: { canonical: "/about" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const pad = (i: number) => String(i + 1).padStart(2, "0");

/* === Content ============================================================ */

const services = [
  {
    title: "Search Engine Optimization",
    body: [
      "Ongoing SEO campaigns combine technical improvements, keyword and competitor research, on-page optimization, content strategy, local SEO, internal linking, website architecture, and performance tracking.",
      "The priorities change from month to month based on the website, competition, search data, and opportunities identified during the campaign.",
    ],
    link: { href: "/services/seo", label: "Explore SEO Services" },
  },
  {
    title: "SEO Audits",
    body: [
      "Standalone SEO audits are available for businesses that need a clearer understanding of their website before committing to ongoing SEO.",
      "Audits can identify technical, on-page, content, architecture, and search visibility issues before turning those findings into a prioritized roadmap.",
    ],
    link: { href: "/services/seo-audits", label: "Explore SEO Audits" },
  },
  {
    title: "Web Development",
    body: [
      "SEO recommendations often require changes to the website itself.",
      "Scale SEO provides website development and improvement work alongside search strategy, allowing many technical, structural, content, and conversion changes to be implemented directly rather than handed off to another provider.",
    ],
    link: { href: "/services/web-development", label: "Explore Web Development" },
  },
  {
    title: "Google Ads Management",
    body: [
      "For businesses where paid search makes commercial sense, Google Ads can complement organic SEO by creating visibility for important searches while longer-term organic rankings develop.",
      "Campaigns are approached with the same focus on search intent, commercially relevant services, and measurable enquiries.",
    ],
    link: {
      href: "/services/google-ads-management",
      label: "Explore Google Ads Management",
    },
  },
  {
    title: "AI Search Optimization",
    body: [
      "Search behaviour is expanding beyond traditional Google results into AI Overviews, ChatGPT, and other AI-assisted discovery experiences.",
      "Scale SEO helps businesses strengthen the underlying content, structure, entities, and search foundations that can improve how clearly their expertise is understood across traditional and AI-driven search environments.",
    ],
    link: { href: "/services/geo", label: "Explore AI Search Optimization" },
  },
];

const approach = [
  {
    title: "Understand the Business",
    body: [
      "Before deciding what to optimize, I need to understand what the business actually wants to grow.",
      "That includes its services, ideal customers, geographic markets, competitive advantages, current website, and the commercial value behind different types of enquiries.",
    ],
  },
  {
    title: "Understand Existing Search Visibility",
    body: [
      "Next, I look at how the website currently performs.",
      "Depending on the campaign, that can involve Google Search Console data, existing rankings, technical health, indexed pages, competitors, content, local visibility, internal linking, and website architecture.",
    ],
  },
  {
    title: "Prioritize the Right Opportunities",
    body: [
      "Not every SEO issue deserves the same amount of attention.",
      "I prioritize work based on its potential impact, the importance of the affected service or page, current search visibility, competition, and how closely the opportunity connects to the business’s actual objectives.",
    ],
  },
  {
    title: "Implement the Work",
    body: [
      "Depending on the website and campaign, I can work directly on technical fixes, page improvements, content, internal linking, metadata, schema, site structure, local SEO, and other search-related changes.",
    ],
  },
  {
    title: "Measure, Learn & Improve",
    body: [
      "SEO is iterative.",
      "Search Console data, rankings, organic landing pages, local visibility, enquiries, and other available performance data help determine what’s improving and where the next opportunities are.",
    ],
  },
];

const reasons = [
  {
    title: "Direct Specialist Access",
    body: [
      "There is no handoff after the initial sales conversation.",
      "Clients communicate directly with me throughout the engagement, and I remain responsible for the strategy and execution.",
    ],
  },
  {
    title: "No Outsourced SEO",
    body: [
      "Core SEO strategy and implementation aren’t passed to anonymous contractors or a rotating team.",
      "When specialist input is required outside my scope, that is communicated clearly rather than hidden behind the Scale SEO name.",
    ],
  },
  {
    title: "SEO & Website Implementation",
    body: [
      "I don’t want useful recommendations sitting in a PDF for six months.",
      "Where access and platform capabilities allow, I can implement many of the technical, structural, content, and on-page changes identified during a campaign directly on the website.",
    ],
  },
  {
    title: "Month-to-Month Engagements",
    body: [
      "Ongoing SEO is offered month-to-month rather than through long-term lock-in contracts.",
      "Clients should continue working with Scale SEO because the engagement remains useful—not because they’re contractually stuck in it.",
    ],
  },
  {
    title: "Selective Client Conflicts",
    body: [
      "In markets where I already represent a business, I consider whether taking on a directly competing client would create a meaningful conflict.",
      "This is particularly important within my accounting-firm work, where ongoing SEO engagements are limited to one directly competing firm per primary market.",
    ],
  },
];

const glance: { label: string; value: React.ReactNode }[] = [
  { label: "Business", value: "Scale SEO" },
  { label: "Founded", value: "2025" },
  { label: "Founder", value: "Corbin Jensen" },
  { label: "Based in", value: "Calgary, Alberta, Canada" },
  { label: "Business model", value: "Independent, founder-led SEO practice" },
  { label: "Primary focus", value: "Professional services & B2B" },
  { label: "Key industry experience", value: "Accounting & advisory firms" },
  {
    label: "Services",
    value:
      "SEO, SEO audits, web development, Google Ads management & AI search optimization",
  },
  { label: "Service area", value: "Canada & international/remote clients" },
  { label: "Ongoing SEO engagements", value: "Month-to-month" },
  {
    label: "Founder profile",
    value: (
      <Link href="/corbin-jensen" className={styles.glanceLink}>
        Corbin Jensen <span className={ind.arrow}>→</span>
      </Link>
    ),
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://scaleseo.co/about#webpage",
      url: "https://scaleseo.co/about",
      name: "About Scale SEO",
      description:
        "Learn about Scale SEO, an independent SEO practice based in Calgary, Alberta, helping professional service and B2B businesses improve their organic search visibility across Canada and internationally.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": "https://scaleseo.co/#organization" },
      mainEntity: { "@id": "https://scaleseo.co/#organization" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": "https://scaleseo.co/about#breadcrumb" },
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://scaleseo.co/about",
        },
      ],
    },
  ],
};

/* === Page =============================================================== */

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* === HERO — dark, full-width left-aligned === */}
      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        breadcrumbSchema={false}
        title={
          <>
            About <span className="title-block">Scale SEO</span>
          </>
        }
        icon="about"
        actions={
          <>
            <Link href="/services/seo">
              <span>Explore SEO Services</span>
              <span>→</span>
            </Link>
            <Link href="/corbin-jensen">
              <span>Meet Corbin Jensen</span>
              <span>→</span>
            </Link>
          </>
        }
      >
        <p>
          Scale SEO is an independent SEO practice based in Calgary, Alberta,
          providing SEO services for professional service and B2B businesses
          across Canada.
        </p>
      </PageHero>

      {/* === THE BUSINESS — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${styles.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                The Business
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                An Independent SEO Practice Based in Calgary
              </h2>
            </div>
            <div className={`${styles.yearMark} reveal-up`}>
              <span className={styles.yearValue}>2025</span>
              <span className={styles.yearLabel}>Established</span>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Scale SEO was established in 2025 by SEO specialist Corbin
              Jensen and is based in Calgary, Alberta.
            </p>
            <p>
              The practice provides ongoing SEO campaign management, technical
              SEO, SEO audits, web development, Google Ads management, and AI
              search optimization, with a primary focus on professional service
              and B2B businesses.
            </p>
            <p>
              Scale SEO primarily serves businesses across Canada while
              continuing to work with clients internationally. SEO campaigns
              are managed directly by Corbin, from strategy and competitor
              research through to technical improvements, content planning,
              implementation, and performance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* === SERVICES — light blue, editorial rows === */}
      <section className={`${hub.section} ${styles.blue}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up`}>Services</div>
              <h2 className={`${hub.h2} ${styles.bigH2} reveal-up`}>What Scale SEO Does</h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                SEO is at the core of Scale SEO, with supporting services
                available when improving search performance requires work
                beyond rankings and content.
              </p>
            </div>
          </div>

          <div className={`${styles.rows} ${styles.rowsDark}`}>
            {services.map((s, i) => (
              <article key={s.title} className={`${styles.row} ${styles.rowDark} reveal-up`}>
                <div className={styles.rowHead}>
                  <span className={styles.rowNum}>{pad(i)}</span>
                  <h3 className={styles.rowTitle}>{s.title}</h3>
                </div>
                <div className={styles.rowBody}>
                  {s.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <Link href={s.link.href} className={styles.rowLinkDark}>
                    {s.link.label} <span className={ind.arrow}>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === WHO I WORK WITH — light === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                Who I Work With
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                Focused on Professional Services &amp; B2B
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={ind.leadInk}>
              Scale SEO primarily works with businesses where expertise, trust,
              and high-value client relationships play an important role in the
              buying decision.
            </p>
            <p>
              These businesses often have a different search opportunity from
              high-volume ecommerce or consumer websites.
            </p>
            <p>
              A relatively small number of qualified searches can represent
              significant commercial value when one new client may lead to a
              long-term professional relationship.
            </p>
            <p>
              That makes understanding{" "}
              <strong className={styles.strongInk}>
                search intent and client value
              </strong>{" "}
              particularly important.
            </p>
          </div>
        </div>

        <div className={`${hub.inner} ${styles.audienceGrid}`}>
          <article className={`${hub.lightCard} ${styles.audienceCard} reveal-up`}>
            <span className="index">01</span>
            <h3 className={styles.audienceTitle}>Accounting Firms</h3>
            <div className={hub.cardBody}>
              <p>Accounting is a key industry focus for Scale SEO.</p>
              <p>
                I work with accounting and advisory businesses on service-page
                SEO, technical improvements, local search, accounting content,
                internal linking, structured data, and broader organic search
                strategy.
              </p>
              <p>
                This hands-on industry experience has helped develop a deeper
                understanding of how services such as corporate tax,
                bookkeeping, business advisory, and fractional CFO support
                should be represented and connected within an accounting
                website.
              </p>
            </div>
            <Link href="/industries/accounting-firms" className={hub.pillDark}>
              <span>Explore SEO for Accounting Firms</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </article>
          <article className={`${hub.lightCard} ${styles.audienceCard} reveal-up`}>
            <span className="index">02</span>
            <h3 className={styles.audienceTitle}>
              Professional Service &amp; B2B Businesses
            </h3>
            <div className={hub.cardBody}>
              <p>
                Scale SEO also works with other professional service and B2B
                businesses where potential customers use search to research
                providers, compare expertise, and understand complex services
                before making contact.
              </p>
            </div>
            <Link href="/industries" className={hub.pillDark}>
              <span>Explore Industries</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </article>
        </div>
      </section>

      {/* === THE APPROACH — dark, vertical timeline === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={hub.inner}>
          <div className={styles.centerHead}>
            <div className={`section-label reveal-up ${ind.labelOnDark} ${styles.labelCenter}`}>
              The Approach
            </div>
            <h2 className={`${hub.h2} ${styles.h2Center} reveal-up`}>
              How Scale SEO Approaches Search
            </h2>
            <div className={`${styles.centerBody} reveal-up`}>
              <p>
                SEO works better when the strategy starts with the business
                rather than a generic checklist.
              </p>
              <p>
                I use a straightforward process to determine where the strongest
                opportunities exist and what should happen next.
              </p>
            </div>
          </div>

          <ol className={styles.timeline}>
            {approach.map((step, i) => (
              <li key={step.title} className={`${styles.step} reveal-up`}>
                <span className={styles.stepDot} aria-hidden="true" />
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>{pad(i)}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepBody}>
                    {step.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === FOUNDER — light, portrait + bio === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${styles.founder}`}>
          <div className={`${styles.portrait} reveal-up`}>
            <img
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, founder of Scale SEO"
              className={styles.portraitImg}
              loading="lazy"
            />
            <div className={styles.portraitCaption}>
              <span>Corbin Jensen</span>
              <span>Calgary, Alberta</span>
            </div>
          </div>
          <div className={`${styles.founderBody} reveal-up`}>
            <div className={`section-label ${styles.label}`}>Founder</div>
            <h2 className={hub.h2}>Meet Corbin Jensen</h2>
            <h3 className={styles.founderRole}>Founder &amp; SEO Specialist</h3>
            <div className={styles.prose}>
              <p>
                Scale SEO is founded and operated by{" "}
                <strong className={styles.strongInk}>Corbin Jensen</strong>, an
                SEO specialist based in Calgary, Alberta.
              </p>
              <p>
                Corbin works directly across strategy and implementation,
                including technical SEO, on-page optimization, keyword research,
                content strategy, local SEO, website architecture, structured
                data, analytics, and website development.
              </p>
              <p>
                Before establishing Scale SEO in Canada, Corbin worked with
                businesses in Australia, providing practical experience across
                different markets, industries, websites, and search
                environments.
              </p>
              <p>
                Today, he manages a deliberately small client roster so he can
                remain directly involved in the work behind each campaign.
              </p>
            </div>
            <Link href="/corbin-jensen" className={hub.pillDark}>
              <span>Read Corbin Jensen&rsquo;s Full Bio</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPERIENCE — dark, copy + result card === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitBody} reveal-up`}>
            <div className={`section-label ${ind.labelOnDark}`}>Experience</div>
            <h2 className={`${hub.h2} ${styles.h2OnDark}`}>
              Built From Hands-On SEO Work
            </h2>
            <p className={hub.lead}>
              Scale SEO&rsquo;s approach has developed through working directly
              on real business websites rather than separating strategy from
              implementation.
            </p>
            <p>
              That work has included accounting firms, professional service
              businesses, local service companies, and other B2B organizations
              across Canada and Australia.
            </p>
            <p>
              Projects have involved everything from rebuilding service-page
              architecture and resolving technical SEO issues to developing
              content strategies, improving local visibility, implementing
              structured data, and rebuilding websites around organic search
              opportunities.
            </p>
            <p>
              The results of that work include measurable improvements in search
              visibility for client websites.
            </p>
          </div>

          <article className={`${styles.result} reveal-up`}>
            <h3 className={styles.resultTitle}>Accounting &amp; Advisory SEO</h3>
            <div className={styles.resultMetric}>
              <span className={styles.resultValue}>Page 5 → Page 1</span>
              <span className={styles.resultLabel}>
                Target keyword improvement during a six-month SEO engagement.
              </span>
            </div>
            <div className={styles.resultMetric}>
              <span className={styles.resultValue}>+125%</span>
              <span className={styles.resultLabel}>
                Increase in Google Search impressions.
              </span>
            </div>
            <p className={styles.resultBody}>
              The campaign combined technical improvements, stronger page
              architecture, on-page optimization, content, and internal linking
              around commercially relevant searches.
            </p>
            <Link href="/results" className={hub.pillLime}>
              <span>View SEO Results &amp; Case Studies</span>
              <span className={hub.arrow}>→</span>
            </Link>
          </article>
        </div>
      </section>

      {/* === WHY SCALE SEO — light, editorial rows === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={hub.inner}>
          <div className={hub.head}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                Why Scale SEO
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                Why Scale SEO Is Kept Small
              </h2>
            </div>
            <div className={`${hub.headBody} reveal-up`}>
              <p>
                Scale SEO isn&rsquo;t being built around having the largest
                possible client roster.
              </p>
              <p>
                Keeping the business small allows me to remain directly involved
                in the work and understand the websites I&rsquo;m responsible
                for.
              </p>
            </div>
          </div>

          <div className={styles.rows}>
            {reasons.map((r, i) => (
              <article key={r.title} className={`${styles.row} reveal-up`}>
                <div className={styles.rowHead}>
                  <span className={styles.rowNum}>{pad(i)}</span>
                  <h3 className={styles.rowTitle}>{r.title}</h3>
                </div>
                <div className={styles.rowBody}>
                  {r.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === LOCATION — dark === */}
      <section className={`${hub.section} ${hub.dark}`} data-nav-theme="dark">
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={hub.splitAside}>
            <div>
              <div className={`section-label reveal-up ${ind.labelOnDark}`}>
                Location
              </div>
              <h2 className={`${hub.h2} reveal-up`}>
                Based in Calgary, <em>Working Across Canada</em>
              </h2>
            </div>
          </div>
          <div className={`${hub.splitBody} reveal-up`}>
            <p className={hub.lead}>
              Scale SEO is based in{" "}
              <span className={styles.limeText}>Calgary, Alberta, Canada</span>.
            </p>
            <p>
              Calgary is my home market and an important focus for the business,
              but clients don&rsquo;t need to be located in Calgary to work with
              me.
            </p>
            <p>
              SEO research, implementation, reporting, strategy calls, and most
              website work can be managed remotely, allowing Scale SEO to work
              with businesses throughout Canada and internationally.
            </p>
            <p>
              For local SEO campaigns, the strategy is built around the market{" "}
              <strong className={styles.strongOnDark}>your business serves</strong>,
              not simply where Scale SEO happens to be located.
            </p>
          </div>
        </div>
      </section>

      {/* === AT A GLANCE — light, fact sheet === */}
      <section className={`${hub.section} ${hub.light}`}>
        <div className={`${hub.inner} ${hub.split}`}>
          <div className={`${hub.splitAside} ${styles.sticky}`}>
            <div>
              <div className={`section-label reveal-up ${styles.label}`}>
                Company Information
              </div>
              <h2 className={`${hub.h2} reveal-up`}>Scale SEO at a Glance</h2>
            </div>
          </div>
          <dl className={`${styles.glance} reveal-up`}>
            {glance.map((g) => (
              <div key={g.label} className={styles.glanceRow}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Contact />

      <RevealOnScroll />
    </main>
  );
}
