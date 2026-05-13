import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "./Section";

const reviews = [
  {
    name: "Hannah Müller",
    from: "Berlin, Germany",
    text: "Panauti felt like stepping into a poem. The bells, the brick lanes, the way locals welcomed us into their homes for tea — I haven't stopped thinking about it.",
  },
  {
    name: "Aarav Sharma",
    from: "Mumbai, India",
    text: "I've been to many heritage towns in South Asia. Panauti is the most quietly perfect — utterly authentic, completely unhurried.",
  },
  {
    name: "Lucia Rossi",
    from: "Florence, Italy",
    text: "As an architect, the woodwork on Indreshwar Mahadev took my breath away. Ten centuries old and still alive with prayer.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Voices of Travelers"
          title={<>Stories that <span className="text-gradient-gold italic">stay</span></>}
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-3xl glass p-8 shadow-elegant"
            >
              <div className="absolute -top-4 left-8 font-display text-7xl leading-none text-gold/40">
                "
              </div>
              <div className="mb-4 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90">{r.text}</blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="font-display text-lg text-foreground">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {r.from}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
