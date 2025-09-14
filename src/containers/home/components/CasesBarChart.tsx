"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type DataItem = { year: string; cases: number };

export default function CasesBarChart() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    Papa.parse("/112-cases-by-year.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const parsed = (result.data as DataItem[]).map((row) => ({
          year: row.year,
          cases: Number(row.cases),
        }));
        setData(parsed);
      },
    });
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      className="max-w-[500px] mx-auto"
    >
      <BarChart data={data}>
        <XAxis dataKey="year" />
        <YAxis />

        <Bar dataKey="cases" fill="#000000" radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
