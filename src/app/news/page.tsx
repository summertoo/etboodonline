import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { newsCategoryMeta, newsList } from "@/data/news";

const visibleNews = newsList.slice(0, 24);

export default function NewsPage() {
  return (
    <main
      lang="zh-CN"
      className="min-h-screen bg-[var(--cyber-bg)] text-[var(--cyber-text)]"
    >
      <header className="border-b border-[var(--cyber-border)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-bold text-[var(--cyber-primary)]">
            ZD Tech
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/project">项目</Link>
            <Link href="/blog">博客</Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-[var(--cyber-border)]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">新闻与热点</h1>
          <p className="max-w-2xl leading-7 text-[var(--cyber-muted)]">
            按日期整理的 AI 日报、科技动态与综合热点。每期简报提供独立的中英文规范页面，完整历史记录可通过站点地图访问。
          </p>
        </div>
      </section>

      <AdSlot
        slot={process.env.NEXT_PUBLIC_ADSENSE_NEWS_SLOT}
        label="广告"
      />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="divide-y divide-[var(--cyber-border)]">
          {visibleNews.map((news) => {
            const category = newsCategoryMeta[news.category];
            return (
              <article key={news.id} className="py-8 first:pt-0">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded bg-[var(--cyber-primary)] px-2 py-1 text-white">
                    {category.label.zh}
                  </span>
                  <time
                    dateTime={news.date}
                    className="text-[var(--cyber-muted)]"
                  >
                    {news.date}
                  </time>
                </div>
                <h2 className="mb-3 text-2xl font-bold leading-8">
                  <Link
                    href={`/zh/news/${news.id}`}
                    className="hover:text-[var(--cyber-primary)]"
                  >
                    {news.title.zh}
                  </Link>
                </h2>
                <p className="mb-5 line-clamp-3 leading-7 text-[var(--cyber-muted)]">
                  {news.summary.zh}
                </p>
                <ol className="mb-5 grid gap-2 text-sm text-[var(--cyber-muted)] sm:grid-cols-2">
                  {news.items.slice(0, 4).map((item, index) => (
                    <li key={`${news.id}-${index}`}>
                      {index + 1}. {item.title.zh}
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href={`/zh/news/${news.id}`}
                    className="font-medium text-[var(--cyber-primary)]"
                  >
                    阅读完整简报
                  </Link>
                  <Link
                    href={`/en/news/${news.id}`}
                    hrefLang="en"
                    className="text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)]"
                  >
                    English edition
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
