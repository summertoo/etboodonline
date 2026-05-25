"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { projects } from "@/data/projects";
import { novels } from "@/data/novels";
import { newsList } from "@/data/news";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";

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

function ProjectCard({
  title,
  titleKey,
  desc,
  descKey,
  logoUrl,
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
  logoUrl: string;
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
                src={logoUrl}
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
                <h4 className="font-semibold text-lg truncate">
                  {displayTitle}
                </h4>
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
              <p className="text-sm mb-3 cyber-subtitle line-clamp-2">
                {displayDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {isLive && liveUrl ? (
                  <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]" asChild>
                    <a
                      href={liveUrl}
                      target={liveUrl.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {t("dapps.visit")}
                    </a>
                  </Button>
                ) : !isLive ? (
                  <Button className="cyber-button-small" disabled>
                    {t("project.comingSoon")}
                  </Button>
                ) : null}
                {githubUrl && (
                  <Button className="cyber-button-small" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      {t("dapps.github")}
                    </a>
                  </Button>
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
  logoUrl,
  liveUrl,
  status,
  platform,
  index,
  t,
  lang,
}: {
  title: string;
  descKey: string;
  logoUrl: string;
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
                src={logoUrl}
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
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                      platform === "roblox"
                        ? "bg-red-100 text-red-700"
                        : "bg-cyan-100 text-cyan-700"
                    }`}
                  >
                    {platform === "roblox"
                      ? "Roblox"
                      : lang === "zh"
                        ? "网页"
                        : "Web"}
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
                <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]" asChild>
                  <a
                    href={liveUrl}
                    target={liveUrl.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {t("webgames.playNow")}
                  </a>
                </Button>
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

  const robloxGames = useMemo(
    () => projects.filter((p) => p.platform === "roblox"),
    [],
  );
  const webGames = useMemo(
    () => projects.filter((p) => p.category === "webgame"),
    [],
  );
  const dapps = useMemo(
    () => projects.filter((p) => p.category === "dapp"),
    [],
  );
  const tools = useMemo(
    () =>
      projects.filter(
        (p) =>
          p.category === "tool" &&
          p.id !== "stable-gateway" &&
          p.id !== "sui-best-practices" &&
          p.id !== "free-model",
      ),
    [],
  );
  const stableGateway = useMemo(
    () => projects.find((p) => p.id === "stable-gateway"),
    [],
  );
  const freeModel = useMemo(
    () => projects.find((p) => p.id === "free-model"),
    [],
  );
  const suiBestPractices = useMemo(
    () => projects.find((p) => p.id === "sui-best-practices"),
    [],
  );

function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
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
  );
}

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-24 cyber-hero relative overflow-hidden">
        <FloatingParticles />
        <div className="relative z-10">
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background:
                "linear-gradient(135deg, var(--cyber-primary), var(--cyber-secondary))",
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/novels">
              <Button className="cyber-button text-base px-8 py-3">
                {lang === "zh" ? "📚 双鱼小说" : "📚 Bilingual Novels"}
              </Button>
            </Link>
            <Link href="/project">
              <Button className="cyber-button-small text-base px-8 py-3 border-[var(--cyber-border)]">
                {lang === "zh" ? "🎮 所有项目" : "🎮 All Projects"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bilingual Novels - Featured Section */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {lang === "zh" ? "📚 双鱼小说 ∙ 中英对照阅读" : "📚 Bilingual Novels · Side-by-Side Reading"}
          </h3>
          <p className="mb-10 text-center cyber-subtitle max-w-2xl mx-auto">
            {lang === "zh"
              ? "原创网络小说，支持中英双语段落对照阅读。左中文右英文，轻松学语言，享受好故事。"
              : "Original web novels with paragraph-aligned bilingual reading. Chinese on the left, English on the right — learn a language while enjoying great stories."}
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novels.slice(0, 3).map((novel, i) => (
            <RevealSection key={novel.id} delay={i * 120}>
              <Card className="cyber-card group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center">
                      <span className="text-4xl">📖</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg line-clamp-1">
                          {lang === "zh" ? novel.title.zh : novel.title.en}
                        </h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2 ${
                            novel.status === "ongoing"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {novel.status === "ongoing"
                            ? lang === "zh"
                              ? "连载中"
                              : "Ongoing"
                            : lang === "zh"
                              ? "已完结"
                              : "Completed"}
                        </span>
                      </div>
                      <p className="text-sm mb-3 cyber-subtitle line-clamp-2">
                        {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[var(--cyber-muted)]">
                          {lang === "zh"
                            ? `共 ${novel.totalChapters} 章`
                            : `${novel.totalChapters} chapters`}
                        </span>
                        <Link href={`/novels/${novel.slug}`}>
                          <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]">
                            {lang === "zh" ? "开始阅读" : "Read"}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/novels">
            <Button
              variant="outline"
              className="cyber-button-small border-[var(--cyber-border)]"
            >
              {lang === "zh" ? "查看全部小说 →" : "View All Novels →"}
            </Button>
          </Link>
        </div>
      </section>

      {/* Web Games - First */}
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
              title={game.title!}
              descKey={game.descKey}
              logoUrl={game.logoUrl}
              liveUrl={game.liveUrl!}
              status={game.status}
              platform={game.platform}
              index={i}
              t={t}
              lang={lang}
            />
          ))}
        </div>
      </section>

      {/* Roblox Games - After Web Games */}
      <section className="py-20">
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
              title={game.title!}
              descKey={game.descKey}
              logoUrl={game.logoUrl}
              liveUrl={game.liveUrl!}
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
              logoUrl={dapp.logoUrl}
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
              logoUrl={tool.logoUrl}
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
          {stableGateway && (
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
              logoUrl={stableGateway.logoUrl}
              liveUrl={stableGateway.liveUrl}
              status={stableGateway.status}
              index={0}
              t={t}
            />
          )}
          {freeModel && (
            <ProjectCard
              title={t("freeModel.title")}
              desc={t("freeModel.desc")}
              logoUrl={freeModel.logoUrl}
              liveUrl={freeModel.liveUrl}
              status={freeModel.status}
              index={1}
              t={t}
            />
          )}
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
          {suiBestPractices && (
            <ProjectCard
              titleKey={suiBestPractices.titleKey}
              descKey={suiBestPractices.descKey}
              logoUrl={suiBestPractices.logoUrl}
              liveUrl={suiBestPractices.liveUrl}
              githubUrl="https://github.com/majoson-chen/sui-best-practices/pull/16"
              status={suiBestPractices.status}
              index={0}
              t={t}
            />
          )}
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

      {/* News */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            {t("news.title")}
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            {t("news.subtitle")}
          </p>
        </RevealSection>
        <div className="max-w-4xl mx-auto space-y-4">
          {/* 2026-05-25 AI HOT Daily */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🔥</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "AI HOT 日报 · 2026-05-25" : "AI HOT Daily · May 25, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "产品发布 · 行业动态 · 技巧与观点" : "Product Releases · Industry · Tips & Views"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [产品发布/更新]" : "📌 [Product Releases]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Luma Agents 规模化 UGC 广告生成" : "Luma Agents scales UGC ad generation"}</li>
                  <li>{lang === "zh" ? "OpenClaw 2026.5.22 发布" : "OpenClaw 2026.5.22 released"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [行业动态]" : "📌 [Industry]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "TrapDoor 供应链攻击窃取 AI 开发者凭证" : "TrapDoor attack steals AI dev credentials"}</li>
                  <li>{lang === "zh" ? "DeepSeek 旗舰模型永久 75% 折扣" : "DeepSeek 75% permanent discount"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [技巧与观点]" : "📌 [Tips & Views]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Codex 自我优化提示词框架" : "Codex self-optimizing prompt framework"}</li>
                  <li>{lang === "zh" ? "Claude Code 自动模式多任务并行" : "Claude Code auto mode multi-tasking"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2026-05-24 AI Daily */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🤖</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "🤖 AI 今日速报 · 2026-05-24" : "🤖 AI Daily · May 24, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "产品发布 · 行业动态 · 论文研究 · 技巧观点" : "Product Releases · Industry · Research · Tips"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [产品发布/更新]" : "📌 [Product Releases]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "StepAudio 2.5 实时语音发布" : "StepAudio 2.5 real-time voice"}</li>
                  <li>{lang === "zh" ? "Models.dev：开源 AI 模型数据库" : "Models.dev: open-source AI model DB"}</li>
                  <li>{lang === "zh" ? "Replit Agent + Squidler 全自动化 QA" : "Replit Agent + Squidler automated QA"}</li>
                  <li>{lang === "zh" ? "Claude Code v2.1.150 版本更新" : "Claude Code v2.1.150 released"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [行业动态]" : "📌 [Industry]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "微软：AI 使用成本高于人工工资" : "Microsoft: AI costs exceed human wages"}</li>
                  <li>{lang === "zh" ? "Anthropic 融资超 300 亿美元，估值反超 OpenAI" : "Anthropic raises $30B+ surpasses OpenAI"}</li>
                  <li>{lang === "zh" ? "74% CEO 因 AI 冻结或缩减招聘" : "74% of CEOs freeze hiring due to AI"}</li>
                  <li>{lang === "zh" ? "Mistral AI 收购 Emmi AI，加码工业 AI" : "Mistral AI acquires Emmi AI"}</li>
                  <li>{lang === "zh" ? "Kling AI 亮相戛纳" : "Kling AI debuts at Cannes"}</li>
                  <li>{lang === "zh" ? "Google 扩大与新加坡 AI 安全合作" : "Google expands AI safety in Singapore"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [论文研究]" : "📌 [Research]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "NVIDIA 扩散语言模型实现光速文本生成" : "NVIDIA diffusion LM achieves light-speed text"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [技巧与观点]" : "📌 [Tips & Views]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "飞书-Claude Code 桥接开源" : "Feishu-Claude Code bridge open-sourced"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2026-05-18 AI Daily - Newest */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🤖</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "🤖 AI 今日速报 · 2026-05-18" : "🤖 AI Daily · May 18, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "产品发布 · 论文研究 · 行业观点" : "Product Releases · Research · Industry Insights"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [产品发布]" : "📌 [Product Releases]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Grok Imagine 正式上线" : "Grok Imagine launches"}</li>
                  <li>{lang === "zh" ? "ChatGPT 手机端集成 Codex" : "ChatGPT mobile integrates Codex"}</li>
                  <li>{lang === "zh" ? "Zerostack 1.0.0 发布" : "Zerostack 1.0.0 released"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [论文研究]" : "📌 [Research]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Claude 5 天攻破 Apple M5 内核" : "Claude breaks Apple M5 in 5 days"}</li>
                  <li>{lang === "zh" ? "LLM 智能体记忆重写机制存缺陷" : "LLM agent memory rewrite has flaws"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [行业观点]" : "📌 [Industry Insights]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "微信读书数据可视化工具开源" : "WeChat Reading data tool open-sourced"}</li>
                  <li>{lang === "zh" ? "Anthropic CEO：软件即将免费化" : "Anthropic CEO: Software will become free"}</li>
                  <li>{lang === "zh" ? "微软 AI CEO：18 个月内 AI 将自动化白领工作" : "Microsoft AI CEO: AI will automate white-collar jobs"}</li>
                  <li>{lang === "zh" ? "GBrain 开源" : "GBrain open-sourced"}</li>
                  <li>{lang === "zh" ? "Gary Marcus：生成式 AI 幻觉问题" : "Gary Marcus: GenAI hallucination issues"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2026-05-16 新闻 */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">📡</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "新闻简报 · 2026-05-16" : "News Brief · May 16, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "AI科技、汽车出行、航天产业、财经消费、能源、民生监管" : "AI & Tech, Auto, Aerospace, Finance, Energy, Regulation"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "🤖 [AI & 科技]" : "🤖 [AI & Tech]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "OpenAI 再次重组高管团队：布罗克曼正式接管产品，ChatGPT、Codex 及开发者 API 整合为一个核心产品团队" : "OpenAI restructures leadership: Brockman takes over products, ChatGPT/Codex/API merged into one core team"}</li>
                  <li>{lang === "zh" ? "上海电信率先发布 Token 资费套餐：1元=25万额度点，支持话费支付，可调用30余款主流大模型" : "Shanghai Telecom launches Token pricing plan: ¥1=250K credits, phone bill payment, 30+ models available"}</li>
                  <li>{lang === "zh" ? "虚拟动点加入 OpenLET 具身智能开源数据集工作委员会，与百度智能云、北大等9家单位共建生态" : "Virtual Point joins OpenLET embodied AI open-source dataset committee with Baidu Cloud, PKU and 9 others"}</li>
                  <li>{lang === "zh" ? "蔚来高管解读神玑 NX9031 智驾芯片：5nm 制程，装车量已破 25 万片" : "NIO exec explains NX9031 self-driving chip: 5nm, 250K+ units deployed"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "🚗 [汽车出行]" : "🚗 [Auto & Mobility]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "华为鸿蒙智行首款旗舰 MPV 智界 V9 上市，售价 38.98—51.98 万元，搭载896线激光雷达" : "Huawei Harmony Intelligent V9 MPV launched: ¥389.8K–519.8K, 896-line LiDAR"}</li>
                  <li>{lang === "zh" ? "蔚来乐道 L80 上市，售价 24.28 万起，BaaS 电池租用 15.68 万起" : "NIO ONVO L80 launched: from ¥242.8K, BaaS from ¥156.8K"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "🚀 [航天 & 产业]" : "🚀 [Aerospace & Industry]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "SpaceX 拟推万亿火星薪酬方案 + 1拆5拆股，B类股10倍投票权确保马斯克控制权" : "SpaceX proposes trillion-dollar Mars compensation plan + 5:1 stock split"}</li>
                  <li>{lang === "zh" ? "波音称中国之行非常成功，收获 200 架飞机初步承诺" : "Boeing: China trip very successful, 200 aircraft preliminary commitments"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "💰 [财经 & 消费]" : "💰 [Finance & Consumer]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "贵州茅台四款产品提价，公斤飞天 2989→3119 元/瓶" : "Moutai raises prices on 4 products: 1L Feitian ¥2989→3119"}</li>
                  <li>{lang === "zh" ? "国内品牌金饰克价跌破 1400 元，周生生 1390 元/克" : "Domestic gold jewelry below ¥1400/g, Chow Sang Sang ¥1390/g"}</li>
                  <li>{lang === "zh" ? "国内航线燃油附加费今起上调" : "Domestic flight fuel surcharges raised starting today"}</li>
                  <li>{lang === "zh" ? "FF 获 2500 万美元新融资，加速 EAI 战略落地" : "Faraday Future secures $25M new funding, accelerating EAI strategy"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "🏭 [产业 & 能源]" : "🏭 [Industry & Energy]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "国内首笔！数据中心接入虚拟电厂参与电力现货市场交易 — 算电协同从概念到落地" : "China\u0027s first: data centers join virtual power plant for spot market trading — compute-electricity synergy realized"}</li>
                  <li>{lang === "zh" ? "海信与印尼国家投资部门战略合作签约，覆盖全领域产业与技术" : "Hisense signs strategic cooperation with Indonesia\u0027s national investment authority"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "🏥 [民生 & 监管]" : "🏥 [Public & Regulation]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "国家医保局约谈老百姓、养天和、益丰、河南张仲景等4家连锁药房，针对化妆品串换药品违规使用医保基金" : "NHSA summons 4 pharmacy chains over swapping cosmetics for drugs to misuse medical insurance funds"}</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[rgba(14,165,233,0.05)] border border-[rgba(14,165,233,0.1)]">
              <p className="text-xs font-semibold text-[var(--cyber-primary)]">
                {lang === "zh" ? "📊 今日关键信号" : "📊 Key Signal Today"}
              </p>
              <p className="text-xs mt-1">
                {lang === "zh"
                  ? "数据中心首次接入虚拟电厂参与现货交易 — \"算电协同\"从概念到落地的标志性事件，与甄来电售电业务方向高度契合，值得关注跟进。"
                  : "First data center integration with virtual power plant for spot trading — a landmark event for compute-electricity synergy, highly relevant to power sales business direction."}
              </p>
            </div>
          </div>

          {/* 2026-05-14 新闻 */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🤖</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "AI HOT 日报 · 2026-05-12 速览" : "AI HOT Daily · 2026-05-12"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "AI 与科技行业最新动态" : "Latest AI and tech industry updates"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "📌 [模型发布]" : "📌 [Model Releases]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>
                    {lang === "zh"
                      ? "Thinking Machines 发布原生多模态交互模型（前 OpenAI CTO Mira 创立），200ms 粒度实时响应音视频"
                      : "Thinking Machines launches multimodal interactive model (founded by ex-OpenAI CTO Mira), real-time audio/video at 200ms granularity"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "AntLingAGI 发布 Ring-2.6-1T 万亿参数推理模型，OpenRouter 免费到 5/15"
                      : "AntLingAGI releases Ring-2.6-1T trillion-parameter reasoning model, free on OpenRouter until 5/15"}
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "📌 [产品更新]" : "📌 [Product Updates]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>
                    {lang === "zh"
                      ? "OpenAI 推出 Daybreak 网络安全防御系统"
                      : "OpenAI launches Daybreak cybersecurity defense system"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "Anthropic 在 AWS 上线 Claude 平台，同时开源金融 AI 全栈模板（10 Agent + 11 MCP 连接器）"
                      : "Anthropic launches Claude on AWS (self-operated), open-sources finance AI full-stack template (10 Agents + 11 MCP connectors)"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "Replit 上线并行代理（同时跑 10 个 Agent）"
                      : "Replit launches parallel agents (10 concurrent agents)"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "Claude Code v2.1.139 新增 Agent 视图和 /goal 命令"
                      : "Claude Code v2.1.139 adds Agent view and /goal command"}
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                  {lang === "zh" ? "📌 [行业大事]" : "📌 [Industry News]"}
                </p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>
                    {lang === "zh"
                      ? "Anthropic 估值 5 天 +2000 亿美元（链上 1.4 万亿），年收入 12 个月增长 1400%"
                      : "Anthropic valuation +$200B in 5 days (on-chain $1.4T), revenue up 1400% in 12 months"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "中国首例 AI 代写种草笔记案宣判，赔平台 10 万"
                      : "China\'s first AI-generated content lawsuit rules against defendant, fined ¥100K"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "npm 遭大规模供应链投毒（TanStack/Mistral 等 160+ 包），窃取云密钥"
                      : "npm hit by massive supply chain attack (160+ packages including TanStack/Mistral), stealing cloud keys"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "谷歌披露黑客用 AI 挖漏洞成功利用"
                      : "Google discloses hackers successfully exploited vulnerabilities with AI"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "菲尔兹奖得主 Gowers 实测 GPT-5.5 Pro：17 分钟产出论文级成果，警告数学博士生面临危机"
                      : "Fields Medalist Gowers tests GPT-5.5 Pro: produces paper-level results in 17 mins, warns math PhDs face disruption"}
                  </li>
                  <li>
                    {lang === "zh"
                      ? "Cognition AI 总部首度公开：18 个月做到 $4.45 亿年化营收"
                      : "Cognition AI HQ revealed: $445M ARR in 18 months"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[rgba(14,165,233,0.05)] border border-[rgba(14,165,233,0.1)]">
              <p className="text-xs font-semibold text-[var(--cyber-primary)]">
                {lang === "zh" ? "💡 一句判断" : "💡 Key Takeaway"}
              </p>
              <p className="text-xs mt-1">
                {lang === "zh"
                  ? "Anthropic 今天最值得关注：估值火箭 + AWS 落地 + 开源金融模板 → 从模型公司往企业 AI 基础设施 + 行业标准制定者方向加速转型。"
                  : "Anthropic today: skyrocketing valuation + AWS launch + open-source finance template → accelerating from a model company into enterprise AI infrastructure + industry standard setter."}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🏛️</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "📰 2026年5月14日 新闻概要" : "📰 News Summary · May 14, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "中美关系、市场动态、科技AI、国际及新能源" : "China-US relations, markets, tech AI, international & new energy"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [中美关系]" : "📌 [China-US Relations]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "习近平与特朗普在北京人民大会堂举行会谈" : "Xi Jinping meets Trump at the Great Hall of the People in Beijing"}</li>
                  <li>{lang === "zh" ? "习近平指出：中美经贸关系的本质是互利共赢，贸易战没有赢家" : "Xi: China-US economic ties are mutually beneficial, no winner in trade war"}</li>
                  <li>{lang === "zh" ? "双方经贸团队已达成总体平衡积极的成果" : "Both sides economic teams reached balanced and positive outcomes"}</li>
                  <li>{lang === "zh" ? "习近平：让2026年成为中美关系继往开来的历史性、标志性年份" : "Xi: Make 2026 a historic, landmark year for China-US relations"}</li>
                  <li>{lang === "zh" ? "特朗普：中美两国有着美好的未来" : "Trump: China and the US have a beautiful future together"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [市场动态]" : "📌 [Market Moves]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "A股下跌：创业板指跌超2%，沪指跌0.95%，深成指跌1.58%" : "A-shares fall: ChiNext down 2%+, Shanghai -0.95%, Shenzhen -1.58%"}</li>
                  <li>{lang === "zh" ? "成交放量：沪深两市成交额连续第24个交易日突破2万亿" : "Trading volume: Shanghai & Shenzhen exceed 2 trillion for 24 consecutive trading days"}</li>
                  <li>{lang === "zh" ? "南向资金：净卖出额达50亿港元" : "Southbound flows: net selling reaches HK$5 billion"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [科技与AI]" : "📌 [Tech & AI]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "阿里发布财报：企业级Agent平台悟空开始规模化放量" : "Alibaba earnings: enterprise Agent platform Wukong begins scaling"}</li>
                  <li>{lang === "zh" ? "生成式AI爆发：移动应用内购收入3年增长超32倍" : "GenAI boom: mobile in-app purchase revenue up 32x in 3 years"}</li>
                  <li>{lang === "zh" ? "台积电预测：到2030年全球芯片市场规模将超过1.5万亿美元" : "TSMC predicts global chip market to exceed $1.5T by 2030"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [国际动态]" : "📌 [International]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "欧佩克下调2026年全球石油需求增长预测" : "OPEC cuts 2026 global oil demand growth forecast"}</li>
                  <li>{lang === "zh" ? "欧盟对华聚酯纺粘无纺布征收45.6%-50.0%反倾销税" : "EU imposes 45.6%-50.0% anti-dumping duties on Chinese PET spunbond"}</li>
                  <li>{lang === "zh" ? "韩国政府警告外汇市场过度波动，密切关注三星罢工风险" : "Korea warns of FX market volatility, monitors Samsung strike risk"}</li>
                  <li>{lang === "zh" ? "花旗计划今年扩增亚洲主经纪业务人力10%" : "Citi plans to expand Asia prime brokerage headcount by 10%"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [新能源]" : "📌 [New Energy]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "SHEIN 2025年光伏装机容量同比增长66.8%，绿色电力使用比例超85%" : "SHEIN 2025 solar capacity up 66.8% YoY, green electricity over 85%"}</li>
                  <li>{lang === "zh" ? "电池级碳酸锂价格下跌1750元/吨，报196150元/吨" : "Battery-grade lithium carbonate price drops RMB 1,750/ton to RMB 196,150/ton"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [其他]" : "📌 [Others]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "openEuler 宇航级嵌入式星载操作系统首次在商业卫星实现在轨运行" : "openEuler aerospace-grade embedded OS debuts on commercial satellite in orbit"}</li>
                  <li>{lang === "zh" ? "小米已注册多款新车关联商标：XIAOMI YU7、YU7 GT、SU7" : "Xiaomi registers multiple new car trademarks: YU7, YU7 GT, SU7"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackForm lang={lang} />

      <footer className="py-10 cyber-footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">{t("footer.about")}</h5>
            <p className="cyber-subtitle text-sm">{t("footer.aboutDesc")}</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">{lang === "zh" ? "双鱼小说" : "Novels"}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>{lang === "zh" ? "码农穿越平民世界" : "Coder Transmigrates"}</li>
              <li>{lang === "zh" ? "群雄战记：中华英雄传" : "Warlord Saga"}</li>
            </ul>
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
