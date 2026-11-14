import type { Metadata } from "next";
import Link from "next/link";
import { type FaqItem } from "../ServicesFaq";
import ServiceTemplate from "../ServiceTemplate";
import v from "../../sections/v3/v3.module.css";

export const metadata: Metadata = {
  title: { absolute: "Website Design & Development Calgary | Scale SEO" },
  description:
    "Website design and development in Calgary for accounting firms and established businesses. Custom websites, technical SEO, and ongoing improvements.",
  alternates: { canonical: "/services/web-development" },
};

const included: { title: string; body: string; icon: string }[] = [
  { title: "Website Design & User Experience", icon: "page", body: "Clean, responsive websites that communicate your services clearly and work across desktop, tablet, and mobile devices." },
  { title: "Service Pages & Site Architecture", icon: "building", body: "Dedicated pages for important services, organized into a logical structure that helps visitors and search engines navigate your website." },
  { title: "Technical SEO Foundations", icon: "gear", body: "Search-friendly navigation, metadata, canonical URLs, redirects, structured data, and other technical elements needed for a well-structured website." },
  { title: "Content Management & Development", icon: "pen", body: "Flexible website structures that support new services, content updates, and ongoing development without unnecessary redevelopment." },
  { title: "Conversion-Focused Design", icon: "chart", body: "Clear service information, enquiry forms, calls to action, and relevant trust signals that help visitors take the next step." },
];

const steps: { title: string; body: string }[] = [
  { title: "Plan", body: "We review your business, customers, services, and website requirements to establish a clear structure and project scope." },
  { title: "Design & Build", body: "We develop responsive layouts, service pages, and technical foundations with usability and search visibility in mind." },
  { title: "Test & Launch", body: "We review functionality, mobile usability, analytics, and essential technical SEO settings before launch." },
  { title: "Improve", body: "Websites can continue evolving through ongoing development, new content, and improvements informed by search performance." },
];

const faqs: FaqItem[] = [
  { q: "Can you improve my existing website?", a: ["Yes. We regularly improve established websites through design updates, new service pages, technical SEO fixes, and structural improvements. A complete rebuild isn\u2019t always necessary."] },
  { q: "Which website platforms do you work with?", a: ["Our experience includes Webflow and other content management systems, along with custom code and technical website implementations. We recommend platforms based on each project\u2019s requirements."] },
  {
    q: "Is SEO included with a new website?",
    a: [
      "New websites include foundational SEO considerations such as site architecture, metadata, internal linking, and search accessibility.",
      "Ongoing optimization and content development are available through our [monthly SEO services](/services/seo).",
    ],
  },
  { q: "Will I own my website?", a: ["Yes. You retain ownership of your website, content, accounts, and digital assets."] },
  { q: "Do you work with businesses outside Calgary?", a: ["Yes. Scale SEO is based in Calgary and works with accounting firms and established businesses across Canada and Australia."] },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://scaleseo.co/services/web-development#webpage",
      "url": "https://scaleseo.co/services/web-development",
      "name": "Web Development & Website Design in Calgary | Scale SEO",
      "description": "Website design and development in Calgary for accounting firms and established businesses. Custom websites, technical SEO, and ongoing improvements.",
      "isPartOf": {
        "@id": "https://scaleseo.co/#website"
      },
      "about": {
        "@id": "https://scaleseo.co/services/web-development#service"
      },
      "mainEntity": {
        "@id": "https://scaleseo.co/services/web-development#service"
      },
      "publisher": {
        "@id": "https://scaleseo.co/#organization"
      },
      "breadcrumb": {
        "@id": "https://scaleseo.co/services/web-development#breadcrumb"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "Service",
      "@id": "https://scaleseo.co/services/web-development#service",
      "name": "Web Development & Website Design",
      "serviceType": "Website Design and Development",
      "url": "https://scaleseo.co/services/web-development",
      "description": "Custom website design, development, redesigns, and improvements for established businesses in Calgary and across Canada. Services include Webflow development, custom-coded websites, responsive design, website architecture, and technical SEO foundations.",
      "mainEntityOfPage": {
        "@id": "https://scaleseo.co/services/web-development#webpage"
      },
      "provider": {
        "@id": "https://scaleseo.co/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Calgary",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Alberta"
          }
        },
        {
          "@type": "Country",
          "name": "Canada"
        }
      ],
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "6000",
        "priceCurrency": "CAD",
        "offerCount": 1,
        "description": "Custom website development projects start from $6,000 CAD plus GST. Final pricing depends on project scope and requirements."
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://scaleseo.co/services/web-development#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://scaleseo.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://scaleseo.co/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Web Development",
          "item": "https://scaleseo.co/services/web-development"
        }
      ]
    }
  ]
};

