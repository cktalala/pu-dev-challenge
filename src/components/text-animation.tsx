"use client";
import { motion } from "framer-motion";

export const Stagger = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.2, once: false }}
    className="flex flex-col gap-16"
  >
    {children}
  </motion.div>
);

export const StaggerHero = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    initial="hidden"
    whileInView="show"
    viewport={{ amount: 0.2, once: false }}
    className="flex flex-col gap-8"
  >
    {children}
  </motion.div>
);

export const Item = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}
  >
    {children}
  </motion.div>
);
