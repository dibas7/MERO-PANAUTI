import { motion } from "framer-motion";
import { Calendar, Hotel, Bus, Mail, Phone } from "lucide-react";
import { SectionHeader } from "./Section";

const cards = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    body: "October–March offers crisp Himalayan air and clear skies. Visit during Makar Mela (Jan) or Yomari Punhi (Dec) for unforgettable festivals.",
  },
  {
    icon: Hotel,
    title: "Stay in a Newari Home",
    body: "Dozens of family-run homestays sit inside restored heritage houses — sleep behind carved wooden windows from $25/night.",
  },
  {
    icon: Bus,
    title: "Getting There",
    body: "Local buses leave hourly from Kathmandu's Ratna Park (≈90 min). Private taxi takes 60 min via the BP Highway.",
  },
];

export function Visit() {
  return (
    <section id="visit" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Plan Your Visit"
          title={<>Everything you need to <span className="text-gradient-gold italic">arrive</span></>}
          description="Practical guidance from locals who've welcomed pilgrims and travelers for generations."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group rounded-3xl border border-border/60 bg-card/40 p-8 shadow-elegant transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-gradient-gold text-[oklch(0.18_0.03_35)] shadow-glow">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-10 rounded-3xl border border-border/60 bg-card/40 p-8 shadow-elegant md:grid-cols-2 md:p-12"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold">Reach Out</div>
            <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              Plan a private heritage tour
            </h3>
            <p className="mt-3 text-muted-foreground">
              Our local guides craft bespoke walks through Panauti's
              temples, kitchens, and craft workshops.
            </p>
            <div className="mt-6 space-y-3 text-sm text-foreground/85">
              <a href="mailto:hello@explorepanauti.np" className="flex items-center gap-3 hover:text-gold">
                <Mail className="size-4 text-gold" /><span>hello@explorepanauti.np</span>
              </a>
              <a href="tel:+97798" className="flex items-center gap-3 hover:text-gold">
                <Phone className="size-4 text-gold" /><span>+977 98-PANAUTI</span>
              </a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <textarea
              placeholder="Tell us when you'd like to visit…"
              rows={4}
              className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <button className="w-full rounded-xl bg-gradient-gold py-3 text-sm font-medium text-[oklch(0.18_0.03_35)] transition-transform hover:scale-[1.01]">
              Request a Journey
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
