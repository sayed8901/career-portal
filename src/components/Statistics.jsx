import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A-01", marksObtained: 60, totalMarks: 60 },
  { name: "A-02", marksObtained: 60, totalMarks: 60 },
  { name: "A-03", marksObtained: 57, totalMarks: 60 },
  { name: "A-04", marksObtained: 60, totalMarks: 60 },
  { name: "A-05", marksObtained: 60, totalMarks: 60 },
  { name: "A-06", marksObtained: 60, totalMarks: 60 },
  { name: "A-07", marksObtained: 60, totalMarks: 60 },
  { name: "A-08", marksObtained: 60, totalMarks: 60 },
];

const Statistics = () => {
  return (
    <div className="my-container">
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">Assignment Marks</h1>

      <AreaChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="4 8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="marksObtained"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default Statistics;
