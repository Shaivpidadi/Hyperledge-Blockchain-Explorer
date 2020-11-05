import React, { useEffect, useMemo } from 'react';
import { Card, Heading } from '@shopify/polaris';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import DataTable from '../../components/DataTable/DataTable';
import BlockchainCardItem from '../../components/BlockchainCardItem';
import fakeData from '../../components/DataTable/dummyData';
import { getBlockDetailsRequest, getTransactionByOrgRequest } from '../../store/actions';
import TransactionDataTable from '../../components/DataTable/TransactionDataTable';

const BlockInfo = () => {
  const history = useHistory();
  const { blockId } = useParams();
  const dispatch = useDispatch();
  const { blockDetails } = useSelector(state => state.block);
  const { txsByOrg } = useSelector(state => state.transaction);

  useEffect(() => {
    dispatch(getBlockDetailsRequest({ blockId }))
  }, [blockId]);

  useEffect(() => {
    if (!txsByOrg.length) {
      dispatch(getTransactionByOrgRequest());
    }
  }, [txsByOrg]);

  const blockTransactions = useMemo(() => {
    let transactions = blockDetails?.transactions || [];

    return transactions.map(({ payload }) => ({
      creator_msp_id: payload?.header?.signature_header?.creator?.Mspid,
      channelname: payload?.header?.channel_header?.channel_id,
      txhash: payload?.header?.channel_header?.tx_id,
      type: payload?.header?.channel_header?.typeString,
      chaincodename: payload?.data?.actions[0]?.payload?.chaincode_proposal_payload?.input?.chaincode_spec?.chaincode_id?.name,
      createdt: payload?.header?.channel_header?.timestamp
    }))
  })

  const options = useMemo(() => {
    return txsByOrg?.map((item) => ({
      ...item,
      value: item.creator_msp_id,
      label: item.creator_msp_id
    }))
  }, [txsByOrg]) || [];

  const onTransactionClick = ({ txhash }) => {
    history.push(`/tx/${txhash}`)
  };

  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Heading style={{ fontSize: '40px' }}>BlockInfo</Heading>
        <div style={{ marginTop: '40px' }}>
          <BlockchainCardItem label="Channel Name" value="shaiv" />
          <BlockchainCardItem label="Block Number" value={blockDetails?.number} />
          <BlockchainCardItem
            label="Created at"
            value="2020-08-31T1210:41.913Z"
          />
          <BlockchainCardItem label="# of Txs" value={blockDetails?.transactions?.length} />
          <BlockchainCardItem
            label="Block Hash"
            value="csui12t4yuuidasdaoiuq880j"
          />
          <BlockchainCardItem
            label="Data Hash"
            value={blockDetails?.data_hash}
          />
          <BlockchainCardItem
            label="Prehash"
            value={blockDetails?.previous_hash}
          />
        </div>
      </Card>
      <div style={{ marginTop: '20px' }}>
        <Card>
          <div style={{ padding: '20px' }}>
            <Heading>{`All Transaction From Block #${blockId}`}</Heading>
          </div>
          <div style={{ padding: '20px' }}>
            <TransactionDataTable
              rowsData={blockTransactions}
              onTransactionClick={onTransactionClick}
              onDateChange={(dates) => console.log({ dates })}
              dropdownOptions={options}
              onSelectChange={(selectedOrgs) => console.log({ selectedOrgs })}
              onResetClick={() => { console.log('reset clicked') }}
              isLoading={!blockTransactions.length}
              hideFilters
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlockInfo;
