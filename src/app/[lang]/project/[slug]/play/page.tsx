import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FullScreenPlayer from "@/components/FullScreenPlayer";
import {
  getProjectById,
  getProjectDetailPath,
  isEmbeddableProject,
  projects,
} from "@/data/projects";
import {
  getLocalizedProject,
  isSupportedLanguage,
  supportedLanguages,
} from "@/lib/project-content";
import { siteConfig } from "@/lib/seo";

type PlayPageProps = {
  params: { lang: string; slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.flatMap((lang) =>
    projects
      .filter((project) => isEmbeddableProject(project) && project.liveUrl)
      .map((project) => ({ lang, slug: project.id })),
  );
}

function getPageData(params: PlayPageProps["params"]) {
  if (!isSupportedLanguage(params.lang)) return null;
  const project = getProjectById(params.slug);
  if (!project || !project.liveUrl || !isEmbeddableProject(project)) {
    return null;
  }
  return { lang: params.lang, project };
}

export function generateMetadata({ params }: PlayPageProps): Metadata {
  const data = getPageData(params);
  if (!data) return {};
  const { lang, project } = data;
  const { title, description } = getLocalizedProject(project, lang);
  return {
    title:
      lang === "zh"
        ? `${title} - 全屏试玩`
        : `${title} - Full-screen player`,
    description,
    alternates: {
      canonical: `${siteConfig.url}${getProjectDetailPath(project, lang)}`,
    },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}

export default function PlayPage({ params }: PlayPageProps) {
  const data = getPageData(params);
  if (!data) notFound();
  const { lang, project } = data;
  const { title } = getLocalizedProject(project, lang);

  return (
    <main lang={lang === "zh" ? "zh-CN" : "en"}>
      <h1 className="sr-only">
        {lang === "zh" ? `${title} 全屏试玩` : `${title} full-screen player`}
      </h1>
      <FullScreenPlayer
        projectId={project.id}
        title={title}
        sourceUrl={project.liveUrl!}
        backHref={getProjectDetailPath(project, lang)}
        lang={lang}
        mode={project.category === "webgame" ? "game" : "tool"}
      />
    </main>
  );
}
