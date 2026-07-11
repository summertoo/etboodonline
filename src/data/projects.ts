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
export type SupportedLanguage = "en" | "zh";

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface Project {
  id: string;
  title?: string;
  localizedTitle?: LocalizedText;
  titleKey?: string;
  desc?: string;
  descKey: string;
  description?: LocalizedText;
  category: Exclude<Category, "all">;
  platform?: Platform;
  status: Status;
  logoUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  helpUrl?: string;
  platformLabel?: string;
  publishedAt?: string;
  tags?: ProjectTag[];
  sponsored?: boolean;
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
    liveUrl: "https://www.roblox.com/games/17840856245/Apex-Mind",
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
    liveUrl: "https://www.roblox.com/games/17840830725/LOBSTER-BUMP",
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
    title: "🦞 Lobster Run",
    titleKey: "game.lobsterRunTitle",
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
    localizedTitle: {
      en: "Warlord Chronicles: Legends of Chinese Heroes",
      zh: "🏮 群雄战记：中华英雄传",
    },
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
    title: "🗡️ Assassin",
    titleKey: "game.killerH5Title",
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
    title: "🏊 Swim Race",
    titleKey: "game.swimTitle",
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
    title: "🧟 Skyfall Zombie Siege",
    titleKey: "game.zombieSiegeTitle",
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
    title: "Grandpa's Desert Farm",
    titleKey: "game.grandpaFarmTitle",
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
    title: "Hot Dance Crew",
    titleKey: "game.hotDanceTitle",
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
    title: "🪨 Drop a Friend",
    titleKey: "game.dropafriendTitle",
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
    title: "🗡️ Blade Dart",
    titleKey: "game.bladeDartTitle",
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
    title: "⛰️ Summit Seeker",
    titleKey: "game.summitTitle",
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
    id: "web-crazybird",
    titleKey: "game.crazyBirdTitle",
    descKey: "game.crazyBirdDesc",
    category: "webgame",
    platform: "web",
    status: "new",
    logoUrl: "/avatars/crazybird.png",
    liveUrl: "/crazybird/index.html",
    publishedAt: "2026-06-17T00:00:00+08:00",
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
    id: "dapp-charactertool",
    title: "Character Builder",
    titleKey: "dapp.charactertool",
    descKey: "dapp.charactertoolDesc",
    category: "dapp",
    status: "live",
    logoUrl: "/avatars/webtool.jpg",
    liveUrl: "/webtool/index.html",
    helpUrl: "#guide",
  },
  {
    id: "dapp-collab-ai",
    titleKey: "dapp.collabai",
    descKey: "dapp.collabaiDesc",
    category: "dapp",
    status: "live",
    logoUrl: "/avatars/writetool.png",
    liveUrl: "/writetool/zysxz.html",
  },
  {
    id: "opc-hub",
    title: "OPC Hub",
    descKey: "dapp.ruokDesc",
    description: {
      en: "The open-source repository and project information hub for OPC Hub.",
      zh: "OPC Hub 的开源代码仓库与项目资料入口。",
    },
    category: "tool",
    status: "live",
    logoUrl: "/avatars/opc-hub.png",
    githubUrl: "https://github.com/summertoo/opc-hub",
  },
  {
    id: "creative-space",
    title: "创意空间 (DeGame Tropical Island)",
    localizedTitle: {
      en: "Creative Space (DeGame Tropical Island)",
      zh: "创意空间 (DeGame Tropical Island)",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "An open-source DeGame creative space built around a tropical island setting.",
      zh: "以热带岛屿为主题的 DeGame 创意空间开源项目。",
    },
    category: "tool",
    status: "live",
    logoUrl: "/avatars/degame-tropical-island.png",
    githubUrl: "https://github.com/etboodXJ/DeGameTropicalIsLand",
  },
  {
    id: "oc-network",
    title: "OC Network (原创角色网络)",
    localizedTitle: {
      en: "OC Network (Original Character Network)",
      zh: "OC Network (原创角色网络)",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "An open-source network for organizing and presenting original characters and their relationships.",
      zh: "用于组织和展示原创角色及其关系的开源网络项目。",
    },
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
    title: "Stable Gateway",
    descKey: "dapp.ruokDesc",
    description: {
      en: "A partner access page for Stable Gateway. The destination link contains an affiliate parameter.",
      zh: "Stable Gateway 的合作访问入口，目标链接包含联盟推广参数。",
    },
    category: "tool",
    status: "live",
    logoUrl: "/avatars/stable-gateway.png",
    liveUrl: "https://moligate.com/sign-up?aff=vGbL",
    sponsored: true,
  },
  {
    id: "article-sui-move-series",
    title: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
    localizedTitle: {
      en: "Sui Move Apps and Games from Zero: Practical Series",
      zh: "从0基础开始写 Sui MOVE 应用&游戏实战系列",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "A practical Sui Move tutorial series that progresses from fundamentals to application and game projects.",
      zh: "从基础语法到应用与游戏项目实战的 Sui Move 系列教程。",
    },
    category: "article",
    status: "live",
    logoUrl: "/avatars/sui-move-series.png",
    liveUrl: "https://learnblockchain.cn/column/47",
    platformLabel: "登链社区",
  },
  {
    id: "article-detask",
    title: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
    localizedTitle: {
      en: "DeTask Web3 DApp Development Series",
      zh: "星航计划 DeTask 找活网 Web3 DApp 应用开发",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "A development series documenting how the DeTask decentralized task platform was built as a Web3 DApp.",
      zh: "记录 DeTask 去中心化任务平台从零开发过程的 Web3 DApp 实战系列。",
    },
    category: "article",
    status: "live",
    logoUrl: "/avatars/detask-tutorial.png",
    liveUrl: "https://learnblockchain.cn/column/43",
    platformLabel: "登链社区",
  },
  {
    id: "novel-coder-transmigrate",
    title: "码农穿越平民世界",
    localizedTitle: {
      en: "The Coder Transmigrates to a Commoner's World",
      zh: "码农穿越平民世界",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "A serialized web novel about a programmer using a coder's way of thinking after arriving in another world.",
      zh: "讲述程序员穿越到平民世界后，用代码思维解决生活难题的连载小说。",
    },
    category: "novel",
    status: "live",
    logoUrl: "/avatars/coder-transmigrates.png",
    liveUrl: "https://fanqienovel.com/page/7516472366981975102",
    platformLabel: "番茄小说 · 360章",
  },
  {
    id: "novel-warlord-heroes",
    title: "群雄战记：中华英雄传",
    localizedTitle: {
      en: "Warlord Chronicles: Legends of Chinese Heroes",
      zh: "群雄战记：中华英雄传",
    },
    descKey: "dapp.ruokDesc",
    description: {
      en: "A serialized wuxia-inspired novel about Chinese heroes contending for supremacy.",
      zh: "以中华英雄和群雄逐鹿为主线的武侠题材连载小说。",
    },
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

export function getProjectTitle(
  project: Project,
  lang: SupportedLanguage,
  translate?: (key: string) => string,
): string {
  if (project.localizedTitle) return project.localizedTitle[lang];
  if (project.titleKey && translate) {
    const translated = translate(project.titleKey);
    if (translated && translated !== project.titleKey) return translated;
  }

  return project.title || project.id;
}

export function getProjectDescription(
  project: Project,
  lang: SupportedLanguage,
  translate?: (key: string) => string,
): string {
  if (project.description) return project.description[lang];
  if (project.desc) return project.desc;
  if (translate) {
    const translated = translate(project.descKey);
    if (translated && translated !== project.descKey) return translated;
  }

  return lang === "zh"
    ? `${getProjectTitle(project, lang, translate)} 的项目介绍与访问入口。`
    : `Project information and access details for ${getProjectTitle(project, lang, translate)}.`;
}

export function getProjectDetailPath(
  project: Project,
  lang: SupportedLanguage,
): string {
  return `/${lang}/project/${project.id}`;
}

export function isEmbeddableWebGame(project: Project): boolean {
  return (
    project.category === "webgame" && Boolean(project.liveUrl?.startsWith("/"))
  );
}

export function isEmbeddableProject(project: Project): boolean {
  return (
    Boolean(project.liveUrl?.startsWith("/")) &&
    (project.category === "webgame" || project.category === "dapp")
  );
}
