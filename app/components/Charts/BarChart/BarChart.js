import React from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import { css } from 'styled-components';

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
        {/* <p className="label">{`Block : ${payload[0].value}`}</p> */}
        <p className="label">{`Transaction : ${payload[0]?.payload.pv}`}</p>
      </div>
    );
  }
  return null;
};

const ExplorerBarChart = ({ width, height, onBarClick, data }) => {
  return (
    <ResponsiveContainer width='100%' height={height}>
      <BarChart data={data} width={width} height={height}>
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
          onClick={data => onBarClick(data)}
          minPointSize={10}
          shape={
            <CustomBarShape
              x="463.26"
              y="16.205882352941174"
              width={10}
              height={height.toString()}
              fill="#FFE9B5"
            />
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExplorerBarChart;
