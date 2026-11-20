import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import Signature from "../components/Signature";
import v from "../sections/v3/v3.module.css";
import { Btn, Corner as VCorner } from "../sections/v3/ui";
import styles from "./bio.module.css";

export const metadata: Metadata = {
  title: "Corbin Jensen | Founder & Lead Specialist, Scale SEO",
  description:
    "Corbin Jensen is an independent organic search specialist and founder of Scale SEO, based in Calgary, Alberta — engineering technical search architectures for accounting practices, B2B companies, and professional services across Canada.",
  alternates: { canonical: "/corbin-jensen" },
};

const BOOKING_URL = "https://cal.com/corbinjensen-scaleseo/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/corbin-jensen-seo/";

const expertise: [string, string][] = [
  ["Technical SEO", "Website crawling, indexing, structured data, internal linking, redirects, and technical improvements."],
  ["Content & Search Strategy", "Keyword research, service-page development, competitor analysis, and useful content built around customer search intent."],
  ["Local SEO", "Google Business Profile optimization, geographic targeting, local service pages, and local search visibility."],
  ["Website Development", "Building and improving websites, including their structure, content, navigation, and technical foundations."],
];

const work = [
  {
    name: "Jensen CPA — Calgary, Canada",
    body: [
      "Website redevelopment and SEO for a Calgary accounting firm, including technical improvements, service-page optimization, and content strategy.",
      "Comparing the first and latest 30-day periods (June\u2013November 2026), Google Search impressions increased by 396% and organic clicks increased by 205%.",
    ],
    href: "/results/jensen-cpa",
    cta: "View Jensen CPA Case Study",
  },
  {
    name: "Empire Accountants — Brisbane, Australia",
    body: [
      "Ongoing SEO and website improvements for an accounting and advisory firm, including service-page development, industry content, structured data, and technical optimization.",
    ],
    href: "/results/empire-accountants",
    cta: "View Empire Accountants Case Study",
  },
  {
    name: "MSV Plumbing Services — Brisbane, Australia",
    body: [
      "Website development and local SEO for a plumbing business, including a website of approximately 100 pages covering plumbing services and locations across Brisbane.",
    ],
    href: "/results/msv-plumbing-services",
    cta: "View MSV Plumbing Services Case Study",
  },
];

const articles = [
  {
    title: "How Much Does SEO Cost in Canada? 2026 Pricing Guide",
    body: "A practical guide to SEO pricing, monthly services, standalone audits, and the factors that affect costs.",
    href: "/blog/seo-cost-canada",
  },
  {
    title: "How Long Does SEO Take? A Realistic Timeline for Canadian Businesses",
    body: "An overview of realistic SEO timelines and the factors that influence organic search growth.",
    href: "/blog/how-long-does-seo-take",
  },
  {
    title: "How Accounting Firms Can Rank on Google in Canada",
    body: "A guide to service-page SEO, local search, website content, and technical improvements for Canadian accounting firms.",
    href: "/blog/how-accounting-firms-rank-on-google-in-canada",
  },
];


