import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import { useExtraContent } from "@/hooks/useExtraContent";

export function Food() {
  const { isNepali, t } = useSiteLanguage();
  const items = useExtraContent("food").filter((e) => e.image_url);
  return (
    <section id="food" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("food_eyebrow")}
          title={
            isNepali ? (
              t("food_title")
            ) : (
              <>
                Recipes from <span className="text-gradient-gold italic">a thousand kitchens</span>
              </>
            )
          }
          description={t("food_description")}
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-elegant transition-all duration-500 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={f.image_url as string}
                  alt={f.title ?? ""}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
