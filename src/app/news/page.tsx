"use client";

import { useState } from "react";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { newsCategoryMeta, newsList } from "@/data/news";

export default function NewsPage() {
  const { t, lang } = useLang();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <main>
        <section className="text-center py-20 cyber-hero">
          <h1 className="text-4xl font-bold mb-4 cyber-title">
            {lang === "zh" ? "📰 新闻与热点" : "📰 News & Hot Topics"}
          </h1>
          <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
            {lang === "zh"
              ? "汇总 AI 日报、科技动态与综合热点，按日期持续更新。"
              : "Curated AI daily briefings, tech updates, and broader hot topics, refreshed by date."}
          </p>
          <p className="text-xs text-[var(--cyber-muted)]">
            www.etboodonline.com/news
          </p>
        </section>

        <section className="py-8">
          <div className="space-y-6">
            {newsList.map((news) => {
              const isExpanded = expandedId === news.id;
              const displayItems = isExpanded
                ? news.items
                : news.items.slice(0, 4);
              const categoryMeta = newsCategoryMeta[news.category];

              return (
                <Card key={news.id} className="cyber-card overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 text-xl font-bold cyber-title">
                          {lang === "zh" ? news.title.zh : news.title.en}
                        </h3>
                        <p className="text-sm text-[var(--cyber-muted)]">
                          {news.date}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${categoryMeta.badgeClassName}`}
                      >
                        {lang === "zh"
                          ? categoryMeta.label.zh
                          : categoryMeta.label.en}
                      </span>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed cyber-subtitle">
                      {lang === "zh" ? news.summary.zh : news.summary.en}
                    </p>

                    <div className="space-y-3">
                      {displayItems.map((item, i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-[var(--cyber-border)] p-4 transition-colors hover:border-[var(--cyber-primary)]"
                        >
                          <h4 className="mb-1 text-sm font-semibold">
                            {i + 1}.{" "}
                            {lang === "zh" ? item.title.zh : item.title.en}
                          </h4>
                          <p className="text-sm leading-relaxed cyber-subtitle">
                            {lang === "zh"
                              ? item.description.zh
                              : item.description.en}
                          </p>
                        </div>
                      ))}
                    </div>

                    {news.items.length > 4 && (
                      <div className="mt-4 text-center">
                        <Button
                          variant="outline"
                          className="cyber-button-small border-[var(--cyber-border)]"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : news.id)
                          }
                        >
                          {isExpanded
                            ? lang === "zh"
                              ? "收起"
                              : "Collapse"
                            : lang === "zh"
                              ? `查看全部 ${news.items.length} 条`
                              : `View all ${news.items.length} items`}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="py-10 text-center cyber-footer">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
