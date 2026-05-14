import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import { useExtraContent } from "@/hooks/useExtraContent";

export function Culture() {
  const { isNepali, t } = useSiteLanguage();
  const events = useExtraContent("culture");
  return (
    <section id="culture" className="relative overflow-hidden py-28 md:py-40">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, oklch(0.42 0.18 25 / 0.35), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow={t("culture_eyebrow")}
          title={
            isNepali ? (
              t("culture_title")
            ) : (
              <>
                Rituals that <span className="text-gradient-gold italic">never sleep</span>
              </>
            )
          }
          description={t("culture_description")}
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {events.map((e, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${right ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`${right ? "md:text-left md:pl-10" : "md:text-right md:pr-10"} relative`}>
                    <span className="absolute left-1/2 top-3 hidden size-3 -translate-x-1/2 rounded-full bg-gradient-gold ring-4 ring-background md:block" />
                    {e.meta && <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{e.meta}</div>}
                    <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{e.title}</h3>
                    <p className="mt-3 text-foreground/75">{e.description}</p>
                  </div>
                  <div>
                    {e.image_url ? (
                      <div className="overflow-hidden rounded-2xl border border-border/60 shadow-elegant">
                        <img
                          src={e.image_url}
                          alt={e.title ?? ""}
                          width={1280}
                          height={800}
                          loading="lazy"
                          className="aspect-[5/3] w-full object-cover transition-transform duration-[2s] hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="grid aspect-[5/3] place-items-center rounded-2xl glass">
                        <span className="font-display text-6xl text-gradient-gold opacity-60">☸</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
