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
          <p className={styles.heroLead}>Independent SEO consultancy. Specialized in accounting and professional services.</p>
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
          <h2 className={styles.big}>A More Focused Approach to Search</h2>
          <p className={`${v.lead} ${styles.statementLead}`}>
            Scale SEO was established with a straightforward idea: effective SEO starts with understanding the business behind the website.
          </p>
          <div className={styles.cols2}>
            <p className={v.p}>
              Today, our primary focus is the accounting industry. Through ongoing work with firms in Canada and Australia, we&rsquo;ve developed practical experience in how accounting services are searched for, evaluated, and presented online.
            </p>
            <p className={v.p}>
              From corporate tax and bookkeeping to fractional CFO and business advisory services, we build strategies around the work our clients want more of.
            </p>
          </div>
          <Btn href="/services" tone="navy">Explore Our Services</Btn>
        </div>
      </section>

      {/* Who we are — navy: label left, statement right, stats, labelled rows */}
      <section className={`${v.navy} ${v.sec}`} data-nav="dark">
        <div className={v.wrap}>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>About who we are</span>
            <div>
              <p className={styles.navyStatement}>
                Founded in 2025 in Calgary, Alberta, Scale SEO helps accounting firms improve their visibility on Google and attract more qualified business enquiries.
              </p>
              <p className={`${v.lead} ${styles.navyLead}`}>
                We combine search engine optimization, Google Ads, and website development to help CPA firms, tax accountants, bookkeeping practices, and financial advisory businesses grow across Canada and Australia.
              </p>
            </div>
          </div>

          <div className={styles.stats}>
            <div><span className={styles.statNum}>2025</span><span className={v.small}>Founded in Calgary, Alberta</span></div>
            <div><span className={styles.statNum}>2</span><span className={v.small}>Markets: Canada &amp; Australia</span></div>
            <div><span className={styles.statNum}>100%</span><span className={v.small}>Client Retention</span></div>
          </div>

          <div className={styles.rows}>
            <div className={styles.row}>
              <h3 className={v.h3}>Experience Across Two Markets</h3>
              <div className={styles.rowBody}>
                <p className={v.p}>Accounting firms operate in competitive markets where expertise, reputation, and trust influence how clients choose a provider.</p>
                <p className={v.p}>
                  Our experience with <Link href="/results/jensen-cpa" className={styles.inline}>Jensen CPA</Link> in Calgary and{" "}
                  <Link href="/results/empire-accountants" className={styles.inline}>Empire Accountants</Link> in Brisbane has shaped our understanding of the industry across two distinct markets.
                </p>
                <p className={v.p}>While the terminology, regulations, and search behaviour differ, our approach remains consistent: understand the firm&rsquo;s priorities, improve its search presence, and measure the results.</p>
              </div>
            </div>
            <div className={styles.row}>
              <h3 className={v.h3}>Markets</h3>
              <ul className={styles.tagList}>{["Canada", "Australia"].map((m) => <li key={m}>/ {m}</li>)}</ul>
            </div>
            <div className={styles.row}>
              <h3 className={v.h3}>Specialties</h3>
              <ul className={styles.tagList}>
                {["CPA & Accounting Firms", "Corporate Tax & Advisory", "Bookkeeping & Cloud Accounting", "Fractional CFO Services"].map((m) => <li key={m}>/ {m}</li>)}
              </ul>
            </div>
          </div>
          <div className={v.endRow}>
            <Btn href="/results" tone="light">View Our Client Results</Btn>
          </div>
        </div>
      </section>

      {/* Founder — Bilberrry: side label, title, two-column text, signature, profile card */}
      <section className={`${v.white} ${v.sec}`}>
        <div className={v.wrap}>
          <div className={styles.labelled}>
            <span className={styles.sideLabel}>Meet the founder</span>
            <div>
              <h2 className={v.h2}>Corbin Jensen, Founder of Scale SEO</h2>
              <div className={styles.founderGrid}>
                <div className={styles.founderText}>
                  <p className={v.p}>Scale SEO was founded by Corbin Jensen, a Canadian SEO specialist with experience developing search strategies and websites for businesses in Canada and Australia.</p>
                  <p className={v.p}>Corbin&rsquo;s work spans technical SEO, website development, search strategy, and content optimization, with a growing specialization in accounting and financial services.</p>
                  <p className={v.p}>His work with accounting firms has helped shape Scale SEO&rsquo;s focus on relevant search visibility, practical implementation, and measurable business outcomes.</p>
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
            <p className={v.p}>We believe good SEO should be practical, transparent, and closely connected to the business it supports.</p>
          </div>
          <ol className={`${v.cards} ${v.cols4}`}>
            {principles.map((p, i) => (
              <li key={p.title} className={v.card}>
                <span className={v.cardNum}>0{i + 1}</span>
                <h3 className={v.h3}>{p.title}</h3>
                <p className={v.p}>{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={`${v.white} ${v.ctaSec}`} style={{ paddingTop: 40 }}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Work With Scale SEO</h2>
            <p className={v.p}>We work with accounting firms and professional service businesses across Canada and Australia.</p>
            <p className={v.p}>Whether you&rsquo;re looking to strengthen your organic visibility, reach new clients through Google Ads, or develop a better website, we&rsquo;re here to help.</p>
            <Btn href={BOOKING_URL} external>Book a Consultation</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
