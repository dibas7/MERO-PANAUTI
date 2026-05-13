import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mandala from "@/assets/pattern-mandala.png";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.img
              src={mandala}
              alt=""
              aria-hidden
              className="size-32"
              animate={{ rotate: 360, opacity: [0.4, 1, 0.4] }}
              transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, opacity: { duration: 2, repeat: Infinity } }}
            />
            <div className="font-display text-2xl text-gradient-gold tracking-wide">
              Explore Panauti
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Awakening the heritage…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
