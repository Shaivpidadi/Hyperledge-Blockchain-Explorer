import React, { useEffect } from 'react';
import { Card } from '@shopify/polaris';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AccordianCard from '../../components/AccordianCard';
import BlockchainCardItem from '../../components/BlockchainCardItem';
import { getTransactionDetailsRequest } from '../../store/actions';

const TransactionInfo = () => {
  const { txId } = useParams();
  const dispatch = useDispatch();
  const { txDetails } = useSelector(state => state.transaction);

  useEffect(() => {
    dispatch(getTransactionDetailsRequest({ txId }))
  }, [txId]);

  const isEverythingLoaded = !Object.keys(txDetails).length && !!txId;
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <div style={{ fontStyle: 'thin', backgroundColor: '#f3f5f8' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Card.Header title={`Transaction ${!isEverythingLoaded ? `#${txDetails?.txhash.substring(0, 8)}...` : '...'}`} />
            <Card.Header title="2020-09-05" />
          </div>

          <div style={{ padding: '10px 30px', marginTop: '30px' }}>
            <div>
              <Card>
                <div style={{ padding: '20px' }}>
                  <BlockchainCardItem
                    label="Transaction ID"
                    value={txDetails?.txhash}
                    isLoading={isEverythingLoaded}
                  />
                  <BlockchainCardItem label="Validation Code" value={txDetails?.validation_code} isLoading={isEverythingLoaded} />
                  <BlockchainCardItem
                    label="Payload Hash"
                    value={txDetails?.payload_proposal_hash}
                    isLoading={isEverythingLoaded}
                  />
                  <BlockchainCardItem label="Creator MSP" value={txDetails?.creator_msp_id} isLoading={isEverythingLoaded} />
                  <BlockchainCardItem
                    label="Endoser"
                    value={!!txDetails?.endorser_msp_id ? JSON.parse(txDetails?.endorser_msp_id?.replace(/{/g, '[').replace(/}/g, ']')) : ''}
                    isLoading={isEverythingLoaded}
                    valueAsTag
                    isArray
                  />
                  <BlockchainCardItem label="Chaincode" value={txDetails?.chaincodename} isLoading={isEverythingLoaded} />
                  <BlockchainCardItem
                    label="Type"
                    value={txDetails?.type}
                    isLoading={isEverythingLoaded}
                  />
                  <BlockchainCardItem
                    label="Time"
                    value={txDetails?.createdt}
                    isLoading={isEverythingLoaded}
                  />
                </div>
              </Card>
            </div>

            <div style={{ margin: '20px auto' }}>
              <AccordianCard title="Reads" containerData={txDetails?.read_set} />
            </div>

            <div style={{ margin: '20px auto' }}>
              <AccordianCard title="Writes" containerData={txDetails?.write_set} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransactionInfo;
