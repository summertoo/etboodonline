"use client";

import Link from "next/link";
import {
  Cross2Icon,
  DragHandleDots2Icon,
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

type DockEdge = "left" | "right";

const CONTROL_POSITION_KEY = "zdtech-fullscreen-control-position-v1";

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
  const [dock, setDock] = useState<{ edge: DockEdge; yRatio: number }>({
    edge: "right",
    yRatio: 0.18,
  });
  const [viewportHeight, setViewportHeight] = useState(800);
  const [hovered, setHovered] = useState(false);
  const [pinnedOpen, setPinnedOpen] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [dragPosition, setDragPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const dragStateRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    moved: boolean;
  } | null>(null);
  const lastDragPositionRef = useRef<{ x: number; y: number } | null>(null);
  const suppressClickRef = useRef(false);
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

  useEffect(() => {
    function updateViewport() {
      setViewportHeight(window.innerHeight);
    }

    updateViewport();
    try {
      const saved = JSON.parse(
        localStorage.getItem(CONTROL_POSITION_KEY) || "null",
      ) as { edge?: DockEdge; yRatio?: number } | null;
      if (
        saved &&
        (saved.edge === "left" || saved.edge === "right") &&
        typeof saved.yRatio === "number"
      ) {
        setDock({
          edge: saved.edge,
          yRatio: Math.min(0.94, Math.max(0.06, saved.yRatio)),
        });
      }
    } catch {
      // Ignore malformed saved positions.
    }

    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const controlsExpanded =
    hovered || pinnedOpen || focusWithin || Boolean(dragPosition);
  const dockY = Math.min(
    viewportHeight - 24,
    Math.max(24, viewportHeight * dock.yRatio),
  );

  async function toggleBrowserFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setPinnedOpen(false);
      setHovered(false);
      return;
    }
    await containerRef.current?.requestFullscreen();
    setPinnedOpen(false);
    setHovered(false);
    trackEvent("browser_fullscreen_enter", { project_id: projectId });
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: event.clientX - (rect.left + rect.width / 2),
      offsetY: event.clientY - (rect.top + rect.height / 2),
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    const state = dragStateRef.current;
    if (!state || state.pointerId !== event.pointerId) return;

    const distance = Math.hypot(
      event.clientX - state.startX,
      event.clientY - state.startY,
    );
    if (!state.moved && distance < 4) return;
    state.moved = true;

    const position = {
      x: Math.min(
        window.innerWidth - 20,
        Math.max(20, event.clientX - state.offsetX),
      ),
      y: Math.min(
        window.innerHeight - 24,
        Math.max(24, event.clientY - state.offsetY),
      ),
    };
    lastDragPositionRef.current = position;
    setDragPosition(position);
  }

  function handlePointerEnd(event: React.PointerEvent<HTMLButtonElement>) {
    const state = dragStateRef.current;
    if (!state || state.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const position = lastDragPositionRef.current;
    if (state.moved && position) {
      const nextDock = {
        edge:
          position.x < window.innerWidth / 2
            ? ("left" as const)
            : ("right" as const),
        yRatio: position.y / window.innerHeight,
      };
      setDock(nextDock);
      localStorage.setItem(CONTROL_POSITION_KEY, JSON.stringify(nextDock));
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
      trackEvent("fullscreen_controls_moved", {
        project_id: projectId,
        edge: nextDock.edge,
      });
      event.currentTarget.blur();
      setFocusWithin(false);
    }

    dragStateRef.current = null;
    lastDragPositionRef.current = null;
    setDragPosition(null);
    setPinnedOpen(false);
    setHovered(false);
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

      <div
        className="pointer-events-none fixed z-[60]"
        style={
          dragPosition
            ? {
                left: dragPosition.x - 20,
                top: dragPosition.y,
                transform: "translateY(-50%)",
              }
            : dock.edge === "right"
              ? {
                  right: -20,
                  top: dockY,
                  transform: "translateY(-50%)",
                }
              : {
                  left: -20,
                  top: dockY,
                  transform: "translateY(-50%)",
                }
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocusWithin(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setFocusWithin(false);
          }
        }}
      >
        <div
          id="fullscreen-controls"
          className="pointer-events-auto relative flex items-center"
        >
          {controlsExpanded && !dragPosition && (
            <div
              className={
                dock.edge === "right"
                  ? "absolute right-full top-1/2 mr-2 flex -translate-y-1/2 items-center gap-2"
                  : "absolute left-full top-1/2 ml-2 flex -translate-y-1/2 items-center gap-2"
              }
            >
              <button
                type="button"
                onClick={toggleBrowserFullscreen}
                className="flex h-11 w-11 items-center justify-center border border-white/80 bg-black text-white shadow-lg hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
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
                className="flex h-11 w-11 items-center justify-center border border-white/80 bg-black text-white shadow-lg hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
                aria-label={
                  lang === "zh" ? "返回项目详情" : "Back to project details"
                }
                title={
                  lang === "zh" ? "返回项目详情" : "Back to project details"
                }
              >
                <Cross2Icon aria-hidden="true" />
              </Link>
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              if (suppressClickRef.current) return;
              setPinnedOpen((current) => !current);
              trackEvent("fullscreen_controls_toggle", {
                project_id: projectId,
              });
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="flex h-10 w-10 touch-none cursor-grab items-center justify-center border border-white/80 bg-black text-white shadow-lg active:cursor-grabbing hover:border-[var(--cyber-primary)] hover:text-[var(--cyber-primary)]"
            aria-expanded={controlsExpanded}
            aria-controls="fullscreen-controls"
            aria-label={
              controlsExpanded
                ? lang === "zh"
                  ? "拖动或收起全屏控制"
                  : "Drag or collapse full-screen controls"
                : lang === "zh"
                  ? "拖动或展开全屏控制"
                  : "Drag or expand full-screen controls"
            }
            title={
              controlsExpanded
                ? lang === "zh"
                  ? "拖动调整位置，点击固定展开"
                  : "Drag to reposition or click to keep controls open"
                : lang === "zh"
                  ? "移入展开，拖动调整位置"
                  : "Hover to expand or drag to reposition"
            }
          >
            <DragHandleDots2Icon aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
