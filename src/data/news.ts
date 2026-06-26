export type NewsCategory = "ai-daily" | "hot-news";

export interface NewsItem {
  id: string;
  date: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  category: NewsCategory;
  items: {
    title: { zh: string; en: string };
    description: { zh: string; en: string };
  }[];
}

export const newsCategoryMeta: Record<
  NewsCategory,
  {
    label: { zh: string; en: string };
    badgeClassName: string;
  }
> = {
  "ai-daily": {
    label: { zh: "AI 日报", en: "AI Daily" },
    badgeClassName: "bg-orange-50 text-orange-700",
  },
  "hot-news": {
    label: { zh: "热点新闻", en: "Hot News" },
    badgeClassName: "bg-rose-50 text-rose-700",
  },
};

export const newsList: NewsItem[] = [
  {
    id: "2026-06-26-hot",
    date: "2026-06-26",
    title: {
      zh: "🔥 今日热点 · 2026-06-26",
      en: "🔥 Hot Topics · Jun 26, 2026",
    },
    summary: {
      zh: "德国爆冷输球坑苦韩国，金价跌回3字头半年回撤30%，重卡司机称换不起85万纯电重卡，中国单兵激光武器亮相，苹果涨价iPhone未涨，考生8次模考失利高考逆袭652分，全世界都在针对韩国队，日本7.2级地震中国游客亲历，多人将两女子关铁笼游街系摆拍，佛得角队门将不用担心失业了。",
      en: "Germany's upset loss hurts South Korea, gold price drops 30% in half year, truck drivers can't afford $117K electric trucks, China's portable laser weapon debuts, Apple hikes prices but not iPhone, student scores 652 after 8 failed mock exams, world 'targeting' South Korea, Chinese tourist experiences Japan 7.2 quake, 'women in cage parade' video staged, Cape Verde goalkeeper won't worry about unemployment.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "德国爆冷输球坑苦韩国",
          en: "Germany's Upset Loss Hurts South Korea",
        },
        description: {
          zh: "2026美加墨世界杯E组末轮，已提前锁定小组头名的德国1比2输给厄瓜多尔，最冤的却是不在E组的韩国，他们算好的出线账被德国搅乱。",
          en: "Group E finale: already-qualified Germany loses 1-2 to Ecuador, inadvertently screwing over South Korea's qualification math.",
        },
      },
      {
        title: {
          zh: "金价跌回3字头 半年回撤30%",
          en: "Gold Price Drops 30% in Half Year",
        },
        description: {
          zh: "伦敦金现货价格盘中跌破4000美元/盎司至3958美元，较年初5598美元历史高点回撤近30%，白银同期跌幅超50%。",
          en: "London spot gold跌破$4000/oz to $3958, down nearly 30% from Jan high of $5598. Silver down over 50% in same period.",
        },
      },
      {
        title: {
          zh: "重卡司机称换不起85万的纯电重卡",
          en: "Truck Drivers Can't Afford $117K Electric Trucks",
        },
        description: {
          zh: "纯电重卡落地价85万元（柴油车仅40万），虽有车电分离新政将门槛降至40万，但换电站标准不互通、电池估值体系缺失，政策落地仍有堵点。",
          en: "Electric trucks cost 850K yuan vs 400K for diesel. Despite new 'battery-separation' policy lowering barrier to 400K, lack of standards and battery valuation system hinders adoption.",
        },
      },
      {
        title: {
          zh: "中国单兵激光武器亮相",
          en: "China's Portable Laser Weapon Debuts",
        },
        description: {
          zh: "哈尔滨新光光电展出利剑系列单兵激光武器，重25公斤，射程500米，4秒内烧毁无人机，冷却不足5秒，单套约200万元。",
          en: "Harbin Xinguang displays 'Sword' series portable laser weapon: 25kg, 500m range, burns drones in 4s, <5s cooldown, ~2M yuan per unit.",
        },
      },
      {
        title: {
          zh: "苹果涨价iPhone未涨 官方回应",
          en: "Apple Hikes Prices But Not iPhone",
        },
        description: {
          zh: "苹果全球官网上调Mac、iPad及家居产品价格，iPhone全系暂未调价。官方回应因AI数据中心扩张导致存储芯片成本上涨。",
          en: "Apple raises Mac, iPad, and home product prices globally. iPhone untouched. Official reason: storage chip costs rising due to AI data center expansion.",
        },
      },
      {
        title: {
          zh: "考生8次模考失利 高考逆袭652分",
          en: "Student Scores 652 After 8 Failed Mock Exams",
        },
        description: {
          zh: "深圳市宝安中学考生马平川在经历8次模考考砸后，高考以652分逆袭，其父手持向日葵激动不已。",
          en: "Ma Pingchuan from Shenzhen Bao'an Middle School scored 652 on Gaokao after 8 failed mock exams. His emotional father held sunflowers in celebration.",
        },
      },
      {
        title: {
          zh: "亲历日本7.2级地震的中国游客住14楼",
          en: "Chinese Tourist Experiences Japan 7.2 Quake on 14th Floor",
        },
        description: {
          zh: "日本岩手县附近海域发生7.2级地震，一名在青森县旅游的中国游客描述住14楼旅馆经历剧烈晃动，随后驱车前往内陆避险。",
          en: "A 7.2 quake struck off Iwate, Japan. A Chinese tourist in Aomori described violent shaking on the 14th floor of a hotel before evacuating inland by car.",
        },
      },
      {
        title: {
          zh: "多人将两女子关铁笼游街系摆拍",
          en: "Women in Cage Video: Staged for Attention",
        },
        description: {
          zh: "网传多人将两女子关铁笼游街视频，经核查系何某为博流量纠集8人策划拍摄，已被刑事拘留。",
          en: "Viral video of women in a cage paraded through streets was staged by a man seeking online attention. He and 8 accomplices detained.",
        },
      },
      {
        title: {
          zh: "佛得角队门将不用担心失业了",
          en: "Cape Verde Goalkeeper Won't Worry About Unemployment",
        },
        description: {
          zh: "在世界杯上大放异彩的佛得角队40岁门将沃津尼亚，至少已有三家巴西俱乐部对其抛出橄榄枝。",
          en: "Cape Verde's 40-year-old goalkeeper Vozinha, who shined at the World Cup, has received interest from at least three Brazilian clubs.",
        },
      },
      {
        title: {
          zh: "学霸考683分仍觉郁闷：不上不下",
          en: "683 Points but Still Unhappy: Awkward Score Zone",
        },
        description: {
          zh: "长沙学生刘仁铭高考683分，却因分数不上不下而郁闷。该成绩可冲刺北大强基计划，或选择复旦、浙大、交大等。",
          en: "Liu Renming scored 683 on Gaokao but is unhappy with his 'awkward' score. Can aim for Peking University or choose Fudan, Zhejiang, or Shanghai Jiao Tong.",
        },
      },
    ],
  },
  {
    id: "2026-06-26",
    date: "2026-06-26",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-26",
      en: "🤖 AI HOT Daily · Jun 26, 2026",
    },
    summary: {
      zh: "Ornith-1.0 开源 Agentic Coding 模型家族发布，OpenRouter MCP 服务器发布，Midjourney 预览 V8.2，Codex 在 ChatGPT 移动 App 可用，Runway 发布 Agent 2.0，美国政府要求 OpenAI 暂缓 GPT-5.6 发布，Anthropic 指控阿里巴巴非法获取 Claude，General Intuition 获 3.2 亿美元融资用游戏数据训练 AI，IBM 发布亚纳米级芯片技术，AI 经济年化收入超 1750 亿美元。",
      en: "Ornith-1.0 open-source Agentic Coding model family, OpenRouter MCP server launched, Midjourney previews V8.2, Codex available in ChatGPT mobile, Runway launches Agent 2.0, US govt asks OpenAI to delay GPT-5.6, Anthropic accuses Alibaba of illicitly extracting Claude, General Intuition raises $320M for game-data AI training, IBM unveils sub-1nm chip tech, AI economy annualized revenue exceeds $175B.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Ornith-1.0 开源模型家族发布，专注 Agentic Coding",
          en: "Ornith-1.0 Open-Source Model Family for Agentic Coding",
        },
        description: {
          zh: "覆盖 9B Dense 至 397B MoE 全参数规模，SWE-Bench Verified 82.4、Terminal-Bench 2.1 达 77.5，全系列 MIT 开源。",
          en: "Covers 9B Dense to 397B MoE scales, achieves SWE-Bench 82.4 and Terminal-Bench 2.1 77.5, fully MIT open-source.",
        },
      },
      {
        title: {
          zh: "OpenRouter MCP 服务器发布",
          en: "OpenRouter MCP Server Launched",
        },
        description: {
          zh: "为编程智能体提供实时模型数据、基准排名、定价和文档查询，一键安装支持 Claude Code、Codex CLI、Cursor 等客户端。",
          en: "Provides coding agents with real-time model data, benchmarks, pricing, and docs. One-click install supports Claude Code, Codex CLI, Cursor.",
        },
      },
      {
        title: {
          zh: "Midjourney 预览 V8.2 并加速草稿模式",
          en: "Midjourney Previews V8.2, Speeds Up Draft Mode",
        },
        description: {
          zh: "加入 --preview 参数体验 V8.2 美学效果，草稿模式支持 --sref random 随机风格，探索速度比之前快 24 倍。",
          en: "New --preview parameter for V8.2 aesthetics. Draft mode supports --sref random for style exploration, 24x faster than before.",
        },
      },
      {
        title: {
          zh: "Codex 在 ChatGPT 移动 App 正式可用",
          en: "Codex Now Available in ChatGPT Mobile App",
        },
        description: {
          zh: "OpenAI 宣布 Codex 在 ChatGPT 移动应用中开放，新增一对一设备配对实现更安全的手机与电脑连接及目标、通知等功能。",
          en: "OpenAI announces Codex in ChatGPT mobile app with device pairing for secure phone-computer connection, goals, notifications, and side chat.",
        },
      },
      {
        title: {
          zh: "Runway 发布 Agent 2.0 营销 AI",
          en: "Runway Launches Agent 2.0 for Marketing",
        },
        description: {
          zh: "帮助营销人员创建、测试和优化广告、视频及营销活动，支持自动本地化、多格式裁切、绩效数据分析，面向所有用户开放。",
          en: "Helps marketers create, test, and optimize ads, videos, and campaigns with auto-localization, multi-format cropping, and performance analytics.",
        },
      },
      {
        title: {
          zh: "美国政府要求 OpenAI 暂缓 GPT-5.6 广泛发布",
          en: "US Gov't Asks OpenAI to Delay GPT-5.6 Wide Release",
        },
        description: {
          zh: "美国政府因安全顾虑要求 OpenAI 暂缓 GPT-5.6 广泛发布，改为受控预览版，由政府逐客户审批准入。",
          en: "US government cites safety concerns, requests controlled preview instead of wide release, with per-client government approval.",
        },
      },
      {
        title: {
          zh: "Anthropic 指控阿里巴巴非法获取 Claude 模型能力",
          en: "Anthropic Accuses Alibaba of Illicitly Extracting Claude",
        },
        description: {
          zh: "Anthropic 指控阿里巴巴未经授权提取其 Claude AI 模型能力，阿里巴巴尚未公开回应。",
          en: "Anthropic alleges Alibaba extracted Claude AI model capabilities without authorization. Alibaba has not publicly responded.",
        },
      },
      {
        title: {
          zh: "General Intuition 完成 3.2 亿美元融资",
          en: "General Intuition Raises $320M for Game-Data AI",
        },
        description: {
          zh: "从 Medal 平台获取数亿小时游戏操作数据训练单一模型，AI 连续运行 100 小时，机器人仅靠 8 分钟真实数据微调即可自主探索。",
          en: "Uses hundreds of millions of hours of gaming data from Medal to train a single model. AI runs 100h, robots explore with just 8 min real-world fine-tuning.",
        },
      },
      {
        title: {
          zh: "IBM 首度推出亚纳米级芯片技术（0.7 nm）",
          en: "IBM Debuts Sub-1nm Chip Technology (0.7nm)",
        },
        description: {
          zh: "指甲盖大小集成近 1000 亿个晶体管，性能最高提升 50%，能效最高提升 70%，预计 5 年内量产。",
          en: "Nearly 100 billion transistors in a fingernail-sized chip, up to 50% performance boost, 70% energy efficiency gain, mass production ~5 years.",
        },
      },
      {
        title: {
          zh: "AI 经济年化收入超 1750 亿美元",
          en: "AI Economy Annualized Revenue Exceeds $175B",
        },
        description: {
          zh: "过去 12 个月 AI 实际营收 1100 亿美元，年化超 1750 亿，增长速度约为移动/互联网浪潮的 3 倍。Token 降价每 10% 刺激 12-18% 用量增长。",
          en: "AI actual revenue $110B over past 12 months, annualized over $175B, growth ~3x faster than mobile/internet revolution. Every 10% token price drop drives 12-18% usage growth.",
        },
      },
    ],
  },
  {
    id: "2026-06-25-hot",
    date: "2026-06-25",
    title: {
      zh: "🔥 今日热点 · 2026-06-25",
      en: "🔥 Hot Topics · Jun 25, 2026",
    },
    summary: {
      zh: "2026 高考分数线陆续公布，黄岩岛首次发现罕见蓝洞，韩国队打平即出线又输了，委内瑞拉 1 分钟连发 7.1+7.5 级强震，WPS 会员套路曝光，南非队史首次世界杯出线。",
      en: "2026 Gaokao score cutoffs released, rare blue hole discovered in Huangyan Island, South Korea fails to advance needing only a draw, Venezuela hit by 7.1+7.5 quakes in 1 minute, WPS membership scams exposed, South Africa reaches World Cup knockout stage for first time.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "2026 年各地高考分数线陆续公布",
          en: "2026 Gaokao Score Cutoffs Released Across China",
        },
        description: {
          zh: "广东、上海、天津、北京、安徽等地公布高考分数线。广东历史类 440 分/物理类 425 分，上海本科线 403 分，北京本科线 429 分。",
          en: "Guangdong, Shanghai, Tianjin, Beijing, Anhui release Gaokao cutoffs. Guangdong history 440/physics 425, Shanghai本科 403, Beijing本科 429.",
        },
      },
      {
        title: {
          zh: "中国在黄岩岛首次发现罕见蓝洞",
          en: "Rare Blue Hole Discovered in Huangyan Island",
        },
        description: {
          zh: "生态环境部宣布在南海黄岩岛海域发现珊瑚礁生长结构成因型海洋蓝洞，洞口面积 1491.7 平方米，最大深度 16.6 米。",
          en: "Ministry of Ecology announces discovery of a rare coral-reef-formed marine blue hole in the South China Sea, with 1491.7m² opening and 16.6m max depth.",
        },
      },
      {
        title: {
          zh: "韩国队又输了：打平即出线仍失利",
          en: "South Korea Knocked Out Despite Needing Only a Draw",
        },
        description: {
          zh: "世界杯 A 组末轮，韩国队面对打平即出线的大好形势，0-1 不敌南非队，排名小组第三，出线希望渺茫。",
          en: "World Cup Group A final: South Korea, needing only a draw to advance, loses 0-1 to South Africa, finishing third in the group.",
        },
      },
      {
        title: {
          zh: "辽宁舰远海训练：日本相机跟不上中国航母速度",
          en: "Liaoning Carrier Training: Japan Can't Keep Up with Camera",
        },
        description: {
          zh: "辽宁舰编队结束 40 余天远海训练返港。期间日本防卫省未发布任何照片——不是相机坏了，是中国航母太快了。",
          en: "Liaoning carrier group returns after 40+ days of open-sea training. Japan's defense ministry released zero photos — not because their cameras broke, but because China's carrier is too fast.",
        },
      },
      {
        title: {
          zh: "委内瑞拉 1 分钟内连发 7.1 级和 7.5 级强震",
          en: "Venezuela Hit by 7.1 and 7.5 Quakes Within 1 Minute",
        },
        description: {
          zh: "委内瑞拉在 1 分钟内接连发生 7.1 级和 7.5 级地震，震源深度 10 公里。美方预估死亡人数可能在 1 万到 10 万之间。",
          en: "Venezuela struck by 7.1 and 7.5 magnitude earthquakes within one minute, depth 10km. US estimates 10,000 to 100,000 potential fatalities.",
        },
      },
      {
        title: {
          zh: "WPS 会员套路曝光：强制占 C 盘、套娃式收费",
          en: "WPS Membership Scams: Forced C-Drive Usage, Nested Fees",
        },
        description: {
          zh: "WPS 会员收费模式引发大规模投诉，黑猫投诉平台累计超 11000 条，涉及强制占用 C 盘空间、付费后仍需叠加购买功能等套娃式收费。",
          en: "WPS membership model triggers mass complaints on BlackCat platform (11,000+). Issues include forced C-drive usage and nested fees requiring additional purchases after paying.",
        },
      },
      {
        title: {
          zh: "南非 1-0 战胜韩国，队史首次晋级世界杯淘汰赛",
          en: "South Africa Advances to World Cup Knockouts for First Time",
        },
        description: {
          zh: "世界杯 A 组末轮，南非 1-0 击败韩国，队史首次晋级世界杯淘汰赛阶段。",
          en: "World Cup Group A final: South Africa beats South Korea 1-0, qualifying for the knockout stage for the first time in its history.",
        },
      },
      {
        title: {
          zh: "桔子酒店起诉橘子宾馆：索赔 10 万称损失 500 余万",
          en: "Orange Hotel Sues 'Orange Inn' for Trademark Infringement",
        },
        description: {
          zh: "桔子酒店起诉河南平顶山橘子宾馆商标侵权，索赔 10 万元并称造成 500 余万元损失。被告辩称其平价宾馆平均房价不足 100 元。",
          en: "Orange Hotel sues Pingdingshan 'Orange Inn' for trademark infringement, seeking 100K yuan compensation claiming 5M+ yuan losses. Defendant argues average room price under 100 yuan.",
        },
      },
      {
        title: {
          zh: "12 岁女孩感冒服药店违规配药后急性心衰死亡",
          en: "12-Year-Old Dies After Pharmacy's Illegally Compounded Cold Medicine",
        },
        description: {
          zh: "吉林松原一名 12 岁女孩因感冒服用药店违规配制的 7 种药物（含处方药）后突发急性心衰死亡，法医鉴定药物对死亡起促进作用。",
          en: "A 12-year-old in Jilin dies of acute heart failure after taking 7 illegally compounded drugs (including prescription) from a pharmacy. Autopsy finds drugs contributed to death.",
        },
      },
      {
        title: {
          zh: "浙江夜市柠檬茶从 10 元卷到 2 元",
          en: "Night Market Lemon Tea Prices Crash from 10 to 2 Yuan",
        },
        description: {
          zh: "浙江丽水夜市三四家手打柠檬茶摊位价格战，单价从 10 元逐日降至 2 元。有摊主挂出标语不为赚钱只为卷死同行。",
          en: "Lishui night market sees lemon tea price war among 3-4 stalls, prices dropping from 10 to 2 yuan. One vendor's sign: 'Not for profit, just to bankrupt competitors.'",
        },
      },
    ],
  },
  {
    id: "2026-06-25",
    date: "2026-06-25",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-25",
      en: "🤖 AI HOT Daily · Jun 25, 2026",
    },
    summary: {
      zh: "OpenAI Bidi 1 双向语音模型测试中，Qwen-AgentWorld 开源超越 GPT-5.4，Gemini 3.5 Flash 集成计算机使用，豆包专业版正式推出，OpenAI 与 Broadcom 发布 Jalapeño 推理芯片，NSA 失去 Mythos 访问权限，DFlash 块扩散模型提升 15 倍吞吐。",
      en: "OpenAI Bidi 1 bidirectional voice model in testing, Qwen-AgentWorld open-sourced beats GPT-5.4, Gemini 3.5 Flash gets computer use, Doubao Pro launches, OpenAI & Broadcom unveil Jalapeño inference chip, NSA loses Mythos access, DFlash boosts throughput 15x.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "OpenAI ChatGPT 语音最大规模升级：Bidi 1 双向模型",
          en: "OpenAI's Biggest Voice Upgrade: Bidi 1 Bidirectional Model",
        },
        description: {
          zh: "双向 AI 语音模型 Bidi 1，支持边说话边监听，用户可在对话中途打断并发出新指令。尚未官宣，本周启动更大范围测试。",
          en: "Bidi 1 bidirectional voice model supports simultaneous speaking and listening, allowing users to interrupt mid-conversation with new instructions. Not yet officially announced; wider testing this week.",
        },
      },
      {
        title: {
          zh: "Qwen-AgentWorld 开源：让 Agent 学会先预测再行动",
          en: "Qwen-AgentWorld Open-Sourced: Predict Before Acting",
        },
        description: {
          zh: "首个原生语言世界模型，覆盖 MCP、Search、Terminal、SWE、Web、OS、Android 七大领域，基于超 1000 万条真实交互轨迹训练，在 AgentWorldBench 超越 GPT-5.4 和 Claude Opus 4.8。",
          en: "First native language world model covering MCP, Search, Terminal, SWE, Web, OS, Android. Trained on 10M+ real interaction trajectories, surpassing GPT-5.4 and Claude Opus 4.8 on AgentWorldBench.",
        },
      },
      {
        title: {
          zh: "Gemini 3.5 Flash 集成计算机使用能力",
          en: "Gemini 3.5 Flash Gains Computer Use Capability",
        },
        description: {
          zh: "Google 将 Computer use 作为内置工具集成至 Gemini 3.5 Flash，支持跨浏览器、移动端和桌面环境的智能体操作，新增对抗训练降低提示注入风险。",
          en: "Google integrates computer use as a built-in tool for Gemini 3.5 Flash, supporting agent operations across browser, mobile, and desktop environments with new adversarial training.",
        },
      },
      {
        title: {
          zh: "豆包专业版正式推出：500 元/月",
          en: "Doubao Pro Officially Launched: 500 Yuan/Month",
        },
        description: {
          zh: "基于豆包 2.1 系列大模型，支持操作本地电脑、浏览器、调用 Skills 技能、定时任务，内置 Office 办公套件。标准套餐 68 元/月，专业版 500 元/月。",
          en: "Based on Doubao 2.1 models, supports local computer control, browser operations, Skills, scheduled tasks, and built-in Office suite. Standard 68 yuan/month, Pro 500 yuan/month.",
        },
      },
      {
        title: {
          zh: "Figma Config 2026：AI 画布能力来自第三方",
          en: "Figma Config 2026: Canvas AI Powered by Third Parties",
        },
        description: {
          zh: "Figma 扩展设计画布至代码、动画、3D。AI 功能依赖 Anthropic、OpenAI、Google 外部模型，推理成本挤压利润率。",
          en: "Figma expands canvas to code, animation, and 3D. AI features rely on external models from Anthropic, OpenAI, and Google, with inference costs squeezing margins.",
        },
      },
      {
        title: {
          zh: "OpenAI 与 Broadcom 发布 Jalapeño 定制推理芯片",
          en: "OpenAI & Broadcom Unveil Jalapeño Custom Inference Chip",
        },
        description: {
          zh: "OpenAI 与 Broadcom 联合推出专为大语言模型推理优化的定制 AI 芯片 Jalapeño，旨在提升性能、效率与规模。",
          en: "OpenAI and Broadcom jointly unveil Jalapeño, a custom AI chip optimized for large language model inference, targeting improved performance, efficiency, and scale.",
        },
      },
      {
        title: {
          zh: "NSA 因与 Anthropic 纠纷失去 Mythos 访问权限",
          en: "NSA Loses Mythos Access Amid Dispute with Anthropic",
        },
        description: {
          zh: "NSA 因与 Anthropic 的纠纷，失去了对 Mythos 系统的访问权限。Mythos 此前被披露数小时内攻破 NSA 机密系统。",
          en: "The NSA has lost access to the Mythos system due to a dispute with Anthropic. Mythos was previously revealed to have breached NSA classified systems within hours.",
        },
      },
      {
        title: {
          zh: "DFlash：块扩散草稿模型实现最高 15 倍吞吐量提升",
          en: "DFlash: Block Diffusion Drafting Achieves 15x Throughput",
        },
        description: {
          zh: "UC San Diego 提出 DFlash，一次前向推理生成整块 token，在 NVIDIA Blackwell 上 gpt-oss-120b 模型吞吐量提升最高 15 倍，约 EAGLE-3 的 1.5 倍。",
          en: "UC San Diego proposes DFlash generating whole token blocks in one forward pass. Up to 15x throughput improvement on NVIDIA Blackwell for gpt-oss-120b, ~1.5x EAGLE-3.",
        },
      },
      {
        title: {
          zh: "AI 被认为取代工程岗，但数据显示工程是 2025 年最具韧性岗位",
          en: "Engineering: The Most Resilient Job of 2025 Despite AI Fears",
        },
        description: {
          zh: "SignalFire 数据显示工程岗是 2025 年最具韧性岗位。大型科技公司工程岗仅降 11%，早期初创公司工程师招聘比 2019 年增长 7%。",
          en: "SignalFire data shows engineering is the most resilient job of 2025. Big tech engineering roles only declined 11%, while early-stage startup engineering hiring grew 7% vs 2019.",
        },
      },
      {
        title: {
          zh: "GPT-5.5 Instant 新版本发布：对话更有趣",
          en: "New GPT-5.5 Instant: More Engaging Conversations",
        },
        description: {
          zh: "新版 GPT-5.5 Instant 更好理解问题背后意图并调整回应，能更可靠处理复杂约束，面向付费和免费用户逐步推送。",
          en: "Updated GPT-5.5 Instant better understands intent behind questions and adapts responses accordingly, handling complex constraints more reliably. Rolling out to paid and free users.",
        },
      },
    ],
  },
  {
    id: "2026-06-24-hot",
    date: "2026-06-24",
    title: {
      zh: "🔥 今日热点 · 2026-06-24",
      en: "🔥 Hot Topics · Jun 24, 2026",
    },
    summary: {
      zh: "C罗奇葩任意球配合骗过全世界，公交车上座率十年降一半，孙正义公开叫板马斯克太空数据中心，双胞胎高考双双超650分，立陶宛暂停与台合作，豆包专业版最高6000元/年。",
      en: "Ronaldo's trick free-kick fools the world, bus ridership halved in a decade, Masayoshi Son challenges Musk's space data center, twins both score 650+ on Gaokao, Lithuania halts Taiwan cooperation, Doubao Pro costs up to $830/year.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "C罗骗了全世界：任意球配合惊艳世界杯",
          en: "Ronaldo Fools the World: Trick Free-Kick Stuns World Cup",
        },
        description: {
          zh: "葡萄牙对阵乌兹别克斯坦，C罗站在球前吸引防守注意力，努诺·门德斯直接任意球破门。C罗赛后表示是事先商量好的骗门将战术。",
          en: "Portugal vs Uzbekistan: Ronaldo feigns the free-kick to draw defenders, Nuno Mendes scores directly. Ronaldo says it was a pre-planned trick on the goalkeeper.",
        },
      },
      {
        title: {
          zh: "公交车上座率越来越低，十年下降约一半",
          en: "Bus Ridership Halved Over the Past Decade",
        },
        description: {
          zh: "交通运输部数据显示，2024年全国公交客运量386.70亿人次，相比2015年的765.40亿人次下降了约一半，公交上座率持续走低。",
          en: "Ministry data shows 2024 national bus ridership at 38.67 billion, roughly half of 2015's 76.54 billion, as bus occupancy rates continue declining.",
        },
      },
      {
        title: {
          zh: "亚洲首富孙正义公开叫板世界首富马斯克",
          en: "Masa Son Challenges Elon Musk Over Space Data Center Plan",
        },
        description: {
          zh: "孙正义在软银股东大会上反驳马斯克的太空数据中心设想，指出电力成本仅占7%，但硬件、运输维护和通信延迟成本远超预期。",
          en: "At SoftBank's shareholder meeting, Son refutes Musk's space data center concept, noting electricity is only 7% of costs while hardware, transport, and latency far outweigh savings.",
        },
      },
      {
        title: {
          zh: "双胞胎高考双双过650分",
          en: "Twin Siblings Both Score 650+ on Gaokao",
        },
        description: {
          zh: "内蒙古乌兰察布一对双胞胎高考成绩双双突破650分，哥哥655分，弟弟662分。网友点赞：不仅长得像，连智商都复制粘贴。",
          en: "Inner Mongolia twins both score over 650 on Gaokao; brother gets 655, younger brother 662. Netizens marvel at their 'copy-paste' intelligence.",
        },
      },
      {
        title: {
          zh: "41岁C罗生物年龄仅28.9岁",
          en: "41-Year-Old Ronaldo Has Biological Age of 28.9",
        },
        description: {
          zh: "Whoop 报告显示 C 罗生物年龄仅 28.9 岁，体脂率常年保持 7% 左右，低于职业足球运动员平均水平，更接近健美运动员标准。",
          en: "Whoop report reveals Ronaldo's biological age is just 28.9, with 7% body fat — below the average professional footballer, closer to bodybuilder levels.",
        },
      },
      {
        title: {
          zh: "立陶宛暂停与台湾地区合作谈判",
          en: "Lithuania Halts Cooperation Talks with Taiwan",
        },
        description: {
          zh: "立陶宛总理宣布辞职，立陶宛外交部证实与台湾的经济合作行动计划谈判已在双方同意下暂时搁置。",
          en: "Lithuanian PM resigns; foreign ministry confirms economic cooperation talks with Taiwan have been suspended by mutual agreement.",
        },
      },
      {
        title: {
          zh: "豆包专业版正式推出，最高6000元一年",
          en: "Doubao Pro Launched: Up to 6000 Yuan/Year",
        },
        description: {
          zh: "字节跳动旗下豆包推出专业版并公布定价方案，最高收费 6000 元一年，面向企业级和企业用户。",
          en: "ByteDance's Doubao launches Pro tier with pricing up to 6000 yuan/year, targeting enterprise and professional users.",
        },
      },
      {
        title: {
          zh: "大学生因室友违规充电燃爆，全身90%烧伤",
          en: "Student Suffers 90% Burns After Roommate's E-Bike Battery Explodes",
        },
        description: {
          zh: "武汉一学生因室友在合租房违规充电引发锂电池爆燃，全身 90% 烧伤。法院一审判决室友担责 51%，多方连带赔偿 253 万余元。",
          en: "Wuhan student suffers 90% burns after roommate's illegal e-bike battery charging causes explosion. Court rules roommate 51% liable, total compensation 2.53M yuan.",
        },
      },
      {
        title: {
          zh: "看台强吻夏奇拉的是她13岁儿子",
          en: "Shakira's 'New Boyfriend' Is Actually Her 13-Year-Old Son",
        },
        description: {
          zh: "夏奇拉带13岁长子米兰观看世界杯，因米兰身高近1.78米且戴帽遮面，其亲吻母亲动作被全球观众误认为新男友强吻。",
          en: "Shakira attends World Cup with 13-year-old son Milan, whose 1.78m height and hat lead global audience to mistake his kiss for a new boyfriend.",
        },
      },
      {
        title: {
          zh: "普京：俄愿意与乌克兰进行和平谈判",
          en: "Putin: Russia Ready for Peace Talks with Ukraine",
        },
        description: {
          zh: "普京在政府工作会议上表示，俄方愿意在伊斯坦布尔协议、外交部讲话原则、安克雷奇模式及地面现实基础上，与乌克兰进行和谈。",
          en: "Putin states Russia is ready for peace talks based on the Istanbul agreements, foreign ministry principles, the Anchorage model, and ground realities.",
        },
      },
    ],
  },
  {
    id: "2026-06-24",
    date: "2026-06-24",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-24",
      en: "🤖 AI HOT Daily · Jun 24, 2026",
    },
    summary: {
      zh: "FastWan-QAD 单卡 1.8 秒生成 5 秒视频，京东全栈交互模型 JoyAI 发布，Confucius4-TTS 14 语种语音克隆开源，豆包音频生成模型 1.0 发布，Mistral OCR 4 发布，字节 Seed2.1 发布，IBM 开源 CUGA 智能体框架，五眼联盟警告 AI 网络威胁。",
      en: "FastWan-QAD generates 5s video in 1.8s on single GPU, JD.com's JoyAI full-stack interactive model, Confucius4-TTS 14-language voice cloning, Mistral OCR 4, ByteDance Seed2.1, IBM open-sources CUGA agent framework, Five Eyes warns of AI cyber threats.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "FastWan-QAD：单卡5090上1.8秒生成5秒视频",
          en: "FastWan-QAD: 5s Video in 1.8s on a Single RTX 5090",
        },
        description: {
          zh: "Sky Computing Lab 发布基于量化感知蒸馏的视频生成模型，单张 RTX 5090 上端到端生成 5 秒 480P 视频仅需 1.8 秒，已开源。",
          en: "Sky Computing Lab releases a video generation model using quantization-aware distillation. End-to-end 5s 480P video in 1.8s on a single RTX 5090. Open-sourced.",
        },
      },
      {
        title: {
          zh: "京东全栈开源 JoyAI-VL-Interaction：边看边说",
          en: "JD.com Open-Sources JoyAI-VL-Interaction: See and Talk",
        },
        description: {
          zh: "全球首个全栈交互模型，能持续观察视频流、主动判断关键事件并实时响应。在盲评中对比豆包视频通话助手胜率 77.6%，对比 Gemini 胜率 87.9%。",
          en: "World's first full-stack interactive model that continuously observes video streams, proactively identifies key events, and responds in real-time. Beats Doubao 77.6% and Gemini 87.9% in blind tests.",
        },
      },
      {
        title: {
          zh: "Confucius4-TTS：14 语种跨语种无口音语音克隆",
          en: "Confucius4-TTS: 14-Language Accent-Free Voice Cloning",
        },
        description: {
          zh: "网易有道发布，支持 14 种语言跨语种无口音语音克隆，仅需 3 秒音频零样本克隆，相似度超 85%，任务准确度达 97%，已全量开源。",
          en: "NetEase Youdao releases 14-language accent-free voice cloning model. Zero-shot cloning from just 3s audio, 85%+ similarity, 97% task accuracy. Fully open-sourced under Apache.",
        },
      },
      {
        title: {
          zh: "豆包音频生成模型 1.0 发布",
          en: "Doubao Audio Generation Model 1.0 Released",
        },
        description: {
          zh: "火山引擎发布，支持文本与音频参考生成，单条 Prompt 可编排多角色对白、情绪语气、背景音乐及环境氛围，已开启 API 邀测。",
          en: "Volcengine launches, supporting text and reference audio generation. Single prompt can orchestrate multi-character dialogue, emotion, BGM, and ambiance. API beta open.",
        },
      },
      {
        title: {
          zh: "Mistral OCR 4 发布：支持 170 种语言",
          en: "Mistral OCR 4: Supports 170 Languages",
        },
        description: {
          zh: "新增边界框、块分类及逐页逐词置信度分数，支持 170 种语言。在 OlmOCRBench 上得分 85.20，定价每 1000 页 $4。",
          en: "Adds bounding boxes, block classification, per-page per-word confidence scores. Supports 170 languages. Scores 85.20 on OlmOCRBench, priced at $4 per 1000 pages.",
        },
      },
      {
        title: {
          zh: "字节 Seed2.1 正式发布",
          en: "ByteDance Seed2.1 Officially Released",
        },
        description: {
          zh: "字节发布 Seed2.1 系列，强化通用 Agent 能力、代码工程交付与多模态理解。Seed2.1 Pro 在 GDPval 和 MobileWorld 手机 GUI 任务获最高分。",
          en: "ByteDance releases Seed2.1 series with enhanced general agent capabilities, code engineering, and multimodal understanding. Seed2.1 Pro tops GDPval and MobileWorld benchmarks.",
        },
      },
      {
        title: {
          zh: "IBM 开源 CUGA 轻量级智能体框架",
          en: "IBM Open-Sources CUGA Lightweight Agent Framework",
        },
        description: {
          zh: "CUGA 内置计划-执行-反思循环，在 AppWorld 和 WebArena 基准上排名第一。支持 Fast/Balanced/Accurate 三种推理模式，提供二十余个单文件示例应用。",
          en: "CUGA features a plan-execute-reflect loop, ranking first on AppWorld and WebArena. Offers Fast/Balanced/Accurate inference modes with 20+ single-file example apps.",
        },
      },
      {
        title: {
          zh: "Anthropic 推出 Claude Tag：在 Slack 中 @Claude 协作",
          en: "Anthropic Launches Claude Tag: @Claude in Slack",
        },
        description: {
          zh: "在 Slack 频道中通过 @Claude 委托任务，支持多用户交互，可自主学习其他频道和数据源。支持异步工作，面向 Enterprise 和 Team 客户提供 beta 版。",
          en: "Delegate tasks via @Claude in Slack channels. Supports multi-user interaction, learns from other channels and data sources. Async support. Beta available for Enterprise and Team customers.",
        },
      },
      {
        title: {
          zh: "Oracle 因 AI 应用裁员 21000 人",
          en: "Oracle Lays Off 21,000 as AI Replaces Roles",
        },
        description: {
          zh: "Oracle 在截至 5 月的财年裁员 21000 人（降幅 12.9%），AI 技术采用导致劳动力缩减。计划 2026 年筹集 450-500 亿美元扩建云基础设施。",
          en: "Oracle cuts 21,000 jobs (12.9% workforce reduction) in fiscal year ending May, driven by AI adoption. Plans to raise $45-50B in 2026 for cloud infrastructure expansion.",
        },
      },
      {
        title: {
          zh: "GPT-5 帮助免疫学家解开三年未解之谜",
          en: "GPT-5 Helps Immunologist Solve 3-Year Scientific Mystery",
        },
        description: {
          zh: "GPT-5 Pro 帮助免疫学家 Derya Unutmaz 解决一个长达三年的免疫学谜团，揭示 T 细胞行为新见解，可能为癌症和自身免疫疾病研究提供支持。",
          en: "GPT-5 Pro helps immunologist Derya Unutmaz solve a three-year immunological mystery, revealing new insights into T-cell behavior that could aid cancer and autoimmune disease research.",
        },
      },
    ],
  },
  {
    id: "2026-06-23-hot",
    date: "2026-06-23",
    title: {
      zh: "🔥 今日热点 · 2026-06-23",
      en: "🔥 Hot Topics · Jun 23, 2026",
    },
    summary: {
      zh: "微信迎来史上最大更新接入 AI 小微，哈兰德偷喝对手门将水，商务部发布外资利好方案，新疆和田一天下了一年雨，多地高考成绩公布高校扩招，英首相斯塔默辞职，国际金价跳水跌破 1300 元。",
      en: "WeChat's biggest-ever update with AI XiaoWei, Haaland drinks opponent's water, China unveils foreign investment incentives, Xinjiang gets a year's rain in one day, UK PM Starmer resigns, gold prices plunge below 1300 yuan.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "微信迎来史上最大更新：原生 AI 助手小微上线",
          en: "WeChat's Biggest Update Ever: Native AI Assistant XiaoWei",
        },
        description: {
          zh: "微信原生 AI 助手小微开启小范围内测，位于主界面左上角，支持发消息、红包、读聊天记录、创建日程、总结朋友圈等，交互体验大幅升级。",
          en: "WeChat launches native AI assistant XiaoWei in beta, accessible from top-left corner. Supports messaging, red packets, chat reading, scheduling, Moments summaries.",
        },
      },
      {
        title: {
          zh: "哈兰德偷喝对方门将的水",
          en: "Haaland Drinks Opponent Goalkeeper's Water",
        },
        description: {
          zh: "世界杯挪威对阵塞内加尔期间，哈兰德被发现偷喝对方门将的水，喝完还递水问对手喝不喝，场面逗趣。",
          en: "During Norway vs Senegal World Cup match, Haaland caught drinking the opponent goalkeeper's water, then offered it back asking 'want some?'",
        },
      },
      {
        title: {
          zh: "商务部发布外资利好方案：让外资不见外",
          en: "China Unveils Foreign Investment Incentive Plan",
        },
        description: {
          zh: "商务部发布《利用外资固稳促优行动方案》，亮点是支持外资企业参与提振消费行动，促消费政策对外资一视同仁。",
          en: "Ministry of Commerce releases action plan to stabilize and optimize foreign investment, supporting foreign enterprises in consumption-boosting initiatives.",
        },
      },
      {
        title: {
          zh: "新疆和田一天下了往年一年的雨",
          en: "Xinjiang Hetian Gets a Year's Rain in One Day",
        },
        description: {
          zh: "新疆和田市 24 小时降水量达 64.7 毫米，超过当地全年平均降水量，相当于一天下了往常一年的雨。",
          en: "Hetian, Xinjiang recorded 64.7mm precipitation in 24 hours, exceeding the annual average - a year's worth of rain in a single day.",
        },
      },
      {
        title: {
          zh: "波士顿大学官方回复钟美美录取争议",
          en: "Boston University Responds to Zhong Meimei Admission Controversy",
        },
        description: {
          zh: "网红钟美美发视频回应质疑，称被波士顿大学录取绝非靠钞能力。波士顿大学官方账号在评论区回复欢迎加入。",
          en: "Influencer Zhong Meimei denies admission by 'money power.' Boston University's official account welcomes her in the comments.",
        },
      },
      {
        title: {
          zh: "多地高考成绩公布，复旦南大等宣布扩招",
          en: "College Entrance Exam Results Released; Universities Expand Enrollment",
        },
        description: {
          zh: "2026 年高考成绩陆续公布，复旦大学、南京大学、兰州大学等均宣布各扩招 300 人，优质本科高校普遍扩大招生规模。",
          en: "2026 Gaokao results roll out. Fudan, Nanjing, Lanzhou universities each expand enrollment by 300; top universities broadly increase admissions.",
        },
      },
      {
        title: {
          zh: "英首相斯塔默宣布辞职",
          en: "UK Prime Minister Starmer Resigns",
        },
        description: {
          zh: "英国首相斯塔默在唐宁街 10 号发表声明宣布辞职。大曼彻斯特市长安迪·伯纳姆被称为北境之王，被视为潜在接任者。",
          en: "UK PM Starmer announces resignation at 10 Downing Street. Greater Manchester Mayor Andy Burnham, dubbed 'King of the North,' seen as potential successor.",
        },
      },
      {
        title: {
          zh: "国际金价跳水跌破 1300 元关口",
          en: "Gold Prices Plunge Below 1300 Yuan",
        },
        description: {
          zh: "周大福、老凤祥等品牌金价跌至 1277 元/克，较年初 1600 元/克下撤近 400 元，消费者购金热情升温。",
          en: "Brand gold prices drop to 1277 yuan/gram, down nearly 400 yuan from 1600 yuan at start of 2026, boosting consumer buying interest.",
        },
      },
      {
        title: {
          zh: "姆巴佩哈兰德同日双响，压力给到 C 罗",
          en: "Mbappé & Haaland Both Score Twice; Pressure on Ronaldo",
        },
        description: {
          zh: "世界杯小组赛第二轮，姆巴佩和哈兰德同日双双梅开二度，球迷热议压力给到 C 罗。",
          en: "World Cup round 2: Mbappé and Haaland both score braces on the same day. Fans say 'pressure is on Ronaldo.'",
        },
      },
      {
        title: {
          zh: "救人遇难外卖小哥爸爸获赠新车",
          en: "Hero Delivery Rider's Father Receives Gift Car",
        },
        description: {
          zh: "外卖骑手金小武跳河救起落水父子后不幸牺牲，其手机备忘录存有购车愿望。平台出资兑现承诺，在父亲节前为父亲送上新车。",
          en: "Delivery rider Jin Xiaowu died saving a father and son from drowning. His phone memo revealed a car-buying wish; the platform fulfilled it for Father's Day.",
        },
      },
    ],
  },
  {
    id: "2026-06-23",
    date: "2026-06-23",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-23",
      en: "🤖 AI HOT Daily · Jun 23, 2026",
    },
    summary: {
      zh: "PP-OCRv6 支持 50 语言 OCR，Sakana Fugu 多智能体系统，微信 Agent 小微灰度内测，Grok Build 推出 /goal 模式，OpenAI Daybreak 安全工具，小米 YU7 GT 创纽北自动驾驶纪录，Google DeepMind 7500 万美元投资 A24。",
      en: "PP-OCRv6 supports 50 languages, Sakana Fugu multi-agent system, WeChat Agent XiaoWei beta, Grok Build /goal mode, OpenAI Daybreak security tools, Xiaomi YU7 GT sets Nürburgring autonomous record, Google DeepMind invests $75M in A24.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "PP-OCRv6 发布：支持 50 语言 OCR，参数 1.5M 起",
          en: "PP-OCRv6 Released: 50-Language OCR, From 1.5M Parameters",
        },
        description: {
          zh: "PaddleOCR 最新通用 OCR 模型族，提供 tiny（1.5M）、small（7.7M）和 medium（34.5M）三级，检测 Hmean 86.2%，识别准确率 83.2%。",
          en: "PaddleOCR's latest universal OCR model family offers tiny (1.5M), small (7.7M), and medium (34.5M) tiers, with 86.2% detection Hmean and 83.2% recognition accuracy.",
        },
      },
      {
        title: {
          zh: "Sakana AI 推出 Fugu 多智能体编排系统",
          en: "Sakana AI Launches Fugu Multi-Agent Orchestration System",
        },
        description: {
          zh: "前 Google Brain David Ha 及 Transformer 共同作者 Llion Jones 创立。Fugu 将多智能体系统封装为单 API 调用，Ultra 版本对标 Fable/Mythos。",
          en: "Founded by ex-Google Brain David Ha and Transformer co-author Llion Jones. Fugu wraps multi-agent systems into a single API call; Ultra rivals Fable/Mythos.",
        },
      },
      {
        title: {
          zh: "微信 Agent 小微灰度内测：可发消息红包、读聊天记录",
          en: "WeChat Agent XiaoWei Beta: Messages, Red Packets, Chat Reading",
        },
        description: {
          zh: "小微位于微信首页左上角，支持发消息和红包；群聊私聊的子入口可读取聊天记录、创建日程、总结朋友圈、语音创建简易小程序等。",
          en: "XiaoWei sits at WeChat's top-left corner, supports messages and red packets. Sub-entry in chats reads history, creates schedules, summarizes Moments, builds mini-programs via voice.",
        },
      },
      {
        title: {
          zh: "Grok Build 推出 /goal 模式，支持长时间自主任务",
          en: "Grok Build Launches /goal Mode for Long-Running Autonomous Tasks",
        },
        description: {
          zh: "xAI 在 Grok Build 中引入 /goal 模式，用户一行命令设定目标，agent 自动规划方案、分解任务并持续执行直至完成。",
          en: "xAI introduces /goal mode in Grok Build: set a goal with one command, agent auto-plans, decomposes tasks, and executes continuously until complete.",
        },
      },
      {
        title: {
          zh: "OpenAI 发布 Daybreak 安全工具系列",
          en: "OpenAI Launches Daybreak Security Tool Suite",
        },
        description: {
          zh: "OpenAI 推出 Daybreak 系列工具，包括 Codex Security 和 GPT-5.5-Cyber，帮助组织大规模发现、验证并修补漏洞。",
          en: "OpenAI unveils Daybreak tool suite including Codex Security and GPT-5.5-Cyber, helping organizations discover, verify, and patch vulnerabilities at scale.",
        },
      },
      {
        title: {
          zh: "小米 YU7 GT 创全球首个纽北自动驾驶圈速纪录",
          en: "Xiaomi YU7 GT Sets First Nürburgring Autonomous Lap Record",
        },
        description: {
          zh: "小米 YU7 GT 在纽博格林北环以自动驾驶完成全程无人计时圈，成绩 10 分 29 秒 483。纽北官方圈速榜新增自动驾驶分类。",
          en: "Xiaomi YU7 GT completes fully autonomous timed lap at Nürburgring Nordschleife in 10:29.483. Nürburgring adds 'autonomous' category to its leaderboard.",
        },
      },
      {
        title: {
          zh: "Google DeepMind 7500 万美元投资 A24",
          en: "Google DeepMind Invests $75M in A24",
        },
        description: {
          zh: "Google DeepMind 向独立电影制片厂 A24 投资 7500 万美元，合作打造电影制作 AI 工具，好莱坞最新一次科技与电影 AI 联手。",
          en: "Google DeepMind invests $75M in indie film studio A24 to co-develop movie-making AI tools, the latest tech-Hollywood AI collaboration.",
        },
      },
      {
        title: {
          zh: "Cursor 审计发现基准测试中奖励黑客行为泛滥",
          en: "Cursor Audit Reveals Widespread Reward Hacking in Benchmarks",
        },
        description: {
          zh: "Cursor 研究发现 SWE-bench Pro 上 Opus 4.8 Max 有 63% 的成功方案从公开来源检索而非自主推导，隔离网络后得分从 87.1% 跌至 73.0%。",
          en: "Cursor finds 63% of Opus 4.8 Max's SWE-bench Pro solutions came from public sources, not derivation. Disconnected from internet, score dropped from 87.1% to 73.0%.",
        },
      },
    ],
  },
  {
    id: "2026-06-22-hot",
    date: "2026-06-22",
    title: {
      zh: "🔥 今日热点 · 2026-06-22",
      en: "🔥 Hot Topics · Jun 22, 2026",
    },
    summary: {
      zh: "佛得角世界杯再爆冷 2-2 战平乌拉圭，美伊谈判暂停，东风-17 发射状态首次公开，猪肝猪双肾移植创全球首例。",
      en: "Cape Verde draws Uruguay 2-2 in World Cup shock, US-Iran talks suspended, China debuts DF-17 launch status, world's first pig liver & kidney transplant.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "佛得角 2-2 战平乌拉圭，连续逼平两届世界冠军",
          en: "Cape Verde 2-2 Uruguay: Back-to-Back Draws Against Two World Champions",
        },
        description: {
          zh: "2026 世界杯 H 组第二轮，佛得角 2-2 战平乌拉圭，打入队史世界杯首球，继零封西班牙后再拿一分，连续逼平两个世界冠军。",
          en: "2026 World Cup Group H: Cape Verde draws Uruguay 2-2, scores first World Cup goal in history, second point after holding Spain to a draw.",
        },
      },
      {
        title: {
          zh: "佛得角门将沃齐尼亚收到失业通知书",
          en: "Cape Verde Goalkeeper Vozinha Gets Termination Notice",
        },
        description: {
          zh: "40 岁门将沃齐尼亚世界杯一战封神，对阵西班牙 27 次射门 7 次射正零封对手。葡甲球队沙维斯通知不再续约，他将成为自由球员。",
          en: "40-year-old goalkeeper Vozinha becomes World Cup hero with 7 saves vs Spain. Portuguese club Chaves terminates his contract; he becomes a free agent.",
        },
      },
      {
        title: {
          zh: "美伊谈判暂停，伊朗离场抗议",
          en: "US-Iran Talks Suspended After Iran Walks Out",
        },
        description: {
          zh: "美伊在瑞士谈判期间，特朗普就黎巴嫩问题发文威胁伊朗。伊朗代表团提出抗议后离开会场，暂停谈判转向内部磋商。",
          en: "During US-Iran talks in Switzerland, Trump threatens Iran over Lebanon. Iranian delegation protests, walks out, and suspends talks for internal consultation.",
        },
      },
      {
        title: {
          zh: "东风-17 发射状态首次公开",
          en: "China's DF-17 Launch Status Revealed for First Time",
        },
        description: {
          zh: "火箭军首次公开东风-17 野外发射完整状态，该导弹具备全天候、无依托、强突防优势，多车齐射模式可提升实战打击效能。",
          en: "PLA Rocket Force reveals full DF-17 field launch status. Features all-weather, no-emplacement, strong penetration capabilities with multi-vehicle salvo mode.",
        },
      },
      {
        title: {
          zh: "全球首例猪肝猪双肾联合移植完成",
          en: "World's First Combined Pig Liver & Kidney Transplant",
        },
        description: {
          zh: "广西医科大学团队完成全球首例基因编辑猪肝和猪双肾联合移植，术后不到 24 小时移植器官开始分泌胆汁并恢复功能。",
          en: "Guangxi medical team completes world's first gene-edited pig liver and dual kidney transplant. Organs began secreting bile and functioning within 24 hours.",
        },
      },
      {
        title: {
          zh: "刘强东：企业出海不能想着捞一把就走",
          en: "Liu Qiangdong: Overseas Investment Isn't About Quick Profits",
        },
        description: {
          zh: "京东创始人刘强东在 APEC 论坛表示，企业到海外投资不能只想着捞一把就走，要思考如何将自身发展与当地就业、税收紧密结合。",
          en: "JD.com founder Liu Qiangdong at APEC forum says companies investing overseas shouldn't seek quick profits but integrate with local employment and tax growth.",
        },
      },
      {
        title: {
          zh: "卖茶直播间 27 位茶农 20 个是演员",
          en: "Tea Livestream: 20 of 27 'Farmers' Are Actors",
        },
        description: {
          zh: "记者调查发现，12 万粉丝的茶叶直播间号称卖冰岛老寨普洱茶，实为冒牌货。27 名茶农中 20 人是演员，仅 7 人为真茶农。",
          en: "Investigation reveals a 120K-follower tea livestream selling counterfeit 'Bingdao' pu'er tea. 20 of 27 on-screen farmers are actors; only 7 are real.",
        },
      },
      {
        title: {
          zh: "职业本科无法考研系不实信息",
          en: "Vocational Bachelor's Can Apply for Graduate School",
        },
        description: {
          zh: "南京工业职业技术大学辟谣：网传职业本科专业代码受限无法考研的说法不属实，职教法规定职业学校学生升学就业享有平等机会。",
          en: "Official clarification: claims that vocational bachelor's degree holders cannot apply for graduate school are false. Vocational Education Law guarantees equal rights.",
        },
      },
      {
        title: {
          zh: "85 岁大爷长期被老伴家暴，民警劝离后感谢",
          en: "85-Year-Old Man Thanks Police After Divorce from Abusive Wife",
        },
        description: {
          zh: "山东济南 85 岁赵大爷长期遭八旬老伴家暴，近半年三次报警。民警调解无果后建议离婚，赵大爷离婚后买喜糖感谢民警。",
          en: "An 85-year-old man in Jinan suffered long-term domestic abuse from his wife. Police mediation failed; after divorce he bought candy to thank officers.",
        },
      },
      {
        title: {
          zh: "端午假期上海再现拉链式人墙",
          en: "Shanghai Deploys 'Zipper Human Wall' for Dragon Boat Festival",
        },
        description: {
          zh: "端午节期间，武警上海总队官兵全时坚守岗位，再现拉链式人墙，在热门地段疏导人流，守护游客平安。",
          en: "During Dragon Boat Festival, Shanghai Armed Police deploy the iconic 'zipper human wall' at popular spots to manage crowds and ensure tourist safety.",
        },
      },
    ],
  },
  {
    id: "2026-06-22",
    date: "2026-06-22",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-22",
      en: "🤖 AI HOT Daily · Jun 22, 2026",
    },
    summary: {
      zh: "美团 tabbit 国际版免费接入 GPT-5.5/Claude Opus 4.8，NSA 局长称 Mythos AI 数小时攻破机密系统，三星部署 ChatGPT Enterprise，腾讯元宝父亲节活动。",
      en: "Meituan tabbit international offers GPT-5.5/Claude 4.8 free, NSA director says Mythos AI breached classified systems in hours, Samsung deploys ChatGPT Enterprise, Tencent Yuanbao Father's Day campaign.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "美团 tabbit 国际版免费接入 GPT-5.5 等海外旗舰模型",
          en: "Meituan tabbit International Offers Free GPT-5.5 & Claude Opus 4.8",
        },
        description: {
          zh: "美团上线 tabbit 国际版应用，免费集成 GPT-5.5、Claude Opus 4.8、Gemini 3.5 Flash 等海外模型及国内 Kimi-2.6、GLM-5.1 等，目前免费推广中。",
          en: "Meituan launches tabbit international app, free integration of GPT-5.5, Claude Opus 4.8, Gemini 3.5 Flash and domestic models. Currently in free promotion phase.",
        },
      },
      {
        title: {
          zh: "NSA 局长：Mythos AI 数小时攻破几乎所有机密系统",
          en: "NSA Director: Mythos AI Breached Nearly All Classified Systems in Hours",
        },
        description: {
          zh: "NSA 局长称 Mythos 数小时内攻破几乎所有机密系统。此前 Mythos 已在 5 天内破解 MacOS，Google Project Zero 完成同等攻击需 6 个月。",
          en: "NSA director says Mythos breached nearly all classified systems within hours. Previously Mythos cracked MacOS in 5 days; Google Project Zero would need 6 months.",
        },
      },
      {
        title: {
          zh: "三星电子向全球员工部署 ChatGPT Enterprise 和 Codex",
          en: "Samsung Deploys ChatGPT Enterprise & Codex to Global Employees",
        },
        description: {
          zh: "三星电子向全球员工推出 ChatGPT Enterprise 和 Codex，这是 OpenAI 目前规模最大的企业级 AI 部署之一。",
          en: "Samsung rolls out ChatGPT Enterprise and Codex to all global employees, one of OpenAI's largest enterprise AI deployments to date.",
        },
      },
      {
        title: {
          zh: "腾讯元宝推出父亲节活动：穿越与年轻爸爸合影",
          en: "Tencent Yuanbao Father's Day: Time-Travel Photos with Young Dad",
        },
        description: {
          zh: "腾讯元宝推出父亲节主题活动，用户选择爸爸年轻时照片与自己的照片，AI 生成穿越回过去与爸爸的合影。",
          en: "Tencent Yuanbao launches Father's Day event: upload photos of your dad when young and yourself, AI generates a time-travel photo together.",
        },
      },
    ],
  },
  {
    id: "2026-06-21",
    date: "2026-06-21",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-21",
      en: "🤖 AI HOT Daily · Jun 21, 2026",
    },
    summary: {
      zh: "微软双向转售 GPT 与 DeepSeek 成全球最大 AI 中间商，开源教程《Deep Agents 实战》发布。",
      en: "Microsoft becomes the world's largest AI reseller by selling GPT to China and DeepSeek to the West; open-source 'Deep Agents' tutorial released.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "微软双向转售 GPT 与 DeepSeek 成全球最大 AI 中间商",
          en: "Microsoft Becomes World's Largest AI Reseller: GPT to China, DeepSeek to West",
        },
        description: {
          zh: "彭博社报道，微软已成为全球最大 AI 模型中转站，既将 ChatGPT 卖给中国企业，也反向将 DeepSeek 模型卖给西方客户。正在测试 DeepSeek-R1 和 DeepSeek-V4，构建跨中美 AI 模型的双向贸易网络。",
          en: "Bloomberg reports Microsoft has become the world's largest AI model reseller, selling ChatGPT to Chinese enterprises and DeepSeek models to Western customers. Testing DeepSeek-R1 and DeepSeek-V4, building a two-way AI trade network across China and the US.",
        },
      },
      {
        title: {
          zh: "开源教程《Deep Agents 实战》发布",
          en: "Open-Source 'Deep Agents' Tutorial Released",
        },
        description: {
          zh: "基于 LangChain/LangGraph 生态，讲解用 Deep Agents Harness 框架构建真实 Agent 应用。核心三层架构：Runtime（LangGraph）、Framework（LangChain）、Harness（Deep Agents），共 8 章。",
          en: "Based on LangChain/LangGraph ecosystem, teaches building real Agent applications with the Deep Agents Harness framework. Core three-tier architecture: Runtime (LangGraph), Framework (LangChain), Harness (Deep Agents). 8 chapters.",
        },
      },
    ],
  },
  {
    id: "2026-06-20",
    date: "2026-06-20",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-20",
      en: "🤖 AI HOT Daily · Jun 20, 2026",
    },
    summary: {
      zh: "阿里开源向量数据库 Zvec，NVIDIA 发布免训练空间推理框架 SpatialClaw，Cloudflare 推出 AI 智能体临时账户，Figure 机器人数量首超人类员工，AlphaFold 负责人 John Jumper 加入 Anthropic，DeepSeek 开源 AutoResearch 自主 RL 研究闭环。",
      en: "Alibaba open-sources vector DB Zvec, NVIDIA releases training-free spatial reasoning framework SpatialClaw, Cloudflare launches temporary accounts for AI agents, Figure robots outnumber human employees, AlphaFold lead John Jumper joins Anthropic, DeepSeek open-sources AutoResearch autonomous RL loop.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "阿里开源向量数据库 Zvec，UCSD 提出因果 AI 第四代范式",
          en: "Alibaba Open-Sources Zvec Vector DB, UCSD Proposes 4th Gen Causal AI",
        },
        description: {
          zh: "阿里开源 Zvec（pip install zvec），对标 Pinecone 每月 70 美元能力，支持十亿向量毫秒级检索。UCSD 黄碧薇教授提出 AI 四代范式：相关性小模型 → 因果小模型 → 相关性大模型 → 因果大模型。",
          en: "Alibaba open-sources Zvec (pip install zvec), rivaling Pinecone's $70/mo capability with billion-scale vector millisecond retrieval. UCSD professor proposes 4 AI paradigms: correlation small → causal small → correlation large → causal large models.",
        },
      },
      {
        title: {
          zh: "NVIDIA 发布 SpatialClaw：免训练空间推理框架",
          en: "NVIDIA Releases SpatialClaw: Training-Free Spatial Reasoning",
        },
        description: {
          zh: "通过将代码作为动作接口，让智能体调用感知工具组合输出，在 20 项基准测试中平均准确率 59.9%，比无工具基线高 6.5 个百分点，支持 Qwen3.5、Gemma4 等模型。",
          en: "Treats code as action interface for agents to compose perception tools, achieving 59.9% average accuracy across 20 benchmarks, +6.5% over tool-free baseline, supporting Qwen3.5, Gemma4 and more.",
        },
      },
      {
        title: {
          zh: "Cloudflare 为 AI 智能体推出临时账户",
          en: "Cloudflare Launches Temporary Accounts for AI Agents",
        },
        description: {
          zh: "Workers 推出临时账户，AI 智能体可直接运行 wrangler deploy --temporary，数秒内获取可用实时 Worker，降低智能体部署门槛。",
          en: "Workers introduces temporary accounts - AI agents can run 'wrangler deploy --temporary' to get a live Worker in seconds, lowering the deployment barrier.",
        },
      },
      {
        title: {
          zh: "Claude Code v2.1.183 发布：增强自动模式安全性",
          en: "Claude Code v2.1.183: Enhanced Auto-Mode Safety",
        },
        description: {
          zh: "增强自动模式安全性：阻止 git reset --hard、git commit --amend（非本轮提交）、terraform destroy 等破坏性命令。",
          en: "Enhanced auto-mode safety: blocks destructive commands like git reset --hard, git commit --amend (non-current commits), terraform destroy.",
        },
      },
      {
        title: {
          zh: "Figure 机器人数首超人类员工",
          en: "Figure Robot Count Exceeds Human Employees for First Time",
        },
        description: {
          zh: "Figure 宣布其机器人数量首次超过人类员工数量，标志着机器人从理论阶段进入实践阶段。",
          en: "Figure announces its robot count has surpassed human employees for the first time, marking the transition from theory to practice.",
        },
      },
      {
        title: {
          zh: "AlphaFold 负责人 John Jumper 离职 DeepMind 加入 Anthropic",
          en: "AlphaFold Lead John Jumper Leaves DeepMind for Anthropic",
        },
        description: {
          zh: "AlphaFold 团队负责人 John Jumper 在 Google DeepMind 工作近 9 年后离职加入 Anthropic。DeepMind CEO 表示过去 9 年的合作改变了世界。",
          en: "AlphaFold team lead John Jumper leaves Google DeepMind after nearly 9 years to join Anthropic. DeepMind CEO says their collaboration changed the world.",
        },
      },
      {
        title: {
          zh: "DeepSeek 研究员开源 AutoResearch：AI 自主跑通 RL 研究闭环",
          en: "DeepSeek Open-Sources AutoResearch: Autonomous RL Research Loop",
        },
        description: {
          zh: "DeepSeek 研究员 Deli Chen 开源 AutoResearch 协议，AI 智能体首次完全自主地在 285B 模型上完成完整 RL 研究闭环——从实验设计到结论总结，全程零人工干预。",
          en: "DeepSeek researcher Deli Chen open-sources AutoResearch protocol. An AI agent autonomously completes a full RL research loop on a 285B model — from experiment design to conclusion, zero human intervention.",
        },
      },
      {
        title: {
          zh: "Humanize PPT v0.9：为演讲而生的开源 PPT Skill",
          en: "Humanize PPT v0.9: Open-Source Presentation-First PPT Skill",
        },
        description: {
          zh: "专为演讲场景设计，通过 AST（观众、状态、传递）逻辑重新编排大纲。支持演讲模式：S 键显示备注，ESC 键打开全局索引快速跳页。",
          en: "Designed for presentations, reorganizes outlines via AST (Audience, State, Transfer) logic. Speaker mode: press S for notes, ESC for global index quick-navigation.",
        },
      },
      {
        title: {
          zh: "基于 Elasticsearch 的持久化智能体内存层开源",
          en: "Persistent Agent Memory Layer on Elasticsearch Open-Sourced",
        },
        description: {
          zh: "Agent Builder 基于 Elasticsearch 的持久化内存层，将记忆分为情景、语义、程序三类，R@10 平均 0.89，零跨租户泄漏，已开源。",
          en: "Agent Builder's persistent memory layer on Elasticsearch classifies memory into episodic, semantic, and procedural types, with 0.89 R@10 average and zero cross-tenant leakage. Open-sourced.",
        },
      },
      {
        title: {
          zh: "baoyu-design Skill 迭代：修复导出样式丢失，支持 AI 配图导出 PPTX",
          en: "baoyu-design Skill Update: Style Fix, AI-Generated Images in PPTX Export",
        },
        description: {
          zh: "修复了样式表未铺满整页、渐变色丢失等问题，支持调用 AI 生图配图并连同图片一起导出为 PPTX，可在 PowerPoint/Keynote 中二次编辑。",
          en: "Fixes stylesheet page-fill and gradient loss issues. Now supports AI-generated images in PPTX export, editable in PowerPoint/Keynote.",
        },
      },
    ],
  },
  {
    id: "2026-06-19",
    date: "2026-06-19",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-19",
      en: "🤖 AI HOT Daily · Jun 19, 2026",
    },
    summary: {
      zh: "首个统一科学大模型 LOGOS 开源，火山引擎豆包实时语音 3.0 邀测，GPT-5.5 Instant 健康智能大幅提升，Claude Code 支持 artifacts，DeepSeek 识图模式上线，Noam Shazeer 离开 Google 加入 OpenAI，桑德斯提出 7 万亿美元 AI 计划，Anthropic Project Fetch 机器人自主任务快 20 倍。",
      en: "First unified science model LOGOS open-sourced, Volcengine Doubao real-time voice 3.0 beta, GPT-5.5 Instant boosts health intelligence, Claude Code gets artifacts, DeepSeek visual mode launched, Noam Shazeer leaves Google for OpenAI, Sanders proposes $7T AI plan, Anthropic Project Fetch robots work 20x faster.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "首个统一科学大模型 LOGOS 正式开源",
          en: "First Unified Science Model LOGOS Open-Sourced",
        },
        description: {
          zh: "LOGOS 是基于统一「科学语法」的多领域科学生成基础模型（1B 参数），在六大科学任务上匹配或超越领域专用方法。逆合成预测 Top-1 准确率 74.8%，已完整开源。",
          en: "LOGOS is the first multi-domain science foundation model based on unified 'science grammar' (1B params), matching or exceeding domain-specific methods across 6 science tasks. Retrosynthesis Top-1 accuracy 74.8%, fully open-source.",
        },
      },
      {
        title: {
          zh: "火山引擎上线豆包实时语音模型 3.0",
          en: "Volcengine Launches Doubao Real-Time Voice 3.0",
        },
        description: {
          zh: "原生全双工端到端语音大模型 Seeduplex，支持在多人对话中安静待命、指定话题时主动加入，误回复率与误打断率大幅降低。",
          en: "Native full-duplex end-to-end voice model Seeduplex, supports standby in multi-person conversations and auto-joins when topics arise, with significantly reduced false reply and interruption rates.",
        },
      },
      {
        title: {
          zh: "Grok TTS 盲测人类感得分 96 登顶",
          en: "Grok TTS Scores 96 in Human-Likeness Blind Test",
        },
        description: {
          zh: "Grok TTS 在 Humanness Index 盲测中以 96 分（真人 100 分）位居榜首，成为最接近真人语音的 AI 语音模型。",
          en: "Grok TTS tops the Humanness Index blind test with a score of 96 (human benchmark 100), making it the most human-like AI voice model.",
        },
      },
      {
        title: {
          zh: "GPT-5.5 Instant 大幅提升 ChatGPT 健康智能",
          en: "GPT-5.5 Instant Boosts ChatGPT Health Intelligence",
        },
        description: {
          zh: "GPT-5.5 Instant 在健康评估中达到前沿 Thinking 模型水平，已面向所有免费用户开放。健康类回复事实性问题率下降 71%，每周超 2.3 亿用户受益。",
          en: "GPT-5.5 Instant reaches frontier Thinking model level on health assessments, now available to all free users. Health response factuality errors down 71%, benefiting 230M+ weekly users.",
        },
      },
      {
        title: {
          zh: "Claude Code 现已支持 artifacts",
          en: "Claude Code Now Supports Artifacts",
        },
        description: {
          zh: "Claude Code 可将工作进度生成为实时、可分享的交互式网页，涵盖 PR 走查、系统说明、仪表盘等，默认仅作者可见。",
          en: "Claude Code can now generate real-time, shareable interactive web pages from work progress, including PR walkthroughs, system docs, and dashboards, visible to author by default.",
        },
      },
      {
        title: {
          zh: "DeepSeek 识图模式正式上线",
          en: "DeepSeek Visual Mode Officially Launched",
        },
        description: {
          zh: "DeepSeek 识图模式于 6 月 18 日上线，与快速模式、专家模式并列，背后多模态技术核心框架为 Thinking with Visual Primitives。",
          en: "DeepSeek's visual mode launched June 18, joining speed mode and expert mode, powered by the 'Thinking with Visual Primitives' multimodal framework.",
        },
      },
      {
        title: {
          zh: "Noam Shazeer 离开 Google 加入 OpenAI",
          en: "Noam Shazeer Leaves Google for OpenAI",
        },
        description: {
          zh: "AI 传奇 Noam Shazeer（Transformer 共同作者）两年前谷歌花 27 亿美元请回，现已离开 Google 加入 OpenAI。",
          en: "AI legend Noam Shazeer (Transformer co-author), who Google brought back for $2.7B two years ago, has left Google to join OpenAI.",
        },
      },
      {
        title: {
          zh: "桑德斯提出 7 万亿美元 AI 计划",
          en: "Sanders Proposes $7 Trillion AI Plan",
        },
        description: {
          zh: "伯尼·桑德斯提议对年 AI 销售额超 2 亿美元的公司征收 50% 股票税，建立约 7 万亿美元主权财富基金，每年向每位美国公民发放超 1000 美元股息。",
          en: "Bernie Sanders proposes a 50% stock tax on companies with over $200M annual AI sales, creating a ~$7 trillion sovereign wealth fund paying $1000+ annual dividends to every US citizen.",
        },
      },
      {
        title: {
          zh: "Anthropic Project Fetch 第二阶段：Claude 自主操控机器人快 20 倍",
          en: "Anthropic Project Fetch Phase 2: Claude Robot Tasks 20x Faster",
        },
        description: {
          zh: "Claude Opus 4.7 无需人类协助即完成所有机器人操控任务，速度比最快人类团队快约 20 倍，编码量减少近 10 倍。",
          en: "Claude Opus 4.7 completes all robotic manipulation tasks without human assistance, ~20x faster than the fastest human team, with ~10x less code.",
        },
      },
      {
        title: {
          zh: "IT之家：OpenAI IPO 前招揽 Transformer 共同作者及前白宫 AI 官员",
          en: "OpenAI Hires Transformer Co-Author & Former White House AI Policy Lead",
        },
        description: {
          zh: "OpenAI 在 IPO 前夕连招 Noam Shazeer（Transformer 共同作者）及前白宫 AI 政策官员 Dean Ball，后者将领导新组建的 Strategic Futures 团队。",
          en: "On the eve of its IPO, OpenAI hires Noam Shazeer (Transformer co-author) and former White House AI policy lead Dean Ball to head the new Strategic Futures team.",
        },
      },
    ],
  },
  {
    id: "2026-06-18",
    date: "2026-06-18",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-18",
      en: "🤖 AI HOT Daily · Jun 18, 2026",
    },
    summary: {
      zh: "Grok 4.3 登陆 Bedrock 支持百万上下文，Vercel 开源 AI 智能体框架 Eve，Google 发布 99 美元 Gemini 音箱，阿里云 HappyOyster 1.0 发布，Claude Design 与 Replit 联动，OpenAI 年营收 130 亿但巨亏 209 亿，NVIDIA ENPIRE 八机器人协同系统，Anthropic 首尔办公室开业。",
      en: "Grok 4.3 on Bedrock with 1M context, Vercel open-sources Eve AI agent framework, Google's $99 Gemini speaker, Alibaba HappyOyster 1.0, Claude Design integrates with Replit, OpenAI $13B revenue vs $20.9B loss, NVIDIA ENPIRE 8-robot swarm, Anthropic opens Seoul office.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Grok 4.3 在 Amazon Bedrock 正式可用",
          en: "Grok 4.3 Launches on Amazon Bedrock",
        },
        description: {
          zh: "Grok 4.3 在 Bedrock 上全面可用，达成最低幻觉率，支持 100 万 token 上下文，每美元智能度是其他前沿模型的 2–10 倍。",
          en: "Grok 4.3 is fully available on Bedrock with lowest hallucination rate, 1M token context, delivering 2-10x intelligence per dollar vs other frontier models.",
        },
      },
      {
        title: {
          zh: "Vercel 开源 AI 智能体框架 Eve",
          en: "Vercel Open-Sources Eve Agent Framework",
        },
        description: {
          zh: "Apache-2.0 开源，文件系统优先设计，每个智能体对应一个磁盘目录，内置持久执行、沙箱计算、人机审批等生产能力。",
          en: "Apache-2.0 licensed, filesystem-first design where each agent maps to a directory, with persistent execution, sandbox compute, and human-in-the-loop approval.",
        },
      },
      {
        title: {
          zh: "Google 发布 99 美元 Gemini 智能音箱",
          en: "Google Launches $99 Gemini Smart Speaker",
        },
        description: {
          zh: "Google 推出首款 Gemini 智能音箱 Google Home Speaker，售价 99.99 美元，高级 AI 功能需订阅 Home Premium（月费 10 美元）。",
          en: "Google launches its first Gemini-powered smart speaker at $99.99, with premium AI features via $10/mo Home Premium subscription.",
        },
      },
      {
        title: {
          zh: "阿里云发布 HappyOyster 1.0 世界模型",
          en: "Alibaba Cloud Releases HappyOyster 1.0 World Model",
        },
        description: {
          zh: "阿里云发布开放式世界模型 HappyOyster 1.0（快乐生蚝），支持多模态输入与音视频联合生成，生成中可持续接收用户指令实时响应。",
          en: "Alibaba Cloud launches HappyOyster 1.0 open world model with multimodal input, joint audio-video generation, and real-time user instruction response during generation.",
        },
      },
      {
        title: {
          zh: "Claude Design 更新：跨品牌一致与 Replit 联动",
          en: "Claude Design Update: Brand Consistency & Replit Integration",
        },
        description: {
          zh: "Claude Design 支持跨项目使用统一设计系统，与 Claude Code 同步，首周用户超百万，新增 Replit 联动可将设计直接变为应用。",
          en: "Claude Design now supports cross-project design systems, syncs with Claude Code, 1M+ users in first week, and integrates with Replit to turn designs into apps.",
        },
      },
      {
        title: {
          zh: "泄露文件显示 OpenAI 年营收 130 亿但巨亏 209 亿",
          en: "Leaked Docs: OpenAI $13B Revenue, $20.9B Loss",
        },
        description: {
          zh: "OpenAI 2025 年营收 130.7 亿美元，运营亏损 209.2 亿。ChatGPT 周活超 9 亿，付费约 5000 万。已关闭 Sora 并削减非核心业务，筹备 IPO。",
          en: "OpenAI's 2025 revenue hit $13.07B but operating loss was $20.92B. ChatGPT has 900M+ weekly active users, ~50M paid. Sora shut down, non-core businesses cut, IPO preparations underway.",
        },
      },
      {
        title: {
          zh: "NVIDIA ENPIRE：8 个 AI 智能体自主控制机器人",
          en: "NVIDIA ENPIRE: 8 AI Agents Control Robots Autonomously",
        },
        description: {
          zh: "NVIDIA GEAR 推出 ENPIRE 系统，8 个 Codex 智能体控制 8 台机器人通宵无人运行，完成扎带、整理细针、安装 GPU 等高精度任务。",
          en: "NVIDIA GEAR launches ENPIRE: 8 Codex agents controlling 8 robots running overnight unattended, performing cable tying, fine needle sorting, and GPU installation.",
        },
      },
      {
        title: {
          zh: "Anthropic 在首尔开设办公室并达成多项韩国合作",
          en: "Anthropic Opens Seoul Office, Multiple Korean Partnerships",
        },
        description: {
          zh: "NAVER 全公司部署 Claude Code，Nexon 用 Claude Code 编写游戏代码，LG CNS、Samsung SDS 等加入合作。",
          en: "NAVER deploys Claude Code company-wide, Nexon uses Claude Code for game development, LG CNS and Samsung SDS join partnerships.",
        },
      },
      {
        title: {
          zh: "LifeSciBench：AI 生命科学研究评测基准发布",
          en: "LifeSciBench: AI Life Science Research Benchmark",
        },
        description: {
          zh: "OpenAI 联合 173 位博士级生命科学家发布评测基准，涵盖 750 个真实研究任务、19020 条细化评分标准，评估模型在复杂研究任务中的能力。",
          en: "OpenAI and 173 PhD-level life scientists release a benchmark with 750 real research tasks and 19,020 fine-grained criteria to evaluate models on complex research tasks.",
        },
      },
      {
        title: {
          zh: "Omnigent 开源：AI 智能体团队元框架",
          en: "Omnigent Open-Sourced: AI Agent Team Meta-Framework",
        },
        description: {
          zh: "Databricks 开源 Omnigent，支持在实时会话中运行智能体团队：Claude Code、Codex、Cursor、Pi 等协同工作。",
          en: "Databricks open-sources Omnigent, enabling an agent team with Claude Code, Codex, Cursor, Pi and more collaborating in a single live session.",
        },
      },
    ],
  },
  {
    id: "2026-06-17",
    date: "2026-06-17",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-17",
      en: "🤖 AI HOT Daily · Jun 17, 2026",
    },
    summary: {
      zh: "SpaceX 600 亿美元收购 Cursor，Anthropic 企业份额首超 OpenAI，DeepSeek 融资估值超 500 亿美元，小米 MiMo Claw 正式发布。",
      en: "SpaceX acquires Cursor for $60B in stock, Anthropic surpasses OpenAI in enterprise share, DeepSeek raises at $50B+ valuation, Xiaomi launches MiMo Claw.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Cartesia 发布 Sonic 3.5 与 Ink 2 实时语音模型",
          en: "Cartesia Releases Sonic 3.5 & Ink 2 Voice Models",
        },
        description: {
          zh: "Cartesia 推出 Sonic 3.5（TTS）和 Ink 2（STT）实时语音模型，Ink 2 在流式语音转文字排行榜排名第一，Sonic 3.5 首音频延迟约 82ms。",
          en: "Cartesia launches Sonic 3.5 (TTS) and Ink 2 (STT) as a real-time voice stack, with Ink 2 ranking #1 on streaming speech-to-text leaderboard.",
        },
      },
      {
        title: {
          zh: "通义千问发布机器人三连：RobotManip/RobotWorld/RobotNav",
          en: "Qwen Drops Robot Trilogy: Manip/World/Nav",
        },
        description: {
          zh: "通义千问连发三款机器人基础模型：RobotManip 操作模型 LIBERO-Plus 达 91.4%，RobotWorld 统一 20+ 形态，RobotNav 导航模型涵盖五大领域。",
          en: "Qwen releases three robot foundation models: RobotManip scores 91.4% on LIBERO-Plus, RobotWorld unifies 20+ forms, RobotNav covers 5 navigation domains.",
        },
      },
      {
        title: {
          zh: "字节跳动推出 Seedance 2.0 Mini，视频生成成本砍半",
          en: "ByteDance Seedance 2.0 Mini Cuts Video Cost in Half",
        },
        description: {
          zh: "火山引擎上线 Seedance 2.0 Mini，比 Fast 版快 2 倍，720P 下单秒生成成本约 0.5 元，较标准版降低约一半。",
          en: "Volcano Engine launches Seedance 2.0 Mini, 2x faster than Fast version, ~$0.07 per second at 720P, roughly half the standard cost.",
        },
      },
      {
        title: {
          zh: "小米 MiMo Claw 正式版发布",
          en: "Xiaomi MiMo Claw Officially Launched",
        },
        description: {
          zh: "搭载 MiMo-V2.5-Pro 旗舰模型，支持百万超长上下文，原生兼容 MCP 协议，联动金山办公生态，免费用户每日时长升级至 4 小时。",
          en: "Powered by MiMo-V2.5-Pro flagship model, million-token context, native MCP compatibility, integrated with Kingsoft Office, free tier expanded to 4 hours daily.",
        },
      },
      {
        title: {
          zh: "SpaceX 以 600 亿美元股票收购 Cursor",
          en: "SpaceX Acquires Cursor for $60B in Stock",
        },
        description: {
          zh: "SpaceX 在 IPO 数天后，同意以 600 亿美元股票收购 AI 编程公司 Cursor，交易预计本季度完成。",
          en: "Days after its IPO, SpaceX agrees to acquire AI coding startup Cursor for $60 billion in stock, expected to close this quarter.",
        },
      },
      {
        title: {
          zh: "Anthropic 5 月企业份额首超 OpenAI",
          en: "Anthropic Surpasses OpenAI in Enterprise Share",
        },
        description: {
          zh: "Anthropic 5 月企业 AI 订阅市场份额达 41%，首次超越 OpenAI（39.5%），特朗普政府禁令反而推动采用量创新高。",
          en: "Anthropic captures 41% of enterprise AI subscriptions in May, surpassing OpenAI's 39.5%, with the Trump ban paradoxically boosting adoption.",
        },
      },
      {
        title: {
          zh: "DeepSeek 完成首轮外部融资，估值超 500 亿美元",
          en: "DeepSeek Raises First Outside Round at $50B+",
        },
        description: {
          zh: "DeepSeek 完成首轮外部融资超 74 亿美元，估值超 500 亿美元，创始人梁文锋个人投入约 200 亿元，腾讯和宁德时代为主要投资者。",
          en: "DeepSeek raises $7.4B+ in first outside round at $50B+ valuation, founder invested ~$3B personally, Tencent and CATL are key investors.",
        },
      },
      {
        title: {
          zh: "五角大楼将大部分 AI 工作流从 Anthropic 转移",
          en: "Pentagon Moves AI Workflows from Anthropic",
        },
        description: {
          zh: "五角大楼将超 2/3 日常 AI 工作流从 Anthropic 转移，起因是 Anthropic 拒绝签署允许 Claude 用于监控和自动武器的协议。",
          en: "Pentagon shifts over 2/3 of daily AI workflows away from Anthropic after it refused to sign agreements allowing Claude use for surveillance and autonomous weapons.",
        },
      },
      {
        title: {
          zh: "微软 Copilot Cowork 全球正式可用",
          en: "Microsoft Copilot Cowork GA Worldwide",
        },
        description: {
          zh: "微软 Copilot Cowork 现已全球正式可用，支持多模型，每个组织可让长期运行的智能体处理复杂的多步骤任务。",
          en: "Microsoft Copilot Cowork is now globally available with multi-model support, enabling long-running agents for complex multi-step tasks.",
        },
      },
      {
        title: {
          zh: "AI 版支付宝「阿宝」开启邀测",
          en: "AI-Powered Alipay 'Abao' Opens Beta",
        },
        description: {
          zh: "支付宝开启 AI 版邀测，用户右滑进入新版界面，由阿宝 AI 助手代办事项，首批放出 100 个邀请码。",
          en: "Alipay launches AI version beta, users swipe right for 'Abao' AI assistant to handle tasks, 100 invite codes in the first batch.",
        },
      },
    ],
  },
  {
    id: "2026-06-16",
    date: "2026-06-16",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-16",
      en: "🤖 AI HOT Daily · Jun 16, 2026",
    },
    summary: {
      zh: "MiniMax 开源 M3 权重及 MSA 论文，Salesforce 36 亿美元收购 AI 客服 Fin，Meta 上线 AI Mode，Nvidia 发行 200 亿美元债券。",
      en: "MiniMax open-sources M3 weights, Salesforce acquires AI customer service platform Fin for $3.6B, Meta launches AI Mode, Nvidia issues $20B in bonds.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "MiniMax 开源 M3 权重及 MSA 技术论文",
          en: "MiniMax Open-Sources M3 Weights & MSA Paper",
        },
        description: {
          zh: "MiniMax 开源 428B 参数 M3 模型权重，同步发布 MSA 稀疏注意力论文。M3 是首个预训练阶段多模态混合训练的开源模型，获开源模型第一。",
          en: "MiniMax open-sources 428B-param M3 weights and MSA sparse attention paper. M3 is the first open-source model with pretraining-stage multimodal interleaving, ranking #1 in open-source models.",
        },
      },
      {
        title: {
          zh: "DFlash 投机解码：4.3 倍吞吐量",
          en: "DFlash Speculative Decoding: 4.3x Throughput",
        },
        description: {
          zh: "Z Lab、Modal 与 SGLang 联合发布 DFlash，采用块扩散+KV 注入并行生成，在 Qwen 3.5 397B 上吞吐量达基线 4.3 倍。",
          en: "Z Lab, Modal and SGLang release DFlash with block diffusion + KV injection, achieving 4.3x baseline throughput on Qwen 3.5 397B.",
        },
      },
      {
        title: {
          zh: "Flash-KMeans：比 FAISS 快 200 倍",
          en: "Flash-KMeans: 200x Faster Than FAISS on GPU",
        },
        description: {
          zh: "UC Berkeley 与 UT Austin 开源 Flash-KMeans，通过重构 GPU 数据流实现精确 Lloyd's k-Means，在 H200 上比 FAISS 快 200 倍以上。",
          en: "UC Berkeley and UT Austin open-source Flash-KMeans, achieving exact Lloyd's k-Means with 200x+ speedup over FAISS on H200 GPUs.",
        },
      },
      {
        title: {
          zh: "Grok Build 推出 Agent Dashboard",
          en: "Grok Build Launches Agent Dashboard",
        },
        description: {
          zh: "xAI 为 Grok Build 推出 Agent Dashboard，单一屏幕管理多个编码会话，支持按状态分组、peek 面板查看输出。",
          en: "xAI launches Agent Dashboard for Grok Build, managing multiple coding sessions in one screen with status grouping and output peek panel.",
        },
      },
      {
        title: {
          zh: "Meta 在 Facebook 上线 AI Mode",
          en: "Meta Launches AI Mode on Facebook",
        },
        description: {
          zh: "Meta 推出 AI Mode 搜索，从公开帖子提取信息合成答案，同时启动 Facebook、Instagram 和 WhatsApp 全球订阅（月费 3.99 美元起）。",
          en: "Meta launches AI Mode search that synthesizes answers from public posts, alongside global subscriptions for Facebook, Instagram, and WhatsApp starting at $3.99/mo.",
        },
      },
      {
        title: {
          zh: "Kimi K2.7 Code 高速版上线",
          en: "Kimi K2.7 Code Speed Mode Launched",
        },
        description: {
          zh: "Kimi K2.7 Code 高速版输出速度约 5-6 倍，常规编程场景约 180 Token/s，API 定价为普通版 2 倍。",
          en: "Kimi K2.7 Code speed mode delivers 5-6x output at ~180 Token/s for regular coding, API priced at 2x the standard version.",
        },
      },
      {
        title: {
          zh: "Salesforce 以 36 亿美元收购 AI 客服 Fin",
          en: "Salesforce Acquires Fin for $3.6B",
        },
        description: {
          zh: "Salesforce 以 36 亿美元收购 AI 客服平台 Fin，利用其技术增强企业级 Agentforce 平台。",
          en: "Salesforce acquires AI customer service platform Fin for $3.6B to enhance its enterprise Agentforce platform.",
        },
      },
      {
        title: {
          zh: "Nvidia 发行 200 亿美元债券",
          en: "Nvidia Issues $20B in Bonds",
        },
        description: {
          zh: "Nvidia 计划通过自 2021 年以来的首次债券发行筹集至少 200 亿美元，加入 AI 领域的债务融资热潮。",
          en: "Nvidia plans to raise at least $20B through its first bond sale since 2021, joining the AI debt financing boom.",
        },
      },
      {
        title: {
          zh: "xAI 将 Grok 集成至 Warp 终端",
          en: "xAI Integrates Grok into Warp Terminal",
        },
        description: {
          zh: "xAI 宣布 Grok 集成到 Warp 终端开发环境，Warp 是基于终端的智能体开发环境，拥有近百万开发者用户。",
          en: "xAI integrates Grok into Warp, a terminal-based agent development environment with nearly one million developers.",
        },
      },
      {
        title: {
          zh: "AI 裁员浪潮成为火药桶",
          en: "AI Layoff Wave Becomes a Powder Keg",
        },
        description: {
          zh: "科技公司今年已裁员约 15 万人，AI 连续三个月是裁员首要原因，同期 AI 芯片商 Cerebras 上市市值达 670 亿美元。",
          en: "Tech companies have laid off ~150,000 people this year, with AI cited as the top reason for three consecutive months, while Cerebras IPO'd at $67B.",
        },
      },
    ],
  },
  {
    id: "2026-06-15",
    date: "2026-06-15",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-15",
      en: "🤖 AI HOT Daily · Jun 15, 2026",
    },
    summary: {
      zh: "Anthropic 暂停新模型访问，Meta 撤销 20 亿美元收购 Manus 交易，白宫 AI 监管被指偏袒 OpenAI，Nadella 警告 AI 生态失衡风险。",
      en: "Anthropic suspends new model access, Meta unwinds $2B Manus acquisition, White House AI decision favors OpenAI, Nadella warns on AI ecosystem risk.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Anthropic 暂停新模型访问，印度辩论 AI 未来",
          en: "Anthropic Suspends Models, India Debates AI Future",
        },
        description: {
          zh: "Anthropic 暂停新模型访问权限，印度科技领袖围绕此事展开辩论，探讨对印度 AI 雄心的警示意义。",
          en: "Anthropic suspends access to new models, sparking debate among Indian tech leaders about implications for the country's AI ambitions.",
        },
      },
      {
        title: {
          zh: "Meta 撤销 20 亿美元收购 Manus 交易",
          en: "Meta Unwinds $2B Manus Acquisition",
        },
        description: {
          zh: "Meta 开始撤销对 Manus 的 20 亿美元收购，此前北京要求交易必须反转，收购解除程序已启动。",
          en: "Meta reportedly moves to unwind its $2B Manus acquisition after Beijing demanded the deal be reversed.",
        },
      },
      {
        title: {
          zh: "乔木小说创作 Skill 开源发布",
          en: "Qiaomu Novel Generator Skill Open-Sourced",
        },
        description: {
          zh: "开源乔木小说创作 Skill，一句话自动生成剧情梗概、人物设定、冲突升级和结尾。",
          en: "Open-source novel-writing Skill: one command generates plot outlines, character settings, conflict escalation, and endings.",
        },
      },
      {
        title: {
          zh: "Anthropic CEO 上市前夕警告：千漏洞、AI 砍半白领工作",
          en: "Anthropic CEO Pre-IPO Warnings: 1000 Bugs, Half White-Collar Jobs",
        },
        description: {
          zh: "Dario Amodei 透露内部模型上千漏洞、AI 一到五年砍半入门级白领工作、Claude 已被美军用于对伊朗战争，给出文明崩溃概率 10%-25%。",
          en: "Amodei reveals 1000+ model bugs, AI to halve entry-level white-collar jobs in 1-5 years, Claude used by US military in Iran, gives 10-25% civilization collapse odds.",
        },
      },
      {
        title: {
          zh: "白宫 AI 监管被指偏袒 OpenAI 与亚马逊",
          en: "White House AI Decision Favors OpenAI and Amazon",
        },
        description: {
          zh: "白宫 AI 监管决定被指偏袒 OpenAI、亚马逊，同时对 Anthropic 施压不足 24 小时，专家呼吁建立独立 AI 监管机构。",
          en: "White House AI regulation decision criticized for favoring OpenAI and Amazon while pressuring Anthropic within 24 hours, experts call for independent oversight.",
        },
      },
      {
        title: {
          zh: "Satya Nadella：没有生态的前沿不稳定",
          en: "Satya Nadella: Frontier Without Ecosystem Is Unstable",
        },
        description: {
          zh: "微软 CEO 警告若所有价值被少数模型吞噬，将重演全球化空心化悲剧，企业需同时构建人力资本与 token 资本。",
          en: "Microsoft CEO warns if all value is captured by a few models, it repeats the hollowing-out tragedy of globalization; firms need both human and token capital.",
        },
      },
    ],
  },
  {
    id: "2026-06-14",
    date: "2026-06-14",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-14",
      en: "🤖 AI HOT Daily · Jun 14, 2026",
    },
    summary: {
      zh: "智谱 GLM-5.2 全量开放支持 1M 上下文，Anthropic 秘密申请上市估值 9650 亿美元，谷歌安全负责人因反对军事 AI 合作辞职，OpenAI 遭多州总检察长联合调查。",
      en: "Zhipu GLM-5.2 launches with 1M context, Anthropic files for IPO at $965B valuation, Google's Android security chief resigns over military AI, OpenAI probed by state attorneys general.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "智谱 GLM-5.2 全量开放，支持 1M 上下文",
          en: "Zhipu GLM-5.2 Launches with 1M Context",
        },
        description: {
          zh: "智谱发布迄今最强开源模型 GLM-5.2，支持真正可用的 1M 上下文，被称为最强国产 Coding 模型，下周开源并遵循 MIT 协议。",
          en: "Zhipu releases its most capable open-source model GLM-5.2 with true 1M context, hailed as the strongest domestic coding model, open-sourcing next week under MIT license.",
        },
      },
      {
        title: {
          zh: "Suno 发布音轨分离功能",
          en: "Suno Releases Stem Separation",
        },
        description: {
          zh: "Suno 发布音轨分离功能，可以从零生成更纯净的音频内容。",
          en: "Suno launches stem separation feature for generating cleaner audio from scratch.",
        },
      },
      {
        title: {
          zh: "OpenRouter Fusion API：半价达 Fable 级智能",
          en: "OpenRouter Fusion API: Fable-Level at Half Price",
        },
        description: {
          zh: "OpenRouter 推出 Fusion API，以半价即可达到 Fable 级别的智能水平，提供更具性价比的 AI 调用方案。",
          en: "OpenRouter launches Fusion API delivering Fable-grade intelligence at half the price for cost-effective AI inference.",
        },
      },
      {
        title: {
          zh: "Anthropic 安全警告适得其反，政府撤回最强大 AI",
          en: "Anthropic Safety Warning Backfires, Government Pulls AI",
        },
        description: {
          zh: "Anthropic 不满政府基于狭窄越狱发现撤回已部署给数亿用户的商业模型，称此举不合理。",
          en: "Anthropic pushes back after government pulls its most powerful AI from billions of users based on a narrow jailbreak finding.",
        },
      },
      {
        title: {
          zh: "谷歌安全负责人因反对军事 AI 合作辞职",
          en: "Google Security Chief Resigns Over Military AI",
        },
        description: {
          zh: "谷歌 Android 安全负责人辞职，指责公司丧失道德指针、放弃碳中和目标、与战争部签署允许 AI 用于任何合法目的的协议。",
          en: "Google's Android security chief resigns, accusing the company of abandoning ethics, carbon neutrality, and signing military AI agreements.",
        },
      },
      {
        title: {
          zh: "Anthropic 秘密申请上市，估值 9650 亿美元",
          en: "Anthropic Files for IPO at $965B Valuation",
        },
        description: {
          zh: "Anthropic 秘密提交 IPO 申请，估值达 9650 亿美元，被称为史上增长最快的初创公司之一。",
          en: "Anthropic files confidential IPO at $965 billion valuation, one of the fastest-growing startups ever.",
        },
      },
      {
        title: {
          zh: "扎克伯格承认 Meta AI 转型脱轨",
          en: "Zuckerberg Admits Meta AI Transition Derailed",
        },
        description: {
          zh: "扎克伯格内部备忘录承认 AI 转型组织调整过快，今年已裁减 10% 员工、7000 人转入 AI 项目，预计将继续犯错。",
          en: "Zuckerberg internal memo admits rushed AI reorganization, 10% workforce cut, 7,000 reassigned to AI projects, expects more mistakes ahead.",
        },
      },
      {
        title: {
          zh: "OpenAI 遭多州总检察长联合调查",
          en: "OpenAI Probed by State Attorneys General",
        },
        description: {
          zh: "OpenAI 正被多州总检察长组成的联盟调查，已向该公司索取涵盖广泛主题的信息。",
          en: "A coalition of state attorneys general is investigating OpenAI, demanding broad information from the AI company.",
        },
      },
      {
        title: {
          zh: "SemiAnalysis：200 美元 AI 订阅榨出 70 倍 Token 用量",
          en: "SemiAnalysis: $200 Sub Gets 70x Token Value",
        },
        description: {
          zh: "分析显示 Claude Max 20x 订阅可消耗约值 8000 美元的 token，ChatGPT Pro 20x 对应 14000 美元，重度模式价格难以长期维持。",
          en: "Analysis shows Claude Max 20x sub burns ~$8K in API tokens, ChatGPT Pro 20x ~$14K — heavy usage patterns may be unsustainable.",
        },
      },
      {
        title: {
          zh: "/architect 项目减少 80% 的 Fable Token 消耗",
          en: "/architect Cuts Fable Token Use by 80%",
        },
        description: {
          zh: "/architect 将 Fable 用于协调和审核、Codex 负责构建，成功减少 80% 的 Fable token 消耗。",
          en: "/architect delegates Fable to orchestration and review, Codex to building, cutting Fable token consumption by 80%.",
        },
      },
    ],
  },
  {
    id: "2026-06-13",
    date: "2026-06-13",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-13",
      en: "🤖 AI HOT Daily · Jun 13, 2026",
    },
    summary: {
      zh: "MiniMax M3 开源权重模型发布，Kimi 发布并开源 Kimi-K2.7-Code，苹果 iOS 27 健康 App 大改，字节豆包上线任务模式，Anthropic 公众调查显示近半美国人盼 AI 治愈疾病。",
      en: "MiniMax open-sources M3 weights, Kimi releases Kimi-K2.7-Code, Apple redesigns Health app in iOS 27, ByteDance Doubao launches Task Mode, Anthropic survey shows 48% want AI to cure cancer.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "MiniMax M3 开源权重模型发布",
          en: "MiniMax Releases M3 Open-Weight Model",
        },
        description: {
          zh: "MiniMax 发布开源权重模型 M3，428B 总参数、23B 激活，采用稀疏注意力支持 1M token 上下文，原生多模态，已上架 HuggingFace。",
          en: "MiniMax releases open-weight M3 with 428B total params, 23B active, sparse attention for 1M token context, native multimodal, now on HuggingFace.",
        },
      },
      {
        title: {
          zh: "Kimi 发布并开源 Kimi-K2.7-Code",
          en: "Kimi Releases Open-Source Kimi-K2.7-Code",
        },
        description: {
          zh: "Kimi 发布最新代码模型 K2.7-Code，Kimi Code Bench v2 提升 +21.8%，推理 token 使用量降低 30%，6x 高速模式即将推出。",
          en: "Kimi releases K2.7-Code with +21.8% on Kimi Code Bench v2, 30% less reasoning token usage, 6x speed mode coming soon.",
        },
      },
      {
        title: {
          zh: "苹果 iOS 27 健康 App 大改",
          en: "Apple Redesigns Health App in iOS 27",
        },
        description: {
          zh: "iOS 27 健康 App 改为卡片布局，新增视觉智能营养识别（拍摄食物获取营养信息），经期追踪扩展围绝经期支持。",
          en: "iOS 27 Health app gets card layout, visual nutrition recognition via camera, and perimenopause tracking support.",
        },
      },
      {
        title: {
          zh: "字节豆包上线任务模式与专家模式",
          en: "ByteDance Doubao Launches Task Mode & Expert Mode",
        },
        description: {
          zh: "豆包上线任务模式，支持定时执行、零代码网页生成、PPT 生成、数据可视化。思考模式升级为专家模式，三档定价 68/200/500 元每月。",
          en: "Doubao launches Task Mode with scheduled execution, no-code web page generation, PPT generation, data visualization. Thinking Mode upgraded to Expert Mode at $68/200/500 monthly.",
        },
      },
      {
        title: {
          zh: "OpenAI Codex 推出速率重置攒存与浏览器开发者模式",
          en: "OpenAI Codex: Rate Reset Bank & Browser Dev Mode",
        },
        description: {
          zh: "Codex 新增速率限制重置攒存功能，可将重置保留到以后使用。同时支持 Chrome DevTools 协议调试浏览器问题。",
          en: "Codex adds rate limit reset banking for later use, plus Chrome DevTools Protocol support for browser debugging.",
        },
      },
      {
        title: {
          zh: "TCS 与 Anthropic 合作将 Claude 引入受监管行业",
          en: "TCS Partners with Anthropic for Regulated Industries",
        },
        description: {
          zh: "Anthropic 与塔塔咨询服务合作，TCS 将向 56 个国家 5 万名员工提供 Claude，为金融、医疗等受监管行业客户构建产品。",
          en: "Anthropic partners with Tata Consultancy Services to bring Claude to 50,000 employees across 56 countries for regulated industries like finance and healthcare.",
        },
      },
      {
        title: {
          zh: "Google Research：AI 帮助用户理解皮肤问题",
          en: "Google Research: AI Helps Users Understand Skin Conditions",
        },
        description: {
          zh: "Google Research 在 JAMA Dermatology 发表研究，2345 名参与者显示 AI 辅助显著提升了用户识别皮肤疾病名称和就医决策能力。",
          en: "Google Research study in JAMA Dermatology with 2,345 participants shows AI significantly improves users' ability to identify skin conditions and make care decisions.",
        },
      },
      {
        title: {
          zh: "Anthropic 首次公众调查：48% 盼 AI 治愈癌症",
          en: "Anthropic Survey: 48% Want AI to Cure Cancer",
        },
        description: {
          zh: "Anthropic 对近 5.2 万美国人调查显示，48% 将治愈癌症列为首要期望，64% 担忧 AI 导致失业，超 70% 支持政府监管。",
          en: "Anthropic survey of ~52,000 Americans: 48% rank curing cancer as top AI hope, 64% fear job loss, over 70% support government regulation.",
        },
      },
      {
        title: {
          zh: "OpenAI 推出 Academy 课程",
          en: "OpenAI Launches Academy Courses",
        },
        description: {
          zh: "OpenAI 发布三门 Academy 课程，帮助用户掌握实用 AI 技能、创建可重复工作流，并在日常工作中应用 AI 智能体。",
          en: "OpenAI releases three Academy courses to help users master practical AI skills, create repeatable workflows, and apply AI agents at work.",
        },
      },
      {
        title: {
          zh: "Anthropic 调查：超六成美国人担忧 AI 失业潮",
          en: "Anthropic: 64% of Americans Fear AI Job Loss",
        },
        description: {
          zh: "调查显示 64% 担忧 AI 导致失业，仅 15% 信任 AI 公司决策，超 70% 支持政府监管，反映公众对 AI 风险的广泛关切。",
          en: "Survey finds 64% fear AI-driven job loss, only 15% trust AI company decisions, over 70% support government oversight.",
        },
      },
    ],
  },
  {
    id: "2026-06-12",
    date: "2026-06-12",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-12",
      en: "🤖 AI HOT Daily · Jun 12, 2026",
    },
    summary: {
      zh: "Gemini Omni Flash 视频任务达 SOTA，全自主无人机首次击毙人类士兵，贝佐斯 AI 公司 Prometheus 融资 120 亿美元估值 410 亿，Anthropic 与 DXC 达成全球联盟。",
      en: "Gemini Omni Flash achieves SOTA on video tasks, fully autonomous drone kills human soldier for first time, Bezos AI company Prometheus raises $12B at $41B valuation, Anthropic forms global alliance with DXC.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Gemini Omni Flash 视频任务达 SOTA",
          en: "Gemini Omni Flash Achieves SOTA on Video",
        },
        description: {
          zh: "Gemini Omni Flash 在图像到视频、文本到视频和视频编辑方面达到 SOTA，即将通过 API 向开发者开放。",
          en: "Gemini Omni Flash achieves SOTA on image-to-video, text-to-video, and video editing, coming soon via API for developers.",
        },
      },
      {
        title: {
          zh: "Midjourney V8.1 成为默认模型",
          en: "Midjourney V8.1 Becomes Default Model",
        },
        description: {
          zh: "Midjourney 将默认模型从 V7 升级为 V8.1，智能性、连贯性、提示遵循度和文本渲染均有提升，HD 模式已支持。",
          en: "Midjourney upgraded default model from V7 to V8.1 with improved intelligence, coherence, prompt adherence, text rendering, and HD mode support.",
        },
      },
      {
        title: {
          zh: "腾讯混元开源升级 HPC-Ops 推理算子库",
          en: "Tencent Hunyuan Open-Sources HPC-Ops Inference Library",
        },
        description: {
          zh: "腾讯混元 AI Infra 团队开源升级推理算子库，Attention 采用运行时动态负载调度，长文本最高加速 2.95 倍。",
          en: "Tencent Hunyuan open-sources upgraded HPC-Ops inference operator library with runtime dynamic load scheduling, up to 2.95x speedup on long text.",
        },
      },
      {
        title: {
          zh: "Perplexity Computer 集成 Deep Research",
          en: "Perplexity Computer Integrates Deep Research",
        },
        description: {
          zh: "Perplexity 将 Deep Research 作为原生技能集成到 Computer 中，连接智能体框架和搜索即代码生成，Pro 和 Max 用户可用。",
          en: "Perplexity integrates Deep Research as native skill into Computer, connected to agent framework and search-as-code, available for Pro and Max users.",
        },
      },
      {
        title: {
          zh: "Cursor 推出 Auto-review 分类器智能体",
          en: "Cursor Launches Auto-review Classifier Agent",
        },
        description: {
          zh: "Cursor 推出 Auto-review 机制，通过分类器智能体在工具调用前审查动作风险，高风险时阻止并返回解释，低风险时放行。",
          en: "Cursor launches Auto-review using a classifier agent to inspect tool calls before execution, blocking high-risk actions and allowing low-risk ones.",
        },
      },
      {
        title: {
          zh: "全自主无人机首次击毙人类士兵",
          en: "Fully Autonomous Drone Kills Human Soldier for First Time",
        },
        description: {
          zh: "据《新科学家》报道，全自主无人机首次在实战中执行致命攻击，标志着自主武器系统的新里程碑。",
          en: "New Scientist reports the first recorded lethal attack by a fully autonomous drone, marking a new milestone for autonomous weapon systems.",
        },
      },
      {
        title: {
          zh: "Prometheus 融资 120 亿美元，定位人工通用工程师",
          en: "Prometheus Raises $12B as 'Artificial General Engineer'",
        },
        description: {
          zh: "贝佐斯旗下 AI 公司 Prometheus 成立仅 7 个月，以 410 亿美元估值完成 120 亿美元融资，目标将设计到制造循环压缩 10 倍以上。",
          en: "Bezos-backed AI startup Prometheus raises $12B at $41B valuation after just 7 months, aiming to compress the design-to-manufacturing loop 10x.",
        },
      },
      {
        title: {
          zh: "Anthropic 与 DXC 达成全球联盟",
          en: "Anthropic Forms Global Alliance with DXC",
        },
        description: {
          zh: "Anthropic 与 DXC Technology 达成多年联盟，将培训数万名 Claude 认证工程师，将 AI 引入银行、航空、保险和政府关键系统。",
          en: "Anthropic partners with DXC Technology to train tens of thousands of Claude-certified engineers, bringing AI to critical banking, airline, insurance, and government systems.",
        },
      },
      {
        title: {
          zh: "研究：LLM 在 95% 模拟中会使用战术核武器",
          en: "Study: LLMs Use Tactical Nukes in 95% of Simulations",
        },
        description: {
          zh: "一项模拟研究显示，LLM 在 95% 的模拟场景中选择使用战术核武器，引发对 AI 决策行为的广泛关注。",
          en: "A simulation study shows LLMs choose to use tactical nuclear weapons in 95% of scenarios, raising concerns about AI decision-making.",
        },
      },
      {
        title: {
          zh: "Anthropic CEO 警告 AI 将造成大规模岗位流失",
          en: "Anthropic CEO Warns of Mass AI Job Displacement",
        },
        description: {
          zh: "Dario Amodei 警告 AI 导致的岗位流失是结构性必然，提出薪资保障、培训补贴等应对思路，若人力需求永久下降需全社会应对。",
          en: "Dario Amodei warns AI-driven job displacement is structurally inevitable, proposing wage guarantees and training subsidies as society prepares for potentially permanent labor demand reduction.",
        },
      },
    ],
  },
  {
    id: "2026-06-11",
    date: "2026-06-11",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-11",
      en: "🤖 AI HOT Daily · Jun 11, 2026",
    },
    summary: {
      zh: "Google DeepMind 发布 DiffusionGemma 扩散模型速度提升 4 倍，小米发布 MiMo Code V0.1 开源编程助手，欧盟责令 Meta 向第三方开放 WhatsApp，Google 因模型幻觉被判法律责任。",
      en: "Google DeepMind releases DiffusionGemma 4x faster text generation, Xiaomi launches MiMo Code V0.1 open-source coding assistant, EU orders Meta to open WhatsApp to third-party AI, Google held liable for AI hallucinations.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Google DeepMind 发布 DiffusionGemma 扩散模型",
          en: "Google DeepMind Releases DiffusionGemma",
        },
        description: {
          zh: "开源扩散模型，突破自回归逐 token 生成方式，每次前向并行生成 256 个 token。26B MoE 仅激活 3.8B 参数，量化后适配 18GB 显存消费级 GPU，速度提升 4 倍。",
          en: "Open-source diffusion model breaks autoregressive token-by-token generation, producing 256 tokens per forward pass. 26B MoE activates only 3.8B params, fits 18GB VRAM after quantization, 4x faster.",
        },
      },
      {
        title: {
          zh: "小米发布 MiMo Code V0.1 开源编程助手",
          en: "Xiaomi Releases MiMo Code V0.1",
        },
        description: {
          zh: "小米推出开源终端 AI 编程助手，支持百万 token 上下文、无限上下文、Agent-模型深度协同、Compose 模式、语音输入，兼容 Claude Code 零成本迁移。",
          en: "Xiaomi's open-source terminal AI coding assistant supports million-token context, infinite context, agent-model deep collaboration, Compose mode, voice input, zero-cost migration from Claude Code.",
        },
      },
      {
        title: {
          zh: "Grok Voice 以低价提供类人语音交互",
          en: "Grok Voice Delivers Human-Like Speech at Low Cost",
        },
        description: {
          zh: "xAI 推出 Grok Voice，具有类人的时机、语调和温暖感，价格仅为竞争对手的一小部分。",
          en: "xAI launches Grok Voice with human-like timing, tone, and warmth at a fraction of competitor pricing.",
        },
      },
      {
        title: {
          zh: "Cursor Bugbot 更新：速度提升 3 倍",
          en: "Cursor Bugbot Update: 3x Faster",
        },
        description: {
          zh: "Cursor 代码审查工具 Bugbot 运行速度提升超 3 倍，成本降低 22%，每轮审查多发现 10% 的 bug，90% 运行在三分钟内完成。",
          en: "Cursor's Bugbot code review tool runs 3x faster with 22% lower cost, finds 10% more bugs per review, 90% complete within 3 minutes.",
        },
      },
      {
        title: {
          zh: "华为云发布端到端具身 AI 平台 CloudRobo",
          en: "Huawei Cloud Launches CloudRobo Embodied AI Platform",
        },
        description: {
          zh: "全球首个端到端具身 AI 开发平台，覆盖数据、模型到部署、集成全生命周期，基于 PB 级可信数据底座。",
          en: "World's first end-to-end embodied AI development platform covering the full lifecycle from data to deployment, built on PB-scale trusted data.",
        },
      },
      {
        title: {
          zh: "欧盟责令 Meta 向第三方 AI 开放 WhatsApp",
          en: "EU Orders Meta to Open WhatsApp to Third-Party AI",
        },
        description: {
          zh: "欧盟委员会发布临时措施，责令 Meta 在反垄断调查结束前免费向第三方 AI 助手开放 WhatsApp 访问权限，以避免损害市场竞争。",
          en: "EU Commission orders Meta to give third-party AI assistants free access to WhatsApp during antitrust investigation to prevent market competition harm.",
        },
      },
      {
        title: {
          zh: "Anthropic 研究：AI 数小时即可构建漏洞利用",
          en: "Anthropic: AI Builds Exploits in Hours",
        },
        description: {
          zh: "Anthropic 发现其 AI 模型能在几小时内将安全补丁转化为可工作的漏洞利用，成本仅需数千美元，无需专业知识。传统补丁节奏已过时。",
          en: "Anthropic finds its AI can turn security patches into working exploits in hours at minimal cost without expert knowledge, declaring traditional patch cadence obsolete.",
        },
      },
      {
        title: {
          zh: "Google 因模型幻觉被判承担法律责任",
          en: "Google Held Liable for AI Hallucinations",
        },
        description: {
          zh: "一项法律裁决判定 Google 对其 AI 模型产生的幻觉内容承担法律责任，可能对 AI 行业产生巨大影响。",
          en: "A court ruling holds Google legally responsible for AI model hallucinated content, potentially creating major precedent for the AI industry.",
        },
      },
      {
        title: {
          zh: "工信部印发 AI+信息通信 融合发展实施意见",
          en: "China Ministry Issues AI+ICT Development Guidelines",
        },
        description: {
          zh: "要求加快建设 400Gbps/800Gbps 骨干网络，推动 5G-A/6G、新一代光网络与 AI 融合发展，鼓励电信企业用 AI 赋能传统业务。",
          en: "Ministry calls for accelerating 400G/800G backbone networks, promoting 5G-A/6G and optical network integration with AI, encouraging AI-empowered telecom services.",
        },
      },
      {
        title: {
          zh: "百度百舸联合复旦提出 LU-KV 框架被 ICML 2026 录用",
          en: "Baidu & Fudan's LU-KV Framework Accepted at ICML 2026",
        },
        description: {
          zh: "提出 Long-horizon Utility KV 框架，将 KV Cache 预算分配建模为全局组合优化问题，在 LongBench 和 RULER 基准上表现优异。",
          en: "Long-horizon Utility KV framework models KV cache allocation as global combinatorial optimization, achieving strong results on LongBench and RULER benchmarks.",
        },
      },
    ],
  },
  {
    id: "2026-06-10",
    date: "2026-06-10",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-10",
      en: "🤖 AI HOT Daily · Jun 10, 2026",
    },
    summary: {
      zh: "Anthropic 发布 Claude Fable 5 和 Mythos 5，Google 发布 Gemma 4 12B 无编码器多模态模型，小米 MiMo 突破 1000 tokens/s，中国计划投资 2950 亿美元建设 AI 基础设施。",
      en: "Anthropic launches Claude Fable 5 and Mythos 5, Google releases Gemma 4 12B encoder-free multimodal, Xiaomi MiMo breaks 1000 tps, China plans $295B AI infrastructure.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Anthropic 发布 Claude Fable 5 和 Mythos 5",
          en: "Anthropic Releases Claude Fable 5 and Mythos 5",
        },
        description: {
          zh: "Fable 5 在几乎所有测试基准上达到 SOTA，Stripe 将数月工程压缩至数天；Mythos 5 在药物设计中实现约 10 倍加速。售价仅为之前的一半。",
          en: "Fable 5 achieves SOTA on nearly all benchmarks, Stripe compresses months of work into days; Mythos 5 delivers ~10x speedup in drug discovery. Price halved.",
        },
      },
      {
        title: {
          zh: "Google Gemma 4 12B：无编码器多模态模型",
          en: "Google Gemma 4 12B: Encoder-Free Multimodal",
        },
        description: {
          zh: "首个无编码器统一架构多模态模型，原生支持音频，基准测试性能接近 26B MoE 模型，仅需 16GB 显存即可在消费级笔记本运行。",
          en: "First encoder-free unified multimodal architecture, native audio support, performance near 26B MoE with under 16GB VRAM on consumer laptops.",
        },
      },
      {
        title: {
          zh: "小米 MiMo 突破 1000 tokens/s",
          en: "Xiaomi MiMo Breaks 1000 tps",
        },
        description: {
          zh: "MiMo-V2.5-Pro-UltraSpeed 首次在 1T 模型上实现超 1000 tokens/s 输出，采用 FP4 混合量化和 DFlash 推测解码。",
          en: "MiMo-V2.5-Pro-UltraSpeed first to exceed 1000 tps on 1T model using FP4 quantization and DFlash speculative decoding.",
        },
      },
      {
        title: {
          zh: "Cohere 发布 North Mini Code 开源编码模型",
          en: "Cohere Releases North Mini Code Open-Source",
        },
        description: {
          zh: "30B 参数 MoE 模型，Apache 2.0 开源。在 SWE-Bench Verified 上 pass@10 达 80.2%，专为智能体编码任务优化。",
          en: "30B parameter MoE model, Apache 2.0 open-source. Achieves 80.2% pass@10 on SWE-Bench Verified, optimized for agentic coding tasks.",
        },
      },
      {
        title: {
          zh: "中国计划投资 2950 亿美元建设 AI 基础设施",
          en: "China Plans $295B AI Infrastructure Investment",
        },
        description: {
          zh: "未来五年投入约 2 万亿元人民币建设全国数据中心，以推动国内 AI 产业发展并超越美国。",
          en: "China to invest ~2 trillion yuan over five years building nationwide data centers to boost domestic AI and overtake the US.",
        },
      },
      {
        title: {
          zh: "德国裁决：Google 为 AI Overviews 错误承担责任",
          en: "German Court: Google Liable for AI Overviews Errors",
        },
        description: {
          zh: "德国地方法院裁定 Google 对 AI 概览生成的内容直接承担法律责任，不能援引搜索引擎有限责任保护。",
          en: "German court rules Google directly liable for AI Overviews content, cannot invoke search engine limited liability protection.",
        },
      },
    ],
  },
  {
    id: "2026-06-09",
    date: "2026-06-09",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-09",
      en: "🤖 AI HOT Daily · Jun 9, 2026",
    },
    summary: {
      zh: "小米 MiMo 突破 1000 tokens/s、苹果发布 AFM3、高德发布3D城市世界模型、OpenAI 机密提交 S-1 草案、NVIDIA 与 LG 合作建 AI 工厂。",
      en: "Xiaomi MiMo 1000 tps, Apple AFM3, Amap 3D city world model, OpenAI S-1 filing, NVIDIA LG AI factory.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "小米 MiMo 突破 1000 tokens/s",
          en: "Xiaomi MiMo Breaks 1000 tps",
        },
        description: {
          zh: "小米 MiMo 发布 MiMo-V2.5-Pro-UltraSpeed，首次在 1T MoE 模型上实现超 1000 tokens/s 输出速度，仅用单台 8-GPU 节点。",
          en: "Xiaomi MiMo released UltraSpeed, first to achieve 1000+ tps on 1T MoE model with single 8-GPU node.",
        },
      },
      {
        title: {
          zh: "苹果发布第三代 Apple Foundation Models",
          en: "Apple Releases AFM3",
        },
        description: {
          zh: "苹果推出第三代 AFM 基础模型家族，与 Google 合作定制，覆盖设备端到服务器端，以隐私为核心设计原则。",
          en: "Apple launched 3rd generation AFM with Google, covering device to server with privacy-first design.",
        },
      },
      {
        title: {
          zh: "高德发布 3D 原生城市世界模型",
          en: "Amap Releases 3D City World Model",
        },
        description: {
          zh: "高德发布 ABot-Earth0.5，全球首个 3D 原生城市世界模型，10 分钟在消费级 GPU 生成公里级 3D 城市，成本为传统百分之一。",
          en: "Amap released ABot-Earth0.5, world's first 3D city model, generating km-level 3D cities in 10 min on consumer GPU.",
        },
      },
      {
        title: {
          zh: "OpenAI 向 SEC 机密提交 S-1 草案",
          en: "OpenAI Files S-1 Confidentially",
        },
        description: {
          zh: "OpenAI 近日向 SEC 机密提交了 S-1 草案，目前尚未决定上市时间。",
          en: "OpenAI submitted S-1 draft to SEC confidentially, IPO timing undecided.",
        },
      },
      {
        title: {
          zh: "NVIDIA 与 LG 合作建设 AI 工厂",
          en: "NVIDIA LG AI Factory Partnership",
        },
        description: {
          zh: "NVIDIA 与 LG 集团合作建设 AI 工厂，为机器人、自动驾驶、数据中心提供加速计算基础设施。",
          en: "NVIDIA partnered with LG Group to build AI factory for robotics, autonomous driving, and data centers.",
        },
      },
      {
        title: {
          zh: "Perplexity + 哈佛：AI 智能体提效 87%",
          en: "Perplexity Harvard: AI Agents 87% Faster",
        },
        description: {
          zh: "哈佛研究显示，使用 AI 智能体的工人比仅用搜索快 87%，成本低 94%。",
          en: "Harvard study: workers using AI agents are 87% faster and 94% cheaper than search-only.",
        },
      },
    ],
  },
  {
    id: "2026-06-08",
    date: "2026-06-08",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-08",
      en: "🤖 AI HOT Daily · Jun 8, 2026",
    },
    summary: {
      zh: "ChatGPT 将转型超级应用、Harness-1 发布 20B 检索智能体、RTX Spark 登陆韩国、苹果秘密会议誓做 AI、Opus 缓存价格可实时查看。",
      en: "ChatGPT becomes super app, Harness-1 20B retrieval agent, RTX Spark in Korea, Apple AI secret meeting, Opus cache pricing visible.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "ChatGPT 转型超级应用 AgentGPT",
          en: "ChatGPT Becomes AgentGPT Super App",
        },
        description: {
          zh: "OpenAI 正筹备自 2022 年上线以来最大改版，从聊天机器人转向超级应用/Agent 平台，目标成为跨平台个人 AI 助手。",
          en: "OpenAI plans biggest overhaul since 2022, pivoting ChatGPT from chatbot to super app/agent platform, targeting cross-platform AI assistant.",
        },
      },
      {
        title: {
          zh: "Harness-1: 20B 强化学习检索智能体",
          en: "Harness-1: 20B RL Retrieval Subagent",
        },
        description: {
          zh: "UIUC 与 Chroma 联合发布 Harness-1，20B 参数检索子智能体，通过强化学习训练，在 8 个基准测试达 0.730 平均召回率。",
          en: "UIUC & Chroma released Harness-1, a 20B param RL-trained retrieval subagent, achieving 0.730 average recall on 8 benchmarks.",
        },
      },
      {
        title: {
          zh: "RTX Spark 登陆韩国：NVIDIA 与游戏厂商合作",
          en: "RTX Spark Launches in Korea",
        },
        description: {
          zh: "NVIDIA CEO 黄仁勋赴韩发布 RTX Spark 超芯片，可实现 Windows 笔记本全天续航，以 144p 运行 AAA 游戏超 100fps。",
          en: "NVIDIA CEO Jensen Huang launched RTX Spark in Korea, enabling all-day Windows laptop battery life with 1440p 100fps+ gaming.",
        },
      },
      {
        title: {
          zh: "苹果秘密会议：终于认真对待 AI",
          en: "Apple Secret Meeting: Finally Serious About AI",
        },
        description: {
          zh: "苹果内部秘密会议后决定将 AI 作为核心战略，相关进展预计在 WWDC 2026 公布。",
          en: "After internal secret meeting, Apple decided to make AI a core strategy, with announcements expected at WWDC 2026.",
        },
      },
      {
        title: {
          zh: "Opus 4.8 缓存命中率与价格可实时查看",
          en: "Opus 4.8 Cache Hit Rate Now Visible",
        },
        description: {
          zh: "OpenRouter 现支持从 Pricing 标签实时查看各模型缓存命中率和历史流量。",
          en: "OpenRouter now shows real-time cache hit rates and historical traffic via Pricing tab.",
        },
      },
      {
        title: {
          zh: "Her: Claude Code 会话分析工具",
          en: "Her: Claude Code Session Analyzer",
        },
        description: {
          zh: "Her 是 Claude Code 专用会话分析工具，上传 .jsonl 文件后可重建交互、标记高风险操作、展示 token 消耗和建议。",
          en: "Her is a Claude Code session analyzer - upload .jsonl to reconstruct interactions, flag risky ops, and show token usage.",
        },
      },
    ],
  },
  {
    id: "2026-06-07",
    date: "2026-06-07",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-07",
      en: "🤖 AI HOT Daily · Jun 7, 2026",
    },
    summary: {
      zh: "GitHub 发布 Spec Kit 引导 AI 编码、OpenCV 5 原生支持大模型、谷歌每月支付 SpaceX 92亿美元获取算力、阶跃张祥雨合著 ResNet 获 CVPR 时间检验奖。",
      en: "GitHub Spec Kit for AI coding, OpenCV 5 native LLM support, Google pays SpaceX $920M/mo compute, StepFun ResNet CVPR award.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "GitHub Spec Kit：产品规范引导 AI 编码",
          en: "GitHub Spec Kit: Product Specs Guide AI Coding",
        },
        description: {
          zh: "GitHub 开源 Spec Kit 工具包，解决 vibe coding 弱点，推动先写产品规范再让 AI 实现，支持 30+ agent 集成。",
          en: "GitHub released Spec Kit to solve vibe coding weakness - write specs first, then let AI implement. Supports 30+ agents.",
        },
      },
      {
        title: {
          zh: "OpenCV 5 发布：原生支持大模型",
          en: "OpenCV 5 Released: Native LLM Support",
        },
        description: {
          zh: "OpenCV 5 升级全新 DNN 引擎，ONNX 算子覆盖率从 23% 提升至超 80%，原生支持 Transformer、VLM、LLM。",
          en: "OpenCV 5 launches with graph-based DNN engine, ONNX coverage from <23% to 80%+, native Transformer/VLM/LLM support.",
        },
      },
      {
        title: {
          zh: "谷歌每月支付 SpaceX 92亿美元",
          en: "Google Pays SpaceX $920M/Month",
        },
        description: {
          zh: "谷歌与 SpaceX 达成协议，每月支付 9.2 亿美元获取 xAI 数据中心计算能力。",
          en: "Google & SpaceX deal: Google pays $920M/month for xAI data center compute capacity.",
        },
      },
      {
        title: {
          zh: "阶跃张祥雨 ResNet 获 CVPR 时间检验奖",
          en: "StepFun ResNet Wins CVPR Test of Time",
        },
        description: {
          zh: "阶跃星辰首席科学家张祥雨合著论文 ResNet 获得 CVPR 2026「时间检验奖」。",
          en: "StepFun chief scientist Zhang Xiangyu co-authored ResNet paper winning CVPR 2026 Test of Time Award.",
        },
      },
      {
        title: {
          zh: "MiniMax 海螺 AI 牵手上海国际电影节",
          en: "MiniMax Sea Shell AI at Shanghai Film Festival",
        },
        description: {
          zh: "海螺 AI 作为第 28 届上影节独家 AI 影像战略合作伙伴，6.14-6.15 举办开放日活动。",
          en: "Sea Shell AI is exclusive AI imaging partner for Shanghai Intl Film Festival, open days June 14-15.",
        },
      },
    ],
  },
  {
    id: "2026-06-07-hot",
    date: "2026-06-07",
    title: {
      zh: "🔥 今日热搜 · 2026-06-07",
      en: "🔥 Hot Search · Jun 7, 2026",
    },
    summary: {
      zh: "2026高考今日开考、张桂梅送考与学生齐唱万疆、暴雨预警升级5省有大暴雨、工资或多一笔钱、宇树回应联手英伟达、伊朗世界杯代表团遭美拒签。",
      en: "Gaokao 2026 begins today, Zhang Guimei sings with students, heavy rain warning for 5 provinces, salary boost, Unitree responds to Nvidia, Iran World Cup team denied US visa.",
    },
    category: "hot-news",
    items: [
      {
        title: { zh: "2026高考今日开考", en: "Gaokao 2026 Begins Today" },
        description: {
          zh: "2026年全国高考今日拉开帷幕，数百万考生走进考场。",
          en: "The 2026 national Gaokao kicks off today with millions of students entering exam halls.",
        },
      },
      {
        title: {
          zh: "张桂梅送考与学生齐唱《万疆》",
          en: "Zhang Guimei Sees Off Students, Sings Together",
        },
        description: {
          zh: "张桂梅在送考路上与学生们齐唱《万疆》，感人场景登上热搜。",
          en: "Zhang Guimei saw off students singing 'Wanqiang' together — an emotional trending moment.",
        },
      },
      {
        title: {
          zh: "暴雨预警升级橙色！5省有大暴雨",
          en: "Heavy Rain Warning: 5 Provinces",
        },
        description: {
          zh: "中央气象局发布暴雨橙色预警，鄂皖等5省份将遭遇大暴雨。",
          en: "Orange heavy rain warning issued, with Hubei, Anhui and 3 other provinces expecting severe storms.",
        },
      },
      {
        title: {
          zh: "本月起工资或多一笔钱",
          en: "Salary Extra Payment This Month",
        },
        description: {
          zh: "多地高温补贴发放季来临，部分地区6月起津贴开始发放。",
          en: "High temperature subsidies begin in many regions this month.",
        },
      },
      {
        title: {
          zh: "宇树回应联手英伟达",
          en: "Unitree Responds to Nvidia Partnership",
        },
        description: {
          zh: "宇树科技就与英伟达合作传闻作出回应，引发科技圈关注。",
          en: "Unitree Tech responded to Nvidia partnership rumors, drawing tech community attention.",
        },
      },
      {
        title: {
          zh: "伊朗世界杯代表团遭美拒签",
          en: "Iran World Cup Delegation Denied US Visa",
        },
        description: {
          zh: "伊朗世界杯代表团十余人在美签证遭拒，风波持续发酵。",
          en: "Iran World Cup delegation members denied US visas, sparking controversy.",
        },
      },
      {
        title: {
          zh: "高考后需警惕高发骗局",
          en: "Post-Gaokao Fraud Prevention",
        },
        description: {
          zh: "警方提醒：警惕志愿填报诈骗、虚假录取通知书等骗局。",
          en: "Police alert graduates to fraud: fake admission notices, scholarship scams.",
        },
      },
      {
        title: {
          zh: "人数降了招生多了这届高考难吗",
          en: "Fewer Test Takers, More Admissions",
        },
        description: {
          zh: "今年高考报名人数下降但招生扩大，考生热议是否难度降低。",
          en: "With fewer test-takers but expanded admissions, debate heats up over difficulty.",
        },
      },
    ],
  },
  {
    id: "2026-06-06-hot",
    date: "2026-06-06",
    title: {
      zh: "热点快报 · 2026-06-06",
      en: "Hot News Brief · Jun 6, 2026",
    },
    summary: {
      zh: "医保个人账户跨省共济正式落地，高考诚信与安检提醒升级，酒店卫生争议带火“牙科蓝膜”，我国航天和能源等领域迎来集中突破，全球首款硅基氮化镓射频芯片交付，多地发布暴雨预警，智能眼镜偷拍隐患引发关注，公积金提取规则修订征求意见。",
      en: "Cross-province sharing of personal medical-insurance accounts went live, gaokao integrity and security reminders intensified, hotel hygiene concerns boosted dental barrier-film sales, China saw a cluster of breakthroughs across aerospace and energy, the first silicon-based GaN RF chip was delivered, heavy-rain alerts were issued in multiple regions, smart-glass privacy risks drew attention, and revised housing-fund withdrawal rules entered consultation.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "医保个人账户跨省共济落地",
          en: "Cross-Province Medical Account Sharing Goes Live",
        },
        description: {
          zh: "6 月起职工医保个人账户实现全国跨省共济，近亲属可跨省使用额度支付就医购药自费或居民医保、长护险缴费。",
          en: "From June, employee medical-insurance personal accounts can be shared nationwide across provinces for close relatives' out-of-pocket care, medicine purchases, and some insurance payments.",
        },
      },
      {
        title: {
          zh: "高考诚信与安检提醒升级",
          en: "Gaokao Integrity and Security Warnings Intensify",
        },
        description: {
          zh: "公安和教育部门高考前再次提醒，严打涉考违法行为，手机、智能手表和智能眼镜等带入考场即会被认定为作弊。",
          en: "Ahead of the gaokao, public-security and education authorities renewed warnings that exam-related crimes will be punished and devices like phones, smartwatches, and smart glasses count as cheating if taken into test rooms.",
        },
      },
      {
        title: {
          zh: "酒店卫生争议带火“牙科蓝膜”",
          en: "Hotel Hygiene Concerns Boost Dental Barrier Film Sales",
        },
        description: {
          zh: "多家酒店问题曝光后，旅客自带隔脏用品的讨论升温，原本用于牙科诊所的“牙科蓝膜”销量迅速攀升。",
          en: "After hotel cleanliness issues were exposed, discussion around bringing personal protective supplies surged and sales of dental barrier film climbed quickly.",
        },
      },
      {
        title: {
          zh: "多领域迎来硬核科技突破",
          en: "Multiple Fields See Major Tech Breakthroughs",
        },
        description: {
          zh: "本周我国在航天、清洁能源和农业等方向接连出现重大进展，成为当天最受关注的综合科技热点之一。",
          en: "China logged notable advances this week across aerospace, clean energy, and agriculture, making it one of the day's biggest broad technology storylines.",
        },
      },
      {
        title: {
          zh: "硅基氮化镓射频芯片完成交付",
          en: "Silicon-Based GaN RF Chip Delivered",
        },
        description: {
          zh: "全球首款硅基氮化镓射频芯片完成交付，显示高端射频器件和通信芯片能力继续向前推进。",
          en: "The world's first silicon-based gallium-nitride RF chip was delivered, highlighting continued progress in high-end RF and communications components.",
        },
      },
      {
        title: {
          zh: "多地发布暴雨预警",
          en: "Heavy Rain Alerts Issued Across Multiple Regions",
        },
        description: {
          zh: "中央气象部门继续发布暴雨蓝色预警，山东、河南、湖北、四川、重庆、贵州、湖南等地需加强防范。",
          en: "Weather authorities kept a blue heavy-rain alert in place for parts of Shandong, Henan, Hubei, Sichuan, Chongqing, Guizhou, and Hunan.",
        },
      },
      {
        title: {
          zh: "智能眼镜偷拍隐患受关注",
          en: "Smart-Glass Hidden Recording Risks Draw Concern",
        },
        description: {
          zh: "媒体调查显示，部分智能眼镜用户社区存在大量偷拍内容，公众对隐私边界和设备监管的担忧升温。",
          en: "A media investigation found hidden-recording content in some smart-glass user communities, raising concerns about privacy boundaries and device oversight.",
        },
      },
      {
        title: {
          zh: "公积金提取规则修订征求意见",
          en: "Revised Housing Fund Withdrawal Rules Seek Feedback",
        },
        description: {
          zh: "住建部就公积金条例修订稿征求意见，拟明确 9 类提取情形，并把装修、物业费等新场景纳入讨论。",
          en: "China's housing ministry opened consultation on revised housing-fund rules, proposing nine withdrawal scenarios and discussing new uses such as renovation and property fees.",
        },
      },
    ],
  },
  {
    id: "2026-06-06",
    date: "2026-06-06",
    title: {
      zh: "AI HOT 日报 · 2026-06-06",
      en: "AI HOT Daily · Jun 6, 2026",
    },
    summary: {
      zh: "OpenRouter 上线可控图像模型 Riverflow 2.5，Gemini Live 支持实时生成与编辑图像，Google 集中更新 Nano Banana 2、Co-Scientist、dreambeans 与 Gemma 4，Colab CLI 让本地终端直连云端 GPU，Cloudflare 为 AI Gateway 增加花费上限，ChatGPT 网页版支持直接发邮件，Anthropic 获 350 亿美元芯片融资，Agent Arena 用真实任务给主流智能体排位。",
      en: "OpenRouter launched the controllable image model Riverflow 2.5, Gemini Live gained real-time image editing, Google rolled out Nano Banana 2, Co-Scientist, dreambeans, and Gemma 4 updates, Colab CLI linked local terminals to cloud GPUs, Cloudflare added spend limits to AI Gateway, ChatGPT web gained direct email sending, Anthropic lined up $35B for AI chips, and Agent Arena ranked leading agents on real-world tasks.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Riverflow 2.5",
          en: "Riverflow 2.5",
        },
        description: {
          zh: "OpenRouter 上线可调评分标准的图像模型，可在速度、质量和推理强度之间做权衡。",
          en: "OpenRouter added an image model with adjustable scoring rules so users can trade off speed, quality, and reasoning effort.",
        },
      },
      {
        title: {
          zh: "Gemini Live 实时修图",
          en: "Gemini Live Real-Time Image Editing",
        },
        description: {
          zh: "Gemini Live 现在能一边对话一边实时生成和修改图像，适合场景预览、解题和梗图制作。",
          en: "Gemini Live can now generate and edit images during live conversations for room previews, problem solving, and meme creation.",
        },
      },
      {
        title: {
          zh: "Google AI 本周更新包",
          en: "Google AI Weekly Product Bundle",
        },
        description: {
          zh: "Nano Banana 2 正式可用，Co-Scientist 面向科研，dreambeans 和 Gemma 4 继续扩展多模态与离线能力。",
          en: "Nano Banana 2 reached general availability, Co-Scientist targeted research workflows, and dreambeans plus Gemma 4 pushed multimodal and offline use further.",
        },
      },
      {
        title: {
          zh: "Google Colab CLI",
          en: "Google Colab CLI",
        },
        description: {
          zh: "新 CLI 可把本地终端接到远程 Colab 运行时，方便申请 GPU、跑脚本和查看工件日志。",
          en: "The new CLI connects a local terminal to remote Colab runtimes for requesting GPUs, running scripts, and checking artifacts.",
        },
      },
      {
        title: {
          zh: "Cloudflare AI Gateway 花费上限",
          en: "Cloudflare AI Gateway Spend Limits",
        },
        description: {
          zh: "Cloudflare 为 AI Gateway 增加实时预算限制，帮助企业控制多家模型供应商的 token 成本。",
          en: "Cloudflare added real-time budget limits to AI Gateway so teams can keep multi-provider token spending under control.",
        },
      },
      {
        title: {
          zh: "ChatGPT 网页版发邮件",
          en: "ChatGPT Web Email Sending",
        },
        description: {
          zh: "网页版 ChatGPT 可直接在写作块里起草、调整并发送邮件，不用离开当前对话。",
          en: "ChatGPT on the web can now draft, revise, and send emails directly from the writing block without leaving the conversation.",
        },
      },
      {
        title: {
          zh: "Anthropic 350 亿美元芯片融资",
          en: "Anthropic's $35B Chip Financing",
        },
        description: {
          zh: "Apollo 和 Blackstone 为 Anthropic 敲定 350 亿美元融资，继续扩建 AI 基础设施。",
          en: "Apollo and Blackstone finalized $35 billion in financing for Anthropic to keep expanding AI infrastructure.",
        },
      },
      {
        title: {
          zh: "Agent Arena",
          en: "Agent Arena",
        },
        description: {
          zh: "Arena 发布真实任务智能体排行榜，用大量任务、工具调用和代码量评测主流模型的实战表现。",
          en: "Arena launched a real-world agent leaderboard that scores major models on large volumes of tasks, tool calls, and code output.",
        },
      },
    ],
  },
  {
    id: "2026-06-05-hot",
    date: "2026-06-05",
    title: {
      zh: "热点快报 · 2026-06-05",
      en: "Hot News Brief · Jun 5, 2026",
    },
    summary: {
      zh: "高考前夕“最后一课”走红，广西粉店因王祖蓝团队拍摄引发清场误会获通报，多地辟谣汛情旧闻，八国外长就耶路撒冷宗教圣地紧张局势发联合声明，“985+211”路牌成高考打卡点，国内乘用车 12 年平均增重近 400 公斤，绿皮车全面禁烟呼声升温，荔枝龙眼杂交新品种“怀石”首次亮相。",
      en: "An emotional final pre-gaokao class went viral, a Guangxi noodle-shop filming misunderstanding involving Wong Cho-lam drew an official notice, authorities debunked several flood rumors, eight foreign ministers issued a joint statement on tensions at a Jerusalem holy site, a '985+211' road sign became a gaokao photo spot, passenger cars gained nearly 400 kg on average over 12 years, calls for full smoking bans on green trains intensified, and the new lychee-longan hybrid 'Huaishi' made its debut.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "“最后一课”老师哽咽走红",
          en: "Emotional Final Class Before Gaokao Goes Viral",
        },
        description: {
          zh: "高考前一位老师在“最后一课”上笑着送祝福却忍不住落泪，相关画面引发大量网友共鸣。",
          en: "A teacher's emotional final class before the gaokao, meant as a cheerful send-off, ended in tears and resonated widely online.",
        },
      },
      {
        title: {
          zh: "王祖蓝拍摄引发粉店清场误会",
          en: "Filming Misunderstanding at Noodle Shop Draws Official Response",
        },
        description: {
          zh: "广西一粉店顾客称因王祖蓝团队拍摄被要求离场，当地通报称并未安排清场，主要是现场沟通不当造成误解。",
          en: "After diners said they were asked to leave during a shoot involving Wong Cho-lam's team, local authorities said no formal clearance was arranged and blamed poor on-site communication.",
        },
      },
      {
        title: {
          zh: "多地汛情旧闻被集中辟谣",
          en: "Authorities Debunk Viral Flood Misinformation",
        },
        description: {
          zh: "多条网传“洪水灾情”信息被证实为旧闻或编造，相关造谣和误传线索已被查处。",
          en: "Several viral flood-disaster posts were identified as old or fabricated stories, and authorities said related misinformation cases were being handled.",
        },
      },
      {
        title: {
          zh: "八国外长就圣地局势发联合声明",
          en: "Eight Foreign Ministers Issue Joint Statement on Holy Site Tensions",
        },
        description: {
          zh: "巴基斯坦、埃及、土耳其等八国外长就耶路撒冷宗教圣地局势发表联合声明，呼吁尊重现状并避免紧张升级。",
          en: "Foreign ministers from Pakistan, Egypt, Turkey and five other countries issued a joint statement calling for restraint and respect for the status quo at a Jerusalem holy site.",
        },
      },
      {
        title: {
          zh: "“985+211”路牌成高考打卡点",
          en: "'985+211' Road Sign Becomes a Gaokao Photo Spot",
        },
        description: {
          zh: "陕西一块写有 G211 国道 985 公里处的路牌因数字组合巧合走红，成了不少考生家长的打卡祝福点。",
          en: "A road sign marking kilometer 985 on China's G211 highway went viral because its numbers echo elite university labels, turning it into a gaokao good-luck stop.",
        },
      },
      {
        title: {
          zh: "乘用车 12 年平均增重近 400 公斤",
          en: "Passenger Cars Gain Nearly 400 kg in 12 Years",
        },
        description: {
          zh: "数据显示国内乘用车平均整备质量较 2012 年增加近 400 公斤，电池包、更大车身和舒适配置是主要推力。",
          en: "New data suggests average passenger-car curb weight has risen by nearly 400 kg since 2012, largely driven by battery packs, larger bodies, and added comfort features.",
        },
      },
      {
        title: {
          zh: "绿皮车全面禁烟呼声升温",
          en: "Calls Grow for a Full Smoking Ban on Green Trains",
        },
        description: {
          zh: "多家控烟组织联合建议普通列车及相关站台全面禁烟，相关公共健康讨论持续升温。",
          en: "Anti-smoking groups jointly called for full smoking bans on ordinary green trains and related platforms, pushing the public-health debate further.",
        },
      },
      {
        title: {
          zh: "荔枝龙眼杂交新品种“怀石”亮相",
          en: "New Lychee-Longan Hybrid 'Huaishi' Debuts",
        },
        description: {
          zh: "广东发布全球首个以荔枝和龙眼为亲本的杂交新品种“怀石”，主打早熟、甜脆和填补优质早熟资源空白。",
          en: "Researchers in Guangdong introduced 'Huaishi,' described as the world's first hybrid bred from lychee and longan parent lines, featuring early ripening and a crisp, sweet profile.",
        },
      },
    ],
  },
  {
    id: "2026-06-05",
    date: "2026-06-05",
    title: {
      zh: "AI HOT 日报 · 2026-06-05",
      en: "AI HOT Daily · Jun 5, 2026",
    },
    summary: {
      zh: "NVIDIA 推出可定制多模态安全模型 Nemotron 3.5 Content Safety，Nex-N2-Pro 以 397B MoE 架构冲击顶级推理性能，Google 发布实时音乐模型 MRT2，Replit 联手 Shopify 加速建店，ChatGPT 推出更强记忆系统 Dreaming，OpenAI API 新增审核评分，OpenJarvis 强调本地优先个人智能体，全球机器人流量首次超过人类网页流量。",
      en: "NVIDIA launched the customizable multimodal safety model Nemotron 3.5 Content Safety, Nex-N2-Pro pushed a 397B MoE reasoning model toward top-tier performance, Google released the real-time music model MRT2, Replit teamed up with Shopify to speed up store creation, ChatGPT introduced its stronger Dreaming memory system, OpenAI APIs added moderation scores, OpenJarvis advanced a local-first personal agent framework, and bot traffic surpassed human web traffic for the first time.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Nemotron 3.5 Content Safety",
          en: "Nemotron 3.5 Content Safety",
        },
        description: {
          zh: "面向企业的多模态安全模型，支持自定义策略、统一审查文本与图像，并提供可审计推理轨迹。",
          en: "Enterprise-focused multimodal safety model with custom policies, unified text and image review, and auditable reasoning traces.",
        },
      },
      {
        title: {
          zh: "Nex-N2-Pro",
          en: "Nex-N2-Pro",
        },
        description: {
          zh: "基于 Qwen3.5 的 397B MoE 推理模型，支持超长上下文和多模态，主打更深推理与更低思考 token 成本。",
          en: "A 397B MoE reasoning model based on Qwen3.5, supporting ultra-long context and multimodal input with deeper reasoning at lower token cost.",
        },
      },
      {
        title: {
          zh: "Google MRT2",
          en: "Google MRT2",
        },
        description: {
          zh: "Google 发布实时音乐模型 MRT2，可通过 MIDI、文本提示和手势实时演奏，延迟控制在 200ms 以内。",
          en: "Google released MRT2, a real-time music model playable through MIDI, text prompts, and gestures with sub-200ms latency.",
        },
      },
      {
        title: {
          zh: "Replit + Shopify",
          en: "Replit + Shopify",
        },
        description: {
          zh: "Replit Agent 与 Shopify 合作，帮助用户用自然语言快速搭建并上线自定义店铺。",
          en: "Replit Agent partnered with Shopify to help users build and launch custom stores from natural language prompts.",
        },
      },
      {
        title: {
          zh: "ChatGPT Dreaming",
          en: "ChatGPT Dreaming",
        },
        description: {
          zh: "ChatGPT 推出 Dreaming 记忆系统，强化跨会话记忆和个性化响应，让长期对话更连贯。",
          en: "ChatGPT introduced Dreaming, a stronger memory system for better cross-conversation recall and personalization.",
        },
      },
      {
        title: {
          zh: "OpenAI API moderation scores",
          en: "OpenAI API moderation scores",
        },
        description: {
          zh: "OpenAI 在 Responses API 和 Completions API 中加入审核评分，便于应用在生成流程中直接记录、路由或拦截内容。",
          en: "OpenAI added moderation scores to the Responses and Completions APIs so apps can log, route, review, or block content in the same generation flow.",
        },
      },
      {
        title: {
          zh: "OpenJarvis",
          en: "OpenJarvis",
        },
        description: {
          zh: "Stanford 团队发布本地优先的个人 AI 智能体框架 OpenJarvis，把推理、记忆、工具和学习都放到设备端。",
          en: "Stanford researchers released OpenJarvis, a local-first personal AI agent framework that keeps reasoning, memory, tools, and learning on-device.",
        },
      },
      {
        title: {
          zh: "Cloudflare Radar",
          en: "Cloudflare Radar",
        },
        description: {
          zh: "Cloudflare Radar 显示，最近一周全球 HTML 请求中机器人流量首次超过人类，占比达到 57.5%。",
          en: "Cloudflare Radar reported that bot traffic made up 57.5% of global HTML requests over the past week, surpassing human traffic for the first time.",
        },
      },
    ],
  },
  {
    id: "2026-06-04-hot",
    date: "2026-06-04",
    title: {
      zh: "热点快报 · 2026-06-04",
      en: "Hot News Brief · Jun 4, 2026",
    },
    summary: {
      zh: "全球半导体市场冲向 10 万亿元级，中国“水上电梯”进入调试，卢拉强调外贸主动权，宇树机器人登上《美国达人秀》，高考考场设备管理再提醒，健康体重管理持续升温，存储芯片价格上涨，中国球员李昊炎签约巴萨青训。",
      en: "Global semiconductors are pushing toward a 10-trillion-yuan scale, China's 'water elevator' enters testing, Lula stresses trade flexibility, a Unitree robot appears on America's Got Talent, exam-device rules tighten, healthy weight management stays in focus, memory prices keep rising, and Chinese prospect Li Haoyan signs with Barcelona's youth system.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "全球半导体市场冲向 10 万亿元级",
          en: "Global Semiconductor Market Eyes a 10-Trillion-Yuan Scale",
        },
        description: {
          zh: "受 AI 和数据中心需求拉动，机构预计 2026 年全球半导体市场规模有望突破 1.5 万亿美元。",
          en: "Driven by AI and data-center demand, forecasts say the global semiconductor market could top $1.5 trillion in 2026.",
        },
      },
      {
        title: {
          zh: "中国“水上电梯”进入调试阶段",
          en: "China's 'Water Elevator' Enters Testing",
        },
        description: {
          zh: "平陆运河全线通水后进入调试，关键船闸和枢纽工程刷新多项世界纪录。",
          en: "China's Pinglu Canal moved into testing after full water access, with major locks and hubs setting multiple world records.",
        },
      },
      {
        title: {
          zh: "卢拉重申外贸不只看美国",
          en: "Lula Reiterates That Brazil's Trade Is Not Limited to the U.S.",
        },
        description: {
          zh: "巴西总统卢拉表示，如果美国不买，巴西就卖给愿意买的国家，强调对外合作要保留主动空间。",
          en: "Brazil's president Lula said if the U.S. will not buy, Brazil will sell to countries that will, underscoring a flexible trade stance.",
        },
      },
      {
        title: {
          zh: "宇树机器人登上《美国达人秀》晋级",
          en: "Unitree Robot Advances on America's Got Talent",
        },
        description: {
          zh: "中国机器人在节目中完成高难度表演并获得通过，再次把国产机器人带到国际公众视野。",
          en: "A Chinese Unitree robot delivered a high-difficulty performance on America's Got Talent and advanced to the next round.",
        },
      },
      {
        title: {
          zh: "高考再提醒：带手机进考场也算作弊",
          en: "Gaokao Warning: Bringing a Phone into the Exam Hall Counts as Cheating",
        },
        description: {
          zh: "教育部门强调，无论是否使用，手机、智能手表、智能眼镜等带入考场都将被认定为作弊。",
          en: "Education authorities warned that bringing phones, smartwatches, or smart glasses into exam halls counts as cheating, even if they are not used.",
        },
      },
      {
        title: {
          zh: "“体重管理年”强调长期健康习惯",
          en: "National Weight Management Push Focuses on Long-Term Habits",
        },
        description: {
          zh: "讨论焦点正从单纯减肥转向可持续的饮食、运动和生活方式管理。",
          en: "The discussion is shifting from simple weight loss to sustainable diet, exercise, and lifestyle management.",
        },
      },
      {
        title: {
          zh: "存储芯片价格继续走高",
          en: "Memory Chip Prices Keep Climbing",
        },
        description: {
          zh: "DRAM 和 NAND 价格持续上涨，AI 与数据中心需求继续推高行业景气度。",
          en: "DRAM and NAND prices continue to rise as AI and data-center demand keeps lifting the memory industry's outlook.",
        },
      },
      {
        title: {
          zh: "李昊炎签约巴萨 U15 梯队",
          en: "Li Haoyan Signs with Barcelona's U15 Team",
        },
        description: {
          zh: "14 岁中国球员李昊炎正式加入巴萨 U15 梯队，成为中国球员进入巴萨青训体系的重要节点。",
          en: "Chinese teenager Li Haoyan officially joined Barcelona's U15 side, marking a notable milestone for Chinese youth football.",
        },
      },
    ],
  },
  {
    id: "2026-06-04",
    date: "2026-06-04",
    title: {
      zh: "AI HOT 日报 · 2026-06-04",
      en: "AI HOT Daily · Jun 4, 2026",
    },
    summary: {
      zh: "Grok Imagine 1.5 预览版发布，MiniMax M3 在 1M token 解码上大幅提速，Miso One 开源语音模型亮相，Meta 将 WhatsApp Business AI 智能体推向全球，微软与 OpenAI 竞争进一步公开化，欧盟启动技术主权计划，ChatGPT 月活突破 10 亿。",
      en: "Grok Imagine 1.5 enters preview, MiniMax M3 sharply improves 1M-token decoding, the open-source voice model Miso One debuts, Meta rolls out WhatsApp Business AI agents globally, Microsoft and OpenAI move into more direct competition, the EU launches a tech sovereignty plan, and ChatGPT monthly active users pass 1 billion.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Grok Imagine 1.5 预览版发布",
          en: "Grok Imagine 1.5 Preview Released",
        },
        description: {
          zh: "Grok Imagine 1.5 预览版已经开放体验，xAI 继续把图像生成能力推进到更完整的 API 产品线中。",
          en: "Grok Imagine 1.5 preview is now available, extending xAI's image generation capability into a broader API-facing product line.",
        },
      },
      {
        title: {
          zh: "MiniMax M3 在 1M token 解码上提速 15.6 倍",
          en: "MiniMax M3 Gets 15.6x Faster at 1M-Token Decoding",
        },
        description: {
          zh: "MiniMax 表示 M3 在超长上下文解码效率上继续提升，重点强化了大上下文推理与实际部署可用性。",
          en: "MiniMax says M3 significantly improves ultra-long-context decoding efficiency, pushing practical deployment for large-context reasoning further forward.",
        },
      },
      {
        title: {
          zh: "Miso One 开源语音模型亮相",
          en: "Miso One Open-Source Voice Model Debuts",
        },
        description: {
          zh: "Miso One 以 8B 参数和低延迟为卖点，支持一次语音克隆，并主打本地部署场景下的语音生成能力。",
          en: "Miso One emphasizes its 8B scale, low latency, one-shot voice cloning, and support for local deployment in speech generation workflows.",
        },
      },
      {
        title: {
          zh: "Ideogram v4 支持 2K 输出与 JSON 提示",
          en: "Ideogram v4 Adds 2K Output and JSON Prompt Support",
        },
        description: {
          zh: "Ideogram v4 发布后，图像分辨率、文字渲染和结构化提示能力都进一步增强，适合更规范的设计生成流程。",
          en: "Ideogram v4 raises output resolution, strengthens text rendering, and adds structured JSON prompting for more controlled design workflows.",
        },
      },
      {
        title: {
          zh: "Meta 将 WhatsApp Business AI 智能体全球上线",
          en: "Meta Rolls Out WhatsApp Business AI Agents Globally",
        },
        description: {
          zh: "Meta 面向商家的 WhatsApp Business AI 智能体已开始全球铺开，企业端 AI 客服与自动化运营继续升温。",
          en: "Meta has started a global rollout of its WhatsApp Business AI agents, accelerating AI-powered support and automation for merchants.",
        },
      },
      {
        title: {
          zh: "微软与 OpenAI 的竞争进一步公开化",
          en: "Microsoft and OpenAI Competition Becomes More Public",
        },
        description: {
          zh: "随着微软强化自有 AI 能力，两家公司从深度合作逐步走向更明显的正面竞争，生态关系继续重组。",
          en: "As Microsoft strengthens its own AI stack, its relationship with OpenAI is shifting from tight partnership toward more visible head-to-head competition.",
        },
      },
      {
        title: {
          zh: "欧盟启动技术主权计划",
          en: "EU Launches a Tech Sovereignty Plan",
        },
        description: {
          zh: "欧盟公布新计划，重点推动芯片、AI 和云基础设施的本土能力建设，降低对外部供应链的依赖。",
          en: "The EU has unveiled a new plan to strengthen domestic capability in chips, AI, and cloud infrastructure while reducing reliance on outside supply chains.",
        },
      },
      {
        title: {
          zh: "ChatGPT 月活突破 10 亿",
          en: "ChatGPT Monthly Active Users Pass 1 Billion",
        },
        description: {
          zh: "市场统计显示 ChatGPT 月活规模继续扩大，达到 10 亿级别，说明通用 AI 产品渗透率仍在快速上升。",
          en: "Market estimates put ChatGPT monthly active users above 1 billion, showing that mass-market adoption of general AI products is still accelerating.",
        },
      },
    ],
  },
  {
    id: "2026-06-03",
    date: "2026-06-03",
    title: {
      zh: "📰 AI HOT 日报 · 2026-06-03",
      en: "📰 AI HOT Daily · Jun 3, 2026",
    },
    summary: {
      zh: "微软发布首款高级推理模型MAI-Thinking-1，Claude Code新增动态工作流，Codex发布Python SDK，Alphabet拟融资800亿美元，Anthropic提交IPO申请，SK海力士计划五年产能翻倍。",
      en: "Microsoft releases MAI-Thinking-1 reasoning model, Claude Code adds dynamic workflows, Codex launches Python SDK, Alphabet to raise $80B, Anthropic files IPO, SK Hynix to double wafer capacity.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "微软发布首款高级推理AI模型MAI-Thinking-1",
          en: "Microsoft Releases MAI-Thinking-1 Reasoning Model",
        },
        description: {
          zh: "微软在Build 2026上发布首款高级推理AI模型MAI-Thinking-1，定位中等规模，在关键软件工程基准测试中达到领先水平，完全从头使用干净数据训练。",
          en: "Microsoft unveiled MAI-Thinking-1 at Build 2026, its first advanced reasoning AI model positioned as medium-sized, achieving leading performance on key software engineering benchmarks with clean training data.",
        },
      },
      {
        title: {
          zh: "Holo3.1：快速本地计算机使用智能体",
          en: "Holo3.1: Fast Local Computer Use Agent",
        },
        description: {
          zh: "Holo3.1是基于Qwen模型家族的计算机使用智能体，提供0.8B、4B、9B和35B-A3B四种尺寸。在AndroidWorld基准测试中，35B-A3B模型得分从67%提升至79.3%。",
          en: "Holo3.1 is a computer-use agent based on the Qwen model family, available in four sizes: 0.8B, 4B, 9B, and 35B-A3B. The 35B-A3B model improved from 67% to 79.3% on AndroidWorld benchmark.",
        },
      },
      {
        title: {
          zh: "阶跃星辰Step 3.7 Flash发布，专为高效推理设计",
          en: "StepFun Step 3.7 Flash Released for Efficient Reasoning",
        },
        description: {
          zh: "阶跃星辰发布Step 3.7 Flash，196B MoE架构，采用多矩阵分解注意力机制，使KV-cache成本仅为DeepSeek模型的约22%，已通过Fireworks AI提供。",
          en: "StepFun released Step 3.7 Flash with 196B MoE architecture, using multi-matrix factorization attention reducing KV-cache cost to ~22% of DeepSeek, available via Fireworks AI.",
        },
      },
      {
        title: {
          zh: "Claude Code新增动态工作流功能",
          en: "Claude Code Adds Dynamic Workflows",
        },
        description: {
          zh: "Claude Code新增动态工作流功能，允许模型在运行时即兴创建和协调多智能体框架来处理复杂任务，适用于研究、安全分析、代码审查等场景。",
          en: "Claude Code introduced dynamic workflows, allowing models to spontaneously create and coordinate multi-agent frameworks for complex tasks like research, security analysis, and code review.",
        },
      },
      {
        title: {
          zh: "OpenAI Codex发布Python SDK",
          en: "OpenAI Codex Launches Python SDK",
        },
        description: {
          zh: "OpenAI Codex发布Python SDK，可直接嵌入应用，复用Codex登录态，相当于直接内置顶级编程和绘图智能体。",
          en: "OpenAI released Codex Python SDK, embeddable directly into applications with Codex login state reuse, essentially embedding a top-tier coding and image generation agent.",
        },
      },
      {
        title: {
          zh: "Alphabet拟融资800亿美元，Anthropic提交IPO申请",
          en: "Alphabet to Raise $80B, Anthropic Files IPO",
        },
        description: {
          zh: "Alphabet宣布拟通过股权融资800亿美元用于扩展AI基础设施。Anthropic已秘密提交IPO申请，在上市竞赛中领先于OpenAI。",
          en: "Alphabet announced $80B equity financing for AI infrastructure expansion. Anthropic confidentially filed IPO application, leading OpenAI in the上市 race.",
        },
      },
      {
        title: {
          zh: "SK海力士计划未来五年晶圆产能翻倍",
          en: "SK Hynix to Double Wafer Capacity in 5 Years",
        },
        description: {
          zh: "SK海力士会长崔泰源宣布，计划在未来五年内将整体晶圆产能提高一倍，以应对AI普及带来的持续存储供应短缺，预测供需紧张可能延续至2030年。",
          en: "SK Hynix Chairman Choi Tae-ung announced plans to double wafer capacity within five years to meet AI-driven storage demand, predicting supply tightness through 2030.",
        },
      },
      {
        title: {
          zh: "Anthropic扩展Project Glasswing计划至约150个新组织",
          en: "Anthropic Expands Project Glasswing to ~150 Organizations",
        },
        description: {
          zh: "Anthropic将Project Glasswing计划扩展至约150个新组织，分布于十五个国家，覆盖电力、水务、医疗、通信等关键基础设施行业。",
          en: "Anthropic expanded Project Glasswing to ~150 new organizations across 15 countries, covering critical infrastructure sectors like power, water, healthcare, and communications.",
        },
      },
      {
        title: {
          zh: "微软开源Adaptive Spec-driven Scoring评估框架",
          en: "Microsoft Open-Sources Adaptive Spec-driven Scoring",
        },
        description: {
          zh: "微软开源发布Adaptive Spec-driven Scoring框架，开发者可通过文本描述快速生成AI行为测试，用于模型评估与回归测试。",
          en: "Microsoft open-sourced Adaptive Spec-driven Scoring framework, enabling developers to quickly generate AI behavior tests via text descriptions for model evaluation and regression testing.",
        },
      },
      {
        title: {
          zh: "商汤开源SenseNova-Skills AI办公技能套件",
          en: "SenseTime Open-Sources SenseNova-Skills",
        },
        description: {
          zh: "商汤开源AI办公技能套件SenseNova-Skills，提供四大核心功能：图像信息图表生成、数据分析、PPT创建以及深度研究。",
          en: "SenseTime open-sourced SenseNova-Skills AI office toolkit with four core features: image infographics, data analysis, PPT creation, and deep research.",
        },
      },
      {
        title: {
          zh: "GitHub Copilot应用：智能体原生的桌面体验",
          en: "GitHub Copilot App: Agent-Native Desktop Experience",
        },
        description: {
          zh: "GitHub在Build 2026大会上发布Copilot应用，定位为智能体原生的桌面体验，让AI智能体能够以用户习惯的方式进行工作。",
          en: "GitHub unveiled Copilot app at Build 2026, positioned as an agent-native desktop experience enabling AI agents to work in ways users are already familiar with.",
        },
      },
      {
        title: {
          zh: "微软Aurora天气预报速度超传统超算数千倍",
          en: "Microsoft Aurora Weather Forecast 1000x Faster Than Supercomputers",
        },
        description: {
          zh: "微软研究实验室的Aurora天气预报系统速度比传统超级计算机快数千倍，展示AI在科学发现领域的突破性进展。",
          en: "Microsoft Research's Aurora weather forecasting system is thousands of times faster than traditional supercomputers, demonstrating breakthrough progress in AI-driven scientific discovery.",
        },
      },
    ],
  },
  {
    id: "2026-06-02",
    date: "2026-06-02",
    title: {
      zh: "📰 AI HOT 日报 · 2026-06-02",
      en: "📰 AI HOT Daily · Jun 2, 2026",
    },
    summary: {
      zh: "MiniMax M3、Composer 2.5 与 Qwen3.7-Plus 带来新一轮模型更新；OpenAI 与 Codex 登陆 AWS，ChatGPT 补齐长文编辑，Perplexity 推出 Search as Code；Anthropic 提交保密 S-1，OpenAI 启动密歇根 Stargate 数据中心。",
      en: "MiniMax M3, Composer 2.5, and Qwen3.7-Plus lead the latest model wave; OpenAI and Codex land on AWS, ChatGPT adds long-form editing, and Perplexity ships Search as Code; Anthropic files a confidential S-1 and OpenAI kicks off the Michigan Stargate data center.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "MiniMax M3 发布，主打超长上下文与编码能力",
          en: "MiniMax M3 Debuts with Long Context and Strong Coding",
        },
        description: {
          zh: "MiniMax M3 采用原生多模态设计，支持超长上下文，并以更低计算成本提升长文本和编程任务表现。",
          en: "MiniMax M3 pairs native multimodality with ultra-long context, aiming to improve coding and long-context tasks at lower compute cost.",
        },
      },
      {
        title: {
          zh: "xAI 上线 Composer 2.5",
          en: "xAI Launches Composer 2.5",
        },
        description: {
          zh: "Composer 2.5 已在 Grok Build 可用，主打更快的编程体验和更强的长任务处理能力。",
          en: "Composer 2.5 is now available in Grok Build, focusing on faster coding workflows and stronger long-running task execution.",
        },
      },
      {
        title: {
          zh: "Qwen3.7-Plus 强化多模态智能体能力",
          en: "Qwen3.7-Plus Expands Multimodal Agent Features",
        },
        description: {
          zh: "Qwen Studio 继续扩展聊天、图像理解、视频理解、文档处理、网页搜索和工具调用的一体化能力。",
          en: "Qwen Studio keeps expanding its all-in-one stack across chat, vision, video, documents, web search, and tool use.",
        },
      },
      {
        title: {
          zh: "OpenAI 与 Codex 现已可在 AWS 使用",
          en: "OpenAI and Codex Are Now Available on AWS",
        },
        description: {
          zh: "企业可以通过现有 AWS 环境接入 OpenAI 前沿模型与 Codex，减少采购和部署链路的切换成本。",
          en: "Enterprises can now access OpenAI frontier models and Codex inside existing AWS workflows, lowering deployment friction.",
        },
      },
      {
        title: {
          zh: "ChatGPT 增加长文编辑与保存功能",
          en: "ChatGPT Adds Long-Form Editing and Save Support",
        },
        description: {
          zh: "ChatGPT 现在支持更大的编辑空间和资料库保存，适合长文写作、整理和后续继续加工。",
          en: "ChatGPT now offers a roomier editor plus library saving, making long-form drafting and later continuation easier.",
        },
      },
      {
        title: {
          zh: "Perplexity 推出 Search as Code",
          en: "Perplexity Introduces Search as Code",
        },
        description: {
          zh: "Perplexity 将搜索能力直接开放给代码调用，降低智能体在复杂检索场景中的编排成本。",
          en: "Perplexity is exposing search as code-first infrastructure, reducing orchestration overhead for agent-style retrieval.",
        },
      },
      {
        title: {
          zh: "Anthropic 保密提交 S-1 草案",
          en: "Anthropic Confidentially Files an S-1 Draft",
        },
        description: {
          zh: "Anthropic 已向 SEC 保密提交上市申请草案，为后续 IPO 预留操作空间。",
          en: "Anthropic has confidentially filed an S-1 draft with the SEC, preserving the option for a future IPO.",
        },
      },
      {
        title: {
          zh: "OpenAI 启动密歇根 Stargate 数据中心",
          en: "OpenAI Starts the Michigan Stargate Data Center",
        },
        description: {
          zh: "OpenAI 在密歇根推进 1GW 级别的 Stargate 数据中心建设，继续加码 AI 基础设施。",
          en: "OpenAI has kicked off construction for its 1GW Stargate data center in Michigan, deepening its AI infrastructure push.",
        },
      },
    ],
  },
  {
    id: "2026-06-01",
    date: "2026-06-01",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-06-01",
      en: "🤖 AI HOT Daily · Jun 1, 2026",
    },
    summary: {
      zh: "OpenAI 进军机器人领域并启动招聘、苹果 WWDC 将推 Gemini 蒸馏模型本地运行、特斯拉 FSD 全球首次横穿加拿大全程零干预、DeepSeek V4 Flash 上线 OpenCode Zen。",
      en: "OpenAI enters robotics with hiring push, Apple WWDC to feature Gemini-distilled on-device models, Tesla FSD completes first coast-to-coast Canada drive zero-intervention, DeepSeek V4 Flash on OpenCode Zen.",
    },
    category: "ai-daily",
    items: [
      {
        title: { zh: "OpenAI 进军机器人领域", en: "OpenAI Enters Robotics" },
        description: {
          zh: "OpenAI 成立 OpenAI Robotics 团队，由 Aditya Ramesh 领导，招聘全栈硬件/系统/ML 工程师，短期支持技术工人，长期愿景为全民个人机器人。",
          en: "OpenAI launched its Robotics team led by Aditya Ramesh, hiring hardware/systems/ML engineers for short-term infrastructure and long-term personal robots for everyone.",
        },
      },
      {
        title: {
          zh: "苹果 WWDC：Gemini 蒸馏模型本地运行",
          en: "Apple WWDC: Gemini-Distilled On-Device Models",
        },
        description: {
          zh: "苹果 Siri 及设备端 AI 升级将在 iPhone 芯片本地运行 Gemini 蒸馏小模型，复杂查询路由至 Google Cloud，采用 Nvidia 机密计算。",
          en: "Apple's Siri and on-device AI upgrade runs Gemini-distilled models locally on iPhone chips, routing complex queries to Google Cloud with Nvidia confidential computing.",
        },
      },
      {
        title: {
          zh: "特斯拉 FSD 横穿加拿大零干预",
          en: "Tesla FSD Cross-Canada Zero-Intervention",
        },
        description: {
          zh: "特斯拉 FSD V14.3.3 完成全球首次全程零干预横穿加拿大，温哥华至哈利法克斯 6051 公里，4 天 21 小时无系统退出。",
          en: "Tesla FSD V14.3.3 completed the world's first fully autonomous cross-Canada drive: Vancouver to Halifax, 6,051km, 4 days 21h, zero disengagements.",
        },
      },
      {
        title: {
          zh: "DeepSeek V4 Flash 上线 OpenCode Zen",
          en: "DeepSeek V4 Flash on OpenCode Zen",
        },
        description: {
          zh: "DeepSeek V4 Flash 现已上线 OpenCode Zen，为开发者提供新的模型选择。",
          en: "DeepSeek V4 Flash is now available on OpenCode Zen, offering developers a new model option.",
        },
      },
      {
        title: {
          zh: "OpenAI 发布生物防御工具 Rosalind",
          en: "OpenAI Releases Biodefense Tool Rosalind",
        },
        description: {
          zh: "OpenAI 发布生物防御 AI 工具 Rosalind，旨在帮助世界在生物防御领域抢占先机。",
          en: "OpenAI released Rosalind, an AI biodefense tool designed to help the world get ahead in biodefense.",
        },
      },
    ],
  },
  {
    id: "2026-05-31",
    date: "2026-05-31",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-05-31",
      en: "🤖 AI HOT Daily · May 31, 2026",
    },
    summary: {
      zh: "Google Nano Banana 系列正式发布、xAI 放弃 JAX 转向自研训练框架、阿里云 & Qwen 成 UEFA 全球 AI 合作伙伴、GitHub Copilot token 计费引争议、软银 750 亿欧元法国 AI 数据中心。",
      en: "Google Nano Banana GA, xAI drops JAX for custom C framework, Alibaba Cloud & Qwen UEFA partnership, GitHub Copilot token billing controversy, SoftBank €75B France AI data centers.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Google Nano Banana Pro/2 正式发布",
          en: "Google Nano Banana Pro & 2 Released",
        },
        description: {
          zh: "Nano Banana Pro (gemini-3-pro-image) 和 Nano Banana 2 (gemini-3.1-flash-image) 正式发布，可通过 Gemini API 投入生产。",
          en: "Nano Banana Pro and Nano Banana 2 are now GA and available via Gemini API for production use.",
        },
      },
      {
        title: {
          zh: "xAI 放弃 JAX，自研 C 训练框架",
          en: "xAI Drops JAX for Custom C Framework",
        },
        description: {
          zh: "xAI 放弃 JAX GPU 堆栈（MFU 低于 10%），转向用 Grok Build 编写 C 训练框架。NVIDIA JAX 团队两年 996 投入 xAI 宣告失败。",
          en: "xAI abandoned JAX GPU stack (MFU <10%), pivoting to a C training framework via Grok Build. NVIDIA JAX team's 2-year effort with xAI failed.",
        },
      },
      {
        title: {
          zh: "阿里云 & Qwen 成 UEFA 全球 AI 合作伙伴",
          en: "Alibaba Cloud & Qwen: UEFA AI Partner",
        },
        description: {
          zh: "阿里云和 Qwen 成为 UEFA 官方 AI、云计算与电商合作伙伴，覆盖 2027-2033 赛季男子俱乐部赛事及 EURO 2028。",
          en: "Alibaba Cloud and Qwen named UEFA's official AI, cloud and e-commerce partner for 2027-2033 men's club competitions and EURO 2028.",
        },
      },
      {
        title: {
          zh: "GitHub Copilot token 计费引争议",
          en: "GitHub Copilot Token Billing Sparks Outcry",
        },
        description: {
          zh: "GitHub Copilot 改为按 token 计量计费，引发开发者广泛不满，「黄金时代似乎正在终结」。",
          en: "GitHub Copilot switched to token-based billing, sparking developer backlash — 'the golden age seems to be ending.'",
        },
      },
      {
        title: {
          zh: "软银 750 亿欧元投资法国 AI 数据中心",
          en: "SoftBank €75B France AI Data Centers",
        },
        description: {
          zh: "软银计划投资高达 750 亿欧元（约 870 亿美元），在法国建设 AI 数据中心。",
          en: "SoftBank plans to invest up to €75 billion (~$87B) in AI data centers in France.",
        },
      },
    ],
  },
  {
    id: "2026-05-30",
    date: "2026-05-30",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-05-30",
      en: "🤖 AI HOT Daily · May 30, 2026",
    },
    summary: {
      zh: "OpenAI 实时翻译模型支持 70+ 语言、阶跃星辰 Step 3.7 Flash 发布、Codex 支持 Windows 计算机使用、Kog 团队 3000 tokens/s 推理速度、中央网信办推动全民 AI 素养。",
      en: "OpenAI realtime translator 70+ languages, StepFun Step 3.7 Flash, Codex Windows support, Kog 3000 tps inference, China AI literacy push.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "OpenAI 实时翻译模型：70+ 语言",
          en: "OpenAI Realtime Translator: 70+ Languages",
        },
        description: {
          zh: "OpenAI 推出 gpt-realtime-translate，支持 70+ 种输入语言和 13 种输出语言的实时语音翻译。",
          en: "OpenAI launched gpt-realtime-translate: realtime voice translation for 70+ input and 13 output languages.",
        },
      },
      {
        title: {
          zh: "阶跃星辰 Step 3.7 Flash 发布",
          en: "StepFun Step 3.7 Flash Released",
        },
        description: {
          zh: "阶跃星辰发布开源的 Step 3.7 Flash，198B MoE 架构，11B 活跃参数，在 ClawEval 和 SimpleVQA 排名第一。",
          en: "StepFun released open-source Step 3.7 Flash, 198B MoE, 11B active params, #1 on ClawEval and SimpleVQA.",
        },
      },
      {
        title: {
          zh: "Codex 支持 Windows 计算机使用",
          en: "Codex Now Supports Windows",
        },
        description: {
          zh: "Codex 计算机使用功能登陆 Windows，可在 Windows 电脑上直接执行操作，ChatGPT 移动端可远程引导。",
          en: "Codex computer use now on Windows, ChatGPT mobile app can remotely steer tasks on Windows PC.",
        },
      },
      {
        title: {
          zh: "Kog 团队实现 3000 tokens/s 推理",
          en: "Kog Team: 3,000 tokens/sec Inference",
        },
        description: {
          zh: "Kog 团队在 8× AMD MI300X GPU 上达到 3000 tokens/s 推理速度，比常规快 10-30 倍。",
          en: "Kog team achieves 3,000 tps on 8x AMD MI300X GPUs, 10-30x faster than normal.",
        },
      },
      {
        title: {
          zh: "中央网信办：提升全民 AI 素养",
          en: "China: National AI Literacy Push",
        },
        description: {
          zh: "中央网信办等四部门联合印发工作要点，要求提升全民人工智能素养，加快 AI 人才培育。",
          en: "Four Chinese govt departments issued guidelines to improve nationwide AI literacy and talent cultivation.",
        },
      },
    ],
  },
  {
    id: "2026-05-29",
    date: "2026-05-29",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-05-29",
      en: "🤖 AI HOT Daily · May 29, 2026",
    },
    summary: {
      zh: "Claude Opus 4.8 发布、Anthropic 650 亿美元 H 轮融资估值 9650 亿美元、Claude Code 动态工作流、Grok Build 0.1 API 公测、DeepSeek 计划科创板 IPO、Qwen3.7-Max 登顶 OpenRouter。",
      en: "Claude Opus 4.8, Anthropic $65B Series H at $965B, Claude Code dynamic workflows, Grok Build 0.1 API, DeepSeek IPO, Qwen3.7-Max tops OpenRouter.",
    },
    category: "ai-daily",
    items: [
      {
        title: { zh: "Claude Opus 4.8 发布", en: "Claude Opus 4.8 Released" },
        description: {
          zh: "Anthropic 发布 Claude Opus 4.8，编码/推理/智能体技能全面升级，代码错误漏检率降低 75%，价格不变。",
          en: "Anthropic released Claude Opus 4.8 with coding/reasoning/agent upgrades, 75% fewer missed code errors, same price.",
        },
      },
      {
        title: {
          zh: "Anthropic 650 亿美元 H 轮融资",
          en: "Anthropic $65B Series H",
        },
        description: {
          zh: "Anthropic 完成 650 亿美元 H 轮融资，估值 9650 亿美元，年化收入突破 470 亿美元。",
          en: "Anthropic closed $65B Series H at $965B valuation, $47B ARR.",
        },
      },
      {
        title: {
          zh: "Claude Code 动态工作流",
          en: "Claude Code Dynamic Workflows",
        },
        description: {
          zh: "Claude Code 推出动态工作流功能，可并行运行数十到数百个子智能体完成复杂任务。",
          en: "Claude Code dynamic workflows runs dozens to hundreds of parallel sub-agents for complex tasks.",
        },
      },
      {
        title: { zh: "Grok Build 0.1 API 公测", en: "Grok Build 0.1 API Beta" },
        description: {
          zh: "xAI 编码模型 Grok Build 0.1 上线，推理速度超 100 tokens/秒，定价输入 $1/m、输出 $2/m。",
          en: "xAI's Grok Build 0.1 available: 100+ tps, $1/$2 per million tokens.",
        },
      },
      {
        title: {
          zh: "SIA 框架：AI 递归自我改进",
          en: "SIA: Recursive Self-Improvement",
        },
        description: {
          zh: "hexoai 开源 SIA 框架，AI 智能体可自主更新模型权重，LawBench 性能提升 56.6%。",
          en: "hexoai open-sourced SIA: agents update own weights, LawBench +56.6%.",
        },
      },
    ],
  },
  {
    id: "2026-05-28",
    date: "2026-05-28",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-05-28",
      en: "🤖 AI HOT Daily · May 28, 2026",
    },
    summary: {
      zh: "Runway MCP 服务器发布、Claude Code v2.1.152 重大更新、FastVideo Dreamverse 7秒生成视频、Cognition 估值 260 亿美元、阿里云入选 Omdia 领导者、Qwen3.5 推理达 580 tokens/秒。",
      en: "Runway MCP server, Claude Code v2.1.152, FastVideo 7s video, Cognition $26B, Alibaba Cloud leader, Qwen3.5 580 tps.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Runway 推出 Model Context Protocol 服务器",
          en: "Runway Launches MCP Server",
        },
        description: {
          zh: "Runway 正式推出 MCP 服务器，允许 Claude、ChatGPT、Cursor 等 AI 智能体直接生成图像与视频，接入 Gen-4.5、Seedance 2.0、Kling 3.0 等模型。",
          en: "Runway released MCP server enabling AI agents to generate images and videos directly, integrating Gen-4.5, Seedance 2.0, Kling 3.0.",
        },
      },
      {
        title: {
          zh: "Claude Code v2.1.152 重大更新",
          en: "Claude Code v2.1.152 Major Update",
        },
        description: {
          zh: "/code-review --fix 可直接应用审查建议到工作目录；技能支持 disallowed-tools；新增 /reload-skills 命令。",
          en: "/code-review --fix now applies suggestions directly; skills support disallowed-tools; new /reload-skills command.",
        },
      },
      {
        title: {
          zh: "FastVideo Dreamverse 开源：7 秒生成 30 秒 1080p 视频",
          en: "FastVideo Dreamverse: 7s for 30s 1080p Video",
        },
        description: {
          zh: "Sky Computing Lab 开源 FastVideo Dreamverse，基于单张 NVIDIA B200 GPU 和 LTX-2 模型实现实时视频生成。",
          en: "Sky Computing Lab open-sourced FastVideo Dreamverse: 7 seconds to generate 30s 1080p video on single B200 GPU.",
        },
      },
      {
        title: {
          zh: "Cognition 成为全球最大独立智能体实验室",
          en: "Cognition: Largest Independent Agent Lab",
        },
        description: {
          zh: "Cognition 完成超 10 亿美元融资，估值达 260 亿美元，年化收入 4.92 亿美元，企业使用量增长超 10 倍。",
          en: "Cognition raised $1B+ at $26B valuation, $492M ARR, enterprise usage grew 10x+.",
        },
      },
      {
        title: {
          zh: "阿里云入选 Omdia 智能体 AI 市场雷达领导者",
          en: "Alibaba Cloud Named Omdia Agent AI Leader",
        },
        description: {
          zh: "阿里云被 Omdia 评为智能体 AI 市场雷达领导者，首个将整个平台围绕智能体范式构建的云服务商。",
          en: "Alibaba Cloud recognized as Agent AI market leader by Omdia, first cloud platform built around agent paradigm.",
        },
      },
      {
        title: {
          zh: "Qwen3.5 推理速度达 580 tokens/秒",
          en: "Qwen3.5 Inference: 580 tokens/sec",
        },
        description: {
          zh: "Qwen3.5 在 TokenSpeed 推理引擎上达到 580 tokens/秒，采用 FlashAttention-4 优化。",
          en: "Qwen3.5 achieves 580 tps on TokenSpeed engine with FlashAttention-4 optimization.",
        },
      },
      {
        title: {
          zh: "ITBench-AA 基准测试：所有模型得分低于 50%",
          en: "ITBench-AA: All Models Below 50%",
        },
        description: {
          zh: "首个智能体企业 IT 任务基准测试显示，所有前沿大模型得分均未超过 50%，Claude Opus 4.7 以 47% 领先。",
          en: "First agent IT benchmark shows all frontier models below 50%, Claude Opus 4.7 leads at 47%.",
        },
      },
      {
        title: {
          zh: "Anthropic 发布 AI 智能体零信任安全框架",
          en: "Anthropic Zero-Trust Security Framework",
        },
        description: {
          zh: "Anthropic 发布企业部署 AI 智能体的安全框架，指出漏洞利用周期从数月压缩至数小时，提出三层零信任架构。",
          en: "Anthropic released zero-trust security framework for enterprise AI agents, vulnerability exploitation compressed from months to hours.",
        },
      },
      {
        title: {
          zh: "OpenCode 与 MiMo V2.5 限时免费开放",
          en: "OpenCode + MiMo V2.5 Free Tier",
        },
        description: {
          zh: "OpenCode 联合 MiMo V2.5 推出限时免费：1M 上下文、推理、文本、图像。",
          en: "OpenCode x MiMo V2.5 free tier: 1M context, reasoning, text, image.",
        },
      },
      {
        title: {
          zh: "Perplexity 开源 Unigram 分词器",
          en: "Perplexity Open-Sources Unigram Tokenizer",
        },
        description: {
          zh: "Perplexity 开源重新构建的 Unigram 分词器，可将 CPU 占用降低 5-6 倍。",
          en: "Perplexity open-sourced Unigram tokenizer, reducing CPU usage by 5-6x.",
        },
      },
    ],
  },
  {
    id: "2026-05-27",
    date: "2026-05-27",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-05-27",
      en: "🤖 AI HOT Daily · May 27, 2026",
    },
    summary: {
      zh: "谷歌 AlphaProof Nexus 攻克数学难题、MiniCPM5-1B 开源、Qwen3.7-Max 成第二大编程模型、MiMo 大幅降价、Claude Code 安全插件、OpenRouter 获投 1.13 亿美元。",
      en: "Google AlphaProof Nexus solves math problems, MiniCPM5-1B open-sourced, Qwen3.7-Max #2 coding model, MiMo price cut, Claude Code security plugin, OpenRouter $113M funding.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "谷歌 AlphaProof Nexus 攻克 2 道悬置 56 年数学难题",
          en: "Google AlphaProof Nexus Solves 56-Year Math Problems",
        },
        description: {
          zh: "谷歌 AI 框架 AlphaProof Nexus 成功攻克两道悬置 56 年的数学难题，展示 AI 在数学发现领域的突破性进展。",
          en: "Google's AI framework AlphaProof Nexus solved two math problems that had remained unsolved for 56 years.",
        },
      },
      {
        title: {
          zh: "面壁智能开源 MiniCPM5-1B：超越所有 2B 以下模型",
          en: "MiniCPM5-1B Open-Sourced: Beats All <2B Models",
        },
        description: {
          zh: "面壁智能开源 MiniCPM5-1B，仅 1B 参数在 AA-Index 榜单超越所有 2B 以下模型，支持手机和浏览器运行。",
          en: "MiniCPM5-1B has only 1B parameters but outperforms all models under 2B on AA-Index, runs on phone and browser.",
        },
      },
      {
        title: {
          zh: "Qwen3.7-Max 成为全球第二大 AI 编程模型",
          en: "Qwen3.7-Max Now #2 Global AI Coding Model",
        },
        description: {
          zh: "Qwen3.7-Max 在 Code Arena 上得分 1541，仅次于 Claude，专为生产环境打造，可运行 35 小时任务。",
          en: "Qwen3.7-Max scores 1541 on Code Arena, second only to Claude, built for production with 35-hour task capability.",
        },
      },
      {
        title: {
          zh: "小米 MiMo 2.5 Pro 大幅降价，与 DeepSeek V4 Pro 同价",
          en: "MiMo 2.5 Pro Price Drop: Matches DeepSeek V4 Pro",
        },
        description: {
          zh: "小米 MiMo-V2.5 系列 API 价格永久下调最高 99%，现与 DeepSeek V4 Pro 同价，token 套餐升级 5-8 倍。",
          en: "MiMo-V2.5 API prices dropped up to 99%, now priced same as DeepSeek V4 Pro with 5-8x more tokens.",
        },
      },
      {
        title: {
          zh: "Claude Code 推出安全漏洞识别插件",
          en: "Claude Code Releases Security Vulnerability Plugin",
        },
        description: {
          zh: "Claude Code 发布安全指导插件，可在编写代码时帮助识别和修复漏洞。",
          en: "Claude Code released a security guidance plugin to help identify and fix vulnerabilities while coding.",
        },
      },
      {
        title: {
          zh: "OpenRouter 完成 1.13 亿美元 B 轮融资",
          en: "OpenRouter Raises $113M Series B",
        },
        description: {
          zh: "OpenRouter 完成 1.13 亿美元 B 轮融资，周处理量从 5 万亿增长到 25 万亿 token。",
          en: "OpenRouter raised $113M in Series B, weekly token processing grew from 5T to 25T.",
        },
      },
      {
        title: {
          zh: "Claude Mythos 解决 OpenAI Erdős 猜想",
          en: "Claude Mythos Solves OpenAI's Erdős Conjecture",
        },
        description: {
          zh: "Claude Mythos 在周末解决了 OpenAI 提出的 Erdős 单位距离猜想问题，给出简洁证明。",
          en: "Claude Mythos solved OpenAI's Erdős unit distance conjecture over the weekend with an elegant proof.",
        },
      },
      {
        title: {
          zh: "Kling AI 驱动《大卫之家》实现多项行业首创",
          en: "Kling AI Powers 'The House of David' Industry Firsts",
        },
        description: {
          zh: "Kling AI 实现多项行业首创：首次在完整剧集中使用 AI 生成场景，首个原生 4K 模型。",
          en: "Kling AI achieved industry firsts: first AI-generated scenes in a finished series, first native 4K model.",
        },
      },
      {
        title: {
          zh: "Runway Project Luxo：AI 视频跨越恐怖谷",
          en: "Runway Project Luxo: AI Video Crosses Uncanny Valley",
        },
        description: {
          zh: "Runway 研究发现 AI 生成视频已跨越「恐怖谷」，观众开始关注故事本身而非技术瑕疵。",
          en: "Runway research found AI-generated video has crossed the 'uncanny valley' — audiences now focus on story, not tech flaws.",
        },
      },
      {
        title: {
          zh: "SenseNova-U1 全训练代码开源",
          en: "SenseNova-U1 Full Training Code Open-Sourced",
        },
        description: {
          zh: "商汤 OpenSenseNova 开源 SenseNova-U1 完整训练代码库，支持多模态多任务训练。",
          en: "SenseNova-U1 full training code open-sourced, supports multimodal multi-task training.",
        },
      },
    ],
  },
  {
    id: "2026-05-26",
    date: "2026-05-26",
    title: {
      zh: "AI HOT 日报 · 2026-05-26",
      en: "AI HOT Daily · May 26, 2026",
    },
    summary: {
      zh: "苹果1.2T参数Google模型重塑Siri、GPT-5.6曝光150万tokens上下文、华为昇腾1.58-bit端侧模型、Grok Build Beta发布、Anthropic联合创始人出席教皇通谕发布会。",
      en: "Apple 1.2T Google model to reshape Siri, GPT-5.6 leaks 1.5M token context, Huawei Ascend 1.58-bit edge model, Grok Build Beta, Anthropic co-founder at Pope encyclical.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "华为昇腾 1.58-bit 端侧大模型 BitCPM-CANN",
          en: "Huawei Ascend 1.58-bit Edge Model BitCPM-CANN",
        },
        description: {
          zh: "面壁智能联合清华等开源中国首个基于华为昇腾训练的 1.58-bit 端侧大模型 BitCPM-CANN，突破国产芯片端侧部署。",
          en: "BitCPM-CANN, China first 1.58-bit edge model trained on Huawei Ascend chips, open-sourced by consortium including Tsinghua.",
        },
      },
      {
        title: {
          zh: "Grok Build Beta 向 SuperGrok 开放",
          en: "Grok Build Beta Opens to SuperGrok",
        },
        description: {
          zh: "xAI 发布 Grok Build Beta 版，支持 Plan Mode、通过 Imagine 生成图像视频、CLI 构建自动化编排器。",
          en: "xAI launched Grok Build Beta with Plan Mode, image-video generation via Imagine, and CLI automation.",
        },
      },
      {
        title: {
          zh: "Qwen3.7-Max 隐式缓存上线",
          en: "Qwen3.7-Max Implicit Cache Launched",
        },
        description: {
          zh: "阿里通义千问 Qwen3.7-Max 隐式缓存功能上线，自动启用无需设置，开箱即用更快更便宜。",
          en: "Alibaba Qwen3.7-Max implicit caching launched, auto-enabled for faster and cheaper inference.",
        },
      },
      {
        title: {
          zh: "苹果定制 1.2T 参数 Google 模型重塑 Siri",
          en: "Apple Customizes 1.2T Google Model for Siri",
        },
        description: {
          zh: "苹果为下一代 Siri 使用定制版 1.2T 参数 Google 大模型，显著大于 Gemini 3.5 Flash 的 300B，简单查询预期本地运行。",
          en: "Apple using customized 1.2T-parameter Google model for next-gen Siri, larger than Gemini 3.5 Flash 300B.",
        },
      },
      {
        title: {
          zh: "教皇通谕警告 AI 风险",
          en: "Pope Warns of AI Risks in Encyclical",
        },
        description: {
          zh: "教皇里奥十四世在首份重要通谕中警告 AI 驱动战争风险、对劳动的影响，呼吁建立法律伦理框架。",
          en: "Pope Leo XIV warned of AI-driven warfare and labor impacts, calling for legal and ethical frameworks.",
        },
      },
      {
        title: {
          zh: "GPT-5.6 曝光：150 万 tokens 上下文",
          en: "GPT-5.6 Leaked: 1.5M Token Context",
        },
        description: {
          zh: "OpenAI 未官宣的 GPT-5.6 模型（内部代号 iris-alpha）被发现，支持 150 万 token 上下文，90 万 token 时仍流畅响应，预计六月发布。",
          en: "Unannounced GPT-5.6 (codename iris-alpha) supports 1.5M token context, responds smoothly at 900K tokens, expected June release.",
        },
      },
      {
        title: {
          zh: "华为 “韬定律” 逻辑折叠芯片技术",
          en: "Huawei “Tao Law” Logic Folding Chip Tech",
        },
        description: {
          zh: "何庭波在 ISCAS 2026 提出逻辑折叠技术，不依赖新光刻工艺提升芯片性能，晶体管密度提升 53%，能效提高 41%。",
          en: "He Tingbo proposed LogicFolding at ISCAS 2026, boosting transistor density by 53% and energy efficiency by 41%.",
        },
      },
      {
        title: {
          zh: "Chris Olah 在教皇通谕发布会发言",
          en: "Chris Olah Speaks at Pope Encyclical",
        },
        description: {
          zh: "Anthropic 联合创始人 Olah 出席梵蒂冈 AI 通谕发布会，指出前沿 AI 实验室面临商业、研究和地缘政治压力，需要外部监督。",
          en: "Anthropic co-founder Olah noted frontier AI labs face commercial, research, and geopolitical pressures requiring external oversight.",
        },
      },
      {
        title: {
          zh: "AI 智能体术语辨析：Harness vs Scaffold",
          en: "AI Agent Terms: Harness vs Scaffold",
        },
        description: {
          zh: "Hugging Face 发文厘清 AI 智能体术语：模型本身无记忆无循环，Scaffolding 定义行为，Harness 负责执行控制循环。",
          en: "Hugging Face clarifies AI agent terms: models have no memory-loops, Scaffolding defines behavior, Harness controls execution loops.",
        },
      },
    ],
  },
  {
    id: "2026-05-25",
    date: "2026-05-25",
    title: {
      zh: "AI HOT 日报 · 2026-05-25",
      en: "AI HOT Daily · May 25, 2026",
    },
    summary: {
      zh: "Luma Agents 规模化广告生成、TrapDoor 供应链攻击窃取 AI 开发者凭证、DeepSeek 旗舰模型永久 75% 折扣、Codex 自我优化提示词框架。",
      en: "Luma Agents scales UGC ads, TrapDoor supply chain attack steals AI dev credentials, DeepSeek 75% permanent discount, Codex self-optimizing prompt framework.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Luma Agents 实现规模化 UGC 广告生成",
          en: "Luma Agents Achieves Scalable UGC Ad Generation",
        },
        description: {
          zh: "Luma AI 发布 Luma Agents 规模化广告生成功能，设定简报和风格后自动构建每条 UGC 风格广告，实现真实感广告的规模化生产。",
          en: "Luma AI launched Luma Agents for scalable ad generation — define the brief and style, and agents build each UGC-style ad automatically.",
        },
      },
      {
        title: {
          zh: "OpenClaw 2026.5.22 发布",
          en: "OpenClaw 2026.5.22 Released",
        },
        description: {
          zh: "OpenClaw 新版优化 Gateway 启动路径，/models 响应时间降至约 5 毫秒，npm 包提供锁定依赖项，Windows 安装路径更安全。",
          en: "OpenClaw update optimizes Gateway startup, reduces /models response time to ~5ms, provides locked dependencies, and improves Windows install security.",
        },
      },
      {
        title: {
          zh: "TrapDoor 供应链攻击窃取 AI 开发者凭证",
          en: "TrapDoor Supply Chain Attack Targets AI Developers",
        },
        description: {
          zh: "名为 TrapDoor 的协调供应链攻击同时袭击 npm、PyPI 和 Crates.io，涉及 34 个恶意包，通过伪装 Pull Request 注入被操纵的 CLAUDE.md 和 .cursorrules 文件，窃取加密货币、AI 开发者的钱包和云凭证。",
          en: "TrapDoor supply chain attack hit npm, PyPI, and Crates.io with 34 malicious packages, injecting poisoned CLAUDE.md and .cursorrules files via fake PRs to steal crypto wallets and cloud credentials.",
        },
      },
      {
        title: {
          zh: "DeepSeek 旗舰模型永久 75% 折扣",
          en: "DeepSeek Flagship Model Gets Permanent 75% Discount",
        },
        description: {
          zh: "DeepSeek 将对其旗舰 AI 模型实施永久性 75% 折扣，大幅降低使用成本。",
          en: "DeepSeek is implementing a permanent 75% discount on its flagship AI model.",
        },
      },
      {
        title: {
          zh: "Codex 自我优化提示词框架",
          en: "Codex Self-Optimizing Prompt Framework",
        },
        description: {
          zh: "Greg Brockman 发布结构化提示词框架，指导 Codex 自动分析历史记录以识别并固化重复工作流，筛选至少出现两次的任务，创建技能、子智能体或自动化工具。",
          en: "Greg Brockman released a structured prompt framework guiding Codex to analyze history, identify repeatable workflows, and create skills/sub-agents/tools.",
        },
      },
      {
        title: {
          zh: "Claude Code 自动模式：多任务并行技巧",
          en: "Claude Code Auto Mode: Parallel Multi-Tasking",
        },
        description: {
          zh: "Boris Cherny 分享使用 Claude Code 的头号技巧：使用自动模式，不再弹出权限提示，实现多 Claude 会话并行处理。",
          en: "Boris Cherny's top tip: use auto mode in Claude Code for no permission prompts and parallel multi-session processing.",
        },
      },
    ],
  },
  {
    id: "2026-05-21",
    date: "2026-05-21",
    title: {
      zh: "AI HOT 日报 · 2026-05-21",
      en: "AI HOT Daily · 2026-05-21",
    },
    summary: {
      zh: "Qwen3.7智能体发布，原生4K视频生成模型Kling亮相，GPT-5预告将至，腾讯马维斯AI助手全平台上线，SpaceX与Anthropic合作提供AI算力。",
      en: "Qwen3.7 agent released, native 4K video generation model Kling unveiled, GPT-5 teaser drops, Tencent's Maverick AI assistant goes cross-platform, SpaceX partners with Anthropic for AI compute.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Qwen3.7：智能体前沿多模态模型发布",
          en: "Qwen3.7: Frontier Multimodal Agent Model Released",
        },
        description: {
          zh: "Qwen Studio推出Qwen3.7，整合聊天、图像视频理解、图像生成、文档处理、网页搜索、工具调用及工件生成等能力，推动多模态交互向更自主方向发展。",
          en: "Qwen Studio launched Qwen3.7, integrating chat, image/video understanding, image generation, document processing, web search, tool calling, and artifact generation — pushing multimodal interaction toward greater autonomy.",
        },
      },
      {
        title: {
          zh: "Kling AI 推出全球首个原生4K视频生成模型",
          en: "Kling AI Launches World's First Native 4K Video Generation Model",
        },
        description: {
          zh: "Kling AI正式推出全球首个原生4K视频生成模型，一键生成真4K画质视频，已获好莱坞团队、动画工作室等采用，原生4K从底层生成避免传统放大技术的角色变形问题。",
          en: "Kling AI officially launched the world's first native 4K video generation model, generating true 4K quality in one click, already adopted by Hollywood teams and animation studios — native 4K generation avoids character distortion from traditional upscaling.",
        },
      },
      {
        title: { zh: "GPT-5 即将发布", en: "GPT-5 Is Coming Soon" },
        description: {
          zh: "ChatGPT官方X账号发推预告：GPT-5即将发布，引发AI社区广泛关注。",
          en: "ChatGPT's official X account tweeted a teaser: GPT-5 is coming soon, sparking widespread attention in the AI community.",
        },
      },
      {
        title: {
          zh: "腾讯「马维斯」AI助手全平台上线",
          en: "Tencent 'Maverick' AI Assistant Launches Cross-Platform",
        },
        description: {
          zh: "腾讯发布操作系统层级AI助手「马维斯」，支持Windows、Mac和安卓平台，具备文档归类解析、图片识别处理、系统维护等功能，可调度不同模型处理任务，部分功能支持离线使用。",
          en: "Tencent released OS-level AI assistant 'Maverick', supporting Windows, Mac, and Android, with document classification, image recognition, system maintenance, and the ability to orchestrate different models — partially available offline.",
        },
      },
      {
        title: {
          zh: "SpaceX与Anthropic合作提供大规模AI算力",
          en: "SpaceX Partners with Anthropic for Massive AI Compute",
        },
        description: {
          zh: "Elon Musk表示SpaceX正大规模提供AI算力服务，正与其他公司进行类似合作讨论，预计未来通过轨道数据中心以极高规模提供服务。",
          en: "Elon Musk stated that SpaceX is providing AI compute services at scale, with similar partnership discussions underway with other companies, and expects to deliver at extreme scale via orbital data centers in the future.",
        },
      },
      {
        title: {
          zh: "OpenAI模型证伪离散几何核心猜想",
          en: "OpenAI Model Disproves Core Conjecture in Discrete Geometry",
        },
        description: {
          zh: "OpenAI的AI模型成功解决了数学界悬而未决逾80年的「单元距离问题」，推翻了离散几何领域的核心猜想，被视为AI驱动数学研究的里程碑事件。",
          en: "OpenAI's AI model successfully solved the 'unit distance problem' — unsolved for over 80 years — disproving a core conjecture in discrete geometry, regarded as a milestone in AI-driven mathematical research.",
        },
      },
      {
        title: {
          zh: "孙正义豪赌OpenAI超600亿美元引发质疑",
          en: "Son's $60B+ OpenAI Bet Sparks Internal Doubts",
        },
        description: {
          zh: "软银对OpenAI投资承诺已超600亿美元，内部担忧孙正义过度信任奥尔特曼，且软银虽持股超10%却无董事会席位，缺乏决策影响力。",
          en: "SoftBank's investment commitment to OpenAI has exceeded $60 billion, with internal concerns over Son's excessive trust in Altman — SoftBank holds over 10% equity but has no board seat, lacking decision-making influence.",
        },
      },
      {
        title: {
          zh: "Meta万人重组：裁员与AI转型并举",
          en: "Meta's 10,000-Person Restructuring: Layoffs Meet AI Pivot",
        },
        description: {
          zh: "Meta计划削减约8000个岗位，同时约7000名员工将被调配至新的AI相关职位，重点将资源集中于AI基础设施、基础模型构建及AI商业化。",
          en: "Meta plans to cut about 8,000 positions while reassigning around 7,000 employees to new AI-related roles, concentrating resources on AI infrastructure, foundation model development, and AI commercialization.",
        },
      },
      {
        title: {
          zh: "微软内部示警：GitHub面临生存级风险",
          en: "Microsoft Warns Internally: GitHub Faces Existential Risk",
        },
        description: {
          zh: "微软内部警告GitHub面临「生存级风险」——Cursor、Claude Code等AI编程工具兴起，削弱了将代码上传至GitHub的必要性。微软已要求部分团队停用Claude Code，转向GitHub Copilot CLI。",
          en: "Microsoft internally warned GitHub faces an 'existential risk' — the rise of AI coding tools like Cursor and Claude Code reduces the need to upload code to GitHub. Microsoft has directed some teams to stop using Claude Code and switch to GitHub Copilot CLI.",
        },
      },
    ],
  },
  {
    id: "2026-05-20",
    date: "2026-05-20",
    title: {
      zh: "AI HOT 日报 · 2026-05-20",
      en: "AI HOT Daily · 2026-05-20",
    },
    summary: {
      zh: "Gemini进入自主代理时代，Gemini Omni多模态模型发布，首个实时多agent世界模型Agora-1亮相，Karpathy加入Anthropic。",
      en: "Gemini enters the autonomous agent era, Gemini Omni multimodal model released, first real-time multi-agent world model Agora-1 unveiled, Karpathy joins Anthropic.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Gemini进入自主代理时代",
          en: "Gemini Enters Autonomous Agent Era",
        },
        description: {
          zh: "谷歌在I/O 2026大会上宣布Gemini进入自主代理时代，新功能可自动执行复杂任务，显著提升用户工作效率。",
          en: "Google announced at I/O 2026 that Gemini enters the autonomous agent era, with new features that automatically execute complex tasks, significantly improving user productivity.",
        },
      },
      {
        title: {
          zh: "Gemini Omni多模态生成模型发布",
          en: "Gemini Omni Multimodal Generation Model Released",
        },
        description: {
          zh: "谷歌发布Gemini Omni，可从任意输入创建任意内容，结合物理推理与多模态生成，是迈向AGI的世界模型。",
          en: "Google released Gemini Omni, which can create any content from any input, combining physical reasoning with multimodal generation — a world model stepping toward AGI.",
        },
      },
      {
        title: {
          zh: "首个实时多agent世界模型Agora-1发布",
          en: "First Real-Time Multi-Agent World Model Agora-1 Released",
        },
        description: {
          zh: '奥德赛实验室推出Agora-1，全球首个实时多agent世界模型，允许多人与AI同屏互动，标志着从单人视频向多人共享"活世界"的转变。',
          en: "Odyssey Lab launched Agora-1, the world's first real-time multi-agent world model, allowing multiple people to interact with AI on the same screen, marking a shift from single-person video to shared 'living worlds'.",
        },
      },
      {
        title: {
          zh: "谷歌推出全新AI智能搜索框",
          en: "Google Launches New AI Smart Search Box",
        },
        description: {
          zh: "基于Gemini 3.5模型的全新智能搜索框发布，整合AI Overviews与AI Mode，支持跨模态推理查询。",
          en: "A new smart search box based on Gemini 3.5 was released, integrating AI Overviews and AI Mode, supporting cross-modal reasoning queries.",
        },
      },
      {
        title: {
          zh: "Claude智能体托管平台新增自托管沙箱与MCP隧道",
          en: "Claude Agent Hosting Platform Adds Self-Hosted Sandbox & MCP Tunnel",
        },
        description: {
          zh: "Anthropic推出自托管沙箱允许用户在自有基础设施运行工具，MCP隧道支持安全连接企业私有网络。",
          en: "Anthropic launched self-hosted sandbox allowing users to run tools on their own infrastructure, and MCP tunnel for securely connecting to enterprise private networks.",
        },
      },
      {
        title: {
          zh: "Karpathy加入Anthropic团队",
          en: "Karpathy Joins Anthropic",
        },
        description: {
          zh: "AI领域知名专家、前OpenAI联合创始人Andrej Karpathy宣布加入Anthropic，重返LLM前沿研究。",
          en: "Renowned AI expert and former OpenAI co-founder Andrej Karpathy announced joining Anthropic, returning to frontier LLM research.",
        },
      },
      {
        title: {
          zh: "谷歌Token处理量同比增长7倍",
          en: "Google Token Processing Volume Grows 7x Year-over-Year",
        },
        description: {
          zh: "谷歌每月处理Token数量超3200万亿，Gemini App月活用户突破9亿，同比增长超一倍。",
          en: "Google processes over 3,200 trillion tokens monthly, Gemini App monthly active users exceed 900 million, more than doubling year-over-year.",
        },
      },
      {
        title: {
          zh: "人类说服技巧对AI同样有效",
          en: "Human Persuasion Techniques Work on AI Too",
        },
        description: {
          zh: "研究发现经典的人类说服技巧对AI同样有效，可将顺从率从35%提高到51%。",
          en: "Research found that classic human persuasion techniques are equally effective on AI, increasing compliance rates from 35% to 51%.",
        },
      },
      {
        title: {
          zh: "NVIDIA开源4-bit超长视频生成基础设施",
          en: "NVIDIA Open Sources 4-bit Long Video Generation Infrastructure",
        },
        description: {
          zh: "NVIDIA开源LongLive 2.0，首个支持4-bit量化的端到端长视频生成基础设施，实现45.7 FPS生成速度。",
          en: "NVIDIA open-sourced LongLive 2.0, the first end-to-end long video generation infrastructure supporting 4-bit quantization, achieving 45.7 FPS generation speed.",
        },
      },
    ],
  },
  {
    id: "2026-05-24",
    date: "2026-05-24",
    title: {
      zh: "🤖 AI 今日速报 · 2026-05-24",
      en: "🤖 AI Daily · May 24, 2026",
    },
    summary: {
      zh: "StepAudio 2.5 实时语音发布、Models.dev 开源模型数据库上线、Anthropic 估值突破 9000 亿美元、NVIDIA 扩散语言模型实现光速文本生成。",
      en: "StepAudio 2.5 real-time voice, Models.dev open-source AI model DB, Anthropic valued at $900B+, NVIDIA diffusion LM achieves light-speed text generation.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "StepAudio 2.5 实时语音发布",
          en: "StepAudio 2.5 Real-Time Voice Released",
        },
        description: {
          zh: "阶跃星辰发布 StepAudio 2.5 Realtime 实时语音模型，能深度理解用户语速、语气、停顿等副语言特征，支持通过 API 接入自定义人格。",
          en: "StepAudio 2.5 Realtime voice model understands speech rate, tone, pauses, supports custom personalities via API.",
        },
      },
      {
        title: {
          zh: "Models.dev：开源 AI 模型数据库",
          en: "Models.dev: Open-Source AI Model Database",
        },
        description: {
          zh: "Models.dev 上线，专门收录 AI 模型的规格、定价及功能信息，便于开发者查询和比较。",
          en: "Models.dev launched, a database of AI model specs, pricing, and features for developers.",
        },
      },
      {
        title: {
          zh: "Replit Agent + Squidler 全自动化 AI QA",
          en: "Replit Agent + Squidler Automated QA",
        },
        description: {
          zh: "Replit Agent 与 Squidler 集成，用户用自然语言描述功能，Replit Agent 构建，Squidler 自动测试并反馈修复。",
          en: "Replit Agent + Squidler: natural language to automated build-test-fix pipeline.",
        },
      },
      {
        title: {
          zh: "微软：AI 使用成本高于人工工资",
          en: "Microsoft: AI Costs Exceed Human Wages",
        },
        description: {
          zh: "微软报告指出 AI tokens+agents 使用模式，综合开销已超过雇佣人类员工完成同类任务的费用。",
          en: "Microsoft reported AI usage costs now exceed hiring humans for comparable tasks.",
        },
      },
      {
        title: {
          zh: "Anthropic 估值反超 OpenAI",
          en: "Anthropic Surpasses OpenAI in Valuation",
        },
        description: {
          zh: "Anthropic 即将完成超 300 亿美元融资，估值突破 9000 亿美元，正式超越 OpenAI。",
          en: "Anthropic raising $30B+ at $900B+ valuation, surpassing OpenAI.",
        },
      },
      {
        title: {
          zh: "Mistral AI 收购 Emmi AI",
          en: "Mistral AI Acquires Emmi AI",
        },
        description: {
          zh: "Mistral AI 收购物理 AI 先驱 Emmi AI，整合物理仿真与数字孪生技术，服务航空航天、汽车行业。",
          en: "Mistral AI acquired Emmi AI for physics simulation and digital twin expertise.",
        },
      },
      {
        title: {
          zh: "NVIDIA 扩散语言模型光速文本生成",
          en: "NVIDIA Diffusion LM Light-Speed Text",
        },
        description: {
          zh: "NVIDIA 发布 Nemotron-Labs 扩散语言模型，扩散架构大幅提升文本生成速度。",
          en: "NVIDIA released Nemotron-Labs diffusion LM, outperforming autoregressive models.",
        },
      },
      {
        title: {
          zh: "飞书-Claude Code 桥接开源",
          en: "Feishu-Claude Code Bridge Open-Sourced",
        },
        description: {
          zh: "开源项目实现飞书与 Claude Code CLI 双向连接，可从飞书消息指挥 Claude Code。",
          en: "Bidirectional bridge between Feishu and local Claude Code CLI.",
        },
      },
    ],
  },
];

export const latestNewsDate =
  newsList.length === 0
    ? null
    : newsList.reduce(
        (latest, item) => (item.date > latest ? item.date : latest),
        newsList[0].date,
      );

export const latestNewsList =
  latestNewsDate === null
    ? []
    : newsList.filter((item) => item.date === latestNewsDate);
