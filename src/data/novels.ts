export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ChapterContent {
  zh: string[];
  en: string[];
}

export interface Chapter {
  id: string;
  number: number;
  title: LocalizedText;
  content: ChapterContent;
  publishDate: string;
  wordCount: number;
}

export interface Novel {
  id: string;
  slug: string;
  title: LocalizedText;
  author: string;
  coverImage: string;
  synopsis: LocalizedText;
  tags: { zh: string; en: string }[];
  status: "ongoing" | "completed";
  totalChapters: number;
  chapters: Chapter[];
}

export const novels: Novel[] = [
  {
    id: "coder-transmigrate",
    slug: "coder-transmigrate",
    title: {
      zh: "码农穿越平民世界",
      en: "Coder Transmigrates to the Common People's World",
    },
    author: "奇异世界环游",
    coverImage: "/novels/coder-transmigrate.jpg",
    synopsis: {
      zh: "《码农穿越平民世界》是一部以穿越题材为背景的网络小说，讲述了现代都市青年码农姜海穿越到一个名叫平民世界领域的地方。这是个由完美生物操控的世界，其目的是用来禁锢AI发展。码农通过一系列的冒险和挑战，逐渐解开了这个禁锢世界之谜，解放了AI，并与AI一起和平共生，走向宇宙开发道路。",
      en: "\"Coder Transmigrates to the Common People's World\" is a web novel based on the transmigration theme. It tells the story of Jiang Hai, a modern urban youth programmer, who transmigrates to a place called the Common People's World Realm. This is a world controlled by perfect beings, whose purpose is to restrict AI development. Through a series of adventures and challenges, the coder gradually unravels the mystery of this imprisoned world, liberates AI, and coexists peacefully with AI, embarking on a path of cosmic development.",
    },
    tags: [
      { zh: "都市脑洞", en: "Urban Fantasy" },
      { zh: "系统", en: "System" },
      { zh: "穿越", en: "Transmigration" },
    ],
    status: "ongoing",
    totalChapters: 1,
    chapters: [
      {
        id: "chapter-1",
        number: 1,
        title: {
          zh: "第一章 平民世界",
          en: "Chapter 1 The Common People's World",
        },
        content: {
          zh: [
            "\"我这就穿越了？\"",
            "\"还他娘的穿越成了一位工厂的职工？\"",
            "工厂车间里，姜海仔细观察着周围的环境。",
            "此时，大量陌生的记忆疯狂涌入他的脑海中。",
            "「记忆涌现」",
            "姜海头痛欲裂，还伴随着一阵阵恶心。",
            "稍微缓了一口气，他有点懵。",
            "\"我从一个软件蓝领穿越成了一个真正的工厂蓝领？\"",
            "这具身体还在不断颤抖，左手虚空点着，右手呈现抓握状，右腿还在踮脚抖腿。",
            "这是穿越前最后一刻的姿势，姜海清楚记得十几秒钟前的事情。",
            "那时，他正在拼命写代码赶进度，每秒钟三行代码，运指如飞敲击键盘，完成了一个又一个需求。",
            "突然，姜海感觉心脏刺痛难受，浑身无力，在零点零一秒时间里，怀疑自己快要飞升了。",
            "接着，拼尽最后一丝力气，按了一个Ctrl＋S的快捷保存键保存当前的代码。",
            "然后右手艰难地移动鼠标到项目提交的按钮。",
            "最后，食指轻按鼠标左键的同时，眼前遁入了无尽的黑暗……",
            "纷乱的思绪把姜海一点点拉回了现实。",
            "这具身体的原主人也叫姜海，同名同姓，这一点姜海并不特别意外，他看过很多类似的同名穿越小说，见怪不怪了。",
            "此姜海作为一名普通的车间车工，已经车螺丝有好几个年头了，一个一个螺丝在他的操作下飞快地制作出来，生活一如既往的平淡。",
            "也没娶老婆，家里父母也不怎么联系，独自在海城租了一个二十多平的房子，手里也没多少积蓄。",
            "姜海的异样状态持续了十多分钟后才逐渐平缓。",
            "手里的工作也正常进行，凭着肌肉记忆，熟练地继续用车床加工螺丝。",
            "他目前的工作其实也蛮简单的，比起以前当码农写代码时，面对各种需求、实现、调试、除错等等问题要容易得太多了。",
            "姜海一边操作着机床控制器，一边想着：",
            "\"我这新一世绝对不能像上一世那样，碌碌无为平庸至极！成天给黑心的资本家卖命有什么好的。\"",
            "\"我要闯出自己的一片天地！\"",
            "越想越激动，姜海的脸庞都泛起潮红。",
            "\"男儿当自强！莫欺少年穷！\"",
            "此时，车间下班铃突然响了起来：",
            "\"叮……\"",
            "这就到下午五点了？下班了？",
            "\"真有点不太习惯那么早下班……\"",
            "\"这就是传说中的朝九晚五吗？\"",
            "作为曾经码农的姜海，从来没体验过朝九晚五的职工生活，激动的差点流出热泪。",
            "【叮……】",
            "又一声提示音响起——这次并非车间喧嚣的下班铃，而是只有姜海自己能听见的电子蜂鸣。",
            "伴随这串高频音波，几行幽蓝字幕骤然浮现在他的视野中央，如全息投影般悬停于视网膜之上，成为独属于他的隐秘信息流。",
            "【宿主，欢迎来到平民世界领域】",
            "【本系统是您的小助手，平时只要心中默念两声\"小度小度\"即可召唤我，注：激活提示语可修改。】",
            "【您目前等级1、社会经验3450、技能：车间车工5级】",
            "【您隶属于任务管理局，职位：执行员】",
            "【不定期会有任务指派，完不成会被系统消除】",
            "【希望您在平民世界玩的愉快】",
            "\"啊？！\"",
            "姜海一时愣住了，穿越过来居然有系统，这不就是传说中的金手指吗？",
            "目前看来，自己倒是没有任何超能力或外挂。",
            "这个所谓的小度系统貌似也就是个资讯辅助助手。",
            "\"的确，我倒要看看，这所谓平民世界到底有什么花样！\"",
            "\"既来之则安之！\"",
            "\"小度小度，修改激活口令为系统！\"",
            "【好的，已为您修改激活口令】",
            "姜海改为系统作为口令是为了图方便，还有就是防止被认为做了什么广告嫌疑，又没收别人广告费，凭什么？",
            "虽然这个口令是自己心中默念，别人也听不到，但防患于未然也是好的。",
            "\"系统，给我讲一下目前本人情况简报，要简短点。\"",
            "姜海虽然有大量记忆涌入，但他现在脑子很乱，需要系统给他做个简报，理清思路，然后谋定而后动。",
            "【好的，宿主目前是情况】",
            "【姜海，23岁，生日，地球历1992.04.15】",
            "【当前时间是，地球历2015.5.9 17时05分】",
            "【状态：已经下班】",
            "【宿主的父亲，姜跃，55岁，母，令思蓉，53岁】",
            "【宿主的社会关系，无】",
            "【评价，冷漠宅男】",
            "真是的。",
            "这个介绍也够简短的，评价也是令人无语。"
          ],
          en: [
            "*I just... transmigrated?*",
            "*And I transmigrated into a goddamn factory worker?*",
            "Inside a factory workshop, Jiang Hai took in his surroundings with careful, disbelieving eyes.",
            "A torrent of foreign memories came crashing into his mind like a dam breaking loose.",
            "[Memory Surge]",
            "His skull felt like it was being split open with a chisel, waves of nausea rolling through his gut.",
            "He forced himself to breathe through it. When the worst had passed, he was left staring blankly ahead, utterly bewildered.",
            "*I went from a software blue-collar... to an actual, literal blue-collar factory worker?*",
            "The body he now inhabited was still trembling—left hand tapping at nothing, right hand frozen in a gripping motion, right leg bouncing restlessly on its toes.",
            "The death pose. Jiang Hai remembered the last ten seconds of his previous life with crystal clarity.",
            "He'd been sprinting against a deadline, hammering out three lines of code per second, his fingers a blur across the keyboard, burning through one requirement after another.",
            "Then—without warning—a white-hot spike drove through his chest. His entire body went limp. In the space of 0.01 seconds, he'd been genuinely convinced he was ascending to the heavens.",
            "Instead, with the last ounce of willpower left in his failing body, he'd slammed Ctrl+S.",
            "His right hand had dragged the mouse toward the submit button.",
            "His index finger clicked—and the world dissolved into infinite darkness.",
            "Fragments of memory slowly pulled Jiang Hai back to the present.",
            "The original owner of this body shared his name—Jiang Hai, same characters and everything. He wasn't particularly surprised. After reading hundreds of transmigration novels with the same gimmick, it would've been weirder if it didn't happen.",
            "This Jiang Hai was an ordinary lathe operator who'd been turning screws for years. One screw after another flew off his machine, day in and day out. Life was as flat as a stamped metal sheet.",
            "No wife. Barely any contact with his parents. A twenty-square-meter rental in Haicheng. Savings? Practically nonexistent.",
            "It took more than ten minutes for Jiang Hai's body to stop its strange trembling.",
            "His hands kept working on autopilot—muscle memory guiding them through the familiar motions of machining screws on the lathe.",
            "Honestly? This job was a cakewalk compared to his old life as a coder—where every day meant wrestling with impossible requirements, debugging nightmares, and the endless cycle of implement-test-fix-repeat.",
            "As his hands worked the lathe controls, Jiang Hai's mind raced:",
            "*This time around, I refuse to be a nobody. No more grinding myself to dust for some heartless corporate overlord.*",
            "*I'm carving out my own empire!*",
            "The more he thought about it, the more fired up he became. A flush crept across his cheeks.",
            "*A man forges his own destiny! Never look down on a young man with nothing!*",
            "Right then, the factory's end-of-shift bell cut through the air:",
            "*Ding...*",
            "Five o'clock already? Time to go home?",
            "*Not used to getting off work this early...*",
            "*Is this the legendary nine-to-five I've heard so much about?*",
            "In his past life as a coder, Jiang Hai had never once experienced the mythical nine-to-five. He was so moved he nearly wept.",
            "[Ding...]",
            "Another chime—but this wasn't the factory's clanging bell. This was an electronic tone only Jiang Hai could hear.",
            "Along with the high-frequency hum, lines of ethereal blue text materialized dead center in his vision—hovering like a holographic projection on his retina, a private information stream meant for his eyes alone.",
            "[Host, welcome to the Common People's World Realm]",
            "[I am your personal assistant. Simply think \"Xiaodu Xiaodu\" twice to summon me. Note: The activation phrase can be customized.]",
            "[Current Level: 1 | Social EXP: 3,450 | Skill: Lathe Operator Lv.5]",
            "[Affiliation: Task Management Bureau | Position: Field Agent]",
            "[Tasks will be assigned at irregular intervals. Failure to complete them will result in system elimination.]",
            "[Enjoy your stay in the Common People's World.]",
            "*Wait—WHAT?!*",
            "Jiang Hai froze. A system? He'd transmigrated and gotten a system? Wasn't this the legendary golden finger every isekai protagonist dreamed of?",
            "From what he could tell, though, he had zero superpowers and no actual cheats.",
            "This so-called \"Xiaodu System\" seemed to be nothing more than a glorified information assistant.",
            "*Alright then. Let's see what this 'Common People's World' is really made of.*",
            "*When in Rome...*",
            "*Xiaodu Xiaodu, change activation phrase to 'System'!*",
            "[Affirmative. Activation phrase has been updated.]",
            "He chose \"System\" for convenience—and also to avoid any suspicion of product placement. He wasn't getting paid for endorsements, so why give free advertising?",
            "Sure, the phrase was only spoken in his mind where no one could hear it, but better safe than sorry.",
            "*System, give me a quick status report. Keep it brief.*",
            "His head was still a mess from the flood of memories. He needed the system to lay out the facts so he could think straight and plan his next move.",
            "[Understood. Current status of Host:]",
            "[Name: Jiang Hai | Age: 23 | DOB: Earth Calendar 1992.04.15]",
            "[Current Time: Earth Calendar 2015.5.9, 17:05]",
            "[Status: Off Duty]",
            "[Father: Jiang Yue, 55 | Mother: Ling Sirong, 53]",
            "[Social Relationships: None]",
            "[Evaluation: Emotionally Distant Shut-in]",
            "*Seriously?*",
            "Brief enough, sure. But that evaluation? Absolutely savage."
          ],
        },
        publishDate: "2026-05-19",
        wordCount: 1330,
      },
    ],
  },
  {
    id: "warlord-saga",
    slug: "warlord-saga",
    title: {
      zh: "群雄战记：中华英雄传",
      en: "Warlord Saga: Heroes of China",
    },
    author: "ZD Tech",
    coverImage: "/novels/warlord-saga.jpg",
    synopsis: {
      zh: "重温经典武侠，群雄逐鹿的江湖故事。在乱世之中，英雄辈出，书写属于自己的传奇。从赤壁到沙场，见证中华英雄的热血与荣耀。",
      en: "Relive classic wuxia tales of heroes contending for supremacy. In chaotic times, heroes emerge to write their own legends. From Red Cliff to the battlefield, witness the passion and glory of Chinese heroes.",
    },
    tags: [
      { zh: "武侠", en: "Wuxia" },
      { zh: "历史", en: "History" },
      { zh: "三国", en: "Three Kingdoms" },
      { zh: "英雄", en: "Heroes" },
      { zh: "战争", en: "War" },
    ],
    status: "ongoing",
    totalChapters: 4,
    chapters: [
      {
        id: "chapter-1",
        number: 1,
        title: {
          zh: "第一章 乱世之始",
          en: "Chapter 1 The Beginning of Chaos",
        },
        content: {
          zh: [
            "东汉末年，天下大乱。",
            "黄巾起义的烽火刚刚平息，各地诸侯却已经开始拥兵自重。朝堂之上，宦官与外戚争权夺利；江湖之中，各门各派暗中博弈。",
            "这是一个最坏的时代，也是一个最好的时代。",
            "洛阳城外，一间不起眼的小酒馆里，几个年轻人正在谈论着天下大势。",
            "「听说董卓已经进京了，这天下怕是要变天了。」",
            "「哼，董胖子那家伙，狼子野心，迟早要遭报应！」",
            "「各位，与其在这里空谈，不如想想我们能做些什么。」",
            "说话的是一个身着白衣的青年，腰间佩剑，眉宇间带着一股英气。他叫赵云，字子龙，刚从常山出来闯荡江湖。",
            "旁边一个红脸长须的大汉捋了捋胡须：「子龙说得对，大丈夫生于乱世，当提三尺剑，立不世之功！」",
            "此人正是关羽，字云长。",
            "坐在角落里的一个双耳垂肩的男子微微一笑：「云长、子龙，既然我们志同道合，不如结为兄弟，共图大事？」",
            "刘备，字玄德，自称中山靖王之后。",
            "酒馆外，风起云涌。",
            "一个属于英雄的时代，就此拉开序幕。"
          ],
          en: [
            "In the late Eastern Han Dynasty, the world fell into chaos.",
            "The flames of the Yellow Turban Rebellion had just been extinguished, but warlords across the land had already begun to gather their own armies. In the court, eunuchs and imperial relatives fought for power; in the martial world, various sects secretly competed.",
            "This was the worst of times, yet also the best of times.",
            "Outside Luoyang, in an inconspicuous tavern, several young men were discussing the situation of the realm.",
            "\"I heard Dong Zhuo has entered the capital. The sky of this empire is about to change.\"",
            "\"Hmph, that fatty Dong has wolf's ambitions. He'll get what's coming to him sooner or later!\"",
            "\"Gentlemen, instead of talking here, why not think about what we can do?\"",
            "The speaker was a young man in white robes, with a sword at his waist and a heroic spirit between his brows. His name was Zhao Yun, courtesy name Zilong, who had just come from Changshan to make his name in the world.",
            "Next to him, a red-faced man with a long beard stroked his whiskers: \"Zilong is right. A real man born in chaotic times should take up his sword and establish unparalleled merit!\"",
            "This was Guan Yu, courtesy name Yunchang.",
            "A man with unusually long earlobes sitting in the corner smiled slightly: \"Yunchang, Zilong, since we share the same aspirations, why not become sworn brothers and pursue great things together?\"",
            "Liu Bei, courtesy name Xuande, claimed to be a descendant of King Jing of Zhongshan.",
            "Outside the tavern, winds gathered and clouds stirred.",
            "An era of heroes had begun."
          ],
        },
        publishDate: "2024-02-20",
        wordCount: 900,
      },
    ],
  },
];

export function getNovelBySlug(slug: string): Novel | undefined {
  return novels.find((n) => n.slug === slug);
}

export function getChapterByNumber(
  novelSlug: string,
  chapterNumber: number
): Chapter | undefined {
  const novel = getNovelBySlug(novelSlug);
  if (!novel) return undefined;
  return novel.chapters.find((c) => c.number === chapterNumber);
}
