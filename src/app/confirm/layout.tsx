import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "邮箱确认",
  description: "用户邮箱确认与注册验证页面。",
  path: "/confirm",
  noIndex: true,
});

export default function ConfirmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
