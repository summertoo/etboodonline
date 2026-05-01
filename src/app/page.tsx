"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function encodeImagePrompt(prompt: string) {
  return encodeURIComponent(prompt);
}

function ProjectCard({
  title,
  titleKey,
  desc,
  descKey,
  imagePrompt,
  liveUrl,
  githubUrl,
  status,
  index,
  t,
}: {
  title?: string;
  titleKey?: string;
  desc?: string;
  descKey?: string;
  imagePrompt: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "live" | "coming" | "new";
  index: number;
  t: (k: string) => string;
}) {
  const displayTitle = title || (titleKey ? t(titleKey) : "");
  const displayDesc = desc || (descKey ? t(descKey) : "");
  const isLive = status !== "coming";
  const isNew = status === "new";

  return (
    <RevealSection delay={index * 120}>
      <Card className="cyber-card group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeImagePrompt(imagePrompt)}&image_size=square_hd`}
                alt={displayTitle}
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
                    parent.innerHTML = '<span class="text-3xl">💼</span>';
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-lg truncate">{displayTitle}</h4>
                {isNew && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] text-[var(--cyber-primary)] font-bold flex-shrink-0">
                    NEW
                  </span>
                )}
                {!isLive && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium flex-shrink-0">
                    COMING SOON
                  </span>
                )}
              </div>
              <p className="text-sm mb-3 cyber-subtitle line-clamp-2">{displayDesc}</p>
              <div className="flex flex-wrap gap-2">
                {isLive && liveUrl ? (
                  <a href={liveUrl} target={liveUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
                    <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]">
                      {t("dapps.visit")}
                    </Button>
                  </a>
                ) : !isLive ? (
                  <Button className="cyber-button-small" disabled>
                    {t("project.comingSoon")}
                  </Button>
                ) : null}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="cyber-button-small">{t("dapps.github")}</Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
}

