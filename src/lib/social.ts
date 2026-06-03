import { supabase } from "@/lib/supabase";

export interface ProjectSocialStat {
  project_id: string;
  like_count: number;
  favorite_count: number;
  liked_by_me: boolean;
  favorited_by_me: boolean;
}

export interface ProjectCommentRecord {
  id: number;
  project_id: string;
  content: string;
  created_at: string;
  user_id: string;
  nickname: string | null;
}

export interface CenterProjectRecord {
  project_id: string;
  created_at: string;
}

export interface CreditLogRecord {
  id: number;
  amount: number;
  type: string;
  description: string | null;
  created_at: string;
}

export interface CheckinRecord {
  checkin_date: string;
  points_awarded: number;
  created_at: string;
}

export interface CenterData {
  profile: {
    id: string;
    nickname: string | null;
    avatar_url: string | null;
    created_at: string;
  } | null;
  credits: {
    balance: number;
  };
  today_checked_in: boolean;
  likes: CenterProjectRecord[];
  favorites: CenterProjectRecord[];
  comments: ProjectCommentRecord[];
  credit_logs: CreditLogRecord[];
  recent_checkins: CheckinRecord[];
}

export async function fetchProjectSocialStats(projectIds: string[]) {
  const { data, error } = await supabase.rpc("get_project_social_stats", {
    p_project_ids: projectIds,
  });

  if (error) throw error;

  return (data || []) as ProjectSocialStat[];
}

export async function toggleProjectLike(projectId: string) {
  const { data, error } = await supabase.rpc("toggle_project_like", {
    p_project_id: projectId,
  });

  if (error) throw error;
  return data as { success: boolean; liked: boolean; like_count: number; error?: string };
}

export async function toggleProjectFavorite(projectId: string) {
  const { data, error } = await supabase.rpc("toggle_project_favorite", {
    p_project_id: projectId,
  });

  if (error) throw error;
  return data as {
    success: boolean;
    favorited: boolean;
    favorite_count: number;
    error?: string;
  };
}

export async function fetchMyCenterData() {
  const { data, error } = await supabase.rpc("get_my_center_data");

  if (error) throw error;
  return data as CenterData & { success: boolean; error?: string };
}

export async function dailyCheckin() {
  const { data, error } = await supabase.rpc("daily_checkin");

  if (error) throw error;
  return data as {
    success: boolean;
    already_checked_in: boolean;
    points_awarded: number;
    new_balance: number;
    error?: string;
  };
}

export async function fetchProjectComments(projectId: string) {
  const { data, error } = await supabase.rpc("get_project_comments", {
    p_project_id: projectId,
  });

  if (error) throw error;
  return (data || []) as ProjectCommentRecord[];
}

export async function createProjectComment(projectId: string, content: string) {
  const { data, error } = await supabase.rpc("create_project_comment", {
    p_project_id: projectId,
    p_content: content,
  });

  if (error) throw error;
  return data as {
    success: boolean;
    error?: string;
    comment?: ProjectCommentRecord;
  };
}

export async function recordProjectClick(
  projectId: string,
  targetUrl: string,
  sourcePage: string,
) {
  const { data, error } = await supabase.rpc("record_project_click", {
    p_project_id: projectId,
    p_target_url: targetUrl,
    p_source_page: sourcePage,
  });

  if (error) throw error;
  return data as { success: boolean; error?: string };
}
