/**
 *
 * BlockInfo
 *
 */

import React from 'react';
import { Card, Heading } from '@shopify/polaris';

import DataTable from '../../components/DataTable/DataTable';
import BlockchainCardItem from '../../components/BlockchainCardItem';

const BlockInfo = () => {
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Heading style={{ fontSize: '40px' }}>BlockInfo</Heading>
        <div style={{ marginTop: '40px' }}>
          <BlockchainCardItem label="Channel Name" value="shaiv" />
          <BlockchainCardItem label="Block Number" value="3213" />
          <BlockchainCardItem
            label="Craeted at"
            value="2020-08-31T1210:41.913Z"
          />
          <BlockchainCardItem label="# of Txs" value="3325" />
          <BlockchainCardItem
            label="Block Hash"
            value="csui12t4yuuidasdaoiuq880j"
          />
          <BlockchainCardItem
            label="Data Hash"
            value="cqkdyfgasiu57q562732837ygqwf"
          />
          <BlockchainCardItem
            label="Prehash"
            value="ccwfklh2u638127giohiatfg7"
          />
        </div>
      </Card>
      <div style={{ marginTop: '20px' }}>
        <Card>
          <div style={{ padding: '20px' }}>
            <Heading>All Transaction From Block #1242</Heading>
          </div>
          <div style={{ padding: '20px' }}>
            <DataTable />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlockInfo;
