"use client";

import Link from "next/link";
import {
  Cross2Icon,
  EnterFullScreenIcon,
  ExitFullScreenIcon,
} from "@radix-ui/react-icons";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FullScreenPlayerProps = {
  projectId: string;
  title: string;
  sourceUrl: string;
  backHref: string;
  lang: "en" | "zh";
  mode: "game" | "tool";
};

export default function FullScreenPlayer({
  projectId,
  title,
  sourceUrl,
  backHref,
  lang,
  mode,
}: FullScreenPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [browserFullscreen, setBrowserFullscreen] = useState(false);
  const embedUrl = useMemo(() => {
    const separator = sourceUrl.includes("?") ? "&" : "?";
    return `${sourceUrl}${separator}embed=1&lang=${lang}`;
  }, [lang, sourceUrl]);

  useEffect(() => {
    const syncFullscreenState = () =>
      setBrowserFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", syncFullscreenState);
    trackEvent(
      mode === "game" ? "fullscreen_game_view" : "fullscreen_tool_view",
      { project_id: projectId },
    );
    return () =>
      document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, [mode, projectId]);

  async function toggleBrowserFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    await containerRef.current?.requestFullscreen();
    trackEvent("browser_fullscreen_enter", { project_id: projectId });
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-[100dvh] w-screen overflow-hidden bg-black"
    >
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full border-0 bg-black"
        allow="autoplay; fullscreen; gamepad; clipboard-write; web-share"
        allowFullScreen
        onLoad={() =>
          trackEvent(
            mode === "game"
              ? "fullscreen_game_loaded"
              : "fullscreen_tool_loaded",
            { project_id: projectId },
          )
        }
      />

      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex items-center justify-end gap-2 p-3">
        <button
          type="button"
          onClick={toggleBrowserFullscreen}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-white/80 bg-black text-white shadow-lg hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
          aria-label={
            browserFullscreen
              ? lang === "zh"
                ? "退出浏览器全屏"
                : "Exit browser fullscreen"
              : lang === "zh"
                ? "进入浏览器全屏"
                : "Enter browser fullscreen"
          }
          title={
            browserFullscreen
              ? lang === "zh"
                ? "退出浏览器全屏"
                : "Exit browser fullscreen"
              : lang === "zh"
                ? "进入浏览器全屏"
                : "Enter browser fullscreen"
          }
        >
          {browserFullscreen ? (
            <ExitFullScreenIcon aria-hidden="true" />
          ) : (
            <EnterFullScreenIcon aria-hidden="true" />
          )}
        </button>
        <Link
          href={backHref}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-white/80 bg-black text-white shadow-lg hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
          aria-label={lang === "zh" ? "返回项目详情" : "Back to project details"}
          title={lang === "zh" ? "返回项目详情" : "Back to project details"}
        >
          <Cross2Icon aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
