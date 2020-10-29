import React from 'react';
import { Card } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import DataTable from '../../components/DataTable/DataTable';
import fakeData from '../../components/DataTable/dummyData';

const BlockPage = () => {
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
        <Card.Header title="All Blocks" />

        <div style={{ marginTop: '25px' }}>
          <DataTable
            rowsData={rows || []}
            columns={columns}
            onRowClick={({ blockNumber }) =>
              history.push(`/block/${blockNumber}`)
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default BlockPage;
