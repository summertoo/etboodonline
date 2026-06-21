"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { latestNewsList, newsCategoryMeta } from "@/data/news";
import { projects } from "@/data/projects";
import Link from "next/link";
import FeedbackForm from "@/components/FeedbackForm";
import AuthModal from "@/components/AuthModal";
import ProjectActions from "@/components/ProjectActions";
import SiteUpdateNotice from "@/components/SiteUpdateNotice";
import TrackedProjectButton from "@/components/TrackedProjectButton";
import { fetchProjectSocialStats, type ProjectSocialStat } from "@/lib/social";
import { supabase } from "@/lib/supabase";

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
  id,
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
  socialStat,
  isLoggedIn,
  onRequireLogin,
}: {
  id: string;
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
  socialStat?: ProjectSocialStat;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
}) {
  const displayTitle = titleKey ? t(titleKey) : title || "";
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
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                <h4 className="w-full min-w-0 text-base font-semibold leading-6 break-words sm:w-auto sm:text-lg sm:truncate">
                  {displayTitle}
                </h4>
                <div className="flex flex-wrap items-center gap-2">
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
              </div>
              <p className="text-sm mb-3 cyber-subtitle line-clamp-2">
                {displayDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {isLive && liveUrl ? (
                  <TrackedProjectButton
                    projectId={id}
                    href={liveUrl}
                    sourcePage="home"
                    className="cyber-button-small group-hover:border-[var(--cyber-hover-pink)] group-hover:text-[var(--cyber-hover-pink)]"
                  >
                    {t("dapps.visit")}
                  </TrackedProjectButton>
                ) : !isLive ? (
                  <Button className="cyber-button-small" disabled>
                    {t("project.comingSoon")}
                  </Button>
                ) : null}
                {githubUrl && (
                  <Button className="cyber-button-small" asChild>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("dapps.github")}
                    </a>
                  </Button>
                )}
              </div>
              <ProjectActions
                projectId={id}
                projectTitle={displayTitle}
                initialStat={socialStat}
                isLoggedIn={isLoggedIn}
                onRequireLogin={onRequireLogin}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
}

