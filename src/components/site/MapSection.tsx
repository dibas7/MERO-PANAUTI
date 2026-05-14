import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeader } from "./Section";
import { useSiteLanguage } from "@/contexts/site-language";
import type { SiteStringKey } from "@/lib/site-strings";

const markerLayout: { top: string; left: string; labelKey: SiteStringKey }[] = [
  { top: "32%", left: "44%", labelKey: "map_marker_indreshwar" },
  { top: "48%", left: "58%", labelKey: "map_marker_triveni" },
  { top: "60%", left: "36%", labelKey: "map_marker_oldtown" },
  { top: "26%", left: "66%", labelKey: "map_marker_brahmayani" },
];

export function MapSection() {
  const { isNepali, t } = useSiteLanguage();

  return (
    <section id="map" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("map_eyebrow")}
          title={
            isNepali ? (
              t("map_title")
            ) : (
              <>
                32 km from <span className="text-gradient-gold italic">Kathmandu</span>
              </>
            )
          }
          description={t("map_description")}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-border/60 shadow-elegant"
        >
          <div className="relative aspect-[16/9] w-full">
            <iframe
              title={t("map_iframe_title")}
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.50%2C27.55%2C85.58%2C27.62&layer=mapnik&marker=27.5872%2C85.5236"
              className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-110 saturate-[0.75]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-background/30 mix-blend-multiply" />

            {markerLayout.map((m) => (
              <div
                key={m.labelKey}
                className="pointer-events-none absolute"
                style={{ top: m.top, left: m.left }}
              >
                <div className="relative flex flex-col items-center">
                  <span className="absolute -inset-2 animate-ping rounded-full bg-gold/40" />
                  <MapPin className="size-6 fill-gold text-[oklch(0.18_0.03_35)] drop-shadow-[0_2px_8px_oklch(0_0_0/0.6)]" />
                  <span className="mt-1 max-w-[9rem] whitespace-normal rounded-full glass px-2 py-0.5 text-center text-[10px] leading-tight tracking-wide text-foreground">
                    {t(m.labelKey)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 bg-card/60 px-6 py-4 backdrop-blur">
            <div className="text-sm text-muted-foreground">
              <span className="text-gold">●</span> {t("map_footer_location")}
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=27.5872&mlon=85.5236#map=14/27.5872/85.5236"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-xs font-medium text-[oklch(0.18_0.03_35)] transition-transform hover:scale-105"
            >
              <Navigation className="size-3.5" /> {t("map_open")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
