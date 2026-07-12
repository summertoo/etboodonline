"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import AuthModal from "@/components/AuthModal";
import ProjectActions from "@/components/ProjectActions";
import { HelpDialog } from "@/components/HelpDialog";
import TrackedProjectButton from "@/components/TrackedProjectButton";
import {
  getProjectDetailPath,
  getProjectTitle,
  projects,
  type Category,
  type Status,
  type Project,
  type ProjectTag,
} from "@/data/projects";
import { fetchProjectSocialStats, type ProjectSocialStat } from "@/lib/social";
import { supabase } from "@/lib/supabase";

export default function ProjectPage() {
  const { t, lang } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedTag, setSelectedTag] = useState<ProjectTag | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [socialStats, setSocialStats] = useState<
    Record<string, ProjectSocialStat>
  >({});

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session?.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session?.user);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    fetchProjectSocialStats(projects.map((project) => project.id))
      .then((stats) => {
        const nextStats = stats.reduce<Record<string, ProjectSocialStat>>(
          (acc, item) => {
            acc[item.project_id] = item;
            return acc;
          },
          {},
        );
        setSocialStats(nextStats);
      })
      .catch(() => {});
  }, [isLoggedIn]);

  const categories: { value: Category; labelKey: string }[] = [
    { value: "roblox", labelKey: "project.category.roblox" },
    { value: "webgame", labelKey: "project.category.webgame" },
    { value: "dapp", labelKey: "project.category.dapp" },
    { value: "writingtool", labelKey: "project.category.writingtool" },
    { value: "tool", labelKey: "project.category.tool" },
    { value: "article", labelKey: "project.category.article" },
    { value: "novel", labelKey: "project.category.novel" },
  ];

  const tagFilters: { value: ProjectTag; labelKey: string }[] = [
    { value: "featured", labelKey: "project.tag.featured" },
    { value: "latest", labelKey: "project.tag.latest" },
    { value: "game", labelKey: "project.filter.allGames" },
  ];

  const filteredProjects = useMemo(() => {
    return [...projects]
      .map((project, index) => ({ project, index }))
      .sort((a, b) => {
        const aTime = a.project.publishedAt
          ? new Date(a.project.publishedAt).getTime()
          : Number.NEGATIVE_INFINITY;
        const bTime = b.project.publishedAt
          ? new Date(b.project.publishedAt).getTime()
          : Number.NEGATIVE_INFINITY;

        if (aTime !== bTime) {
          return bTime - aTime;
        }

        return a.index - b.index;
      })
      .map(({ project }) => project)
      .filter((p) => {
        const matchesCategory =
          selectedCategory === "all" || p.category === selectedCategory;
        const matchesTag = !selectedTag || p.tags?.includes(selectedTag);
        const displayTitle = getProjectTitle(p, lang, t);
        const matchesSearch =
          searchQuery === "" ||
          displayTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.desc && p.desc.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesTag && matchesSearch;
      });
  }, [selectedCategory, selectedTag, searchQuery, t, lang]);

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "live":
        return (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] text-[var(--cyber-primary)] font-medium flex-shrink-0">
            {t("project.live")}
          </span>
        );
      case "new":
        return (
          <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] text-[var(--cyber-primary)] font-bold flex-shrink-0">
            {t("project.new")}
          </span>
        );
      case "coming":
        return (
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium flex-shrink-0">
            {t("project.soon")}
          </span>
        );
    }
  };

  const getCategoryLabel = (category: Category) => {
    const map: Record<Category, string> = {
      all: t("project.all"),
      roblox: t("project.category.roblox"),
      webgame: t("project.category.webgame"),
      dapp: t("project.category.dapp"),
      writingtool: t("project.category.writingtool"),
      tool: t("project.category.tool"),
      article: t("project.category.article"),
      novel: t("project.category.novel"),
    };
    return map[category];
  };

  const getCategoryColor = (category: Category) => {
    const map: Record<Category, string> = {
      all: "bg-gray-100 text-gray-600",
      roblox: "bg-red-100 text-red-700",
      webgame: "bg-cyan-100 text-cyan-700",
      dapp: "bg-blue-100 text-blue-700",
      writingtool: "bg-pink-100 text-pink-700",
      tool: "bg-green-100 text-green-700",
      article: "bg-amber-100 text-amber-700",
      novel: "bg-rose-100 text-rose-700",
    };
    return map[category];
  };

  const getTagLabel = (tag: ProjectTag) => {
    const map: Record<ProjectTag, string> = {
      game: t("project.tag.game"),
      featured: t("project.tag.featured"),
      latest: t("project.tag.latest"),
    };
    return map[tag];
  };

  const getTagColor = (tag: ProjectTag) => {
    const map: Record<ProjectTag, string> = {
      game: "bg-slate-100 text-slate-700",
      featured: "bg-amber-100 text-amber-700",
      latest: "bg-emerald-100 text-emerald-700",
    };
    return map[tag];
  };

  const getActionButton = (p: Project) => {
    return (
      <div className="flex flex-wrap gap-2">
        <TrackedProjectButton
          projectId={p.id}
          href={getProjectDetailPath(p, lang)}
          sourcePage="project"
          className="cyber-button-small"
          target="_self"
        >
          {lang === "zh" ? "查看详情" : "View details"}
        </TrackedProjectButton>
        {p.githubUrl && (
          <Button className="cyber-button-small" asChild>
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
              {t("project.github")}
            </a>
          </Button>
        )}
        {p.helpUrl && <HelpDialog projectId={p.id} />}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <main>
        <section className="text-center py-20 cyber-hero">
          <h1 className="text-4xl font-bold mb-4 cyber-title">
            {t("project.title")}
          </h1>
          <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
            {t("project.subtitle")}
          </p>
        </section>

        <section className="py-8">
          <div className="flex flex-col gap-4 mb-8">
            <Input
              className="cyber-input flex-1"
              placeholder={t("project.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {tagFilters.map((tag) => {
                const isActive = selectedTag === tag.value;
                return (
                  <button
                    key={tag.value}
                    onClick={() =>
                      setSelectedTag((current) =>
                        current === tag.value ? null : tag.value,
                      )
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[var(--cyber-primary)] text-white"
                        : "border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
                    }`}
                  >
                    {t(tag.labelKey)}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() =>
                    setSelectedCategory((current) =>
                      current === cat.value ? "all" : cat.value,
                    )
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat.value
                      ? "bg-[var(--cyber-primary)] text-white"
                      : "border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
                  }`}
                >
                  {t(cat.labelKey)}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-[var(--cyber-muted)] mb-6">
            {filteredProjects.length}{" "}
            {lang === "zh" ? "个项目" : "projects found"}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="cyber-subtitle">{t("project.noResults")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="cyber-card group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <img
                          src={project.logoUrl}
                          alt={getProjectTitle(project, lang, t)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.style.backgroundColor = "#fed7aa";
                              parent.style.display = "flex";
                              parent.style.alignItems = "center";
                              parent.style.justifyContent = "center";
                              const iconMap: Record<string, string> = {
                                roblox: "🎮",
                                webgame: "🎮",
                                dapp: "🔗",
                                tool: "🛠️",
                                article: "📝",
                                novel: "📚",
                              };
                              parent.innerHTML = `<span class="text-2xl">${iconMap[project.category] || "💼"}</span>`;
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="w-full min-w-0 font-semibold text-base leading-6 break-words sm:w-auto sm:flex-1 sm:text-lg sm:truncate">
                            {getProjectTitle(project, lang, t)}
                          </h4>
                          {getStatusBadge(project.status)}
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${getCategoryColor(project.category)}`}
                          >
                            {getCategoryLabel(project.category)}
                          </span>
                          {project.tags?.map((tag) => (
                            <span
                              key={`${project.id}-${tag}`}
                              className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${getTagColor(tag)}`}
                            >
                              {getTagLabel(tag)}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm mb-3 cyber-subtitle line-clamp-2">
                          {project.desc || t(project.descKey)}
                        </p>
                        {project.platform && (
                          <p className="text-xs text-[var(--cyber-muted)] mb-2">
                            {t(`project.platform.${project.platform}`)}
                          </p>
                        )}
                        {project.platformLabel && (
                          <p className="text-xs text-[var(--cyber-muted)] mb-2">
                            {lang === "zh" ? "平台" : "Platform"}:{" "}
                            {project.platformLabel}
                          </p>
                        )}
                        {getActionButton(project)}
                        <ProjectActions
                          projectId={project.id}
                          projectTitle={getProjectTitle(project, lang, t)}
                          projectUrl={getProjectDetailPath(project, lang)}
                          initialStat={socialStats[project.id]}
                          isLoggedIn={isLoggedIn}
                          onRequireLogin={() => setAuthOpen(true)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={() => {
          setAuthOpen(false);
          setIsLoggedIn(true);
        }}
      />
    </div>
  );
}
