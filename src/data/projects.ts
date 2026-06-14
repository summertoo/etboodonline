export type Category =
  | "all"
  | "roblox"
  | "webgame"
  | "dapp"
  | "tool"
  | "article"
  | "novel";
export type Status = "live" | "coming" | "new";
export type Platform = "roblox" | "web";
export type ProjectTag = "game" | "featured" | "latest";

export interface Project {
  id: string;
  title?: string;
  titleKey?: string;
  desc?: string;
  descKey: string;
  category: Exclude<Category, "all">;
  platform?: Platform;
  status: Status;
  logoUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  platformLabel?: string;
  publishedAt?: string;
  tags?: ProjectTag[];
}

export const projects: Project[] = [
  {
    id: "roblox-apex-mind",
    title: "Apex Mind",
    descKey: "game.apexMindDesc",
    category: "roblox",
    platform: "roblox",
    status: "live",
    logoUrl: "/avatars/apex-mind.png",
    liveUrl: "roblox://placeId=126170387607652",
    tags: ["game"],
  },
  {
    id: "roblox-lobster-bump",
    title: "LOBSTER BUMP",
    descKey: "game.lobsterBumpDesc",
    category: "roblox",
    platform: "roblox",
    status: "live",
    logoUrl: "/avatars/lobster-bump.png",
    liveUrl: "roblox://placeId=102614376416074",
    tags: ["game"],
  },
  {
    id: "roblox-warlord-saga",
    title: "WARLORD SAGA",
    descKey: "game.warlordSagaDesc",
    category: "roblox",
    platform: "roblox",
    status: "coming",
    logoUrl: "/avatars/warlord-saga.png",
    tags: ["game"],
  },
  {
    id: "web-lobster-run",
    title: "🦞 龙虾跑酷 (Lobster Run)",
    descKey: "game.lobsterRunDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/lobster-run.png",
    liveUrl: "/h5game01/龙虾跑酷.html",
    tags: ["featured", "game"],
  },
  {
    id: "web-mini-soccer",
    title: "Mini Soccer",
    descKey: "game.miniSoccerDesc",
    category: "webgame",
    platform: "web",
    status: "live",
    logoUrl: "/avatars/mini-soccer.png",
    liveUrl: "https://soccerdemo.edgeone.app/",
    tags: ["game"],
  },
  {
    id: "web-warlord-heroes",
    title: "🏮 群雄战记：中华英雄传",
    descKey: "game.warlordHeroesDesc",
    category: "webgame",
    platform: "web",
    status: "live",
    logoUrl: "/avatars/warlord-heroes.png",
    liveUrl:
      "https://games.soonjy.com/public/gameLobby/?projectId=69cb5b0280d0cf54f562a136&inviteCode=1BBDC0C1",
    tags: ["featured", "game"],
  },
  {
    id: "web-football",
    title: "FootBall Game",
    descKey: "game.footballDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/football-game.png",
    liveUrl: "/football/football-game.html",
    tags: ["game"],
  },
  {
    id: "web-save-man",
    title: "Save Man - Mine Rescue",
    descKey: "game.saveManDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/save-man.png",
    liveUrl: "/saveman/saveman.html",
    tags: ["featured", "latest", "game"],
  },
  {
    id: "web-killer-h5",
    title: "🗡️ 暗杀 (Assassin)",
    descKey: "game.killerH5Desc",
    category: "webgame",
    platform: "web",
    status: "live",
    logoUrl: "/avatars/killer-h5.png",
    liveUrl: "/killerh5/index.html",
    tags: ["game"],
  },
  {
    id: "web-swim",
    title: "🏊 百米自由泳 (Swim Race)",
    descKey: "game.swimDesc",
    category: "webgame",
    platform: "web",
    status: "live",
    logoUrl: "/avatars/swimming.png",
    liveUrl: "/swim/index.html",
    tags: ["game"],
  },
  {
    id: "web-zombie-siege",
    title: "🧟 降临：僵尸围城 (Skyfall Zombie Siege)",
    descKey: "game.zombieSiegeDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/zombiesiege.png",
    liveUrl: "/zombiesiege/shotdemo01.html",
    tags: ["latest", "game"],
  },
  {
    id: "web-grandpa-farm",
    title: "爷爷的农场 (Grandpa's Desert Farm)",
    descKey: "game.grandpaFarmDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/grandpafarm.png",
    liveUrl: "https://farmdemo-one.vercel.app/",
    tags: ["latest", "game"],
  },
  {
    id: "web-hotdance",
    title: "热舞团 (Hot Dance Crew)",
    descKey: "game.hotDanceDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/hotdance.png",
    liveUrl: "/hotdance/hotdance.html",
    publishedAt: "2026-06-04T21:00:00+08:00",
    tags: ["featured", "latest", "game"],
  },
  {
    id: "web-dropafriend",
    title: "🪨 扔掉一个朋友 (Drop a Friend)",
    descKey: "game.dropafriendDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/dropafriend.png",
    liveUrl: "/dropafriend/dropafriend.html",
    publishedAt: "2026-06-06T18:00:00+08:00",
    tags: ["featured", "latest", "game"],
  },
  {
    id: "web-bladedart",
    title: "🗡️ 剑出飞镖 (Blade Dart)",
    descKey: "game.bladeDartDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/bladedart.png",
    liveUrl: "/bladedart/bladedart.html",
    publishedAt: "2026-06-12T00:00:00+08:00",
    tags: ["game"],
  },
  {
    id: "web-summit",
    title: "⛰️ 登峰造极 (Summit Seeker)",
    descKey: "game.summitDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/summit.png",
    liveUrl: "/summit/summit.html",
    publishedAt: "2026-06-14T00:00:00+08:00",
    tags: ["game"],
  },
  {
    id: "dapp-ruok",
    title: "Are You Okay?",
    titleKey: "dapp.areYouOkay",
    descKey: "dapp.ruokDesc",
    category: "dapp",
    status: "live",
    logoUrl: "/avatars/are-you-okay.png",
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
    logoUrl: "/avatars/sui-write3.png",
    githubUrl: "https://github.com/etboodXJ/SuiWrite3",
  },
  {
    id: "opc-hub",
    title: "OPC Hub",
    descKey: "dapp.ruokDesc",
    category: "tool",
    status: "live",
    logoUrl: "/avatars/opc-hub.png",
    githubUrl: "https://github.com/summertoo/opc-hub",
  },
  {
    id: "creative-space",
    title: "创意空间 (DeGame Tropical Island)",
    descKey: "dapp.ruokDesc",
    category: "tool",
    status: "live",
    logoUrl: "/avatars/degame-tropical-island.png",
    githubUrl: "https://github.com/etboodXJ/DeGameTropicalIsLand",
  },
  {
    id: "oc-network",
    title: "OC Network (原创角色网络)",
    descKey: "dapp.ruokDesc",
    category: "tool",
    status: "live",
    logoUrl: "/avatars/oc-network.png",
    githubUrl: "https://github.com/etboodXJ/ocnetwork",
  },
  {
    id: "sui-best-practices",
    title: "Sui Best Practices",
    titleKey: "os.suiBP",
    descKey: "os.suiBPDesc",
    category: "tool",
    status: "live",
    logoUrl: "/avatars/sui-best-practices.png",
    githubUrl: "https://github.com/majoson-chen/sui-best-practices",
  },
  {
    id: "stable-gateway",
    descKey: "dapp.ruokDesc",
    category: "tool",
    status: "live",
    logoUrl: "/avatars/stable-gateway.png",
    liveUrl: "https://moligate.com/sign-up?aff=vGbL",
  },
  {
    id: "free-model",
    descKey: "freeModel.desc",
    category: "tool",
    status: "new",
    logoUrl: "/avatars/free-model.png",
    liveUrl: "https://freemodel.dev/invite/FRE-70703524",
  },
  {
    id: "article-sui-move-series",
    title: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
    descKey: "dapp.ruokDesc",
    category: "article",
    status: "live",
    logoUrl: "/avatars/sui-move-series.png",
    liveUrl: "https://learnblockchain.cn/column/47",
    platformLabel: "登链社区",
  },
  {
    id: "article-detask",
    title: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
    descKey: "dapp.ruokDesc",
    category: "article",
    status: "live",
    logoUrl: "/avatars/detask-tutorial.png",
    liveUrl: "https://learnblockchain.cn/column/43",
    platformLabel: "登链社区",
  },
  {
    id: "novel-coder-transmigrate",
    title: "码农穿越平民世界",
    descKey: "dapp.ruokDesc",
    category: "novel",
    status: "live",
    logoUrl: "/avatars/coder-transmigrates.png",
    liveUrl: "https://fanqienovel.com/page/7516472366981975102",
    platformLabel: "番茄小说 · 360章",
  },
  {
    id: "novel-warlord-heroes",
    title: "群雄战记：中华英雄传",
    descKey: "dapp.ruokDesc",
    category: "novel",
    status: "live",
    logoUrl: "/avatars/warlord-heroes-novel.png",
    liveUrl: "https://fanqienovel.com/page/7631541666125450302",
    platformLabel: "番茄小说 · 连载中",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: Category): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
