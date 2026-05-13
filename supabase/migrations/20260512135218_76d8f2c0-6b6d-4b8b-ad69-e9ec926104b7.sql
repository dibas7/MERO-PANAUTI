
-- Roles
create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles where user_id = _user_id and role = _role
  )
$$;

create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Admins can manage roles"
  on public.user_roles for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

-- Auto-promote first signup to admin
create or replace function public.handle_first_user_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.user_roles where role = 'admin') then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end;
$$;

create trigger on_auth_user_created_promote_first
  after insert on auth.users
  for each row execute function public.handle_first_user_admin();

-- Content items
create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('place','culture','food','gallery')),
  title text,
  description text,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index content_items_category_idx on public.content_items(category, sort_order);

alter table public.content_items enable row level security;

create policy "Anyone can view content"
  on public.content_items for select
  using (true);

create policy "Admins can insert content"
  on public.content_items for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update content"
  on public.content_items for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete content"
  on public.content_items for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

create trigger content_items_touch
  before update on public.content_items
  for each row execute function public.touch_updated_at();

-- Storage bucket
insert into storage.buckets (id, name, public)
values ('site-images', 'site-images', true);

create policy "Public can view site images"
  on storage.objects for select
  using (bucket_id = 'site-images');

create policy "Admins can upload site images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can update site images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete site images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'site-images' and public.has_role(auth.uid(), 'admin'));
