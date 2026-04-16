"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";

// ─── Scroll animation hook ───────────────────────────────
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>{children}</div>
  );
}

// ─── Roblox Card ─────────────────────────────────────────
function RobloxCard({ title, descKey, liveUrl, status, index, t }: {
  title: string; descKey: string; liveUrl: string; status: "live" | "coming"; index: number; t: (k: string) => string;
}) {
  const isLive = status === "live";
  return (
    <RevealSection delay={index * 120}>
      <Card className="cyber-card group cursor-pointer relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: isLive ? "linear-gradient(90deg, #0ea5e9, #8b5cf6, #0ea5e9)" : "linear-gradient(90deg, #64748b, #94a3b8, #64748b)",
          backgroundSize: "200% 100%",
          animation: isLive ? "shimmer 3s linear infinite" : "none",
        }} />
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-bold text-lg">{title}</h4>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${isLive ? "bg-[rgba(14,165,233,0.1)] text-[var(--cyber-primary)]" : "bg-gray-100 text-gray-500"}`}>
              {isLive ? t("roblox.live") : t("roblox.soon")}
            </span>
          </div>
          <p className="text-sm mb-4">{t(descKey)}</p>
          <div className="flex space-x-2">
            {isLive ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]">
                  {t("roblox.play")}
                </Button>
              </a>
            ) : (
              <Button className="cyber-button-small" disabled>{t("roblox.comingSoon")}</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
}

