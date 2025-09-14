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
        const parsed = (result.data as any[]).map((row) => ({
          year: String(row.year),
          cases: Number(row.cases),
        }));
        setData(parsed);
      },
    });
  }, []);

  return (
    <div className="w-full md:max-w-[500px] min-w-0 mx-auto">
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
          barCategoryGap={8}
        >
          <XAxis
            dataKey="year"
            interval="preserveStartEnd"
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cases" fill="#000000" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
