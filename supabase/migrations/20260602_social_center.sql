-- Social center schema for likes, favorites, daily check-ins, and credit logs.
-- Run this in Supabase SQL Editor if these objects do not already exist.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nickname text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_credits (
  user_id uuid primary key references auth.users (id) on delete cascade,
  balance integer not null default 0 check (balance >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_likes (
  user_id uuid not null references auth.users (id) on delete cascade,
  project_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

create table if not exists public.project_favorites (
  user_id uuid not null references auth.users (id) on delete cascade,
  project_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

create table if not exists public.daily_checkins (
  user_id uuid not null references auth.users (id) on delete cascade,
  checkin_date date not null,
  points_awarded integer not null default 10 check (points_awarded >= 0),
  created_at timestamptz not null default now(),
  primary key (user_id, checkin_date)
);

create table if not exists public.credit_logs (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  amount integer not null,
  type text not null,
  description text,
  created_at timestamptz not null default now()
);

create index if not exists idx_project_likes_project_id
  on public.project_likes (project_id);

create index if not exists idx_project_favorites_project_id
  on public.project_favorites (project_id);

create index if not exists idx_daily_checkins_user_id_created_at
  on public.daily_checkins (user_id, created_at desc);

create index if not exists idx_credit_logs_user_id_created_at
  on public.credit_logs (user_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1
    from pg_trigger
    where tgname = 'trg_profiles_set_updated_at'
  ) then
    create trigger trg_profiles_set_updated_at
      before update on public.profiles
      for each row
      execute function public.set_updated_at();
  end if;

  if not exists (
    select 1
    from pg_trigger
    where tgname = 'trg_user_credits_set_updated_at'
  ) then
    create trigger trg_user_credits_set_updated_at
      before update on public.user_credits
      for each row
      execute function public.set_updated_at();
  end if;
end
$$;

create or replace function public.ensure_user_center_rows(p_user_id uuid default auth.uid())
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user auth.users%rowtype;
begin
  if p_user_id is null then
    return;
  end if;

  select *
  into v_user
  from auth.users
  where id = p_user_id;

  if not found then
    return;
  end if;

  insert into public.profiles (id, nickname, avatar_url)
  values (
    v_user.id,
    coalesce(
      v_user.raw_user_meta_data ->> 'nickname',
      v_user.raw_user_meta_data ->> 'player_name'
    ),
    v_user.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do update
    set nickname = coalesce(excluded.nickname, public.profiles.nickname),
        avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
        updated_at = now();

  insert into public.user_credits (user_id, balance)
  values (v_user.id, 0)
  on conflict (user_id) do nothing;
end;
$$;

create or replace function public.handle_new_user_center()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  perform public.ensure_user_center_rows(new.id);
  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1
    from pg_trigger
    where tgname = 'on_auth_user_created_center'
  ) then
    create trigger on_auth_user_created_center
      after insert on auth.users
      for each row
      execute function public.handle_new_user_center();
  end if;
end
$$;

do $$
declare
  v_user record;
begin
  for v_user in select id from auth.users loop
    perform public.ensure_user_center_rows(v_user.id);
  end loop;
end
$$;

alter table public.profiles enable row level security;
alter table public.user_credits enable row level security;
alter table public.project_likes enable row level security;
alter table public.project_favorites enable row level security;
alter table public.daily_checkins enable row level security;
alter table public.credit_logs enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'profiles_select_own'
  ) then
    create policy profiles_select_own
      on public.profiles
      for select
      to authenticated
      using (id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'profiles_update_own'
  ) then
    create policy profiles_update_own
      on public.profiles
      for update
      to authenticated
      using (id = auth.uid())
      with check (id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'user_credits' and policyname = 'user_credits_select_own'
  ) then
    create policy user_credits_select_own
      on public.user_credits
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'project_likes' and policyname = 'project_likes_select_own'
  ) then
    create policy project_likes_select_own
      on public.project_likes
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'project_favorites' and policyname = 'project_favorites_select_own'
  ) then
    create policy project_favorites_select_own
      on public.project_favorites
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'daily_checkins' and policyname = 'daily_checkins_select_own'
  ) then
    create policy daily_checkins_select_own
      on public.daily_checkins
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'credit_logs' and policyname = 'credit_logs_select_own'
  ) then
    create policy credit_logs_select_own
      on public.credit_logs
      for select
      to authenticated
      using (user_id = auth.uid());
  end if;
