import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "关于我们",
  description:
    "了解 ZD Tech 的工作方向、更新历史、创作内容与项目定位，包括网页游戏、Roblox、DApp 与创意工具。",
  path: "/what-we-do",
  keywords: ["about", "关于我们", "更新记录", "网页游戏工作室", "独立创意工作室"],
});

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
