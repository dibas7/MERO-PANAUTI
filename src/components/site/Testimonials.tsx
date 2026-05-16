import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface PublicReview {
  id: string;
  name: string;
  location: string | null;
  review: string;
  rating: number;
}

export function Testimonials() {
  const { isNepali, t } = useSiteLanguage();
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!cancelled) setSignedIn(!!sessionData.session?.user);

      const { data, error } = await supabase
        .from("review_submissions")
        .select("id,name,location,review,rating")
        .eq("status", "published")
        .order("created_at", { ascending: false })
        .limit(6);

      if (cancelled) return;

      if (error) {
        setLoadError(true);
        setReviews([]);
        setLoading(false);
        return;
      }

      setLoadError(false);
      setReviews((data ?? []) as PublicReview[]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function retryLoadReviews() {
    setLoading(true);
    setLoadError(false);
    const { data, error } = await supabase
      .from("review_submissions")
      .select("id,name,location,review,rating")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(6);

    if (error) {
      setLoadError(true);
      setReviews([]);
      setLoading(false);
      return;
    }

    setLoadError(false);
    setReviews((data ?? []) as PublicReview[]);
    setLoading(false);
  }

  async function submitReview(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.from("review_submissions").insert({
        name: name.trim(),
        location: location.trim() || null,
        review: review.trim(),
        rating,
        place_name: "Panauti",
        status: "published",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      setName("");
      setLocation("");
      setReview("");
      setRating(5);
      toast.success(t("testimonials_toast_ok"), { duration: 3000 });
      void retryLoadReviews();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("testimonials_toast_err"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("testimonials_eyebrow")}
          title={
            isNepali ? (
              t("testimonials_title")
            ) : (
              <>
                Stories that <span className="text-gradient-gold italic">stay</span>
              </>
            )
          }
        />

        {loadError && !loading ? (
          <div
            role="alert"
            className="mt-8 flex flex-col gap-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground sm:flex-row sm:items-center sm:justify-between"
          >
            <span>{t("testimonials_error_load")}</span>
            <button
              type="button"
              onClick={() => void retryLoadReviews()}
              className="shrink-0 rounded-lg border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium transition-colors hover:border-gold/60 hover:text-gold"
            >
              {t("testimonials_retry")}
            </button>
          </div>
        ) : null}

        <div className="mt-16 rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{t("testimonials_submit_label")}</div>
              <h3 className="mt-3 font-display text-3xl text-foreground">{t("testimonials_form_title")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("testimonials_form_help")}</p>
            </div>
            <Link
              to="/reviews"
              className="rounded-full border border-border/60 px-4 py-2 text-xs text-foreground/80 transition-colors hover:border-gold/60 hover:text-gold"
            >
              {t("testimonials_my_reviews")}
            </Link>
          </div>

          <form onSubmit={submitReview} className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("testimonials_ph_name")}
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={t("testimonials_ph_location")}
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            >
              <option value={5}>{t("testimonials_star_5")}</option>
              <option value={4}>{t("testimonials_star_4")}</option>
              <option value={3}>{t("testimonials_star_3")}</option>
              <option value={2}>{t("testimonials_star_2")}</option>
              <option value={1}>{t("testimonials_star_1")}</option>
            </select>
            <div />
            <textarea
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              placeholder={t("testimonials_ph_review")}
              className="md:col-span-2 w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <button
              type="submit"
              disabled={submitting}
              className="md:col-span-2 rounded-xl bg-gradient-gold py-3 text-sm font-medium text-[oklch(0.18_0.03_35)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? t("testimonials_btn_sending") : t("testimonials_btn_send")}
            </button>
          </form>
        </div>

        {loading ? null : reviews.length === 0 ? null : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative rounded-3xl glass p-8 shadow-elegant"
              >
                <div className="absolute -top-4 left-8 font-display text-7xl leading-none text-gold/40">
                  &ldquo;
                </div>
                <div className="mb-4 flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={`${r.id}-${j}`} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground/90">{r.review}</blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <div className="font-display text-lg text-foreground">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {r.location || t("testimonials_traveler")}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
