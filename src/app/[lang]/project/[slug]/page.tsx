import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import GameFrame from "@/components/GameFrame";
import TrackedLink from "@/components/TrackedLink";
import {
  getProjectById,
  getProjectDetailPath,
  isEmbeddableProject,
  projects,
  type Project,
  type SupportedLanguage,
} from "@/data/projects";
import {
  getCategoryLabel,
  getLocalizedProject,
  getProjectFaqs,
  getProjectHighlights,
  isSupportedLanguage,
  siteContentUpdatedAt,
  supportedLanguages,
} from "@/lib/project-content";
import { siteConfig } from "@/lib/seo";

type PageProps = {
  params: { lang: string; slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.id })),
  );
}

function getPageData(params: PageProps["params"]) {
  if (!isSupportedLanguage(params.lang)) return null;
  const project = getProjectById(params.slug);
  if (!project) return null;
  return { lang: params.lang, project };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const data = getPageData(params);
  if (!data) return {};

  const { lang, project } = data;
  const { title, description } = getLocalizedProject(project, lang);
  const metadataTitle = `${title} - ${getCategoryLabel(project, lang)}`;
  const path = getProjectDetailPath(project, lang);
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteConfig.url}${getProjectDetailPath(project, "en")}`,
        "zh-CN": `${siteConfig.url}${getProjectDetailPath(project, "zh")}`,
        "x-default": `${siteConfig.url}${getProjectDetailPath(project, "en")}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      locale: lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: [lang === "zh" ? "en_US" : "zh_CN"],
      siteName: siteConfig.name,
      title: metadataTitle,
      description,
      images: [{ url: project.logoUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [project.logoUrl],
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
  };
}

