"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  const reduce = useReducedMotion();

  const sectionsRef = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atLast, setAtLast] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimer = useRef<number | null>(null);

  const collect = () => {
    sectionsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    setAtLast(0 === sectionsRef.current.length - 1);
  };

  const computeIndex = () => {
    const secs = sectionsRef.current;
    if (!secs.length) return 0;
    let best = 0;
    let bestAbs = Infinity;
    for (let i = 0; i < secs.length; i++) {
      const top = secs[i].getBoundingClientRect().top; // ระยะถึงขอบบน
      const abs = Math.abs(top);
      if (abs < bestAbs) {
        bestAbs = abs;
        best = i;
      }
    }
    return best;
  };

  useEffect(() => {
    collect();

    const onScroll = () => {
      if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
      if (isScrollingRef.current) return;

      scrollTimer.current = window.setTimeout(() => {
        const idx = computeIndex();
        setCurrentIndex(idx);
        setAtLast(idx === sectionsRef.current.length - 1);
      }, 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    setTimeout(onScroll, 0);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
    };
  }, []);

  const onClick = () => {
    const secs = sectionsRef.current;
    if (!secs.length || isScrollingRef.current) return;

    if (currentIndex >= secs.length - 1) {
      isScrollingRef.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(() => {
        isScrollingRef.current = false;
        setCurrentIndex(0);
        setAtLast(false);
      }, 800);
      return;
    }

    const nextIdx = currentIndex + 1;
    const el = secs[nextIdx];
    if (!el) return;

    isScrollingRef.current = true;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    window.setTimeout(() => {
      isScrollingRef.current = false;
      setCurrentIndex(nextIdx);
      setAtLast(nextIdx === secs.length - 1);
    }, 800);
  };

  return (
    <button
      aria-label={atLast ? "Back to top" : "Next section"}
      onClick={onClick}
      className="fixed right-0 -translate-x-1/2 bottom-6 z-50 size-[26px] grid place-items-center
      rounded-full border border-darkgray text-darkgray shadow-lg
      hover:border-lightgray hover:text-lightgray
      transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
    >
      <motion.div
        animate={{ rotate: atLast ? 180 : 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: "tween", duration: 0.28, ease: "easeInOut" }
        }
      >
        <ChevronDown className="size-3" />
      </motion.div>
    </button>
  );
}
