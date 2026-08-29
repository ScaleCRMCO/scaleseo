import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://scaleseo.co";
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/geo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/web-development`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/google-ads`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries/accounting-firms`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/results`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
    { url: `${base}/corbin-jensen`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/llm-info`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
