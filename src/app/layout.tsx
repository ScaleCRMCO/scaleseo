import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "Scale SEO — Corbin Jensen | SEO for Trades & Accounting Firms",
  description:
    "A specialist SEO freelancer for trade contractors and accounting firms across Australia and Canada. Built by Corbin Jensen. Few clients. Real revenue.",
  metadataBase: new URL("https://scaleseo.co"),
  openGraph: {
    title: "Scale SEO — Corbin Jensen",
    description:
      "Specialist SEO freelancer for trade contractors and accounting firms. Few clients. Real revenue.",
    url: "https://scaleseo.co",
    siteName: "Scale SEO",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale SEO — Corbin Jensen",
    description:
      "Specialist SEO freelancer for trade contractors and accounting firms.",
  },
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
      </head>
      <body>
        <PageTransition />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
