import React from 'react';
import PropTypes from 'prop-types';

const BlockchainCardItem = ({
  label,
  value,
  labelStyle,
  valueStyle,
  wrapperStyle,
}) => {
  return (
    <div style={{ lineHeight: '30px', fontSize: '16px', ...wrapperStyle }}>
      <span
        style={{
          color: 'rgb(93, 106, 133)',
          width: '130px',
          display: 'inline-block',
          ...labelStyle,
        }}
      >
        {`${label}:`}
      </span>
      <span style={{ color: 'rgb(0, 0, 0)', ...valueStyle }}>{value}</span>
    </div>
  );
};

BlockchainCardItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default BlockchainCardItem;
