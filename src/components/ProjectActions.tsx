"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  toggleProjectFavorite,
  toggleProjectLike,
  type ProjectSocialStat,
} from "@/lib/social";

interface ProjectActionsProps {
  projectId: string;
  initialStat?: ProjectSocialStat;
  onRequireLogin?: () => void;
  isLoggedIn: boolean;
}

export default function ProjectActions({
  projectId,
  initialStat,
  onRequireLogin,
  isLoggedIn,
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

  useEffect(() => {
    if (!initialStat) return;
    setStat(initialStat);
  }, [initialStat]);

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

  return (
    <div className="flex flex-wrap gap-2 pt-3">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={stat.liked_by_me ? "border-rose-400 text-rose-500" : ""}
        onClick={handleLike}
        disabled={loading !== null}
      >
        {loading === "like" ? "..." : `Like ${stat.like_count}`}
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={stat.favorited_by_me ? "border-amber-400 text-amber-600" : ""}
        onClick={handleFavorite}
        disabled={loading !== null}
      >
        {loading === "favorite" ? "..." : `Favorite ${stat.favorite_count}`}
      </Button>
    </div>
  );
}
