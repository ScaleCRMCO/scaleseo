import type { Metadata } from "next";
import ServicePage, { Accent, ProofBadge } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "SEO Services | Technical, On-Page & Local SEO | Scale SEO",
  description:
    "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic. Handled directly by one specialist, based in Calgary.",
  alternates: { canonical: "/services/seo" },
};

const included = [
  {
    num: "01",
    name: "Technical SEO Audit",
    desc: "Site speed, crawlability, indexing, and schema markup — the foundation both search engines and AI crawlers rely on. Full optimization capabilities across core corporate CMS platforms including Webflow, WordPress, and custom JavaScript architectures.",
  },
  {
    num: "02",
    name: "On-Page Optimization",
    desc: "Titles, headers, and internal linking rebuilt around the terms your buyers actually search — so the right pages rank for the right terms.",
  },
  {
    num: "03",
    name: "Local SEO & Alberta Map Pack Optimization",
    desc: "Citations, reviews, and location pages built to win the map pack in every city you actually serve.",
  },
  {
    num: "04",
    name: "Content Strategy",
    desc: "Content built around real search intent and buyer questions, not filler — the kind that ranks and actually converts.",
  },
  {
    num: "05",
    name: "Site Architecture & Crawl Health",
    desc: "Fixing broken structure, redirects, and duplicate content that silently caps how well the rest of the site can rank. Clean semantic structure ensures your site's codebase is fully optimized for Generative Engine Optimization (GEO), allowing LLM crawlers like ChatGPT, Perplexity, and Google Gemini to accurately scrape and cite your business.",
  },
  {
    num: "06",
    name: "Reporting Tied to Revenue",
    desc: "Monthly, plain-English reporting on what moved and what it means for leads — not vanity ranking screenshots.",
  },
];

export default function SeoServicePage() {
  return (
    <ServicePage
      schema={{
        name: "SEO Services",
        description:
          "Technical, on-page, and local SEO built to improve real website performance — faster sites, better rankings, and more qualified organic traffic.",
        serviceType: "Search Engine Optimization",
        url: "https://scaleseo.co/services/seo",
      }}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "SEO" },
      ]}
      eyebrow="Services / SEO"
      title={
        <>
          Freelance SEO Specialist Calgary{" "}
          <Accent>| Search Optimization for Professional Services</Accent>
        </>
      }
      sub="Technical fixes, on-page structure, and local search work that compounds — not a checklist of vanity tasks. Every audit, every fix, every piece of content handled directly by me."
      checkpoints={[
        "Independent specialist — no outsourcing",
        "Work directly with me, not an account manager",
        "Focused on Canadian professional service firms, including accounting practices, legal firms, and corporate advisors",
        "No lock-in contracts",
      ]}
      problemHeadline={
        <>
          Most SEO work never touches{" "}
          <Accent>what actually moves rankings.</Accent>
        </>
      }
      problemBody={
        <>
          <p>
            A lot of what gets sold as SEO is reporting and busywork —
            metrics you can screenshot but that don&rsquo;t move revenue.
            Real performance gains come from fixing what&rsquo;s actually
            broken: slow load times, thin content, missing structure, and a
            local presence that doesn&rsquo;t reflect how customers
            actually search. That&rsquo;s the work I focus on, for
            accounting firms and other professional service businesses
            across Canada.
          </p>
          <p>
            Based in Calgary, Alberta, I engineer high-performance search
            strategies tailored specifically for the Canadian regulatory
            and corporate landscape. Whether you&rsquo;re an accounting
            practice competing for high-margin corporate clients downtown
            or a multi-location professional service firm scaling
            visibility across Western Canada, your strategy is built around
            localized B2B intent.
          </p>
        </>
      }
      included={included}
      proof={{
        metric: (
          <>
            30 → <ProofBadge>Top 10</ProofBadge>
          </>
        ),
        metricLabel: "Search ranking, target keywords, 6 months",
        body: "Six months of technical fixes, on-page structure, and content built around the terms their clients actually search moved an accounting & advisory firm from position 30 into the top 10 search results for their target keywords — doubling impressions and clicks. They're now booking new clients weekly.",
        linkHref: "/industries/accounting-firms",
        linkText: "See how this works for accounting firms",
      }}
      ctaHeadline="Ready to fix what's actually holding your site back?"
      ctaSub="Tell me about your business and what you're trying to grow — I'll tell you honestly whether I'm the right fit."
      relatedNote={
        <>
          Also want your business showing up in AI answers?{" "}
          <a href="/services/geo">See how GEO works →</a>
        </>
      }
    />
  );
}
