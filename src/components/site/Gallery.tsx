import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader } from "./Section";
import { useExtraContent } from "@/hooks/useExtraContent";

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const images = useExtraContent("gallery").filter((e) => e.image_url);

  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Through the <span className="text-gradient-gold italic">lens of Panauti</span></>}
          description="Drone, street, and detail photography from every season."
        />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              onClick={() => setOpen(img.image_url as string)}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 ${i % 5 === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={img.image_url as string}
                alt={img.title ?? "Panauti gallery image"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-6 backdrop-blur-xl"
          >
            <button
              className="absolute right-6 top-6 grid size-10 place-items-center rounded-full glass text-foreground"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            <motion.img
              key={open}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
