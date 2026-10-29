import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import styles from "../cs.module.css";

export const metadata: Metadata = {
  title: "Empire Accountants SEO Case Study | Scale SEO",
  description:
    "How ongoing SEO helped a Brisbane accounting firm improve search visibility, move priority keywords onto page one, and generate more organic enquiries.",
  alternates: { canonical: "/results/empire-accountants" },
};

const CLIENT_URL = "https://www.empireaccountants.com.au/";

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
      "@id": "https://scaleseo.co/results/empire-accountants#webpage",
      url: "https://scaleseo.co/results/empire-accountants",
      name: "Empire Accountants SEO Case Study | Scale SEO",
      description: "See how ongoing SEO helped Empire Accountants improve organic search visibility, move priority keywords onto page one and generate more enquiries.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/empire-accountants#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/empire-accountants#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/empire-accountants#case-study",
      url: "https://scaleseo.co/results/empire-accountants",
      headline: "Empire Accountants SEO Case Study",
      description: "How ongoing SEO helped a Brisbane accounting firm improve search visibility, move priority keywords onto page one and generate more organic enquiries.",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/empire-accountants#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Empire Accountants",
        url: CLIENT_URL
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "SEO case study",
        "accounting firm SEO",
        "SEO for accountants",
        "accounting SEO",
        "professional services SEO"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/empire-accountants#breadcrumb",
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
          name: "Empire Accountants",
          item: "https://scaleseo.co/results/empire-accountants"
        }
      ]
    }
  ]
};

