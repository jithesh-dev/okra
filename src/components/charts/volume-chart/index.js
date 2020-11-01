import React from "react";
import { data } from "../../../data/outstanding-suggestions-michael.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const VolumeChart = () => {
  return (
    <div className="volume">
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="Quarter" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="% Calls on Target"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="% Emails on Target"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="% Visits on Target"
          stroke="#AA72C1"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default VolumeChart;
