import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import hero from "@/assets/hero-panauti.jpg";
import mandala from "@/assets/pattern-mandala.png";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Aerial cinematic view of Panauti's pagoda temples at golden hour"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-radial-gold opacity-70" />
      </div>

      {/* Floating mandala decoratives */}
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 size-[420px] opacity-15 mix-blend-screen animate-spin-slow"
      />
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-10 size-[360px] opacity-10 mix-blend-screen animate-float-slow"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-foreground/85"
        >
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Newari Heritage · Kavrepalanchok, Nepal
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-display text-5xl font-light leading-[0.95] text-foreground sm:text-7xl md:text-[8rem]"
        >
          Explore <span className="text-gradient-gold italic">Panauti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-2xl font-display text-xl italic text-foreground/85 md:text-2xl"
        >
          Where History Still Lives
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-4 max-w-xl text-sm text-foreground/70 md:text-base"
        >
          A thousand-year-old Newari town of pagodas, sacred rivers, and
          living tradition — preserved at the foot of the Himalayas.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          href="#about"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium tracking-wide text-[oklch(0.18_0.03_35)] shadow-glow transition-transform hover:scale-[1.03]"
        >
          Begin the Journey
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
        </motion.a>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          Scroll
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
