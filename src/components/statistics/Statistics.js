import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const Statistics = () => {
  const values = useLoaderData()
  const data = values.data;
  console.log(data)
  return (
    <div>
      <div>
        <h2 className='text-info mb-5'>This is the Statstics of total quiz</h2>
      </div>
      <div className=''>
      
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
    
      </div>
    </div>
  );
};

export default Statistics;