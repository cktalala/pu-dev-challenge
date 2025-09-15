"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  const reduce = useReducedMotion();
  const [heroInView, setHeroInView] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector<HTMLElement>("#hero");
    statsRef.current = document.querySelector<HTMLElement>("#count");
    if (!heroRef.current) return;

    const io = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-10% 0px -10% 0px" }
    );
    io.observe(heroRef.current);

    return () => io.disconnect();
  }, []);

  const onClick = () => {
    if (heroInView) {
      statsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={onClick}
      aria-label={heroInView ? "Go to stats" : "Back to top"}
      className="fixed right-0 -translate-x-1/2 bottom-6 z-50 size-[26px] grid place-items-center
      rounded-full border border-darkgray text-darkgray shadow-lg
      hover:border-lightgray hover:text-lightgray
      transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
      style={{ bottom: "calc(env(safe-area-inset-bottom,0px) + 14px)" }}
    >
      <motion.div
        animate={{ rotate: heroInView ? 0 : 180 }}
        transition={
          reduce ? { duration: 0 } : { duration: 0.28, ease: "easeInOut" }
        }
      >
        <ChevronDown className="size-4" />
      </motion.div>
    </button>
  );
}
