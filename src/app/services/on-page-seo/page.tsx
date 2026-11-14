import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/ContactSection";
import PinnedPoints, { type PinnedItem } from "../../components/PinnedPoints";
import CaseStudy, { type CaseCard } from "../../sections/home/CaseStudy";
import ServicesFaq, { type FaqItem } from "../ServicesFaq";
import t from "../svc.module.css";

const TITLE = "On-Page SEO Services in Canada | Scale SEO";
const DESCRIPTION =
  "Improve your website's content, keyword targeting, and internal linking with founder-led on-page SEO services from Scale SEO. Serving businesses across Canada.";
const URL = "https://scaleseo.co/services/on-page-seo";
const CONTACT_URL = "/contact";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services/on-page-seo" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

/* === Content ============================================================ */

const services: { title: string; body: string[] }[] = [
  {
    title: "Keyword Research & Search Intent",
    body: [
      "Before changing a page, we look at what your potential customers are searching for and what they expect to find.",
      "A person searching for “corporate tax accountant Calgary” has different needs than someone searching for “how to file corporate taxes.”",
      "One search may call for a service page, while the other may be better answered by an educational article.",
      "We identify relevant keywords, review competing pages, and match search terms to the most suitable pages on your website.",
    ],
  },
  {
    title: "Website Content Optimization",
    body: [
      "Your website should explain what your business offers without making visitors work to find the answer.",
      "We review existing content for clarity, accuracy, relevance, and usefulness.",
      "This may include rewriting service descriptions, improving introductions, answering common customer questions, and adding details that help visitors understand your services.",
      "We also look for opportunities to include real experience, examples, and business information that competing websites may be missing.",
      "The goal isn’t simply to add more words. It’s to make each important page more useful.",
    ],
  },
  {
    title: "Page Titles, Headings & Metadata",
    body: [
      "Page titles and headings help visitors and search engines understand your content.",
      "We improve title tags, meta descriptions, H1 headings, and supporting headings to make each page’s purpose clear.",
      "This includes using relevant keywords naturally and writing descriptions that accurately represent what visitors will find.",
      "We avoid keyword stuffing and unnecessary repetition.",
    ],
  },
  {
    title: "Internal Linking & Website Structure",
    body: [
      "Internal links connect related pages and help visitors find more information.",
      "For example, a plumbing company’s article about recurring drain blockages can link to its main blocked drains service page.",
      "This gives readers a useful next step while helping search engines discover and understand related content.",
      "We review how your pages connect, identify important pages with limited internal links, and improve navigation between services, locations, and supporting articles.",
    ],
  },
  {
    title: "Service Page & Landing Page Optimization",
    body: [
      "Your most important service pages should do more than describe what you offer.",
      "They should answer the questions potential customers have before contacting your business.",
      "We review how each page explains its services, who they’re for, where they’re available, and what makes the business worth considering.",
      "We also improve page layouts, calls to action, and supporting information where needed.",
      "This helps connect search visibility with the goal of generating qualified enquiries.",
    ],
  },
  {
    title: "Images & Supporting Page Elements",
    body: [
      "Images can make a service page easier to understand and provide useful context about the business.",
      "We improve descriptive image alt text, file naming, and image placement where appropriate.",
      "We also review supporting elements such as relevant structured data, page breadcrumbs, and links to business information.",
      "Technical issues affecting crawling, indexing, or website performance may be addressed as part of a broader SEO engagement.",
    ],
  },
];

const cases: CaseCard[] = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA",
    services: "Service Page Content / Keyword Targeting / Internal Linking",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 125, prefix: "+", suffix: "%" },
    metricLabel: "Search impressions in four months",
  },
  {
    href: "/results/empire-accountants",
    client: "Empire Accountants",
    services: "Service Descriptions / Page Structure / Internal Links",
    image: "/images/empire-accountants-cover.webp",
    metric: { from: 5, to: 1, prefix: "Page " },
    metricLabel: "Target rankings, up from page 5",
  },
];

