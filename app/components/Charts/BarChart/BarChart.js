import React from 'react';
import { BarChart, Bar, Tooltip } from 'recharts';
import { css } from 'styled-components';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const CustomBarShape = props => {
  const { x, y, height } = props;
  return (
    <svg>
      <rect
        x={x}
        y={y}
        width={10}
        height={height}
        fill="#f3f5f8"
        rx="6"
        ry="6"
        // style={{ transition: 'all 0.2s ease 0s', cursor: 'pointer' }}
        css={css({
          transition: 'all 0.2s ease 0s',
          cursor: 'pointer',
          '&:hover ': {
            backgroundColor: 'none',
          },
        })}
      />
    </svg>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Block : ${payload[0].value}`}</p>
        <p className="label">{`Transaction : ${payload[0]?.payload.pv}`}</p>
      </div>
    );
  }
  return null;
};

const ExplorerBarChart = ({ width, height }) => {
  const handleBarClick = data => {
    console.log(data);
  };
  return (
    <div className="bar-chart-wrapper">
      <BarChart width={width} height={height} data={data}>
        <Tooltip
          content={CustomTooltip}
          wrapperStyle={{
            backgroundColor: 'white',
            opacity: '0.8',
            padding: '5px',
          }}
          cursor={false}
        />
        <Bar
          dataKey="uv"
          fill="#f3f5f8"
          onClick={handleBarClick}
          shape={
            <CustomBarShape
              x="463.26"
              y="16.205882352941174"
              width={10}
              height={height}
              fill="#FFE9B5"
            />
          }
        />
      </BarChart>
    </div>
  );
};

export default ExplorerBarChart;
