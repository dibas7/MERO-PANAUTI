import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Loader2, LogOut, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "My Reviews — Explore Panauti" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MyReviewsPage,
});

interface MyReview {
  id: string;
  name: string;
  review: string;
  rating: number;
  place_name: string;
  status: "published" | "hidden";
  created_at: string;
}

function MyReviewsPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<{ user: { id: string; email?: string } } | null>(null);
  const [reviews, setReviews] = useState<MyReview[]>([]);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s?.user) void loadReviews(s.user.id);
      else {
        setReviews([]);
        setLoading(false);
      }
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session?.user) void loadReviews(data.session.user.id);
      else setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function loadReviews(userId: string) {
    setLoading(true);
    const { data, error } = await supabase
      .from("review_submissions")
      .select("id,name,review,rating,place_name,status,created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (!error) setReviews((data ?? []) as MyReview[]);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-6 animate-spin text-gold" />
      </div>
    );
  }

  if (!session) return <AuthForm />;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <div>
            <div className="font-display text-xl text-foreground">
              My <span className="text-gradient-gold">Reviews</span>
            </div>
            <p className="text-xs text-muted-foreground">{session.user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut className="mr-2 size-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        {reviews.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 p-12 text-center text-sm text-muted-foreground">
            You have not submitted any reviews yet.{" "}
            <Link to="/" className="text-gold hover:underline">
              Share your Panauti experience
            </Link>
            .
          </div>
        ) : (
          <ul className="space-y-4">
            {reviews.map((r) => (
              <li key={r.id} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="font-medium text-foreground">{r.place_name}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(r.created_at).toLocaleString()}
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      r.status === "published"
                        ? "border border-gold/40 text-gold"
                        : "border border-border/60 text-muted-foreground"
                    }`}
                  >
                    {r.status === "published" ? "Published" : "Hidden"}
                  </span>
                </div>
                <div className="mt-3 flex gap-0.5 text-gold">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm text-foreground/90">{r.review}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (mode === "signup") {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/reviews` },
        });
        if (signUpError) throw signUpError;
        setMode("signin");
        setError("Account created. Sign in to view your reviews.");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-8 shadow-xl">
        <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
          ← Back to site
        </Link>
        <h1 className="mt-4 font-display text-3xl text-foreground">
          My <span className="text-gradient-gold">Reviews</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Sign in to see reviews you have submitted.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button type="submit" disabled={busy} className="w-full">
            {busy && <Loader2 className="mr-2 size-4 animate-spin" />}
            {mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-foreground"
        >
          {mode === "signin" ? "Need an account? Sign up →" : "Have an account? Sign in →"}
        </button>
      </div>
    </div>
  );
}
