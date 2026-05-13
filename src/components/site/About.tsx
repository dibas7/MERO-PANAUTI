import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import heritage from "@/assets/heritage-house.jpg";
import mandala from "@/assets/pattern-mandala.png";

const stats = [
  { v: "1000+", l: "Years of History" },
  { v: "50+", l: "Heritage Temples" },
  { v: "12", l: "Annual Festivals" },
  { v: "3", l: "Sacred Rivers" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <img src={mandala} alt="" aria-hidden className="pointer-events-none absolute -left-40 top-20 size-[500px] opacity-[0.06] animate-spin-slow" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The Story"
          title={<>An ancient town <span className="text-gradient-gold italic">still breathing</span></>}
          description="Founded in the 13th century at the confluence of the Roshi and Punyamati rivers, Panauti is one of Nepal's oldest Newari settlements — a living museum of pagoda architecture, woodcraft and devotion."
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
                alt="Carved Newari heritage house in Panauti"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass p-5 shadow-glow md:block">
              <div className="font-display text-3xl text-gradient-gold">est. 1294</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Indreshwar consecrated
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-foreground/85"
          >
            <p className="text-lg leading-relaxed">
              Walk Panauti's brick-paved lanes and you walk through centuries.
              Carved <em>tikijhya</em> windows watch over courtyards where
              priests still chant Sanskrit hymns at dawn, and bronze bells
              answer them from temple eaves above.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The Newar people built this town as an offering — a city
              shaped like a serpent, anchored by Indreshwar Mahadev, one of
              the oldest surviving pagodas in the Himalayas. Its festivals,
              feasts and rituals have flowed unbroken for thirty generations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s) => (
                <div key={s.l} className="rounded-2xl glass p-5">
                  <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
