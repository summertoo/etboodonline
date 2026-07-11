"use client";

import Link from "next/link";
import { EnterFullScreenIcon } from "@radix-ui/react-icons";
import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type GameFrameProps = {
  projectId: string;
  title: string;
  sourceUrl: string;
  imageUrl: string;
  lang: "en" | "zh";
  mode?: "game" | "tool";
};

export default function GameFrame({
  projectId,
  title,
  sourceUrl,
  imageUrl,
  lang,
  mode = "game",
}: GameFrameProps) {
  const [started, setStarted] = useState(false);
  const fullScreenPath = `/${lang}/project/${projectId}/play`;
  const embedUrl = useMemo(() => {
    const separator = sourceUrl.includes("?") ? "&" : "?";
    return `${sourceUrl}${separator}embed=1&lang=${lang}`;
  }, [lang, sourceUrl]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      const data = event.data as
        | { source?: string; event?: string; projectId?: string }
        | undefined;
      if (
        data?.source !== "zdtech-game" ||
        data.projectId !== projectId ||
        !data.event
      ) {
        return;
      }
      trackEvent(data.event, { project_id: projectId });
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [projectId]);

  if (!started) {
    return (
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-black sm:min-h-[560px]">
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-md px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              className="cyber-button px-6 py-3"
              onClick={() => {
                setStarted(true);
                trackEvent(mode === "game" ? "game_start" : "tool_start", {
                  project_id: projectId,
                });
              }}
            >
              {mode === "game"
                ? lang === "zh"
                  ? "开始游戏"
                  : "Start game"
                : lang === "zh"
                  ? "打开工具"
                  : "Open tool"}
            </button>
            <Link
              href={fullScreenPath}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-white/60 px-5 py-3 text-sm font-medium text-white hover:border-white"
              onClick={() =>
                trackEvent("fullscreen_player_open", {
                  project_id: projectId,
                })
              }
            >
              <EnterFullScreenIcon aria-hidden="true" />
              {mode === "game"
                ? lang === "zh"
                  ? "页面全屏试玩"
                  : "Open full-screen player"
                : lang === "zh"
                  ? "页面全屏使用"
                  : "Open full-screen tool"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex justify-end">
        <Link
          href={fullScreenPath}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 border border-[var(--cyber-border)] px-4 py-2 text-sm font-medium hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
          onClick={() =>
            trackEvent("fullscreen_player_open", { project_id: projectId })
          }
        >
          <EnterFullScreenIcon aria-hidden="true" />
          {mode === "game"
            ? lang === "zh"
              ? "页面全屏试玩"
              : "Open full-screen player"
            : lang === "zh"
              ? "页面全屏使用"
              : "Open full-screen tool"}
        </Link>
      </div>
      <iframe
        src={embedUrl}
        title={title}
        className="h-[72vh] min-h-[520px] w-full border-0 bg-black"
        allow="autoplay; fullscreen; gamepad; clipboard-write; web-share"
        allowFullScreen
        onLoad={() =>
          trackEvent(
            mode === "game" ? "game_frame_loaded" : "tool_frame_loaded",
            {
              project_id: projectId,
            },
          )
        }
      />
    </div>
  );
}