export default function EmpireAccountantsCaseStudy() {
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
                { name: "Empire Accountants" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>Empire Accountants SEO Case Study</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.summary}>
            <strong>
              How ongoing SEO helped an established Brisbane accounting firm
              improve commercial keyword rankings, double search visibility, and
              generate regular new client enquiries.
            </strong>
          </p>
          <div className={styles.tags}>
            {["SEO Campaign", "Technical SEO", "Content Strategy", "Local SEO", "Structured Data"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer" className={styles.visit}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            <span>Visit Empire Accountants &rarr;</span>
          </a>
        </div>
      </header>

      <div className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/empire-accountants-website.webp"
          alt="Empire Accountants website homepage, a Brisbane accounting and business advisory firm"
        />
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>Page 5 &rarr; 1</span>
          <span className={styles.statLabel}>Priority commercial keyword rankings</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>2&times;</span>
          <span className={styles.statLabel}>Search impressions and clicks</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>Weekly</span>
          <span className={styles.statLabel}>New client enquiries through the firm&rsquo;s online presence</span>
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
            Empire Accountants is an accounting and business advisory firm based
            in Brisbane, Australia, providing business accounting, tax,
            bookkeeping, SMSF, and advisory services.
          </p>
          <p>
            When I began working with Empire Accountants, the firm already had an
            established website and experienced accounting team. However, several
            commercially important services weren&rsquo;t achieving the organic
            search visibility they could.
          </p>
          <p>
            The objective was to strengthen the existing website, improve rankings
            for relevant accounting searches, and attract more qualified enquiries
            through Google.
          </p>

          <h2 id="challenge">The Challenge</h2>
          <p>The existing website presented several opportunities for improvement:</p>
          <ul>
            <li><strong>Commercial search visibility:</strong> Important accounting services needed stronger rankings for relevant Brisbane searches.</li>
            <li><strong>Service-page content:</strong> Several pages needed more detailed information addressing specific client needs and search intent.</li>
            <li><strong>Website architecture:</strong> Services, industry pages, and supporting articles needed clearer relationships and internal links.</li>
            <li><strong>Technical SEO:</strong> The growing website required improvements to its technical foundations and structured data.</li>
            <li><strong>Local visibility:</strong> The firm needed stronger relevance for accounting searches across Brisbane.</li>
          </ul>
          <p>
            The priority wasn&rsquo;t simply to increase website traffic. It was to
            connect Empire Accountants with businesses actively looking for the
            accounting and advisory services the firm provides.
          </p>

          <h2 id="strategy">The SEO Strategy &amp; Implementation</h2>
          <p>
            Rather than replacing the existing website, I focused on improving its
            structure, content, and technical foundations through an ongoing
            monthly SEO campaign.
          </p>
          <h3><span className={styles.num}>01</span>Commercial Service-Page Optimization</h3>
          <p>
            Expanded and improved pages targeting business accounting, tax
            accounting, tax planning, bookkeeping, SMSF services, and business
            advisory.
          </p>
          <p>
            Each page was developed around the services Empire provides, common
            client questions, and commercially relevant search intent.
          </p>
          <p>This gave important accounting searches more detailed and relevant landing pages.</p>
          <h3><span className={styles.num}>02</span>Website Architecture &amp; Internal Linking</h3>
          <p>
            Improved relationships between the firm&rsquo;s core accounting
            services, business solutions, industry pages, and educational
            resources.
          </p>
          <p>
            For example, industry-specific content for allied health,
            professional services, and wholesale businesses was connected to
            relevant accounting and advisory services.
          </p>
          <p>
            The objective was to create clearer navigation for visitors while
            helping search engines discover and understand related content.
          </p>
          <h3><span className={styles.num}>03</span>Accounting Content Strategy</h3>
          <p>
            Developed supporting articles addressing practical accounting and tax
            questions relevant to Australian business owners.
          </p>
          <p>
            Topics included SMSF administration, tax planning, business expenses,
            and financial decisions.
          </p>
          <p>
            Content was connected to relevant service pages through contextual
            internal links, allowing educational resources to support the
            firm&rsquo;s commercial search strategy.
          </p>
          <h3><span className={styles.num}>04</span>Technical SEO &amp; Local Search</h3>
          <p>
            Implemented technical and on-page improvements involving website
            structure, metadata, crawling and indexing, structured data,
            breadcrumbs, and internal linking.
          </p>
          <p>
            Business, service, article, and author information was also
            strengthened to better represent the firm&rsquo;s expertise and
            services.
          </p>
          <p>
            Local SEO work included Google Business Profile optimization and
            improving the website&rsquo;s relevance for accounting searches in
            Brisbane.
          </p>

          <h2 id="results">The Results</h2>
          <p>
            The ongoing SEO campaign has produced measurable improvements in
            Empire Accountants&rsquo; organic search performance.
          </p>
          <ul>
            <li><strong>Page 5 &rarr; Page 1</strong> &mdash; Priority commercial keyword rankings</li>
            <li><strong>2&times;</strong> &mdash; Search impressions and clicks</li>
            <li><strong>Weekly</strong> &mdash; New client enquiries through the firm&rsquo;s online presence</li>
          </ul>
          <p>
            Several target searches that previously had limited visibility have
            moved into first-page Google positions.
          </p>
          <p>
            Search impressions and clicks have also grown as the firm&rsquo;s
            service pages and supporting content gained greater organic
            visibility.
          </p>
          <p>
            Beyond search performance, Empire Accountants receives regular new
            client enquiries through its online presence, connecting improved
            visibility with opportunities for business growth.
          </p>
          <figure className={styles.figure}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/google-search-console-empire-accountants-data-case-study.png"
              alt="Google Search Console performance report for Empire Accountants showing growth in organic search impressions and clicks"
            />
            <figcaption>
              Google Search Console performance showing growth in organic search
              visibility during the ongoing SEO campaign.
            </figcaption>
          </figure>
          <p className={styles.note}>
            These results reflect the combined work completed throughout the
            engagement, rather than a single isolated SEO change.
          </p>

          <h2 id="different">What Made This Campaign Different?</h2>
          <p>
            One of the most important decisions was to prioritize the accounting
            services most relevant to Empire&rsquo;s business rather than focus
            exclusively on high-volume keywords.
          </p>
          <p>
            For example, improving pages for SMSF accounting, business advisory,
            and tax planning creates opportunities to reach prospective clients
            searching for specific professional services.
          </p>
          <p>
            Supporting articles then provide additional ways for business owners
            to discover the firm while researching related accounting questions.
          </p>
          <p>
            By improving the existing service pages, developing relevant content,
            and connecting those resources through internal links, the website
            became more comprehensive without requiring a complete rebuild.
          </p>
          <p>
            The campaign also demonstrates why ongoing SEO priorities need to
            evolve. As initial pages improve, the focus can shift toward
            additional services, industry opportunities, and content based on
            actual search performance.
          </p>
        </article>
      </div>

      <section className={styles.founder} id="by">
        <h2>SEO Strategy &amp; Implementation by Corbin Jensen</h2>
        <div className={styles.founderBody}>
          <p>
            This ongoing SEO campaign is managed directly by{" "}
            <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of Scale SEO.
          </p>
          <p>
            My work with Empire Accountants includes technical SEO, service-page
            optimization, content strategy, internal linking, structured data,
            local SEO, and ongoing search performance analysis.
          </p>
          <p>
            The project demonstrates how consistent, hands-on SEO can strengthen
            an established accounting firm&rsquo;s search presence and create new
            opportunities for qualified client enquiries.
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
