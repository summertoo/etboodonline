"use client";

import { useEffect, useState } from "react";
import ProjectCommentModal from "@/components/ProjectCommentModal";
import {
  fetchProjectComments,
  toggleProjectFavorite,
  toggleProjectLike,
  type ProjectCommentRecord,
  type ProjectSocialStat,
} from "@/lib/social";

interface ProjectActionsProps {
  projectId: string;
  initialStat?: ProjectSocialStat;
  onRequireLogin?: () => void;
  isLoggedIn: boolean;
  projectTitle?: string;
}

export default function ProjectActions({
  projectId,
  initialStat,
  onRequireLogin,
  isLoggedIn,
  projectTitle = "Project",
}: ProjectActionsProps) {
  const [stat, setStat] = useState<ProjectSocialStat>(
    initialStat || {
      project_id: projectId,
      like_count: 0,
      favorite_count: 0,
      liked_by_me: false,
      favorited_by_me: false,
    },
  );
  const [loading, setLoading] = useState<"like" | "favorite" | null>(null);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (!initialStat) return;
    setStat(initialStat);
  }, [initialStat]);

  useEffect(() => {
    fetchProjectComments(projectId)
      .then((items: ProjectCommentRecord[]) => setCommentCount(items.length))
      .catch(() => setCommentCount(0));
  }, [projectId]);

  async function handleLike() {
    if (!isLoggedIn) {
      onRequireLogin?.();
      return;
    }

    setLoading("like");
    try {
      const data = await toggleProjectLike(projectId);
      if (data.success) {
        setStat((prev) => ({
          ...prev,
          liked_by_me: data.liked,
          like_count: data.like_count,
        }));
      }
    } finally {
      setLoading(null);
    }
  }

  async function handleFavorite() {
    if (!isLoggedIn) {
      onRequireLogin?.();
      return;
    }

    setLoading("favorite");
    try {
      const data = await toggleProjectFavorite(projectId);
      if (data.success) {
        setStat((prev) => ({
          ...prev,
          favorited_by_me: data.favorited,
          favorite_count: data.favorite_count,
        }));
      }
    } finally {
      setLoading(null);
    }
  }

  function handleShare() {
    const shareUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://www.etboodonline.com";
    const projectUrl = `${shareUrl}/project`;
    const text = `Check out ${projectTitle} on ZD Tech`;
    const xUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}&url=${encodeURIComponent(projectUrl)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer");
  }

  function ActionIcon({
    active,
    colorClass,
    baseClass,
    onClick,
    label,
    disabled,
    children,
  }: {
    active?: boolean;
    colorClass: string;
    baseClass?: string;
    onClick: () => void;
    label: string;
    disabled?: boolean;
    children: React.ReactNode;
  }) {
    return (
      <button
        type="button"
        aria-label={label}
        title={label}
        disabled={disabled}
        onClick={onClick}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm backdrop-blur transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${
          active
            ? colorClass
            : baseClass || "border-slate-300/80 bg-slate-800 text-white hover:bg-slate-700"
        }`}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pt-3">
        <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-2 py-1 shadow-sm backdrop-blur">
          <ActionIcon
            active={stat.liked_by_me}
            colorClass="border-rose-200 bg-rose-50 text-rose-500"
            onClick={handleLike}
            disabled={loading !== null}
            label="Like"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill={stat.liked_by_me ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
              <path d="M12 20.5s-7-4.35-9.25-8.6C1.14 8.87 2.03 5.5 5.4 4.57c2.02-.55 4.07.21 5.34 1.9 1.27-1.69 3.32-2.45 5.34-1.9 3.37.93 4.26 4.3 2.65 7.33C19 16.15 12 20.5 12 20.5Z" />
            </svg>
          </ActionIcon>
          <span className="min-w-[1.5rem] text-xs font-semibold text-[var(--cyber-text)]">
            {stat.like_count}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-2 py-1 shadow-sm backdrop-blur">
          <ActionIcon
            active={stat.favorited_by_me}
            colorClass="border-amber-200 bg-amber-50 text-amber-500"
            onClick={handleFavorite}
            disabled={loading !== null}
            label="Favorite"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill={stat.favorited_by_me ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
              <path d="m12 3.75 2.62 5.31 5.86.85-4.24 4.13 1 5.84L12 17.12l-5.24 2.76 1-5.84-4.24-4.13 5.86-.85L12 3.75Z" />
            </svg>
          </ActionIcon>
          <span className="min-w-[1.5rem] text-xs font-semibold text-[var(--cyber-text)]">
            {stat.favorite_count}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-2 py-1 shadow-sm backdrop-blur">
          <ActionIcon
            colorClass="border-sky-200 bg-sky-50 text-sky-500"
            baseClass="border-slate-300/80 bg-slate-800 text-white hover:bg-sky-700"
            onClick={() => {
              setCommentOpen(true);
            }}
            label="Comment"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M7 17.25 3.75 20V6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v8.5A2.25 2.25 0 0 1 18 17.5H7Z" />
            </svg>
          </ActionIcon>
          <span className="min-w-[1.5rem] text-xs font-semibold text-[var(--cyber-text)]">
            {commentCount}
          </span>
        </div>

        <ActionIcon
          colorClass="border-violet-200 bg-violet-50 text-violet-500"
          baseClass="border-slate-300/80 bg-slate-800 text-white hover:bg-violet-700"
          onClick={handleShare}
          label="Share"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14.5 5.25h4.25V9.5" />
            <path d="m10.25 13.75 8.5-8.5" />
            <path d="M19.5 13v4.75A1.75 1.75 0 0 1 17.75 19.5H6.25A1.75 1.75 0 0 1 4.5 17.75V6.25A1.75 1.75 0 0 1 6.25 4.5H11" />
          </svg>
        </ActionIcon>
      </div>

      <ProjectCommentModal
        open={commentOpen}
        projectId={projectId}
        projectTitle={projectTitle}
        isLoggedIn={isLoggedIn}
        onClose={() => {
          setCommentOpen(false);
          fetchProjectComments(projectId)
            .then((items) => setCommentCount(items.length))
            .catch(() => {});
        }}
        onRequireLogin={onRequireLogin}
      />
    </>
  );
}
