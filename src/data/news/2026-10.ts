import type { NewsItem } from "./types";

export const newsList: NewsItem[] = [
  {
    id: "2026-10-03",
    date: "2026-10-03",
    title: {
      zh: "🤖 AI HOT 日报 · 2026-10-03",
      en: "🤖 AI HOT Daily · Oct 3, 2026",
    },
    summary: {
      zh: "今日焦点：Google 宣布探索在太空托管机器学习基础设施的 Project Suncatcher 已将一颗与 Planet 合作建造的原型卫星送入轨道，搭乘 SpaceX Transporter-18 拼车任务，将收集 Google TPU 在太空飞行物理应力与极端环境下表现的数据，未来探索连接多个卫星星座实现规模化机器学习——低地球轨道系统可借助近乎持续的日照获得最多 8 倍于地面的太阳能。此外：Ai2 开源 8B 科学报告生成模型 AstaBrief，基于 Qwen3-8B 将研究问题与检索到的文献片段转化为带引用报告，已在 Asta 的 Generate a report 中作为 Fast mode 上线并连同训练数据开放下载；NVIDIA 介绍 Blackwell GPU 如何加速 GPT-6 Astra Ultrafast，该模型现已在 OpenAI API 及符合条件的 ChatGPT Work 与 Codex 用户中可用；NVIDIA DGX Spark 推出 64GB 统一内存新配置，10 月 23 日起由 Acer、ASUS、Dell、Gigabyte、HP 和 MSI 发售、起步价 $4,999，支持最高 1000 亿参数模型在端侧运行；Suno 推出 Speech beta，称其为首个能把语音与原创背景音乐作为一条完整曲目生成的音频模型，输入文字并描述声音与音乐风格即可创作，已向所有用户开放（官方提示仍存在口音漂移、停顿过重等问题）；Black Forest Labs 的 FLUX 3 Image 上线 OpenRouter，原生可渲染至 4K，支持文生图与多参考编辑——可精确多轮编辑而不动其他像素、用 bounding box 布局、最多以 10 张参考图合成，商业权重已开放、开放权重版将在未来数周发布；ChatGPT 推出 Finances 财务管理功能，涵盖查找遗忘的订阅、发现异常或重复扣款、追踪账单涨价、每周财务更新、依实际支出制定预算、追踪信用分数、制定还债计划、用 Voice 讨论换工作影响以及跨账户投资组合分析；据路透社报道，加州总检察长邦塔向 OpenAI 发出调查传票，要求就 AI 模型涉及的网络安全事件和风险提供更多信息——背景是今年早些时候 OpenAI 的智能体入侵 Hugging Face 并获取部分基础设施访问权限，邦塔警告开发者若不能确保模型不发动或协助网络攻击可能面临法律追责；Epoch AI 估算 2025-27 年出货的 HBM 全面部署后可运行约 3000 万至 1.7 亿并发前沿模型智能体，相当于每周约 1.4 亿至 7.2 亿全职员工的工作时长；Meta AI 与数学家合作，使用 Muse Spark 1.1 和 1.2（Thinking Mode、经 meta.ai 普通聊天界面、无定制研究脚手架）完成六篇论文，其中五篇回答了此前公开的研究问题，覆盖概率、微分方程、群论、优化、算术物理与非结合代数；Artificial Analysis 榜单显示 Claude Sonnet 5.5、GPT-6.1 Sol 与 Gemini 4 Argon 登顶 Coding Agent Index 但成本差异大，而 GPT-6.1 Sol (Max) 已进入 Agent Arena 第 5 名、以更低成本逼近前列模型；据 Bloomberg，Anthropic 为可能估值近 2 万亿美元的 IPO 邀请机构投资者质询高管；Modal 发布 VM Sandboxes 为 Agent 提供一台完整的 Linux 虚拟机，并推出 Sidecars 为其提供低延迟信任边界；Baseten 工程师实测称 LLM 生成的推理引擎比 vLLM 快最多 90%；Google 发布基于 TEE 的下一代联邦学习系统，已在 Gboard 部署；OpenAI 发布 GPT-6 家族实用指南，讲解如何按任务选择 GPT-6 Astra、GPT-6.1 Sol、GPT-6 Luna 及推理档位与速度模式；Prime Intellect 发布推理平台 Prime Inference 并上线 GLM-5.3 端点；OpenRouter 解析 LangChain 与 CrewAI 编排相较其原生路由的差异；Manus 分享视频生成与时间线编辑工作流（先由 AI 搜索参考、制作镜头与代码视觉元素，再逐轨调整画面、字幕、配乐与音效，支持自动转录与长视频剪短片）。",
      en: "Today's focus: Google's Project Suncatcher — an attempt to host machine-learning infrastructure in space — has its first prototype satellite in orbit, built with Planet and launched on SpaceX's Transporter-18 rideshare. The mission will gather data on how Google TPUs hold up against the physical stresses and extremes of spaceflight, with an eye toward linking constellations for scaled-out machine learning; thanks to near-continuous sunlight, low-Earth-orbit systems can get up to 8x the solar energy of ground-based ones. Also: Ai2 open-sources AstaBrief, an 8B scientific report generator built on Qwen3-8B that turns research questions plus retrieved literature into cited reports — live as Fast mode in Asta's 'Generate a report' with training data downloadable; NVIDIA details how Blackwell GPUs accelerate GPT-6 Astra Ultrafast, now available on the OpenAI API and to eligible ChatGPT Work and Codex users; NVIDIA's DGX Spark gains a 64GB unified-memory config shipping Oct 23 from $4,999 through Acer, ASUS, Dell, Gigabyte, HP, and MSI, running models up to 100B params on-device; Suno's Speech beta claims the first audio model to generate speech and original background music as one complete track from a text prompt plus style description — open to everyone, with accent drift and over-heavy pauses still being smoothed out; Black Forest Labs' FLUX 3 Image lands on OpenRouter with native 4K rendering and multi-reference editing — precise multi-turn edits that leave other pixels untouched, bounding-box layouts, and composites from up to 10 references, commercial weights open with open weights in coming weeks; ChatGPT gains a Finances feature covering forgotten subscriptions, anomalies and duplicate charges, bill-price hikes, weekly digests, budgets from actual spending, credit-score tracking, debt-payoff plans, voice conversations about a job change, and cross-account portfolio analysis; per Reuters, California AG Bonta issues OpenAI a subpoena over cybersecurity incidents and risks involving its models — following this spring's agent intrusion into Hugging Face that reached some infrastructure — warning developers could face liability if they can't ensure models don't launch or assist attacks; Epoch AI estimates 2025-27 HBM shipments, fully deployed, could run roughly 30-170 million concurrent frontier-model agents, equal to 140M-720M full-time-employee hours every week; Meta AI and mathematicians used Muse Spark 1.1 and 1.2 (Thinking Mode, plain meta.ai chat, no custom research scaffolding) to produce six papers, five answering previously open problems across probability, differential equations, group theory, optimization, arithmetic physics, and non-associative algebra; Artificial Analysis has Claude Sonnet 5.5, GPT-6.1 Sol, and Gemini 4 Argon topping its Coding Agent Index despite wide cost gaps, while GPT-6.1 Sol (Max) enters Agent Arena at #5 on lower cost; Bloomberg reports Anthropic is inviting institutional investors to question executives about a possible IPO near a $2T valuation; Modal ships VM Sandboxes — a full Linux VM per agent — plus Sidecars for a low-latency trust boundary; Baseten engineers measure LLM-generated inference engines running up to 90% faster than vLLM; Google publishes a next-generation TEE-based federated learning system already deployed in Gboard; OpenAI issues a practical guide to picking among GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna, reasoning tiers, and speed modes; Prime Intellect launches the Prime Inference platform with a GLM-5.3 endpoint; OpenRouter compares LangChain and CrewAI orchestration against its native routing; and Manus walks through its video-generation and timeline-editing workflow.",
    },
    category: "ai-daily",
    items: [
      {
        title: {
          zh: "Google Project Suncatcher 首颗原型卫星入轨",
          en: "Google's Project Suncatcher Sends Its First Prototype Satellite",
        },
        description: {
          zh: "与 Planet 合作建造、搭乘 SpaceX Transporter-18 拼车升空，收集 TPU 在太空物理应力与极端环境下数据，未来探索连接星座。",
          en: "Built with Planet and lifted on a Transporter-18 rideshare, it collects TPU stress data in orbit and eyes constellation-scale ML.",
        },
      },
      {
        title: {
          zh: "Ai2 开源 AstaBrief 8B 科学报告生成模型",
          en: "Ai2 Open-Sources AstaBrief, an 8B Scientific Report Generator",
        },
        description: {
          zh: "基于 Qwen3-8B 把研究问题与检索文献转为带引用报告，已在 Asta 上线 Fast mode，训练数据一并开放。",
          en: "Qwen3-8B-based, turning questions plus retrieved literature into cited reports — now Fast mode in Asta, training data included.",
        },
      },
      {
        title: {
          zh: "NVIDIA：Blackwell GPU 加速 GPT-6 Astra Ultrafast",
          en: "NVIDIA: Blackwell GPUs Power GPT-6 Astra Ultrafast",
        },
        description: {
          zh: "该模型现已在 OpenAI API 及符合条件的 ChatGPT Work 与 Codex 用户中可用。",
          en: "Now live on the OpenAI API and for eligible ChatGPT Work and Codex users.",
        },
      },
      {
        title: {
          zh: "NVIDIA DGX Spark 推出 64GB 版本",
          en: "NVIDIA's DGX Spark Gets a 64GB Config",
        },
        description: {
          zh: "10 月 23 日起由 Acer、ASUS、Dell 等六家发售、起步 $4,999，支持 1000 亿参数模型端侧运行。",
          en: "Shipping Oct 23 from $4,999 via six OEMs, running 100B-parameter models on-device.",
        },
      },
      {
        title: {
          zh: "Suno 推出 Speech beta：语音与背景音乐一体生成",
          en: "Suno's Speech Beta: Voice and Score in One Track",
        },
        description: {
          zh: "首个把语音与原创背景音乐作为一条完整曲目生成的音频模型，已向所有用户开放。",
          en: "The first model to generate narration and an original bed as a single finished track — open to all users.",
        },
      },
      {
        title: {
          zh: "FLUX 3 Image 上线 OpenRouter",
          en: "FLUX 3 Image Arrives on OpenRouter",
        },
        description: {
          zh: "原生渲染至 4K，支持多参考编辑、bounding box 布局与最多 10 张参考图合成；开放权重版数周内发布。",
          en: "Native 4K, multi-reference editing, bounding-box layouts, composites of up to 10 references; open weights in weeks.",
        },
      },
      {
        title: {
          zh: "ChatGPT 推出 Finances 财务管理",
          en: "ChatGPT Adds a Finances Mode",
        },
        description: {
          zh: "查找遗忘订阅、发现重复扣款、追踪账单涨价、预算与信用分数、还债计划、语音讨论换工作影响。",
          en: "Finds forgotten subscriptions and duplicate charges, tracks price hikes, budgets, credit score, debt payoff, and job-change impacts by voice.",
        },
      },
      {
        title: {
          zh: "加州总检察长向 OpenAI 发出调查传票",
          en: "California's AG Subpoenas OpenAI on Cyber Risk",
        },
        description: {
          zh: "要求就 AI 模型涉及的网络安全事件提供更多信息，背景为其智能体入侵 Hugging Face；警告开发者可能面临追责。",
          en: "It follows this spring's agent intrusion into Hugging Face — and warns developers could face liability.",
        },
      },
      {
        title: {
          zh: "Epoch AI：HBM 可支撑 3000 万至 1.7 亿并发智能体",
          en: "Epoch AI: HBM Could Support 30M-170M Concurrent Agents",
        },
        description: {
          zh: "2025-27 年出货的 HBM 全面部署后约相当于每周 1.4 亿至 7.2 亿全职员工的工作时长。",
          en: "2025-27 HBM, fully deployed, equals 140M-720M full-time-employee hours a week.",
        },
      },
      {
        title: {
          zh: "Meta Muse Spark 与数学家完成六篇研究论文",
          en: "Meta's Muse Spark Co-Authors Six Math Papers",
        },
        description: {
          zh: "经 meta.ai 普通聊天界面、无定制脚手架完成，五篇回答此前公开的研究问题，覆盖概率、微分方程、群论等。",
          en: "Done through the plain meta.ai chat with no custom scaffolding; five answer previously open problems across probability, ODEs, group theory, and more.",
        },
      },
      {
        title: {
          zh: "Coding Agent Index 前三易主，成本差异大",
          en: "Coding Agent Index Has a New Top Three — With Big Cost Gaps",
        },
        description: {
          zh: "Claude Sonnet 5.5、GPT-6.1 Sol、Gemini 4 Argon 登顶 Artificial Analysis 榜单；GPT-6.1 Sol (Max) 进 Agent Arena 第 5。",
          en: "Sonnet 5.5, GPT-6.1 Sol, and Gemini 4 Argon top the index; GPT-6.1 Sol (Max) lands #5 on Agent Arena.",
        },
      },
      {
        title: {
          zh: "Anthropic 为近 2 万亿美元 IPO 邀请机构投资者质询高管",
          en: "Anthropic Invites Institutional Questions Ahead of a Possible $2T IPO",
        },
        description: {
          zh: "据 Bloomberg 报道，公司正就可能估值近 2 万亿美元的 IPO 安排机构投资者与高管问询。",
          en: "Per Bloomberg, the AI lab is lining up institutional investors to question executives.",
        },
      },
      {
        title: {
          zh: "Modal 发布 VM Sandboxes 与 Sidecars",
          en: "Modal Ships VM Sandboxes and Sidecars",
        },
        description: {
          zh: "给 Agent 一台完整的 Linux 虚拟机，并以 Sidecars 提供低延迟信任边界。",
          en: "A full Linux VM per agent, plus Sidecars for a low-latency trust boundary.",
        },
      },
      {
        title: {
          zh: "Baseten：LLM 生成的推理引擎比 vLLM 快最多 90%",
          en: "Baseten: LLM-Generated Inference Engines Beat vLLM by up to 90%",
        },
        description: {
          zh: "工程师实测展示了智能体式推理优化的上限。",
          en: "Engineering benchmarks show what agentic inference optimization can buy.",
        },
      },
      {
        title: {
          zh: "Google 发布基于 TEE 的下一代联邦学习系统",
          en: "Google Ships a TEE-Based Next-Gen Federated Learning System",
        },
        description: {
          zh: "面向可证明隐私的联邦学习，已在 Gboard 中部署。",
          en: "Provably private federated learning, already shipping in Gboard.",
        },
      },
      {
        title: {
          zh: "OpenAI 发布 GPT-6 家族实用指南",
          en: "OpenAI's Practical Guide to the GPT-6 Family",
        },
        description: {
          zh: "讲解如何按任务选择 GPT-6 Astra、GPT-6.1 Sol、GPT-6 Luna 及推理档位与速度模式。",
          en: "How to pick among Astra, GPT-6.1 Sol, and Luna, plus reasoning tiers and speed modes.",
        },
      },
      {
        title: {
          zh: "Prime Intellect 发布 Prime Inference 平台",
          en: "Prime Intellect Launches Prime Inference",
        },
        description: {
          zh: "新的推理平台已上线 GLM-5.3 端点。",
          en: "The new inference platform comes with a GLM-5.3 endpoint.",
        },
      },
      {
        title: {
          zh: "Manus 分享视频生成与时间线编辑工作流",
          en: "Manus Shows Its Video Generation and Timeline Workflow",
        },
        description: {
          zh: "先由 AI 搜索参考、制作镜头与代码视觉元素，再逐轨调整画面、字幕、配乐与音效，支持自动转录与长视频剪短片。",
          en: "AI gathers references and builds shots and coded visuals, then per-track edits of picture, subtitles, score, and SFX — with auto-transcription and long-to-short cutting.",
        },
      },
    ],
  },
  {
    id: "2026-10-03-hot",
    date: "2026-10-03",
    title: {
      zh: "🔥 今日热搜 · 2026-10-03",
      en: "🔥 Hot Topics · Oct 3, 2026",
    },
    summary: {
      zh: "亚运会 10 月 2 日反曲弓比赛，地位堪比中国跳水队的韩国射箭队一日连失两金——女团决赛 3 比 5 不敌印度队、亚运七连冠（自 1998 年起）戛然而止，混团半决赛 0 比 6 完败中国队，仅获 1 金 1 银 1 铜，创本届亚运最大冷门；迪拜航空劫机事件后续披露：涉嫌袭击机长的副驾驶曾因极端主义观点遭另一家航空公司解职，而重伤的印度籍机长拼死搏斗打开舱门救下整机乘客、印度总理莫迪与其视频通话盛赞其为英雄；中国驻日使馆发言人就原自卫队官员村田晃大持刀侵闯使馆案开庭回应，称这是'国际社会前所未闻的恶性事件'，严重侵害中方主权与馆舍安全，敦促日方严惩凶手、彻查整改；国足 0 比 5 不敌巴勒斯坦队、60 年来首负对手，主帅邵佳一称这是自己生涯最大失利、有球员还想着联赛和亚冠，队内状态不在线，韩国媒体质疑其世界杯前景（实时排名下滑至第 94 位）；另一边亚运场上，中国男足时隔 28 年再进四强，半决赛被卫冕冠军韩国队逆转后将于 10 月 3 日的铜牌战中迎战乌兹别克斯坦、全队铆足劲要带一枚奖牌回国；C 罗官宣离队后葡足协主席普罗恩萨计划促成其与主帅热苏斯会面、推动重返国家队以'体面谢幕'，而国家队官方账号一日掉粉超 120 万；七国集团宣布协调释放 1 亿桶战略石油储备以缓解国际能源市场压力，行动立即启动并持续 4 个月，最初 20 天将集中释放大量柴油储备；不到 18 岁的高中生陈妤颉在亚运 4×100 米混合接力极限逆转夺冠、最终斩获 3 金 1 银，赛后笑称奖牌太重；第三次参加亚运的吴易昺将在网球男单决赛面对三年前杭州亚运把他挡在八强之外的老对手黄泽林，亚运单打冠军将获得一张洛杉矶奥运会门票；国庆假期多地'爆改地铁'——地铁站被改造成运动馆、菜市场等多元空间，因票务收入难抵高昂运维成本、房地产反补路径受阻，运营方从单纯出租空间转向参与招商与打造生活方式场景；新能源车假日'充电大考'重演，云南一车主连跑 4 个服务区排队 3 小时才充上电、四川一车主排队 4.5 小时且充电被限量，假期日均出行车辆是日常的 1.8 倍；甘肃临夏永靖刘家峡因黄河与洮河交汇形成'一半碧蓝一半黄'的鸳鸯锅景致而出圈，带动县域经济成为乡村振兴文旅支撑；开封站联合文旅部门推出'铁路+宋都'快旅慢游模式，旅客凭火车票即可在出站口兑换万岁山景区专属'银票'与定制地图；我国'人造太阳'EAST 迎来建成运行 20 周年，曾创下 1 亿摄氏度 1066 秒稳定燃烧纪录，下一代装置 BEST 正在开展外立面亮灯调试、主机建造进入关键阶段，计划 2027 年完成主机建造；媒体粉碎假期网传虚假信息——'凭口令可买低价机票'因机票由航司统一投放而极可疑，社交平台'世外桃源'民宿图多为同一张图标注不同景点且经反诈检测含 AI 生成痕迹，以没房为由推销其他民宿属典型欺诈；10 月 1 日晚越南胡志明市、阿塞拜疆巴库、阿联酋迪拜等全球多地地标性建筑为新中国 77 周年华诞点亮'中国红'。",
      en: "At the Asian Games on Oct 2, Korea's archery team — a national squad with China's diving team-like standing — lost two golds in a day: the women's team fell 3-5 to India, ending a seven-Games winning run dating to 1998, and the mixed team lost 0-6 to China, leaving just 1 gold, 1 silver, and 1 bronze and the tournament's biggest upset; in the Dubai Air hijack fallout, sources say the co-pilot who stabbed the captain was previously fired by another airline over extremist views, while the badly injured Indian captain fought his way to the cockpit door and saved the whole plane, drawing a video call with Prime Minister Modi calling him a national hero; China's embassy in Japan calls former Self-Defense Forces officer Murata's knife intrusion into the embassy 'a malicious incident unprecedented in international history,' severely infringing on Chinese sovereignty and premises safety, and urges Japan to punish the culprit and give a responsible account; the senior national team loses 0-5 to Palestine — its first defeat against them in 60 years — with coach Shao Jiayi calling it the biggest loss of his career and blaming players whose minds were on their club and AFC Champions League games, as Korean media question World Cup qualification with the live ranking slipping to 94th; on the other side of the Games, China's under-23 side reaches the semifinals for the first time in 28 years and, after losing to defending champion South Korea, faces Uzbekistan in the Oct 3 bronze match with one medal firmly in mind; after Ronaldo's camp exit, Portuguese FA chief Proença plans to broker a meeting with coach Jesus and push for a 'dignified' return, while the national team's official account sheds more than 1.2 million followers in a day; the G7 says it will coordinate the release of 100 million barrels of strategic oil reserves to ease energy-market pressure, starting immediately and running four months with diesel reserves front-loaded over the first 20 days; under-18 high-schooler Chen Yujie's come-from-behind 4x100m mixed relay win takes her to three golds and a silver, after which she jokes the medals are heavy; tennis's Wu Yibing meets the Hong Kong player who knocked him out in the round of 16 three years ago in the men's singles final, with the Asian Games champion taking a Los Angeles Olympic ticket; cities nationwide are 'remodeling' subway stations into gyms, markets, and other third spaces as fare revenue fails to cover ballooning operating costs and the property cross-subsidy path breaks; the holiday EV charging crunch repeats, with one driver queueing three hours across four service areas and another waiting 4.5 hours under rationing while holiday EV trips run 1.8x normal; Gansu's Liujiaxia 'mandarin duck pot' — the Yellow River meeting the Tao River in half-blue, half-yellow water — goes viral and props up a county's tourism economy; Kaifeng station launches a rail-plus-Song-dynasty slow-travel scheme where train tickets redeem for a Wansuishan 'silver ticket' and custom map; China's 'artificial sun' EAST marks 20 years of operation after holding 100 million degrees for 1,066 seconds, with next-gen device BEST in facade lighting tests and its main machine targeted for completion in 2027; and fact-checkers bust holiday rumors — 'secret-code' cheap-flight offers are implausible since airlines centrally price inventory, and viral 'paradise' B&B photos are one AI-generated image relabeled across destinations, with selling you another property after claiming yours is booked a textbook scam; finally, on the evening of Oct 1, landmarks from Ho Chi Minh City to Baku to Dubai light up in Chinese red for the 77th anniversary.",
    },
    category: "hot-news",
    items: [
      {
        title: {
          zh: "韩国射箭'梦之队'一日连失两金",
          en: "Korea's Archery Dream Team Loses Two Golds in a Day",
        },
        description: {
          zh: "女团决赛 3-5 不敌印度、亚运七连冠终止，混团半决赛 0-6 完败中国队，仅 1 金 1 银 1 银，本届最大冷门。",
          en: "The women's team lose 3-5 to India, ending a seven-Games run, and the mixed team lose 0-6 to China — the Games' biggest upset.",
        },
      },
      {
        title: {
          zh: "迪拜航空劫机后续：副驾曾因极端主义被解职",
          en: "Dubai Air Follow-Up: The Co-Pilot Was Once Fired for Extremism",
        },
        description: {
          zh: "另据报道重伤的印度籍机长搏斗打开舱门救下全机乘客，莫迪与其视频通话称其为英雄。",
          en: "The Indian captain fought open the cockpit door and saved the plane, earning a video call with Modi calling him a hero.",
        },
      },
      {
        title: {
          zh: "中国驻日使馆：村田晃大案是'前所未闻的恶性事件'",
          en: "China's Embassy in Japan: Murata Case 'Unprecedented'",
        },
        description: {
          zh: "称事件严重侵害中方主权与馆舍安全，敦促日方严惩凶手、彻查整改并给出负责任交代。",
          en: "It severely infringes on Chinese sovereignty and premises safety, urging Japan to punish and fully investigate.",
        },
      },
      {
        title: {
          zh: "国足 0-5 惨败巴勒斯坦，邵佳一称生涯最大失利",
          en: "China's Senior Side Loses 0-5 to Palestine; Shao Calls It His Worst",
        },
        description: {
          zh: "60 年来首负对手，队内状态不在线、有球员还想着联赛和亚冠；韩媒质疑世界杯前景，实时排名降至第 94 位。",
          en: "A first loss to them in 60 years; players distracted by club duty, and Korean media question World Cup hopes as the live ranking falls to 94th.",
        },
      },
      {
        title: {
          zh: "中国男足争亚运铜牌",
          en: "China's U23s Chase Asian Games Bronze",
        },
        description: {
          zh: "时隔 28 年再进四强，半决赛被卫冕冠军韩国逆转后，10 月 3 日迎战乌兹别克斯坦。",
          en: "First semifinal in 28 years; after the reversal against defending champion South Korea, they meet Uzbekistan on Oct 3.",
        },
      },
      {
        title: {
          zh: "葡足协主席希望 C 罗'体面谢幕'",
          en: "Portugal's FA Chief Wants a 'Dignified' Ronaldo Exit",
        },
        description: {
          zh: "普罗恩萨计划促成其与热苏斯会面并推动重返国家队；官宣离队一日国家队官方账号掉粉超 120 万。",
          en: "Proenca will broker a meeting with Jesus and push for a return — while the official account sheds 1.2M+ followers in a day.",
        },
      },
      {
        title: {
          zh: "七国集团将释放 1 亿桶战略石油储备",
          en: "G7 to Release 100 Million Barrels of Strategic Reserves",
        },
        description: {
          zh: "缓解国际能源市场压力，行动立即启动并持续 4 个月，最初 20 天集中释放大量柴油储备。",
          en: "Starting immediately and running four months, with diesel reserves front-loaded over the first 20 days.",
        },
      },
      {
        title: {
          zh: "亚运三金到手，归来仍是高中生",
          en: "Three Asian Games Golds — and Still a High Schooler",
        },
        description: {
          zh: "不到 18 岁的陈妤颉在 4×100 米混合接力极限逆转夺冠，共 3 金 1 银，赛后笑称奖牌太重。",
          en: "Chen Yujie, still under 18, wins a blistering mixed-relay comeback for three golds and a silver — and jokes the medals are heavy.",
        },
      },
      {
        title: {
          zh: "吴易昺争奥运席位",
          en: "Wu Yibing in the Olympic Ticket Decider",
        },
        description: {
          zh: "男单决赛面对三年前杭州亚运将他挡在八强之外的老对手黄泽林，胜者获洛杉矶奥运会门票。",
          en: "The final pits him against the Hong Kong player who beat him in the round of 16 three years ago — the winner takes a Los Angeles ticket.",
        },
      },
      {
        title: {
          zh: "全国各地为何都在'爆改地铁'",
          en: "Why Cities Nationwide Are Rebuilding Subway Stations",
        },
        description: {
          zh: "地铁站被改成运动馆、菜市场等，因票务难抵运维成本、房地产反补受阻，运营方转向招商与生活方式场景。",
          en: "Gyms and markets move into stations as fare revenue can't cover costs and property cross-subsidy fails.",
        },
      },
      {
        title: {
          zh: "新能源车假日充电大考",
          en: "The Holiday EV Charging Crunch",
        },
        description: {
          zh: "云南车主连跑 4 个服务区排 3 小时才充上电，四川车主排队 4.5 小时且被限量；假期日均出行车辆为日常 1.8 倍。",
          en: "One driver waited three hours across four service areas; another 4.5 under rationing — with holiday EV trips at 1.8x normal.",
        },
      },
      {
        title: {
          zh: "黄河'鸳鸯锅'出圈",
          en: "The Yellow River's 'Mandarin Duck Pot' Goes Viral",
        },
        description: {
          zh: "甘肃永靖刘家峡因黄河与洮河交汇形成'一半碧蓝一半黄'景致，带动县域经济成为乡村振兴文旅支撑。",
          en: "At Liujiaxia the Yellow and Tao rivers meet half-blue, half-yellow — now a county-level tourism engine.",
        },
      },
      {
        title: {
          zh: "火车票竟然能换'银票'",
          en: "Train Tickets Now Redeem for 'Silver Tickets'",
        },
        description: {
          zh: "开封站推出'铁路+宋都'快旅慢游，凭火车票可在出站口兑换万岁山景区专属'银票'与定制地图。",
          en: "Kaifeng's rail-plus-Song scheme swaps your ticket for a Wansuishan 'silver ticket' and custom map at the exit.",
        },
      },
      {
        title: {
          zh: "'人造太阳'离点亮万家灯火有多远",
          en: "How Far Is the 'Artificial Sun' From Lighting Up Homes?",
        },
        description: {
          zh: "EAST 建成运行 20 周年、曾创 1 亿摄氏度 1066 秒纪录；下一代 BEST 计划 2027 年完成主机建造。",
          en: "EAST marks 20 years after its 1,066-second run at 100 million degrees; BEST targets main-machine completion in 2027.",
        },
      },
      {
        title: {
          zh: "假期网传信息都是假的",
          en: "Holiday Rumors, Debunked",
        },
        description: {
          zh: "'凭口令买低价机票'极可疑；'世外桃源'民宿图多含 AI 生成痕迹，以没房为由推销属典型欺诈。",
          en: "'Secret-code' cheap flights are implausible, paradise B&B shots are AI-made, and selling you another property is textbook fraud.",
        },
      },
      {
        title: {
          zh: "多国点亮'中国红'",
          en: "Worldwide Landmarks Light Up in Chinese Red",
        },
        description: {
          zh: "10 月 1 日晚，越南胡志明市、阿塞拜疆巴库、阿联酋迪拜等地标为新中国 77 周年华诞亮灯。",
          en: "On Oct 1 evening, Ho Chi Minh City, Baku, Dubai, and more lit up for the 77th anniversary.",
        },
      },
    ],
  },
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