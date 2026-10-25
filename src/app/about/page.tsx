import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import t from "../services/svc.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Scale SEO — Corbin Jensen",
  description:
    "Scale SEO provides precise, technical search engine optimization for corporate entities, accounting firms, and professional service practices across Canada. Run directly by lead specialist Corbin Jensen.",
  alternates: { canonical: "/about" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const principles = [
  {
    title: "Direct Collaboration",
    body: "Clients work directly with me throughout the engagement, without layers of account management.",
  },
  {
    title: "Practical Execution",
    body: "SEO recommendations are supported by hands-on implementation wherever access and website capabilities allow.",
  },
  {
    title: "Transparent Communication",
    body: "Clear priorities, straightforward reporting, and honest conversations about progress and opportunities.",
  },
  {
    title: "Flexible Engagements",
    body: "Ongoing SEO campaigns are offered month-to-month, without long-term lock-in contracts.",
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
            Independent SEO consultancy. Built around expertise, transparency,
            and long-term client relationships.
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.portrait}>
            <Image
              src="/images/corbin-about.jpg"
              alt="Corbin Jensen, founder of Scale SEO"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 33vw"
            />
            <svg className={styles.portraitMark} viewBox="0 0 366 366" fill="currentColor" aria-hidden="true">
              <path d="M182.5 0C81.7 0 0 81.7 0 182.5S81.7 365 182.5 365 365 283.3 365 182.5 283.3 0 182.5 0zm0 328.4c-80.5 0-146-65.5-146-145.9s65.5-146 146-146 145.9 65.5 145.9 146-65.4 145.9-145.9 145.9z" />
              <path d="M205.6 157.9v104.2h37.9V120H101.4v37.9z" />
            </svg>
          </div>
          <div className={styles.heroFacts}>
            <span>Founded 2025</span>
            <p>
              Scale SEO is a founder-led SEO consultancy based in Calgary,
              Alberta, working with businesses across Canada and
              internationally.
            </p>
          </div>
        </div>
      </header>

      {/* === INTRO + CALGARY BAND === */}
      <section className={styles.introRow}>
        <p className={styles.introText}>
          Founded in 2025 by Corbin Jensen, the business provides hands-on
          search engine optimization, website improvements, and digital growth
          services, with a particular focus on professional service and B2B
          businesses.
        </p>
      </section>
      <div className={styles.band}>
        <Image
          src="/images/calgary-skyline.webp"
          alt="Calgary skyline from above the Bow River"
          fill
          sizes="100vw"
        />
      </div>

      {/* === AN INDEPENDENT APPROACH — heading, big stat, text bottom-right === */}
      <section className={styles.approach}>
        <h2 className={`${t.h2} ${styles.approachTitle}`}>An Independent Approach to SEO</h2>
        <div className={styles.statBlock}>
          <span className={t.stat}>2025</span>
          <p className={t.statLabel}>Founded in Calgary, Alberta</p>
        </div>
        <div className={styles.approachBody}>
          <p className={t.lead}>
            Scale SEO was built on a simple idea: businesses should work
            directly with the specialist responsible for their results.
          </p>
          <div className={t.body}>
            <p>
              Rather than operating through account managers, outsourced teams,
              or standardized monthly packages, I work personally with a select
              number of clients.
            </p>
            <p>
              This allows me to understand each business, develop strategies
              around its actual goals, and implement the improvements needed to
              strengthen its online presence.
            </p>
          </div>
          <Link href="/services" className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Explore SEO Services →</span>
          </Link>
        </div>
      </section>

      {/* === EXPERIENCE — heading left of a rule, text right === */}
      <section className={t.rowsSplit} style={{ padding: 0 }}>
        <div className={t.rowsAside}>
          <h2 className={t.h2}>Experience Across Different Markets</h2>
          <div className={t.chips}>
            {["Canada", "Australia", "Accounting & Advisory", "Professional Services", "Local Service"].map((c) => (
              <span key={c} className={t.chip}>{c}</span>
            ))}
          </div>
        </div>
        <div className={`${t.rowsList} ${styles.expBody}`}>
          <div className={t.body}>
            <p className={t.lead}>
              Although Scale SEO is based in Calgary, my experience extends
              beyond the Canadian market.
            </p>
            <p>
              I&rsquo;ve worked with businesses across Canada and Australia,
              including accounting and advisory firms, professional service
              businesses, and local service companies.
            </p>
            <p>
              These engagements have involved technical SEO, website
              development, content strategy, local search optimization, and
              improving how businesses are represented in organic search.
            </p>
            <p>
              Working across different industries and markets has shaped how
              Scale SEO approaches each campaign: understanding the business
              first, identifying meaningful opportunities, and focusing on
              improvements that support long-term growth.
            </p>
          </div>
          <Link href="/results" className={`${t.box} ${t.boxBlue}`}>
            <Corner />
            <span>View Client Results →</span>
          </Link>
        </div>
      </section>

      {/* === MEET THE FOUNDER — navy feature box === */}
      <section className={t.featureWrap}>
        <div className={t.feature}>
          <div className={t.featureText}>
            <h2 className={t.h2}>Meet the Founder</h2>
            <h3 className={t.h3}>Corbin Jensen — Founder &amp; SEO Specialist</h3>
          </div>
          <div className={styles.founderSide}>
            <div className={t.body}>
              <p>I&rsquo;m Corbin, the founder and SEO specialist behind Scale SEO.</p>
              <p>
                I manage every SEO campaign personally, from research and
                strategy through to technical improvements, content, and
                ongoing optimization.
              </p>
              <p>
                My approach is straightforward: clear communication, practical
                recommendations, and work that contributes to real business
                outcomes.
              </p>
              <p>
                I believe clients should know exactly who is working on their
                website and have direct access to that person throughout the
                engagement.
              </p>
            </div>
            <Link href="/corbin-jensen" className={`${t.box} ${t.boxGrey}`}>
              <Corner />
              <span>Read Corbin&rsquo;s Bio →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === PRINCIPLES — grey, heading aside + four white boxes === */}
      <section className={t.grey}>
        <div className={t.asideGrid}>
          <div className={t.aside}>
            <h2 className={t.h2}>Built for Long-Term Partnerships</h2>
            <div className={t.body}>
              <p>
                Scale SEO is intentionally kept small. The goal isn&rsquo;t to
                become the largest agency, but to provide consistent,
                specialist-led SEO services to businesses that value quality
                and accountability.
              </p>
              <p>That approach is built around four principles:</p>
            </div>
          </div>
          <div className={t.cardGrid}>
            {principles.map((p, i) => (
              <article key={p.title} className={t.card}>
                <span className={t.cardLabel}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={t.h3}>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === WORK WITH SCALE SEO — closing navy box === */}
      <section className={styles.ctaWrap}>
        <div className={styles.ctaBox}>
          <h2 className={t.h2}>Work With Scale SEO</h2>
          <div className={styles.ctaBottom}>
            <p className={styles.ctaNote}>
              Whether you&rsquo;re based in Calgary, elsewhere in Canada, or
              internationally, Scale SEO provides hands-on SEO services
              tailored to your business, market, and goals.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              <Corner />
              <span>Book a Consultation →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
