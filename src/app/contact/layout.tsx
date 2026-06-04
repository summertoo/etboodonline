import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "联系我们",
  description:
    "通过邮箱与 ZD Tech 联系，讨论网页游戏、Roblox 游戏、DApp、创意工具与合作机会。",
  path: "/contact",
  keywords: ["contact", "合作", "ZD Tech 联系方式", "游戏合作", "Web3 合作"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
