import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Organization One', uv: 1000, pv: 2400, fill: '#8884d8' },
  { name: 'Organization Two', uv: 523, pv: 4567, fill: '#83a6ed' },
  { name: 'Organization Three', uv: 424, pv: 1398, fill: '#8dd1e1' },
  { name: 'Organization Four', uv: 1234, pv: 9800, fill: '#82ca9d' },
  { name: 'Organization Five', uv: 644, pv: 3908, fill: '#a4de6c' },
  { name: 'Organization Six', uv: 777, pv: 4800, fill: '#d0ed57' },
  { name: 'Organization Seven', uv: 332, pv: 4800, fill: '#ffc658' },
];

const style = {
  top: 325,
  lineHeight: '24px',
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Org : ${payload[0].payload.name}`}</p>
        <p className="label">{`Txs : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const RadicalChart = () => {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={250}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        className="radialBar"
        minAngle={15}
        label={{ position: 'insideStart', fill: '#fff' }}
        background
        clockWise={true}
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        height={140}
        layout="horizontal"
        verticalAlign="bottom"
        wrapperStyle={style}
      />
      <Tooltip
        content={CustomTooltip}
        wrapperStyle={{
          backgroundColor: 'white',
          opacity: '0.8',
          padding: '5px',
        }}
        cursor={false}
      />
    </RadialBarChart>
  );
};

export default RadicalChart;
