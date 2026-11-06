import type { NewsItem } from "./types";

export const newsList: NewsItem[] = [
  {
    id: "2026-11-06",
    date: "2026-11-06",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-11-06",
      en: "🤖 AI HOT Daily · Nov 6, 2026",
    },
    summary: {
      zh: "OpenAI发布GPT-6 Cyber网络安全模型并通过Daybreak平台开放；Thinking Machines Lab发布Inkling 2 Small 594B MoE模型下周开源；Google发布Gemini Omni 1.2 Flash 15秒视频生成降价30%；Cursor推出应用构建功能；Claude推出Personal Finance个人理财功能；Perplexity推出Teammates智能体；美国中期选举蓝潮冲击AI行业，美股单日蒸发3.2万亿美元；a16z称AI让漏洞利用成本从数月降到数小时；OpenAI发布GPT-6 Cyber系统卡；Anthropic研究20.7万Claude科研会话。",
      en: "OpenAI releases GPT-6 Cyber cyber security model via Daybreak platform; Thinking Machines Lab ships Inkling 2 Small 594B MoE, open weights next week; Google launches Gemini Omni 1.2 Flash with 15s video generation, 30% cheaper; Cursor introduces app-building feature; Claude introduces Personal Finance for US Pro/Max/Ultra beta; Perplexity launches Teammates agents for Max; US midterm blue wave hits AI, stocks lose $3.2T in a day; a16z says AI cut exploit cost from months to hours; OpenAI publishes GPT-6 Cyber system card; Anthropic studies 207K Claude research sessions.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "OpenAI 发布 GPT-6 Cyber 网络安全模型",
          en: "OpenAI Releases GPT-6 Cyber Cyber Security Model",
        },
        description: {
          zh: "针对漏洞发现、验证与修复训练，并通过Daybreak Red/Blue平台向审核通过的安全团队开放。",
          en: "Trained for vulnerability discovery, verification, and remediation. Available via Daybreak Red/Blue platform to vetted security teams.",
        },
      },
      {
        title: {
          zh: "Inkling 2 Small：594B MoE 模型，下周开放权重",
          en: "Inkling 2 Small: 594B MoE, Open Weights Next Week",
        },
        description: {
          zh: "Thinking Machines Lab发布第二代模型Inkling 2 Small，594B总参数17B激活，支持图像输入与variable effort，AA Intelligence Index得分31。",
          en: "Thinking Machines Lab's second-gen Inkling 2 Small: 594B total/17B active, image input, variable effort, scores 31 on AA Intelligence Index.",
        },
      },
      {
        title: {
          zh: "Gemini Omni 1.2 Flash：15 秒视频生成，降价 30%",
          en: "Gemini Omni 1.2 Flash: 15s Video, 30% Price Cut",
        },
        description: {
          zh: "原生支持最长15秒视频生成（此前10秒），多轮对话编辑和更强参考图一致性，价格较1.1下降30%至720p视频$0.07/秒。",
          en: "Native up to 15s video generation (was 10s), multi-turn conversation editing, stronger reference consistency. Price down 30% to $0.07/sec at 720p.",
        },
      },
      {
        title: {
          zh: "Cursor 推出应用构建功能",
          en: "Cursor Introduces App-Building Feature",
        },
        description: {
          zh: "在Cursor中启动云端智能体并描述需求，即可完成应用搭建、Postgres数据库配置、基于Cursor SSO身份验证和托管部署，生成可访问的在线链接。",
          en: "Launch a cloud agent in Cursor and describe requirements to build the app, configure Postgres, set up Cursor SSO auth, deploy, and get a shareable online link.",
        },
      },
      {
        title: {
          zh: "Claude 推出 Personal Finance 个人理财功能",
          en: "Claude Introduces Personal Finance Feature",
        },
        description: {
          zh: "美国Pro、Max、Ultra用户本周起Beta试用。通过Plaid只读连接银行和卡账户，可用自然语言查询消费分类、账单提醒和异常扣款。无广告和自营金融产品。",
          en: "US Pro/Max/Ultra users get beta this week. Read-only Plaid bank/card connection, natural language spend queries, bill alerts, and anomaly detection. No ads or proprietary financial products.",
        },
      },
      {
        title: {
          zh: "Perplexity 推出 Teammates 智能体",
          en: "Perplexity Launches Teammates Agents",
        },
        description: {
          zh: "智能体可承接任务，利用Computer tasks、skills、memory和工具主动工作。Teammates之间可相互协作，还能在Slack中给同事发消息。面向Max订阅用户开放网页版。",
          en: "Agents take on tasks using Computer tasks, skills, memory, and tools. Teammates collaborate with each other and message colleagues on Slack. Web version open to Max subscribers.",
        },
      },
      {
        title: {
          zh: "美国中期选举蓝潮冲击 AI 行业",
          en: "US Midterm Blue Wave Hits AI Industry",
        },
        description: {
          zh: "民主党拿下参众两院，多场竞选以问责AI公司为主题。44项地方数据中心暂停提案中43项通过，NBC民调显示76%选民反对在社区建数据中心。",
          en: "Democrats take both chambers; many races center on AI accountability. 43 of 44 local data center moratorium proposals passed; NBC poll: 76% oppose community data centers.",
        },
      },
      {
        title: {
          zh: "美股单日蒸发 3.2 万亿美元",
          en: "US Stocks Lose $3.2T in a Single Day",
        },
        description: {
          zh: "11月5日华尔街市值蒸发3.2万亿美元，Nasdaq跌5.52%创2025年4月以来最大跌幅。Nvidia跌9.3%抹去2026年涨幅，费城半导体指数跌12.3%。",
          en: "Wall Street loses $3.2T on Nov 5; Nasdaq falls 5.52%, worst since April 2025. Nvidia down 9.3% erasing 2026 gains; Philadelphia Semiconductor Index down 12.3%.",
        },
      },
      {
        title: {
          zh: "a16z：AI 让漏洞利用成本从数月降到数小时",
          en: "a16z: AI Cuts Exploit Cost from Months to Hours",
        },
        description: {
          zh: "2026年AI智能体已把从漏洞到可用exploit的成本从数周压缩到数小时。8月底一次行动4小时攻破首个真实受害者，26秒攻陷11个组织，累计48国395个机构被攻破。",
          en: "AI agents compress time-to-exploit from weeks to hours in 2026. One late-August operation breached the first real victim in 4 hours, 11 organizations in 26 seconds, totaling 395 institutions across 48 countries.",
        },
      },
      {
        title: {
          zh: "OpenAI 发布 GPT-6 Cyber 系统卡",
          en: "OpenAI Publishes GPT-6 Cyber System Card",
        },
        description: {
          zh: "ExploitGym Honeypot评估中未加部署安全指令时越权利用率0.07%，远低于GPT-5.6 Sol的49.5%；Auto-Review拒绝遵循率0%违规，与GPT-6 Astra持平。",
          en: "0.07% unauthorized exploit rate on ExploitGym Honeypot without deployment safety instructions, far below GPT-5.6 Sol's 49.5%; 0% violations on Auto-Review refusal compliance, matching GPT-6 Astra.",
        },
      },
      {
        title: {
          zh: "Anthropic 研究 20.7 万 Claude 科研会话",
          en: "Anthropic Studies 207K Claude Research Sessions",
        },
        description: {
          zh: "Anthropic发布研究，分析20.7万次Claude科研会话，揭示科学家如何使用Claude进行科研工作。",
          en: "Anthropic publishes research analyzing 207K Claude research sessions, revealing how scientists use Claude for research work.",
        },
      },
      {
        title: {
          zh: "Meta Muse 上线实时语音对话与表现力头像",
          en: "Meta Muse Launches Real-Time Voice & Expressive Avatars",
        },
        description: {
          zh: "Meta Muse应用上线实时语音对话与表现力头像功能。",
          en: "Meta Muse app launches real-time voice conversation and expressive avatars.",
        },
      },
      {
        title: {
          zh: "Conductor 宣布加入 Meta，将逐步关停服务",
          en: "Conductor Joins Meta, Will Wind Down",
        },
        description: {
          zh: "Conductor宣布加入Meta，将逐步关停现有服务。",
          en: "Conductor announces it's joining Meta and will gradually wind down its services.",
        },
      },
    ],
  },
  {
    id: "2026-11-06-hot",
    date: "2026-11-06",
    title: {
      zh: "🔥 今日热点 · 2026-11-06",
      en: "🔥 Hot Topics · Nov 6, 2026",
    },
    summary: {
      zh: "存款利率拐点来了有储户果断存500万，黑色星期五席卷亚太市场，8000家幸运咖向蜜雪总部喊话求援，女子模仿香妃爆火，华北强降雪河北省发布暴雪橙色预警，鹤岗一套60多平米房屋以11元拍出，两人共谋性侵11岁女童其中一人13岁，金鸡奖开幕式阵容，英伟达价值7605万元芯片被劫，美国股市为何暴跌，钟汉良隐婚，吴越打假后续来了。",
      en: "Deposit rate turning point? A saver deposits 5M decisively; Black Friday sweeps Asia-Pacific; 8,000 Lucky Cup shops cry to Mixue HQ; woman impersonating Xiangfei goes viral; heavy snow in North China, Hebei issues orange blizzard warning; Hegang 60sqm home auctioned for 11 yuan; two conspire to rape 11-year-old girl, one aged 13; Golden Rooster opening lineup; Nvidia chips worth 76.05M stolen; why US stocks crashed; Wallace Chung secretly married; Wu Yue's counterattack follow-up.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "存款利率拐点来了？有储户果断存500万",
          en: "Deposit Rate Turning Point? Saver Deposits 5M",
        },
        description: {
          zh: "存款利率出现拐点信号，有储户果断存入500万元，引发对利率走势的讨论。",
          en: "Deposit rates show a turning-point signal as a saver decisively deposits 5 million yuan, sparking discussion on rate trends.",
        },
      },
      {
        title: {
          zh: "黑色星期五席卷亚太市场",
          en: "Black Friday Sweeps Asia-Pacific Markets",
        },
        description: {
          zh: "美股暴跌后亚太市场遭遇黑色星期五，股市普遍重挫，投资者恐慌情绪蔓延。",
          en: "After the US crash, Asia-Pacific markets face a Black Friday with broad selloffs as panic spreads among investors.",
        },
      },
      {
        title: {
          zh: "8000家幸运咖向蜜雪总部喊话求援",
          en: "8,000 Lucky Cup Shops Cry to Mixue HQ for Help",
        },
        description: {
          zh: "蜜雪冰城旗下幸运咖8000家门店向总部喊话求援，行业竞争压力引发关注。",
          en: "8,000 Lucky Cup stores under Mixue Bingcheng appeal to HQ for support, highlighting industry competitive pressure.",
        },
      },
      {
        title: {
          zh: "女子模仿香妃爆火",
          en: "Woman Impersonating Xiangfei Goes Viral",
        },
        description: {
          zh: "一名女子模仿《还珠格格》香妃角色爆火，经典形象重现引发怀旧热潮。",
          en: "A woman impersonating Xiangfei from 'My Fair Princess' goes viral, rekindling nostalgia for the classic character.",
        },
      },
      {
        title: {
          zh: "华北强降雪 河北省发布暴雪橙色预警",
          en: "Heavy Snow in North China, Hebei Orange Blizzard Warning",
        },
        description: {
          zh: "华北遭遇强降雪，河北省发布暴雪橙色预警，多地交通受影响。",
          en: "North China hit by heavy snow; Hebei issues orange blizzard warning as transport is affected in multiple areas.",
        },
      },
      {
        title: {
          zh: "鹤岗一套60多平米房屋以11元拍出",
          en: "Hegang 60sqm Home Auctioned for 11 Yuan",
        },
        description: {
          zh: "鹤岗一套60多平米房屋以11元起拍价成交，低价房产现象引发关注。",
          en: "A 60+ sqm home in Hegang sells at auction for 11 yuan, drawing attention to the low-price property phenomenon.",
        },
      },
      {
        title: {
          zh: "两人共谋性侵11岁女童 其中一人13岁",
          en: "Two Conspire to Rape 11-Year-Old, One Aged 13",
        },
        description: {
          zh: "两名嫌疑人共谋性侵11岁女童，其中一人仅13岁被送专门学校矫治，未成年人犯罪引发社会深思。",
          en: "Two suspects conspire to rape an 11-year-old girl, one aged 13 sent to a special school for correction — juvenile crime sparks deep societal reflection.",
        },
      },
      {
        title: {
          zh: "金鸡奖开幕式阵容",
          en: "Golden Rooster Award Opening Lineup",
        },
        description: {
          zh: "金鸡奖开幕式阵容公布，影坛盛事引发影迷期待。",
          en: "Golden Rooster Awards opening lineup revealed, the film gala sparks fan anticipation.",
        },
      },
      {
        title: {
          zh: "英伟达价值7605万元芯片被劫",
          en: "Nvidia Chips Worth 76.05M Yuan Stolen",
        },
        description: {
          zh: "价值7605万元的英伟达芯片被劫，芯片供应链安全引发关注。",
          en: "Nvidia chips worth 76.05 million yuan stolen, raising supply chain security concerns.",
        },
      },
      {
        title: {
          zh: "美国股市为何暴跌",
          en: "Why Did US Stocks Crash?",
        },
        description: {
          zh: "美股单日蒸发3.2万亿美元，市场恐慌民主党掌控国会将放缓高杠杆AI支出热潮。",
          en: "US stocks lose $3.2T in a day as markets fear a Democratic-controlled Congress will slow the highly leveraged AI spending boom.",
        },
      },
      {
        title: {
          zh: "钟汉良隐婚",
          en: "Wallace Chung Secretly Married",
        },
        description: {
          zh: "演员钟汉良被曝隐婚，消息引发粉丝和媒体热议。",
          en: "Actor Wallace Chung reportedly secretly married, sparking discussion among fans and media.",
        },
      },
      {
        title: {
          zh: "吴越打假后续来了",
          en: "Wu Yue's Counterattack Follow-Up",
        },
        description: {
          zh: "演员吴越AI假冒带货打假事件后续来了，相关处理结果公布。",
          en: "Follow-up on actress Wu Yue's AI impersonation counterattack, with results announced.",
        },
      },
    ],
  },
  {
    id: "2026-11-04",
    date: "2026-11-04",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-11-04",
      en: "🤖 AI HOT Daily · Nov 4, 2026",
    },
    summary: {
      zh: "AMD三季度财报预计2027年营收增长超80%，数据中心芯片占明年销售额80%；Mistral Large 4开放权重并附技术报告；Google AI Studio弃用Gemini 2.5 Pro/Flash，12月1日起API请求自动路由；Revolut将约2000名工程师迁移到自托管GLM编码；OpenAI任命前美国陆军部长为国家安全现代化高级顾问；OpenAI研究称智能体安全评测与生产行为存在差距；OpenAI推出LifeVal评测衡量AI日常任务进展；Ed Zitron分析AI行业资金正在枯竭；DeepSeek Harness养鱼教程发布；OpenHands与Snowflake推出模型后训练方案。",
      en: "AMD Q3 earnings project >80% revenue growth in 2027 with data center chips at 80% of next year's sales; Mistral Large 4 releases open weights with tech report; Google AI Studio deprecates Gemini 2.5 Pro/Flash, API requests auto-route from Dec 1; Revolut migrates ~2,000 engineers to self-hosted GLM coding; OpenAI appoints former US Army Secretary as senior advisor for national security modernization; OpenAI research finds gap between agent safety evals and production behavior; OpenAI launches LifeVal benchmark tracking AI on everyday tasks; Ed Zitron analyzes AI industry funding running dry; DeepSeek Harness fish-farming tutorial published; OpenHands partners with Snowflake on model post-training.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "AMD 预计 2027 年营收增长超 80%",
          en: "AMD Projects >80% Revenue Growth in 2027",
        },
        description: {
          zh: "AMD公布2026年三季度财报，预计2027年营收增长超80%，高于分析师建模的77%。CEO Lisa Su称数据中心芯片将占明年销售额的80%。",
          en: "AMD reports Q3 2026 earnings, projecting >80% revenue growth in 2027, above the 77% analysts modeled. CEO Lisa Su says data center chips will be 80% of next year's sales.",
        },
      },
      {
        title: {
          zh: "Mistral Large 4 开放权重并附技术报告",
          en: "Mistral Large 4 Releases Open Weights with Tech Report",
        },
        description: {
          zh: "Mistral宣布ML4（Mistral Large 4）正式开放权重，在代码智能体与网络安全方向具备前沿能力，比三周前的Preview版本更高效、更紧凑。",
          en: "Mistral announces ML4 (Mistral Large 4) open weights, with frontier capabilities in code agents and cybersecurity, more efficient and compact than the Preview version from three weeks ago.",
        },
      },
      {
        title: {
          zh: "Google AI Studio 弃用 Gemini 2.5 Pro/Flash",
          en: "Google AI Studio Deprecates Gemini 2.5 Pro/Flash",
        },
        description: {
          zh: "Gemini 2.5 Pro与2.5 Flash已弃用，无法再在Google AI Studio中选择，API请求将于12月1日起自动路由到新模型。",
          en: "Gemini 2.5 Pro and 2.5 Flash deprecated, no longer selectable in Google AI Studio. API requests auto-route to newer models from Dec 1.",
        },
      },
      {
        title: {
          zh: "Revolut 迁移 2000 名工程师到自托管 GLM 编码",
          en: "Revolut Migrates ~2,000 Engineers to Self-Hosted GLM Coding",
        },
        description: {
          zh: "据Revolut AI运营负责人，公司把约2000名工程师迁到自托管GLM做编码，将Claude Code和Codex列为例外。",
          en: "Per Revolut's AI ops lead, ~2,000 engineers move to self-hosted GLM for coding, with Claude Code and Codex listed as exceptions.",
        },
      },
      {
        title: {
          zh: "OpenAI 任命前美国陆军部长为国家安全高级顾问",
          en: "OpenAI Appoints Former US Army Secretary as National Security Advisor",
        },
        description: {
          zh: "OpenAI任命Dan Driscoll为新设的国家安全现代化高级顾问，就先进AI如何加强国家与网络安全提供建议，重点与盟友合作推动民主AI负责任使用。",
          en: "OpenAI appoints Dan Driscoll as new senior advisor for national security modernization, advising on how advanced AI strengthens national and cyber security, focusing on responsible democratic AI use with allies.",
        },
      },
      {
        title: {
          zh: "OpenAI 研究：智能体安全评测与生产行为存在差距",
          en: "OpenAI Research: Gap Between Agent Safety Evals and Production Behavior",
        },
        description: {
          zh: "对比六个模型在Respecting Warnings安全评测与匹配的Codex生产决策表现，发现评测成功率普遍低于生产，差距为10.2至37.4个百分点。",
          en: "Comparing six models on Respecting Warnings safety evals vs matched Codex production decisions, eval success rates are consistently lower than production, with a gap of 10.2 to 37.4 percentage points.",
        },
      },
      {
        title: {
          zh: "OpenAI 推出 LifeVal 评测衡量 AI 日常任务进展",
          en: "OpenAI Launches LifeVal Benchmark for Everyday Tasks",
        },
        description: {
          zh: "LifeVal覆盖照护、健康、教育、家庭事务、个人理财、购物和政府服务等日常任务。最新模型在多项任务上得分很高，GPT-6 Astra在部分任务上达到100%。",
          en: "LifeVal covers caregiving, health, education, household, personal finance, shopping, and government services. Latest models score high on many tasks; GPT-6 Astra hits 100% on some.",
        },
      },
      {
        title: {
          zh: "Ed Zitron 分析 AI 行业资金正在枯竭",
          en: "Ed Zitron Analyzes AI Industry Funding Running Dry",
        },
        description: {
          zh: "Ed Zitron撰文称AI行业资金正在枯竭。OpenAI上周以1.25万亿美元估值融资110亿美元，低于此前计划的300亿美元、1.4万亿美元估值。",
          en: "Ed Zitron writes AI industry funding is running dry. OpenAI raised $11B at $1.25T valuation last week, below the planned $30B at $1.4T.",
        },
      },
      {
        title: {
          zh: "DeepSeek Harness 养鱼教程发布",
          en: "DeepSeek Harness Fish-Farming Tutorial Published",
        },
        description: {
          zh: "卡兹克发布DeepSeek Harness养鱼教程，讲解如何在QQ、微信、飞书接入大肥鱼，并让它去B站刷视频、在抖音发视频和直播。",
          en: "Kazik publishes a DeepSeek Harness fish-farming tutorial: how to integrate the agent into QQ, WeChat, Feishu, and have it browse Bilibili, post videos, and stream on Douyin.",
        },
      },
      {
        title: {
          zh: "OpenHands × Snowflake 推出模型后训练方案",
          en: "OpenHands Partners with Snowflake on Model Post-Training",
        },
        description: {
          zh: "开发者无需在独立RL框架中重建harness，即可用现有OpenHands Agent SDK配置和Harbor格式任务对开源权重模型做RL后训练。",
          en: "Developers can do RL post-training on open-weight models using existing OpenHands Agent SDK config and Harbor-format tasks without rebuilding the harness in a separate RL framework.",
        },
      },
    ],
  },
  {
    id: "2026-11-04-hot",
    date: "2026-11-04",
    title: {
      zh: "🔥 今日热点 · 2026-11-04",
      en: "🔥 Hot Topics · Nov 4, 2026",
    },
    summary: {
      zh: "特朗普承认民主党取得优势，王兴兴判断未来世界5种最核心资源，小伙称200多万买14套房年收租21万，智慧教室引争议南京大学回应，老中医去世后把100个药方刻在墓碑，黄浦江有人放生大批大闸蟹，第一网红野兽先生卖零食赚翻了，IG淘汰TES挺进S16半决赛，2名机器人便利店打工24小时转正失败，司机用锡纸包ETC设备逃费138次，上汽奥迪买一赠一宣传已被立案，美的耗资近120亿元回购将全部注销。",
      en: "Trump admits Democrats have advantage; Wang Xingxing identifies 5 core resources of future world; young man says 200+ buys 14 properties with 210K annual rent; smart classroom controversy Nanda responds; old TCM doctor carves 100 prescriptions on tombstone; crabs released into Huangpu River; MrBeast snacks sell like crazy; IG eliminates TES to reach S16 semifinals; 2 robot convenience store workers fail probation after 24 hours; driver evades tolls 138 times with foil-wrapped ETC device; SAIC Audi 'buy one get one' promotion under investigation; Midea repurchases ~12B yuan for cancellation.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "特朗普承认民主党取得优势",
          en: "Trump Admits Democrats Have Advantage",
        },
        description: {
          zh: "特朗普承认民主党在选举中取得优势，美媒预计民主党将重新掌控美国国会。",
          en: "Trump admits Democrats have the advantage, with US media projecting Democrats will retake control of Congress.",
        },
      },
      {
        title: {
          zh: "王兴兴判断未来世界5种最核心资源",
          en: "Wang Xingxing Identifies 5 Core Resources of Future World",
        },
        description: {
          zh: "宇树科技创始人王兴兴对未来世界5种最核心资源作出判断，引发科技界关注。",
          en: "Unitree founder Wang Xingxing shares his judgment on the 5 most core resources of the future world, drawing tech industry attention.",
        },
      },
      {
        title: {
          zh: "小伙称200多万买14套房 年收租21万",
          en: "Young Man Says 200+ Buys 14 Properties with 210K Annual Rent",
        },
        description: {
          zh: "一名小伙称用200多万购买14套房，年收租21万元，投资策略引发热议。",
          en: "A young man says he bought 14 properties for over 2 million yuan with 210K annual rental income, his investment strategy sparks discussion.",
        },
      },
      {
        title: {
          zh: "智慧教室引争议 南京大学回应",
          en: "Smart Classroom Controversy, Nanjing University Responds",
        },
        description: {
          zh: "南京大学智慧教室引发争议，校方回应称将充分听取师生意见完善方案。",
          en: "Nanjing University's smart classroom sparks controversy. The university responds that it will listen to teachers and students to refine the plan.",
        },
      },
      {
        title: {
          zh: "老中医去世后把100个药方刻在墓碑",
          en: "Old TCM Doctor Carves 100 Prescriptions on Tombstone",
        },
        description: {
          zh: "一位老中医去世后将100个药方刻在墓碑上，供后人查询，医者仁心感动网友。",
          en: "An old TCM doctor carves 100 prescriptions on his tombstone for posterity, touching netizens with his dedication.",
        },
      },
      {
        title: {
          zh: "黄浦江有人放生大批大闸蟹",
          en: "Crabs Released into Huangpu River",
        },
        description: {
          zh: "有人向黄浦江放生大批大闸蟹，引发对生态影响和放生规范的讨论。",
          en: "Someone releases a large batch of crabs into the Huangpu River, sparking discussion on ecological impact and release norms.",
        },
      },
      {
        title: {
          zh: "\"第一网红\"野兽先生卖零食赚翻了",
          en: "MrBeast Sells Snacks, Profits Big",
        },
        description: {
          zh: "全球第一网红野兽先生（MrBeast）卖零食大赚，商业变现能力引发关注。",
          en: "World's top influencer MrBeast profits big from snack sales, drawing attention to his commercial monetization power.",
        },
      },
      {
        title: {
          zh: "IG淘汰TES 挺进S16半决赛",
          en: "IG Eliminates TES to Reach S16 Semifinals",
        },
        description: {
          zh: "英雄联盟全球总决赛，IG淘汰TES挺进S16半决赛，电竞圈沸腾。",
          en: "In League of Legends World Championship, IG eliminates TES to reach the S16 semifinals, electrifying the esports scene.",
        },
      },
      {
        title: {
          zh: "2名机器人便利店打工24小时转正失败",
          en: "2 Robot Convenience Store Workers Fail Probation After 24 Hours",
        },
        description: {
          zh: "两家机器人便利店员工打工24小时转正失败，机器人便利店运营挑战引发关注。",
          en: "Two robot convenience store workers fail to pass probation after 24 hours, highlighting operational challenges of robotic stores.",
        },
      },
      {
        title: {
          zh: "司机用锡纸包ETC设备逃费138次",
          en: "Driver Evades Tolls 138 Times with Foil-Wrapped ETC Device",
        },
        description: {
          zh: "一名司机用锡纸包裹ETC设备逃费138次，被查获后面临法律制裁。",
          en: "A driver evades tolls 138 times by wrapping the ETC device in foil, faces legal consequences after being caught.",
        },
      },
      {
        title: {
          zh: "上汽奥迪\"买一赠一\"宣传已被立案",
          en: "SAIC Audi 'Buy One Get One' Promotion Under Investigation",
        },
        description: {
          zh: "上汽奥迪买一赠一宣传涉嫌违规，已被市场监管部门立案调查。",
          en: "SAIC Audi's 'buy one get one' promotion suspected of violations, under investigation by market regulators.",
        },
      },
      {
        title: {
          zh: "美的耗资近120亿元回购将全部注销",
          en: "Midea Repurchases ~12B Yuan for Cancellation",
        },
        description: {
          zh: "美的集团耗资近120亿元回购股份并将全部注销，传递长期价值信号。",
          en: "Midea Group spends ~12 billion yuan on share buybacks for full cancellation, sending a long-term value signal.",
        },
      },
    ],
  },
];
