import React, { useEffect, useMemo } from 'react';
import { Card, Heading } from '@shopify/polaris';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import BlockchainCardItem from '../../components/BlockchainCardItem';
import {
  getBlockDetailsRequest,
  getTransactionByOrgRequest,
} from '../../store/actions';
import TransactionDataTable from '../../components/DataTable/TransactionDataTable';

const BlockInfo = () => {
  const history = useHistory();
  const { blockId } = useParams();
  const dispatch = useDispatch();
  const { blockDetails } = useSelector(state => state.block);
  const { txsByOrg, blockTxsList } = useSelector(state => state.transaction);

  useEffect(() => {
    dispatch(getBlockDetailsRequest({ blockId }));
  }, [blockId]);

  useEffect(() => {
    if (!txsByOrg.length) {
      dispatch(getTransactionByOrgRequest());
    }
  }, [txsByOrg]);

  const selectedBlockDetails = useMemo(
    () =>
      blockTxsList.find(({ blocknum }) => blocknum === parseInt(blockId, 10)),
    [blockId],
  );

  /* eslint-disable camelcase */
  const blockTransactions = useMemo(() => {
    const transactions = blockDetails?.transactions || [];

    return transactions.map(({ payload }) => ({
      creator_msp_id: payload?.header?.signature_header?.creator?.Mspid,
      channelname: payload?.header?.channel_header?.channel_id,
      txhash: payload?.header?.channel_header?.tx_id,
      type: payload?.header?.channel_header?.typeString,
      chaincodename:
        payload?.data?.actions[0]?.payload?.chaincode_proposal_payload?.input
          ?.chaincode_spec?.chaincode_id?.name,
      createdt: payload?.header?.channel_header?.timestamp,
    }));
  });

  const onTransactionClick = ({ txhash }) => {
    history.push(`/tx/${txhash}`);
  };

  const isEverythingLoaded =
    !blockTransactions.length && !Object.keys(blockDetails).length;
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Heading style={{ fontSize: '40px' }}>BlockInfo</Heading>
        <div style={{ marginTop: '40px' }}>
          <BlockchainCardItem
            label="Channel Name"
            value={selectedBlockDetails?.channelname}
          />
          <BlockchainCardItem
            label="Block Number"
            value={selectedBlockDetails?.blocknum}
            isLoading={isEverythingLoaded}
          />
          <BlockchainCardItem
            label="# of Txs"
            value={blockDetails?.transactions?.length}
            isLoading={isEverythingLoaded}
          />
          <BlockchainCardItem
            label="Block Hash"
            value={selectedBlockDetails?.blockhash}
          />
          <BlockchainCardItem
            label="Data Hash"
            value={selectedBlockDetails?.datahash}
            isLoading={isEverythingLoaded}
          />
          <BlockchainCardItem
            label="Prehash"
            value={selectedBlockDetails?.prehash}
            isLoading={isEverythingLoaded}
          />
          <BlockchainCardItem
            label="Created at"
            value={selectedBlockDetails?.createdt}
          />
        </div>
      </Card>
      <div style={{ marginTop: '20px' }}>
        <Card>
          <div style={{ padding: '20px' }}>
            <Heading>{`All Transaction From Block #${
              !isEverythingLoaded ? blockId : ''
            }`}</Heading>
          </div>
          <div style={{ padding: '20px' }}>
            <TransactionDataTable
              rowsData={blockTransactions}
              onTransactionClick={onTransactionClick}
              isLoading={isEverythingLoaded}
              hideFilters
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlockInfo;
