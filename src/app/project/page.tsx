"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import {
  projects,
  type Category,
  type Status,
  type Project,
} from "@/data/projects";

export default function ProjectPage() {
  const { t, lang } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const categories: { value: Category; labelKey: string }[] = [
    { value: "all", labelKey: "project.all" },
    { value: "roblox", labelKey: "project.category.roblox" },
    { value: "webgame", labelKey: "project.category.webgame" },
    { value: "dapp", labelKey: "project.category.dapp" },
    { value: "tool", labelKey: "project.category.tool" },
    { value: "article", labelKey: "project.category.article" },
    { value: "novel", labelKey: "project.category.novel" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const displayTitle = p.title || t(p.titleKey || "");
      const matchesSearch =
        searchQuery === "" ||
        displayTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.desc && p.desc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

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
      tool: "bg-green-100 text-green-700",
      article: "bg-amber-100 text-amber-700",
      novel: "bg-rose-100 text-rose-700",
    };
    return map[category];
  };

  const getActionButton = (p: Project) => {
    if (p.status === "coming") {
      return (
        <Button className="cyber-button-small" disabled>
          {t("project.comingSoon")}
        </Button>
      );
    }

    if ((p.category === "roblox" || p.category === "webgame") && p.liveUrl) {
      return (
        <Button className="cyber-button-small" asChild>
          <a
            href={p.liveUrl}
            target={p.liveUrl.startsWith("/") ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            {t("project.play")}
          </a>
        </Button>
      );
    }

    if (p.category === "article" || p.category === "novel") {
      return (
        <Button className="cyber-button-small" asChild>
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            {t("project.read")}
          </a>
        </Button>
      );
    }

    return (
      <div className="flex flex-wrap gap-2">
        {p.liveUrl && (
          <Button className="cyber-button-small" asChild>
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
              {t("project.visit")}
            </a>
          </Button>
        )}
        {p.githubUrl && (
          <Button className="cyber-button-small" asChild>
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
              {t("project.github")}
            </a>
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">
          {t("project.title")}
        </h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          {t("project.subtitle")}
        </p>
      </section>

      <section className="py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            className="cyber-input flex-1"
            placeholder={t("project.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
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
                        alt={project.title || t(project.titleKey || "")}
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
                        <h4 className="font-semibold text-lg truncate flex-1 min-w-0">
                          {project.title || t(project.titleKey || "")}
                        </h4>
                        {getStatusBadge(project.status)}
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${getCategoryColor(project.category)}`}
                        >
                          {getCategoryLabel(project.category)}
                        </span>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
