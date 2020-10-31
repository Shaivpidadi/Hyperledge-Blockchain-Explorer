import React, { useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DataTable from '../../components/DataTable/DataTable';
import fakeData from '../../components/DataTable/dummyData';
import { getTransactionByOrgRequest, getBlockAndTransactionsListRequest } from '../../store/actions';
import BlockDataTable from '../../components/DataTable/BlockDataTable';

const BlockPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { txsByOrg, blockTxsList } = useSelector(state => state.transaction);

  const rows = React.useMemo(() => fakeData, []);

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

  const onBlockClick = ({ blocknum }) => {
    history.push(`/block/${blocknum}`)
  };

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Blocks" />

        <div style={{ marginTop: '25px' }}>
          <BlockDataTable
            rowsData={blockTxsList}
            onBlockClick={onBlockClick}
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
