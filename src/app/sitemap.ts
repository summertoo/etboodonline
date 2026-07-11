import type { MetadataRoute } from "next";
import { getProjectDetailPath, projects } from "@/data/projects";
import { newsList } from "@/data/news";
import {
  siteContentUpdatedAt,
  supportedLanguages,
} from "@/lib/project-content";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteContentUpdatedAt);
  const staticPages: MetadataRoute.Sitemap = [
    ["", "daily", 1],
    ["/project", "weekly", 0.95],
    ["/news", "daily", 0.92],
    ["/blog", "weekly", 0.82],
    ["/what-we-do", "monthly", 0.78],
    ["/service", "monthly", 0.74],
    ["/contact", "monthly", 0.64],
    ["/privacy", "yearly", 0.3],
    ["/terms", "yearly", 0.3],
  ].map(([path, changeFrequency, priority]) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: changeFrequency as
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly",
    priority: priority as number,
  }));

  const projectPages: MetadataRoute.Sitemap = supportedLanguages.flatMap(
    (lang) =>
      projects.map((project) => ({
        url: `${siteConfig.url}${getProjectDetailPath(project, lang)}`,
        lastModified: project.publishedAt
          ? new Date(project.publishedAt)
          : lastModified,
        changeFrequency: "monthly" as const,
        priority:
          project.category === "webgame" || project.category === "roblox"
            ? 0.78
            : 0.68,
        alternates: {
          languages: {
            en: `${siteConfig.url}${getProjectDetailPath(project, "en")}`,
            "zh-CN": `${siteConfig.url}${getProjectDetailPath(project, "zh")}`,
          },
        },
      })),
  );

  const newsPages: MetadataRoute.Sitemap = supportedLanguages.flatMap((lang) =>
    newsList.map((news) => ({
      url: `${siteConfig.url}/${lang}/news/${news.id}`,
      lastModified: new Date(`${news.date}T00:00:00+08:00`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en/news/${news.id}`,
          "zh-CN": `${siteConfig.url}/zh/news/${news.id}`,
        },
      },
    })),
  );

  return [...staticPages, ...projectPages, ...newsPages];
}