const process: PinnedItem[] = [
  {
    title: "Review Your Website",
    body: [
      "We review your existing pages, search performance, keyword targeting, and website structure.",
      "This helps us identify pages that may need clearer content, better internal links, or more relevant search targeting.",
    ],
  },
  {
    title: "Build an Optimization Plan",
    body: [
      "We prioritize improvements based on your services, competition, existing search visibility, and business goals.",
      "Some pages may only need minor changes. Others may benefit from a complete rewrite or a more focused structure.",
    ],
  },
  {
    title: "Implement Improvements",
    body: [
      "We make the agreed changes directly to your website, including content, headings, metadata, internal links, and other relevant on-page elements.",
      "Every change is made with both search engines and potential customers in mind.",
    ],
  },
  {
    title: "Monitor & Refine",
    body: [
      "After implementation, we monitor search performance using tools such as Google Search Console.",
      "We review changes in impressions, clicks, rankings, and relevant enquiries where tracking is available.",
      "SEO takes time, and results vary depending on your website, competition, and the work required.",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is on-page SEO included in your monthly SEO services?",
    a: [
      "Yes. On-page optimization is a core part of our ongoing SEO services.",
      "Depending on your website, this may include improving existing pages, developing new service content, updating metadata, and strengthening internal links.",
    ],
    link: { href: "/services/seo", label: "Explore SEO Services →" },
  },
  {
    q: "What’s the difference between on-page SEO and technical SEO?",
    a: [
      "On-page SEO focuses on the content and elements of individual pages, such as headings, keywords, written information, and internal links.",
      "Technical SEO focuses more on how your website functions and how search engines access it. This includes crawling, indexing, website performance, and technical configuration.",
      "The two often overlap and work best together.",
    ],
  },
  {
    q: "How long does on-page SEO take to show results?",
    a: [
      "Some changes may be reflected in search results relatively quickly, while others can take several months to influence performance.",
      "Results depend on factors such as competition, website history, content quality, and the strength of competing pages.",
      "No specific ranking or traffic increase can be guaranteed.",
    ],
  },
  {
    q: "Do you need to rewrite every page on my website?",
    a: [
      "No. We review your existing content before recommending changes.",
      "Some pages may already perform well and need only minor updates. Others may benefit from more substantial improvements.",
      "We prioritize work based on the potential value to your business.",
    ],
  },
  {
    q: "Can on-page SEO help with AI search visibility?",
    a: [
      "Clear, useful, well-organized content can make it easier for search engines and AI-powered systems to understand your website.",
      "However, no on-page SEO technique can guarantee that platforms such as ChatGPT, Gemini, or Google AI Overviews will mention or recommend your business.",
      "Our approach focuses on accurate information, clear page structure, and helpful content.",
    ],
    link: { href: "/services/geo", label: "Explore AI Search Optimization →" },
  },
  {
    q: "How much do on-page SEO services cost?",
    a: [
      "On-page optimization is included in our ongoing SEO services, which start at $3,000 CAD per month plus applicable taxes.",
      "For businesses that need a specific set of improvements, we can also discuss a one-time project based on the work required.",
    ],
    link: { href: "/pricing", label: "View SEO Pricing →" },
  },
];

const Corner = () => (
  <svg className={t.corner} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1 1.5h7.5V9" />
  </svg>
);

/* === Schema — WebPage + Service + BreadcrumbList. FAQPage comes from
   <ServicesFaq>. === */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": "https://scaleseo.co/#website" },
      about: { "@id": `${URL}#service` },
      mainEntity: { "@id": `${URL}#service` },
      publisher: { "@id": "https://scaleseo.co/#organization" },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      inLanguage: "en-CA",
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "On-Page SEO Services",
      alternateName: ["On-Site SEO", "Website Content Optimization"],
      serviceType: "On-Page Search Engine Optimization",
      url: URL,
      description:
        "On-page SEO services for Canadian businesses, including keyword research and search intent, website content optimization, page titles and metadata, internal linking, service page optimization, and image optimization.",
      provider: { "@id": "https://scaleseo.co/#organization" },
      areaServed: { "@type": "Country", name: "Canada" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://scaleseo.co/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://scaleseo.co/services" },
        { "@type": "ListItem", position: 3, name: "On-Page SEO", item: URL },
      ],
    },
  ],
};

/* === Page =============================================================== */

