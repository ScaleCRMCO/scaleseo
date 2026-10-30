import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import styles from "../cs.module.css";

export const metadata: Metadata = {
  title: "Jensen CPA SEO Case Study | Scale SEO",
  description:
    "Building a stronger digital presence for a Calgary CPA firm through website redevelopment, SEO, content strategy, and Google Ads.",
  alternates: { canonical: "/results/jensen-cpa" },
};

const CLIENT_URL = "https://www.jensencpa.ca/";

const toc = [
  ["overview", "Overview"],
  ["challenge", "The Challenge"],
  ["strategy", "The SEO Strategy & Implementation"],
  ["results", "The Results"],
  ["different", "What Made This Campaign Different?"],
  ["by", "SEO Strategy & Implementation by Corbin Jensen"],
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
      description: "How website redevelopment, ongoing SEO, accounting content strategy and Google Ads helped a Calgary CPA firm increase average daily Google Search impressions by 227% during the initial campaign.",
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

export default function JensenCpaCaseStudy() {
  return (
    <main className="v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.crumbs}>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Results", href: "/results" },
                { name: "Jensen CPA" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>Jensen CPA SEO Case Study</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.summary}>
            <strong>
              Website redevelopment and SEO for a Calgary accounting firm,
              increasing Google Search impressions by 227% and organic clicks by
              92% in the first four months.
            </strong>
          </p>
          <div className={styles.tags}>
            {["Website Redesign", "SEO Campaign", "Content Strategy", "Technical SEO", "Google Ads"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer" className={styles.visit}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            <span>Visit Jensen CPA &rarr;</span>
          </a>
        </div>
      </header>

      <div className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/jensen-cpa-cover.webp"
          alt="The Jensen CPA team in Calgary, an accounting firm Scale SEO works with" />
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>+227%</span>
          <span className={styles.statLabel}>Average daily search impressions</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>+92%</span>
          <span className={styles.statLabel}>Average daily organic clicks</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>4 months</span>
          <span className={styles.statLabel}>Initial campaign period</span>
        </div>
      </div>

      <div className={styles.layout}>
        <ol className={styles.toc}>
          {toc.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ol>

        <article className={styles.body}>
          <h2 id="overview">Overview</h2>
          <p>
            Jensen CPA is a Chartered Professional Accounting firm based in
            Calgary, Alberta, providing corporate tax, bookkeeping, personal tax,
            and fractional CFO services.
          </p>
          <p>
            When I began working with Jensen CPA, the firm had an established
            reputation and experienced accounting team, but its website
            didn&rsquo;t fully represent its services or the clients it wanted to
            attract.
          </p>
          <p>
            The objective was to rebuild the website around the firm&rsquo;s core
            services, improve organic search visibility, and create a stronger
            foundation for generating qualified enquiries.
          </p>

          <h2 id="challenge">The Challenge</h2>
          <p>The original website presented several opportunities for improvement:</p>
          <ul>
            <li><strong>Limited service-page depth:</strong> Important services needed dedicated pages that addressed specific customer needs and searches.</li>
            <li><strong>Website structure:</strong> The site needed clearer navigation between services, client types, team information, and resources.</li>
            <li><strong>Content gaps:</strong> The firm&rsquo;s accounting expertise wasn&rsquo;t fully represented through useful educational content.</li>
            <li><strong>Organic visibility:</strong> The website had room to improve its presence for competitive Calgary accounting searches.</li>
          </ul>
          <p>
            The challenge wasn&rsquo;t simply to increase website traffic. It was
            to build a more complete online presence that reflected the
            firm&rsquo;s expertise and connected potential clients with relevant
            services.
          </p>

          <h2 id="strategy">The SEO Strategy &amp; Implementation</h2>
          <p>
            Rather than optimizing a handful of existing pages, I focused on
            improving the website as a whole.
          </p>
          <h3><span className={styles.num}>01</span>Website Redevelopment</h3>
          <p>
            Redesigned and expanded the website with clearer navigation, improved
            page layouts, and dedicated pathways to the firm&rsquo;s accounting
            services, team, pricing, and resources.
          </p>
          <h3><span className={styles.num}>02</span>Commercial Service Pages</h3>
          <p>
            Developed and improved pages targeting corporate tax, monthly
            bookkeeping, personal tax, and fractional CFO services.
          </p>
          <p>
            Each page was structured around relevant search intent, service
            information, and the questions prospective clients are likely to ask.
          </p>
          <h3><span className={styles.num}>03</span>Accounting Content Strategy</h3>
          <p>
            Developed educational resources addressing tax and business questions
            relevant to Alberta business owners.
          </p>
          <p>
            Topics included shareholder loans, capital cost allowance, business
            structures, and Section 85 rollovers.
          </p>
          <p>
            Supporting articles were connected to relevant accounting services
            through internal links, creating clearer relationships between
            educational content and the firm&rsquo;s commercial pages.
          </p>
          <h3><span className={styles.num}>04</span>Technical SEO &amp; Search Performance</h3>
          <p>
            Improved website architecture, internal linking, structured data,
            breadcrumbs, and technical search foundations.
          </p>
          <p>
            Google Search Console data was used to monitor performance, identify
            opportunities, and guide ongoing improvements.
          </p>
          <p>
            Google Ads was also managed as a complementary acquisition channel
            while organic search visibility developed.
          </p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jensen-cpa-bookkeeping-service-page.webp" alt="Jensen CPA monthly bookkeeping services page" />
            <figcaption>Example of a dedicated accounting service page developed for Jensen CPA.</figcaption>
          </figure>

          <h2 id="results">The Results</h2>
          <p>
            Within the first four months of the engagement, Jensen CPA experienced
            substantial growth in Google Search visibility.
          </p>
          <p>Comparing equal 28-day periods in Google Search Console:</p>
          <ul>
            <li><strong>+227%</strong> average daily search impressions</li>
            <li><strong>+92%</strong> average daily organic clicks</li>
            <li><strong>700&ndash;1,100</strong> impressions on typical recent days</li>
          </ul>
          <p>
            Average daily impressions increased from approximately 240 to 784,
            while average daily organic clicks increased from 2.8 to 5.4.
          </p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/jensen-cpa-google-search-console.webp" alt="Google Search Console performance report for Jensen CPA" />
            <figcaption>Google Search Console performance during the initial four months of the SEO campaign.</figcaption>
          </figure>

          <h3>Visibility for Competitive Calgary Searches</h3>
          <p>Growth wasn&rsquo;t limited to searches for the Jensen CPA brand.</p>
          <p>
            The website also gained visibility for commercially relevant
            accounting searches in Calgary.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Search Query</th><th>Average Google Position</th></tr>
            </thead>
            <tbody>
              <tr><td>CPA Calgary</td><td>7.31</td></tr>
              <tr><td>CPA in Calgary</td><td>4.72</td></tr>
              <tr><td>Accountants Calgary</td><td>9.91</td></tr>
              <tr><td>Calgary Accounting Firms</td><td>10.01</td></tr>
            </tbody>
          </table>
          <p>
            These queries represent potential clients actively searching for
            accounting firms rather than people already familiar with Jensen CPA.
          </p>

          <h3>Educational Content Performance</h3>
          <p>
            The expanded content strategy also generated visibility for accounting
            topics relevant to the firm&rsquo;s services.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Article Topic</th><th>Search Impressions</th></tr>
            </thead>
            <tbody>
              <tr><td>Passive Income &amp; Small Business Deduction</td><td>6,215</td></tr>
              <tr><td>Small Business Tax Deductions</td><td>3,103</td></tr>
              <tr><td>Sole Proprietor vs. Corporation</td><td>2,218</td></tr>
              <tr><td>Section 85 Rollovers</td><td>1,047</td></tr>
            </tbody>
          </table>
          <p>
            These articles help introduce the firm to business owners researching
            tax and accounting questions, with contextual links guiding readers
            toward relevant services.
          </p>

          <h2 id="different">What Made This Campaign Different?</h2>
          <p>
            The most important decision was to build the website around Jensen
            CPA&rsquo;s actual services and accounting expertise rather than focus
            exclusively on rankings for broad terms such as &ldquo;accountant
            Calgary.&rdquo;
          </p>
          <p>
            Dedicated service pages gave the firm more opportunities to appear for
            specific accounting needs, while educational content expanded its
            visibility across relevant business and tax topics.
          </p>
          <p>
            Technical improvements and internal linking connected those resources
            into a more coherent website.
          </p>
          <p>
            The result was a stronger organic search presence supported by
            measurable improvements in impressions, clicks, and visibility for
            commercially relevant searches.
          </p>
          <p className={styles.note}>
            These results reflect the first four months of ongoing work. They are
            not a guarantee of equivalent performance for other businesses, and
            continued growth depends on competition, search demand, and future
            improvements.
          </p>
        </article>
      </div>

      <section className={styles.founder} id="by">
        <h2>SEO Strategy &amp; Implementation by Corbin Jensen</h2>
        <div className={styles.founderBody}>
          <p>
            This project was managed directly by{" "}
            <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of Scale SEO.
          </p>
          <p>
            My work included website redevelopment, SEO strategy, technical
            implementation, service-page optimization, content planning, internal
            linking, structured data, performance analysis, and Google Ads
            management.
          </p>
          <p>
            The Jensen CPA project demonstrates how website development and
            ongoing SEO can work together to strengthen the digital presence of an
            established professional service firm.
          </p>
          <div className={styles.founderLinks}>
            <Link href="/industries/accounting-firms" className={styles.linkGrey}>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>Explore SEO for Accounting Firms &rarr;</span>
            </Link>
            <Link href="/services/seo" className={styles.linkBlue}>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>Explore Monthly SEO Services &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
