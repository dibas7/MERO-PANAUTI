import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";
import { useExtraContent } from "@/hooks/useExtraContent";

export function Places() {
  const items = useExtraContent("place").filter((e) => e.image_url);
  return (
    <section id="places" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Historical Places"
          title={<>Sanctuaries of <span className="text-gradient-gold italic">stone & spirit</span></>}
          description="Sites that hold the soul of Panauti — from temples touched by gods to riverbanks washed by centuries of devotion."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {items.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 shadow-elegant"
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
                <img
                  src={p.image_url as string}
                  alt={p.title ?? ""}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                {p.meta && (
                  <div className="absolute left-5 top-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                    {p.meta}
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/75">
                  {p.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Discover <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
