"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const getSections = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));

export default function ScrollDown() {
  const [atLast, setAtLast] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reduce = useReducedMotion();

  // สังเกตทุก section
  useEffect(() => {
    const sections = getSections();
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLElement);
            setCurrentIndex(index);
            setAtLast(index === sections.length - 1);
          }
        });
      },
      {
        threshold: 0.6, // section โผล่มากกว่า 60% ถือว่า active
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const onClick = () => {
    const sections = getSections();
    if (!sections.length) return;

    if (atLast) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const nextIdx = Math.min(currentIndex + 1, sections.length - 1);
      sections[nextIdx]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
