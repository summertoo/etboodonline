"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { projects } from "@/data/projects";
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
          {/* 2026-05-29 AI HOT Daily */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🔥</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "AI HOT 日报 · 2026-05-29" : "AI HOT Daily · May 29, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "模型发布 · 融资动态 · 行业热点" : "Model Releases · Funding · Industry"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [模型发布/更新]" : "📌 [Model Releases]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Claude Opus 4.8 发布：编码/推理全面升级" : "Claude Opus 4.8: coding/reasoning upgrade"}</li>
                  <li>{lang === "zh" ? "Grok Build 0.1 API 公测" : "Grok Build 0.1 API public beta"}</li>
                  <li>{lang === "zh" ? "Claude Code 动态工作流：并行数百子智能体" : "Claude Code dynamic workflows: parallel agents"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [融资动态]" : "📌 [Funding]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Anthropic 650 亿美元 H 轮，估值 9650 亿美元" : "Anthropic $65B Series H at $965B valuation"}</li>
                  <li>{lang === "zh" ? "DeepSeek 计划科创板 IPO，估值 3500 亿人民币" : "DeepSeek plans STAR Market IPO at ¥350B"}</li>
                  <li>{lang === "zh" ? "OpenRouter 1.13 亿美元 B 轮融资" : "OpenRouter $113M Series B"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [行业热点]" : "📌 [Industry]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Qwen3.7-Max 登顶 OpenRouter 热门榜" : "Qwen3.7-Max tops OpenRouter"}</li>
                  <li>{lang === "zh" ? "SIA 框架：AI 递归自我改进，性能提升 56%" : "SIA: recursive self-improvement +56%"}</li>
                  <li>{lang === "zh" ? "英伟达 Polar 框架让 Codex 跑分暴涨 595%" : "NVIDIA Polar boosts Codex 595%"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2026-05-28 AI HOT Daily */}
          <div className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg">🔥</span>
              <div>
                <h4 className="font-semibold">
                  {lang === "zh" ? "AI HOT 日报 · 2026-05-28" : "AI HOT Daily · May 28, 2026"}
                </h4>
                <p className="text-xs text-[var(--cyber-muted)]">
                  {lang === "zh" ? "产品发布 · 行业动态 · 论文研究" : "Product Releases · Industry · Research"}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [产品发布/更新]" : "📌 [Model Releases]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Runway 推出 MCP 服务器" : "Runway MCP server"}</li>
                  <li>{lang === "zh" ? "Claude Code v2.1.152 更新" : "Claude Code v2.1.152"}</li>
                  <li>{lang === "zh" ? "FastVideo Dreamverse 开源" : "FastVideo Dreamverse"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [行业动态]" : "📌 [Industry]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Cognition 估值 260 亿美元" : "Cognition $26B"}</li>
                  <li>{lang === "zh" ? "阿里云入选 Omdia 领导者" : "Alibaba Cloud Omdia leader"}</li>
                  <li>{lang === "zh" ? "英伟达台湾年投资 1500 亿美元" : "NVIDIA Taiwan $150B yearly"}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[var(--cyber-primary)] mb-1">{lang === "zh" ? "📌 [论文研究]" : "📌 [Research]"}</p>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>{lang === "zh" ? "Qwen3.5 推理达 580 tokens/秒" : "Qwen3.5: 580 tps"}</li>
                  <li>{lang === "zh" ? "ITBench-AA：所有模型低于 50%" : "ITBench-AA: all below 50%"}</li>
                </ul>
              </div>
            </div>
          </div>

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
          <div>
            <h5 className="font-bold mb-2">友情链接</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>
                <a
                  href="https://etboodnovel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cyber-primary)] transition-colors"
                >
                  双鱼小说
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
