export type Lang = "en" | "zh";

export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.me": "My",
    "nav.whatWeDo": "What We Do",
    "nav.service": "Service",
    "nav.project": "Project",
    "nav.blog": "Blog",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "ZD Tech Studio",
    "hero.subtitle":
      "A showcase for web games, Roblox experiences, DApps, and practical tools.",
    "hero.tagline":
      "Play projects, browse updates, and interact with likes, favorites, and comments.",
    "hero.contact": "Contact Now",
    "hero.viewGames": "View Games ↓",
    "hero.wishPlaceholder": "Describe the game you want...",
    "hero.wishContactPlaceholder":
      "Email / X / Telegram (optional — so we can reach you)",
    "hero.wishButton": "Make a Wish 🎯",
    "hero.wishSuccess": "Wish received! We'll consider it 🚀",
    "hero.wishError": "Oops, something went wrong. Try again!",

    // Roblox Games
    "roblox.title": "🎮 Roblox Games",
    "roblox.subtitle": "Our flagship games on the Roblox platform.",
    "roblox.live": "● Live",
    "roblox.soon": "◌ Soon",
    "roblox.play": "Play on Roblox →",
    "roblox.comingSoon": "Coming Soon",

    // DApps
    "dapps.title": "🚀 DApps & Projects",
    "dapps.subtitle": "Decentralized applications built on Sui Network.",
    "dapps.visit": "Visit",
    "dapps.help": "Help",
    "dapps.github": "GitHub",

    // Web Games
    "webgames.title": "🌐 Web Games",
    "webgames.subtitle": "Browser-based games for everyone to enjoy.",
    "webgames.playNow": "Play Now",

    // Open Source
    "opensource.title": "💡 Open Source",
    "opensource.subtitle": "Contributions to the community.",
    "opensource.project": "Project",
    "opensource.myPR": "My PR",

    // Newsletter
    "newsletter.title": "📬 Stay Updated",
    "newsletter.subtitle": "Get notified when we launch new games or projects.",
    "newsletter.placeholder": "Enter your email...",
    "newsletter.subscribe": "Subscribe",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.success": "Subscribed! We'll keep you posted.",
    "newsletter.duplicate": "You're already subscribed.",
    "newsletter.error": "Something went wrong. Try again later.",

    // Footer
    "footer.about": "ZD Tech",
    "footer.aboutDesc":
      "Independent game developer & Web3 builder. Creating experiences on Roblox and Sui blockchain.",
    "footer.games": "Games",
    "footer.projects": "Projects",
    "footer.connect": "Connect",
    "footer.friendLinks": "Links",
    "footer.shuangyuNovel": "Shuangyu Novel",
    "footer.copyright": "Copyright © 2026 ZD Tech",

    // What We Do
    "whatwedo.title": "What We Do",
    "whatwedo.subtitle":
      "We build decentralized applications, web3 games, and creative tools on cutting-edge blockchain technology.",
    "whatwedo.dappTitle": "DApp Development",
    "whatwedo.dappDesc":
      "Full-stack decentralized application development on Sui Network, from smart contracts to frontend interfaces.",
    "whatwedo.gameTitle": "Web3 Games",
    "whatwedo.gameDesc":
      "Browser-based and Roblox games with blockchain integration, NFT assets, and play-to-earn mechanics.",
    "whatwedo.consultTitle": "Technical Consulting",
    "whatwedo.consultDesc":
      "Architecture design, code review, and technical guidance for blockchain projects and teams.",

    // Service
    "service.title": "Our Services",
    "service.subtitle": "End-to-end solutions for your Web3 journey.",
    "service.s1Title": "Smart Contract Development",
    "service.s1Desc": "Secure, audited Move smart contracts on Sui Network.",
    "service.s2Title": "Frontend & UI/UX",
    "service.s2Desc":
      "Modern React-based interfaces with wallet integration and responsive design.",
    "service.s3Title": "Game Development",
    "service.s3Desc":
      "Browser games, Roblox experiences, and blockchain-powered game economies.",
    "service.s4Title": "Web & Mini Programs",
    "service.s4Desc":
      "Websites, WeChat mini programs, and official account development.",

    // Project
    "project.title": "Projects",
    "project.subtitle":
      "Explore our portfolio of games, DApps, tools, and creative works.",
    "project.comingSoon": "Coming Soon",
    "project.search": "Search projects...",
    "project.all": "All",
    "project.filter": "Filter",
    "project.filter.allGames": "All Games",
    "project.category.game": "Games",
    "project.category.roblox": "Roblox Games",
    "project.category.webgame": "Web Games",
    "project.category.dapp": "DApps",
    "project.category.tool": "Tools",
    "project.category.article": "Articles",
    "project.category.novel": "Novels",
    "project.tag.game": "Game",
    "project.tag.featured": "Featured",
    "project.tag.latest": "Latest",
    "project.platform.roblox": "Roblox",
    "project.platform.web": "Web",
    "project.live": "● Live",
    "project.soon": "◌ Soon",
    "project.new": "NEW",
    "project.play": "Play →",
    "project.visit": "Visit →",
    "project.github": "GitHub →",
    "project.read": "Read →",
    "project.noResults": "No projects found. Try a different search or filter.",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Insights, tutorials, and updates from the team.",
    "blog.comingSoon": "Coming Soon",
    "blog.comingDesc": "We're working on some great content. Stay tuned!",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.email": "📧 Email",
    "contact.quickMsg": "💬 Quick Message",
    "contact.yourEmail": "Your email",
    "contact.yourMsg": "Your message...",
    "contact.send": "Send Message",
    "contact.sent": "Thanks! We'll get back to you soon.",

    // Roblox game descriptions
    "game.apexMindDesc":
      "A challenging mind-bending puzzle experience on Roblox.",
    "game.lobsterBumpDesc":
      "Bump, compete, and dominate in this fast-paced Roblox game.",
    "game.warlordSagaDesc":
      "An epic saga of warlords battling for supremacy. Coming soon.",
    "game.warlordHeroesDesc":
      "Three Kingdoms strategy game - Released with first level gameplay available. Experience the legendary stories of Chinese heroes.",
    "game.lobsterRunDesc":
      "A fun lobster parkour H5 game - run, jump, and dodge obstacles!",
    "game.footballDesc":
      "Football Shootout & Goalkeeper H5 Game - Shoot Accurately, Defend Ruthlessly!",
    "game.handBattleDesc": "A game where players can battle with their hands.",
    "game.saveManDesc":
      "Use the rescue claw to save trapped miners from the mine! Click to drop the claw and pull them up.",
    "game.miniSoccerDesc":
      "A line-draw soccer game where you flick the ball with elastic shots, curve your aim, and score with precise rebounds.",
    "game.killerH5Desc":
      "Assassin H5 Game - Analyze the scene, identify targets, use props wisely, and become a legendary assassin!",
    "game.swimDesc":
      "100m Freestyle Swimming Race - Sprint, dash, collect power-ups, and win the championship!",
    "game.zombieSiegeDesc":
      "Survive the apocalypse, defend your base, upgrade weapons, and fight endless zombie hordes.",
    "game.comingSoonDesc": "Coming soon. Stay tuned!",

    "game.grandpaFarmDesc":
      "Build up Grandpa's desert farm, plant crops, and turn a quiet patch of sand into a thriving oasis.",
    "game.hotDanceDesc":
      "A stage-based rhythm web game with falling arrows, combos, arc explosions, bilingual UI, and a top-10 leaderboard.",
    "game.dropafriendDesc":
      "Drag your friend to the cliff edge, push them off, and let them tumble through a chain of traps to collect coins. Bilingual UI, mobile-friendly, and full of upgrades.",
    "game.lobsterRunTitle": "🦞 Lobster Run",
    "game.killerH5Title": "🗡️ Assassin",
    "game.swimTitle": "🏊 Swim Race",
    "game.zombieSiegeTitle": "🧟 Skyfall Zombie Siege",
    "game.grandpaFarmTitle": "Grandpa's Desert Farm",
    "game.hotDanceTitle": "Hot Dance Crew",
    "game.dropafriendTitle": "🪨 Drop a Friend",
    "game.bladeDartTitle": "🗡️ Blade Dart",
    "game.summitTitle": "⛰️ Summit Seeker",
    "game.crazyBirdTitle": "🐦 Crazy Bird",
    "game.crazyBirdDesc":
      "Propel your bird with precise slingshot aim! Knock down stubborn pigs, bust through block fortresses, and conquer physics-based levels.",
    "game.bladeDartDesc":
      "Throw darts at a rotating target with precision! Unlock new blades, upgrade damage, and conquer 300 levels of dart-throwing action.",
    "game.summitDesc":
      "Scale the icy peak step by step! Tap or click to climb, survive falling rocks and predators, and conquer the summit in this minimalist arcade challenge.",

    // DApp descriptions
    "dapp.ruokDesc":
      "A Decentralized Check-In Triggered Timed Transfer DApp On Sui Network",
    "dapp.write3Desc":
      "A platform for novel authors to upload novels on Sui blockchain.",
    "dapp.charactertoolDesc": "Novel Creation Toolkit Series",
    "dapp.collabaiDesc": "Novel Creation Collab AI",

    // Open Source
    "os.suiBP": "Sui Best Practices",
    "os.suiBPDesc":
      "Contributed to the Sui Best Practices repository with code improvements and documentation",

    // DApps section projects
    "dapp.areYouOkay": "Are You Okay?",
    "dapp.miniSoccer": "Mini Soccer",
    "dapp.suiWrite3": "Sui Write3",
    "dapp.handBattle": "Hand Battle",
    "dapp.charactertool": "Character Builder",
    "dapp.collabai": "Fic Collab AI",

    // Articles
    "articles.title": "📝 Articles & Tutorials",
    "articles.subtitle": "Technical writings and blockchain tutorials.",
    "articles.read": "Read →",

    // Novels
    "novels.read": "Read →",

    // Share
    "share.tryText": "Come try",
    "share.shareToX": "Share to X",
    "share.copyLink": "Copy Link",
    "share.copied": "Copied!",

    // OPC Network
    "opc.title": "🌐 OPC Network",
    "opc.subtitle": "Open Person Company collaborative network projects.",
    "opc.visit": "GitHub →",

    // Stable Gateway
    "gateway.title": "🚉 Stable Gateway",
    "gateway.subtitle": "Recommended stable access points and tools.",
    "gateway.visit": "Visit →",

    // Auth
    "nav.login": "Login",
    "nav.logout": "Logout",
    "nav.user": "User",
    "auth.login": "Login",
    "auth.register": "Register",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.nickname": "Nickname (optional)",
    "auth.processing": "Processing...",
    "auth.close": "Close",
    "auth.error.emailRegistered":
      "This email is already registered, please login.",
    "auth.error.registerFailed": "Registration failed, please try again.",
    "auth.error.registerSuccess":
      "Registration successful! Please check your email to confirm.",
    "auth.error.loginFailed": "Incorrect email or password.",
    "auth.error.loginFailed2": "Login failed, please try again.",
    "auth.error.unknown": "Operation failed, please try again.",

    // Confirm
    "confirm.title": "Email Confirmation",
    "confirm.verifying": "Verifying...",
    "confirm.failed": "Confirmation failed: ",
    "confirm.success": "Email confirmed successfully! Please return to login.",
    "confirm.invalidLink":
      "Invalid confirmation link. Make sure you clicked the full link from the email.",
    "confirm.invalid": "Invalid confirmation link",
    "confirm.backHome": "Back to Home",

    // News
    "news.title": "📰 Latest News",
    "news.subtitle": "Hot topics, AI daily briefings, and tech updates.",
  },

  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.me": "我的",
    "nav.whatWeDo": "关于我们",
    "nav.service": "服务",
    "nav.project": "项目",
    "nav.blog": "博客",
    "nav.news": "新闻",
    "nav.contact": "联系",

    // Hero
    "hero.title": "ZD Tech 工作室",
    "hero.subtitle": "聚合网页游戏、Roblox 作品、DApp 与实用工具的创作站点。",
    "hero.tagline": "可以试玩项目、浏览更新，并进行点赞、收藏与留言互动。",
    "hero.contact": "联系我们",
    "hero.viewGames": "查看游戏 ↓",
    "hero.wishPlaceholder": "描述你想要的游戏...",
    "hero.wishContactPlaceholder":
      "邮箱 / X / Telegram（可选，方便我们通知你）",
    "hero.wishButton": "许愿按钮 🎯",
    "hero.wishSuccess": "愿望已收到！我们会考虑的 🚀",
    "hero.wishError": "哎呀，出错了！再试一次吧",

    // Roblox Games
    "roblox.title": "🎮 Roblox 游戏",
    "roblox.subtitle": "我们在 Roblox 平台上的旗舰游戏。",
    "roblox.live": "● 已上线",
    "roblox.soon": "◌ 即将上线",
    "roblox.play": "在 Roblox 上游玩 →",
    "roblox.comingSoon": "即将上线",

    // DApps
    "dapps.title": "🚀 DApp 和项目",
    "dapps.subtitle": "基于 Sui 网络构建的去中心化应用。",
    "dapps.visit": "访问",
    "dapps.help": "帮助",
    "dapps.github": "GitHub",

    // Web Games
    "webgames.title": "🌐 网页游戏",
    "webgames.subtitle": "基于浏览器的休闲游戏，随时随地畅玩。",
    "webgames.playNow": "立即开玩",

    // Open Source
    "opensource.title": "💡 开源贡献",
    "opensource.subtitle": "为社区做出的贡献。",
    "opensource.project": "项目",
    "opensource.myPR": "我的 PR",

    // Newsletter
    "newsletter.title": "📬 订阅更新",
    "newsletter.subtitle": "新游戏或项目上线时第一时间通知您。",
    "newsletter.placeholder": "输入您的邮箱...",
    "newsletter.subscribe": "订阅",
    "newsletter.subscribing": "订阅中...",
    "newsletter.success": "订阅成功！我们会及时通知您。",
    "newsletter.duplicate": "您已经订阅过了。",
    "newsletter.error": "出了点问题，请稍后再试。",

    // Footer
    "footer.about": "ZD Tech",
    "footer.aboutDesc":
      "独立游戏开发者与 Web3 建设者，在 Roblox 和 Sui 区块链上创造体验。",
    "footer.games": "游戏",
    "footer.projects": "项目",
    "footer.connect": "联系",
    "footer.friendLinks": "友情链接",
    "footer.shuangyuNovel": "双鱼小说",
    "footer.copyright": "Copyright © 2026 ZD Tech",

    // What We Do
    "whatwedo.title": "我们做什么",
    "whatwedo.subtitle":
      "我们在前沿区块链技术上构建去中心化应用、Web3 游戏和创意工具。",
    "whatwedo.dappTitle": "DApp 开发",
    "whatwedo.dappDesc":
      "在 Sui 网络上进行全栈去中心化应用开发，从智能合约到前端界面。",
    "whatwedo.gameTitle": "Web3 游戏",
    "whatwedo.gameDesc":
      "基于浏览器和 Roblox 的游戏，集成区块链、NFT 资产和 Play-to-Earn 机制。",
    "whatwedo.consultTitle": "技术咨询",
    "whatwedo.consultDesc":
      "为区块链项目和团队提供架构设计、代码审查和技术指导。",

    // Service
    "service.title": "我们的服务",
    "service.subtitle": "为您的 Web3 之旅提供端到端解决方案。",
    "service.s1Title": "智能合约开发",
    "service.s1Desc": "在 Sui 网络上开发安全、经过审计的 Move 智能合约。",
    "service.s2Title": "前端与 UI/UX",
    "service.s2Desc": "基于 React 的现代界面，集成钱包功能和响应式设计。",
    "service.s3Title": "游戏开发",
    "service.s3Desc": "浏览器游戏、Roblox 体验和区块链驱动的游戏经济系统。",
    "service.s4Title": "网页与小程序",
    "service.s4Desc": "企业官网、微信小程序和公众号开发。",

    // Project
    "project.title": "项目展示",
    "project.subtitle": "探索我们的游戏、DApp、工具和创意作品集。",
    "project.comingSoon": "即将上线",
    "project.search": "搜索项目...",
    "project.all": "全部",
    "project.filter": "筛选",
    "project.filter.allGames": "全部游戏",
    "project.category.game": "游戏",
    "project.category.roblox": "Roblox游戏",
    "project.category.webgame": "网页游戏",
    "project.category.dapp": "DApp",
    "project.category.tool": "工具",
    "project.category.article": "文章",
    "project.category.novel": "小说",
    "project.tag.game": "游戏",
    "project.tag.featured": "热门推荐",
    "project.tag.latest": "最新推荐",
    "project.platform.roblox": "Roblox",
    "project.platform.web": "网页",
    "project.live": "● 已上线",
    "project.soon": "◌ 即将上线",
    "project.new": "新",
    "project.play": "立即游玩 →",
    "project.visit": "访问 →",
    "project.github": "GitHub →",
    "project.read": "阅读 →",
    "project.noResults": "未找到匹配的项目。请尝试其他搜索词或筛选条件。",

    // Blog
    "blog.title": "博客",
    "blog.subtitle": "团队的技术见解、教程和动态。",
    "blog.comingSoon": "即将上线",
    "blog.comingDesc": "我们正在准备精彩内容，敬请期待！",

    // Contact
    "contact.title": "联系我们",
    "contact.subtitle": "有项目想法？让我们聊聊。",
    "contact.email": "📧 邮箱",
    "contact.quickMsg": "💬 快速留言",
    "contact.yourEmail": "您的邮箱",
    "contact.yourMsg": "留言内容...",
    "contact.send": "发送",
    "contact.sent": "感谢！我们会尽快回复您。",

    // Roblox game descriptions
    "game.apexMindDesc": "在 Roblox 上挑战烧脑益智体验。",
    "game.lobsterBumpDesc": "碰撞、竞争、称霸，体验快节奏的 Roblox 游戏。",
    "game.warlordSagaDesc": "领主争霸的史诗传奇，即将上线。",
    "game.warlordHeroesDesc":
      "三国题材策略游戏 — 已发布，开放第一关卡基本玩法。体验中华英雄的传奇故事。",
    "game.lobsterRunDesc": "有趣的龙虾跑酷 H5 游戏 — 奔跑、跳跃、躲避障碍！",
    "game.footballDesc": "足球射门&守门 H5 游戏 — 射门要准，防守要狠！",
    "game.handBattleDesc": "用手势对战的趣味游戏。",
    "game.saveManDesc":
      "操控救援抓斗，从矿井中救出被困人员！点击释放抓斗，将他们拉上来。",
    "game.miniSoccerDesc":
      "划线控制弹力射门的足球小游戏，找准角度与反弹路线，把球送进球门。",
    "game.killerH5Desc":
      "暗杀H5游戏 — 分析场景，识别目标，合理利用道具，成为传奇刺客！",
    "game.swimDesc": "百米自由泳比赛 — 极速冲刺，收集道具，勇夺冠军！",
    "game.zombieSiegeDesc":
      "在末日丧尸围城中生存下来！守卫基地，升级武器，击退无尽尸潮。",
    "game.grandpaFarmDesc":
      "建设爷爷的沙漠农场，种植作物，把安静的沙地经营成繁荣绿洲。",
    "game.comingSoonDesc": "即将上线，敬请期待！",
    "game.hotDanceDesc":
      "100 级节奏闯关网页游戏，跟随下落箭头打出连击，触发电弧爆炸，并冲击前十排行榜。",
    "game.dropafriendDesc":
      "把朋友拖到悬崖边推下去，让他一路撞击陷阱赚金币 — 中英双语、移动端友好，升级内容丰富。",
    "game.bladeDartDesc":
      "向旋转的靶心精准投掷飞镖！解锁新飞刀、升级伤害，征服 300 关飞镖挑战！",
    "game.summitDesc":
      "一步步攀登冰封山峰！点击或触摸向上攀爬，躲避落石和捕食者，征服顶峰！极简风冒险挑战。",
    "game.lobsterRunTitle": "🦞 龙虾跑酷",
    "game.killerH5Title": "🗡️ 暗杀",
    "game.swimTitle": "🏊 百米自由泳",
    "game.zombieSiegeTitle": "🧟 降临：僵尸围城",
    "game.grandpaFarmTitle": "爷爷的农场",
    "game.hotDanceTitle": "热舞团",
    "game.dropafriendTitle": "🪨 扔掉一个朋友",
    "game.bladeDartTitle": "🗡️ 剑出飞镖",
    "game.summitTitle": "⛰️ 登峰造极",
    "game.crazyBirdTitle": "🐦 愤怒的小鸡",
    "game.crazyBirdDesc":
      "用弹弓精准发射小鸟！撞倒顽固的猪头，冲破砖块堡垒，征服基于物理引擎的趣味关卡。",

    // DApp descriptions
    "dapp.ruokDesc": "基于 Sui 网络的去中心化签到触发定时转账 DApp",
    "dapp.write3Desc": "基于 Sui 区块链的小说创作与上传平台。",
    "dapp.charactertoolDesc": "小说创作工具集系列",
    "dapp.collabaiDesc": "小说创作协作AI",

    // Open Source
    "os.suiBP": "Sui 最佳实践",
    "os.suiBPDesc": "为 Sui 最佳实践仓库贡献了代码改进和文档",

    // DApps section projects
    "dapp.areYouOkay": "Are You Okay?",
    "dapp.miniSoccer": "Mini Soccer",
    "dapp.suiWrite3": "Sui Write3",
    "dapp.handBattle": "Hand Battle",
    "dapp.charactertool": "角色设定工具",
    "dapp.collabai": "综影视协作AI",
  },
};
