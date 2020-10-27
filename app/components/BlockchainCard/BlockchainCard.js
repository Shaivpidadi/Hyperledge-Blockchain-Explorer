import React from 'react';
import { Card, SkeletonBodyText } from '@shopify/polaris';

import BlockchainCardItem from '../BlockchainCardItem';
import networkStats from '../../../mock-data/network-stats.json';

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
        {Object.keys(networkStats).map(key => (
          <BlockchainCardItem
            key={key}
            label={key}
            value={cardItems[key]}
            wrapperStyle={{ width: '270px' }}
            labelStyle={{ width: '150px' }}
          />
        ))}
      </div>
    </Card>
  );
};
export default BlockchainCard;
