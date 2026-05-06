import type { Metadata } from "next";
import "./globals.css";
import "@/components/component/homepage.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "ZD Tech - 自媒体工作室 | 游戏开发 · 应用创作 · 内容创作",
    template: "%s | ZD Tech",
  },
  description:
    "ZD Tech 是一家专注于自媒体内容创作、游戏开发和应用开发的创意工作室。我们开发 Web3 应用、Roblox 游戏、网页游戏，同时创作网络小说和技术教程。",
  keywords: [
    "ZD Tech",
    "etboodonline",
    "自媒体工作室",
    "游戏开发",
    "应用开发",
    "内容创作",
    "网络小说",
    "技术教程",
    "Sui blockchain",
    "Web3 development",
    "DApp development",
    "Roblox games",
    "网页游戏",
    "码农穿越平民世界",
    "群雄战记",
    "番茄小说",
    "move programming",
    "去中心化应用",
    "自媒体游戏",
    "游戏应用",
    "content creator",
    "game developer",
    "app developer",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.etboodonline.com",
    siteName: "ZD Tech",
    title: "ZD Tech - 自媒体工作室 | 游戏开发 · 应用创作 · 内容创作",
    description:
      "专注于自媒体内容创作、游戏开发和应用开发的创意工作室。开发 Web3 应用、Roblox 游戏、网页游戏，创作网络小说和技术教程。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZD Tech - 自媒体工作室",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZD Tech - 自媒体工作室 | 游戏开发 · 应用创作 · 内容创作",
    description:
      "专注于自媒体内容创作、游戏开发和应用开发的创意工作室。",
    images: ["/og-image.png"],
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
    alternateName: ["etboodonline", "自媒体工作室"],
    url: "https://www.etboodonline.com",
    description:
      "ZD Tech 是一家专注于自媒体内容创作、游戏开发和应用开发的创意工作室。我们开发 Web3 去中心化应用、Roblox 游戏、网页游戏，同时创作网络小说和技术教程。",
    knowsAbout: [
      "自媒体内容创作",
      "游戏开发",
      "Roblox 游戏开发",
      "网页游戏开发",
      "Web3 应用开发",
      "DApp 开发",
      "Sui 区块链开发",
      "网络小说创作",
      "技术教程写作",
      "应用开发",
    ],
    sameAs: ["https://github.com/etboodXJ"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "etbood@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Chinese", "English"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ZD Tech - 自媒体工作室",
    url: "https://www.etboodonline.com",
    description:
      "ZD Tech - 专注于自媒体内容创作、游戏开发和应用开发的创意工作室",
    publisher: {
      "@type": "Organization",
      name: "ZD Tech",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.etboodonline.com/project?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const creatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "ZD Tech 作品集",
    author: {
      "@type": "Organization",
      name: "ZD Tech",
    },
    description: "包含游戏、应用、网络小说和技术教程的创意作品集",
  };

  return (
    <html lang="zh-CN">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MPXWZKWM9W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MPXWZKWM9W');
            `,
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9035468310087485"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(creatorJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
