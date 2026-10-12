import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import RevealOnScroll from "../../components/RevealOnScroll";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import Contact from "../../components/ContactCta";
import grid from "../../sections/home/ServicesGrid.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Web Development & Design Services | Scale SEO",
  description:
    "Websites built for accounting firms and professional service businesses across Canada — fast, clean, and SEO-ready from the first line of code. Design and development handled directly by one specialist.",
  alternates: { canonical: "/services/web-development" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";

const included = [
  {
    name: "SEO-First Build",
    desc: "Every site is built on the same technical foundation the SEO work depends on — clean markup, fast load times, and proper structure from day one.",
  },
  {
    name: "Design That Builds Trust",
    desc: "Clean, professional design suited to accounting and financial service brands — built to hold up under a skeptical prospect's scrutiny.",
  },
  {
    name: "Conversion-Focused Structure",
    desc: "Pages built around how your buyers actually decide — clear calls to action, credible proof, no dead ends.",
  },
  {
    name: "Mobile & Performance Optimized",
    desc: "Fast on every device. Site speed is a ranking factor and a trust signal — it's treated as core to the build, not an afterthought.",
  },
  {
    name: "CMS & Ongoing Edits",
    desc: "A site you can actually update, with a straightforward content setup — no waiting on a developer for a simple text change.",
  },
  {
    name: "Built to Scale With SEO",
    desc: "Structured from the start to support the content, local pages, and technical work that come after launch — not rebuilt six months in.",
  },
];

const pricingPoints = [
  { title: "One upfront fee", body: "Websites start from $3,000 + GST, paid as a one-time project fee." },
  { title: "No per-page pricing", body: "The scope covers what's needed for a complete site rather than a page count." },
  { title: "Optional hosting", body: "Monthly hosting is available as an add-on, depending on your setup." },
  { title: "SEO when you're ready", body: "Ongoing SEO can be added after launch from the standard monthly starting rate." },
];

const faqs: FaqItem[] = [
  {
    q: "How much does a new website cost?",
    a: [
      "Websites built from scratch start from $3,000 + GST as a one-time upfront fee.",
      "I don't price per page — the scope covers what's needed for a complete site. Monthly hosting is available as an optional add-on.",
    ],
    link: { href: "/pricing", label: "See All Pricing" },
  },
  {
    q: "Can you add SEO after the website launches?",
    a: [
      "Yes. Every site is built with SEO in mind from the start, and ongoing monthly SEO can be added on top of the website project from the standard starting rate.",
    ],
    link: { href: "/services/seo", label: "Explore SEO Services" },
  },
  {
    q: "Can you improve my existing website instead of rebuilding it?",
    a: [
      "Often, yes. If the existing site has a workable foundation, design, CTA, and structural improvements can be made as part of an ongoing SEO campaign rather than starting over.",
      "If the platform or structure is holding the site back, a rebuild may be the better long-term investment. I'll tell you honestly which makes more sense.",
    ],
  },
  {
    q: "Which platforms do you build on?",
    a: [
      "I work with Webflow, WordPress, and modern web environments such as Next.js and Vercel. The right choice depends on your business, how often you'll edit the site, and the SEO work planned after launch.",
    ],
  },
  {
    q: "Will I be able to update the website myself?",
    a: [
      "Yes. Sites are set up with a straightforward content setup so simple text and content changes don't require waiting on a developer.",
    ],
  },
  {
    q: "Who owns the website?",
    a: [
      "You do. Your website, content, accounts, and data remain yours.",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://scaleseo.co/services/web-development#service",
  name: "Web Development & Design Services",
  description:
    "Website design and development for accounting firms and professional service businesses across Canada, built on the same technical foundation their SEO depends on.",
  serviceType: "Web Development",
  url: "https://scaleseo.co/services/web-development",
  provider: { "@id": "https://scaleseo.co/#organization" },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "Country", name: "Canada" },
  ],
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "CAD",
    description: "Custom website design and development starting from $3,000 CAD as a one-time fee plus GST.",
  },
};

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
        title={
          <>
            Websites Built to{" "}
            <span className="title-block">Rank, Load Fast, and Convert.</span>
          </>
        }
        icon="browser"
        actions={
          <>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span>Book a Strategy Call</span>
              <span>→</span>
            </a>
            <Link href="/pricing">
              <span>See Pricing</span>
              <span>→</span>
            </Link>
          </>
        }
      >
        <p>
          A website that looks good but loads slow or can&rsquo;t be crawled
          properly is working against your SEO, not for it. I build and design
          sites the same way I optimize them &mdash; with performance and search
          visibility built in from the start.
        </p>
      </PageHero>

      {/* === THE PROBLEM — navy, heading left / copy right === */}
      <section className={styles.problem} data-nav-theme="dark">
        <div className={styles.split}>
          <h2 className={`${styles.bigH2} reveal-up`}>
            Most web design has{" "}
            <span className={styles.accent}>
              nothing to do with how the site performs.
            </span>
          </h2>
          <div className={`${styles.problemBody} reveal-up`}>
            <p>
              A lot of web design is judged on how it looks in a portfolio, not
              how it performs in the real world &mdash; page speed,
              crawlability, and structure are treated as someone else&rsquo;s
              problem to fix later.
            </p>
            <p>
              For a professional service business, that gap costs you twice:
              once in lost rankings, and again in lost trust from a prospect who
              bounces off a slow, cluttered site before ever reading your pitch.
            </p>
            <p className={styles.problemLead}>
              I build the site and the SEO as one system, not two separate
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* === WHAT'S INCLUDED — homepage services grid on the light canvas === */}
      <section className={`${grid.section} ${styles.inclGrid}`} id="included">
        <div className={grid.intro}>
          <h2 className={grid.introTitle}>What&rsquo;s Included in Every Build</h2>
          <div className={grid.introBody}>
            <p>
              Design, development, and SEO foundations handled together, so the
              site is ready to rank and convert the day it launches.
            </p>
          </div>
        </div>
        <div className={grid.grid}>
          {included.map((item, i) => (
            <article key={item.name} className={grid.cell}>
              <span className={grid.cellIndex}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={grid.cellTitle}>{item.name}</h3>
              <p className={grid.cellDesc}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === PRICING — light blue, full-width rows === */}
      <section className={styles.pricing}>
        <div className={styles.pricingHead}>
          <h2 className={`${styles.bigH2} reveal-up`}>
            Websites Start From $3,000 + GST
          </h2>
          <p className={`${styles.pricingIntro} reveal-up`}>
            Every business is different, so each site is scoped around what you
            actually need.
          </p>
        </div>
        <div className={styles.rows}>
          {pricingPoints.map((p) => (
            <div key={p.title} className={`${styles.row} reveal-up`}>
              <h3 className={styles.rowTitle}>{p.title}</h3>
              <p className={styles.rowBody}>{p.body}</p>
            </div>
          ))}
        </div>
        <Link href="/pricing" className={styles.pricingLink}>
          <span>See All Pricing</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <ServicesFaq
        items={faqs}
        eyebrow="Web Development Questions"
        title={
          <>
            Website Design <em>Questions</em>
          </>
        }
      />

      <p className={styles.related}>
        Already have a site and just need the SEO fixed?{" "}
        <Link href="/services/seo">See how core SEO works →</Link>
      </p>

      <Contact />
      <RevealOnScroll />
    </main>
  );
}
