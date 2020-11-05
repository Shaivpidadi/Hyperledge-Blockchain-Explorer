import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonBodyText, Tag } from '@shopify/polaris';

const BlockchainCardItem = ({
  label,
  value,
  labelStyle,
  valueStyle,
  wrapperStyle,
  isLoading,
  valueAsTag,
  isArray
}) => {
  return (
    <div style={{ lineHeight: '30px', fontSize: '16px', display: 'flex', alignItems: 'center', ...wrapperStyle }}>
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
      {isLoading ?
        <div style={{ width: '30%' }}>
          <SkeletonBodyText lines={1} />
        </div>
        : (
          <span style={{ color: 'rgb(0, 0, 0)', ...valueStyle }}>
            {valueAsTag ? isArray ? value.map((val) => (
              <span style={{ marginRight: '10px' }}>
                <Tag>{val}</Tag>
              </span>
            )) :
              <Tag>{value}</Tag> : value
            }
          </span>)
      }
    </div>
  );
};

BlockchainCardItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

BlockchainCardItem.defaultProps = {
  isLoading: false,
  valueAsTag: false,
  isArray: false
}

export default BlockchainCardItem;
