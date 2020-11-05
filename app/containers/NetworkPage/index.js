import React, { useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useSelector, useDispatch } from 'react-redux';

import { getNetworkListRequest } from '../../store/actions';
import NetworkDataTable from '../../components/DataTable/NetworkDataTable';

const NetworkPage = () => {
  const dispatch = useDispatch();
  const { networkList } = useSelector(state => state.networkStats);

  useEffect(() => {
    if (!networkList.length) {
      dispatch(getNetworkListRequest());
    }
  }, [])

  const networkPeersList = useMemo(() => networkList, [networkList]);

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="Network" />

        <div style={{ marginTop: '25px' }}>
          <NetworkDataTable rowsData={networkPeersList} isLoading={!networkPeersList.length} />
        </div>
      </Card>
    </div>
  );
}

export default NetworkPage;
