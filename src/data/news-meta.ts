export type NewsCategory = "ai-daily" | "hot-news";

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
