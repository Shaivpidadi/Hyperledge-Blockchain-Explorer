import React, { useState, useEffect, useMemo } from 'react';
import { Card } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import TransactionDataTable from '../../components/DataTable/TransactionDataTable';
import { getTransactionByOrgRequest, getTransactionListRequest } from '../../store/actions';

const AllTransctions = () => {
  const [queryString, setQueryString] = useState({ date: '', orgs: '' });
  const { txsByOrg, txsList } = useSelector(state => state.transaction);
  const dispatch = useDispatch();
  const history = useHistory();

  const onTransactionClick = ({ txhash }) => {
    history.push(`/tx/${txhash}`)
  };

  const onDateChange = (dates) => {
    setQueryString({ ...queryString, date: dates });
    let query = dates;
    if (!!queryString.orgs) {
      query += `&&${queryString.orgs}`
    };
    dispatch(getTransactionListRequest({ number: 0, txId: 0, query }));
  };

  const onSelectChange = (selected) => {
    setQueryString({ ...queryString, orgs: selected });
    let query = selected;
    if (!!queryString.date) {
      query += `&&${queryString.date}`
    };
    dispatch(getTransactionListRequest({ number: 0, txId: 0, query }));
  }
  useEffect(() => {
    if (!txsByOrg.length) {
      dispatch(getTransactionByOrgRequest());
    }
  }, [txsByOrg]);

  useEffect(() => {
    dispatch(getTransactionListRequest({ number: 0, txId: 0 }));
  }, [])

  const options = useMemo(() => {
    return txsByOrg?.map((item) => ({
      ...item,
      value: item.creator_msp_id,
      label: item.creator_msp_id
    }))
  }, [txsByOrg]) || [];

  const onResetClick = () => {
    setQueryString({ date: '', orgs: '' });
    dispatch(getTransactionListRequest({ number: 0, txId: 0 }));
  };

  const txsListData = useMemo(() => txsList, [txsList]);

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Transaction" />

        <TransactionDataTable
          rowsData={txsListData}
          onTransactionClick={onTransactionClick}
          onDateChange={(dates) => onDateChange(dates)}
          dropdownOptions={options}
          onSelectChange={onSelectChange}
          onResetClick={onResetClick}
          isLoading={!txsListData.length}
        />
      </Card>
    </div>
  );
};

export default AllTransctions;
