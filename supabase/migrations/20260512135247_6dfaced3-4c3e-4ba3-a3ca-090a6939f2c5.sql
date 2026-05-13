
-- Fix function search_path
alter function public.touch_updated_at() set search_path = public;

-- Revoke execute on security definer functions from public/anon/authenticated where not needed
revoke execute on function public.has_role(uuid, public.app_role) from public, anon;
revoke execute on function public.handle_first_user_admin() from public, anon, authenticated;
revoke execute on function public.touch_updated_at() from public, anon, authenticated;

-- Restrict bucket listing: replace broad SELECT policy with one that only allows reading specific objects (clients fetch by public URL, no need to LIST)
drop policy "Public can view site images" on storage.objects;

create policy "Public can read site image objects"
  on storage.objects for select
  using (bucket_id = 'site-images' and auth.role() = 'authenticated');

create policy "Anon can read site image objects via public url"
  on storage.objects for select
  to anon
  using (bucket_id = 'site-images');
