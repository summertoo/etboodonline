"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Are You Okay?",
    description:
      "A Decentralized Check-In Triggered Timed Transfer DApp On Sui Network",
    liveUrl: "https://ruok3.vercel.app/",
    githubUrl: "https://github.com/summertoo/ruok",
    icon: "pie-chart",
  },
  {
    id: 6,
    title: "Mini Soccer",
    description:
      "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    liveUrl: "https://soccerdemo.edgeone.app/",
    githubUrl: "",
    icon: "bar-chart",
  },
  {
    id: 3,
    title: "Sui Write3",
    description: "A platform for novel authors to upload novels",
    liveUrl: "comingsoon!",
    githubUrl: "https://github.com/etboodXJ/SuiWrite3",
    icon: "pie-chart",
  },
  {
    id: 4,
    title: "Hand Battle",
    description: "A game where players can battle with their hands.",
    liveUrl: "https://handbattle.etboodonline.com/",
    githubUrl: "",
    icon: "pie-chart",
  },
  {
    id: 5,
    title: "Legion Management",
    description: "Game Legion Management",
    liveUrl: "https://www.etboodonline.com/dyj/",
    githubUrl: "",
    icon: "pie-chart",
  },
];

// Contributions data
const contributionsData = [
  {
    id: 0,
    title: "Sui Best Practices",
    description:
      "Contributed to the Sui Best Practices repository with code improvements and documentation",
    projectUrl: "https://github.com/majoson-chen/sui-best-practices",
    contributionUrl:
      "https://github.com/majoson-chen/sui-best-practices/pull/16",
    icon: "briefcase",
  },
];

// Web games data
const webGamesData = [
  {
    id: 1,
    title: "Hand Battle",
    description: "A game where players can battle with their hands.",
    liveUrl: "https://handbattle.etboodonline.com/",
    githubUrl: "",
    icon: "pie-chart",
    image: "",
  },
  {
    id: 2,
    title: "Mini Soccer",
    description:
      "Mini Soccer is a game that allows players to play soccer in the metaverse.",
    liveUrl: "https://soccerdemo.edgeone.app/",
    githubUrl: "",
    icon: "bar-chart",
    image: "",
  },
];

// Roblox games data
const robloxDatasData = [
  {
    id: 1,
    title: "Legion Management",
    description: "Game Legion Management",
    liveUrl: "https://www.etboodonline.com/dyj/",
    githubUrl: "",
    icon: "pie-chart",
    image: "",
  },
  {
    id: 2,
    title: "Apex Mind",
    description: "Independent developer Roblox game experience",
    liveUrl: "https://www.roblox.com/games/126170387607652",
    githubUrl: "",
    icon: "pie-chart",
    image: "",
  },
  {
    id: 3,
    title: "LOBSTER BUMP",
    description: "Independent developer Roblox game experience",
    liveUrl: "https://www.roblox.com/games/102614376416074",
    githubUrl: "",
    icon: "pie-chart",
    image: "",
  },
  {
    id: 4,
    title: "WARLORD SAGA",
    description: "Independent developer Roblox game experience",
    liveUrl: "",
    githubUrl: "",
    icon: "pie-chart",
    image: "",
    comingSoon: true,
  },
];

// SVG Icons
function BriefcaseIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" />
      <path d="M4 18l2-5 2 5h10" />
    </svg>
  );
}

function getIcon(icon: string) {
  if (icon === "briefcase") return <BriefcaseIcon className="cyber-icon h-8 w-8" />;
  if (icon === "bar-chart") return <BarChartIcon className="cyber-icon h-8 w-8" />;
  if (icon === "smartphone") return <SmartphoneIcon className="cyber-icon h-8 w-8" />;
  return <PieChartIcon className="cyber-icon h-8 w-8" />;
}

