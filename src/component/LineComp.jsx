import React from 'react'
import { LineChart,CartesianGrid,Tooltip,XAxis,YAxis,Legend,Line } from 'recharts';
import { data } from './data/data';

const LineComp = () => {

   return (
     <>
       <h1>LINE CHART</h1>
       <LineChart
         width={730}
         height={250}
         data={data}
         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="year" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="domestic" stroke="red" />
         <Line type="monotone" dataKey="international" stroke="blue" />
       </LineChart>
     </>
   );
}

export default LineComp