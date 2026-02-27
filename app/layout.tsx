import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/ui/PageTransition";

const SITE_URL = "https://vicagogroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vicago Group — Trusted Agricultural Commodity Trading",
    template: "%s | Vicago Group",
  },
  description:
    "Vicago Group is a leading agricultural commodity trading company with 45+ years of operational history. We source, finance, and trade premium Nigerian cocoa and Canadian wheat across global markets.",
  keywords: [
    "agricultural commodity trading",
    "cocoa trading",
    "Nigerian cocoa",
    "Canadian wheat",
    "agricultural exports",
    "commodity sourcing",
    "Vicago Group",
    "agribusiness",
    "sustainable agriculture",
    "farm to market",
  ],
  authors: [{ name: "Vicago Group" }],
  creator: "Vicago Group",
  publisher: "Vicago Group",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Vicago Group",
    title: "Vicago Group — Trusted Agricultural Commodity Trading",
    description:
      "Sourcing, financing, and trading premium agricultural commodities. 45+ years of operational history across Nigeria and Canada.",
    images: [
      {
        url: "/images/hero-bg-1.jpg",
        width: 1200,
        height: 630,
        alt: "Vicago Group — Agricultural Commodity Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicago Group — Trusted Agricultural Commodity Trading",
    description:
      "Sourcing, financing, and trading premium agricultural commodities across global markets.",
    images: ["/images/hero-bg-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <PageTransition>
          <Navbar />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
