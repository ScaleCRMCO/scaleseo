import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import v from "../../sections/v3/v3.module.css";
import { Btn } from "../../sections/v3/ui";
import styles from "../cs.module.css";

export const metadata: Metadata = {
  title: { absolute: "Jensen CPA Case Study: 395% SEO Visibility Growth | Scale SEO" },
  description:
    "See how Scale SEO rebuilt Jensen CPA's website, added approximately 25 pages, and increased Google Search impressions by 395% and organic clicks by 205%.",
  alternates: { canonical: "/results/jensen-cpa" },
};

const CLIENT_URL = "https://www.jensencpa.ca/";

const toc = [
  ["overview", "Overview"],
  ["challenge", "The Challenge"],
  ["strategy", "The Strategy & Implementation"],
  ["results", "The Results"],
  ["different", "What Made This Campaign Different?"],
  ["by", "Strategy & Implementation by Corbin Jensen"],
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/results/jensen-cpa#webpage",
      url: "https://scaleseo.co/results/jensen-cpa",
      name: "Jensen CPA SEO Case Study | Scale SEO",
      description: "See how website redevelopment, SEO, content strategy and Google Ads helped Jensen CPA significantly increase organic search visibility in Calgary.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/jensen-cpa#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/jensen-cpa#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/jensen-cpa#case-study",
      url: "https://scaleseo.co/results/jensen-cpa",
      headline: "Jensen CPA SEO Case Study",
      description: "How website redevelopment, approximately 25 new pages, ongoing SEO, accounting content and Google Ads helped a Calgary CPA firm increase Google Search impressions by 395% and organic clicks by 205% (first vs. latest 30-day period, June\u2013November 2026).",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/jensen-cpa#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Jensen CPA",
        url: CLIENT_URL
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "accounting firm SEO",
        "CPA SEO",
        "SEO for accountants",
        "Calgary accounting SEO",
        "professional services SEO",
        "SEO case study"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/jensen-cpa#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Results",
          item: "https://scaleseo.co/results"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jensen CPA",
          item: "https://scaleseo.co/results/jensen-cpa"
        }
      ]
    }
  ]
};

const Corner = () => (
  <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
);

