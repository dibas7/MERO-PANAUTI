import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useSiteLanguage } from "@/contexts/site-language";
import type { SiteStringKey } from "@/lib/site-strings";

const links: { href: string; labelKey: SiteStringKey }[] = [
  { href: "#about", labelKey: "nav_link_about" },
  { href: "#places", labelKey: "nav_link_places" },
  { href: "#culture", labelKey: "nav_link_culture" },
  { href: "#food", labelKey: "nav_link_food" },
  { href: "#gallery", labelKey: "nav_link_gallery" },
  { href: "#map", labelKey: "nav_link_map" },
  { href: "#visit", labelKey: "nav_link_visit" },
];

export function Navbar() {
  const { locale, toggleLocale, t } = useSiteLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const langShort = locale === "en" ? "EN" : "ने";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-gold text-[oklch(0.18_0.03_35)] font-display text-lg font-bold shadow-glow">
            ☸
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-foreground">
              Explore <span className="text-gradient-gold">Panauti</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {t("nav_brand_subtitle")}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {t(l.labelKey)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggleLocale()}
            aria-label={t("nav_lang_toggle")}
            className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-gold/60 hover:text-foreground"
          >
            <Globe className="size-3.5 shrink-0" /> {langShort}
          </button>
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:border-gold/60 hover:text-foreground"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full border border-border/60 text-foreground/80 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-6 mt-3 grid gap-1 rounded-2xl glass p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-muted/60"
              >
                {t(l.labelKey)}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleLocale();
                setOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-foreground/85 hover:bg-muted/60"
            >
              <Globe className="size-4 shrink-0 text-gold" />
              {t("nav_lang_toggle")} ({locale === "en" ? "नेपाली" : "English"})
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
