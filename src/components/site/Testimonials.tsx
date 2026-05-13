import { motion } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { SectionHeader } from "./Section";
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
  const [reviews, setReviews] = useState<PublicReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    void loadApprovedReviews();
  }, []);

  async function loadApprovedReviews() {
    const { data, error } = await supabase
      .from("review_submissions")
      .select("id,name,location,review,rating")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (error) {
      toast.error("Couldn't load reviews");
      setLoading(false);
      return;
    }

    setReviews(data ?? []);
    setLoading(false);
  }

  async function submitReview(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("review_submissions").insert({
      name: name.trim(),
      location: location.trim() || null,
      review: review.trim(),
      rating,
    });

    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }

    setName("");
    setLocation("");
    setReview("");
    setRating(5);
    toast.success("Review submitted. It will appear after admin approval.");
  }

  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Voices of Travelers"
          title={<>Stories that <span className="text-gradient-gold italic">stay</span></>}
        />

        <div className="mt-16 rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Submit a review</div>
          <h3 className="mt-3 font-display text-3xl text-foreground">Share your Panauti experience</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reviews are saved in the admin dashboard and only published after approval.
          </p>

          <form onSubmit={submitReview} className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Country (optional)"
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            >
              <option value={5}>5 stars</option>
              <option value={4}>4 stars</option>
              <option value={3}>3 stars</option>
              <option value={2}>2 stars</option>
              <option value={1}>1 star</option>
            </select>
            <div />
            <textarea
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              placeholder="Write your review"
              className="md:col-span-2 w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <button
              type="submit"
              disabled={submitting}
              className="md:col-span-2 rounded-xl bg-gradient-gold py-3 text-sm font-medium text-[oklch(0.18_0.03_35)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Send for approval"}
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
                  "
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
                    {r.location || "Traveler"}
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
