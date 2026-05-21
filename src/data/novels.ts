export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ChapterMeta {
  id: string;
  number: number;
  title: LocalizedText;
  publishDate: string;
  wordCount: number;
}

export interface NovelMeta {
  id: string;
  slug: string;
  title: LocalizedText;
  author: string;
  coverImage: string;
  synopsis: LocalizedText;
  tags: { zh: string; en: string }[];
  status: "ongoing" | "completed";
  totalChapters: number;
  chapters: ChapterMeta[];
}

export const novels: NovelMeta[] = [
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
    totalChapters: 2,
    chapters: [
      {
        id: "chapter-1",
        number: 1,
        title: {
          zh: "第一章 平民世界",
          en: "Chapter 1 The Common People's World",
        },
        publishDate: "2026-05-19",
        wordCount: 1330,
      },
      {
        id: "chapter-2",
        number: 2,
        title: {
          zh: "第二章 食堂",
          en: "Chapter 2 The Cafeteria",
        },
        publishDate: "2026-05-21",
        wordCount: 1250,
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
        publishDate: "2024-02-20",
        wordCount: 900,
      },
    ],
  },
];

export function getNovelBySlug(slug: string): NovelMeta | undefined {
  return novels.find((n) => n.slug === slug);
}