const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://scaleseo.co/corbin-jensen#profilepage",
      url: "https://scaleseo.co/corbin-jensen",
      name: "Corbin Jensen | Founder & SEO Specialist at Scale SEO",
      description: "Corbin Jensen is the founder and SEO specialist behind Scale SEO, working with professional service and B2B businesses across technical SEO, content strategy, local SEO and website optimization.",
      isPartOf: {
        "@id": "https://scaleseo.co/#website"
      },
      mainEntity: {
        "@id": "https://scaleseo.co/corbin-jensen#person"
      },
      breadcrumb: {
        "@id": "https://scaleseo.co/corbin-jensen#breadcrumb"
      },
      inLanguage: "en-CA"
    },
    {
      "@type": "Person",
      "@id": "https://scaleseo.co/corbin-jensen#person",
      name: "Corbin Jensen",
      jobTitle: "Founder & SEO Specialist",
      url: "https://scaleseo.co/corbin-jensen",
      image: "https://scaleseo.co/images/corbin-portrait.webp",
      description: "Corbin Jensen is an SEO specialist and the founder of Scale SEO, based in Calgary, Alberta. He works with professional service and B2B businesses across technical SEO, on-page SEO, content strategy, local SEO, website architecture and structured data.",
      worksFor: {
        "@id": "https://scaleseo.co/#organization"
      },
      workLocation: {
        "@type": "Place",
        name: "Calgary, Alberta, Canada"
      },
      knowsAbout: [
        "Search Engine Optimization",
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "SEO Content Strategy",
        "Website Architecture",
        "Internal Linking",
        "Structured Data",
        "SEO Audits",
        "B2B SEO",
        "Professional Services SEO",
        "Accounting Firm SEO"
      ],
      sameAs: [
        LINKEDIN_URL
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/corbin-jensen#breadcrumb",
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
          name: "About",
          item: "https://scaleseo.co/about"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Corbin Jensen",
          item: "https://scaleseo.co/corbin-jensen"
        }
      ]
    }
  ]
};