end
$$;

create or replace function public.get_project_social_stats(p_project_ids text[])
returns table (
  project_id text,
  like_count integer,
  favorite_count integer,
  liked_by_me boolean,
  favorited_by_me boolean
)
language sql
security definer
set search_path = public, auth
as $$
  with ids as (
    select unnest(coalesce(p_project_ids, array[]::text[])) as project_id
  ),
  like_counts as (
    select project_id, count(*)::integer as like_count
    from public.project_likes
    where project_id = any(coalesce(p_project_ids, array[]::text[]))
    group by project_id
  ),
  favorite_counts as (
    select project_id, count(*)::integer as favorite_count
    from public.project_favorites
    where project_id = any(coalesce(p_project_ids, array[]::text[]))
    group by project_id
  )
  select
    ids.project_id,
    coalesce(like_counts.like_count, 0) as like_count,
    coalesce(favorite_counts.favorite_count, 0) as favorite_count,
    exists (
      select 1
      from public.project_likes pl
      where pl.project_id = ids.project_id
        and pl.user_id = auth.uid()
    ) as liked_by_me,
    exists (
      select 1
      from public.project_favorites pf
      where pf.project_id = ids.project_id
        and pf.user_id = auth.uid()
    ) as favorited_by_me
  from ids
  left join like_counts on like_counts.project_id = ids.project_id
  left join favorite_counts on favorite_counts.project_id = ids.project_id;
$$;

create or replace function public.toggle_project_like(p_project_id text)
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user_id uuid := auth.uid();
  v_liked boolean;
  v_like_count integer;
begin
  if v_user_id is null then
    return jsonb_build_object(
      'success', false,
      'liked', false,
      'like_count', 0,
      'error', 'not_authenticated'
    );
  end if;

  perform public.ensure_user_center_rows(v_user_id);

  if exists (
    select 1
    from public.project_likes
    where user_id = v_user_id and project_id = p_project_id
  ) then
    delete from public.project_likes
    where user_id = v_user_id and project_id = p_project_id;
    v_liked := false;
  else
    insert into public.project_likes (user_id, project_id)
    values (v_user_id, p_project_id)
    on conflict do nothing;
    v_liked := true;
  end if;

  select count(*)::integer
  into v_like_count
  from public.project_likes
  where project_id = p_project_id;

  return jsonb_build_object(
    'success', true,
    'liked', v_liked,
    'like_count', coalesce(v_like_count, 0)
  );
end;
$$;

create or replace function public.toggle_project_favorite(p_project_id text)
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user_id uuid := auth.uid();
  v_favorited boolean;
  v_favorite_count integer;
begin
  if v_user_id is null then
    return jsonb_build_object(
      'success', false,
      'favorited', false,
      'favorite_count', 0,
      'error', 'not_authenticated'
    );
  end if;

  perform public.ensure_user_center_rows(v_user_id);

  if exists (
    select 1
    from public.project_favorites
    where user_id = v_user_id and project_id = p_project_id
  ) then
    delete from public.project_favorites
    where user_id = v_user_id and project_id = p_project_id;
    v_favorited := false;
  else
    insert into public.project_favorites (user_id, project_id)
    values (v_user_id, p_project_id)
    on conflict do nothing;
    v_favorited := true;
  end if;

  select count(*)::integer
  into v_favorite_count
  from public.project_favorites
  where project_id = p_project_id;

  return jsonb_build_object(
    'success', true,
    'favorited', v_favorited,
    'favorite_count', coalesce(v_favorite_count, 0)
  );
