import {
  getProjectDescription,
  getProjectTitle,
  isEmbeddableProject,
  type Project,
  type SupportedLanguage,
} from "@/data/projects";
import { translations } from "@/lib/i18n";

export const supportedLanguages: SupportedLanguage[] = ["en", "zh"];
export const siteContentUpdatedAt = "2026-07-11T00:00:00+08:00";

export function isSupportedLanguage(
  value: string,
): value is SupportedLanguage {
  return supportedLanguages.includes(value as SupportedLanguage);
}

export function translateProjectKey(
  lang: SupportedLanguage,
  key: string,
): string {
  return translations[lang][key] || translations.en[key] || key;
}

export function getLocalizedProject(project: Project, lang: SupportedLanguage) {
  const translate = (key: string) => translateProjectKey(lang, key);
  return {
    title: getProjectTitle(project, lang, translate),
    description: getProjectDescription(project, lang, translate),
  };
}

export function getCategoryLabel(
  project: Project,
  lang: SupportedLanguage,
): string {
  const labels = {
    en: {
      roblox: "Roblox game",
      webgame: "Browser game",
      dapp: "DApp",
      writingtool: "Novel writing tool",
      tool: "Open-source tool",
      article: "Tutorial series",
      novel: "Web novel",
    },
    zh: {
      roblox: "Roblox 游戏",
      webgame: "网页游戏",
      dapp: "DApp",
      writingtool: "小说辅助工具",
      tool: "开源工具",
      article: "教程系列",
      novel: "网络小说",
    },
  } as const;

  return labels[lang][project.category];
}

export function getStatusLabel(
  project: Project,
  lang: SupportedLanguage,
): string {
  const labels = {
    en: { live: "Available", new: "New release", coming: "Coming soon" },
    zh: { live: "已上线", new: "新发布", coming: "即将上线" },
  } as const;

  return labels[lang][project.status];
}

export function getPlatformLabel(
  project: Project,
  lang: SupportedLanguage,
): string {
  if (project.platformLabel) return project.platformLabel;
  if (project.platform === "roblox") return "Roblox";
  if (project.platform === "web") {
    return lang === "zh" ? "网页浏览器" : "Web browser";
  }
  if (project.githubUrl && !project.liveUrl) return "GitHub";
  if (project.category === "novel" || project.category === "article") {
    return lang === "zh" ? "外部内容平台" : "External publishing platform";
  }
  return lang === "zh" ? "网页" : "Web";
}

export function getProjectHighlights(
  project: Project,
  lang: SupportedLanguage,
): Array<{ label: string; value: string }> {
  const hosted = isEmbeddableProject(project);
  const labels =
    lang === "zh"
      ? {
          type: "项目类型",
          status: "当前状态",
          platform: "运行平台",
          access: "访问方式",
          hosted: "本站直接运行",
          external: "通过官方外部入口访问",
          source: "查看开源代码仓库",
          planned: "项目资料页，等待正式发布",
        }
      : {
          type: "Project type",
          status: "Current status",
          platform: "Platform",
          access: "Access",
          hosted: "Runs directly on this site",
          external: "Available from its official external destination",
          source: "Open-source repository available",
          planned: "Project information page ahead of release",
        };

  let access = hosted ? labels.hosted : labels.external;
  if (project.githubUrl && !project.liveUrl) access = labels.source;
  if (project.status === "coming") access = labels.planned;

  return [
    { label: labels.type, value: getCategoryLabel(project, lang) },
    { label: labels.status, value: getStatusLabel(project, lang) },
    { label: labels.platform, value: getPlatformLabel(project, lang) },
    { label: labels.access, value: access },
  ];
}

export function getProjectFaqs(
  project: Project,
  lang: SupportedLanguage,
  title: string,
  description: string,
): Array<{ question: string; answer: string }> {
  const category = getCategoryLabel(project, lang);
  const status = getStatusLabel(project, lang);
  const platform = getPlatformLabel(project, lang);
  const hosted = isEmbeddableProject(project);

  if (lang === "zh") {
    return [
      {
        question: `${title} 是什么？`,
        answer: `${title} 是一个${category}。 ${description}`,
      },
      {
        question: `${title} 在哪里可以访问？`,
        answer: hosted
          ? project.category === "webgame"
            ? "可以直接在本页启动，游戏本体由 ZD Tech 托管。"
            : "可以直接在本页启动，工具本体由 ZD Tech 托管。"
          : project.liveUrl
            ? `可通过本页提供的官方入口前往，目标平台为${platform}。`
            : project.githubUrl
              ? "当前可通过本页进入 GitHub 查看代码和项目资料。"
              : "当前尚未提供公开访问入口，请关注项目状态更新。",
      },
      {
        question: `${title} 当前是否可用？`,
        answer: `当前状态为“${status}”。本页会同步展示可用入口和后续更新。`,
      },
    ];
  }

  return [
    {
      question: `What is ${title}?`,
      answer: `${title} is a ${category.toLowerCase()}. ${description}`,
    },
    {
      question: `Where can I access ${title}?`,
      answer: hosted
        ? project.category === "webgame"
          ? "You can launch it directly on this page. The game is hosted by ZD Tech."
          : "You can launch it directly on this page. The tool is hosted by ZD Tech."
        : project.liveUrl
          ? `Use the official destination linked from this page. The target platform is ${platform}.`
          : project.githubUrl
            ? "Use the GitHub link on this page to review the source code and project information."
            : "A public destination is not available yet. Follow this page for status updates.",
    },
    {
      question: `Is ${title} currently available?`,
      answer: `Its current status is “${status}”. This page lists the latest available destination and project updates.`,
    },
  ];
}
