import { motion } from "framer-motion";
import { Calendar, Hotel, Bus } from "lucide-react";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import type { SiteStringKey } from "@/lib/site-strings";

const cards: { icon: typeof Calendar; titleKey: SiteStringKey; bodyKey: SiteStringKey }[] = [
  { icon: Calendar, titleKey: "visit_card1_title", bodyKey: "visit_card1_body" },
  { icon: Hotel, titleKey: "visit_card2_title", bodyKey: "visit_card2_body" },
  { icon: Bus, titleKey: "visit_card3_title", bodyKey: "visit_card3_body" },
];

export function Visit() {
  const { isNepali, t } = useSiteLanguage();

  return (
    <section id="visit" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("visit_eyebrow")}
          title={
            isNepali ? (
              t("visit_title")
            ) : (
              <>
                Everything you need to <span className="text-gradient-gold italic">arrive</span>
              </>
            )
          }
          description={t("visit_description")}
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group rounded-3xl border border-border/60 bg-card/40 p-8 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-gradient-gold text-[oklch(0.18_0.03_35)] shadow-glow">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{t(c.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(c.bodyKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
