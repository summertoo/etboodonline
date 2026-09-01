export type { NewsCategory } from "@/data/news-meta";
export { newsCategoryMeta } from "@/data/news-meta";
export type { NewsItem, NewsSource } from "./types";

import type { NewsItem } from "./types";
import { newsList as newsList2026_05 } from "./2026-05";
import { newsList as newsList2026_06 } from "./2026-06";
import { newsList as newsList2026_07 } from "./2026-07";
import { newsList as newsList2026_09 } from "./2026-09";
import { newsList as newsList2026_08 } from "./2026-08";

// 按日期倒序：最新月份在前
export const newsList: NewsItem[] = [
  ...newsList2026_09,
  ...newsList2026_08,
  ...newsList2026_07,
  ...newsList2026_06,
  ...newsList2026_05,
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