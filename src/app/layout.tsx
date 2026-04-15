import type { Metadata } from "next";
import "./globals.css";
import "@/components/component/homepage.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "ZD Tech - Web3 Development Studio | DApps & Games on Sui",
    template: "%s | ZD Tech",
  },
  description:
    "ZD Tech builds innovative decentralized applications, Web3 games, and creative tools on the Sui blockchain. Explore our projects including Are You Okay?, Hand Battle, and more.",
  keywords: [
    "ZD Tech",
    "etboodonline",
    "Sui blockchain",
    "Web3 development",
    "DApp development",
    "blockchain games",
    "Move language",
    "decentralized applications",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.etboodonline.com",
    siteName: "ZD Tech",
    title: "ZD Tech - Web3 Development Studio",
    description:
      "Building decentralized applications, Web3 games, and creative tools on the Sui blockchain.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZD Tech - Web3 Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZD Tech - Web3 Development Studio",
    description:
      "Building decentralized applications, Web3 games, and creative tools on Sui.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.etboodonline.com",
  },
  metadataBase: new URL("https://www.etboodonline.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZD Tech",
    alternateName: "etboodonline",
    url: "https://www.etboodonline.com",
    description:
      "ZD Tech is a Web3 development studio specializing in decentralized applications, blockchain games, and creative tools on the Sui network.",
    knowsAbout: [
      "Sui blockchain development",
      "Move programming language",
      "Web3 game development",
      "Decentralized application development",
      "Smart contract development",
    ],
    sameAs: ["https://github.com/etboodXJ"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ZD Tech",
    url: "https://www.etboodonline.com",
    description:
      "ZD Tech - Web3 Development Studio building DApps and games on Sui",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
