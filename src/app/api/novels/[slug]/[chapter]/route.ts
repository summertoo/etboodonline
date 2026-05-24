import { NextResponse } from "next/server";
import { getChapter } from "@/data/chapters";

export async function GET(
  request: Request,
  { params }: { params: { slug: string; chapter: string } }
) {
  const { slug, chapter } = params;
  const chapterNum = parseInt(chapter, 10);

  if (isNaN(chapterNum)) {
    return NextResponse.json({ error: "Invalid chapter number" }, { status: 400 });
  }

  const chapterContent = await getChapter(slug, chapterNum);

  if (!chapterContent) {
    return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
  }

  return NextResponse.json(chapterContent);
}
