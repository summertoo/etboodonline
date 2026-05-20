import { NextResponse } from "next/server";
import chapterData from "@/data/chapters.json";

interface ChapterContent {
  zh: string[];
  en: string[];
}

type NovelChapters = Record<string, ChapterContent>;
type AllChapters = Record<string, NovelChapters>;

const data = chapterData as AllChapters;

export async function GET(
  request: Request,
  { params }: { params: { slug: string; chapter: string } }
) {
  const { slug, chapter } = params;
  const novelChapters = data[slug];
  if (!novelChapters) {
    return NextResponse.json({ error: "Novel not found" }, { status: 404 });
  }
  const chapterContent = novelChapters[chapter];
  if (!chapterContent) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }
  return NextResponse.json(chapterContent);
}
