import type { Metadata } from "next";
import Script from "next/script";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "新闻与热点",
  description:
    "按日期浏览 ZD Tech 整理的 AI 新闻、科技动态与综合热点摘要，便于用户快速获取重点信息。",
  path: "/news",
  keywords: ["AI news", "hot topics", "科技新闻", "热点新闻", "AI 快讯"],
});

const newsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ZD Tech 新闻与热点",
  description:
    "按日期浏览 ZD Tech 整理的 AI 新闻、科技动态与综合热点摘要，便于用户快速获取重点信息。",
  url: `${siteConfig.url}/news`,
  inLanguage: ["zh-CN", "en"],
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="news-collection-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsCollectionJsonLd),
        }}
      />
      {children}
    </>
  );
}
