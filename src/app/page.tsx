"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { projects } from "@/data/projects";

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
                  <a
                    href={liveUrl}
                    target={liveUrl.startsWith("/") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
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
                    <Button className="cyber-button-small">
                      {t("dapps.github")}
                    </Button>
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
                <a
                  href={liveUrl}
                  target={liveUrl.startsWith("/") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
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
        </div>
      </section>

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
