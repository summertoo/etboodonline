"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { novels } from "@/data/novels";
import Link from "next/link";

export default function NovelsHome() {
  const { t, lang } = useLang();

  return (
    <div className="max-w-7xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="text-center py-20 cyber-hero">
        <h2 className="text-4xl font-bold mb-4 cyber-title">
          {lang === "zh" ? "📚 小说阅读中心" : "📚 Novel Reading Center"}
        </h2>
        <p className="mb-8 cyber-subtitle max-w-2xl mx-auto">
          {lang === "zh"
            ? "原创网络小说，中英双语阅读体验。穿越、武侠、历史，各种精彩故事等你来读。"
            : "Original web novels with bilingual reading experience. Transmigration, wuxia, history — all kinds of exciting stories await you."}
        </p>
      </section>

      <section className="py-12">
        <h3 className="text-2xl font-bold mb-8 cyber-title">
          {lang === "zh" ? "全部作品" : "All Works"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {novels.map((novel) => (
            <Card
              key={novel.id}
              className="cyber-card group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-32 h-48 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-xl mb-1">
                        {lang === "zh" ? novel.title.zh : novel.title.en}
                      </h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          novel.status === "ongoing"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {novel.status === "ongoing"
                          ? lang === "zh"
                            ? "连载中"
                            : "Ongoing"
                          : lang === "zh"
                            ? "已完结"
                            : "Completed"}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--cyber-muted)] mb-3">
                      {lang === "zh" ? `作者：${novel.author}` : `Author: ${novel.author}`}
                    </p>
                    <p className="text-sm mb-4 cyber-subtitle line-clamp-3">
                      {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {novel.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag.zh}
                          className="text-xs px-2 py-1 rounded-full bg-orange-50 text-orange-700"
                        >
                          {lang === "zh" ? tag.zh : tag.en}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--cyber-muted)]">
                        {lang === "zh"
                          ? `共 ${novel.totalChapters} 章`
                          : `${novel.totalChapters} chapters`}
                      </span>
                      <Link href={`/novels/${novel.slug}`}>
                        <Button className="cyber-button-small">
                          {lang === "zh" ? "开始阅读" : "Start Reading"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 border border-[var(--cyber-border)]">
          <h3 className="text-2xl font-bold mb-4 cyber-title">
            {lang === "zh" ? "🎯 关于我们的小说" : "🎯 About Our Novels"}
          </h3>
          <p className="cyber-subtitle mb-4">
            {lang === "zh"
              ? "我们相信好的故事应该被更多人看到。这就是为什么我们将原创小说翻译成英文，让世界各地的读者都能体验中文网络文学的魅力。"
              : "We believe good stories deserve to be shared. That's why we translate our original novels into English, allowing readers worldwide to experience the charm of Chinese web literature."}
          </p>
          <p className="cyber-subtitle">
            {lang === "zh"
              ? "每部小说都提供中英双语对照阅读，你可以随时切换语言，或者同时阅读两种版本来学习语言。"
              : "Each novel offers bilingual reading. You can switch languages anytime, or read both versions simultaneously for language learning."}
          </p>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
