import React from 'react'
import { data } from "./data/data";
import { AreaChart,XAxis,YAxis,Tooltip,Area,CartesianGrid } from 'recharts';

const AreaComp = () => {

return (
  <>
    <h1>AREA CHART</h1>
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="domestic"
        stroke="red"
        fillOpacity={1}
        fill="red"
      />
      <Area
        type="monotone"
        dataKey="international"
        stroke="blue"
        fillOpacity={1}
        fill="blue"
      />
    </AreaChart>
  </>
);
}

export default AreaComp