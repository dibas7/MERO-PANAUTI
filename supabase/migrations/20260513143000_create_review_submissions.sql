create table if not exists public.review_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  location text,
  review text not null,
  rating int not null check (rating between 1 and 5),
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists review_submissions_created_idx
  on public.review_submissions(created_at desc);

alter table public.review_submissions enable row level security;

create policy "Anyone can submit reviews"
  on public.review_submissions for insert
  with check (true);

create policy "Admins can view all reviews"
  on public.review_submissions for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update reviews"
  on public.review_submissions for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete reviews"
  on public.review_submissions for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

drop trigger if exists review_submissions_touch on public.review_submissions;
create trigger review_submissions_touch
  before update on public.review_submissions
  for each row execute function public.touch_updated_at();
