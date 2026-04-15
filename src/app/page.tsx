"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

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

// ─── Data ────────────────────────────────────────────────
const robloxGames = [
  {
    id: 2, title: "Apex Mind",
    description: "A challenging mind-bending puzzle experience on Roblox.",
    liveUrl: "https://www.roblox.com/games/126170387607652",
    status: "live" as const,
  },
  {
    id: 3, title: "LOBSTER BUMP",
    description: "Bump, compete, and dominate in this fast-paced Roblox game.",
    liveUrl: "https://www.roblox.com/games/102614376416074",
    status: "live" as const,
  },
  {
    id: 4, title: "WARLORD SAGA",
    description: "An epic saga of warlords battling for supremacy. Coming soon.",
    liveUrl: "",
    status: "coming" as const,
  },
];

const projectsData = [
  {
    id: 1, title: "Are You Okay?",
    description: "A Decentralized Check-In Triggered Timed Transfer DApp On Sui Network",
    liveUrl: "https://ruok3.vercel.app/",
    githubUrl: "https://github.com/summertoo/ruok",
  },
  {
    id: 2, title: "Mini Soccer",
    description: "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    liveUrl: "https://soccerdemo.edgeone.app/",
    githubUrl: "",
  },
  {
    id: 3, title: "Sui Write3",
    description: "A platform for novel authors to upload novels on Sui blockchain.",
    liveUrl: "",
    githubUrl: "https://github.com/etboodXJ/SuiWrite3",
    comingSoon: true,
  },
  {
    id: 4, title: "Hand Battle",
    description: "A game where players can battle with their hands.",
    liveUrl: "https://handbattle.etboodonline.com/",
    githubUrl: "",
  },
];

const webGamesData = [
  {
    id: 0, title: "🦞 龙虾跑酷 (Lobster Run)",
    description: "A fun lobster parkour H5 game - run, jump, and dodge obstacles!",
    liveUrl: "/h5game01/龙虾跑酷.html",
    isNew: true,
  },
  {
    id: 1, title: "Hand Battle",
    description: "A game where players can battle with their hands.",
    liveUrl: "https://handbattle.etboodonline.com/",
  },
  {
    id: 2, title: "Mini Soccer",
    description: "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    liveUrl: "https://soccerdemo.edgeone.app/",
  },
];

const contributionsData = [
  {
    id: 0, title: "Sui Best Practices",
    description: "Contributed to the Sui Best Practices repository with code improvements and documentation",
    projectUrl: "https://github.com/majoson-chen/sui-best-practices",
    contributionUrl: "https://github.com/majoson-chen/sui-best-practices/pull/16",
  },
];

// ─── Animated Section wrapper ────────────────────────────
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

