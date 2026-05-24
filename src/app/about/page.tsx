import AboutHero from "./sections/AboutHero";
import AboutLayout from "./sections/AboutLayout";
import AboutCTA from "./sections/AboutCTA";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = {
  title: "About — Corbin Jensen | Scale SEO",
  description:
    "Canadian by birth, Australian by address. Corbin Jensen runs Scale SEO — a specialist SEO freelancer practice serving trade contractors and accounting firms across Canada and Australia.",
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
