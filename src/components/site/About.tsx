import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import type { SiteStringKey } from "@/lib/site-strings";
import heritage from "@/assets/heritage-house.jpg";
import mandala from "@/assets/pattern-mandala.png";

const stats: { v: string; labelKey: SiteStringKey }[] = [
  { v: "1000+", labelKey: "about_stat_years" },
  { v: "50+", labelKey: "about_stat_temples" },
  { v: "12", labelKey: "about_stat_festivals" },
  { v: "3", labelKey: "about_stat_rivers" },
];

export function About() {
  const { isNepali, t } = useSiteLanguage();

  return (
    <section id="about" className="relative py-28 md:py-40">
      <img src={mandala} alt="" aria-hidden className="pointer-events-none absolute -left-40 top-20 size-[500px] opacity-[0.06] animate-spin-slow" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("about_eyebrow")}
          title={
            isNepali ? (
              t("about_title")
            ) : (
              <>
                An ancient town <span className="text-gradient-gold italic">still breathing</span>
              </>
            )
          }
          description={t("about_description")}
        />

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={heritage}
                alt={t("about_img_alt")}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass p-5 shadow-glow md:block">
              <div className="font-display text-3xl text-gradient-gold">{t("about_est")}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("about_est_caption")}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-foreground/85"
          >
            <p className="text-lg leading-relaxed">{t("about_p1")}</p>
            <p className="leading-relaxed text-muted-foreground">{t("about_p2")}</p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s) => (
                <div key={s.labelKey} className="rounded-2xl glass p-5">
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t(s.labelKey)}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
