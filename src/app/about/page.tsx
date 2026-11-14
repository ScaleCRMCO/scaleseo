import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import t from "../services/svc.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "About Scale SEO | Accounting SEO Specialists" },
  description:
    "Learn about Scale SEO, a Calgary-based SEO consultancy specializing in accounting firms, CPA practices, and financial services across Canada and Australia.",
  alternates: { canonical: "/about" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const principles = [
  {
    title: "Industry Understanding",
    body: "We take the time to understand each firm\u2019s services, ideal clients, and competitive market before developing a strategy.",
  },
  {
    title: "Technical Expertise",
    body: "From website architecture and technical SEO to content and Google Ads, our work goes beyond recommendations to implementation.",
  },
  {
    title: "Clear Communication",
    body: "Straightforward reporting, defined priorities, and open conversations about performance and opportunities.",
  },
  {
    title: "Long-Term Thinking",
    body: "We focus on sustainable search visibility and lasting client relationships, with flexible month-to-month engagements.",
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://scaleseo.co/about#webpage",
      url: "https://scaleseo.co/about",
      name: "About Scale SEO",
      description:
        "Learn about Scale SEO, a Calgary-based SEO consultancy specializing in accounting firms, CPA practices, and financial services across Canada and Australia.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": "https://scaleseo.co/#organization" },
      mainEntity: { "@id": "https://scaleseo.co/#organization" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": "https://scaleseo.co/about#breadcrumb" },
      primaryImageOfPage: { "@id": "https://scaleseo.co/about#primaryimage" },
      image: [
        { "@id": "https://scaleseo.co/about#primaryimage" },
        {
          "@type": "ImageObject",
          url: "https://scaleseo.co/images/corbin-portrait.webp",
          contentUrl: "https://scaleseo.co/images/corbin-portrait.webp",
          width: 2143,
          height: 2560,
          caption: "Corbin Jensen, founder of Scale SEO",
        },
      ],
      inLanguage: "en-CA",
    },
    {
      "@type": "ImageObject",
      "@id": "https://scaleseo.co/about#primaryimage",
      url: "https://scaleseo.co/images/calgary-skyline.webp",
      contentUrl: "https://scaleseo.co/images/calgary-skyline.webp",
      width: 1200,
      height: 900,
      caption: "Calgary skyline, home of Scale SEO",
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
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* === HERO — big title left, B&W portrait with logo mark right === */}
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={t.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} schema={false} />
          </div>
          <h1 className={styles.heroTitle}>About Scale SEO</h1>
          <p className={styles.heroLead}>
            Independent SEO consultancy. Specialized in accounting and
            professional services.
          </p>
        </div>
        {/* Large logo mark: navy on white; its lower part continues in the
            navy band below in light blue (matching copy, same position) */}
        <div className={`${styles.bigMark} ${styles.bigMarkTop}`} aria-hidden="true">
          <svg viewBox="0 0 366 366" fill="currentColor" aria-hidden="true">
            <path d="M182.5 0C81.7 0 0 81.7 0 182.5S81.7 365 182.5 365 365 283.3 365 182.5 283.3 0 182.5 0zm0 328.4c-80.5 0-146-65.5-146-145.9s65.5-146 146-146 145.9 65.5 145.9 146-65.4 145.9-145.9 145.9z" />
            <path d="M205.6 157.9v104.2h37.9V120H101.4v37.9z" />
          </svg>
        </div>
      </header>

      {/* === INTRO + CALGARY BAND === */}
      <section className={styles.introRow}>
        <div className={`${styles.bigMark} ${styles.bigMarkBottom}`} aria-hidden="true">
          <svg viewBox="0 0 366 366" fill="currentColor" aria-hidden="true">
            <path d="M182.5 0C81.7 0 0 81.7 0 182.5S81.7 365 182.5 365 365 283.3 365 182.5 283.3 0 182.5 0zm0 328.4c-80.5 0-146-65.5-146-145.9s65.5-146 146-146 145.9 65.5 145.9 146-65.4 145.9-145.9 145.9z" />
            <path d="M205.6 157.9v104.2h37.9V120H101.4v37.9z" />
          </svg>
        </div>
        <div className={styles.introText}>
          <p>
            Founded in 2025 in Calgary, Alberta, Scale SEO helps accounting firms
            improve their visibility on Google and attract more qualified
            business enquiries.
          </p>
          <p style={{ marginTop: "0.7em" }}>
            We combine search engine optimization, Google Ads, and website
            development to help CPA firms, tax accountants, bookkeeping
            practices, and financial advisory businesses grow across Canada and
            Australia.
          </p>
        </div>
      </section>
      <div className={styles.band}>
        <Image
          src="/images/calgary-skyline-bw.webp"
          alt="Black and white panorama of the downtown Calgary skyline above the Bow River valley, home of Scale SEO"
          fill
          sizes="100vw"
        />
      </div>

      {/* === AN INDEPENDENT APPROACH — heading, big stat, text bottom-right === */}
      <section className={styles.approach}>
        <h2 className={`${t.h2} ${styles.approachTitle}`}>A More Focused Approach to Search</h2>
        <div className={styles.statBlock}>
          <span className={t.stat}>2025</span>
          <p className={t.statLabel}>Founded in Calgary, Alberta</p>
        </div>
        <div className={styles.approachBody}>
          <p className={t.lead}>
            Scale SEO was established with a straightforward idea: effective SEO
            starts with understanding the business behind the website.
          </p>
          <div className={t.body}>
            <p>
              Today, our primary focus is the accounting industry. Through
              ongoing work with firms in Canada and Australia, we&rsquo;ve
              developed practical experience in how accounting services are
              searched for, evaluated, and presented online.
            </p>
            <p>
              From corporate tax and bookkeeping to fractional CFO and business
              advisory services, we build strategies around the work our clients
              want more of.
            </p>
          </div>
          <Link href="/services" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Explore Our Services</span>
          </Link>
        </div>
      </section>

      {/* === EXPERIENCE — blue grid: heading | text, then markets/industries rows === */}
      <section className={styles.exp}>
        <div className={styles.expHead}>
          <h2 className={styles.expTitle}>Experience Across Two Markets</h2>
          <span className={styles.expNote}>Canada &amp; Australia</span>
        </div>
        <div className={styles.expText}>
          <p>
            Accounting firms operate in competitive markets where expertise,
            reputation, and trust influence how clients choose a provider.
          </p>
          <p>
            Our experience with{" "}
            <Link href="/results/jensen-cpa" className={styles.inlineLink}>Jensen CPA</Link> in Calgary and{" "}
            <Link href="/results/empire-accountants" className={styles.inlineLink}>Empire Accountants</Link> in
            Brisbane has shaped our understanding of the industry across two
            distinct markets.
          </p>
          <p>
            While the terminology, regulations, and search behaviour differ, our
            approach remains consistent: understand the firm&rsquo;s priorities,
            improve its search presence, and measure the results.
          </p>
          <Link href="/results" className={styles.expLink}>
            <Corner />
            <span>View Our Client Results</span>
          </Link>
        </div>

        <h3 className={styles.expGroup}>Markets</h3>
        <ul className={styles.expRows}>
          {["Canada", "Australia"].map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h3 className={styles.expGroup}>Specialties</h3>
        <ul className={styles.expRows}>
          {["CPA & Accounting Firms", "Corporate Tax & Advisory", "Bookkeeping & Cloud Accounting", "Fractional CFO Services"].map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      {/* === MEET THE FOUNDER — full navy section, profile left, text right === */}
      <section className={styles.founder}>
        <div className={styles.founderProfile}>
          <h2 className={t.h2}>Meet the Founder</h2>
          <div className={styles.founderPhoto}>
            <Image
              src="/images/corbin-portrait.webp"
              alt="Corbin Jensen, founder and SEO specialist at Scale SEO"
              fill
              sizes="240px"
              loading="eager"
            />
          </div>
          <p className={styles.founderName}>
            Corbin Jensen
            <br />
            <span>Founder &amp; SEO Specialist</span>
          </p>
          <a
            href="https://www.linkedin.com/in/corbin-jensen-seo/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            Connect in
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.8 13 12.8 14.3V19h-3V9.5h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z" />
            </svg>
          </a>
        </div>
        <div className={styles.founderText}>
          <p className={styles.founderLead}>
            Scale SEO was founded by Corbin Jensen, a Canadian SEO specialist
            with experience developing search strategies and websites for
            businesses in Canada and Australia.
          </p>
          <div className={styles.founderBody}>
            <p>
              Corbin&rsquo;s work spans technical SEO, website development,
              search strategy, and content optimization, with a growing
              specialization in accounting and financial services.
            </p>
            <p>
              His work with accounting firms has helped shape Scale SEO&rsquo;s
              focus on relevant search visibility, practical implementation, and
              measurable business outcomes.
            </p>
          </div>
          <Link href="/corbin-jensen" className={`${t.box} ${t.boxGrey}`}>
            <Corner />
            <span>Read Corbin&rsquo;s Bio</span>
          </Link>
        </div>
      </section>

      {/* === PRINCIPLES — heading + text, then staggered 4-col box grid
           (outer two boxes empty) === */}
      <section className={styles.partners}>
        <div className={styles.partnersHead}>
          <h2 className={styles.partnersTitle}>How We Work</h2>
          <div className={styles.partnersText}>
            <p>
              We believe good SEO should be practical, transparent, and closely
              connected to the business it supports.
            </p>
          </div>
        </div>
        <div className={styles.partnersGrid}>
          <div className={`${styles.pBox} ${styles.pEmpty}`} style={{ gridColumn: 4, gridRow: 1 }} aria-hidden="true" />
          {principles.map((p, i) => (
            <article
              key={p.title}
              className={styles.pBox}
              style={{ gridColumn: (i % 2) + 2, gridRow: i < 2 ? 1 : 2 }}
            >
              <span className={styles.pNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.pTitle}>{p.title}</h3>
              <p className={styles.pBody}>{p.body}</p>
            </article>
          ))}
          <div className={`${styles.pBox} ${styles.pEmpty}`} style={{ gridColumn: 1, gridRow: 2 }} aria-hidden="true" />
        </div>
      </section>

      {/* === WORK WITH SCALE SEO — closing navy box === */}
      <section className={styles.ctaWrap}>
        <div className={styles.ctaBox}>
          <svg className={styles.ctaMark} viewBox="0 0 366 366" fill="none" stroke="currentColor" aria-hidden="true">
            <circle cx="183" cy="183" r="164" strokeWidth="36" />
            <path d="M101 139 H224.5 V262" strokeWidth="38" />
          </svg>
          <h2 className={t.h2}>Work With Scale SEO</h2>
          <div className={styles.ctaBottom}>
            <div className={styles.ctaNote}>
              <p>
                We work with accounting firms and professional service
                businesses across Canada and Australia.
              </p>
              <p style={{ marginTop: "0.7em" }}>
                Whether you&rsquo;re looking to strengthen your organic
                visibility, reach new clients through Google Ads, or develop a
                better website, we&rsquo;re here to help.
              </p>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              <Corner />
              <span>Book a Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
