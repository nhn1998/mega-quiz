import React from 'react';
import { useLoaderData } from 'react-router-dom';

import StatisticsTotal from '../statsticsTotal/StatisticsTotal';

const Statistics = () => {
  const values = useLoaderData()
  console.log(values)
  return (
    <div>
      {
        values.data.map(value =><StatisticsTotal key={value.id} value={value}></StatisticsTotal>)
      }
    </div>
  );
};

export default Statistics;