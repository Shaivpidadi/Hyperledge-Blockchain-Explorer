import React from 'react';
import { Card } from '@shopify/polaris';

import BlockchainCardItem from '../BlockchainCardItem';

const BlockchainCard = () => {
  return (
    <Card sectioned>
      <Card.Header title="Blockchain Stats" />
      <div
        style={{
          display: 'flex',
          padding: '20px',
          fontSize: '12px',
          justifyContent: 'space-between',
          fontWeight: 'bolder',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '45%',
          }}
        >
          <div>
            <BlockchainCardItem label="Total Blocks" value="129" />
            <BlockchainCardItem label="Total txs" value="123422" />
            <BlockchainCardItem label="Total Channels" value="13" />
            <BlockchainCardItem label="Total Chaincodes" value="38" />
          </div>
          <div>
            <BlockchainCardItem label="Total Blocks" value="129" />
            <BlockchainCardItem label="Total txs" value="123422" />
            <BlockchainCardItem label="Total Channels" value="13" />
            <BlockchainCardItem label="Total Chaincodes" value="38" />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '45%',
          }}
        >
          <div>
            <BlockchainCardItem label="Total Blocks" value="129" />
            <BlockchainCardItem label="Total txs" value="123422" />
            <BlockchainCardItem label="Total Channels" value="13" />
            <BlockchainCardItem label="Total Chaincodes" value="38" />
          </div>
          <div>
            <BlockchainCardItem label="Total Blocks" value="129" />
            <BlockchainCardItem label="Total txs" value="123422" />
            <BlockchainCardItem label="Total Channels" value="13" />
            <BlockchainCardItem label="Total Chaincodes" value="38" />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default BlockchainCard;
