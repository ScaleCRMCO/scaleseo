import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import v from "../sections/v3/v3.module.css";
import { Btn, Eyebrow } from "../sections/v3/ui";
import Signature from "../components/Signature";
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
    "title": "Understand the Business First",
    "body": [
      "Before recommending anything, we want to know how your business operates, which clients you want to reach, and what success actually looks like for you."
    ]
  },
  {
    "title": "Strategy Is Only the Beginning",
    "body": [
      "A good plan means very little if nobody puts it into practice. We take responsibility for the technical improvements, content, and website changes needed to move the work forward."
    ]
  },
  {
    "title": "No Smoke and Mirrors",
    "body": [
      "You’ll know what we’re working on, why it matters, and how things are progressing. We report on meaningful performance, explain what’s working, and are upfront when something needs to change."
    ]
  },
  {
    "title": "Relationships Over Contracts",
    "body": [
      "We work on flexible month-to-month SEO agreements, without unnecessary lock-ins. Your website, content, and business data remain yours.",
      "We believe the work should be the reason you stay."
    ]
  }
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

/* === Page — Mamba hero + statement, Bilberrry founder layout ========== */

export default function AboutPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* Hero — centred title, lead, button, badges */}
      <header className={`${v.white} ${styles.hero}`}>
        <div className={v.wrap}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} schema={false} />
          </div>
          <h1 className={styles.h1}>About Scale SEO</h1>
          <p className={styles.heroLead}>An independent SEO consultancy based in Calgary. Built for accounting firms and professional businesses that take their growth seriously.</p>
          <div className={styles.heroCta}>
            <Btn href="/results">View Our Client Results</Btn>
          </div>
          <div className={styles.badges}>
            <a href="https://agencies.semrush.com/scale-seo/" target="_blank" rel="noopener noreferrer" aria-label="Semrush Certified Agency Partner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/semrush-agency-partner.svg" alt="Semrush Certified Agency Partner" width={60} height={60} />
            </a>
            <a href="https://clutch.co/profile/scale-seo" target="_blank" rel="noopener noreferrer" aria-label="Scale SEO reviews on Clutch" className={styles.clutch}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/clutch-reviewed.svg" alt="Reviewed on Clutch" width={150} height={29} />
            </a>
          </div>
          <div className={styles.photo}>
            <Image src="/images/calgary-skyline-bw.webp" alt="Black and white panorama of the downtown Calgary skyline above the Bow River valley, home of Scale SEO" fill sizes="(max-width: 1360px) 100vw, 1280px" priority />
          </div>
        </div>
      </header>

      {/* Statement — narrow centred column, rule, two paragraphs */}
      <section className={`${v.white} ${styles.statementSec}`}>
        <div className={`${v.wrap} ${styles.narrow}`}>
          <h2 className={styles.big}>A More Considered Approach to Search</h2>
          <p className={`${v.lead} ${styles.statementLead}`}>
            Scale SEO was founded in 2025 with a simple belief: good SEO starts with understanding the business, not just the website.
          </p>
          <div className={styles.cols2}>
            <p className={v.p}>We&rsquo;re a Calgary-based consultancy working primarily with accounting firms and other professional service businesses across Canada and Australia.</p>
            <p className={v.p}>Our focus on accounting has developed through working directly with firms, learning how their services are delivered, what their clients look for, and where the best opportunities for growth exist.</p>
          </div>
          <p className={styles.callLine}>We believe that experience matters. Especially when you&rsquo;re responsible for how another business presents itself online.</p>
        </div>
      </section>

      {/* Who we are — navy: label left, statement right, stats, labelled rows */}
      <section className={`${v.navy} ${v.sec}`} data-nav="dark">
        <div className={v.wrap}>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>About the company</span>
            <div>
              <h2 className={styles.navyStatement}>Small by Design. Specialized by Experience.</h2>
              <div className={styles.navyBody}>
                <p className={v.lead}>We don&rsquo;t try to be everything to everyone.</p>
                <p className={v.p}>Our work centres on a select group of industries, with accounting and professional services at the forefront. This focus allows us to spend more time understanding the businesses we work with and less time starting from scratch.</p>
                <p className={v.p}>As an independent consultancy, we keep our client relationships close and our work hands-on. Strategies are developed around each firm&rsquo;s priorities, not a standard package applied to every business.</p>
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div><span className={styles.statNum}>2025</span><span className={v.small}>Founded in Calgary, Alberta</span></div>
            <div><span className={styles.statNum}>2 Markets</span><span className={v.small}>Canada &amp; Australia</span></div>
            <div><span className={styles.statNum}>Founder-Led</span><span className={v.small}>Direct oversight of every campaign</span></div>
          </div>

          <div className={styles.rows}>
            <div className={styles.row}>
              <h3 className={v.h3}>Experience Across Two Markets</h3>
              <div className={styles.rowBody}>
                <p className={v.p}>We&rsquo;ve had the opportunity to work with accounting firms on opposite sides of the world.</p>
                <p className={v.p}>In Calgary, our work with <Link href="/results/jensen-cpa" className={styles.inline}>Jensen CPA</Link> has included website redevelopment and improving organic visibility for accounting and corporate tax services.</p>
                <p className={v.p}>In Brisbane, we&rsquo;ve worked with <Link href="/results/empire-accountants" className={styles.inline}>Empire Accountants</Link> to strengthen its search presence across business accounting, taxation, and advisory services.</p>
                <p className={v.p}>Different markets, different search habits, and different regulations. But the same underlying challenge: helping the right clients find a firm they can trust.</p>
                <p className={v.p}>These relationships have helped shape how we approach our work today.</p>
              </div>
            </div>
            <div className={styles.row}>
              <h3 className={v.h3}>Markets</h3>
              <ul className={styles.tagList}>{["Canada", "Australia"].map((m) => <li key={m}>/ {m}</li>)}</ul>
            </div>
            <div className={styles.row}>
              <h3 className={v.h3}>Industry Experience</h3>
              <ul className={styles.tagList}>
                {["Accounting & CPA Firms", "Tax & Business Advisory", "Bookkeeping & Fractional CFO", "Other Professional Services"].map((m) => <li key={m}>/ {m}</li>)}
              </ul>
            </div>
          </div>
          <div className={v.endRow}>
            <Btn href="/results" tone="light">Explore Our Case Studies</Btn>
          </div>
        </div>
      </section>

      {/* Founder — Bilberrry: side label, title, two-column text, signature, profile card */}
      <section className={`${v.white} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>Meet the founder</span>
            <div>
              <h2 className={v.h2}>Corbin Jensen</h2>
              <p className={styles.role}><em>Founder &amp; SEO Specialist</em></p>
              <div className={styles.founderGrid}>
                <div className={styles.founderText}>
                  <p className={v.p}>Scale SEO was established by Corbin Jensen, a Canadian SEO specialist whose work spans search strategy, technical SEO, content, and website development.</p>
                  <p className={v.p}>Having worked with businesses in both Canada and Australia, Corbin brings a practical understanding of how different industries and markets compete online.</p>
                  <p className={v.p}>He remains directly involved in every Scale SEO engagement, from the initial strategy through to implementation and ongoing performance reviews.</p>
                  <p className={v.p}>His approach is straightforward: understand the business, do the work properly, and be accountable for the results.</p>
                  <div className={styles.sign}>
                    <Signature className={styles.signature} />
                    <span className={v.small}><strong>Corbin Jensen</strong><br />Founder &amp; SEO Specialist</span>
                  </div>
                </div>
                <figure className={styles.card}>
                  <div className={styles.cardImg}>
                    <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder and SEO specialist at Scale SEO" fill sizes="(max-width: 900px) 90vw, 360px" />
                  </div>
                  <figcaption>
                    <span className={v.small}>Founder &amp; SEO Specialist</span>
                    <strong>Corbin Jensen</strong>
                  </figcaption>
                  <div className={styles.cardBtns}>
                    <Btn href="/corbin-jensen" tone="navy">Read Corbin&rsquo;s Bio</Btn>
                    <a href="https://www.linkedin.com/in/corbin-jensen-seo/" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>LinkedIn</a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work — Mamba mark above heading, four cards on grey */}
      <section className={`${v.grey} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={v.head}>
            <div>
              <Eyebrow>Our principles</Eyebrow>
              <h2 className={v.h2}>How We Work</h2>
            </div>
            <p className={v.p}>Good work doesn&rsquo;t need to be complicated. These are the principles behind every Scale SEO engagement.</p>
          </div>
          <ol className={`${v.cards} ${v.cols4}`}>
            {principles.map((p, i) => (
              <li key={p.title} className={v.card}>
                <span className={v.cardNum}>0{i + 1}</span>
                <h3 className={v.h3}>{p.title}</h3>
                {p.body.map((b) => <p key={b} className={v.p}>{b}</p>)}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Good Work Starts With a Conversation.</h2>
            <p className={v.p}>We&rsquo;re selective about the businesses we work with because every engagement deserves proper attention.</p>
            <p className={v.p}>If you&rsquo;re an accounting firm or professional service business looking for a more involved, thoughtful approach to search, we&rsquo;d be glad to hear about your plans.</p>
            <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
