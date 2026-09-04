import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "Calgary SEO Specialist | Professional Services | Scale SEO",
  description:
    "Bespoke SEO architecture & Google Ads management for accounting firms, legal practices, and professional services in Calgary & across Canada. Request a free audit.",
  metadataBase: new URL("https://scaleseo.co"),
  openGraph: {
    title: "Scale SEO — Corbin Jensen",
    description:
      "Independent SEO specialist for established Canadian businesses. Few clients. Real revenue.",
    url: "https://scaleseo.co",
    siteName: "Scale SEO",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale SEO — Corbin Jensen",
    description:
      "Independent SEO specialist for established Canadian businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Scale SEO",
  description:
    "Independent SEO specialist helping established Canadian businesses — accounting firms and other premium service industries — turn organic search into revenue. One specialist, working directly with each client.",
  url: "https://scaleseo.co",
  email: "team@scaleseo.co",
  telephone: "+14038751110",
  priceRange: "$$$",
  founder: {
    "@type": "Person",
    name: "Corbin Jensen",
    jobTitle: "SEO Specialist",
    url: "https://scaleseo.co/about",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "Alberta",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "State", name: "Alberta" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "Search Engine Optimization",
    "Local SEO",
    "Technical SEO",
    "AI Search Optimization",
    "Web Development",
    "Web Design",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.linkedin.com/in/corbin-jensen-9a9b77127/",
    "https://www.instagram.com/scaleseo.co/",
    "https://maps.app.goo.gl/FYWSaQ3p81VFnNcc7",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Google tag (gtag.js) — Google Ads conversion tracking, loads on every page */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18236022589"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18236022589');
          `}
        </Script>
        <PageTransition />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
