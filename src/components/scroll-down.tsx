"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function getSections() {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
}

export default function ScrollDown() {
  const [atLast, setAtLast] = useState(false);
  const reduce = useReducedMotion();
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = getSections();
    if (!sections.length) return;

    const last = sections[sections.length - 1];
    ioRef.current?.disconnect();

    ioRef.current = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setAtLast(e.isIntersecting && e.intersectionRatio >= 0.5);
      },
      { threshold: [0, 0.5, 1] }
    );

    ioRef.current.observe(last);
    return () => ioRef.current?.disconnect();
  }, []);

  const getNextScrollTop = () => {
    const sections = getSections();
    if (!sections.length) return 0;

    const next = sections.find((s) => s.offsetTop > window.scrollY + 10);
    if (next) return next.offsetTop;

    return -1;
  };

  const onClick = () => {
    const sections = getSections();
    if (!sections.length) return;

    if (atLast) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const next =
        sections.find((s) => s.offsetTop > window.scrollY + 5) || sections[1];
      next?.scrollIntoView({ behavior: "smooth" });
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
