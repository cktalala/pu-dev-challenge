"use client";
import { useEffect, useState, useRef } from "react";
import Papa from "papaparse";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  RectangleProps,
  Tooltip,
} from "recharts";
import { motion, useInView } from "framer-motion";

type DataItem = { year: string; cases: number };

export default function CasesBarChart() {
  const [data, setData] = useState<DataItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3, once: false });

  useEffect(() => {
    Papa.parse("/112-cases-by-year.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        try {
          if (result.errors.length > 0) {
            return;
          }

          const parsed = (result.data as DataItem[])
            .filter((row) => row.year && row.cases)
            .map((row) => ({
              year: String(row.year).trim(),
              cases: Number(row.cases),
            }))
            .filter((item) => !isNaN(item.cases));

          setData(parsed);
        } catch (err) {
          console.error("Error processing data:", err);
        }
      },
      error: (err) => {
        console.error("CSV loading error:", err);
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full md:max-w-[500px] min-w-0 mx-auto">
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
          barCategoryGap="20%"
        >
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="cases"
            fill="#000000"
            isAnimationActive={false}
            shape={<AnimatedBar active={inView} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function AnimatedBar(props: RectangleProps & { active: boolean }) {
  const { x, y, width, height, fill, active } = props;

  if (x == null || y == null || width == null || height == null || !fill) {
    return null;
  }

  const init = { height: 0, y: (y as number) + (height as number) };
  const target = { height, y };

  return (
    <motion.rect
      x={x}
      width={Math.max(0, width as number)}
      rx={2}
      ry={2}
      fill={fill.toString()}
      initial={init}
      animate={active ? target : init}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: Math.random() * 0.3,
      }}
    />
  );
}
