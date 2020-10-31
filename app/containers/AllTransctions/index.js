import React from 'react';
import { Card } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import fakeData from '../../components/DataTable/dummyData';
import TransactionDataTable from '../../components/DataTable/TransactionDataTable';

const AllTransctions = () => {
  const history = useHistory();

  const rows = React.useMemo(() => fakeData, []);

  const onTransactionClick = ({ blockNumber }) => {
    history.push(`/tx/${blockNumber}`)
  };

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Transaction" />

        <TransactionDataTable
          rowsData={rows || []}
          columns={columns}
          onTransactionClick={onTransactionClick}
        />
      </Card>
    </div>
  );
};

export default AllTransctions;