export default function OnPageSeoPage() {
  return (
    <main className="v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* === HERO === */}
      <header className={t.hero}>
        <div className={t.crumbs}>
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "On-Page SEO" }]}
            schema={false}
          />
        </div>
        <h1 className={t.title}>On-Page SEO Services in Canada</h1>
      </header>

      {/* === INTRO — large statement === */}
      <section className={t.statementSection}>
        <div className={t.statement}>
          <p>
            Improve your website&rsquo;s content, structure, and keyword
            targeting so the right customers can find your business on Google.
          </p>
          <p>
            Scale SEO provides hands-on on-page SEO services for professional
            service firms, B2B companies, and other businesses across Canada.
          </p>
        </div>
        <div className={t.statementBottom}>
          <span className={t.statementNote}>
            <strong>Founder-led on-page SEO</strong>
            <br />
            Serving businesses across Canada
          </span>
          <Link href={CONTACT_URL} className={`${t.box} ${t.boxNavy}`}>
            <Corner />
            <span>Discuss Your SEO Project</span>
          </Link>
        </div>
      </section>

      {/* === WHAT IS — big H2, label left, text right === */}
      <section className={t.prioSection}>
        <h2 className={t.prioTitle}>What Is On-Page SEO?</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "26ch" }}>
            On-page SEO is the process of improving individual website pages so
            search engines can better understand their content and visitors can
            find the information they need.
          </p>
          <div className={t.prioBody}>
            <p>
              It includes keyword research, page titles, headings, written
              content, internal links, and other elements that help explain what
              a page is about.
            </p>
            <p>
              For example, an accounting firm may offer corporate tax,
              bookkeeping, and fractional CFO services. Each service has a
              different audience and search intent.
            </p>
            <p>
              Rather than placing everything on one general accounting page, we
              can create or improve dedicated service pages that clearly explain
              each offering.
            </p>
            <p>
              This helps search engines understand the website while making it
              easier for potential clients to find the right service.
            </p>
          </div>
        </div>
      </section>

      {/* === SERVICES — big heading + numbered ruled rows === */}
      <section className={t.listSection} style={{ padding: 0, borderTop: "1px solid var(--h-rule)" }}>
        <div className={t.listHead}>
          <h2 className={t.h2}>Our On-Page SEO Services</h2>
          <p className={`${t.lead} ${t.listIntro}`}>
            We focus on the pages that matter most to your business, improving
            how they target relevant searches, answer customer questions, and
            support enquiries.
          </p>
        </div>
        <div className={t.rows}>
          {services.map((item, i) => (
            <div key={item.title} className={t.row}>
              <div>
                <span className={t.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={t.h3}>{item.title}</h3>
              </div>
              <div className={`${t.body} ${t.dim}`}>
                {item.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === CLIENT PROJECTS — homepage case study row === */}
      <CaseStudy
        id="client-projects"
        label="Client Work"
        heading="On-Page SEO From Real Client Projects"
        aside="Our approach is based on work carried out for businesses across Canada and Australia."
        cards={cases}
      />
      <section className={t.prioSection} style={{ paddingTop: 0 }}>
        <div className={t.prioRow} style={{ marginTop: 0 }}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>
            Rather than applying the same checklist to every website, we look at
            how each business operates.
          </p>
          <div className={t.prioBody}>
            <p>
              We look at what customers are searching for and which pages offer
              the greatest opportunity.
            </p>
            <p>
              <strong>Jensen CPA</strong> is a Calgary accounting firm providing
              corporate tax, bookkeeping, and fractional CFO services. Our SEO
              work included improving service-page content, keyword targeting,
              internal linking, and supporting articles focused on business
              accounting topics. Within the first four months of the campaign,
              Google Search impressions increased by 125%, while organic clicks
              grew by 92%. These results reflect the broader SEO campaign,
              including on-page and technical improvements.
            </p>
            <p>
              <strong>Empire Accountants</strong> wanted to strengthen its
              visibility for business accounting services. We improved important
              service pages covering business tax, bookkeeping, and
              advisory-related services, with clearer service descriptions,
              relevant search terms, improved page structure, and stronger
              internal links between related accounting services. This formed
              part of an ongoing SEO strategy to help the firm reach more
              business owners through organic search.
            </p>
          </div>
        </div>
      </section>

      {/* === PROCESS — pinned scroll section === */}
      <PinnedPoints
        title="Our On-Page SEO Process"
        lead="We take a practical approach to improving your website, starting with the pages that have the greatest potential to support your business."
        items={process}
      />

      {/* === WHY — navy, label left, text right === */}
      <section className={t.prioSection} style={{ background: "var(--h-navy)", color: "var(--h-white)" }}>
        <h2 className={t.prioTitle}>Why Work With Scale SEO?</h2>
        <div className={t.prioRow}>
          <p className={t.prioLabel} style={{ maxWidth: "24ch" }}>
            Scale SEO is an independent SEO consultancy founded by Corbin Jensen
            in Calgary, Alberta.
          </p>
          <div className={t.prioBody}>
            <p>
              We work directly with businesses to improve their websites and
              build long-term organic search visibility.
            </p>
            <p>
              Every project is managed by{" "}
              <Link href="/corbin-jensen" className={t.inlineLink}>Corbin</Link>, from reviewing existing pages and
              researching keywords to implementing content and technical
              improvements.
            </p>
            <p>
              Our work is shaped by real client projects across professional
              services, accounting, construction, and local service industries.
            </p>
            <p>
              We focus on clear communication, practical recommendations, and
              improvements that support your business goals.
            </p>
            <Link href="/about" className={`${t.box} ${t.boxBlue}`} style={{ alignSelf: "flex-start", marginTop: 16, color: "var(--h-white)" }}>
              <Corner />
              <span>Learn More About Scale SEO</span>
            </Link>
          </div>
        </div>
      </section>

      <ServicesFaq items={faqs} title={<>Frequently Asked Questions</>} />

      <ContactSection
        heading="Improve Your Website's Search Visibility"
        lead="Your website should make it easy for potential customers to understand your services and find the information they're looking for. Whether you need to improve existing service pages, strengthen internal linking, or develop a clearer keyword strategy, Scale SEO can help."
        cta={{ href: CONTACT_URL, label: "Discuss Your SEO Project →" }}
      />
    </main>
  );
}
