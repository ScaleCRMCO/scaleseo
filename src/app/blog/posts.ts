export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readTime: string;
  category: string;
  excerpt: string;
  body: string[]; // paragraphs; simple on purpose
};

export const posts: Post[] = [
  {
    slug: "how-accounting-firms-rank-on-google-in-canada",
    title: "How Accounting Firms Can Rank on Google in Canada",
    description:
      "Why generic SEO fails accounting and advisory firms, and what actually moves rankings and revenue for a trust-driven service business.",
    date: "2026-08-13",
    readTime: "6 min read",
    category: "Accounting Firms",
    excerpt:
      "Most SEO advice is written for businesses selling on impulse. An accounting firm doesn't get chosen that way — here's what actually works.",
    body: [
      "Most SEO advice online is written for businesses that win on volume: get more traffic, get more clicks, get more calls. That advice doesn't map cleanly onto an accounting firm, because the buyer journey isn't the same. Nobody hires a firm to handle their corporate books off a Google Ads click. They research. They compare. They check who else you work with. By the time they call, they've mostly already decided.",
      "That changes what SEO should actually be doing for a firm. It's not a traffic funnel — it's a trust-building surface that has to hold up under scrutiny from a skeptical, financially literate buyer before they'll ever pick up the phone.",
      "In practice, three things matter more than they do for a typical local business:",
      "**Content built around advisory intent, not tax-season keywords.** Ranking for \"tax preparation near me\" brings in a very different client than ranking for \"outsourced CFO services for growing businesses\" or \"advisory services for incorporated professionals.\" The second set of terms has far less volume and far higher intent — and it's what separates a firm chasing walk-ins from one landing institutional retainers.",
      "**Technical and trust signals Google actually checks.** Site speed, structured data, and a clean crawlable site aren't optional for a firm handling other people's money — they're part of how Google (and a cautious prospect) judges whether you're a credible operation. A slow site with no schema markup undercuts everything the content is trying to build.",
      "**Local presence in every market you actually operate, not just headquarters.** If your firm has more than one office, each one needs its own honest local footprint — Google Business Profile, citations, location-specific pages — not a single page trying to represent every city at once.",
      "None of this is exotic. It's the same technical and content discipline any good SEO program uses — just pointed at a different kind of buyer, with a different definition of what winning looks like. Six months of doing this consistently for one accounting firm moved their average search position from 30 to 14.0 and doubled their impressions and clicks. They're now booking new clients weekly, not just at tax time.",
      "If you run an accounting or advisory practice and want a second opinion on where your search visibility actually stands, that's the exact work I do — see how I approach it on the [accounting firms page](/industries/accounting-firms), or book a call directly.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