export default function JensenCpaCaseStudy() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />

      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Results", href: "/results" }, { name: "Jensen CPA" }]} schema={false} />
          </div>
          <Link href="/results" className={styles.back}>&larr; Back to Results</Link>
        </div>
        <div className={styles.heroRight}>
          <h1 className={styles.title}>Jensen CPA SEO Case Study</h1>
          <p className={styles.summary}>
            <strong>From a basic website with little search visibility to an established online presence generating more organic traffic for a Calgary accounting firm.</strong>
          </p>
          <div className={styles.tags}>
            {["Website Redevelopment", "SEO", "Content Strategy", "Technical SEO", "Google Ads"].map((x) => <span key={x}>{x}</span>)}
          </div>
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer" className={styles.visit}>
            <Corner />
            <span>Visit Jensen CPA</span>
          </a>
        </div>
      </header>

      <div className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/jensen-cpa-cover.webp" alt="The Jensen CPA team in Calgary, an accounting firm Scale SEO works with" />
      </div>

      <div className={styles.layout}>
        <aside className={styles.side}>
          <span className={styles.sideLabel}>On this page</span>
          <ol className={styles.toc}>
            {toc.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ol>
          <div className={styles.sideCta}>
            <p>Want results like this for your firm?</p>
            <Btn href="https://cal.com/corbinjensen-scaleseo/30min" external>Speak to an Expert</Btn>
          </div>
        </aside>

        <article className={styles.body}>
          <section className={styles.highlights} aria-label="Results at a glance">
            <h3 className={styles.hlLabel}>Results at a Glance</h3>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.statValue}>+395%</span><span className={styles.statLabel}>Google Search impressions</span></div>
              <div className={styles.stat}><span className={styles.statValue}>+205%</span><span className={styles.statLabel}>Organic search clicks</span></div>
              <div className={styles.stat}><span className={styles.statValue}>~25 pages</span><span className={styles.statLabel}>Added through website redevelopment and ongoing SEO</span></div>
            </div>
            <p className={styles.hlNote}><em>Search performance compares the first and latest 30-day periods in Google Search Console, June&ndash;November 2026.</em></p>
          </section>

          <h2 id="overview">Overview</h2>
          <p>Jensen CPA is an established Chartered Professional Accounting firm in Calgary, Alberta, offering corporate tax, bookkeeping, personal tax, and fractional CFO services.</p>
          <p>When we began working together, the firm had an experienced accounting team and an established client base, but its website was holding back its online presence.</p>
          <p>The original site was built from a basic template, with limited content, few dedicated service pages, and very little organic search traffic.</p>
          <p>Our goal was to change that.</p>
          <p>We set out to build a professional website that reflected the firm&rsquo;s expertise, made its services easier to find, and created a stronger source of enquiries through Google.</p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jensen-cpa-website.webp" alt="Jensen CPA website homepage after the redevelopment" />
            <figcaption>The redeveloped Jensen CPA website.</figcaption>
          </figure>

          <h2 id="challenge">The Challenge</h2>
          <p>Jensen CPA had the expertise to serve more business clients, but its website wasn&rsquo;t helping prospective clients discover that expertise.</p>
          <p>Several issues needed attention:</p>
          <ul>
            <li><strong>Limited website content:</strong> Important accounting services lacked detailed, dedicated pages.</li>
            <li><strong>Weak search visibility:</strong> The website had little presence for relevant accounting searches in Calgary.</li>
            <li><strong>Limited supporting resources:</strong> There were few articles answering common tax and business questions.</li>
            <li><strong>Website presentation:</strong> The existing design and structure didn&rsquo;t fully reflect the firm&rsquo;s professional services.</li>
          </ul>
          <p>The opportunity was not simply to improve an existing website.</p>
          <p>It was to build a stronger digital foundation for the business.</p>

          <h2 id="strategy">The Strategy &amp; Implementation</h2>
          <h3><span className={styles.num}>01</span>Complete Website Redevelopment</h3>
          <p>We replaced the original template website with a redesigned, expanded website built around Jensen CPA&rsquo;s services and target clients.</p>
          <p>The redevelopment included clearer navigation, improved page layouts, dedicated service pages, and a more professional presentation of the firm&rsquo;s team and expertise.</p>
          <p>Search visibility was considered throughout the build, from the website structure to the content of individual pages.</p>

          <h3><span className={styles.num}>02</span>Expanding the Website by Approximately 25 Pages</h3>
          <p>Since the start of the engagement, we&rsquo;ve added approximately 25 pages covering accounting services, business clients, and educational topics.</p>
          <p>Core service areas include:</p>
          <ul>
            <li>Corporate tax and year-end filing</li>
            <li>Monthly bookkeeping</li>
            <li>Fractional CFO and controller services</li>
            <li>Personal tax</li>
            <li>Accounting for businesses and professionals</li>
          </ul>
          <p>Rather than expecting the homepage to rank for every service, we created dedicated pages that answer specific client questions and target relevant searches.</p>
          <p>This gave Jensen CPA a broader foundation for reaching prospective clients through Google.</p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jensen-cpa-bookkeeping-service-page.webp" alt="Jensen CPA monthly bookkeeping services page" />
            <figcaption>Example of a dedicated accounting service page developed for Jensen CPA.</figcaption>
          </figure>

          <h3><span className={styles.num}>03</span>Accounting Content Strategy</h3>
          <p>We developed articles around the tax and accounting questions Alberta business owners regularly search for.</p>
          <p>Topics have included corporate tax deadlines, shareholder loans, capital cost allowance, salary versus dividends, and Section 85 rollovers.</p>
          <p>Each article is designed to provide useful information while connecting readers to the firm&rsquo;s relevant accounting services.</p>
          <p>This work has helped extend Jensen CPA&rsquo;s visibility beyond searches for the firm&rsquo;s name.</p>

          <h3><span className={styles.num}>04</span>Technical SEO &amp; Website Improvements</h3>
          <p>Alongside the new content, we improved the website&rsquo;s technical foundations.</p>
          <p>Work included website architecture, internal linking, metadata, structured data, breadcrumbs, and search indexing improvements.</p>
          <p>We also strengthened the connections between service pages, articles, and professional profiles to help visitors navigate the website and understand the firm&rsquo;s expertise.</p>
          <p>Google Search Console data continues to guide content updates and ongoing optimization.</p>

          <h3><span className={styles.num}>05</span>Google Ads for Early Enquiries</h3>
          <p>Organic SEO takes time to develop, so we also managed targeted Google Ads campaigns to reach prospective clients searching for accounting services.</p>
          <p>Paid search provided an additional source of enquiries while the website&rsquo;s organic visibility grew.</p>
          <p>By managing both channels, we could align advertising with the firm&rsquo;s service pages and wider search strategy.</p>

          <h2 id="results">The Results</h2>
          <p>The website redevelopment and ongoing SEO campaign have been followed by significant growth in Jensen CPA&rsquo;s organic search visibility.</p>
          <h3>+395% Google Search Impressions</h3>
          <p>Impressions increased from 6,415 to 31,785 when comparing the first and most recent 30-day reporting periods.</p>
          <p>This represents almost five times as many appearances in Google Search results.</p>
          <h3>+205% Organic Search Clicks</h3>
          <p>Organic clicks increased from 77 to 235 over the same periods.</p>
          <p>The firm now receives more than three times as many clicks from Google Search as it did during the initial comparison period.</p>
          <table className={styles.table}>
            <thead><tr><th>Metric</th><th className={styles.num2}>First 30 Days</th><th className={styles.num2}>Latest 30 Days</th></tr></thead>
            <tbody>
              <tr><td>Search impressions</td><td className={styles.num2}>6,415</td><td className={styles.num2}>31,785</td></tr>
              <tr><td>Organic clicks</td><td className={styles.num2}>77</td><td className={styles.num2}>235</td></tr>
              <tr><td>Average daily impressions</td><td className={styles.num2}>214</td><td className={styles.num2}>1,060</td></tr>
              <tr><td>Average daily clicks</td><td className={styles.num2}>2.6</td><td className={styles.num2}>7.8</td></tr>
            </tbody>
          </table>
          <p className={styles.note}><em>Source: Google Search Console, June 23&ndash;July 22 compared with October 19&ndash;November 17, 2026. Results reflect organic Google Search performance, not paid advertising.</em></p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jensen-cpa-google-search-console-performance-2026.webp" alt="Google Search Console performance report for jensencpa.ca showing 790 clicks and 93.3K impressions over six months, with impressions rising steadily from June to November 2026" width={2000} height={938} />
            <figcaption>Google Search Console performance for Jensen CPA, June&ndash;November 2026.</figcaption>
          </figure>

          <h3>Visibility Beyond the Homepage</h3>
          <p>The growth has also extended to the firm&rsquo;s accounting services and educational content.</p>
          <p>Across the six-month GSC export:</p>
          <ul>
            <li><strong>Corporate Tax Services:</strong> 4,501 search impressions.</li>
            <li><strong>Fractional CFO Services:</strong> 3,250 search impressions.</li>
            <li><strong>Passive Income Trap article:</strong> 9,988 impressions.</li>
            <li><strong>Section 85 Rollover article:</strong> 4,506 impressions.</li>
          </ul>
          <p>These results show how dedicated service pages and relevant accounting content can expand a firm&rsquo;s search presence beyond its homepage.</p>
          <p>They also provide a foundation for continuing to attract prospective clients researching specific accounting needs.</p>

          <h2 id="different">What Made This Campaign Different?</h2>
          <p>The biggest improvement wasn&rsquo;t a single keyword or technical fix.</p>
          <p>It was rebuilding the website around Jensen CPA&rsquo;s actual business.</p>
          <p>Instead of relying on a small collection of general pages, we created a more complete website that connects accounting services, professional expertise, and useful content.</p>
          <p>Google Ads supported early client acquisition while the organic campaign developed.</p>
          <p>The result is a more professional website with broader search visibility, more organic clicks, and a stronger foundation for long-term growth.</p>
        </article>
      </div>

      <section className={styles.founder} id="by">
        <h2>Strategy &amp; Implementation by Corbin Jensen</h2>
        <div className={styles.founderBody}>
          <p>This engagement is led by <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of Scale SEO.</p>
          <p>The work has covered website redevelopment, SEO strategy, technical implementation, service-page expansion, content development, structured data, Google Ads, and ongoing performance analysis.</p>
          <p>Jensen CPA is an example of our approach to accounting SEO: understanding the firm&rsquo;s business first, then building a website and search strategy around the services and clients it wants to attract.</p>
          <div className={styles.founderLinks}>
            <Link href="/industries/accounting-firms" className={styles.linkGrey}><Corner /><span>Explore SEO for Accounting Firms</span></Link>
            <Link href="/services/seo" className={styles.linkBlue}><Corner /><span>Explore Monthly SEO Services</span></Link>
          </div>
        </div>
      </section>

      <section className={`${v.white} ${v.ctaSec}`}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Ready to Grow Your Accounting Firm?</h2>
            <p className={v.p}>Let&rsquo;s discuss your firm&rsquo;s goals, current marketing, and opportunities to attract more clients through Google. Tell us about your practice and the services you want to grow. You&rsquo;ll hear back directly, usually within 24 hours.</p>
            <Btn href="https://cal.com/corbinjensen-scaleseo/30min" external>Speak to an Expert</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