export default function CorbinJensenPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />

      {/* Hero — Bilberrry: side label, name, two-column intro, signature */}
      <header className={styles.hero}>
        <div className={styles.side}>
          <div className={styles.crumbs}>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Corbin Jensen" }]} schema={false} />
          </div>
          <span className={styles.sideLabel}>Founder bio</span>
        </div>
        <div>
          <h1 className={styles.name}>Corbin Jensen</h1>
          <p className={styles.role}>Founder &amp; SEO Specialist at Scale SEO</p>
          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.lead}>Corbin Jensen is the founder of Scale SEO, an independent SEO consultancy based in Calgary, Alberta.</p>
              <p>He works directly with professional service and B2B businesses across Canada and internationally, helping them improve their Google Search visibility through technical SEO, content strategy, website development, and ongoing optimization.</p>
            </div>
            <div className={styles.col}>
              <p>His experience includes working with accounting firms, consultants, contractors, and local service businesses in Canadian and Australian markets.</p>
              <p className={styles.location}>Calgary, Alberta &middot; Serving Canada &amp; International Clients</p>
            </div>
          </div>
          <div className={styles.btns}>
            <Btn href="/contact" tone="navy">Contact Corbin</Btn>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={v.textLink}>LinkedIn <VCorner /></a>
          </div>
        </div>
      </header>

      {/* Portrait card + background — Bilberrry leadership card */}
      <section className={styles.sec}>
        <div className={styles.side}><span className={styles.sideLabel}>Background</span></div>
        <div className={styles.bgGrid}>
          <figure className={styles.card}>
            <div className={styles.cardImg}>
              <Image src="/images/corbin-portrait.webp" alt="Corbin Jensen, founder and SEO specialist at Scale SEO" fill priority sizes="(max-width: 900px) 90vw, 360px" />
            </div>
            <figcaption>
              <span>Founder &amp; SEO Specialist</span>
              <strong>Corbin Jensen</strong>
            </figcaption>
          </figure>
          <div className={styles.col}>
            <h2 className={styles.h2}>Background &amp; SEO Experience</h2>
            <p className={styles.lead}>Corbin developed his SEO experience through hands-on work improving business websites, researching search opportunities, and implementing changes directly.</p>
            <p>Before establishing Scale SEO in Calgary in 2025, he worked with businesses in Australia on local SEO, website development, and organic search strategy.</p>
            <p>Today, his work focuses primarily on professional service and B2B businesses, particularly accounting and advisory firms.</p>
            <p>Unlike a traditional agency account manager, Corbin remains directly involved in each client&rsquo;s SEO strategy, website improvements, and performance analysis.</p>
            <Link href="/about" className={v.textLink}>Learn More About Scale SEO <VCorner /></Link>
          </div>
        </div>
      </section>

      {/* Expertise — ruled numbered rows */}
      <section className={styles.sec}>
        <div className={styles.side}><span className={styles.sideLabel}>Areas of expertise</span></div>
        <div>
          <h2 className={styles.h2}>Areas of Expertise</h2>
          <p className={styles.lead}>Corbin&rsquo;s work covers the technical, content, and website development elements of SEO.</p>
          <ol className={styles.rows}>
            {expertise.map(([title, body], i) => (
              <li key={title}>
                <span className={styles.num}>/ 0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <p className={styles.note}>His approach combines SEO research with direct implementation, helping businesses move beyond recommendations and make practical improvements to their websites.</p>
        </div>
      </section>

      {/* Approach — navy, in Corbin's words, signed */}
      <section className={`${v.navy} ${styles.navy}`} data-nav="dark">
        <div className={styles.inner}>
          <div className={styles.side}><span className={styles.sideLabel}>In Corbin&rsquo;s words</span></div>
          <div>
            <h2 className={styles.h2}>My Approach to SEO</h2>
            <div className={styles.cols}>
              <div className={styles.col}>
                <p className={styles.lead}>I believe good SEO starts with understanding the business, not simply creating a list of keywords.</p>
                <p>Before making changes, I look at which services matter most, how potential customers search for them, and where the website has opportunities to improve.</p>
              </div>
              <div className={styles.col}>
                <p>Sometimes that means developing new service pages or content. Other times, it means improving existing pages, fixing technical problems, or making the website easier to navigate.</p>
                <p>I prefer working directly on client websites rather than producing recommendations that never get implemented.</p>
                <p>The goal is to improve visibility for searches that are relevant to the business and create more opportunities for qualified enquiries.</p>
                <div className={styles.sign}>
                  <Signature className={`${styles.signature} ${styles.signLight}`} />
                  <span className={styles.signName}>Corbin Jensen</span>
                  <span className={styles.signRole}>Founder, Scale SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client work */}
      <section className={styles.sec}>
        <div className={styles.side}><span className={styles.sideLabel}>Selected client work</span></div>
        <div>
          <h2 className={styles.h2}>Selected Client Work</h2>
          <p className={styles.lead}>Corbin has worked on SEO and website development projects for businesses across Canada and Australia.</p>
          <div className={styles.work}>
            {work.map((w) => (
              <Link key={w.href} href={w.href} className={styles.workCard}>
                <h3>{w.name}</h3>
                {w.body.map((p) => <p key={p}>{p}</p>)}
                <span className={v.textLink}>{w.cta} <VCorner /></span>
              </Link>
            ))}
          </div>
          <div className={styles.btns}><Btn href="/results" tone="navy">View All Client Projects</Btn></div>
        </div>
      </section>

      {/* Articles — Bilberrry related list */}
      <section className={styles.sec}>
        <div className={styles.side}><span className={styles.sideLabel}>Articles</span></div>
        <div>
          <h2 className={styles.h2}>Articles by Corbin Jensen</h2>
          <p className={styles.lead}>Corbin writes about SEO strategy, technical SEO, search visibility, and the practical application of organic search for Canadian businesses.</p>
          <p className={styles.muted}>His articles draw on industry research, Google documentation, search performance data, and firsthand experience working on client websites.</p>
          <ul className={styles.articles}>
            {articles.map((a) => (
              <li key={a.href}>
                <Link href={a.href}>
                  <strong>{a.title} <VCorner /></strong>
                  <span>{a.body}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.btns}><Btn href="/blog" tone="navy">View All SEO Articles</Btn></div>
        </div>
      </section>

      <section className={`${v.white} ${v.ctaSec}`}>
        <div className={v.wrap}>
          <div className={v.ctaBox} data-nav="dark">
            <h2 className={v.h2}>Work Directly With Corbin</h2>
            <p className={v.p}>As the founder of Scale SEO, Corbin works directly with clients on SEO strategy, technical improvements, website development, and ongoing search performance. If you&rsquo;re considering SEO for your business, you can discuss your website, goals, and opportunities directly with him.</p>
            <Btn href={BOOKING_URL} external>Book an SEO Consultation</Btn>
          </div>
        </div>
      </section>
    </main>
  );
}
