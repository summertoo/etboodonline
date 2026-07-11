import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { newsCategoryMeta, newsList, type NewsItem } from "@/data/news";
import {
  isSupportedLanguage,
  supportedLanguages,
} from "@/lib/project-content";
import { siteConfig } from "@/lib/seo";

type NewsPageProps = {
  params: { lang: string; slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.flatMap((lang) =>
    newsList.map((news) => ({ lang, slug: news.id })),
  );
}

function getPageData(params: NewsPageProps["params"]) {
  if (!isSupportedLanguage(params.lang)) return null;
  const news = newsList.find((item) => item.id === params.slug);
  if (!news) return null;
  return { lang: params.lang, news };
}

function detailPath(lang: "en" | "zh", news: NewsItem) {
  return `/${lang}/news/${news.id}`;
}

function metaDescription(value: string) {
  return value.length <= 158 ? value : `${value.slice(0, 155).trim()}...`;
}

export function generateMetadata({ params }: NewsPageProps): Metadata {
  const data = getPageData(params);
  if (!data) return {};
  const { lang, news } = data;
  const title = news.title[lang];
  const description = metaDescription(news.summary[lang]);
  const canonical = `${siteConfig.url}${detailPath(lang, news)}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}${detailPath("en", news)}`,
        "zh-CN": `${siteConfig.url}${detailPath("zh", news)}`,
        "x-default": `${siteConfig.url}${detailPath("en", news)}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: siteConfig.name,
      locale: lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [lang === "zh" ? "en_US" : "zh_CN"],
      title,
      description,
      publishedTime: `${news.date}T00:00:00+08:00`,
      modifiedTime: `${news.date}T00:00:00+08:00`,
      section: newsCategoryMeta[news.category].label[lang],
      images: [{ url: siteConfig.ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const data = getPageData(params);
  if (!data) notFound();

  const { lang, news } = data;
  const title = news.title[lang];
  const description = news.summary[lang];
  const category = newsCategoryMeta[news.category].label[lang];
  const canonical = `${siteConfig.url}${detailPath(lang, news)}`;
  const otherLang = lang === "zh" ? "en" : "zh";
  const allSources = [
    ...(news.sources || []),
    ...news.items.flatMap((item) => item.sources || []),
  ].filter(
    (source, index, sources) =>
      sources.findIndex((candidate) => candidate.url === source.url) === index,
  );
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: metaDescription(description),
    url: canonical,
    mainEntityOfPage: canonical,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: `${news.date}T00:00:00+08:00`,
    dateModified: `${news.date}T00:00:00+08:00`,
    articleSection: category,
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/avatars/logo.png`,
      },
    },
    citation: allSources.map((source) => source.url),
    hasPart: news.items.map((item, index) => ({
      "@type": "Article",
      position: index + 1,
      headline: item.title[lang],
      description: item.description[lang],
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "zh" ? "首页" : "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "zh" ? "新闻" : "News",
        item: `${siteConfig.url}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };

  return (
    <main
      lang={lang === "zh" ? "zh-CN" : "en"}
      className="min-h-screen bg-[var(--cyber-bg)] text-[var(--cyber-text)]"
    >
      <script
        id={`news-article-${news.id}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        id={`news-breadcrumb-${news.id}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-[var(--cyber-border)]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold text-[var(--cyber-primary)]">
            ZD Tech
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/news">{lang === "zh" ? "新闻" : "News"}</Link>
            <Link
              href={detailPath(otherLang, news)}
              hrefLang={otherLang === "zh" ? "zh-CN" : "en"}
              className="text-[var(--cyber-primary)]"
            >
              {otherLang === "zh" ? "中文" : "English"}
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded bg-[var(--cyber-primary)] px-2 py-1 text-white">
            {category}
          </span>
          <time dateTime={news.date} className="text-[var(--cyber-muted)]">
            {news.date}
          </time>
        </div>
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-base leading-8 text-[var(--cyber-muted)]">
          {description}
        </p>

        <AdSlot
          slot={process.env.NEXT_PUBLIC_ADSENSE_NEWS_SLOT}
          label={lang === "zh" ? "广告" : "Advertisement"}
        />

        <ol className="divide-y divide-[var(--cyber-border)]">
          {news.items.map((item, index) => (
            <li key={`${news.id}-${index}`} className="py-7">
              <article>
                <h2 className="mb-3 text-xl font-semibold leading-8">
                  {index + 1}. {item.title[lang]}
                </h2>
                <p className="leading-7 text-[var(--cyber-muted)]">
                  {item.description[lang]}
                </p>
                {item.sources && item.sources.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {item.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--cyber-primary)] underline"
                        >
                          {source.publisher || source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>

        <section className="mt-10 border-t border-[var(--cyber-border)] pt-8">
          <h2 className="mb-3 text-xl font-bold">
            {lang === "zh" ? "来源与核验" : "Sources and verification"}
          </h2>
          {allSources.length > 0 ? (
            <ul className="space-y-2">
              {allSources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--cyber-primary)] underline"
                  >
                    {source.publisher
                      ? `${source.publisher}: ${source.title}`
                      : source.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="leading-7 text-[var(--cyber-muted)]">
              {lang === "zh"
                ? "这是一条旧版简报，原始来源链接未保留。涉及安全、金融、政策或突发事件的信息，请在采取行动前通过权威原始来源再次核验。"
                : "This legacy briefing did not retain its original source URLs. Verify safety, financial, policy, and breaking-news claims with authoritative primary sources before acting on them."}
            </p>
          )}
        </section>
      </article>
    </main>
  );
}
