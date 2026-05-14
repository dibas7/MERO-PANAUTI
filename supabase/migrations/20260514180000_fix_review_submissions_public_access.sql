-- Public site: allow reading approved reviews (homepage testimonials).
drop policy if exists "Anyone can read approved reviews" on public.review_submissions;

create policy "Anyone can read approved reviews"
  on public.review_submissions for select
  using (approved = true);

-- Be explicit about browser roles for anonymous submissions.
drop policy if exists "Anyone can submit reviews" on public.review_submissions;

create policy "Anyone can submit reviews"
  on public.review_submissions for insert
  to anon, authenticated
  with check (true);
