import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import styles from "../cs.module.css";

export const metadata: Metadata = {
  title: { absolute: "MSV Plumbing SEO & Website Case Study | Scale SEO" },
  description:
    "How Scale SEO built a 100-page website and helped MSV Plumbing Services generate weekly enquiries through ongoing SEO in Brisbane.",
  alternates: { canonical: "/results/msv-plumbing-services" },
};

const CLIENT_URL = "https://msvplumbingservices.com.au/";
const PAGE = "https://scaleseo.co/results/msv-plumbing-services";

const toc = [
  ["overview", "Overview"],
  ["challenge", "The Challenge"],
  ["strategy", "The SEO Strategy & Implementation"],
  ["results", "The Results"],
  ["different", "What Made This Project Different?"],
  ["by", "Website & SEO Strategy by Corbin Jensen"],
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "MSV Plumbing SEO & Website Case Study | Scale SEO",
      description:
        "How Scale SEO built a 100-page website and helped MSV Plumbing Services generate weekly enquiries through ongoing SEO in Brisbane.",
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      mainEntity: { "@id": `${PAGE}#case-study` },
      breadcrumb: { "@id": `${PAGE}#breadcrumb` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Article",
      "@id": `${PAGE}#case-study`,
      url: PAGE,
      headline: "MSV Plumbing Services SEO & Website Case Study",
      description:
        "How website development and ongoing SEO helped a small Brisbane plumbing business establish its online presence and generate weekly enquiries for residential plumbing services.",
      image: "https://scaleseo.co/images/msv-screenshot.png",
      mainEntityOfPage: { "@id": `${PAGE}#webpage` },
      author: { "@id": "https://scaleseo.co/corbin-jensen#person" },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      about: { "@type": "Organization", name: "MSV Plumbing Services", url: CLIENT_URL },
      articleSection: "SEO Case Studies",
      keywords: [
        "plumber SEO",
        "local SEO Brisbane",
        "plumbing website development",
        "service business SEO",
        "AI search optimization",
        "SEO case study",
      ],
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Results", item: "https://scaleseo.co/results" },
        { "@type": "ListItem", position: 3, name: "MSV Plumbing Services", item: PAGE },
      ],
    },
  ],
};

