import type { Metadata } from "next";
import Contact from "../components/ContactCta";
import MapEmbed from "./MapEmbed";

export const metadata: Metadata = {
  title: { absolute: "Contact - Scale SEO" },
  description:
    "Get in touch with Scale SEO. Email, phone, and Google Business Profile for Corbin Jensen, independent SEO specialist serving established businesses across Canada.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Contact asPageHeading />
      <MapEmbed />
    </main>
  );
}
