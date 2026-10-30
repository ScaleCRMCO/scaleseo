import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import styles from "../cs.module.css";

export const metadata: Metadata = {
  title: "Kinsmen Consulting SEO Case Study | Scale SEO",
  description:
    "How ongoing SEO and high-value service-page development helped a Calgary concrete contractor secure approximately $500,000 in new projects over several months.",
  alternates: { canonical: "/results/kinsmen-consulting" },
};

const CLIENT_URL = "https://www.kinsmenconsulting.ca/";

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
      "@id": "https://scaleseo.co/results/kinsmen-consulting#webpage",
      url: "https://scaleseo.co/results/kinsmen-consulting",
      name: "Kinsmen Consulting SEO Case Study | Scale SEO",
      description: "See how ongoing SEO and service-page development helped Kinsmen Consulting secure approximately $500,000 in new concrete projects over several months.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#case-study"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Article",
      "@id": "https://scaleseo.co/results/kinsmen-consulting#case-study",
      url: "https://scaleseo.co/results/kinsmen-consulting",
      headline: "Kinsmen Consulting SEO Case Study",
      description: "How ongoing SEO and high-value service-page development helped a Calgary concrete contractor secure approximately $500,000 in new projects over several months.",
      mainEntityOfPage: {
        "@id": "https://scaleseo.co/results/kinsmen-consulting#webpage"
      },
      author: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      publisher: {
        "@id": "https://scaleseo.co/#organization"
      },
      about: {
        "@type": "Organization",
        name: "Kinsmen Consulting Ltd.",
        url: "https://www.kinsmenconsulting.ca/"
      },
      articleSection: "SEO Case Studies",
      keywords: [
        "SEO case study",
        "Calgary SEO case study",
        "construction SEO",
        "contractor SEO",
        "local SEO",
        "SEO website development"
      ],
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/results/kinsmen-consulting#breadcrumb",
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
          name: "Kinsmen Consulting",
          item: "https://scaleseo.co/results/kinsmen-consulting"
        }
      ]
    }
  ]
};