export default function MsvPlumbingCaseStudy() {
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
                { name: "MSV Plumbing Services" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>MSV Plumbing Services SEO &amp; Website Case Study</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.summary}>
            <strong>
              How website development and ongoing SEO helped a small Brisbane
              plumbing business establish its online presence and generate weekly
              enquiries for residential plumbing services.
            </strong>
          </p>
          <div className={styles.tags}>
            {["Website Design & Development", "Monthly SEO Campaign", "Local SEO", "AI Search Optimization", "Technical SEO"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer" className={styles.visit}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            <span>Visit MSV Plumbing Services &rarr;</span>
          </a>
        </div>
      </header>

      <div className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/msv-screenshot.png"
          alt="MSV Plumbing Services website homepage, a Brisbane plumbing business"
        />
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>~100</span>
          <span className={styles.statLabel}>Website pages covering services, service areas, and resources</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>Weekly</span>
          <span className={styles.statLabel}>Customer calls for core plumbing services</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>~6 months</span>
          <span className={styles.statLabel}>From website launch and ongoing SEO</span>
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
            MSV Plumbing Services is a locally operated plumbing business founded
            by licensed plumber Matthew Main, providing residential and commercial
            plumbing services across Brisbane, Australia.
          </p>
          <p>
            When I began working with Matthew, he was operating independently and
            relied primarily on word-of-mouth referrals. Despite his plumbing
            experience, the business had limited online visibility and
            wasn&rsquo;t generating a consistent flow of residential enquiries
            through its website.
          </p>
          <p>
            The objective was to build a professional website, establish a
            stronger presence in Brisbane&rsquo;s competitive plumbing market, and
            create a reliable foundation for attracting new customers through
            organic search.
          </p>

          <h2 id="challenge">The Challenge</h2>
          <p>
            MSV Plumbing Services needed to compete online against established
            Brisbane plumbing companies with larger websites, marketing budgets,
            and existing search visibility.
          </p>
          <p>The project presented several challenges:</p>
          <ul>
            <li><strong>Limited online lead generation:</strong> New residential jobs came primarily through referrals rather than Google searches.</li>
            <li><strong>Website development:</strong> The business needed a professional website that clearly presented its services, experience, and service areas.</li>
            <li><strong>Competitive local search:</strong> Important searches such as blocked drains, emergency plumbing, and hot water repairs were already highly competitive.</li>
            <li><strong>Service-area visibility:</strong> The business needed relevant pages for customers searching across Brisbane and surrounding suburbs.</li>
            <li><strong>Business credibility:</strong> The website needed to communicate Matthew&rsquo;s experience, licensing, and direct involvement in the business.</li>
          </ul>
          <p>
            The goal wasn&rsquo;t simply to build a larger website. It was to
            create a digital presence that could help a small plumbing business
            compete for customers searching for local plumbing services.
          </p>

          <h2 id="strategy">The SEO Strategy &amp; Implementation</h2>
          <p>
            I designed and developed a website of approximately 100 pages,
            supported by ongoing SEO management and AI search optimization.
          </p>
          <p>
            The work focused on creating a useful website structure around
            MSV&rsquo;s plumbing services, geographic coverage, and business
            expertise.
          </p>
          <h3><span className={styles.num}>01</span>Website Design &amp; Development</h3>
          <p>
            Built a responsive website with dedicated service pages, clear
            navigation, mobile-friendly layouts, and prominent contact options.
          </p>
          <p>
            The website was structured around MSV&rsquo;s main services, including
            blocked drains, hot water systems, emergency plumbing, leak detection,
            and general plumbing repairs.
          </p>
          <p>
            The design also emphasized Matthew&rsquo;s direct involvement,
            licensing, and the benefits of working with a smaller local plumbing
            team.
          </p>
          <h3><span className={styles.num}>02</span>Local SEO &amp; Service-Area Pages</h3>
          <p>
            Developed a network of service and location pages targeting Brisbane
            and surrounding suburbs.
          </p>
          <p>
            Rather than relying on one generic plumbing page, the website was
            organized around individual services and geographic areas, helping
            customers find information relevant to their plumbing needs.
          </p>
          <p>
            Regional hubs and suburb pages were connected through internal links
            to the main plumbing services and relevant supporting content.
          </p>
          <p>
            Ongoing local SEO also included Google Business Profile optimization,
            local keyword targeting, and search performance monitoring.
          </p>
          <h3><span className={styles.num}>03</span>Technical SEO &amp; Content Strategy</h3>
          <p>
            Implemented technical SEO foundations, including page targeting,
            metadata, internal linking, structured data, breadcrumbs, and search
            indexing improvements.
          </p>
          <p>
            Developed and optimized service content addressing common plumbing
            problems, repair options, and questions customers ask before
            contacting a plumber.
          </p>
          <p>
            Supporting articles covered topics such as hidden water leaks, low
            water pressure, blocked drains, and common plumbing issues.
          </p>
          <p>
            The objective was to make the website useful to potential customers
            while building stronger relevance around MSV&rsquo;s core plumbing
            services.
          </p>
          <h3><span className={styles.num}>04</span>AI Search Optimization</h3>
          <p>
            Structured business and service information to make MSV Plumbing
            Services easier for search engines and AI-assisted search systems to
            interpret.
          </p>
          <p>
            This included clear service descriptions, consistent business details,
            structured data, information about Matthew Main, and a dedicated
            business information resource.
          </p>
          <p>
            The work was designed to support accurate discovery and representation
            across traditional and AI-assisted search experiences.
          </p>
          <p className={styles.note}>
            AI search visibility remains an evolving area, and these improvements
            do not guarantee citations or recommendations from AI systems.
          </p>

          <h2 id="results">The Results</h2>
          <p>
            Within approximately six months of launching the website and beginning
            ongoing SEO, MSV Plumbing Services had established a substantially
            stronger online presence.
          </p>
          <ul>
            <li><strong>Approximately 100 pages</strong> &mdash; A complete website covering plumbing services, Brisbane service areas, and supporting resources.</li>
            <li><strong>Weekly customer calls</strong> &mdash; Regular enquiries for core plumbing services, including blocked drains and hot water systems.</li>
            <li><strong>New residential opportunities</strong> &mdash; An additional source of enquiries beyond the word-of-mouth referrals the business previously relied on.</li>
          </ul>
          <p>
            The website now provides customers with dedicated information about
            MSV&rsquo;s services and an easier way to contact the business when
            plumbing problems arise.
          </p>
          <p>
            For Matthew, the value extends beyond website traffic. The business has
            developed a digital presence that supports enquiries for the services
            he wants to provide.
          </p>

          <h2 id="different">What Made This Project Different?</h2>
          <p>
            One of the most important decisions was to build the website around
            how Brisbane customers actually search for plumbing services.
          </p>
          <p>
            Someone dealing with a blocked drain has different questions and
            priorities from someone comparing hot water systems or looking for a
            plumber in their suburb.
          </p>
          <p>
            Instead of sending every visitor to one broad plumbing page, the
            website provides dedicated information for different services and
            geographic areas.
          </p>
          <p>
            The project also focused on communicating what makes MSV different from
            larger plumbing companies.
          </p>
          <p>
            Matthew remains directly involved in the business, and customer calls
            go directly to him. The website was developed to reflect that
            personal, locally operated service rather than presenting MSV as a
            large national plumbing brand.
          </p>
          <p>
            Combined with ongoing technical SEO, content improvements, and local
            search optimization, this approach helped establish a more useful
            online presence for both customers and search engines.
          </p>
          <p>
            The project demonstrates how website development and ongoing SEO can
            work together to support lead generation for a smaller service
            business competing in an established local market.
          </p>
        </article>
      </div>

      <section className={styles.founder} id="by">
        <h2>Website &amp; SEO Strategy by Corbin Jensen</h2>
        <div className={styles.founderBody}>
          <p>
            This project was managed directly by{" "}
            <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of Scale SEO.
          </p>
          <p>
            My work included website design and development, local SEO strategy,
            technical implementation, service-area content, structured data, AI
            search optimization, and ongoing search performance analysis.
          </p>
          <p>
            MSV Plumbing Services is an example of how a small business can
            establish a stronger online presence through a website built around
            its actual services, customers, and geographic market.
          </p>
          <div className={styles.founderLinks}>
            <Link href="/services/seo" className={styles.linkBlue}>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>Explore Monthly SEO Services &rarr;</span>
            </Link>
            <Link href="/services/web-development" className={styles.linkGrey}>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>Explore Web Development &rarr;</span>
            </Link>
            <Link href="/services/geo" className={styles.linkGrey}>
              <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
              <span>Explore AI Search Optimization &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
