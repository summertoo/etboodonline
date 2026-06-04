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
        title: { zh: "苹果 WWDC：Gemini 蒸馏模型本地运行", en: "Apple WWDC: Gemini-Distilled On-Device Models" },
        description: {
          zh: "苹果 Siri 及设备端 AI 升级将在 iPhone 芯片本地运行 Gemini 蒸馏小模型，复杂查询路由至 Google Cloud，采用 Nvidia 机密计算。",
          en: "Apple's Siri and on-device AI upgrade runs Gemini-distilled models locally on iPhone chips, routing complex queries to Google Cloud with Nvidia confidential computing.",
        },
      },
      {
        title: { zh: "特斯拉 FSD 横穿加拿大零干预", en: "Tesla FSD Cross-Canada Zero-Intervention" },
        description: {
          zh: "特斯拉 FSD V14.3.3 完成全球首次全程零干预横穿加拿大，温哥华至哈利法克斯 6051 公里，4 天 21 小时无系统退出。",
          en: "Tesla FSD V14.3.3 completed the world's first fully autonomous cross-Canada drive: Vancouver to Halifax, 6,051km, 4 days 21h, zero disengagements.",
        },
      },
      {
        title: { zh: "DeepSeek V4 Flash 上线 OpenCode Zen", en: "DeepSeek V4 Flash on OpenCode Zen" },
        description: {
          zh: "DeepSeek V4 Flash 现已上线 OpenCode Zen，为开发者提供新的模型选择。",
          en: "DeepSeek V4 Flash is now available on OpenCode Zen, offering developers a new model option.",
        },
      },
      {
        title: { zh: "OpenAI 发布生物防御工具 Rosalind", en: "OpenAI Releases Biodefense Tool Rosalind" },
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
        title: { zh: "Google Nano Banana Pro/2 正式发布", en: "Google Nano Banana Pro & 2 Released" },
        description: {
          zh: "Nano Banana Pro (gemini-3-pro-image) 和 Nano Banana 2 (gemini-3.1-flash-image) 正式发布，可通过 Gemini API 投入生产。",
          en: "Nano Banana Pro and Nano Banana 2 are now GA and available via Gemini API for production use.",
        },
      },
      {
        title: { zh: "xAI 放弃 JAX，自研 C 训练框架", en: "xAI Drops JAX for Custom C Framework" },
        description: {
          zh: "xAI 放弃 JAX GPU 堆栈（MFU 低于 10%），转向用 Grok Build 编写 C 训练框架。NVIDIA JAX 团队两年 996 投入 xAI 宣告失败。",
          en: "xAI abandoned JAX GPU stack (MFU <10%), pivoting to a C training framework via Grok Build. NVIDIA JAX team's 2-year effort with xAI failed.",
        },
      },
      {
        title: { zh: "阿里云 & Qwen 成 UEFA 全球 AI 合作伙伴", en: "Alibaba Cloud & Qwen: UEFA AI Partner" },
        description: {
          zh: "阿里云和 Qwen 成为 UEFA 官方 AI、云计算与电商合作伙伴，覆盖 2027-2033 赛季男子俱乐部赛事及 EURO 2028。",
          en: "Alibaba Cloud and Qwen named UEFA's official AI, cloud and e-commerce partner for 2027-2033 men's club competitions and EURO 2028.",
        },
      },
      {
        title: { zh: "GitHub Copilot token 计费引争议", en: "GitHub Copilot Token Billing Sparks Outcry" },
        description: {
          zh: "GitHub Copilot 改为按 token 计量计费，引发开发者广泛不满，「黄金时代似乎正在终结」。",
          en: "GitHub Copilot switched to token-based billing, sparking developer backlash — 'the golden age seems to be ending.'",
        },
      },
      {
        title: { zh: "软银 750 亿欧元投资法国 AI 数据中心", en: "SoftBank €75B France AI Data Centers" },
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
        title: { zh: "OpenAI 实时翻译模型：70+ 语言", en: "OpenAI Realtime Translator: 70+ Languages" },
        description: {
          zh: "OpenAI 推出 gpt-realtime-translate，支持 70+ 种输入语言和 13 种输出语言的实时语音翻译。",
          en: "OpenAI launched gpt-realtime-translate: realtime voice translation for 70+ input and 13 output languages.",
        },
      },
      {
        title: { zh: "阶跃星辰 Step 3.7 Flash 发布", en: "StepFun Step 3.7 Flash Released" },
        description: {
          zh: "阶跃星辰发布开源的 Step 3.7 Flash，198B MoE 架构，11B 活跃参数，在 ClawEval 和 SimpleVQA 排名第一。",
          en: "StepFun released open-source Step 3.7 Flash, 198B MoE, 11B active params, #1 on ClawEval and SimpleVQA.",
        },
      },
      {
        title: { zh: "Codex 支持 Windows 计算机使用", en: "Codex Now Supports Windows" },
        description: {
          zh: "Codex 计算机使用功能登陆 Windows，可在 Windows 电脑上直接执行操作，ChatGPT 移动端可远程引导。",
          en: "Codex computer use now on Windows, ChatGPT mobile app can remotely steer tasks on Windows PC.",
        },
      },
      {
        title: { zh: "Kog 团队实现 3000 tokens/s 推理", en: "Kog Team: 3,000 tokens/sec Inference" },
        description: {
          zh: "Kog 团队在 8× AMD MI300X GPU 上达到 3000 tokens/s 推理速度，比常规快 10-30 倍。",
          en: "Kog team achieves 3,000 tps on 8x AMD MI300X GPUs, 10-30x faster than normal.",
        },
      },
      {
        title: { zh: "中央网信办：提升全民 AI 素养", en: "China: National AI Literacy Push" },
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
        title: { zh: "Anthropic 650 亿美元 H 轮融资", en: "Anthropic $65B Series H" },
        description: {
          zh: "Anthropic 完成 650 亿美元 H 轮融资，估值 9650 亿美元，年化收入突破 470 亿美元。",
          en: "Anthropic closed $65B Series H at $965B valuation, $47B ARR.",
        },
      },
      {
        title: { zh: "Claude Code 动态工作流", en: "Claude Code Dynamic Workflows" },
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
        title: { zh: "SIA 框架：AI 递归自我改进", en: "SIA: Recursive Self-Improvement" },
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
        title: { zh: "Runway 推出 Model Context Protocol 服务器", en: "Runway Launches MCP Server" },
        description: {
          zh: "Runway 正式推出 MCP 服务器，允许 Claude、ChatGPT、Cursor 等 AI 智能体直接生成图像与视频，接入 Gen-4.5、Seedance 2.0、Kling 3.0 等模型。",
          en: "Runway released MCP server enabling AI agents to generate images and videos directly, integrating Gen-4.5, Seedance 2.0, Kling 3.0.",
        },
      },
      {
        title: { zh: "Claude Code v2.1.152 重大更新", en: "Claude Code v2.1.152 Major Update" },
        description: {
          zh: "/code-review --fix 可直接应用审查建议到工作目录；技能支持 disallowed-tools；新增 /reload-skills 命令。",
          en: "/code-review --fix now applies suggestions directly; skills support disallowed-tools; new /reload-skills command.",
        },
      },
      {
        title: { zh: "FastVideo Dreamverse 开源：7 秒生成 30 秒 1080p 视频", en: "FastVideo Dreamverse: 7s for 30s 1080p Video" },
        description: {
          zh: "Sky Computing Lab 开源 FastVideo Dreamverse，基于单张 NVIDIA B200 GPU 和 LTX-2 模型实现实时视频生成。",
          en: "Sky Computing Lab open-sourced FastVideo Dreamverse: 7 seconds to generate 30s 1080p video on single B200 GPU.",
        },
      },
      {
        title: { zh: "Cognition 成为全球最大独立智能体实验室", en: "Cognition: Largest Independent Agent Lab" },
        description: {
          zh: "Cognition 完成超 10 亿美元融资，估值达 260 亿美元，年化收入 4.92 亿美元，企业使用量增长超 10 倍。",
          en: "Cognition raised $1B+ at $26B valuation, $492M ARR, enterprise usage grew 10x+.",
        },
      },
      {
        title: { zh: "阿里云入选 Omdia 智能体 AI 市场雷达领导者", en: "Alibaba Cloud Named Omdia Agent AI Leader" },
        description: {
          zh: "阿里云被 Omdia 评为智能体 AI 市场雷达领导者，首个将整个平台围绕智能体范式构建的云服务商。",
          en: "Alibaba Cloud recognized as Agent AI market leader by Omdia, first cloud platform built around agent paradigm.",
        },
      },
      {
        title: { zh: "Qwen3.5 推理速度达 580 tokens/秒", en: "Qwen3.5 Inference: 580 tokens/sec" },
        description: {
          zh: "Qwen3.5 在 TokenSpeed 推理引擎上达到 580 tokens/秒，采用 FlashAttention-4 优化。",
          en: "Qwen3.5 achieves 580 tps on TokenSpeed engine with FlashAttention-4 optimization.",
        },
      },
      {
        title: { zh: "ITBench-AA 基准测试：所有模型得分低于 50%", en: "ITBench-AA: All Models Below 50%" },
        description: {
          zh: "首个智能体企业 IT 任务基准测试显示，所有前沿大模型得分均未超过 50%，Claude Opus 4.7 以 47% 领先。",
          en: "First agent IT benchmark shows all frontier models below 50%, Claude Opus 4.7 leads at 47%.",
        },
      },
      {
        title: { zh: "Anthropic 发布 AI 智能体零信任安全框架", en: "Anthropic Zero-Trust Security Framework" },
        description: {
          zh: "Anthropic 发布企业部署 AI 智能体的安全框架，指出漏洞利用周期从数月压缩至数小时，提出三层零信任架构。",
          en: "Anthropic released zero-trust security framework for enterprise AI agents, vulnerability exploitation compressed from months to hours.",
        },
      },
      {
        title: { zh: "OpenCode 与 MiMo V2.5 限时免费开放", en: "OpenCode + MiMo V2.5 Free Tier" },
        description: {
          zh: "OpenCode 联合 MiMo V2.5 推出限时免费：1M 上下文、推理、文本、图像。",
          en: "OpenCode x MiMo V2.5 free tier: 1M context, reasoning, text, image.",
        },
      },
      {
        title: { zh: "Perplexity 开源 Unigram 分词器", en: "Perplexity Open-Sources Unigram Tokenizer" },
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
        title: { zh: "谷歌 AlphaProof Nexus 攻克 2 道悬置 56 年数学难题", en: "Google AlphaProof Nexus Solves 56-Year Math Problems" },
        description: {
          zh: "谷歌 AI 框架 AlphaProof Nexus 成功攻克两道悬置 56 年的数学难题，展示 AI 在数学发现领域的突破性进展。",
          en: "Google's AI framework AlphaProof Nexus solved two math problems that had remained unsolved for 56 years.",
        },
      },
      {
        title: { zh: "面壁智能开源 MiniCPM5-1B：超越所有 2B 以下模型", en: "MiniCPM5-1B Open-Sourced: Beats All <2B Models" },
        description: {
          zh: "面壁智能开源 MiniCPM5-1B，仅 1B 参数在 AA-Index 榜单超越所有 2B 以下模型，支持手机和浏览器运行。",
          en: "MiniCPM5-1B has only 1B parameters but outperforms all models under 2B on AA-Index, runs on phone and browser.",
        },
      },
      {
        title: { zh: "Qwen3.7-Max 成为全球第二大 AI 编程模型", en: "Qwen3.7-Max Now #2 Global AI Coding Model" },
        description: {
          zh: "Qwen3.7-Max 在 Code Arena 上得分 1541，仅次于 Claude，专为生产环境打造，可运行 35 小时任务。",
          en: "Qwen3.7-Max scores 1541 on Code Arena, second only to Claude, built for production with 35-hour task capability.",
        },
      },
      {
        title: { zh: "小米 MiMo 2.5 Pro 大幅降价，与 DeepSeek V4 Pro 同价", en: "MiMo 2.5 Pro Price Drop: Matches DeepSeek V4 Pro" },
        description: {
          zh: "小米 MiMo-V2.5 系列 API 价格永久下调最高 99%，现与 DeepSeek V4 Pro 同价，token 套餐升级 5-8 倍。",
          en: "MiMo-V2.5 API prices dropped up to 99%, now priced same as DeepSeek V4 Pro with 5-8x more tokens.",
        },
      },
      {
        title: { zh: "Claude Code 推出安全漏洞识别插件", en: "Claude Code Releases Security Vulnerability Plugin" },
        description: {
          zh: "Claude Code 发布安全指导插件，可在编写代码时帮助识别和修复漏洞。",
          en: "Claude Code released a security guidance plugin to help identify and fix vulnerabilities while coding.",
        },
      },
      {
        title: { zh: "OpenRouter 完成 1.13 亿美元 B 轮融资", en: "OpenRouter Raises $113M Series B" },
        description: {
          zh: "OpenRouter 完成 1.13 亿美元 B 轮融资，周处理量从 5 万亿增长到 25 万亿 token。",
          en: "OpenRouter raised $113M in Series B, weekly token processing grew from 5T to 25T.",
        },
      },
      {
        title: { zh: "Claude Mythos 解决 OpenAI Erdős 猜想", en: "Claude Mythos Solves OpenAI's Erdős Conjecture" },
        description: {
          zh: "Claude Mythos 在周末解决了 OpenAI 提出的 Erdős 单位距离猜想问题，给出简洁证明。",
          en: "Claude Mythos solved OpenAI's Erdős unit distance conjecture over the weekend with an elegant proof.",
        },
      },
      {
        title: { zh: "Kling AI 驱动《大卫之家》实现多项行业首创", en: "Kling AI Powers 'The House of David' Industry Firsts" },
        description: {
          zh: "Kling AI 实现多项行业首创：首次在完整剧集中使用 AI 生成场景，首个原生 4K 模型。",
          en: "Kling AI achieved industry firsts: first AI-generated scenes in a finished series, first native 4K model.",
        },
      },
      {
        title: { zh: "Runway Project Luxo：AI 视频跨越恐怖谷", en: "Runway Project Luxo: AI Video Crosses Uncanny Valley" },
        description: {
          zh: "Runway 研究发现 AI 生成视频已跨越「恐怖谷」，观众开始关注故事本身而非技术瑕疵。",
          en: "Runway research found AI-generated video has crossed the 'uncanny valley' — audiences now focus on story, not tech flaws.",
        },
      },
      {
        title: { zh: "SenseNova-U1 全训练代码开源", en: "SenseNova-U1 Full Training Code Open-Sourced" },
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
        title: { zh: "华为昇腾 1.58-bit 端侧大模型 BitCPM-CANN", en: "Huawei Ascend 1.58-bit Edge Model BitCPM-CANN" },
        description: {
          zh: "面壁智能联合清华等开源中国首个基于华为昇腾训练的 1.58-bit 端侧大模型 BitCPM-CANN，突破国产芯片端侧部署。",
          en: "BitCPM-CANN, China first 1.58-bit edge model trained on Huawei Ascend chips, open-sourced by consortium including Tsinghua.",
        },
      },
      {
        title: { zh: "Grok Build Beta 向 SuperGrok 开放", en: "Grok Build Beta Opens to SuperGrok" },
        description: {
          zh: "xAI 发布 Grok Build Beta 版，支持 Plan Mode、通过 Imagine 生成图像视频、CLI 构建自动化编排器。",
          en: "xAI launched Grok Build Beta with Plan Mode, image-video generation via Imagine, and CLI automation.",
        },
      },
      {
        title: { zh: "Qwen3.7-Max 隐式缓存上线", en: "Qwen3.7-Max Implicit Cache Launched" },
        description: {
          zh: "阿里通义千问 Qwen3.7-Max 隐式缓存功能上线，自动启用无需设置，开箱即用更快更便宜。",
          en: "Alibaba Qwen3.7-Max implicit caching launched, auto-enabled for faster and cheaper inference.",
        },
      },
      {
        title: { zh: "苹果定制 1.2T 参数 Google 模型重塑 Siri", en: "Apple Customizes 1.2T Google Model for Siri" },
        description: {
          zh: "苹果为下一代 Siri 使用定制版 1.2T 参数 Google 大模型，显著大于 Gemini 3.5 Flash 的 300B，简单查询预期本地运行。",
          en: "Apple using customized 1.2T-parameter Google model for next-gen Siri, larger than Gemini 3.5 Flash 300B.",
        },
      },
      {
        title: { zh: "教皇通谕警告 AI 风险", en: "Pope Warns of AI Risks in Encyclical" },
        description: {
          zh: "教皇里奥十四世在首份重要通谕中警告 AI 驱动战争风险、对劳动的影响，呼吁建立法律伦理框架。",
          en: "Pope Leo XIV warned of AI-driven warfare and labor impacts, calling for legal and ethical frameworks.",
        },
      },
      {
        title: { zh: "GPT-5.6 曝光：150 万 tokens 上下文", en: "GPT-5.6 Leaked: 1.5M Token Context" },
        description: {
          zh: "OpenAI 未官宣的 GPT-5.6 模型（内部代号 iris-alpha）被发现，支持 150 万 token 上下文，90 万 token 时仍流畅响应，预计六月发布。",
          en: "Unannounced GPT-5.6 (codename iris-alpha) supports 1.5M token context, responds smoothly at 900K tokens, expected June release.",
        },
      },
      {
        title: { zh: "华为 “韬定律” 逻辑折叠芯片技术", en: "Huawei “Tao Law” Logic Folding Chip Tech" },
        description: {
          zh: "何庭波在 ISCAS 2026 提出逻辑折叠技术，不依赖新光刻工艺提升芯片性能，晶体管密度提升 53%，能效提高 41%。",
          en: "He Tingbo proposed LogicFolding at ISCAS 2026, boosting transistor density by 53% and energy efficiency by 41%.",
        },
      },
      {
        title: { zh: "Chris Olah 在教皇通谕发布会发言", en: "Chris Olah Speaks at Pope Encyclical" },
        description: {
          zh: "Anthropic 联合创始人 Olah 出席梵蒂冈 AI 通谕发布会，指出前沿 AI 实验室面临商业、研究和地缘政治压力，需要外部监督。",
          en: "Anthropic co-founder Olah noted frontier AI labs face commercial, research, and geopolitical pressures requiring external oversight.",
        },
      },
      {
        title: { zh: "AI 智能体术语辨析：Harness vs Scaffold", en: "AI Agent Terms: Harness vs Scaffold" },
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
