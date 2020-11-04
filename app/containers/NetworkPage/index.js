import React, { useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useSelector, useDispatch } from 'react-redux';

import { getTransactionByOrgRequest, getBlockAndTransactionsListRequest } from '../../store/actions';
import NetworkDataTable from '../../components/DataTable/NetworkDataTable';

import peerDetails from '../../../mock-data/peer-status.json';

const NetworkPage = () => {
  const dispatch = useDispatch();
  const { txsByOrg, blockTxsList } = useSelector(state => state.transaction);

  useEffect(() => {
    if (!txsByOrg.length) {
      dispatch(getTransactionByOrgRequest());
    }
  }, [txsByOrg]);

  useEffect(() => {
    dispatch(getBlockAndTransactionsListRequest());
  }, [])

  const blockTxsListData = useMemo(() => blockTxsList, [blockTxsList]);

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="Network" />

        <div style={{ marginTop: '25px' }}>
          <NetworkDataTable rowsData={peerDetails} />
        </div>
      </Card>
    </div>
  );

}

export default NetworkPage;
