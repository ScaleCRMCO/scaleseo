import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import v from "../../sections/v3/v3.module.css";

const TITLE = "On-Page SEO Services in Canada | Scale SEO";
const DESCRIPTION =
  "Improve your website's content, keyword targeting, and internal linking with founder-led on-page SEO services from Scale SEO. Serving businesses across Canada.";
const URL = "https://scaleseo.co/services/on-page-seo";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services/on-page-seo" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL },
};

/* === Content ============================================================ */

const services: { title: string; icon: string; body: string[] }[] = [
  {
    title: "Keyword Research & Search Intent",
    icon: "search",
    body: [
      "Before changing a page, we look at what your potential customers are searching for and what they expect to find.",
      "A person searching for “corporate tax accountant Calgary” has different needs than someone searching for “how to file corporate taxes.”",
      "One search may call for a service page, while the other may be better answered by an educational article.",
      "We identify relevant keywords, review competing pages, and match search terms to the most suitable pages on your website.",
    ],
  },
  {
    title: "Website Content Optimization",
    icon: "pen",
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
    icon: "page",
    body: [
      "Page titles and headings help visitors and search engines understand your content.",
      "We improve title tags, meta descriptions, H1 headings, and supporting headings to make each page’s purpose clear.",
      "This includes using relevant keywords naturally and writing descriptions that accurately represent what visitors will find.",
      "We avoid keyword stuffing and unnecessary repetition.",
    ],
  },
  {
    title: "Internal Linking & Website Structure",
    icon: "building",
    body: [
      "Internal links connect related pages and help visitors find more information.",
      "For example, a plumbing company’s article about recurring drain blockages can link to its main blocked drains service page.",
      "This gives readers a useful next step while helping search engines discover and understand related content.",
      "We review how your pages connect, identify important pages with limited internal links, and improve navigation between services, locations, and supporting articles.",
    ],
  },
  {
    title: "Service Page & Landing Page Optimization",
    icon: "chart",
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
    icon: "gear",
    body: [
      "Images can make a service page easier to understand and provide useful context about the business.",
      "We improve descriptive image alt text, file naming, and image placement where appropriate.",
      "We also review supporting elements such as relevant structured data, page breadcrumbs, and links to business information.",
      "Technical issues affecting crawling, indexing, or website performance may be addressed as part of a broader SEO engagement.",
    ],
  },
];

const cases = [
  {
    href: "/results/jensen-cpa",
    client: "Jensen CPA",
    services: "Service Page Content / Keyword Targeting / Internal Linking",
    image: "/images/jensen-cpa-cover.webp",
    metric: { to: 395, prefix: "+", suffix: "%" },
    metricLabel: "Google Search impressions",
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

const process = [
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
      "[Explore SEO Services](/services/seo)",
    ],
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
      "[Explore AI Search Optimization](/services/geo)",
    ],
  },
  {
    q: "How much do on-page SEO services cost?",
    a: [
      "On-page optimization is included in our ongoing SEO services, which start at $3,000 CAD per month plus applicable taxes.",
      "For businesses that need a specific set of improvements, we can also discuss a one-time project based on the work required.",
      "[View SEO Pricing](/pricing)",
    ],
  },
];


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

const CTA_LEAD = "Your website should make it easy for potential customers to understand your services and find the information they\u2019re looking for. Whether you need to improve existing service pages, strengthen internal linking, or develop a clearer keyword strategy, Scale SEO can help.";

