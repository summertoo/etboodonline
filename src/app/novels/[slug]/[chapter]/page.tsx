"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useLang } from "@/components/LangProvider";
import { getNovelBySlug } from "@/data/novels";
import type { ChapterMeta } from "@/data/novels";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ChapterReaderPageProps {
  params: {
    slug: string;
    chapter: string;
  };
}

interface ChapterContent {
  zh: string[];
  en: string[];
}

type DisplayMode = "zh" | "en" | "both";
type ThemeMode = "light" | "dark";

export default function ChapterReaderPage({ params }: ChapterReaderPageProps) {
  const { t, lang } = useLang();
  const chapterNumber = parseInt(params.chapter, 10);
  const novel = getNovelBySlug(params.slug);
  const chapterMeta: ChapterMeta | undefined = novel?.chapters.find(
    (c) => c.number === chapterNumber
  );

  const [chapterContent, setChapterContent] = useState<ChapterContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("zh");
  const [fontSize, setFontSize] = useState<number>(18);
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  // Load chapter content from API
  useEffect(() => {
    if (!params.slug || !params.chapter) return;
    setLoading(true);
    fetch(`/api/novels/${params.slug}/${params.chapter}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: ChapterContent) => {
        setChapterContent(data);
        setLoading(false);
      })
      .catch(() => {
        setChapterContent(null);
        setLoading(false);
      });
  }, [params.slug, params.chapter]);

  // Load reader preferences from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("reader-mode") as DisplayMode;
    const savedFontSize = localStorage.getItem("reader-font-size");
    const savedTheme = localStorage.getItem("reader-theme") as ThemeMode;
    if (savedMode) setDisplayMode(savedMode);
    if (savedFontSize) setFontSize(parseInt(savedFontSize, 10));
    if (savedTheme) setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("reader-mode", displayMode);
  }, [displayMode, mounted]);

  useEffect(() => {
    if (mounted) localStorage.setItem("reader-font-size", fontSize.toString());
  }, [fontSize, mounted]);

  useEffect(() => {
    if (mounted) localStorage.setItem("reader-theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [chapterNumber]);

  if (!novel || !chapterMeta) {
    notFound();
  }

  const currentIndex = novel.chapters.findIndex((c) => c.number === chapterNumber);
  const prevChapter = currentIndex > 0 ? novel.chapters[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < novel.chapters.length - 1
      ? novel.chapters[currentIndex + 1]
      : null;

  const parseInlineFormatting = (text: string) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={i}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => (
      <p key={index} className="mb-6 leading-relaxed">
        {parseInlineFormatting(paragraph)}
      </p>
    ));
  };

  const renderBilingualContent = () => {
    if (!chapterContent) return null;
    const zhContent = chapterContent.zh;
    const enContent = chapterContent.en;
    const maxLength = Math.max(zhContent.length, enContent.length);
    const pairs: { zh: string; en: string }[] = [];

    for (let i = 0; i < maxLength; i++) {
      pairs.push({
        zh: zhContent[i] || "",
        en: enContent[i] || "",
      });
    }

    return pairs.map((pair, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
        <div className={`${textClass}`}>
          <p className="mb-0 leading-relaxed">{parseInlineFormatting(pair.zh)}</p>
        </div>
        <div className={`${mutedClass}`}>
          <p className="mb-0 leading-relaxed">{parseInlineFormatting(pair.en)}</p>
        </div>
      </div>
    ));
  };

  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textClass = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const mutedClass = theme === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900" : "bg-[var(--cyber-bg)]"}`}>
      <div className="max-w-4xl mx-auto px-4">
        <Navbar />

        {/* Reader Toolbar */}
        <div
          className={`sticky top-0 z-20 py-4 border-b ${
            theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-[var(--cyber-bg)] border-[var(--cyber-border)]"
          } backdrop-blur-sm bg-opacity-90`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href={`/novels/${novel.slug}`}>
                <Button
                  variant="outline"
                  className={`text-sm ${
                    theme === "dark"
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-[var(--cyber-border)] text-gray-700 hover:bg-white hover:text-[var(--cyber-primary)]"
                  }`}
                >
                  {lang === "zh" ? "← 返回目录" : "← Contents"}
                </Button>
              </Link>
              <span className={`text-sm ${mutedClass}`}>
                {lang === "zh" ? `第 ${chapterNumber} 章` : `Chapter ${chapterNumber}`}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Language Mode */}
              <div className="flex rounded-lg overflow-hidden border">
                <button
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    displayMode === "zh"
                      ? "bg-[var(--cyber-primary)] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setDisplayMode("zh")}
                >
                  中文
                </button>
                <button
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    displayMode === "en"
                      ? "bg-[var(--cyber-primary)] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setDisplayMode("en")}
                >
                  EN
                </button>
                <button
                  className={`px-3 py-1.5 text-sm transition-colors ${
                    displayMode === "both"
                      ? "bg-[var(--cyber-primary)] text-white"
                      : theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setDisplayMode("both")}
                >
                  双语
                </button>
              </div>

              {/* Font Size */}
              <div className="flex items-center gap-2">
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                  disabled={fontSize <= 14}
                >
                  A-
                </button>
                <span className={`text-sm ${mutedClass} w-8 text-center`}>{fontSize}</span>
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                  disabled={fontSize >= 28}
                >
                  A+
                </button>
              </div>

              {/* Theme */}
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Title */}
        <div className="py-12 border-b" style={{ borderColor: theme === "dark" ? "#374151" : "var(--cyber-border)" }}>
          <p className={`text-lg md:text-xl font-medium ${mutedClass} mb-6 text-center`}>
            {lang === "zh" ? novel.title.zh : novel.title.en}
          </p>
          {displayMode === "both" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <div className="text-center">
                <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${textClass}`}>
                  {chapterMeta.title.zh}
                </h1>
                <p className="text-xs text-[var(--cyber-muted)]">🇨🇳 中文</p>
              </div>
              <div className="text-center">
                <h1 className={`text-2xl md:text-3xl font-bold mb-2 ${mutedClass}`}>
                  {chapterMeta.title.en}
                </h1>
                <p className="text-xs text-[var(--cyber-muted)]">🇺🇸 English</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className={`text-3xl font-bold mb-3 ${textClass}`}>
                {displayMode === "zh" ? chapterMeta.title.zh : chapterMeta.title.en}
              </h1>
            </div>
          )}
          <p className={`text-sm ${mutedClass} mt-6 text-center`}>
            {chapterMeta.publishDate} · {chapterMeta.wordCount}{" "}
            {lang === "zh" ? "字" : "words"}
          </p>
        </div>

        {/* Chapter Content */}
        <div
          className={`py-12 ${bgClass}`}
          style={{ fontSize: `${fontSize}px`, lineHeight: "1.9" }}
        >
          {loading ? (
            <div className="text-center py-20">
              <p className={mutedClass}>
                {lang === "zh" ? "加载中..." : "Loading..."}
              </p>
            </div>
          ) : !chapterContent ? (
            <div className="text-center py-20">
              <p className={mutedClass}>
                {lang === "zh" ? "章节内容未找到" : "Chapter content not found"}
              </p>
            </div>
          ) : displayMode === "both" ? (
            <div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-8 md:gap-12 mb-8 pb-4 border-b" style={{ borderColor: theme === "dark" ? "#374151" : "var(--cyber-border)" }}>
                  <h3 className="text-lg font-bold">
                    🇨🇳 中文
                  </h3>
                  <h3 className="text-lg font-bold">
                    🇺🇸 English
                  </h3>
                </div>
              </div>
              {renderBilingualContent()}
            </div>
          ) : (
            <div className={textClass}>
              {renderContent(
                displayMode === "zh" ? chapterContent.zh : chapterContent.en
              )}
            </div>
          )}
        </div>

        {/* Chapter Navigation */}
        <div
          className={`py-8 border-t ${
            theme === "dark" ? "border-gray-700" : "border-[var(--cyber-border)]"
          }`}
        >
          <div className="flex justify-between items-center">
            {prevChapter ? (
              <Link href={`/novels/${novel.slug}/${prevChapter.number}`}>
                <Button
                  variant="outline"
                  className={`${
                    theme === "dark"
                      ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                      : "border-[var(--cyber-border)] text-gray-700 hover:bg-white hover:text-[var(--cyber-primary)]"
                  }`}
                >
                  ← {lang === "zh" ? "上一章" : "Previous"}
                </Button>
              </Link>
            ) : (
              <div />
            )}

            <Link href={`/novels/${novel.slug}`}>
              <Button
                variant="outline"
                className={`${
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-[var(--cyber-border)] text-gray-700 hover:bg-white hover:text-[var(--cyber-primary)]"
                }`}
              >
                {lang === "zh" ? "目录" : "Contents"}
              </Button>
            </Link>

            {nextChapter ? (
              <Link href={`/novels/${novel.slug}/${nextChapter.number}`}>
                <Button className="cyber-button">
                  {lang === "zh" ? "下一章" : "Next"} →
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className={`py-10 text-center ${mutedClass}`}>
          <p className="text-sm">{t("footer.copyright")}</p>
        </footer>
      </div>
    </div>
  );
}
