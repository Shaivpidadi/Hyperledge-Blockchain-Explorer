import React from 'react';
import { Card } from '@shopify/polaris';

const BlockchainCardItem = ({ label, value }) => (
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

const BlockchainCard = () => {
  return (
    <Card sectioned>
      <Card.Header title="Blockchain Stats">
        {/* <Card.Header title="Blockchain Statswww" /> */}
      </Card.Header>
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