function getEntitySchema(
  project: Project,
  lang: SupportedLanguage,
  title: string,
  description: string,
) {
  const canonical = `${siteConfig.url}${getProjectDetailPath(project, lang)}`;
  const common = {
    "@context": "https://schema.org",
    name: title,
    description,
    url: canonical,
    image: `${siteConfig.url}${project.logoUrl}`,
    inLanguage: lang === "zh" ? "zh-CN" : "en",
    dateModified: siteContentUpdatedAt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    sameAs: [project.liveUrl, project.githubUrl].filter(
      (value): value is string => Boolean(value?.startsWith("http")),
    ),
  };

  if (project.category === "webgame" || project.category === "roblox") {
    return {
      ...common,
      "@type": "VideoGame",
      gamePlatform:
        project.platform === "roblox" ? "Roblox" : "Web browser",
      applicationCategory: "Game",
      ...(project.publishedAt
        ? { datePublished: project.publishedAt }
        : {}),
    };
  }

  if (project.category === "article") {
    return { ...common, "@type": "Article", headline: title };
  }

  if (project.category === "novel") {
    return { ...common, "@type": "Book" };
  }

  return {
    ...common,
    "@type": "SoftwareApplication",
    applicationCategory:
      project.category === "dapp"
        ? "BlockchainApplication"
        : project.category === "writingtool"
          ? "ProductivityApplication"
          : "UtilitiesApplication",
    operatingSystem: "Web",
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const data = getPageData(params);
  if (!data) notFound();

  const { lang, project } = data;
  const { title, description } = getLocalizedProject(project, lang);
  const highlights = getProjectHighlights(project, lang);
  const faqs = getProjectFaqs(project, lang, title, description);
  const entitySchema = getEntitySchema(project, lang, title, description);
  const canonical = `${siteConfig.url}${getProjectDetailPath(project, lang)}`;
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
        name: lang === "zh" ? "项目" : "Projects",
        item: `${siteConfig.url}/project`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonical,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const otherLang = lang === "zh" ? "en" : "zh";

  return (
    <main
      lang={lang === "zh" ? "zh-CN" : "en"}
      className="min-h-screen bg-[var(--cyber-bg)] text-[var(--cyber-text)]"
    >
      <script
        id={`project-entity-${project.id}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
      <script
        id={`project-breadcrumb-${project.id}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id={`project-faq-${project.id}-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b border-[var(--cyber-border)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold text-[var(--cyber-primary)]">
            ZD Tech
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/project">
              {lang === "zh" ? "全部项目" : "All projects"}
            </Link>
            <Link
              href={getProjectDetailPath(project, otherLang)}
              hrefLang={otherLang === "zh" ? "zh-CN" : "en"}
              className="text-[var(--cyber-primary)]"
            >
              {otherLang === "zh" ? "中文" : "English"}
            </Link>
          </nav>
        </div>
      </header>

      <article>
        <section className="border-b border-[var(--cyber-border)]">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[160px_1fr] md:items-center">
            <img
              src={project.logoUrl}
              alt={title}
              className="h-32 w-32 rounded-lg object-cover shadow-lg md:h-40 md:w-40"
            />
            <div>
              <div className="mb-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-[var(--cyber-primary)] px-2 py-1 text-white">
                  {getCategoryLabel(project, lang)}
                </span>
                <span className="rounded border border-[var(--cyber-border)] px-2 py-1">
                  {highlights[1].value}
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h1>
              <p className="max-w-3xl text-base leading-7 text-[var(--cyber-muted)]">
                {description}
              </p>
            </div>
          </div>
        </section>

        {isEmbeddableProject(project) && project.liveUrl ? (
          <section className="mx-auto max-w-6xl px-4 py-8">
            <GameFrame
              projectId={project.id}
              title={title}
              sourceUrl={project.liveUrl}
              imageUrl={project.logoUrl}
              lang={lang}
              mode={project.category === "webgame" ? "game" : "tool"}
            />
          </section>
        ) : (
          <section className="mx-auto max-w-6xl px-4 py-8">
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && project.status !== "coming" && (
                <TrackedLink
                  projectId={project.id}
                  href={project.liveUrl}
                  className="cyber-button inline-flex items-center px-5 py-2"
                  target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    project.sponsored
                      ? "sponsored nofollow noopener noreferrer"
                      : undefined
                  }
                >
                  {project.category === "article" || project.category === "novel"
                    ? lang === "zh"
                      ? "前往阅读"
                      : "Read on platform"
                    : lang === "zh"
                      ? "访问项目"
                      : "Open project"}
                </TrackedLink>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button inline-flex items-center px-5 py-2"
                >
                  {lang === "zh" ? "查看 GitHub" : "View GitHub"}
                </a>
              )}
            </div>
            {project.sponsored && (
              <p className="mt-3 text-xs text-[var(--cyber-muted)]">
                {lang === "zh"
                  ? "联盟链接说明：通过该链接注册可能为本站带来佣金，不增加你的费用。"
                  : "Affiliate disclosure: registration through this link may earn the site a commission at no added cost to you."}
              </p>
            )}
          </section>
        )}

        <AdSlot
          slot={process.env.NEXT_PUBLIC_ADSENSE_PROJECT_SLOT}
          label={lang === "zh" ? "广告" : "Advertisement"}
        />

        <section className="border-y border-[var(--cyber-border)]">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="mb-6 text-2xl font-bold">
              {lang === "zh" ? "项目概览" : "Project overview"}
            </h2>
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="border-b border-[var(--cyber-border)] pb-4">
                  <dt className="mb-1 text-sm text-[var(--cyber-muted)]">
                    {item.label}
                  </dt>
                  <dd className="font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-3xl leading-7 text-[var(--cyber-muted)]">
              {lang === "zh"
                ? `本页是 ${title} 的规范项目资料页，用于集中提供项目状态、官方入口、运行方式和后续更新。收藏或分享本页可以避免外部地址变化造成的失效。`
                : `This is the canonical project information page for ${title}. It keeps the current status, official destination, access method, and future updates in one stable location.`}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="mb-6 text-2xl font-bold">
            {lang === "zh" ? "常见问题" : "Frequently asked questions"}
          </h2>
          <div className="divide-y divide-[var(--cyber-border)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="py-5">
                <summary className="cursor-pointer font-semibold">
                  {faq.question}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--cyber-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
