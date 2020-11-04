import React, { useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useSelector, useDispatch } from 'react-redux';

import ChannelDataTable from '../../components/DataTable/ChannelDataTable';
import { getNetworkListRequest } from '../../store/actions';

const ChannelPage = () => {
  const dispatch = useDispatch();
  const { channelList } = useSelector(state => state.channel);

  useEffect(() => {
    if (!channelList.length) {
      dispatch(getNetworkListRequest());
    }
  }, [])

  const channelListData = useMemo(() => channelList, [channelList]);

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="Network" />

        <div style={{ marginTop: '25px' }}>
          <ChannelDataTable rowsData={channelListData} />
        </div>
      </Card>
    </div>
  );
}

export default ChannelPage;
