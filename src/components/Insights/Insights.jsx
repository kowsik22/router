import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Insights = () => {
  const data = [
    { day: "Mon", time: 120 },
    { day: "Tue", time: 150 },
    { day: "Wed", time: 100 },
    { day: "Thu", time: 80 },
    { day: "Fri", time: 90 },
    { day: "Sat", time: 200 },
    { day: "Sun", time: 50 },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mb-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">Weekly Insights</h2>
      <LineChart width={300} height={300} className="sm:ml-0" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="time"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Insights;
