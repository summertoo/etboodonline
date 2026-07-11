import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "使用条款 / Terms of Use",
  description:
    "Terms for using ZD Tech games, tools, project pages, community features, and external links.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12">
      <Link href="/" className="text-sm text-[var(--cyber-primary)]">
        ZD Tech
      </Link>
      <h1 className="mb-3 mt-8 text-3xl font-bold">
        使用条款 / Terms of Use
      </h1>
      <p className="mb-10 text-sm text-[var(--cyber-muted)]">
        Last updated: July 11, 2026
      </p>

      <div className="space-y-9 leading-7 text-[var(--cyber-muted)]">
        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            服务范围 / Service scope
          </h2>
          <p>
            本站提供网页游戏、工具、项目资料、新闻摘要和社区交互功能。部分项目由第三方平台托管，本站无法控制其持续可用性或条款变更。
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            合理使用 / Acceptable use
          </h2>
          <p>
            不得利用本站进行攻击、自动化滥用、欺诈、违法内容传播、侵犯知识产权或干扰其他用户。违规内容和账户可能被限制或删除。
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            内容与可用性 / Content and availability
          </h2>
          <p>
            游戏、工具和资讯按现状提供。我们会尽力维护准确性与可用性，但不保证所有功能无中断或所有外部资料持续有效。重要决定请核对原始来源。
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-bold text-[var(--cyber-text)]">
            联系方式 / Contact
          </h2>
          <p>
            Questions about these terms:{" "}
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
