import React, { useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DataTable from '../../components/DataTable/DataTable';
import fakeData from '../../components/DataTable/dummyData';
import { getTransactionByOrgRequest, getBlockAndTransactionsListRequest } from '../../store/actions';

const BlockPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { txsByOrg, blockTxsList } = useSelector(state => state.transaction);

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

  const onDateChange = (dates) => {
    console.log(dates);
  };

  useEffect(() => {
    if (!txsByOrg.length) {
      dispatch(getTransactionByOrgRequest());
    }
  }, [txsByOrg]);

  useEffect(() => {
    dispatch(getBlockAndTransactionsListRequest());
  }, [])

  const options = useMemo(() => {
    return txsByOrg?.map((item) => ({
      ...item,
      value: item.creator_msp_id,
      label: item.creator_msp_id
    }))
  }, [txsByOrg]) || [];

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Blocks" />

        <div style={{ marginTop: '25px' }}>
          <DataTable
            rowsData={rows}
            columns={columns}
            onRowClick={({ blockNumber }) =>
              history.push(`/block/${blockNumber}`)
            }
            onDateChange={(dates) => onDateChange(dates)}
            dropdownOptions={options}
            onSelectChange={(selected) => console.log(selected)}
          />
        </div>
      </Card>
    </div>
  );
};

export default BlockPage;
