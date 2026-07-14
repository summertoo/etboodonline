import type { Metadata } from "next";

export const siteConfig = {
  name: "ZD Tech",
  shortName: "ZD Tech",
  url: "https://www.etboodonline.com",
  defaultTitle: "ZD Tech | 网页游戏、Roblox 游戏、DApp 与创意工具",
  description:
    "ZD Tech 是一个独立创意工作室，发布网页游戏、Roblox 游戏、Sui / Web3 DApp、创意工具，以及中英双语的 AI 与热点资讯更新。",
  ogImage: "/og-image.png",
  email: "etbood@gmail.com",
  adminEmail: "admin@etboodonline.com",
  locale: "zh_CN",
  keywords: [
    "ZD Tech",
    "etboodonline",
    "网页游戏",
    "Roblox 游戏",
    "HTML5 games",
    "browser games",
    "Sui",
    "Web3",
    "DApp",
    "creative tools",
    "indie games",
    "AI news",
    "独立游戏",
    "创意工具",
  ],
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const allKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords]),
  );

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
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
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: ["etboodonline", "ZD Tech Studio"],
  url: siteConfig.url,
  logo: `${siteConfig.url}/avatars/logo.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: ["https://github.com/etboodXJ"],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer support",
    availableLanguage: ["zh-CN", "en"],
  },
  knowsAbout: [
    "HTML5 games",
    "Roblox games",
    "Sui development",
    "Web3 development",
    "Creative tools",
    "AI news curation",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: ["zh-CN", "en"],
  publisher: { "@id": `${siteConfig.url}/#organization` },
};