// ─── Main Page ───────────────────────────────────────────
export default function Homepage() {
  const { t, lang } = useLang();
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "ok" | "dup" | "error">("idle");

  async function handleSubscribe() {
    const email = subEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSubStatus(data.message.includes("Already") ? "dup" : "ok");
      if (!data.message.includes("Already")) setSubEmail("");
    } catch { setSubStatus("error"); }
  }

  const robloxGames = [
    { id: 2, title: "Apex Mind", descKey: "game.apexMindDesc", liveUrl: "https://www.roblox.com/games/126170387607652", status: "live" as const },
    { id: 3, title: "LOBSTER BUMP", descKey: "game.lobsterBumpDesc", liveUrl: "https://www.roblox.com/games/102614376416074", status: "live" as const },
    { id: 4, title: "WARLORD SAGA", descKey: "game.warlordSagaDesc", liveUrl: "", status: "coming" as const },
  ];

  const projects = [
    { id: 1, titleKey: "dapp.areYouOkay", descKey: "dapp.ruokDesc", liveUrl: "https://ruok3.vercel.app/", githubUrl: "https://github.com/summertoo/ruok" },
    { id: 2, titleKey: "dapp.miniSoccer", descKey: "game.miniSoccerDesc", liveUrl: "https://soccerdemo.edgeone.app/", githubUrl: "" },
    { id: 3, titleKey: "dapp.suiWrite3", descKey: "dapp.write3Desc", liveUrl: "", githubUrl: "https://github.com/etboodXJ/SuiWrite3", comingSoon: true },
    { id: 4, titleKey: "dapp.handBattle", descKey: "game.handBattleDesc", liveUrl: "https://handbattle.etboodonline.com/", githubUrl: "" },
  ];

  const webGames = [
    { id: 0, title: "🦞 龙虾跑酷 (Lobster Run)", descKey: "game.lobsterRunDesc", liveUrl: "/h5game01/龙虾跑酷.html", isNew: true },
    { id: 1, title: "Hand Battle", descKey: "game.handBattleDesc", liveUrl: "https://handbattle.etboodonline.com/" },
    { id: 2, title: "Mini Soccer", descKey: "game.miniSoccerDesc", liveUrl: "https://soccerdemo.edgeone.app/" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-24 cyber-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 rounded-full bg-[var(--cyber-primary)] opacity-20"
              style={{ left: `${10 + Math.random() * 80}%`, top: `${20 + Math.random() * 60}%`, animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }} />
          ))}
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{
            background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% 200%", animation: "gradientShift 6s ease infinite",
          }}>{t("hero.title")}</h2>
          <p className="mb-4 cyber-subtitle text-lg max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <p className="mb-8 text-sm cyber-subtitle opacity-70">{t("hero.tagline")}</p>
          <div className="flex justify-center gap-4">
            <Button className="cyber-button" onClick={() => window.open("mailto:etbood@gmail.com")}>{t("hero.contact")}</Button>
            <a href="#roblox-games"><Button variant="outline" className="cyber-button-small border-[var(--cyber-primary)] text-[var(--cyber-primary)]">{t("hero.viewGames")}</Button></a>
          </div>
        </div>
      </section>

      {/* Roblox Games */}
      <section id="roblox-games" className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("roblox.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("roblox.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {robloxGames.map((game, i) => <RobloxCard key={game.id} title={game.title} descKey={game.descKey} liveUrl={game.liveUrl} status={game.status} index={i} t={t} />)}
        </div>
      </section>

      {/* DApps & Projects */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("dapps.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("dapps.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <RevealSection key={p.id} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-lg mb-2">{t(p.titleKey)}</h4>
                  <p className="text-sm mb-3">{t(p.descKey)}</p>
                  <div className="flex space-x-2">
                    {p.liveUrl && !p.comingSoon ? (
                      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("dapps.visit")}</Button></a>
                    ) : p.comingSoon ? (
                      <Button className="cyber-button-small" disabled>{t("project.comingSoon")}</Button>
                    ) : null}
                    {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("dapps.github")}</Button></a>}
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Web Games */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("webgames.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("webgames.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webGames.map((game, i) => (
            <RevealSection key={game.id} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg">{game.title}</h4>
                    {game.isNew && <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(14,165,233,0.1)] text-[var(--cyber-primary)] font-bold">NEW</span>}
                  </div>
                  <p className="text-sm mb-3">{t(game.descKey)}</p>
                  <a href={game.liveUrl} target={game.liveUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
                    <Button className="cyber-button-small">{t("webgames.playNow")}</Button>
                  </a>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("opensource.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("opensource.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealSection delay={0}>
            <Card className="cyber-card h-full">
              <CardContent className="p-5">
                <h4 className="font-semibold text-lg mb-2">{t("os.suiBP")}</h4>
                <p className="text-sm mb-3">{t("os.suiBPDesc")}</p>
                <div className="flex space-x-2">
                  <a href="https://github.com/majoson-chen/sui-best-practices" target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("opensource.project")}</Button></a>
                  <a href="https://github.com/majoson-chen/sui-best-practices/pull/16" target="_blank" rel="noopener noreferrer"><Button className="cyber-button-small">{t("opensource.myPR")}</Button></a>
                </div>
              </CardContent>
            </Card>
          </RevealSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("articles.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("articles.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "📖",
              title: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
              desc: lang === "zh"
                ? "在登链社区连载的 Sui Move 开发系列教程，从零基础到实战项目。"
                : "A Sui Move development tutorial series on LearnBlockchain, from beginner to real-world projects.",
              platform: "LearnBlockchain",
              url: "https://learnblockchain.cn/column/47",
            },
            {
              icon: "🚀",
              title: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
              desc: lang === "zh"
                ? "星航计划实战项目，从零开发 Web3 去中心化任务平台 DApp。"
                : "Star Voyage project: building a decentralized task platform DApp on Web3.",
              platform: "LearnBlockchain",
              url: "https://learnblockchain.cn/column/43",
            },
          ].map((article, i) => (
            <RevealSection key={i} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <div className="text-3xl mb-3">{article.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                  <p className="text-sm mb-3">{article.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--cyber-muted)]">📌 {article.platform}</span>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <Button className="cyber-button-small">{t("articles.read")}</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Novels */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("novels.title")}</h3>
          <p className="mb-10 text-center cyber-subtitle">{t("novels.subtitle")}</p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "👨‍💻",
              title: "码农穿越平民世界",
              desc: lang === "zh"
                ? "一个程序员意外穿越到平民世界，用代码思维解决古代生活难题的故事。连载于番茄小说。"
                : "A web novel about a coder who transmigrates to the common people's world. Serialized on Fanqie Novel.",
              platform: "番茄小说",
              url: "https://fanqienovel.com/page/7516472366981975102",
            },
          ].map((novel, i) => (
            <RevealSection key={i} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <div className="text-3xl mb-3">{novel.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{novel.title}</h4>
                  <p className="text-sm mb-3">{novel.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--cyber-muted)]">📖 {novel.platform}</span>
                    <a href={novel.url} target="_blank" rel="noopener noreferrer">
                      <Button className="cyber-button-small">{t("novels.read")}</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Banner */}
      <RevealSection>
        <section className="py-16">
          <div className="flex justify-center cyber-image-container">
            <img alt="ZD Tech" height={300} src="/detask9.png" style={{ aspectRatio: "500/300", objectFit: "cover", maxWidth: "100%" }} width={500} loading="lazy" />
          </div>
        </section>
      </RevealSection>

      {/* Newsletter */}
      <RevealSection>
        <section className="py-20">
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">{t("newsletter.title")}</h3>
          <p className="text-center cyber-subtitle mb-8">{t("newsletter.subtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Input className="cyber-input w-72" placeholder={t("newsletter.placeholder")} type="email" value={subEmail}
              onChange={(e) => { setSubEmail(e.target.value); setSubStatus("idle"); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()} />
            <Button className="cyber-button" onClick={handleSubscribe} disabled={subStatus === "loading"}>
              {subStatus === "loading" ? t("newsletter.subscribing") : t("newsletter.subscribe")}
            </Button>
          </div>
          {subStatus === "ok" && <p className="text-center mt-4 text-green-600 font-medium">{t("newsletter.success")}</p>}
          {subStatus === "dup" && <p className="text-center mt-4 text-amber-600 font-medium">{t("newsletter.duplicate")}</p>}
          {subStatus === "error" && <p className="text-center mt-4 text-red-500 font-medium">{t("newsletter.error")}</p>}
        </section>
      </RevealSection>

      {/* Footer */}
      <footer className="py-10 cyber-footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">{t("footer.about")}</h5>
            <p className="cyber-subtitle text-sm">{t("footer.aboutDesc")}</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.games")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1"><li>Apex Mind</li><li>LOBSTER BUMP</li><li>WARLORD SAGA</li></ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.projects")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1"><li>Are You Okay?</li><li>Hand Battle</li><li>Sui Write3</li></ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">{t("footer.connect")}</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li><a href="mailto:etbood@gmail.com" className="hover:text-[var(--cyber-primary)] transition-colors">Email</a></li>
              <li><a href="https://github.com/etboodXJ" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyber-primary)] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8"><p className="cyber-subtitle text-sm">{t("footer.copyright")}</p></div>
      </footer>
    </div>
  );
}
