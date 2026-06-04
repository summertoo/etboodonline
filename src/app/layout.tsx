import type { Metadata } from "next";
import Script from "next/script";
import "@/components/component/homepage.css";
import { Providers } from "./providers";
import "./globals.css";
import {
  organizationJsonLd,
  sectionListJsonLd,
  siteConfig,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | ZD Tech",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "ZD Tech preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MPXWZKWM9W"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MPXWZKWM9W');
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9035468310087485"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Script
          id="section-list-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sectionListJsonLd),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
