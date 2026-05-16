-- Direct-publish reviews: status + user ownership + place name
create type public.review_status as enum ('published', 'hidden');

alter table public.review_submissions
  add column if not exists user_id uuid references auth.users (id) on delete set null,
  add column if not exists place_name text,
  add column if not exists status public.review_status;

update public.review_submissions
set status = case
  when coalesce(approved, false) then 'published'::public.review_status
  else 'hidden'::public.review_status
end
where status is null;

update public.review_submissions
set place_name = 'Panauti'
where place_name is null;

alter table public.review_submissions
  alter column place_name set default 'Panauti',
  alter column place_name set not null,
  alter column status set default 'published',
  alter column status set not null;

alter table public.review_submissions drop column if exists approved;

create index if not exists review_submissions_user_id_idx
  on public.review_submissions (user_id, created_at desc);

create index if not exists review_submissions_status_idx
  on public.review_submissions (status, created_at desc);

-- RLS
drop policy if exists "Anyone can read approved reviews" on public.review_submissions;
drop policy if exists "Anyone can read published reviews" on public.review_submissions;
drop policy if exists "Users can view own reviews" on public.review_submissions;

create policy "Anyone can read published reviews"
  on public.review_submissions for select
  using (status = 'published');

create policy "Users can view own reviews"
  on public.review_submissions for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Anyone can submit reviews" on public.review_submissions;

create policy "Anyone can submit published reviews"
  on public.review_submissions for insert
  to anon, authenticated
  with check (status = 'published');

-- Attach reviewer when signed in; force published for public inserts
create or replace function public.review_submissions_before_insert()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is not null then
    new.user_id := auth.uid();
  end if;
  if not public.has_role(auth.uid(), 'admin') then
    new.status := 'published';
  end if;
  if new.place_name is null or trim(new.place_name) = '' then
    new.place_name := 'Panauti';
  end if;
  return new;
end;
$$;

drop trigger if exists review_submissions_before_insert on public.review_submissions;
create trigger review_submissions_before_insert
  before insert on public.review_submissions
  for each row execute function public.review_submissions_before_insert();
