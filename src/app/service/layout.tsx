import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "服务",
  description:
    "了解 ZD Tech 提供的网页游戏、Roblox 游戏、Sui/Web3 DApp、创意工具与内容创作相关服务。",
  path: "/service",
  keywords: ["services", "游戏开发服务", "Web3 开发服务", "Roblox 服务"],
});

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
