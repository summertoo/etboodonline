import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "我的中心",
  description: "用户个人中心，查看点赞、收藏、留言与签到信息。",
  path: "/me",
  noIndex: true,
});

export default function MeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