export default function Homepage() {
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<
    "idle" | "loading" | "ok" | "dup" | "error"
  >("idle");

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
    <div className="max-w-7xl mx-auto px-4 cyber-container">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">
          Integrated portal website
        </h2>
        <p className="mb-6 cyber-subtitle">
          ZD Technology is a team that provides various aspects of DAPP
          development, such as web3 applications and games, and provides
          technical services to a wide range of users
        </p>
        <Button
          className="cyber-button"
          onClick={() => window.open("mailto:etbood@gmail.com")}
        >
          Contact Now
        </Button>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          The following ZD product matrix list will have more products in the
          future
        </h3>
        <p className="mb-6 text-center cyber-subtitle">
          Games&amp;Apps and Others.
        </p>
        <div className="grid grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="cyber-card">
              <CardContent className="p-5">
                {getIcon(project.icon)}
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p>{project.description}</p>
                <div className="flex space-x-2 mt-2">
                  {project.liveUrl !== "comingsoon!" ? (
                    <Button
                      className="cyber-button-small"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      title={project.liveUrl}
                    >
                      Visit
                    </Button>
                  ) : (
                    <Button
                      className="cyber-button-small"
                      onClick={() => alert("Coming soon!")}
                      title={project.liveUrl}
                    >
                      Coming Soon
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "" && (
                    <Button
                      className="cyber-button-small"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      title={project.githubUrl}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          Open Source Contributions
        </h3>
        <p className="mb-6 text-center cyber-subtitle">
          Contributions to the community.
        </p>
        <div className="grid grid-cols-2 gap-8">
          {contributionsData.map((contribution) => (
            <Card key={contribution.id} className="cyber-card">
              <CardContent className="p-5">
                {getIcon(contribution.icon)}
                <h4 className="font-semibold text-lg">{contribution.title}</h4>
                <p>{contribution.description}</p>
                <div className="flex space-x-2 mt-2">
                  {contribution.projectUrl && (
                    <Button
                      className="cyber-button-small"
                      onClick={() => window.open(contribution.projectUrl, "_blank")}
                    >
                      Project
                    </Button>
                  )}
                  {contribution.contributionUrl && (
                    <Button
                      className="cyber-button-small"
                      onClick={() =>
                        window.open(contribution.contributionUrl, "_blank")
                      }
                    >
                      My Contributions
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Web Games Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          Web Games
        </h3>
        <p className="mb-6 text-center cyber-subtitle">
          Browser-based games for everyone to enjoy.
        </p>
        <div className="grid grid-cols-2 gap-8">
          {webGamesData.map((game) => (
            <Card key={game.id} className="cyber-card">
              <CardContent className="p-5">
                {getIcon(game.icon)}
                <h4 className="font-semibold text-lg">{game.title}</h4>
                <p>{game.description}</p>
                <div className="flex space-x-2 mt-2">
                  {game.liveUrl && (
                    <Button
                      className="cyber-button-small"
                      onClick={() => window.open(game.liveUrl, "_blank")}
                    >
                      Visit
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Roblox Games Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          Roblox Games
        </h3>
        <p className="mb-6 text-center cyber-subtitle">
          Roblox platform games and experiences.
        </p>
        <div className="grid grid-cols-2 gap-8">
          {robloxDatasData.map((game) => (
            <Card key={game.id} className="cyber-card">
              <CardContent className="p-5">
                {getIcon(game.icon)}
                <h4 className="font-semibold text-lg">{game.title}</h4>
                <p>{game.description}</p>
                <div className="flex space-x-2 mt-2">
                  {game.liveUrl && game.liveUrl !== "" ? (
                    <Button
                      className="cyber-button-small"
                      onClick={() => window.open(game.liveUrl, "_blank")}
                    >
                      Visit
                    </Button>
                  ) : game.comingSoon ? (
                    <Button className="cyber-button-small" disabled>
                      Coming Soon
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          2026 is a great interstellar departure
        </h3>
        <div className="flex justify-center cyber-image-container">
          <img
            alt="ZD Tech - Interstellar Journey"
            height={300}
            src="/detask9.png"
            style={{ aspectRatio: "500/300", objectFit: "cover" }}
            width={500}
          />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 cyber-testimonial">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          What our happy client say
        </h3>
        <div className="flex justify-center items-center">
          <div className="ml-4">
            <p className="font-semibold cyber-title">Matthew Paul</p>
            <p className="cyber-subtitle">
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <h3 className="text-3xl font-bold text-center mb-6 cyber-title">
          Subscribe Newsletter
        </h3>
        <p className="text-center cyber-subtitle mb-6">
          Get notified when we launch new projects or updates.
        </p>
        <div className="flex justify-center items-center">
          <Input
            className="mr-4 cyber-input w-72"
            placeholder="Enter your email address..."
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
            {subStatus === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        {subStatus === "ok" && (
          <p className="text-center mt-4 text-green-600 font-medium">
            Subscribed! We&apos;ll keep you posted.
          </p>
        )}
        {subStatus === "dup" && (
          <p className="text-center mt-4 text-amber-600 font-medium">
            You&apos;re already subscribed.
          </p>
        )}
        {subStatus === "error" && (
          <p className="text-center mt-4 text-red-500 font-medium">
            Something went wrong. Try again later.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="py-10 cyber-footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">ZD Studio</h5>
            <p className="cyber-subtitle">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-2">What We Do</h5>
            <ul className="cyber-subtitle">
              <li>Web Design</li>
              <li>App Design</li>
              <li>Social Media Manage</li>
              <li>Market Analysis Project</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul className="cyber-subtitle">
              <li>About Us</li>
              <li>Career</li>
              <li>Become Investor</li>
            </ul>
          </div>
          <div className="cyber-subtitle">
            <h5 className="font-bold mb-2">Support</h5>
            <ul>
              <li>FAQ</li>
              <li>Policy</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="cyber-subtitle">Copyright &copy; 2026 ZD Tech</p>
        </div>
      </footer>
    </div>
  );
}