/* === Page — shared service template ==================================== */
export default function OnPageSeoPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceTemplate
        crumb="On-Page SEO"
        title="On-Page SEO Services in Canada"
        heroLead={"Improve your website\u2019s content, structure, and keyword targeting so the right customers can find your business on Google."}
        heroImgScale={0.62}
        heroImage={{ src: "/images/web-development-tablets.webp", alt: "Two tablets showing a business website being edited" }}
        heroSecondary={{ href: "/contact", label: "Discuss Your SEO Project" }}
        statementLabel="On-page SEO"
        statement="Scale SEO provides hands-on on-page SEO services for professional service firms, B2B companies, and other businesses across Canada."
        statementNote="Founder-led on-page SEO · Serving businesses across Canada"
        explainer={{
          title: "What Is On-Page SEO?",
          lead: "On-page SEO is the process of improving individual website pages so search engines can better understand their content and visitors can find the information they need.",
          body: (
            <>
              <p>It includes keyword research, page titles, headings, written content, internal links, and other elements that help explain what a page is about.</p>
              <p>For example, an accounting firm may offer corporate tax, bookkeeping, and fractional CFO services. Each service has a different audience and search intent.</p>
              <p>Rather than placing everything on one general accounting page, we can create or improve dedicated service pages that clearly explain each offering.</p>
              <p>This helps search engines understand the website while making it easier for potential clients to find the right service.</p>
            </>
          ),
        }}
        included={{
          title: "Our On-Page SEO Services",
          lead: "We focus on the pages that matter most to your business, improving how they target relevant searches, answer customer questions, and support enquiries.",
          items: services,
          image: { src: "/images/toronto-skyline-bw.webp", alt: "Black and white downtown Toronto skyline" },
        }}
        cases={{
          title: "On-Page SEO From Real Client Projects",
          lead: "Our approach is based on work carried out for businesses across Canada and Australia. Rather than applying the same checklist to every website, we look at how each business operates, what customers are searching for, and which pages offer the greatest opportunity.",
          items: [
            { name: "Jensen CPA", tag: cases[0].services, stats: [{ from: 0, to: 395, prefix: "+", suffix: "%", label: "Google Search impressions" }, { from: 0, to: 205, prefix: "+", suffix: "%", label: "Organic clicks" }], body: "Jensen CPA is a Calgary accounting firm providing corporate tax, bookkeeping, and fractional CFO services. Our SEO work included improving service-page content, keyword targeting, internal linking, and supporting articles focused on business accounting topics. Comparing the first and latest 30-day periods (June\u2013November 2026), Google Search impressions increased by 395% and organic clicks by 205%. These results reflect the broader SEO campaign, including on-page and technical improvements.", href: "/results/jensen-cpa", cta: "View Jensen CPA Case Study", img: "/images/jensen-cpa-cover.webp" },
            { name: "Empire Accountants", tag: cases[1].services, stats: [{ from: 5, to: 1, prefix: "Page ", label: "Target rankings, up from page 5" }], body: "Empire Accountants wanted to strengthen its visibility for business accounting services. We improved important service pages covering business tax, bookkeeping, and advisory-related services, with clearer service descriptions, relevant search terms, improved page structure, and stronger internal links between related accounting services. This formed part of an ongoing SEO strategy to help the firm reach more business owners through organic search.", href: "/results/empire-accountants", cta: "View Empire Accountants Case Study", img: "/images/empire-accountants-cover.webp" },
          ],
        }}
        process={{
          title: "Our On-Page SEO Process",
          lead: "We take a practical approach to improving your website, starting with the pages that have the greatest potential to support your business.",
          items: process.map((x) => ({ title: x.title, body: x.body.join(" ") })),
        }}
        splits={[
          {
            title: "Why Work With Scale SEO?",
            lead: "Scale SEO is an independent SEO consultancy founded by Corbin Jensen in Calgary, Alberta.",
            body: (
              <>
                <p>We work directly with businesses to improve their websites and build long-term organic search visibility.</p>
                <p>Every project is managed by <Link href="/corbin-jensen">Corbin</Link>, from reviewing existing pages and researching keywords to implementing content and technical improvements.</p>
                <p>Our work is shaped by real client projects across professional services, accounting, construction, and local service industries.</p>
                <p>We focus on clear communication, practical recommendations, and improvements that support your business goals.</p>
              </>
            ),
            image: { src: "/images/corbin-portrait.webp", alt: "Corbin Jensen, founder of Scale SEO" },
            cta: { href: "/about", label: "Learn More About Scale SEO" },
          },
        ]}
        faqs={faqs}
        cta={{ title: "Improve Your Website\u2019s Search Visibility", lead: CTA_LEAD }}
      />
    </main>
  );
}
