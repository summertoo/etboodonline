"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

type Category = "all" | "roblox" | "webgame" | "dapp" | "tool" | "article" | "novel";
type Status = "live" | "coming" | "new";
type Platform = "roblox" | "web" | null;

interface Project {
  id: string;
  title: string;
  titleKey?: string;
  descKey: string;
  desc?: string;
  category: Category;
  platform?: Platform;
  status: Status;
  imagePrompt: string;
  liveUrl?: string;
  githubUrl?: string;
  platformLabel?: string;
}

export default function ProjectPage() {
  const { t, lang } = useLang();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const projects: Project[] = useMemo(() => {
    return [
      {
        id: "roblox-apex-mind",
        title: "Apex Mind",
        descKey: "game.apexMindDesc",
        category: "roblox",
        platform: "roblox",
        status: "live",
        imagePrompt: "futuristic mind puzzle game logo with glowing blue neural network, Roblox 3D icon style, cyberpunk aesthetic, minimalist square emblem",
        liveUrl: "https://www.roblox.com/games/126170387607652",
      },
      {
        id: "roblox-lobster-bump",
        title: "LOBSTER BUMP",
        descKey: "game.lobsterBumpDesc",
        category: "roblox",
        platform: "roblox",
        status: "live",
        imagePrompt: "cartoon red lobster bumping game logo, Roblox style icon, playful underwater theme, vibrant colors, square emblem",
        liveUrl: "https://www.roblox.com/games/102614376416074",
      },
      {
        id: "roblox-warlord-saga",
        title: "WARLORD SAGA",
        descKey: "game.warlordSagaDesc",
        category: "roblox",
        platform: "roblox",
        status: "coming",
        imagePrompt: "epic fantasy warlord battle logo, ancient Chinese warfare theme, dramatic warrior emblem, Roblox style square icon",
      },
      {
        id: "web-lobster-run",
        title: "🦞 龙虾跑酷 (Lobster Run)",
        descKey: "game.lobsterRunDesc",
        category: "webgame",
        platform: "web",
        status: "new",
        imagePrompt: "cute red lobster running through obstacles, 2D platformer game logo, cartoon ocean background, square icon design",
        liveUrl: "/h5game01/龙虾跑酷.html",
      },
      {
        id: "web-mini-soccer",
        title: "Mini Soccer",
        descKey: "game.miniSoccerDesc",
        category: "webgame",
        platform: "web",
        status: "live",
        imagePrompt: "mini soccer game logo, stylized football players, neon sports field, cyberpunk style square icon",
        liveUrl: "https://soccerdemo.edgeone.app/",
      },
      {
        id: "web-warlord-heroes",
        title: "🏮 群雄战记：中华英雄传",
        desc:
          lang === "zh"
            ? "已发布，开放第一关卡基本玩法。三国题材策略游戏，体验中华英雄的传奇故事。"
            : "Released, first level gameplay available. Three Kingdoms strategy game, experience the legendary stories of Chinese heroes.",
        descKey: "game.warlordHeroesDesc",
        category: "webgame",
        platform: "web",
        status: "live",
        imagePrompt: "ancient Chinese Three Kingdoms heroes logo, traditional Chinese architecture, warrior emblem, square game icon",
        liveUrl: "https://games.soonjy.com/public/gameLobby/?projectId=69cb5b0280d0cf54f562a136&inviteCode=1BBDC0C1",
      },
      {
        id: "web-football",
        title: "FootBall Game",
        descKey: "game.footballDesc",
        category: "webgame",
        platform: "web",
        status: "new",
        imagePrompt: "football shootout game logo, goalkeeper diving save, striker kicking ball, dramatic sports square icon",
        liveUrl: "/football/football-game.html",
      },
      {
        id: "dapp-ruok",
        title: "Are You Okay?",
        titleKey: "dapp.areYouOkay",
        descKey: "dapp.ruokDesc",
        category: "dapp",
        status: "live",
        imagePrompt: "decentralized check-in DApp logo, Sui blockchain wallet icon, secure transfer emblem, blue and purple square logo",
        liveUrl: "https://ruok3.vercel.app/",
        githubUrl: "https://github.com/summertoo/ruok",
      },
      {
        id: "dapp-sui-write3",
        title: "Sui Write3",
        titleKey: "dapp.suiWrite3",
        descKey: "dapp.write3Desc",
        category: "dapp",
        status: "coming",
        imagePrompt: "novel writing platform logo, digital manuscript pages, Sui blockchain symbol, web3 publishing square icon",
        githubUrl: "https://github.com/etboodXJ/SuiWrite3",
      },
      {
        id: "opc-hub",
        title: "OPC Hub",
        desc:
          lang === "zh"
            ? "开源一人公司协作网络核心仓库，提供身份认证、任务协作、信任体系等基础设施。"
            : "Core repository for the Open Person Company collaborative network, providing identity, task collaboration, and trust infrastructure.",
        descKey: "dapp.ruokDesc",
        category: "tool",
        status: "live",
        imagePrompt: "open source collaboration network logo, interconnected nodes, one person company concept, blue and purple square emblem",
        githubUrl: "https://github.com/summertoo/opc-hub",
      },
      {
        id: "creative-space",
        title: "创意空间 (DeGame Tropical Island)",
        desc:
          lang === "zh"
            ? "提供创意空间，为创作者提供创意支持，激发灵感与协作。"
            : "A creative space providing inspiration and support for creators to collaborate and innovate.",
        descKey: "dapp.ruokDesc",
        category: "tool",
        status: "live",
        imagePrompt: "tropical island creative workspace logo, palm trees, white sand beach, creative tools emblem, square icon",
        githubUrl: "https://github.com/etboodXJ/DeGameTropicalIsLand",
      },
      {
        id: "oc-network",
        title: "OC Network (原创角色网络)",
        desc:
          lang === "zh"
            ? "原创角色网络，为创作者提供私有 AI 智能体，赋能角色创作与互动。"
            : "Original Character network providing private AI agents for creators, empowering character creation and interaction.",
        descKey: "dapp.ruokDesc",
        category: "tool",
        status: "live",
        imagePrompt: "original character AI network logo, anime-style characters, AI brain visualization, purple and blue square icon",
        githubUrl: "https://github.com/etboodXJ/ocnetwork",
      },
      {
        id: "sui-best-practices",
        title: "Sui Best Practices",
        titleKey: "os.suiBP",
        descKey: "os.suiBPDesc",
        category: "tool",
        status: "live",
        imagePrompt: "Sui blockchain best practices logo, code editor with Move language, developer documentation square icon",
        githubUrl: "https://github.com/majoson-chen/sui-best-practices",
      },
      {
        id: "stable-gateway",
        title:
          lang === "zh"
            ? "站长推荐：支持 GPT-5.4 / 5.5 的稳定中转站"
            : "Editor's Pick: Stable Gateway Supporting GPT-5.4 / 5.5",
        desc:
          lang === "zh"
            ? "一个稳定可用的 AI API 中转站，支持 GPT-5.4 / 5.5，适合开发、测试与日常调用。"
            : "A stable AI API gateway supporting GPT-5.4 / 5.5, suitable for development, testing, and daily use.",
        descKey: "dapp.ruokDesc",
        category: "tool",
        status: "live",
        imagePrompt: "AI API gateway logo, data flowing through secure tunnel, GPT neural network abstract, professional tech square icon",
        liveUrl: "https://api.gavinhub.online/register?aff=vGbL",
      },
      {
        id: "article-sui-move-series",
        title: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
        desc:
          lang === "zh"
            ? "在登链社区连载的 Sui Move 开发系列教程，从零基础到实战项目。"
            : "A Sui Move development tutorial series on LearnBlockchain, from beginner to real-world projects.",
        descKey: "dapp.ruokDesc",
        category: "article",
        status: "live",
        imagePrompt: "Sui Move programming tutorial logo, code and blockchain blocks, learning path concept, tech article square icon",
        liveUrl: "https://learnblockchain.cn/column/47",
        platformLabel: "登链社区",
      },
      {
        id: "article-detask",
        title: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
        desc:
          lang === "zh"
            ? "星航计划实战项目，从零开发 Web3 去中心化任务平台 DApp。"
            : "Star Voyage project: building a decentralized task platform DApp on Web3.",
        descKey: "dapp.ruokDesc",
        category: "article",
        status: "live",
        imagePrompt: "Web3 DApp development tutorial logo, DeTask decentralized task platform, step by step learning square icon",
        liveUrl: "https://learnblockchain.cn/column/43",
        platformLabel: "登链社区",
      },
      {
        id: "novel-coder-transmigrate",
        title: "码农穿越平民世界",
        desc:
          lang === "zh"
            ? "一个程序员意外穿越到平民世界，用代码思维解决古代生活难题的故事。已更新至第360章。"
            : "A web novel about a coder who transmigrates to the common people's world. Updated to chapter 360.",
        descKey: "dapp.ruokDesc",
        category: "novel",
        status: "live",
        imagePrompt: "programmer transmigrating novel logo, laptop floating in ancient Chinese courtyard, isekai story square icon",
        liveUrl: "https://fanqienovel.com/page/7516472366981975102",
        platformLabel: "番茄小说 · 360章",
      },
      {
        id: "novel-warlord-heroes",
        title: "群雄战记：中华英雄传",
        desc:
          lang === "zh"
            ? "重温经典武侠，群雄逐鹿的江湖故事。已更新至第四章：赤壁·我知道这把火要烧多久。"
            : "Relive classic wuxia tales of heroes contending for supremacy. Updated to Chapter 4: Red Cliff.",
        descKey: "dapp.ruokDesc",
        category: "novel",
        status: "live",
        imagePrompt: "Chinese wuxia novel logo, ancient Chinese heroes in martial arts poses, epic mountain background, square icon",
        liveUrl: "https://fanqienovel.com/page/7631541666125450302",
        platformLabel: "番茄小说 · 连载中",
      },
    ];
  }, [lang]);

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
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        <a href={p.liveUrl} target={p.liveUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
          <Button className="cyber-button-small">{t("project.play")}</Button>
        </a>
      );
    }

    if (p.category === "article" || p.category === "novel") {
      return (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
          <Button className="cyber-button-small">{t("project.read")}</Button>
        </a>
      );
    }

    return (
      <div className="flex flex-wrap gap-2">
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="cyber-button-small">{t("project.visit")}</Button>
          </a>
        )}
        {p.githubUrl && (
          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="cyber-button-small">{t("project.github")}</Button>
          </a>
        )}
      </div>
    );
  };

  const encodeImagePrompt = (prompt: string) => {
    return encodeURIComponent(prompt);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">{t("project.title")}</h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">{t("project.subtitle")}</p>
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
          {filteredProjects.length} {lang === "zh" ? "个项目" : "projects found"}
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
                        src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeImagePrompt(project.imagePrompt)}&image_size=square_hd`}
                        alt={project.title}
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
                        <h4 className="font-semibold text-lg truncate flex-1 min-w-0">{project.title}</h4>
                        {getStatusBadge(project.status)}
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${getCategoryColor(project.category)}`}>
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
                          {lang === "zh" ? "平台" : "Platform"}: {project.platformLabel}
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