function GameCard({
  id,
  title,
  titleKey,
  descKey,
  logoUrl,
  liveUrl,
  status,
  platform,
  index,
  t,
  lang,
  socialStat,
  isLoggedIn,
  onRequireLogin,
}: {
  id: string;
  title?: string;
  titleKey?: string;
  descKey: string;
  logoUrl: string;
  liveUrl: string;
  status: "live" | "coming" | "new";
  platform?: "roblox" | "web";
  index: number;
  t: (k: string) => string;
  lang: string;
  socialStat?: ProjectSocialStat;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
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
                alt={titleKey ? t(titleKey) : title || ""}
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
                <h4 className="w-full font-semibold text-base leading-6 break-words sm:w-auto sm:text-lg sm:truncate">
                  {titleKey ? t(titleKey) : title || ""}
                </h4>
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
                <div className="flex flex-wrap gap-2">
                  <TrackedProjectButton
                    projectId={id}
                    href={liveUrl}
                    sourcePage="home"
                    className="cyber-button-small group-hover:border-[var(--cyber-hover-pink)] group-hover:text-[var(--cyber-hover-pink)]"
                  >
                    {t("webgames.playNow")}
                  </TrackedProjectButton>
                </div>
              ) : (
                <Button className="cyber-button-small" disabled>
                  {t("roblox.comingSoon")}
                </Button>
              )}
              <ProjectActions
                projectId={id}
                projectTitle={title}
                initialStat={socialStat}
                isLoggedIn={isLoggedIn}
                onRequireLogin={onRequireLogin}
              />
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
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [socialStats, setSocialStats] = useState<
    Record<string, ProjectSocialStat>
  >({});
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "ok" | "dup" | "error"
  >("idle");
  const [wishText, setWishText] = useState("");
  const [wishContact, setWishContact] = useState("");
  const [wishSubmitting, setWishSubmitting] = useState(false);
  const [wishMessage, setWishMessage] = useState("");
  const [wishMessageType, setWishMessageType] = useState<"success" | "error">(
    "success",
  );

  async function submitWish() {
    const text = wishText.trim();
    if (!text) return;
    setWishSubmitting(true);
    setWishMessage("");
    try {
      const payload: Record<string, string> = {
        idea: text,
        created_at: new Date().toISOString(),
      };
      const contact = wishContact.trim();
      if (contact) payload.contact = contact;
      const { error } = await supabase.from("game_wishes").insert(payload);
      if (error) throw error;
      setWishText("");
      setWishContact("");
      setWishMessageType("success");
      setWishMessage(t("hero.wishSuccess"));
    } catch {
      setWishMessageType("error");
      setWishMessage(t("hero.wishError"));
    } finally {
      setWishSubmitting(false);
    }
  }

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
    () =>
      projects
        .filter((p) => p.category === "webgame")
        .sort(
          (a, b) =>
            new Date(b.publishedAt || 0).getTime() -
            new Date(a.publishedAt || 0).getTime(),
        ),
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
          p.id !== "sui-best-practices",
      ),
    [],
  );
  const stableGateway = useMemo(
    () => projects.find((p) => p.id === "stable-gateway"),
    [],
  );
  const suiBestPractices = useMemo(
    () => projects.find((p) => p.id === "sui-best-practices"),
    [],
  );
  const homepageNews = latestNewsList;

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
      <SiteUpdateNotice />
      <Navbar />

      <main>
        <section className="text-center py-16 md:py-24 cyber-hero relative overflow-hidden">
          <FloatingParticles />
          <div className="relative z-10">
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-2"
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
            </h1>
            <p className="mb-4 cyber-subtitle text-lg max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <p className="mb-8 text-sm cyber-subtitle opacity-70">
              {t("hero.tagline")}
            </p>

            <div className="mb-8 mx-auto max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe                                                 
                src="//player.bilibili.com/player.html?isOutside=true&aid=116787626642838&bvid=BV177jt6pEfa&cid=39288112754&p=1"
                title="ZD Tech 工作室介绍视频"
                scrolling="no"
                frameBorder="no"
                allowFullScreen={true}
                className="w-full h-full"
              />
            </div>
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex flex-col gap-2">
                  <input
                    type="text"
                    value={wishText}
                    onChange={(e) => setWishText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submitWish();
                    }}
                    placeholder={t("hero.wishPlaceholder")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--cyber-primary)] focus:border-transparent transition-all"
                    disabled={wishSubmitting}
                  />
                  <input
                    type="text"
                    value={wishContact}
                    onChange={(e) => setWishContact(e.target.value)}
                    placeholder={t("hero.wishContactPlaceholder")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--cyber-primary)] focus:border-transparent transition-all opacity-70"
                    disabled={wishSubmitting}
                  />
                </div>
                <button
                  onClick={submitWish}
                  disabled={wishSubmitting || !wishText.trim()}
                  className="px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed self-start"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--cyber-primary), var(--cyber-secondary))",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(249,115,22,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {t("hero.wishButton")}
                </button>
              </div>
              {wishMessage && (
                <p
                  className={`mt-2 text-sm ${
                    wishMessageType === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-500"
                  }`}
                >
                  {wishMessage}
                </p>
              )}
            </div>
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
                id={game.id}
                title={game.title!}
                titleKey={game.titleKey}
                descKey={game.descKey}
                logoUrl={game.logoUrl}
                liveUrl={game.liveUrl!}
                status={game.status}
                platform={game.platform}
                index={i}
                t={t}
                lang={lang}
                socialStat={socialStats[game.id]}
                isLoggedIn={isLoggedIn}
                onRequireLogin={() => setAuthOpen(true)}
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
                id={dapp.id}
                titleKey={dapp.titleKey}
                descKey={dapp.descKey}
                logoUrl={dapp.logoUrl}
                liveUrl={dapp.liveUrl}
                githubUrl={dapp.githubUrl}
                status={dapp.status}
                index={i}
                t={t}
                socialStat={socialStats[dapp.id]}
                isLoggedIn={isLoggedIn}
                onRequireLogin={() => setAuthOpen(true)}
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
                id={tool.id}
                title={tool.title}
                desc={tool.desc}
                logoUrl={tool.logoUrl}
                githubUrl={tool.githubUrl}
                status={tool.status}
                index={i}
                t={t}
                socialStat={socialStats[tool.id]}
                isLoggedIn={isLoggedIn}
                onRequireLogin={() => setAuthOpen(true)}
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
                id={stableGateway.id}
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
                socialStat={socialStats[stableGateway.id]}
                isLoggedIn={isLoggedIn}
                onRequireLogin={() => setAuthOpen(true)}
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
                id={suiBestPractices.id}
                titleKey={suiBestPractices.titleKey}
                descKey={suiBestPractices.descKey}
                logoUrl={suiBestPractices.logoUrl}
                liveUrl={suiBestPractices.liveUrl}
                githubUrl="https://github.com/majoson-chen/sui-best-practices/pull/16"
                status={suiBestPractices.status}
                index={0}
                t={t}
                socialStat={socialStats[suiBestPractices.id]}
                isLoggedIn={isLoggedIn}
                onRequireLogin={() => setAuthOpen(true)}
              />
            )}
          </div>
        </section>

        <RevealSection>
          <section className="py-16">
            <div className="flex justify-center cyber-image-container">
              <img
                alt="ZD Tech 工作室创意展示与项目合集"
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
            {homepageNews.map((news) => {
              const categoryMeta = newsCategoryMeta[news.category];

              return (
                <article
                  key={news.id}
                  className="p-6 rounded-xl border border-[var(--cyber-border)] bg-white"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide ${categoryMeta.badgeClassName}`}
                    >
                      {lang === "zh"
                        ? categoryMeta.label.zh
                        : categoryMeta.label.en}
                    </span>
                    <div>
                      <h4 className="font-semibold">
                        {lang === "zh" ? news.title.zh : news.title.en}
                      </h4>
                      <p className="text-xs text-[var(--cyber-muted)]">
                        {news.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm cyber-subtitle leading-relaxed mb-4">
                    {lang === "zh" ? news.summary.zh : news.summary.en}
                  </p>
                  <div className="space-y-3">
                    {news.items.slice(0, 4).map((item, index) => (
                      <div
                        key={`${news.id}-${index}`}
                        className="p-4 rounded-lg border border-[var(--cyber-border)]"
                      >
                        <p className="font-semibold text-[var(--cyber-primary)] mb-1">
                          {index + 1}.{" "}
                          {lang === "zh" ? item.title.zh : item.title.en}
                        </p>
                        <p className="text-sm cyber-subtitle leading-relaxed">
                          {lang === "zh"
                            ? item.description.zh
                            : item.description.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--cyber-border)] text-[var(--cyber-muted)] hover:text-[var(--cyber-hover-pink)] hover:border-[var(--cyber-hover-pink)] transition-all duration-300"
            >
              {lang === "zh" ? "查看更多 →" : "View All →"}
            </Link>
          </div>
        </section>
      </main>

      <FeedbackForm lang={lang} />
      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        onLogin={() => {
          setAuthOpen(false);
          setIsLoggedIn(true);
        }}
      />

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
              <li>
                <a
                  href="/dropafriend/dropafriend.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cyber-hover-pink)] transition-colors"
                >
                  扔掉一个朋友 / Drop a Friend
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.connect")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>
                <a
                  href="mailto:etbood@gmail.com"
                  className="hover:text-[var(--cyber-hover-pink)] transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/etboodXJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cyber-hover-pink)] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.friendLinks")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>
                <a
                  href="https://etboodnovel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--cyber-hover-pink)] transition-colors"
                >
                  {t("footer.shuangyuNovel")}
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
