/**
 *
 * BlockchainCardItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const BlockchainCardItem = ({ label, value }) => {
  return (
    <div>
      <span
        style={{
          color: 'rgb(93, 106, 133)',
          width: '130px',
          display: 'inline-block',
        }}
      >
        {`${label}:`}
      </span>
      <span style={{ color: 'rgb(0, 0, 0)' }}>{value}</span>
    </div>
  );
};

BlockchainCardItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default BlockchainCardItem;
