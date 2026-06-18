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