export default function KinsmenConsultingCaseStudy() {
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
                { name: "Kinsmen Consulting" },
              ]}
              schema={false}
            />
          </div>
          <h1 className={styles.title}>Kinsmen Consulting SEO Case Study</h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.summary}>
            <strong>
              How ongoing SEO and high-value service-page development helped a
              Calgary concrete contractor secure approximately $500,000 in new
              projects over several months.
            </strong>
          </p>
          <div className={styles.tags}>
            {["Monthly SEO Campaign", "Service-Page Development", "Local SEO", "Technical SEO", "Content Strategy"].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <a href={CLIENT_URL} target="_blank" rel="nofollow noopener noreferrer" className={styles.visit}>
            <svg className={styles.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1 1.5h7.5V9" /></svg>
            <span>Visit Kinsmen Consulting &rarr;</span>
          </a>
        </div>
      </header>

      <div className={styles.band}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kinsmen-hero.jpg"
          alt="Kinsmen Consulting website homepage, a Calgary concrete contractor"
        />
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>$500K</span>
          <span className={styles.statLabel}>Revenue generated from new jobs</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>30+ yrs</span>
          <span className={styles.statLabel}>Industry experience behind the team</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>Calgary</span>
          <span className={styles.statLabel}>Plus Rocky View County and Foothills County</span>
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
            Kinsmen Consulting is a family-owned concrete contractor based in
            Calgary, Alberta, providing residential and commercial concrete
            services across Calgary and surrounding communities.
          </p>
          <p>
            When I began working with Kinsmen, the company already had an
            established website and over 30 years of industry experience behind
            its team. However, the website had received little dedicated SEO
            work and wasn&rsquo;t fully targeting the high-value services the
            company wanted to grow.
          </p>
          <p>
            The objective was to improve visibility for commercially relevant
            concrete searches, develop dedicated service pages, and turn the
            existing website into a stronger source of qualified project
            enquiries.
          </p>

          <h2 id="challenge">The Challenge</h2>
          <p>
            Kinsmen operates in a competitive Calgary construction market, where
            attracting the right projects matters more than generating large
            amounts of general website traffic.
          </p>
          <p>The existing website presented several opportunities:</p>
          <ul>
            <li><strong>Limited service-page targeting:</strong> High-value concrete services needed dedicated landing pages to compete for relevant searches.</li>
            <li><strong>Competitive local searches:</strong> Established Calgary contractors were already targeting broad concrete-related keywords.</li>
            <li><strong>Different customer needs:</strong> Residential homeowners and commercial project managers search for different services and require different information.</li>
            <li><strong>Website structure:</strong> The site needed clearer connections between its services, project types, and geographic coverage.</li>
          </ul>
          <p>
            The priority was to attract enquiries for profitable concrete projects
            rather than simply increase website visits.
          </p>

          <h2 id="strategy">The SEO Strategy &amp; Implementation</h2>
          <p>
            I focused on expanding and optimizing Kinsmen&rsquo;s existing website
            around the services most relevant to its business.
          </p>
          <h3><span className={styles.num}>01</span>High-Value Service-Page Development</h3>
          <p>
            Developed and optimized dedicated landing pages targeting concrete
            services with meaningful commercial potential.
          </p>
          <p>
            These included sport courts, concrete driveways, commercial concrete,
            retaining walls, sidewalks, and other specialized construction
            services.
          </p>
          <p>
            For example, rather than relying on a general concrete services page,
            the website gained a dedicated sport court page targeting customers
            looking for basketball, pickleball, and multi-use court construction
            in Calgary.
          </p>
          <p>
            This allowed individual services to compete for more specific
            searches while giving potential customers information relevant to
            their projects.
          </p>
          <h3><span className={styles.num}>02</span>Residential &amp; Commercial SEO</h3>
          <p>
            Improved the website&rsquo;s structure to distinguish between
            residential concrete work and larger commercial projects.
          </p>
          <p>
            Residential pages focused on services such as driveways, patios, and
            backyard sport courts, while commercial content addressed structural
            slabs, site preparation, and specialized concrete construction.
          </p>
          <p>
            This helped the website communicate Kinsmen&rsquo;s capabilities to
            different types of customers without relying on one broad service
            description.
          </p>
          <h3><span className={styles.num}>03</span>Technical SEO &amp; Internal Linking</h3>
          <p>
            Improved on-page targeting, metadata, internal linking, structured
            data, and the relationships between service pages.
          </p>
          <p>
            The objective was to make important pages easier to discover and
            navigate while building a clearer website structure around the
            company&rsquo;s concrete services.
          </p>
          <p>
            Ongoing search performance analysis helped identify pages that needed
            further improvement.
          </p>
          <h3><span className={styles.num}>04</span>Local SEO &amp; Content Strategy</h3>
          <p>
            Strengthened the website&rsquo;s relevance for Calgary and surrounding
            markets, including Rocky View County and Foothills County.
          </p>
          <p>
            Supporting content addressed questions customers may research before
            requesting a quote, including concrete driveway costs and backyard
            sport court planning.
          </p>
          <p>
            This created additional opportunities to reach potential customers
            during the research stage and connect them with relevant service
            pages.
          </p>

          <h2 id="results">The Results</h2>
          <p>
            Over several months of SEO and website improvements, Kinsmen
            Consulting secured substantial new concrete projects.
          </p>
          <ul>
            <li><strong>Approximately $500,000</strong> &mdash; Revenue associated with new projects</li>
          </ul>
          <p>
            The company secured a number of significant residential and
            commercial concrete jobs during the campaign period, representing
            approximately $500,000 in project revenue.
          </p>
          <p>
            The campaign focused on generating enquiries for services with higher
            project values rather than maximizing traffic from broad
            construction-related searches.
          </p>
          <p>
            The results demonstrate the commercial potential of connecting
            specific search demand with relevant service pages and an established
            contractor&rsquo;s capabilities.
          </p>

          <h2 id="different">What Made This Campaign Different?</h2>
          <p>
            The most important decision was to prioritize the types of concrete
            projects Kinsmen wanted to win.
          </p>
          <p>
            For a contractor, one substantial sport court or commercial concrete
            project can represent more business value than many smaller
            enquiries.
          </p>
          <p>
            That influenced the keyword research, service-page development, and
            overall website structure.
          </p>
          <p>
            Instead of creating large numbers of generic location pages or
            focusing exclusively on broad searches such as &ldquo;concrete
            contractor Calgary,&rdquo; the campaign developed dedicated content
            around individual services and project requirements.
          </p>
          <p>
            The existing website became a more useful resource for prospective
            customers while giving Kinsmen more opportunities to appear for
            commercially relevant searches.
          </p>
          <p>
            This project demonstrates how ongoing SEO can support an established
            construction business without requiring a complete website rebuild.
          </p>
        </article>
      </div>

      <section className={styles.founder} id="by">
        <h2>SEO Strategy &amp; Implementation by Corbin Jensen</h2>
        <div className={styles.founderBody}>
          <p>
            The Kinsmen Consulting SEO campaign is managed directly by{" "}
            <Link href="/corbin-jensen">Corbin Jensen</Link>, founder of Scale SEO.
          </p>
          <p>
            My work has included keyword research, service-page development,
            technical SEO, local SEO, content strategy, internal linking, website
            improvements, and ongoing search performance analysis.
          </p>
          <p>
            The project demonstrates how targeted SEO can connect an established
            contractor with customers searching for its most valuable services.
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
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
