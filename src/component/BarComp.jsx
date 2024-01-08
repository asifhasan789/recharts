import React from 'react'
import { BarChart,CartesianGrid,XAxis,YAxis,Legend,Tooltip,Bar } from 'recharts';
import { data } from "./data/data";


const BarComp = () => {                    

  return (
    <>
      <h1>BAR CHART</h1>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="domestic" fill="red" />
        <Bar dataKey="international" fill="blue" />
      </BarChart>
    </>
  );
}

export default BarComp