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
  v_project_id TEXT := trim(p_project_id);
  v_content TEXT := trim(p_content);
  v_existing_count INTEGER := 0;
  v_max_comments CONSTANT INTEGER := 5;
BEGIN
  IF v_user_id IS NULL THEN
    RETURN json_build_object('success', false, 'error', 'Unauthorized');
  END IF;

  IF p_project_id IS NULL OR length(v_project_id) = 0 THEN
    RETURN json_build_object('success', false, 'error', 'project_id is required');
  END IF;

  IF p_content IS NULL OR length(v_content) = 0 THEN
    RETURN json_build_object('success', false, 'error', 'content is required');
  END IF;

  SELECT COUNT(*)
  INTO v_existing_count
  FROM public.project_comments
  WHERE user_id = v_user_id
    AND project_id = v_project_id;

  IF v_existing_count >= v_max_comments THEN
    RETURN json_build_object(
      'success', false,
      'error', 'comment_limit_reached'
    );
  END IF;

  INSERT INTO public.project_comments (user_id, project_id, content)
  VALUES (v_user_id, v_project_id, v_content)
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
