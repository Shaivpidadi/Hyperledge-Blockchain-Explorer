import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card } from '@shopify/polaris';

import messages from './messages';
import ExplorerBarChart from '../../components/Charts/BarChart/BarChart';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import BlockchainCard from '../../components/BlockchainCard/BlockchainCard';
{
  /* <FormattedMessage {...messages.header} /> */
}

const HomePage = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <Card sectioned>
        <Card.Header title="Blockchain Explorer">
          <Dropdown />
        </Card.Header>
        <Card.Section>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <ExplorerBarChart width={1100} height={110} />
          </div>
        </Card.Section>
      </Card>

      <BlockchainCard />
    </div>
  );
};

export default HomePage;
