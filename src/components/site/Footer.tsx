import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useSiteLanguage } from "@/contexts/site-language";

export function Footer() {
  const { t } = useSiteLanguage();

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
                <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{t("footer_brand_subtitle")}</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{t("footer_body")}</p>
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
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">{t("footer_discover")}</h4>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li>
                <a href="#about" className="hover:text-gold">
                  {t("footer_link_about")}
                </a>
              </li>
              <li>
                <a href="#places" className="hover:text-gold">
                  {t("footer_link_places")}
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-gold">
                  {t("footer_link_festivals")}
                </a>
              </li>
              <li>
                <a href="#food" className="hover:text-gold">
                  {t("footer_link_food")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold">
                  {t("footer_link_gallery")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">{t("footer_contact")}</h4>
            <ul className="mt-5 space-y-2 text-sm text-foreground/75">
              <li>Panauti, Kavre, Nepal</li>
              <li>hello@explorepanauti.np</li>
              <li>+977 98-PANAUTI</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} {t("footer_rights")}
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              {t("footer_privacy")}
            </a>
            <a href="#" className="hover:text-gold">
              {t("footer_terms")}
            </a>
            <a href="#" className="hover:text-gold">
              {t("footer_credits")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
