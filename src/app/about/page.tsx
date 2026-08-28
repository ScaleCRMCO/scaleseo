import AboutHero from "./sections/AboutHero";
import AboutLayout from "./sections/AboutLayout";
import AboutCTA from "./sections/AboutCTA";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "About Scale SEO — Corbin Jensen",
  description:
    "Scale SEO provides precise, technical search engine optimization for corporate entities, accounting firms, and professional service practices across Canada. Run directly by lead specialist Corbin Jensen.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutLayout />
      <AboutCTA />
      <RevealOnScroll />
    </main>
  );
}
