import React from 'react';
import { Card, Heading } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import DataTable from '../../components/DataTable/DataTable';
import BlockchainCardItem from '../../components/BlockchainCardItem';
import fakeData from '../../components/DataTable/dummyData';

const BlockInfo = () => {
  const history = useHistory();

  const rows = React.useMemo(() => fakeData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Block Number',
        accessor: 'blockNumber', // accessor is the "key" in the data
      },
      {
        Header: 'Channel Name',
        accessor: 'channelName',
      },
      {
        Header: 'Number of Tx',
        accessor: 'numberOfTx',
      },
      {
        Header: 'Dash Hash',
        accessor: 'dashHash',
      },
      {
        Header: 'Block Hash',
        accessor: 'blockHash',
      },
      {
        Header: 'Previous Hash',
        accessor: 'previousHash',
      },
      {
        Header: 'Transactions',
        accessor: 'transactions',
      },
      {
        Header: 'Size (KB)',
        accessor: 'size',
      },
    ],
    [],
  );
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
            <DataTable
              rowsData={rows || []}
              columns={columns}
              onRowClick={({ blockNumber }) =>
                history.push(`/tx/${blockNumber}`)
              }
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlockInfo;
