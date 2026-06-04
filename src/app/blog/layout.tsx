import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "博客与创作",
  description:
    "阅读 ZD Tech 的技术教程、Sui/Web3 开发内容，以及原创小说和长期创作项目。",
  path: "/blog",
  keywords: ["blog", "Sui tutorial", "Web3 tutorial", "原创小说", "技术博客"],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
