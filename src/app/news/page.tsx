"use client";

import { useState } from "react";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { newsList } from "@/data/news";

export default function NewsPage() {
  const { t, lang } = useLang();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">
          {lang === "zh" ? "📰 AI 新闻资讯" : "📰 AI News & Updates"}
        </h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          {lang === "zh"
            ? "追踪 AI 行业最新动态，每日精选最热门的模型发布、产品更新和行业趋势。"
            : "Tracking the latest AI industry developments — daily curated picks of model releases, product updates, and industry trends."}
        </p>
      </section>

      <section className="py-8">
        <div className="space-y-6">
          {newsList.map((news) => {
            const isExpanded = expandedId === news.id;
            const displayItems = isExpanded ? news.items : news.items.slice(0, 4);

            return (
              <Card key={news.id} className="cyber-card overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold cyber-title mb-1">
                        {lang === "zh" ? news.title.zh : news.title.en}
                      </h3>
                      <p className="text-sm text-[var(--cyber-muted)]">
                        {news.date}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700 font-medium">
                      AI Daily
                    </span>
                  </div>

                  <p className="cyber-subtitle mb-6 text-sm leading-relaxed">
                    {lang === "zh" ? news.summary.zh : news.summary.en}
                  </p>

                  <div className="space-y-3">
                    {displayItems.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg border border-[var(--cyber-border)] hover:border-[var(--cyber-primary)] transition-colors"
                      >
                        <h4 className="font-semibold text-sm mb-1">
                          {i + 1}. {lang === "zh" ? item.title.zh : item.title.en}
                        </h4>
                        <p className="text-sm cyber-subtitle leading-relaxed">
                          {lang === "zh" ? item.description.zh : item.description.en}
                        </p>
                      </div>
                    ))}
                  </div>

                  {news.items.length > 4 && (
                    <div className="text-center mt-4">
                      <Button
                        variant="outline"
                        className="cyber-button-small border-[var(--cyber-border)]"
                        onClick={() => setExpandedId(isExpanded ? null : news.id)}
                      >
                        {isExpanded
                          ? lang === "zh"
                            ? "收起"
                            : "Collapse"
                          : lang === "zh"
                            ? `查看全部 ${news.items.length} 条 →`
                            : `View all ${news.items.length} items →`}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
