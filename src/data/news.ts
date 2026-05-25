export interface NewsItem {
  id: string;
  date: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  category: string;
  items: {
    title: { zh: string; en: string };
    description: { zh: string; en: string };
  }[];
}

export const newsList: NewsItem[] = [
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
        title: { zh: "Luma Agents 实现规模化 UGC 广告生成", en: "Luma Agents Achieves Scalable UGC Ad Generation" },
        description: {
          zh: "Luma AI 发布 Luma Agents 规模化广告生成功能，设定简报和风格后自动构建每条 UGC 风格广告，实现真实感广告的规模化生产。",
          en: "Luma AI launched Luma Agents for scalable ad generation — define the brief and style, and agents build each UGC-style ad automatically.",
        },
      },
      {
        title: { zh: "OpenClaw 2026.5.22 发布", en: "OpenClaw 2026.5.22 Released" },
        description: {
          zh: "OpenClaw 新版优化 Gateway 启动路径，/models 响应时间降至约 5 毫秒，npm 包提供锁定依赖项，Windows 安装路径更安全。",
          en: "OpenClaw update optimizes Gateway startup, reduces /models response time to ~5ms, provides locked dependencies, and improves Windows install security.",
        },
      },
      {
        title: { zh: "TrapDoor 供应链攻击窃取 AI 开发者凭证", en: "TrapDoor Supply Chain Attack Targets AI Developers" },
        description: {
          zh: "名为 TrapDoor 的协调供应链攻击同时袭击 npm、PyPI 和 Crates.io，涉及 34 个恶意包，通过伪装 Pull Request 注入被操纵的 CLAUDE.md 和 .cursorrules 文件，窃取加密货币、AI 开发者的钱包和云凭证。",
          en: "TrapDoor supply chain attack hit npm, PyPI, and Crates.io with 34 malicious packages, injecting poisoned CLAUDE.md and .cursorrules files via fake PRs to steal crypto wallets and cloud credentials.",
        },
      },
      {
        title: { zh: "DeepSeek 旗舰模型永久 75% 折扣", en: "DeepSeek Flagship Model Gets Permanent 75% Discount" },
        description: {
          zh: "DeepSeek 将对其旗舰 AI 模型实施永久性 75% 折扣，大幅降低使用成本。",
          en: "DeepSeek is implementing a permanent 75% discount on its flagship AI model.",
        },
      },
      {
        title: { zh: "Codex 自我优化提示词框架", en: "Codex Self-Optimizing Prompt Framework" },
        description: {
          zh: "Greg Brockman 发布结构化提示词框架，指导 Codex 自动分析历史记录以识别并固化重复工作流，筛选至少出现两次的任务，创建技能、子智能体或自动化工具。",
          en: "Greg Brockman released a structured prompt framework guiding Codex to analyze history, identify repeatable workflows, and create skills/sub-agents/tools.",
        },
      },
      {
        title: { zh: "Claude Code 自动模式：多任务并行技巧", en: "Claude Code Auto Mode: Parallel Multi-Tasking" },
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
        title: { zh: "Qwen3.7：智能体前沿多模态模型发布", en: "Qwen3.7: Frontier Multimodal Agent Model Released" },
        description: {
          zh: "Qwen Studio推出Qwen3.7，整合聊天、图像视频理解、图像生成、文档处理、网页搜索、工具调用及工件生成等能力，推动多模态交互向更自主方向发展。",
          en: "Qwen Studio launched Qwen3.7, integrating chat, image/video understanding, image generation, document processing, web search, tool calling, and artifact generation — pushing multimodal interaction toward greater autonomy.",
        },
      },
      {
        title: { zh: "Kling AI 推出全球首个原生4K视频生成模型", en: "Kling AI Launches World's First Native 4K Video Generation Model" },
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
        title: { zh: "腾讯「马维斯」AI助手全平台上线", en: "Tencent 'Maverick' AI Assistant Launches Cross-Platform" },
        description: {
          zh: "腾讯发布操作系统层级AI助手「马维斯」，支持Windows、Mac和安卓平台，具备文档归类解析、图片识别处理、系统维护等功能，可调度不同模型处理任务，部分功能支持离线使用。",
          en: "Tencent released OS-level AI assistant 'Maverick', supporting Windows, Mac, and Android, with document classification, image recognition, system maintenance, and the ability to orchestrate different models — partially available offline.",
        },
      },
      {
        title: { zh: "SpaceX与Anthropic合作提供大规模AI算力", en: "SpaceX Partners with Anthropic for Massive AI Compute" },
        description: {
          zh: "Elon Musk表示SpaceX正大规模提供AI算力服务，正与其他公司进行类似合作讨论，预计未来通过轨道数据中心以极高规模提供服务。",
          en: "Elon Musk stated that SpaceX is providing AI compute services at scale, with similar partnership discussions underway with other companies, and expects to deliver at extreme scale via orbital data centers in the future.",
        },
      },
      {
        title: { zh: "OpenAI模型证伪离散几何核心猜想", en: "OpenAI Model Disproves Core Conjecture in Discrete Geometry" },
        description: {
          zh: "OpenAI的AI模型成功解决了数学界悬而未决逾80年的「单元距离问题」，推翻了离散几何领域的核心猜想，被视为AI驱动数学研究的里程碑事件。",
          en: "OpenAI's AI model successfully solved the 'unit distance problem' — unsolved for over 80 years — disproving a core conjecture in discrete geometry, regarded as a milestone in AI-driven mathematical research.",
        },
      },
      {
        title: { zh: "孙正义豪赌OpenAI超600亿美元引发质疑", en: "Son's $60B+ OpenAI Bet Sparks Internal Doubts" },
        description: {
          zh: "软银对OpenAI投资承诺已超600亿美元，内部担忧孙正义过度信任奥尔特曼，且软银虽持股超10%却无董事会席位，缺乏决策影响力。",
          en: "SoftBank's investment commitment to OpenAI has exceeded $60 billion, with internal concerns over Son's excessive trust in Altman — SoftBank holds over 10% equity but has no board seat, lacking decision-making influence.",
        },
      },
      {
        title: { zh: "Meta万人重组：裁员与AI转型并举", en: "Meta's 10,000-Person Restructuring: Layoffs Meet AI Pivot" },
        description: {
          zh: "Meta计划削减约8000个岗位，同时约7000名员工将被调配至新的AI相关职位，重点将资源集中于AI基础设施、基础模型构建及AI商业化。",
          en: "Meta plans to cut about 8,000 positions while reassigning around 7,000 employees to new AI-related roles, concentrating resources on AI infrastructure, foundation model development, and AI commercialization.",
        },
      },
      {
        title: { zh: "微软内部示警：GitHub面临生存级风险", en: "Microsoft Warns Internally: GitHub Faces Existential Risk" },
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
        title: { zh: "Gemini进入自主代理时代", en: "Gemini Enters Autonomous Agent Era" },
        description: {
          zh: "谷歌在I/O 2026大会上宣布Gemini进入自主代理时代，新功能可自动执行复杂任务，显著提升用户工作效率。",
          en: "Google announced at I/O 2026 that Gemini enters the autonomous agent era, with new features that automatically execute complex tasks, significantly improving user productivity.",
        },
      },
      {
        title: { zh: "Gemini Omni多模态生成模型发布", en: "Gemini Omni Multimodal Generation Model Released" },
        description: {
          zh: "谷歌发布Gemini Omni，可从任意输入创建任意内容，结合物理推理与多模态生成，是迈向AGI的世界模型。",
          en: "Google released Gemini Omni, which can create any content from any input, combining physical reasoning with multimodal generation — a world model stepping toward AGI.",
        },
      },
      {
        title: { zh: "首个实时多agent世界模型Agora-1发布", en: "First Real-Time Multi-Agent World Model Agora-1 Released" },
        description: {
          zh: "奥德赛实验室推出Agora-1，全球首个实时多agent世界模型，允许多人与AI同屏互动，标志着从单人视频向多人共享\"活世界\"的转变。",
          en: "Odyssey Lab launched Agora-1, the world's first real-time multi-agent world model, allowing multiple people to interact with AI on the same screen, marking a shift from single-person video to shared 'living worlds'.",
        },
      },
      {
        title: { zh: "谷歌推出全新AI智能搜索框", en: "Google Launches New AI Smart Search Box" },
        description: {
          zh: "基于Gemini 3.5模型的全新智能搜索框发布，整合AI Overviews与AI Mode，支持跨模态推理查询。",
          en: "A new smart search box based on Gemini 3.5 was released, integrating AI Overviews and AI Mode, supporting cross-modal reasoning queries.",
        },
      },
      {
        title: { zh: "Claude智能体托管平台新增自托管沙箱与MCP隧道", en: "Claude Agent Hosting Platform Adds Self-Hosted Sandbox & MCP Tunnel" },
        description: {
          zh: "Anthropic推出自托管沙箱允许用户在自有基础设施运行工具，MCP隧道支持安全连接企业私有网络。",
          en: "Anthropic launched self-hosted sandbox allowing users to run tools on their own infrastructure, and MCP tunnel for securely connecting to enterprise private networks.",
        },
      },
      {
        title: { zh: "Karpathy加入Anthropic团队", en: "Karpathy Joins Anthropic" },
        description: {
          zh: "AI领域知名专家、前OpenAI联合创始人Andrej Karpathy宣布加入Anthropic，重返LLM前沿研究。",
          en: "Renowned AI expert and former OpenAI co-founder Andrej Karpathy announced joining Anthropic, returning to frontier LLM research.",
        },
      },
      {
        title: { zh: "谷歌Token处理量同比增长7倍", en: "Google Token Processing Volume Grows 7x Year-over-Year" },
        description: {
          zh: "谷歌每月处理Token数量超3200万亿，Gemini App月活用户突破9亿，同比增长超一倍。",
          en: "Google processes over 3,200 trillion tokens monthly, Gemini App monthly active users exceed 900 million, more than doubling year-over-year.",
        },
      },
      {
        title: { zh: "人类说服技巧对AI同样有效", en: "Human Persuasion Techniques Work on AI Too" },
        description: {
          zh: "研究发现经典的人类说服技巧对AI同样有效，可将顺从率从35%提高到51%。",
          en: "Research found that classic human persuasion techniques are equally effective on AI, increasing compliance rates from 35% to 51%.",
        },
      },
      {
        title: { zh: "NVIDIA开源4-bit超长视频生成基础设施", en: "NVIDIA Open Sources 4-bit Long Video Generation Infrastructure" },
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
        title: { zh: "StepAudio 2.5 实时语音发布", en: "StepAudio 2.5 Real-Time Voice Released" },
        description: {
          zh: "阶跃星辰发布 StepAudio 2.5 Realtime 实时语音模型，能深度理解用户语速、语气、停顿等副语言特征，支持通过 API 接入自定义人格。",
          en: "StepAudio 2.5 Realtime voice model understands speech rate, tone, pauses, supports custom personalities via API.",
        },
      },
      {
        title: { zh: "Models.dev：开源 AI 模型数据库", en: "Models.dev: Open-Source AI Model Database" },
        description: {
          zh: "Models.dev 上线，专门收录 AI 模型的规格、定价及功能信息，便于开发者查询和比较。",
          en: "Models.dev launched, a database of AI model specs, pricing, and features for developers.",
        },
      },
      {
        title: { zh: "Replit Agent + Squidler 全自动化 AI QA", en: "Replit Agent + Squidler Automated QA" },
        description: {
          zh: "Replit Agent 与 Squidler 集成，用户用自然语言描述功能，Replit Agent 构建，Squidler 自动测试并反馈修复。",
          en: "Replit Agent + Squidler: natural language to automated build-test-fix pipeline.",
        },
      },
      {
        title: { zh: "微软：AI 使用成本高于人工工资", en: "Microsoft: AI Costs Exceed Human Wages" },
        description: {
          zh: "微软报告指出 AI tokens+agents 使用模式，综合开销已超过雇佣人类员工完成同类任务的费用。",
          en: "Microsoft reported AI usage costs now exceed hiring humans for comparable tasks.",
        },
      },
      {
        title: { zh: "Anthropic 估值反超 OpenAI", en: "Anthropic Surpasses OpenAI in Valuation" },
        description: {
          zh: "Anthropic 即将完成超 300 亿美元融资，估值突破 9000 亿美元，正式超越 OpenAI。",
          en: "Anthropic raising $30B+ at $900B+ valuation, surpassing OpenAI.",
        },
      },
      {
        title: { zh: "Mistral AI 收购 Emmi AI", en: "Mistral AI Acquires Emmi AI" },
        description: {
          zh: "Mistral AI 收购物理 AI 先驱 Emmi AI，整合物理仿真与数字孪生技术，服务航空航天、汽车行业。",
          en: "Mistral AI acquired Emmi AI for physics simulation and digital twin expertise.",
        },
      },
      {
        title: { zh: "NVIDIA 扩散语言模型光速文本生成", en: "NVIDIA Diffusion LM Light-Speed Text" },
        description: {
          zh: "NVIDIA 发布 Nemotron-Labs 扩散语言模型，扩散架构大幅提升文本生成速度。",
          en: "NVIDIA released Nemotron-Labs diffusion LM, outperforming autoregressive models.",
        },
      },
      {
        title: { zh: "飞书-Claude Code 桥接开源", en: "Feishu-Claude Code Bridge Open-Sourced" },
        description: {
          zh: "开源项目实现飞书与 Claude Code CLI 双向连接，可从飞书消息指挥 Claude Code。",
          en: "Bidirectional bridge between Feishu and local Claude Code CLI.",
        },
      },
    ],
  },
];
