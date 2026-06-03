"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/LangProvider";
import { supabase } from "@/lib/supabase";
import {
  createProjectComment,
  fetchProjectComments,
  type ProjectCommentRecord,
} from "@/lib/social";

interface ProjectCommentModalProps {
  open: boolean;
  projectId: string;
  projectTitle: string;
  isLoggedIn: boolean;
  onClose: () => void;
  onRequireLogin?: () => void;
}

export default function ProjectCommentModal({
  open,
  projectId,
  projectTitle,
  isLoggedIn,
  onClose,
  onRequireLogin,
}: ProjectCommentModalProps) {
  const { lang } = useLang();
  const maxCommentsPerUser = 5;
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<ProjectCommentRecord[]>([]);
  const [mounted, setMounted] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUserId(session?.user?.id ?? null);
    });

    setSubmitError(null);
    setLoading(true);
    fetchProjectComments(projectId)
      .then((items) => setComments(items))
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, [open, projectId]);

  if (!open || !mounted) return null;

  const myCommentCount = currentUserId
    ? comments.filter((comment) => comment.user_id === currentUserId).length
    : 0;
  const reachedLimit = myCommentCount >= maxCommentsPerUser;

  async function handleSubmit() {
    const trimmed = content.trim();
    setSubmitError(null);
    if (!trimmed) return;
    if (!isLoggedIn) {
      onRequireLogin?.();
      return;
    }
    if (reachedLimit) {
      setSubmitError(
        lang === "zh"
          ? "当前项目下最多只能留言 5 条。"
          : "You can post up to 5 comments per project.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const result = await createProjectComment(projectId, trimmed);
      if (result.success && result.comment) {
        setComments((prev) => [result.comment!, ...prev]);
        setContent("");
        setSubmitError(null);
        return;
      }

      if (result.error === "comment_limit_reached") {
        setSubmitError(
          lang === "zh"
            ? "当前项目下最多只能留言 5 条。"
            : "You can post up to 5 comments per project.",
        );
      } else {
        setSubmitError(
          lang === "zh"
            ? "留言提交失败，请稍后再试。"
            : "Failed to post comment. Please try again later.",
        );
      }
    } catch {
      setSubmitError(
        lang === "zh"
          ? "留言提交失败，请稍后再试。"
          : "Failed to post comment. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-[var(--cyber-border)] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--cyber-border)] px-6 py-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--cyber-text)]">
              {lang === "zh" ? "留言" : "Comments"}
            </h3>
            <p className="text-sm text-[var(--cyber-muted)]">{projectTitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)]"
          >
            {lang === "zh" ? "关闭" : "Close"}
          </button>
        </div>

        <div className="space-y-4 px-6 py-5">
          <div className="space-y-3">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              maxLength={300}
              placeholder={
                isLoggedIn
                  ? lang === "zh"
                    ? "写下你的留言..."
                    : "Leave a short comment..."
                  : lang === "zh"
                    ? "登录后即可留言..."
                    : "Sign in to leave a comment..."
              }
              className="w-full rounded-xl border border-[var(--cyber-border)] bg-white px-4 py-3 text-sm text-[var(--cyber-text)] outline-none transition focus:border-[var(--cyber-primary)]"
              style={{ colorScheme: "light" }}
            />
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-[var(--cyber-muted)]">
                {content.trim().length}/300
              </span>
              <Button
                type="button"
                size="sm"
                className="cyber-button-small"
                onClick={handleSubmit}
                disabled={submitting || !content.trim() || reachedLimit}
              >
                {submitting
                  ? lang === "zh"
                    ? "提交中..."
                    : "Posting..."
                  : lang === "zh"
                    ? "留言"
                    : "Post"}
              </Button>
            </div>
            {!isLoggedIn && (
              <p className="text-xs text-[var(--cyber-muted)]">
                {lang === "zh"
                  ? "查看留言不需要登录，只有发布留言时才需要登录。"
                  : "Sign in is required only when posting. Existing comments can be viewed directly."}
              </p>
            )}
            {isLoggedIn && (
              <p className="text-xs text-[var(--cyber-muted)]">
                {lang === "zh"
                  ? `你在这个项目下已留言 ${myCommentCount}/${maxCommentsPerUser} 条。`
                  : `You have posted ${myCommentCount}/${maxCommentsPerUser} comments for this project.`}
              </p>
            )}
            {isLoggedIn && reachedLimit && (
              <p className="text-xs font-medium text-rose-500">
                {lang === "zh"
                  ? "当前项目下最多只能留言 5 条。"
                  : "You can post up to 5 comments per project."}
              </p>
            )}
            {submitError && (
              <p className="text-xs font-medium text-rose-500">
                {submitError}
              </p>
            )}
          </div>

          <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1">
            {loading ? (
              <p className="text-sm text-[var(--cyber-muted)]">
                {lang === "zh" ? "正在加载留言..." : "Loading comments..."}
              </p>
            ) : comments.length === 0 ? (
              <p className="text-sm text-[var(--cyber-muted)]">
                {lang === "zh" ? "还没有留言。" : "No comments yet."}
              </p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="rounded-xl border border-[var(--cyber-border)] bg-[var(--cyber-accent-light)] px-4 py-3"
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[var(--cyber-text)]">
                      {comment.nickname || "User"}
                    </span>
                    <span className="text-xs text-[var(--cyber-muted)]">
                      {new Date(comment.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--cyber-muted)]">
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
