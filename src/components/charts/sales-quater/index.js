import React from "react";

import { data } from "../../../data/sales-michael.json";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const SalesQuarter = () => {
  return (
    <div className="salesquarter">
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="Quarter" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Michael Sales (DoT)"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default SalesQuarter;
