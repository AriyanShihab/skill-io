import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Stats = () => {
  const chartData = useLoaderData().data;

  return (
    <div className="bg-slate-900 text-white">
      <div className="md:w-3/4 w-full px-2 mx-auto h-screen  pt-16">
        <h2 className="font-semibold text-cyan-500 px-4 py-2 rounded bg-gray-900 text-center text-2xl  border border-slate-200 border-opacity-20">
          Here is The Chart of Total Question of Each Topic
        </h2>
        <ResponsiveContainer width={"90%"} height="80%">
          <AreaChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              wrapperStyle={{ color: "#06b6d4" }}
              contentStyle={{ color: "#06b6d4", background: "#0f172a" }}
            />

            <Area
              type="monotone"
              dataKey="total"
              stroke="#06b6d4"
              fill="#06b6d4"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
