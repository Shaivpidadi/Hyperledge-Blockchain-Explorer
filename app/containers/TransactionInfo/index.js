/**
 *
 * TransactionInfo
 *
 */

import React from 'react';
import { Card } from '@shopify/polaris';
import AccordianCard from '../../components/AccordianCard';

const BlockchainCardItem = ({ label, value }) => (
  <div style={{ lineHeight: '30px', fontSize: '16px' }}>
    <span
      style={{ color: 'rgb(0, 0, 0)', width: '130px', display: 'inline-block' }}
    >
      <strong>{`${label}:`}</strong>
    </span>
    <span style={{ color: 'rgb(93, 106, 133)' }}>{value}</span>
  </div>
);

const TransactionInfo = () => {
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
            <Card.Header title="Transaction # 234123293423423..." />
            <Card.Header title="2020-09-05" />
          </div>

          <div style={{ padding: '10px 30px', marginTop: '30px' }}>
            <div>
              <Card>
                <div style={{ padding: '20px' }}>
                  <BlockchainCardItem
                    label="Transaction ID"
                    value="fbe6ebb45b424"
                  />
                  <BlockchainCardItem label="Validation Code" value="VALID" />
                  <BlockchainCardItem
                    label="Payload Hash"
                    value="82a3665a8504337c2af00d"
                  />
                  <BlockchainCardItem label="Creator MSP" value="shaivMSP" />
                  <BlockchainCardItem
                    label="Endoser"
                    value="{'sdfasdf', 'asdf'}"
                  />
                  <BlockchainCardItem label="Chaincode" value="SHaIV" />
                  <BlockchainCardItem
                    label="Type"
                    value="ENDORSER_TRANSACTION"
                  />
                  <BlockchainCardItem
                    label="Time"
                    value="2020-09-02T13:36:25.469Z"
                  />
                </div>
              </Card>
            </div>

            <div style={{ margin: '20px auto' }}>
              <AccordianCard title="Reads" containerData="Coming Soon ..." />
            </div>

            <div style={{ margin: '20px auto' }}>
              <AccordianCard title="Writes" containerData="Coming Soon ..." />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransactionInfo;
