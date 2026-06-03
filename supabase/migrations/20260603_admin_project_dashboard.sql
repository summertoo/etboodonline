CREATE OR REPLACE FUNCTION public.get_admin_project_dashboard()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  v_is_admin BOOLEAN := false;
  v_result JSON;
BEGIN
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid()
      AND (
        lower(COALESCE(role, '')) = 'admin'
        OR lower(COALESCE(email, '')) IN (
          'etbood@gmail.com'
        )
      )
  )
  INTO v_is_admin;

  IF NOT v_is_admin THEN
    RETURN json_build_object('success', false, 'error', 'forbidden');
  END IF;

  SELECT COALESCE(
    json_agg(
      json_build_object(
        'project_id', project_id,
        'click_count', click_count,
        'like_count', like_count,
        'favorite_count', favorite_count,
        'comment_count', comment_count,
        'last_clicked_at', last_clicked_at,
        'comments', comments
      )
      ORDER BY click_count DESC, like_count DESC, favorite_count DESC, project_id ASC
    ),
    '[]'::json
  )
  INTO v_result
  FROM (
    SELECT
      base.project_id,
      COALESCE(pc.total_clicks, 0) AS click_count,
      COALESCE(lk.like_count, 0) AS like_count,
      COALESCE(fv.favorite_count, 0) AS favorite_count,
      COALESCE(cm.comment_count, 0) AS comment_count,
      pc.last_clicked_at,
      COALESCE(cm.comments, '[]'::json) AS comments
    FROM (
      SELECT project_id FROM public.project_click_events
      UNION
      SELECT project_id FROM public.user_project_likes
      UNION
      SELECT project_id FROM public.user_project_favorites
      UNION
      SELECT project_id FROM public.project_comments
    ) base
    LEFT JOIN (
      SELECT
        project_id,
        COUNT(*)::BIGINT AS total_clicks,
        MAX(created_at) AS last_clicked_at
      FROM public.project_click_events
      GROUP BY project_id
    ) pc ON pc.project_id = base.project_id
    LEFT JOIN (
      SELECT
        project_id,
        COUNT(*)::BIGINT AS like_count
      FROM public.user_project_likes
      GROUP BY project_id
    ) lk ON lk.project_id = base.project_id
    LEFT JOIN (
      SELECT
        project_id,
        COUNT(*)::BIGINT AS favorite_count
      FROM public.user_project_favorites
      GROUP BY project_id
    ) fv ON fv.project_id = base.project_id
    LEFT JOIN (
      SELECT
        c.project_id,
        COUNT(*)::BIGINT AS comment_count,
        json_agg(
          json_build_object(
            'id', c.id,
            'content', c.content,
            'created_at', c.created_at,
            'user_id', c.user_id,
            'nickname', p.nickname
          )
          ORDER BY c.created_at DESC
        ) AS comments
      FROM public.project_comments c
      LEFT JOIN public.profiles p ON p.id = c.user_id
      GROUP BY c.project_id
    ) cm ON cm.project_id = base.project_id
  ) ranked;

  RETURN json_build_object(
    'success', true,
    'projects', v_result
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_admin_project_dashboard() TO authenticated;