end;
$$;

create or replace function public.get_my_center_data()
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user_id uuid := auth.uid();
  v_result jsonb;
begin
  if v_user_id is null then
    return jsonb_build_object(
      'success', false,
      'error', 'not_authenticated'
    );
  end if;

  perform public.ensure_user_center_rows(v_user_id);

  select jsonb_build_object(
    'success', true,
    'profile', (
      select to_jsonb(p)
      from (
        select id, nickname, avatar_url, created_at
        from public.profiles
        where id = v_user_id
      ) p
    ),
    'credits', jsonb_build_object(
      'balance', coalesce((
        select uc.balance
        from public.user_credits uc
        where uc.user_id = v_user_id
      ), 0)
    ),
    'today_checked_in', exists(
      select 1
      from public.daily_checkins dc
      where dc.user_id = v_user_id
        and dc.checkin_date = current_date
    ),
    'likes', coalesce((
      select jsonb_agg(row_to_json(x))
      from (
        select project_id, created_at
        from public.project_likes
        where user_id = v_user_id
        order by created_at desc
      ) x
    ), '[]'::jsonb),
    'favorites', coalesce((
      select jsonb_agg(row_to_json(x))
      from (
        select project_id, created_at
        from public.project_favorites
        where user_id = v_user_id
        order by created_at desc
      ) x
    ), '[]'::jsonb),
    'credit_logs', coalesce((
      select jsonb_agg(row_to_json(x))
      from (
        select id, amount, type, description, created_at
        from public.credit_logs
        where user_id = v_user_id
        order by created_at desc
        limit 20
      ) x
    ), '[]'::jsonb),
    'recent_checkins', coalesce((
      select jsonb_agg(row_to_json(x))
      from (
        select checkin_date, points_awarded, created_at
        from public.daily_checkins
        where user_id = v_user_id
        order by created_at desc
        limit 7
      ) x
    ), '[]'::jsonb)
  )
  into v_result;

  return v_result;
end;
$$;

create or replace function public.daily_checkin()
returns jsonb
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  v_user_id uuid := auth.uid();
  v_today date := current_date;
  v_points integer := 10;
  v_new_balance integer;
begin
  if v_user_id is null then
    return jsonb_build_object(
      'success', false,
      'already_checked_in', false,
      'points_awarded', 0,
      'new_balance', 0,
      'error', 'not_authenticated'
    );
  end if;

  perform public.ensure_user_center_rows(v_user_id);

  if exists (
    select 1
    from public.daily_checkins
    where user_id = v_user_id
      and checkin_date = v_today
  ) then
    select balance
    into v_new_balance
    from public.user_credits
    where user_id = v_user_id;

    return jsonb_build_object(
      'success', true,
      'already_checked_in', true,
      'points_awarded', 0,
      'new_balance', coalesce(v_new_balance, 0)
    );
  end if;

  insert into public.daily_checkins (user_id, checkin_date, points_awarded)
  values (v_user_id, v_today, v_points);

  update public.user_credits
  set balance = balance + v_points
  where user_id = v_user_id
  returning balance into v_new_balance;

  insert into public.credit_logs (user_id, amount, type, description)
  values (v_user_id, v_points, 'earn', 'daily_checkin');

  return jsonb_build_object(
    'success', true,
    'already_checked_in', false,
    'points_awarded', v_points,
    'new_balance', coalesce(v_new_balance, 0)
  );
end;
$$;

grant execute on function public.get_project_social_stats(text[]) to anon, authenticated;
grant execute on function public.toggle_project_like(text) to authenticated;
grant execute on function public.toggle_project_favorite(text) to authenticated;
grant execute on function public.get_my_center_data() to authenticated;
grant execute on function public.daily_checkin() to authenticated;
