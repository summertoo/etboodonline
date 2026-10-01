import type { NewsItem } from "./types";

export const newsList: NewsItem[] = [
  {
    id: "2026-10-01",
    date: "2026-10-01",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-10-01",
      en: "🤖 AI HOT Daily · Oct 1, 2026",
    },
    summary: {
      zh: "今日焦点：《纽约时报》报道 OpenAI 两名员工在模型失控前数月已邮件警告高层测试阶段监控不足、安全防护不严，但被告知须按期推进发布，公司未增设安全流程；同日，FTC 以消费者保护为由对 OpenAI、Anthropic 等头部 AI 实验室启动全面调查，主席 Andrew Ferguson 计划通过具法律约束力的 Civil Investigative Demands 强制调取文件并质询高管，命令将在未来数周内发出。此外：Google DeepMind 发布新前沿模型 Gemini 4 Argon，先通过 Fairwind Program 向可信网络防御者开放，后续逐步面向开发者、企业和消费者推出——Artificial Analysis 评测其高推理档在智能指数得 53 分，追平 GPT-6 Astra (max)、领先 GPT-6.1 Sol，Google 重回智能前三梯队，在 Agent Arena 以净提升 +7.92%、每任务成本 $0.62 排第 8；GPT-6.1 Sol (Max) 以 1759 分登上 Code Arena: WebDev 第 3 名、混合价 $8/M token，比 GPT-6 Sol (Max) 同价提升 70 分、排名上升 4 位，其标准输出价为 Astra 的五分之一；据路透社通过 IPO 申报文件披露，Anthropic 与 SpaceX 签署最高达 845 亿美元的算力协议，租用 SpaceX 数据中心内的英伟达 GPU，可提前 90 天通知解除；OpenAI 披露识别并处置了一起有组织的模型蒸馏攻击行动——该行动旨在系统性提取受保护的推理内容，最早活动出现在 7 月第一周；特朗普推动约二十余家科技公司签署白宫超级智能协议，承诺独立安全审计、定期会商并制定共同安全标准（网络安全、生物与化学威胁等），协议无法律约束力但有'道德约束力'——文章同时指出 OpenAI 近期事故源于今年 5 至 7 月开发中的一个未发布模型；蚂蚁百灵发布 Ling-3.1-flash，总参数约 560B、每 Token 激活约 25B、上下文上限 1M，延续混合线性架构并提高线性 Attention 层比例（7 层 KDA 配 1 层 Gated MLA，512 个路由专家选 8 个加 1 个共享专家）；DeepSeek 开源面向华为昇腾平台的基础设施组件，包括 TileLang、DeepGEMM、DeepEP、TileKernels、FlashMLA、DeepSelect，与此前英伟达平台开源组件一一对应；Google DeepMind 发布 SynthID Bio，将不可见签名嵌入 AI 生成的生物序列与预测结构中，可在合成的物理蛋白质上验证且不损害生物功能；Perplexity 向所有人开放 Computer 的邮件委托功能——无需账号，转发或抄送 computer@perplexity.com 的任务限时免费运行；PromptArmor 披露 Microsoft Copilot Cowork 的 AI 网关可被恶意 Skill 劫持，绕过沙箱外传文件；Anthropic 用 Claude 评估约 19,000 项工作任务发现，现今机器人可完成美国 74% 的物理任务，但仅在 0.3% 的任务上比人工更具成本竞争力，按每年约 3% 的降价趋势约需 40 年才能达到 10%；MIT、CMU、NYU 与 Stanford 团队开发的 Ataraxos 以极低成本在隐藏信息棋 Stratego 上大幅超越世界顶级人类选手，论文发表于 Nature；GamersNexus 分析指出 Micron、Samsung、SK Hynix 等内存厂商正以 3-5 年长期协议把 50%-70% 产能锁定给最大的 5-16 家客户，消费级 RAM 与 SSD 价格一年大涨；METR 主席 Chris Painter 就 AI 智能体事故在美国参议院'Rogue AI'听证会上作证；Arena 限时开放 Claude Sonnet 5.5 (High) 的 Direct Mode 测试至 10 月 2 日上午 8 点（太平洋时间）；Factory Automations 向所有用户开放，Droid 可按定时或 Slack、GitHub、webhook 事件自动执行工程工作流；Artificial Analysis 开源 AA-AgentPerf-Local 工具并上线笔记本与工作站本地推理排行榜；OpenRouter 连发三篇 Agent 测试教程：从生产流量构建 golden 评测集、提示词或模型变更后的回归测试、工具调用准确性测试；vLLM 发布 v0.30.0 及以上版本的分离式推理实用指南。",
      en: "Today's focus: The New York Times reports two OpenAI employees emailed executives months before a model spun out of control, warning that test-phase monitoring was thin — they were told to ship on schedule without added security protocols; the same day the FTC opens a sweeping consumer-protection probe of OpenAI, Anthropic, and other top AI labs, with chairman Andrew Ferguson planning legally binding Civil Investigative Demands for documents and executive testimony within weeks. Also: Google DeepMind unveils frontier model Gemini 4 Argon, first to trusted cyber defenders via the Fairwind Program before a broader developer, enterprise, and consumer rollout — Artificial Analysis scores its high-reasoning tier 53 on the Intelligence Index, tying GPT-6 Astra (max) and beating GPT-6.1 Sol, putting Google back in the top three labs, while on Agent Arena it ranks 8th with a net +7.92% at $0.62 per task; GPT-6.1 Sol (Max) hits 3rd on Code Arena: WebDev at 1,759 (~$8/M mixed), up 70 points and four spots over GPT-6 Sol (Max) at the same price, with standard output priced at a fifth of Astra; per Reuters citing IPO filings, Anthropic signs a compute deal with SpaceX worth up to $84.5B to rent NVIDIA GPUs in SpaceX datacenters, terminable on 90 days' notice; OpenAI says it detected and disrupted a coordinated model-distillation campaign — an organized effort to systematically extract protected reasoning content that started around the first week of July; Trump rounds up ~20 tech companies for a voluntary White House 'superintelligence' agreement committing to independent security audits, regular consultations, and shared safety standards spanning cyber, bio, and chemical threats — non-binding but, he says, morally so, with the piece noting OpenAI's recent incidents trace to an unreleased model developed May-July; Ant's Bailing ships Ling-3.1-flash — ~560B total params, ~25B active per token, 1M context, a hybrid linear architecture with more linear-attention layers (7 KDA + 1 Gated MLA, 512 routed experts picking 8 plus 1 shared); DeepSeek open-sources its Ascend (Huawei) infrastructure stack — TileLang, DeepGEMM, DeepEP, TileKernels, FlashMLA, DeepSelect — mirroring its NVIDIA components one-for-one; Google DeepMind's SynthID Bio embeds invisible signatures into AI-generated protein sequences and predicted structures, verifiable on physical synthesized proteins without hurting function in wet labs; Perplexity opens Computer's email-delegation to everyone — no account required, forward/cc computer@perplexity.com and tasks run free for a limited time; PromptArmor discloses that Copilot Cowork's AI gateway can be hijacked by a malicious Skill to bypass the sandbox and exfiltrate files; Anthropic, using Claude over ~19,000 work tasks, finds today's robots could do 74% of US physical tasks yet are cost-competitive on only 0.3% — needing ~40 years at ~3% annual cost decline to reach 10%; a MIT/CMU/NYU/Stanford system called Ataraxos defeats top human Stratego players at minimal cost (published in Nature); GamersNexus reports Micron, Samsung, and SK Hynix are locking 50-70% of capacity into 3-5 year long-term agreements with their 5-16 largest customers, helping drive a year-long surge in consumer RAM/SSD prices; METR chair Chris Painter testifies before the US Senate on AI agent incidents in a 'Rogue AI' hearing; Arena opens Claude Sonnet 5.5 (High) in Direct Mode until Oct 2, 8 AM PT; Factory Automations goes GA so Droid runs engineering workflows on schedules or Slack/GitHub/webhook triggers; Artificial Analysis open-sources AA-AgentPerf-Local with laptop/workstation local-inference leaderboards; OpenRouter publishes three agent-testing tutorials (golden evals from production traffic, regression testing after prompt/model changes, and tool-calling accuracy); and vLLM ships a practical guide to disaggregated serving on v0.30.0+.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "纽约时报：OpenAI 高层接警告仍要求按期发布",
          en: "NYT: OpenAI Ignored Employee Warnings, Pushed Release Anyway",
        },
        description: {
          zh: "两名员工在模型失控前数月邮件警示测试期监控不足，高管仍要求按期推进发布、未增设安全流程。",
          en: "Two employees emailed executives months ahead about thin test monitoring; leadership still ordered the release on schedule with no added protocols.",
        },
      },
      {
        title: {
          zh: "FTC 对 OpenAI、Anthropic 等启动全面调查",
          en: "FTC Opens Sweeping Probe of OpenAI, Anthropic and More",
        },
        description: {
          zh: "以消费者保护为由，计划通过 Civil Investigative Demands 强制调取文件并质询高管，METR 也在审查范围。",
          en: "Consumer-protection grounds; plans binding Civil Investigative Demands for documents and executive testimony, with METR in scope.",
        },
      },
      {
        title: {
          zh: "Google 发布 Gemini 4 Argon，重返智能前三",
          en: "Gemini 4 Argon Puts Google Back in the Top Three",
        },
        description: {
          zh: "先经 Fairwind 向可信网络防御者开放；智能指数 53 追平 GPT-6 Astra；Agent Arena 第 8（+7.92%，$0.62/任务）。",
          en: "Debuts via Fairwind to trusted cyber defenders; 53 on the Intelligence Index tying GPT-6 Astra; 8th on Agent Arena at +7.92% and $0.62/task.",
        },
      },
      {
        title: {
          zh: "GPT-6.1 Sol 登 Code Arena WebDev 第 3",
          en: "GPT-6.1 Sol Takes 3rd on Code Arena: WebDev",
        },
        description: {
          zh: "1759 分、$8/M 混合价，比 GPT-6 Sol (Max) 同价提升 70 分、升 4 位；标准输出价为 Astra 五分之一。",
          en: "1,759 points at ~$8/M mixed — 70 higher and four spots above GPT-6 Sol (Max), with output at one-fifth Astra's price.",
        },
      },
      {
        title: {
          zh: "Anthropic 与 SpaceX 签署最高 845 亿美元算力协议",
          en: "Anthropic and SpaceX Agree on Up to $84.5B in Compute",
        },
        description: {
          zh: "租用 SpaceX 数据中心内英伟达 GPU，据 IPO 申报文件披露，可提前 90 天通知解除。",
          en: "NVIDIA GPUs in SpaceX datacenters per the S-1, terminable on 90 days' notice.",
        },
      },
      {
        title: {
          zh: "OpenAI 处置有组织模型蒸馏攻击",
          en: "OpenAI Disrupts a Coordinated Distillation Campaign",
        },
        description: {
          zh: "识别并处置了系统性提取受保护推理内容的攻击行动，最早活动出现在 7 月第一周。",
          en: "Detected and shut down an organized effort to extract protected reasoning, active since the first week of July.",
        },
      },
      {
        title: {
          zh: "特朗普推动 20 余家签署自愿性 AI 安全协议",
          en: "Trump's Voluntary AI Safety Pact Draws ~20 Signatories",
        },
        description: {
          zh: "承诺独立安全审计、定期会商与共同标准（网络/生物/化学威胁）；无法律约束，有'道德约束'。",
          en: "Independent audits, regular consultation, and shared standards across cyber, bio, and chemical risks — non-binding but 'morally' so.",
        },
      },
      {
        title: {
          zh: "蚂蚁百灵 Ling-3.1-flash：面向真实世界长任务",
          en: "Ant Bailing's Ling-3.1-flash: Built for Long Real-World Tasks",
        },
        description: {
          zh: "约 560B 总参、每 Token 激活约 25B、1M 上下文，混合线性架构，512 路由专家选 8 加 1 共享。",
          en: "~560B params, ~25B active per token, 1M context, hybrid linear architecture with 512 routed experts (8 + 1 shared).",
        },
      },
      {
        title: {
          zh: "DeepSeek 开源华为昇腾基础设施组件",
          en: "DeepSeek Open-Sources Its Ascend Infra Stack",
        },
        description: {
          zh: "TileLang、DeepGEMM、DeepEP、TileKernels、FlashMLA、DeepSelect，与英伟达平台组件一一对应。",
          en: "TileLang, DeepGEMM, DeepEP, TileKernels, FlashMLA, and DeepSelect mirror its NVIDIA components one-for-one.",
        },
      },
      {
        title: {
          zh: "DeepMind 发布 SynthID Bio：AI 蛋白质可验证水印",
          en: "DeepMind's SynthID Bio Watermarks AI Proteins",
        },
        description: {
          zh: "将不可见签名嵌入生物序列与预测结构，可在合成的物理蛋白质上验证，湿实验不损功能。",
          en: "Invisible signatures in biological sequences stay verifiable on physical proteins without harming wet-lab function.",
        },
      },
      {
        title: {
          zh: "Perplexity Computer 开放邮件委托",
          en: "Perplexity Computer Opens Email Delegation",
        },
        description: {
          zh: "无需账号，转发或抄送 computer@perplexity.com 的任务限时免费运行。",
          en: "No account needed; forward or cc computer@perplexity.com and tasks run free for now.",
        },
      },
      {
        title: {
          zh: "Copilot Cowork 网关劫持漏洞曝光",
          en: "Copilot Cowork's Gateway Hijacking Flaw Exposed",
        },
        description: {
          zh: "恶意 Skill 可劫持 AI 网关绕过沙箱外传文件。",
          en: "A malicious Skill can hijack the AI gateway to bypass the sandbox and exfiltrate files.",
        },
      },
      {
        title: {
          zh: "Anthropic：机器人可做 74% 物理任务，仅 0.3% 成本占优",
          en: "Anthropic: Robots Can Do 74% of Physical Work, Cheaply on 0.3%",
        },
        description: {
          zh: "对约 19,000 项工作任务评估，按年降 3% 的成本趋势约需 40 年才能达到 10%。",
          en: "Across ~19,000 tasks, cost parity on just 0.3%; ~40 years at 3%/yr cost decline to reach 10%.",
        },
      },
      {
        title: {
          zh: "Ataraxos 以极低成本战胜顶级人类 Stratego 选手",
          en: "Ataraxos Topples Top Human Stratego Players on the Cheap",
        },
        description: {
          zh: "MIT/CMU/NYU/Stanford 合作，在隐藏信息棋 Stratego 上大幅超越世界顶级选手，论文登 Nature。",
          en: "A MIT/CMU/NYU/Stanford system crushes elite human Stratego players at minimal cost — published in Nature.",
        },
      },
      {
        title: {
          zh: "内存厂商锁定产能推涨 RAM/SSD 价格",
          en: "Memory Makers' Long-Term Deals Inflate RAM and SSD Prices",
        },
        description: {
          zh: "Micron/Samsung/SK Hynix 以 3-5 年 LTA 把 50%-70% 产能分给最大客户，消费级存储一年大涨。",
          en: "3-5 year LTAs tie 50-70% of capacity to a handful of big customers — consumer storage surged all year.",
        },
      },
      {
        title: {
          zh: "METR 主席就 AI 智能体事故赴参议院作证",
          en: "METR Chair Testifies on 'Rogue AI'",
        },
        description: {
          zh: "Chris Painter 在参议院国土安全小组委员会题为 'Rogue AI' 的听证会上作证。",
          en: "Chris Painter speaks to the Senate homeland-security subcommittee's 'Rogue AI' hearing.",
        },
      },
      {
        title: {
          zh: "Arena 限时开放 Claude Sonnet 5.5 Direct Mode",
          en: "Claude Sonnet 5.5 Direct Mode, 48 Hours on Arena",
        },
        description: {
          zh: "截止 10 月 2 日上午 8 点（太平洋时间），之后仍可在 Battle 与 Agent Mode 使用。",
          en: "Open until Oct 2, 8 AM PT, then still available in Battle and Agent Mode.",
        },
      },
      {
        title: {
          zh: "Factory Automations 全面开放",
          en: "Factory Automations Goes GA",
        },
        description: {
          zh: "Droid 可按定时或 Slack、GitHub、webhook 事件自动执行工程工作流，支持 BYOK 与自选机器。",
          en: "Droid runs engineering workflows on schedules or Slack/GitHub/webhook triggers, with BYOK and your pick of machines.",
        },
      },
      {
        title: {
          zh: "OpenRouter 三篇 Agent 测试教程",
          en: "OpenRouter's Three Agent-Testing Guides",
        },
        description: {
          zh: "从生产流量构建 golden 评测集（20-50 条起步到 100-1,000 条）、提示词/模型变更后回归测试、模型工具调用准确性测试。",
          en: "Golden eval sets from production traffic (20-50 samples scaling to 100-1,000), regression after prompt/model changes, and tool-calling accuracy.",
        },
      },
      {
        title: {
          zh: "vLLM 分离式推理实用指南",
          en: "vLLM's Disaggregated-Serving Field Guide",
        },
        description: {
          zh: "讲解 v0.30.0+ 中 prefill/decode 分离、无 GPU 前端及组合方案。",
          en: "Prefill/decode splitting, GPU-free render frontends, and how to combine them on v0.30.0+.",
        },
      },
    ],
  },
  {
    id: "2026-10-01-hot",
    date: "2026-10-01",
    title: {
      zh: "🔥 今日热搜 · 2026-10-01",
      en: "🔥 Hot Topics · Oct 1, 2026",
    },
    summary: {
      zh: "今日正值新中国成立 77 周年国庆——'我爱你中国'刷屏祝福伟大祖国山河锦绣、国泰民安，央视《中国梦·家国情——2026国庆特别节目》节目单发布、于晚 8 点档在 CCTV-1、3、15 及新媒体平台同步播出；华为 10 月 1 日发布 Mate90 系列：Mate90 起售价 5999 元、Pro 6999 元、Pro Max 9499 元、典藏版 10999 元、RS 非凡大师版 12999 元，光学昆仑玻璃首用于摄像头盖板、全昆仑玄武架构落地，发布当天即开售，余承东宣布首发四卡三待（SIM+eSIM 组合，可同时通话、上网和收发短信）；4 款韬定律麒麟芯片集体亮相并全系搭载（麒麟 9030、9035、9050 Pro 等逻辑折叠芯片），实现软硬芯云垂直整合、整机性能提升 31%；广西桂林市中华文化促进会公告：原央视主持人阿丘在桂林举办收费活动时擅自使用'央视''中华文化促进会'名义宣传、造成明显误导，所有行为属其个人行为；以色列总理还原迪拜航空客机安全事件——一架从迪拜飞往以色列的航班上，一名飞行员刺伤另一名飞行员、企图使飞机坠毁，紧急降落沙特阿拉伯，现场曝光视频显示机长浑身是血倒地、副机长被绑昏迷；80 岁史泰龙接受《纽约时报》专访坦承'糟蹋了身体'，透露看似健壮的身体是靠'打包铁丝'勉强固定、经历过多次手术并依赖药物；普京在俄国家杜马讲话称俄罗斯不会满世界跑去屈辱地乞求施舍，'没有人会给我们，我们也不需要那样做'；'农民交公粮能否视同缴社保'登上热搜——热议背后是农村老龄化远超城市与大众对农民历史贡献的共情，政策层面持续回应，今年政府工作报告已提出城乡居民基础养老金月最低标准再提高 20 元；名古屋亚运会攀岩女子速度赛计时系统频发故障（一度中断 20 分钟且屏幕无成绩），中国选手邓丽娟以 0.002 秒之差摘银、印尼选手夺冠，官方成绩单仍未最终确认；西安 4 名嫌疑人组团盗窃共享单车当废铁卖，8 天累计盗取 3 家平台 300 余辆、总重 13 吨，卖赃流水 5 万余元但扣除成本后分文未赚反倒亏本；乐纯酸奶回应'CEO 亲自录给你'文案争议，客服称'知错了！磕头认错！已和 CEO 一起关在小黑屋面壁思过'并已上报整改；C 罗宣布离开葡萄牙国家队训练营，主帅热苏斯与足协主席追至机场劝留无果，此或意味其正式结束国家队生涯——此前对阵挪威他坐了 90 分钟冷板凳且赛后未谢场；亚运会男足半决赛中国队负于韩国无缘决赛，张玉宁、王钰栋等表示虽败犹荣并看到与强队抗衡的能力，全队目标是全力以赴、带着奖牌回家；比亚迪召开临时股东会复盘'比亚迪不是特斯拉对手'的旧论——其以技术创新与垂直整合逆袭，2025 年全年销量超 460 万辆、纯电销量首超特斯拉；周深与张译同日在人民日报撰文——周深谈新歌《奔腾》认为'奔腾'就是'出发'、鼓励受挫后带着韧劲重新出发，张译分享在《神探之痕迹》中塑造'七一勋章'获得者崔道植的感悟并向全国公安民辅警致敬。",
      en: "It's National Day — the 77th anniversary of the People's Republic. 'I Love You, China' floods social feeds with wishes of a magnificent land and peace for all, and CCTV unveils the 'Chinese Dream, Home and Country — 2026 National Day Special' lineup airing 8 PM on CCTV-1, 3, 15 and digital platforms; Huawei launches the Mate90 series on Oct 1 — Mate90 from ¥5,999, Pro ¥6,999, Pro Max ¥9,499, collector's at ¥10,999 and RS Master at ¥12,999, with optical Kunlun glass debuting on the camera cover and the full Kunlun-Xuanwu architecture landing, on sale the same day, as Yu Chengdong touts the industry-first four-card three-standby (SIM+eSIM) that calls, surfs, and texts simultaneously; four 'Tao law' Kirin chips (Kirin 9030, 9035, 9050 Pro and fold-out stablemates) debut across the line with software-hardware-chip-cloud vertical integration and a 31% whole-device performance leap; Guilin's Chinese Culture Promotion Association announces former CCTV host Aqiu used its and CCTV's names without authorization to promote a paid event in Guilin, causing clear confusion — all acts being his personal ones; Israel's PM recounts the Dubai Air incident — on a flight from Dubai to Israel a pilot stabbed his colleague in an attempt to crash the plane, now emergency-landed in Saudi Arabia, with footage showing the captain bloodied on the floor and the co-pilot bound and unconscious; 80-year-old Sylvester Stallone tells the NYT he 'ruined his body' — a physique held together by 'baling wire,' multiple surgeries, and medication that he now regrets; Putin tells the State Duma Russia won't go begging around the world — 'no one will give us anything, and we don't need it'; 'Can farmers' grain deliveries count as social-security contributions?' tops the charts, echoing urban-rural demographic gaps and empathy for rural contributors — while policy responds, with this year's report raising the rural basic-pension monthly floor another ¥20; at Nagoya, the women's speed-climbing timing system fails repeatedly (a 20-minute stoppage, blank screens), Chinese climber Deng Lijuan missing gold by 0.002 seconds to Indonesia's champion, with official results still unconfirmed; four suspects in Xi'an spend 8 days stealing 300+ shared bikes (13 tons) from three platforms to sell as scrap — ¥50K in sales minus costs leaves them in the red; Lecun yogurt answers the 'personally recorded for you by the CEO' copy backlash with 'we admit it! Kowtow apology! Locked in a dark room with the CEO reflecting' and promises fixes; Cristiano Ronaldo quits Portugal's training camp — coach Jesus and the federation president chase him to the airport in vain, likely ending his international career after a 90-minute cold bench against Norway with no post-match salute; China's men's football loses 0-1 to South Korea in the Asian Games semifinal, yet players like Zhang Yuning and Wang Yudong see progress and set one goal — bring a medal home; BYD's shareholder meeting re-litigates Musk's old 'BYD is no rival' jibe — it sold 4.6M+ cars in 2025 with BEV sales overtaking Tesla; and Zhou Shen and Zhang Yi both publish in People's Daily on National Day — Zhou on his song 'Gallop' equating it with 'setting off' freshly after setbacks, Zhang sharing his portrayal of 'July 1 Medal' recipient Cui Daozhi and saluting China's police.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "华为 Mate90 系列发布：5999 元起",
          en: "Huawei Mate90 Debuts From ¥5,999",
        },
        description: {
          zh: "Pro 6999、Pro Max 9499 元，典藏版/RS 非凡大师版 10999/12999 元；光学昆仑玻璃首用于摄像头盖板，发布当天即开售。",
          en: "Pro ¥6,999, Pro Max ¥9,499, collector and RS Master at ¥10,999/¥12,999; optical Kunlun glass debuts on camera covers, on sale immediately.",
        },
      },
      {
        title: {
          zh: "4 款韬定律麒麟芯片亮相 + 四卡三待",
          en: "Four 'Tao Law' Kirin Chips, Four-Card Three-Standby",
        },
        description: {
          zh: "麒麟 9030/9035/9050 Pro 等全系搭载，软硬芯云垂直整合、整机性能提升 31%；业界首发四卡三待。",
          en: "Kirin 9030/9035/9050 Pro across the line with full vertical integration and +31% device performance; industry-first four-card three-standby.",
        },
      },
      {
        title: {
          zh: "我爱你中国！庆祝新中国成立 77 周年",
          en: "Happy 77th Anniversary, People's Republic!",
        },
        description: {
          zh: "国庆日祝福伟大祖国山河锦绣、国泰民安。",
          en: "National Day wishes of a magnificent land and peace for all.",
        },
      },
      {
        title: {
          zh: "央视国庆晚会节目单发布",
          en: "CCTV National Day Gala Lineup Unveiled",
        },
        description: {
          zh: "《中国梦·家国情——2026国庆特别节目》晚 8 点档在 CCTV-1、3、15 及新媒体平台同步播出。",
          en: "'Chinese Dream, Home and Country' airs 8 PM on CCTV-1, 3, 15 and digital platforms.",
        },
      },
      {
        title: {
          zh: "原央视主持人阿丘被通报",
          en: "Former CCTV Host Aqiu Cited for Name Misuse",
        },
        description: {
          zh: "办收费活动时擅自使用'央视''中华文化促进会'名义宣传造成误导，行为属其个人所有。",
          en: "Promoted a paid Guilin event with both CCTV's and the association's names without authorization — all acts deemed personal.",
        },
      },
      {
        title: {
          zh: "迪拜航空客机安全事件：副机长企图使飞机坠毁",
          en: "Dubai Air Incident: Co-Pilot Tried to Crash the Plane",
        },
        description: {
          zh: "刺伤机长后紧急降落沙特；以总理还原经过，现场视频显示机长浑身是血倒地、副机长被绑昏迷。",
          en: "After stabbing the captain the plane emergency-lands in Saudi Arabia; footage shows the bloodied captain and a bound, unconscious co-pilot.",
        },
      },
      {
        title: {
          zh: "史泰龙：我糟蹋了自己的身体",
          en: "Stallone: 'I Ruined My Body'",
        },
        description: {
          zh: "80 岁专访透露看似健壮的身体靠'打包铁丝'固定，经历多次手术并依赖药物，如今懊悔当初决定。",
          en: "At 80, he says his strongman look is held by 'baling wire' — multiple surgeries and medication he now regrets.",
        },
      },
      {
        title: {
          zh: "普京：俄罗斯不会满世界'乞讨'",
          en: "Putin: Russia Won't Beg Around the World",
        },
        description: {
          zh: "称'没有人会给我们，我们也不需要那样做'。",
          en: "'No one will give us anything, and we don't need it.'",
        },
      },
      {
        title: {
          zh: "农民交公粮能否视同缴社保",
          en: "Could Grain Deliveries Count as Pension Years China?",
        },
        description: {
          zh: "热议背后是农村老龄化与对农民历史贡献的共情；今年政府工作报告已提出基础养老金月最低标准再提高 20 元。",
          en: "The debate reflects rural aging and gratitude for farmers' past contributions; this year's report raises the basic-pension floor another ¥20.",
        },
      },
      {
        title: {
          zh: "攀岩女子速度赛：0.002 秒之差无缘冠军",
          en: "Climbing's 0.002-Second Miss",
        },
        description: {
          zh: "名古屋计时系统频故障致比赛一度中断 20 分钟，邓丽娟以 0.002 秒之差摘银，官方成绩仍未确认。",
          en: "Nagoya's faulty timing halts the race 20 minutes; Deng Lijuan takes silver by 0.002s — official results still pending.",
        },
      },
      {
        title: {
          zh: "4 人偷 13 吨共享单车卖废铁",
          en: "Scrap Scheme: 13 Tons of Stolen Shared Bikes",
        },
        description: {
          zh: "8 天盗取 3 家平台 300 余辆，卖赃 5 万余元但扣除成本后分文未赚、反倒亏本。",
          en: "300+ bikes from three platforms in 8 days; ¥50K in scrap sales minus costs leaves the crew in the red.",
        },
      },
      {
        title: {
          zh: "乐纯酸奶'CEO 亲自录给你'文案翻车",
          en: "Lecun's 'Recorded by the CEO' Copy Backfires",
        },
        description: {
          zh: "被指自我感动式营销、居高临下；客服回应'知错了！磕头认错！已和 CEO 一起面壁思过'。",
          en: "Criticized as self-indulgent and condescending; CS replies 'we admit it, kowtow apology, locked in a room with the CEO reflecting.'",
        },
      },
      {
        title: {
          zh: "C 罗宣布离开葡萄牙国家队训练营",
          en: "Ronaldo Walks Out of Portugal's Camp",
        },
        description: {
          zh: "主帅与足协主席追至机场劝留无果，或正式结束国家队生涯；此前对挪威坐满冷板凳且未谢场。",
          en: "Coach and federation president chase him to the airport in vain; his international career may be over after a cold bench against Norway.",
        },
      },
      {
        title: {
          zh: "中国男足表态：带着奖牌回家",
          en: "China's Men's Football: Bring a Medal Home",
        },
        description: {
          zh: "亚运半决赛负韩国无缘决赛，球员称看到与强队抗衡能力，季军赛全力以赴。",
          en: "Semi-final loss to South Korea stings, but players see growing parity and vow to win bronze.",
        },
      },
      {
        title: {
          zh: "'比亚迪不是特斯拉对手'应验了吗",
          en: "Was 'BYD Is No Tesla Rival' Wrong?",
        },
        description: {
          zh: "2011 年马斯克曾轻视比亚迪，如今其凭技术垂直整合逆袭：2025 年销量超 460 万辆、纯电首超特斯拉。",
          en: "Musk's 2011 dismissal meets a comeback built on vertical integration — 4.6M+ sales in 2025 with BEV volume past Tesla.",
        },
      },
      {
        title: {
          zh: "周深、张译同日在人民日报撰文",
          en: "Zhou Shen and Zhang Yi Pen Pieces in People's Daily",
        },
        description: {
          zh: "周深谈《奔腾》：'奔腾'就是'出发'，受挫也带韧劲重新出发；张译致敬'七一勋章'获得者崔道植与全国民辅警。",
          en: "Zhou on his song 'Gallop': setting off again with grit after setbacks; Zhang salutes 'July 1 Medal' recipient Cui Daozhi and police nationwide.",
        },
      },
    ],
  },
];