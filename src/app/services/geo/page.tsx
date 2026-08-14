import type { Metadata } from "next";
import ServicePage, { Accent } from "../../components/ServicePage";

export const metadata: Metadata = {
  title: "GEO Services | Get Cited by AI Search & ChatGPT | Scale SEO",
  description:
    "Generative Engine Optimization (GEO) built to get your business cited by Google AI Overviews, ChatGPT, Perplexity, and Copilot — not just ranked on a results page. Based in Calgary, working across Canada.",
};

const included = [
  {
    num: "01",
    name: "AI Crawlability & Structured Data",
    desc: "Schema markup and clean technical structure so AI crawlers can actually read and trust your site.",
  },
  {
    num: "02",
    name: "Answer-Ready Content",
    desc: "Content restructured into clear, citable statements AI models can pull directly into an answer.",
  },
  {
    num: "03",
    name: "Entity & Authority Signals",
    desc: "Building the credibility signals — consistent facts, citations, structured data — AI models weigh when deciding who to cite.",
  },
  {
    num: "04",
    name: "Multi-Platform Coverage",
    desc: "Optimization aimed at Google AI Overviews, ChatGPT, Perplexity, and Microsoft Copilot — not just one engine.",
  },
  {
    num: "05",
    name: "Citation Tracking",
    desc: "Monitoring where and how often your business is actually being cited across AI platforms, so you know it's working.",
  },
  {
    num: "06",
    name: "Reporting Tied to Visibility",
    desc: "Plain-English reporting on AI citations and what it means for the leads and calls you're getting.",
  },
];

export default function GeoServicePage() {
  return (
    <ServicePage
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "GEO" },
      ]}
      eyebrow="Services / GEO"
      title={
        <>
          Get Your Business Cited by AI{" "}
          <Accent>— Not Just Ranked.</Accent>
        </>
      }
      sub="Google AI Overviews, ChatGPT, Perplexity, and Copilot are answering your buyers' questions before they ever see a search results page. GEO — Generative Engine Optimization — is how you make sure your business is the answer."
      problemHeadline={
        <>
          Ranking #1 doesn&rsquo;t matter if the{" "}
          <Accent>AI answer skips your site entirely.</Accent>
        </>
      }
      problemBody="AI-generated answers pull from a different signal set than traditional rankings — structured data, clear factual statements, source credibility, and content built to be quoted, not just clicked. A site optimized only for classic SEO can rank well and still be invisible in an AI Overview or a ChatGPT answer. GEO is the work that closes that gap, built for accounting firms and other professional service businesses whose buyers are already asking AI who to trust."
      included={included}
      ctaHeadline="Want to know if your business shows up in AI answers yet?"
      ctaSub="Tell me about your business and I'll show you honestly where you stand across the major AI platforms — and what it would take to change that."
      relatedNote={
        <>
          Still building your foundation?{" "}
          <a href="/services/seo">See how core SEO works →</a>
        </>
      }
    />
  );
}
