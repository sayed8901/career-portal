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
  { name: "Assignment-1", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-2", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-3", marksObtained: 57, totalMarks: 60 },
  { name: "Assignment-4", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-5", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-6", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-7", marksObtained: 60, totalMarks: 60 },
  { name: "Assignment-8", marksObtained: 60, totalMarks: 60 },
  { name: "Averarge", marksObtained: 59.63, totalMarks: 60 },
];

const Statistics = () => {
  return (
    <div className="my-container">
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">Assignment Marks</h1>

      <AreaChart
        width={1000}
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
