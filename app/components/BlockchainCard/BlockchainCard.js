import React from 'react';
import { Card } from '@shopify/polaris';

import BlockchainCardItem from '../BlockchainCardItem';

const BlockchainCard = ({ title, cardItems }) => {
  return (
    <Card sectioned>
      <Card.Header title={title} />
      <div
        style={{
          display: 'flex',
          margin: '20px 20px 10px',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {cardItems.map(({ label, value }) => (
          <BlockchainCardItem
            key={value}
            label={label}
            value={value}
            wrapperStyle={{ width: '270px' }}
            labelStyle={{ width: '150px' }}
          />
        ))}
      </div>
    </Card>
  );
};
export default BlockchainCard;
