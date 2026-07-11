import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "隐私政策 / Privacy Policy",
  description:
    "ZD Tech privacy policy covering essential storage, analytics, advertising, account data, and user privacy choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12">
      <Link href="/" className="text-sm text-[var(--cyber-primary)]">
        ZD Tech
      </Link>
      <h1 className="mb-3 mt-8 text-3xl font-bold">
        隐私政策 / Privacy Policy
      </h1>
      <p className="mb-10 text-sm text-[var(--cyber-muted)]">
        Last updated: July 11, 2026
      </p>

      <div className="space-y-9 leading-7 text-[var(--cyber-muted)]">
        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            数据与用途 / Data and purposes
          </h2>
          <p>
            ZD Tech 使用必要的本地存储保存语言、登录状态与隐私选择。用户主动登录、留言、点赞、收藏或提交反馈时，相关账户与交互数据会用于提供对应功能、防止滥用和维护服务。
          </p>
          <p className="mt-3">
            ZD Tech uses essential local storage for language, authentication,
            and privacy preferences. Account and interaction data is processed
            when you sign in, comment, like, save a project, or submit feedback
            so those features can operate securely.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            Analytics 与广告 / Analytics and advertising
          </h2>
          <p>
            只有选择“同意统计与广告”后，本站才会加载 Google Analytics 和 Google AdSense。它们可能使用 Cookie 或类似技术测量访问、广告表现和防止欺诈。选择“仅必要存储”时，这些脚本不会加载。
          </p>
          <p className="mt-3">
            Google Analytics and Google AdSense load only after you choose
            “Accept all.” These services may use cookies or similar technology
            to measure visits, advertising performance, and fraud. They do not
            load when you select “Necessary only.”
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            外部链接 / External destinations
          </h2>
          <p>
            项目页可能链接到 Roblox、GitHub、内容平台或合作伙伴。离开本站后，目标网站的隐私政策适用。标记为联盟链接的入口可能为本站带来佣金，但不会增加你的费用。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            你的选择 / Your choices
          </h2>
          <p>
            可通过每页底部的 Cookie settings 随时修改选择。你也可以清除浏览器站点数据，或发送邮件申请查询、更正或删除与账户相关的数据。
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            联系方式 / Contact
          </h2>
          <p>
            Privacy requests:{" "}
            <a
              href="mailto:etbood@gmail.com"
              className="text-[var(--cyber-primary)] underline"
            >
              etbood@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
