import React, { useCallback } from 'react';
import { Card, Layout } from '@shopify/polaris';

import ExplorerBarChart from '../../components/Charts/BarChart/BarChart';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import BlockchainCard from '../../components/BlockchainCard/BlockchainCard';
import SingleBlockCard from '../../components/SingleBlockCard/SingleBlockCard';
import HiddenScroll from '../../components/HiddenScroll/HiddenScroll';
import RadicalChart from '../../components/Charts/RadicalChart/RadicalChart';

const BlockchainData = [
  { label: 'Total Blocks', value: '129' },
  { label: 'Total txs', value: '123422' },
  { label: 'Total Channels', value: '13' },
  { label: 'Total Chaincodes', value: '38' },
  { label: 'Total Channels', value: '13s' },
  { label: 'Total Channels', value: '1w3' },
  { label: 'Total Chaincodes', value: '338' },
  { label: 'Total Channels', value: '1313' },
];

const HomePage = ({ history }) => {
  const handleImportedAction = useCallback(
    () => console.log('Imported action'),
    [],
  );

  const handleExportedAction = useCallback(
    () => console.log('Exported action'),
    [],
  );

  const dropdownMenuList = [
    {
      content: 'Import file',
      onAction: handleImportedAction,
    },
    {
      content: 'Export file',
      onAction: handleExportedAction,
    },
  ];
  return (
    <div style={{ marginTop: '40px' }}>
      <Card sectioned>
        <Card.Header title="Blockchain Explorer">
          <Dropdown title="tx / block" dropdownMenuList={dropdownMenuList} />
        </Card.Header>
        <Card.Section>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <ExplorerBarChart
              width={1100}
              height={110}
              onBarClick={data => {
                console.log({ data });
                history.push('/block');
              }}
            />
          </div>
        </Card.Section>
      </Card>

      <div style={{ margin: '20px 0px', minHeight: '500px' }}>
        <Card>
          <Layout style={{ margin: '0px !important' }}>
            <Layout.Section oneHalf>
              <Card sectioned title="Latest Blocks">
                <div
                  style={{
                    padding: '0px 20px',
                  }}
                >
                  <HiddenScroll height="400px">
                    <SingleBlockCard onClick={() => history.push('/block')} />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                    <SingleBlockCard />
                  </HiddenScroll>
                </div>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card sectioned title="Transactions by Organization">
                <div style={{ minHeight: '400px' }}>
                  <RadicalChart />
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        </Card>
      </div>

      <div style={{ marginTop: '2px' }}>
        <BlockchainCard title="Blockchain Stats" cardItems={BlockchainData} />
      </div>
    </div>
  );
};

export default HomePage;