export default function WebDevelopmentPage() {
  return (
    <main className={`v2 ${v.page}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceTemplate
        crumb="Web Development"
        title="Website Design & Development in Calgary"
        heroLead="Scale SEO designs, builds, and improves websites for accounting firms, professional services, and established businesses across Canada and Australia."
        heroImage={{ src: "/images/web-development-tablets.webp", alt: "Two tablets showing a business website being designed and coded in a website builder" }}
        heroSecondary={{ href: "/results", label: "View Website Projects" }}
        statementLabel="Website development"
        statement="We combine website development with SEO expertise, creating websites that clearly communicate your services, make it easy for customers to enquire, and provide a strong foundation for organic search."
        statementNote="Professional websites built for visibility, usability, and growth."
        panels={{
          title: "New Websites & Ongoing Development",
          lead: "Whether you\u2019re launching a new website or improving an existing one, we focus on practical design, clear structure, and long-term usability.",
          items: [
            {
              title: "New Website Design & Development",
              strong: "Built around your business, not a template.",
              body: (
                <>
                  <p>We develop custom websites with responsive layouts, clear navigation, and dedicated pages for your most important services.</p>
                  <p>From the initial structure to technical SEO foundations, every element is planned to support your business and make future growth easier.</p>
                </>
              ),
            },
            {
              title: "Existing Website Development",
              strong: "Improve what you already have.",
              body: (
                <>
                  <p>Not every business needs a new website. We regularly improve established websites through new service pages, updated layouts, technical fixes, and structural improvements.</p>
                  <p>Development can also be included in an ongoing <Link href="/services/seo">SEO campaign</Link>, allowing your website to evolve alongside your search strategy.</p>
                </>
              ),
            },
          ],
        }}
        included={{
          title: "What\u2019s Included in Website Development?",
          lead: "Every project is scoped around your business, your services, and the website you already have.",
          items: included,
          image: { src: "/images/msv-plumbing-cover.webp", alt: "Matthew Main of MSV Plumbing Services, a Scale SEO website client in Brisbane" },
        }}
        cases={{
          title: "Selected Website Projects",
          lead: "Real websites developed and improved for businesses in Canada and Australia.",
          items: [
            { name: "Jensen CPA \u2014 Calgary, Canada", tag: "Website Redesign & SEO", stats: [], body: "Redeveloped the website for a Calgary accounting firm, improving its service-page structure, navigation, and technical SEO foundations.", href: "/results/jensen-cpa", cta: "View Project", img: "/images/jensen-cpa-cover.webp" },
            { name: "Empire Accountants \u2014 Brisbane, Australia", tag: "Ongoing Website Development & SEO", stats: [], body: "Improved website structure, service pages, internal linking, and technical SEO to support greater visibility for accounting and advisory services.", href: "/results/empire-accountants", cta: "View Project", img: "/images/empire-accountants-cover.webp" },
            { name: "MSV Plumbing Services \u2014 Brisbane, Australia", tag: "100-Page Website Development & Local SEO", stats: [{ from: 0, to: 100, prefix: "~", label: "Pages built for MSV Plumbing Services" }], body: "Built and expanded a large service-based website for a Brisbane plumbing company, including dedicated service and location pages.", href: "/results/msv-plumbing-services", cta: "View Project", img: "/images/msv-plumbing-cover.webp" },
          ],
        }}
        process={{ title: "Our Website Development Process", lead: "From planning to launch and beyond, each stage builds on the one before it.", items: steps }}
        pricing={{
          title: "Website Development Pricing",
          price: "$6,000 CAD",
          unit: "+ applicable GST",
          body: [
            "Website projects are quoted individually based on design requirements, page count, functionality, and technical complexity.",
            "We provide a clear scope before development begins. Hosting, ongoing maintenance, and monthly SEO services are available separately.",
          ],
          points: ["You retain ownership of your website, content, accounts, and data."],
          cta: "View Website & SEO Pricing",
        }}
        faqs={faqs}
        cta={{ title: "Build a Better Website", lead: "Whether you\u2019re planning a new website or looking to improve an existing one, we\u2019ll help you identify the right approach for your business. Tell us about your project, and we\u2019ll discuss the next steps." }}
      />
    </main>
  );
}
