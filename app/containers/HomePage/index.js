import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, Popover, ActionList, Button } from '@shopify/polaris';

import messages from './messages';
import ExplorerBarChart from '../../components/Charts/BarChart/BarChart';
import { Dropdown } from '../../components/Dropdown/Dropdown';
{
  /* <FormattedMessage {...messages.header} /> */
}

const HomePage = () => {
  return (
    <div style={{ marginTop: '40px' }}>
      <Card title="Blockchain Explorer" sectioned>
        <Card.Header>
          <Dropdown />
        </Card.Header>
        <Card.Section>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            <ExplorerBarChart width={1100} height={110} />
          </div>
        </Card.Section>
      </Card>
    </div>
  );
};

export default HomePage;
