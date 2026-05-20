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
];
