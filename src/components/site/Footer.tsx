import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-[oklch(0.12_0.02_30)] pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 divider-gold" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-gold text-[oklch(0.18_0.03_35)] font-display text-xl font-bold">
                ☸
              </span>
              <div>
                <div className="font-display text-xl text-foreground">
                  Explore <span className="text-gradient-gold">Panauti</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Where History Still Lives
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              An independent love letter to one of Nepal's oldest Newari
              towns. Built to celebrate, preserve, and share the heritage of
              Panauti with the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-border/70 text-foreground/70 transition-all hover:border-gold/60 hover:text-gold"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Discover</h4>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li><a href="#about" className="hover:text-gold">About Panauti</a></li>
              <li><a href="#places" className="hover:text-gold">Places</a></li>
              <li><a href="#culture" className="hover:text-gold">Festivals</a></li>
              <li><a href="#food" className="hover:text-gold">Food</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">Contact</h4>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li>Panauti, Kavre, Nepal</li>
              <li>hello@explorepanauti.np</li>
              <li>+977 98-PANAUTI</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Explore Panauti — All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
