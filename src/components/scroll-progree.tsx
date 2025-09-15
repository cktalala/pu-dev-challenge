"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Top scroll progress bar */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    if (reduce) {
      progress.set(scrollYProgress.get());
      const unsub = scrollYProgress.on("change", (v) => progress.set(v));
      return () => unsub();
    }
  }, [reduce, progress, scrollYProgress]);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setVisible(v > 0.001));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-darkgray"
      style={{
        scaleX: progress,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
