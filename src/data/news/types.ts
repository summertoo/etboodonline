import type { NewsCategory } from "@/data/news-meta";

export interface NewsSource {
  title: string;
  url: string;
  publisher?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: { zh: string; en: string };
  summary: { zh: string; en: string };
  category: NewsCategory;
  items: {
    title: { zh: string; en: string };
    description: { zh: string; en: string };
    sources?: NewsSource[];
  }[];
  sources?: NewsSource[];
}