CREATE TABLE IF NOT EXISTS public.project_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  project_id TEXT NOT NULL,
  content TEXT NOT NULL CHECK (char_length(trim(content)) BETWEEN 1 AND 300),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_project_comments_project_created_at
  ON public.project_comments(project_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_project_comments_user_created_at
  ON public.project_comments(user_id, created_at DESC);

ALTER TABLE public.project_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view project comments" ON public.project_comments;
CREATE POLICY "Users can view project comments"
  ON public.project_comments FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Users can insert own project comments" ON public.project_comments;
CREATE POLICY "Users can insert own project comments"
  ON public.project_comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own project comments" ON public.project_comments;
CREATE POLICY "Users can delete own project comments"
  ON public.project_comments FOR DELETE
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.get_project_comments(p_project_id TEXT)
RETURNS TABLE (
  id BIGINT,
  project_id TEXT,
  content TEXT,
  created_at TIMESTAMPTZ,
  user_id UUID,
  nickname TEXT
)
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT
    pc.id,
    pc.project_id,
    pc.content,
    pc.created_at,
    pc.user_id,
    p.nickname
  FROM public.project_comments pc
  LEFT JOIN public.profiles p ON p.id = pc.user_id
  WHERE pc.project_id = trim(p_project_id)
  ORDER BY pc.created_at DESC
  LIMIT 100;
$$;

CREATE OR REPLACE FUNCTION public.create_project_comment(
  p_project_id TEXT,
  p_content TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_comment_id BIGINT;
  v_result JSON;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN json_build_object('success', false, 'error', 'Unauthorized');
  END IF;

  IF p_project_id IS NULL OR length(trim(p_project_id)) = 0 THEN
    RETURN json_build_object('success', false, 'error', 'project_id is required');
  END IF;

  IF p_content IS NULL OR length(trim(p_content)) = 0 THEN
    RETURN json_build_object('success', false, 'error', 'content is required');
  END IF;

  INSERT INTO public.project_comments (user_id, project_id, content)
  VALUES (v_user_id, trim(p_project_id), trim(p_content))
  RETURNING id INTO v_comment_id;

  SELECT json_build_object(
    'id', pc.id,
    'project_id', pc.project_id,
    'content', pc.content,
    'created_at', pc.created_at,
    'user_id', pc.user_id,
    'nickname', p.nickname
  )
  INTO v_result
  FROM public.project_comments pc
  LEFT JOIN public.profiles p ON p.id = pc.user_id
  WHERE pc.id = v_comment_id;

  RETURN json_build_object(
    'success', true,
    'comment', v_result
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.get_my_center_data()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID := auth.uid();
  v_profile JSON;
  v_balance INTEGER := 0;
  v_checked_in BOOLEAN := false;
  v_likes JSON;
  v_favorites JSON;
  v_comments JSON;
  v_credit_logs JSON;
  v_recent_checkins JSON;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN json_build_object('success', false, 'error', 'Unauthorized');
  END IF;

  SELECT json_build_object(
    'id', p.id,
    'nickname', p.nickname,
    'avatar_url', p.avatar_url,
    'created_at', p.created_at
  )
  INTO v_profile
  FROM public.profiles p
  WHERE p.id = v_user_id;

  SELECT balance INTO v_balance
  FROM public.credits
  WHERE user_id = v_user_id;

  SELECT EXISTS (
    SELECT 1
    FROM public.daily_checkins
    WHERE user_id = v_user_id AND checkin_date = CURRENT_DATE
  )
  INTO v_checked_in;

  SELECT COALESCE(json_agg(
    json_build_object(
      'project_id', project_id,
      'created_at', created_at
    )
    ORDER BY created_at DESC
  ), '[]'::json)
  INTO v_likes
  FROM public.user_project_likes
  WHERE user_id = v_user_id;

  SELECT COALESCE(json_agg(
    json_build_object(
      'project_id', project_id,
      'created_at', created_at
    )
    ORDER BY created_at DESC
  ), '[]'::json)
  INTO v_favorites
  FROM public.user_project_favorites
  WHERE user_id = v_user_id;

  SELECT COALESCE(json_agg(
    json_build_object(
      'id', pc.id,
      'project_id', pc.project_id,
      'content', pc.content,
      'created_at', pc.created_at,
      'user_id', pc.user_id,
      'nickname', p.nickname
    )
    ORDER BY pc.created_at DESC
  ), '[]'::json)
  INTO v_comments
  FROM public.project_comments pc
  LEFT JOIN public.profiles p ON p.id = pc.user_id
  WHERE pc.user_id = v_user_id;

  SELECT COALESCE(json_agg(
    json_build_object(
      'id', id,
      'amount', amount,
      'type', type,
      'description', description,
      'created_at', created_at
    )
    ORDER BY created_at DESC
  ), '[]'::json)
  INTO v_credit_logs
  FROM (
    SELECT *
    FROM public.credit_logs
    WHERE user_id = v_user_id
    ORDER BY created_at DESC
    LIMIT 20
  ) logs;

  SELECT COALESCE(json_agg(
    json_build_object(
      'checkin_date', checkin_date,
      'points_awarded', points_awarded,
      'created_at', created_at
    )
    ORDER BY checkin_date DESC
  ), '[]'::json)
  INTO v_recent_checkins
  FROM (
    SELECT *
    FROM public.daily_checkins
    WHERE user_id = v_user_id
    ORDER BY checkin_date DESC
    LIMIT 7
  ) checkins;

  RETURN json_build_object(
    'success', true,
    'profile', v_profile,
    'credits', json_build_object('balance', COALESCE(v_balance, 0)),
    'today_checked_in', v_checked_in,
    'likes', v_likes,
    'favorites', v_favorites,
    'comments', v_comments,
    'credit_logs', v_credit_logs,
    'recent_checkins', v_recent_checkins
  );
END;
$$;
