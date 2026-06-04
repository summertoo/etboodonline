import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "项目中心",
  description:
    "查看 ZD Tech 发布的网页游戏、Roblox 游戏、Sui/Web3 DApp、创意工具与文章项目。",
  path: "/project",
  keywords: ["projects", "网页游戏", "Roblox", "DApp", "创意工具"],
});

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
