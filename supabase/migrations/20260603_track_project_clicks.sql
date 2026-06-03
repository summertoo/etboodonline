CREATE TABLE IF NOT EXISTS public.project_click_events (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  project_id TEXT NOT NULL CHECK (char_length(trim(project_id)) > 0),
  target_url TEXT,
  source_page TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_project_click_events_project_created_at
  ON public.project_click_events(project_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_project_click_events_source_created_at
  ON public.project_click_events(source_page, created_at DESC);

ALTER TABLE public.project_click_events ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.project_click_events FROM anon, authenticated;

CREATE OR REPLACE VIEW public.project_click_totals AS
SELECT
  project_id,
  COUNT(*)::BIGINT AS total_clicks,
  MAX(created_at) AS last_clicked_at
FROM public.project_click_events
GROUP BY project_id;

REVOKE ALL ON public.project_click_totals FROM anon, authenticated;

CREATE OR REPLACE FUNCTION public.record_project_click(
  p_project_id TEXT,
  p_target_url TEXT DEFAULT NULL,
  p_source_page TEXT DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  v_project_id TEXT := trim(p_project_id);
  v_target_url TEXT := NULLIF(trim(COALESCE(p_target_url, '')), '');
  v_source_page TEXT := NULLIF(trim(COALESCE(p_source_page, '')), '');
BEGIN
  IF v_project_id IS NULL OR char_length(v_project_id) = 0 THEN
    RETURN json_build_object('success', false, 'error', 'project_id is required');
  END IF;

  INSERT INTO public.project_click_events (
    project_id,
    target_url,
    source_page,
    user_id
  )
  VALUES (
    v_project_id,
    v_target_url,
    v_source_page,
    auth.uid()
  );

  RETURN json_build_object('success', true);
END;
$$;

GRANT EXECUTE ON FUNCTION public.record_project_click(TEXT, TEXT, TEXT) TO anon, authenticated;
