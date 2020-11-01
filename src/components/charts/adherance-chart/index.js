import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "../../../data/adherence-michael.json";

const AdheranceChart = () => {
  const datas = data.map((item) => {
    return {
      name: item["Quarter"],
      All: item["Aggregate Rep Adherence (% Actions Taken)"],
      Micheal: item["Michael Adherence- % On target actions"],
      amt: 200,
    };
  });

  return (
    <BarChart
      width={600}
      height={300}
      data={datas}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 25,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        label={{ value: "% Actions Taken", angle: -90, position: "left" }}
      />
      <Tooltip />
      <Legend verticalAlign="bottom" />
      <Bar dataKey="Micheal" stackId="a" fill="#8884d8" />
      <Bar dataKey="All" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default AdheranceChart;
