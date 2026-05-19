"use client";

import { useState } from "react";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { getNovelBySlug } from "@/data/novels";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NovelDetailPageProps {
  params: {
    slug: string;
  };
}

export default function NovelDetailPage({ params }: NovelDetailPageProps) {
  const { t, lang } = useLang();
  const [showAllChapters, setShowAllChapters] = useState(false);

  const novel = getNovelBySlug(params.slug);

  if (!novel) {
    notFound();
  }

  const displayChapters = showAllChapters
    ? novel.chapters
    : novel.chapters.slice(0, 10);

  return (
    <div className="max-w-5xl mx-auto px-4 cyber-container fly-in">
      <Navbar />

      <section className="py-12">
        <Card className="cyber-card overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-48 h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center mx-auto md:mx-0">
                <span className="text-8xl">📖</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-3 cyber-title">
                  {lang === "zh" ? novel.title.zh : novel.title.en}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-[var(--cyber-muted)]">
                    {lang === "zh" ? `作者：${novel.author}` : `Author: ${novel.author}`}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
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
                  <span className="text-sm text-[var(--cyber-muted)]">
                    {lang === "zh"
                      ? `共 ${novel.totalChapters} 章`
                      : `${novel.totalChapters} chapters`}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {novel.tags.map((tag) => (
                    <span
                      key={tag.zh}
                      className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-700"
                    >
                      {lang === "zh" ? tag.zh : tag.en}
                    </span>
                  ))}
                </div>
                <p className="cyber-subtitle leading-relaxed mb-6">
                  {lang === "zh" ? novel.synopsis.zh : novel.synopsis.en}
                </p>
                <div className="flex flex-wrap gap-3">
                  {novel.chapters.length > 0 && (
                    <Link href={`/novels/${novel.slug}/1`}>
                      <Button className="cyber-button">
                        {lang === "zh" ? "开始阅读" : "Start Reading"}
                      </Button>
                    </Link>
                  )}
                  <Link href="/novels">
                    <Button
                      variant="outline"
                      className="cyber-button-small border-[var(--cyber-border)]"
                    >
                      {lang === "zh" ? "返回书库" : "Back to Library"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6 cyber-title">
          {lang === "zh" ? "📋 章节目录" : "📋 Table of Contents"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {displayChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/novels/${novel.slug}/${chapter.number}`}
            >
              <Card className="cyber-card group cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[var(--cyber-muted)] block mb-1">
                        {lang === "zh"
                          ? `第 ${chapter.number} 章`
                          : `Chapter ${chapter.number}`}
                      </span>
                      <h3 className="font-semibold text-sm group-hover:text-[var(--cyber-primary)] transition-colors">
                        {lang === "zh" ? chapter.title.zh : chapter.title.en}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[var(--cyber-muted)] block">
                        {chapter.wordCount}{" "}
                        {lang === "zh" ? "字" : "words"}
                      </span>
                      <span className="text-xs text-[var(--cyber-muted)]">
                        {chapter.publishDate}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {novel.chapters.length > 10 && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="cyber-button-small border-[var(--cyber-border)]"
              onClick={() => setShowAllChapters(!showAllChapters)}
            >
              {showAllChapters
                ? lang === "zh"
                  ? "收起章节"
                  : "Collapse Chapters"
                : lang === "zh"
                  ? "展开全部章节"
                  : "Show All Chapters"}
            </Button>
          </div>
        )}
      </section>

      <section className="py-12">
        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-[var(--cyber-border)]">
          <h3 className="text-xl font-bold mb-3 cyber-title">
            {lang === "zh" ? "💡 阅读提示" : "💡 Reading Tips"}
          </h3>
          <ul className="cyber-subtitle space-y-2 text-sm">
            <li>
              ✨{" "}
              {lang === "zh"
                ? "所有章节都支持中英双语切换，点击阅读页的语言按钮即可切换"
                : "All chapters support bilingual switching — click the language button in the reader"}
            </li>
            <li>
              📱{" "}
              {lang === "zh"
                ? "阅读界面支持字体大小调节和夜间模式，适配各种阅读场景"
                : "The reader supports font size adjustment and night mode for all reading scenarios"}
            </li>
            <li>
              🔄{" "}
              {lang === "zh"
                ? "小说持续更新中，欢迎收藏并关注最新章节"
                : "Novels are continuously updated — bookmark and follow for the latest chapters"}
            </li>
          </ul>
        </div>
      </section>

      <footer className="py-10 cyber-footer text-center">
        <p className="cyber-subtitle">{t("footer.copyright")}</p>
      </footer>
    </div>
  );
}