// ─── Roblox Card (special highlight) ─────────────────────
function RobloxCard({ game, index }: { game: typeof robloxGames[0]; index: number }) {
  const isLive = game.status === "live";
  return (
    <RevealSection delay={index * 120}>
      <Card className="cyber-card group cursor-pointer relative overflow-hidden">
        {/* Glow bar on top */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
          style={{
            background: isLive
              ? "linear-gradient(90deg, #0ea5e9, #8b5cf6, #0ea5e9)"
              : "linear-gradient(90deg, #64748b, #94a3b8, #64748b)",
            backgroundSize: "200% 100%",
            animation: isLive ? "shimmer 3s linear infinite" : "none",
          }}
        />
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-bold text-lg">{game.title}</h4>
            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${
                isLive
                  ? "bg-[rgba(14,165,233,0.1)] text-[var(--cyber-primary)]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {isLive ? "● Live" : "◌ Soon"}
            </span>
          </div>
          <p className="text-sm mb-4">{game.description}</p>
          <div className="flex space-x-2">
            {isLive ? (
              <a href={game.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="cyber-button-small group-hover:border-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary)]">
                  Play on Roblox →
                </Button>
              </a>
            ) : (
              <Button className="cyber-button-small" disabled>
                Coming Soon
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </RevealSection>
  );
}

// ─── Main Page ───────────────────────────────────────────
export default function Homepage() {
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "ok" | "dup" | "error">("idle");

  async function handleSubscribe() {
    const email = subEmail.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
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

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="text-center py-24 cyber-hero relative overflow-hidden">
        {/* Animated particles */}
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
            className="text-5xl md:text-6xl font-bold mb-6 cyber-title"
            style={{
              background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #06b6d4)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            ZD Tech Studio
          </h2>
          <p className="mb-4 cyber-subtitle text-lg max-w-2xl mx-auto">
            Building Web3 games, DApps &amp; creative tools on Sui
          </p>
          <p className="mb-8 text-sm cyber-subtitle opacity-70">
            Independent game developer &bull; Roblox creator &bull; Blockchain builder
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="cyber-button"
              onClick={() => window.open("mailto:etbood@gmail.com")}
            >
              Contact Now
            </Button>
            <a href="#roblox-games">
              <Button variant="outline" className="cyber-button-small border-[var(--cyber-primary)] text-[var(--cyber-primary)]">
                View Games ↓
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Roblox Games (Primary) ───────────────────── */}
      <section id="roblox-games" className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            🎮 Roblox Games
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            Our flagship games on the Roblox platform.
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {robloxGames.map((game, i) => (
            <RobloxCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </section>

      {/* ─── DApps & Projects ─────────────────────────── */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            🚀 DApps &amp; Projects
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            Decentralized applications built on Sui Network.
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <RevealSection key={project.id} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="flex space-x-2">
                    {project.liveUrl && !project.comingSoon ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="cyber-button-small">Visit</Button>
                      </a>
                    ) : project.comingSoon ? (
                      <Button className="cyber-button-small" disabled>Coming Soon</Button>
                    ) : null}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="cyber-button-small">GitHub</Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── Web Games ────────────────────────────────── */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            🌐 Web Games
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            Browser-based games for everyone to enjoy.
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webGamesData.map((game, i) => (
            <RevealSection key={game.id} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg">{game.title}</h4>
                    {game.isNew && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(14,165,233,0.1)] text-[var(--cyber-primary)] font-bold">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-3">{game.description}</p>
                  <a href={game.liveUrl} target={game.liveUrl.startsWith("/") ? "_self" : "_blank"} rel="noopener noreferrer">
                    <Button className="cyber-button-small">Play Now</Button>
                  </a>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── Open Source Contributions ─────────────────── */}
      <section className="py-20">
        <RevealSection>
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            💡 Open Source
          </h3>
          <p className="mb-10 text-center cyber-subtitle">
            Contributions to the community.
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributionsData.map((c, i) => (
            <RevealSection key={c.id} delay={i * 100}>
              <Card className="cyber-card h-full">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-lg mb-2">{c.title}</h4>
                  <p className="text-sm mb-3">{c.description}</p>
                  <div className="flex space-x-2">
                    <a href={c.projectUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="cyber-button-small">Project</Button>
                    </a>
                    <a href={c.contributionUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="cyber-button-small">My PR</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ─── Banner Image ─────────────────────────────── */}
      <RevealSection>
        <section className="py-16">
          <div className="flex justify-center cyber-image-container">
            <img
              alt="ZD Tech - Interstellar Journey"
              height={300}
              src="/detask9.png"
              style={{ aspectRatio: "500/300", objectFit: "cover", maxWidth: "100%" }}
              width={500}
              loading="lazy"
            />
          </div>
        </section>
      </RevealSection>

      {/* ─── Newsletter ───────────────────────────────── */}
      <RevealSection>
        <section className="py-20">
          <h3 className="text-3xl font-bold text-center mb-2 cyber-title">
            📬 Stay Updated
          </h3>
          <p className="text-center cyber-subtitle mb-8">
            Get notified when we launch new games or projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Input
              className="cyber-input w-72"
              placeholder="Enter your email..."
              type="email"
              value={subEmail}
              onChange={(e) => { setSubEmail(e.target.value); setSubStatus("idle"); }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            />
            <Button
              className="cyber-button"
              onClick={handleSubscribe}
              disabled={subStatus === "loading"}
            >
              {subStatus === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          {subStatus === "ok" && <p className="text-center mt-4 text-green-600 font-medium">Subscribed! We&apos;ll keep you posted.</p>}
          {subStatus === "dup" && <p className="text-center mt-4 text-amber-600 font-medium">You&apos;re already subscribed.</p>}
          {subStatus === "error" && <p className="text-center mt-4 text-red-500 font-medium">Something went wrong. Try again later.</p>}
        </section>
      </RevealSection>

      {/* ─── Footer ───────────────────────────────────── */}
      <footer className="py-10 cyber-footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">ZD Tech</h5>
            <p className="cyber-subtitle text-sm">
              Independent game developer &amp; Web3 builder. Creating experiences on Roblox and Sui blockchain.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Games</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>Apex Mind</li>
              <li>LOBSTER BUMP</li>
              <li>WARLORD SAGA</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Projects</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li>Are You Okay?</li>
              <li>Hand Battle</li>
              <li>Sui Write3</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Connect</h5>
            <ul className="cyber-subtitle text-sm space-y-1">
              <li><a href="mailto:etbood@gmail.com" className="hover:text-[var(--cyber-primary)] transition-colors">Email</a></li>
              <li><a href="https://github.com/etboodXJ" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cyber-primary)] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="cyber-subtitle text-sm">Copyright &copy; 2026 ZD Tech</p>
        </div>
      </footer>
    </div>
  );
}