function GameCard({
  title,
  descKey,
  imagePrompt,
  liveUrl,
  status,
  platform,
  index,
  t,
  lang,
}: {
  title: string;
  descKey: string;
  imagePrompt: string;
  liveUrl: string;
  status: "live" | "coming" | "new";
  platform?: "roblox" | "web";
  index: number;
  t: (k: string) => string;
  lang: string;
}) {
  const isLive = status === "live" || status === "new";
  const isNew = status === "new";

  return (
    <RevealSection delay={index * 120}>
      <Card className="cyber-card group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeImagePrompt(imagePrompt)}&image_size=square_hd`}
                alt={title}
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
                    parent.innerHTML = '<span class="text-3xl">🎮</span>';
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h4 className="font-semibold text-lg truncate">{title}</h4>
                {platform && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                    platform === "roblox" ? "bg-red-100 text-red-700" : "bg-cyan-100 text-cyan-700"
                  }`}>
                    {platform === "roblox" ? "Roblox" : (lang === "zh" ? "网页" : "Web")}
                  </span>
                )}
                {isNew && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(249,115,22,0.1)] text-[var(--cyber-primary)] font-bold flex-shrink-0">
                    NEW
                  </span>
                )}
                {!isLive && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium flex-shrink-0">
                    COMING SOON
                  </span>
                )}
              </div>
              <p className="text-sm mb-3 cyber-subtitle">{t(descKey)}</p>
              {isLive ? (
                <a href={liveUrl} target={liveUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
                  <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]">
                    {t("webgames.playNow")}
                  </Button>
                </a>
              ) : (
                <Button className="cyber-button-small" disabled>
                  {t("roblox.comingSoon")}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
}

export default function Homepage() {
  const { t, lang } = useLang();
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "ok" | "dup" | "error"
  >("idle");

  async function handleSubscribe() {
    const email = subEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSubStatus(data.message.includes("Already") ? "dup" : "ok");
      if (!data.message.includes("Already")) setSubEmail("");
    } catch {
      setSubStatus("error");
    }
  }

  const robloxGames = [
    {
      id: 1,
      title: "Apex Mind",
      descKey: "game.apexMindDesc",
      imagePrompt: "futuristic mind puzzle game logo with glowing blue neural network, Roblox 3D icon style, cyberpunk aesthetic, minimalist square emblem",
      liveUrl: "https://www.roblox.com/games/126170387607652",
      status: "live" as const,
      platform: "roblox" as const,
    },
    {
      id: 2,
      title: "LOBSTER BUMP",
      descKey: "game.lobsterBumpDesc",
      imagePrompt: "cartoon red lobster bumping game logo, Roblox style icon, playful underwater theme, vibrant colors, square emblem",
      liveUrl: "https://www.roblox.com/games/102614376416074",
      status: "live" as const,
      platform: "roblox" as const,
    },
    {
      id: 3,
      title: "WARLORD SAGA",
      descKey: "game.warlordSagaDesc",
      imagePrompt: "epic fantasy warlord battle logo, ancient Chinese warfare theme, dramatic warrior emblem, Roblox style square icon",
      liveUrl: "",
      status: "coming" as const,
      platform: "roblox" as const,
    },
  ];

  const webGames = [
    {
      id: 1,
      title: "🦞 龙虾跑酷 (Lobster Run)",
      descKey: "game.lobsterRunDesc",
      imagePrompt: "cute red lobster running through obstacles, 2D platformer game logo, cartoon ocean background, square icon design",
      liveUrl: "/h5game01/龙虾跑酷.html",
      status: "new" as const,
      platform: "web" as const,
    },
    {
      id: 2,
      title: "Mini Soccer",
      descKey: "game.miniSoccerDesc",
      imagePrompt: "mini soccer game logo, stylized football players, neon sports field, cyberpunk style square icon",
      liveUrl: "https://soccerdemo.edgeone.app/",
      status: "live" as const,
      platform: "web" as const,
    },
    {
      id: 3,
      title: "🏮 群雄战记：中华英雄传",
      descKey: "game.warlordHeroesDesc",
      imagePrompt: "ancient Chinese Three Kingdoms heroes logo, traditional Chinese architecture, warrior emblem, square game icon",
      liveUrl: "https://games.soonjy.com/public/gameLobby/?projectId=69cb5b0280d0cf54f562a136&inviteCode=1BBDC0C1",
      status: "new" as const,
      platform: "web" as const,
    },
    {
      id: 4,
      title: "FootBall Game",
      descKey: "game.footballDesc",
      imagePrompt: "football shootout game logo, goalkeeper diving save, striker kicking ball, dramatic sports square icon",
      liveUrl: "/football/football-game.html",
      status: "new" as const,
      platform: "web" as const,
    },
  ];

  const dapps = [
    {
      id: 1,
      titleKey: "dapp.areYouOkay",
      descKey: "dapp.ruokDesc",
      imagePrompt: "decentralized check-in DApp logo, Sui blockchain wallet icon, secure transfer emblem, blue and purple square logo",
      liveUrl: "https://ruok3.vercel.app/",
      githubUrl: "https://github.com/summertoo/ruok",
      status: "live" as const,
    },
    {
      id: 2,
      titleKey: "dapp.miniSoccer",
      descKey: "game.miniSoccerDesc",
      imagePrompt: "mini soccer game logo, stylized football players, neon sports field, cyberpunk style square icon",
      liveUrl: "https://soccerdemo.edgeone.app/",
      githubUrl: "",
      status: "live" as const,
    },
    {
      id: 3,
      titleKey: "dapp.suiWrite3",
      descKey: "dapp.write3Desc",
      imagePrompt: "novel writing platform logo, digital manuscript pages, Sui blockchain symbol, web3 publishing square icon",
      liveUrl: "",
      githubUrl: "https://github.com/etboodXJ/SuiWrite3",
      status: "coming" as const,
    },
  ];

  const tools = [
    {
      id: 1,
      title: "OPC Hub",
      desc:
        lang === "zh"
          ? "开源一人公司协作网络核心仓库，提供身份认证、任务协作、信任体系等基础设施。"
          : "Core repository for the Open Person Company collaborative network, providing identity, task collaboration, and trust infrastructure.",
      imagePrompt: "open source collaboration network logo, interconnected nodes, one person company concept, blue and purple square emblem",
      githubUrl: "https://github.com/summertoo/opc-hub",
      status: "live" as const,
    },
    {
      id: 2,
      title: "创意空间 (DeGame Tropical Island)",
      desc:
        lang === "zh"
          ? "提供创意空间，为创作者提供创意支持，激发灵感与协作。"
          : "A creative space providing inspiration and support for creators to collaborate and innovate.",
      imagePrompt: "tropical island creative workspace logo, palm trees, white sand beach, creative tools emblem, square icon",
      githubUrl: "https://github.com/etboodXJ/DeGameTropicalIsLand",
      status: "live" as const,
    },
    {
      id: 3,
      title: "OC Network (原创角色网络)",
      desc:
        lang === "zh"
          ? "原创角色网络，为创作者提供私有 AI 智能体，赋能角色创作与互动。"
          : "Original Character network providing private AI agents for creators, empowering character creation and interaction.",
      imagePrompt: "original character AI network logo, anime-style characters, AI brain visualization, purple and blue square icon",
      githubUrl: "https://github.com/etboodXJ/ocnetwork",
      status: "live" as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-24 cyber-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[var(--cyber-primary)] opacity-20"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, var(--cyber-primary), var(--cyber-secondary))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            {t("hero.title")}
          </h2>
          <p className="mb-4 cyber-subtitle text-lg max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <p className="mb-8 text-sm cyber-subtitle opacity-70">
            {t("hero.tagline")}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="cyber-button"
              onClick={() => window.open("mailto:etbood@gmail.com")}
            >
              {t("hero.contact")}
            </Button>
            <a href="#roblox-games">
              <Button
                variant="outline"
                className="cyber-button-small border-[var(--cyber-primary)] text-[var(--cyber-primary)]"
              >
                {t("hero.viewGames")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="roblox-games" className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("roblox.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("roblox.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {robloxGames.map((game, i) => (
            <GameCard
              key={game.id}
              title={game.title}
              descKey={game.descKey}
              imagePrompt={game.imagePrompt}
              liveUrl={game.liveUrl}
              status={game.status}
              platform={game.platform}
              index={i}
              t={t}
              lang={lang}
            />
          ))}
        </div>
      </section>

      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("webgames.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("webgames.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webGames.map((game, i) => (
            <GameCard
              key={game.id}
              title={game.title}
              descKey={game.descKey}
              imagePrompt={game.imagePrompt}
              liveUrl={game.liveUrl}
              status={game.status}
              platform={game.platform}
              index={i}
              t={t}
              lang={lang}
            />
          ))}
        </div>
      </section>

      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("dapps.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("dapps.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dapps.map((dapp, i) => (
            <ProjectCard
              key={dapp.id}
              titleKey={dapp.titleKey}
              descKey={dapp.descKey}
              imagePrompt={dapp.imagePrompt}
              liveUrl={dapp.liveUrl}
              githubUrl={dapp.githubUrl}
              status={dapp.status}
              index={i}
              t={t}
            />
          ))}
        </div>
      </section>

      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("opc.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("opc.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <ProjectCard
              key={tool.id}
              title={tool.title}
              desc={tool.desc}
              imagePrompt={tool.imagePrompt}
              githubUrl={tool.githubUrl}
              status={tool.status}
              index={i}
              t={t}
            />
          ))}
        </div>
      </section>

      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("gateway.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("gateway.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title={
              lang === "zh"
                ? "站长推荐：支持 GPT-5.4 / 5.5 的稳定中转站"
                : "Editor's Pick: Stable Gateway Supporting GPT-5.4 / 5.5"
            }
            desc={
              lang === "zh"
                ? "一个稳定可用的 AI API 中转站，支持 GPT-5.4 / 5.5，适合开发、测试与日常调用。"
                : "A stable AI API gateway supporting GPT-5.4 / 5.5, suitable for development, testing, and daily use."
            }
            imagePrompt="AI API gateway logo, data flowing through secure tunnel, GPT neural network abstract, professional tech square icon"
            liveUrl="https://api.gavinhub.online/register?aff=vGbL"
            status="live"
            index={0}
            t={t}
          />
        </div>
      </section>

      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("opensource.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("opensource.subtitle")}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            titleKey="os.suiBP"
            descKey="os.suiBPDesc"
            imagePrompt="Sui blockchain best practices logo, code editor with Move language, developer documentation square icon"
            liveUrl="https://github.com/majoson-chen/sui-best-practices"
            githubUrl="https://github.com/majoson-chen/sui-best-practices/pull/16"
            status="live"
            index={0}
            t={t}
          />
        </div>
      </section>

      <RevealSection>
        <section className="py-16">
          <div className="flex justify-center cyber-image-container">
            <img
              alt="ZD Tech"
              height={300}
              src="/detask9.png"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
                maxWidth: "100%",
              }}
              width={500}
              loading="lazy"
            />
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20">
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("newsletter.title")}
          </h3>
          <p className="text-center cyber-subtitle mb-8">
            {t("newsletter.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Input
              className="cyber-input w-72"
              placeholder={t("newsletter.placeholder")}
              type="email"
              value={subEmail}
              onChange={(e) => {
                setSubEmail(e.target.value);
                setSubStatus("idle");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            />
            <Button
              className="cyber-button"
              onClick={handleSubscribe}
              disabled={subStatus === "loading"}
            >
              {subStatus === "loading"
                ? t("newsletter.subscribing")
                : t("newsletter.subscribe")}
            </Button>
          </div>
          {subStatus === "ok" && (
            <p className="text-center mt-4 text-green-600 font-medium">
              {t("newsletter.success")}
            </p>
          )}
          {subStatus === "dup" && (
            <p className="text-center mt-4 text-amber-600 font-medium">
              {t("newsletter.duplicate")}
            </p>
          )}
          {subStatus === "error" && (
            <p className="text-center mt-4 text-red-500 font-medium">
              {t("newsletter.error")}
            </p>
          )}
        </section>
      </RevealSection>

      <footer className="py-10 cyber-footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">{t("footer.about")}</h5>
            <p className="cyber-subtitle text-sm">{t("footer.aboutDesc")}</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.games")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>Apex Mind</li>
              <li>LOBSTER BUMP</li>
              <li>WARLORD SAGA</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.projects")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>Are You Okay?</li>
              <li>Sui Write3</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.connect")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>
                <a
                  href="mailto:etbood@gmail.com"
                  className="hover:text-[var(--cyber-primary)] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/etboodXJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cyber-primary)] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="cyber-subtitle text-sm">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
