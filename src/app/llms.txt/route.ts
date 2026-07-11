import {
  getProjectDetailPath,
  projects,
  type Project,
} from "@/data/projects";
import { newsList } from "@/data/news";
import { getLocalizedProject } from "@/lib/project-content";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

function projectLine(project: Project) {
  const en = getLocalizedProject(project, "en");
  const external = [project.liveUrl, project.githubUrl]
    .filter((value): value is string => Boolean(value?.startsWith("http")))
    .map((value) => ` External: ${value}`)
    .join("");
  return `- ${en.title}: ${siteConfig.url}${getProjectDetailPath(project, "en")} | Chinese: ${siteConfig.url}${getProjectDetailPath(project, "zh")} — ${en.description}${external}`;
}

export function GET() {
  const latestNews = newsList
    .slice(0, 20)
    .map(
      (news) =>
        `- ${news.title.en}: ${siteConfig.url}/en/news/${news.id} | Chinese: ${siteConfig.url}/zh/news/${news.id}`,
    )
    .join("\n");
  const content = `# ZD Tech

> ZD Tech is an independent creative studio publishing browser games, Roblox games, Sui/Web3 DApps, creative tools, original writing, and bilingual news briefings.

## Canonical site

- ${siteConfig.url}/

## Main sections

- Projects: ${siteConfig.url}/project
- News: ${siteConfig.url}/news
- Blog: ${siteConfig.url}/blog
- About: ${siteConfig.url}/what-we-do
- Services: ${siteConfig.url}/service
- Contact: ${siteConfig.url}/contact
- Privacy: ${siteConfig.url}/privacy

## Projects

${projects.map(projectLine).join("\n")}

## Recent news briefings

${latestNews}

## Publisher

- Organization: ZD Tech
- Website: ${siteConfig.url}/
- GitHub: https://github.com/etboodXJ
- Contact: etbood@gmail.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
