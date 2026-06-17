-- Spusť tento SQL v Supabase: Dashboard → SQL Editor → New query → Run

create table if not exists public.article_feedback (
  id uuid primary key default gen_random_uuid(),
  slug text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text,
  name text,
  created_at timestamptz not null default now()
);

create index if not exists article_feedback_slug_idx on public.article_feedback (slug);

alter table public.article_feedback enable row level security;

create policy "Public can insert feedback"
  on public.article_feedback for insert
  to anon
  with check (true);

create policy "Public can read feedback"
  on public.article_feedback for select
  to anon
  using (true);
