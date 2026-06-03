"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<ProjectCommentRecord[]>([]);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetchProjectComments(projectId)
      .then((items) => setComments(items))
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, [open, projectId]);

  if (!open) return null;

  async function handleSubmit() {
    const trimmed = content.trim();
    if (!trimmed) return;
    if (!isLoggedIn) {
      onRequireLogin?.();
      return;
    }

    setSubmitting(true);
    try {
      const result = await createProjectComment(projectId, trimmed);
      if (result.success && result.comment) {
        setComments((prev) => [result.comment!, ...prev]);
        setContent("");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-[var(--cyber-border)] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--cyber-border)] px-6 py-4">
          <div>
            <h3 className="text-lg font-semibold text-[var(--cyber-text)]">
              Comments
            </h3>
            <p className="text-sm text-[var(--cyber-muted)]">{projectTitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-[var(--cyber-muted)] hover:text-[var(--cyber-primary)]"
          >
            Close
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
                  ? "Leave a short comment..."
                  : "Sign in to leave a comment..."
              }
              className="w-full rounded-xl border border-[var(--cyber-border)] px-4 py-3 text-sm text-[var(--cyber-text)] outline-none transition focus:border-[var(--cyber-primary)]"
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
                disabled={submitting || !content.trim()}
              >
                {submitting ? "Posting..." : "Post"}
              </Button>
            </div>
            {!isLoggedIn && (
              <p className="text-xs text-[var(--cyber-muted)]">
                Sign in is required only when posting. Existing comments can be viewed directly.
              </p>
            )}
          </div>

          <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1">
            {loading ? (
              <p className="text-sm text-[var(--cyber-muted)]">Loading comments...</p>
            ) : comments.length === 0 ? (
              <p className="text-sm text-[var(--cyber-muted)]">
                No comments yet.
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
    </div>
  );
}
