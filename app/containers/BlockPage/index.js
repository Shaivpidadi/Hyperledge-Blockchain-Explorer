/**
 *
 * BlockPage
 *
 */

import React from 'react';
import { Card } from '@shopify/polaris';
import DataTable from '../../components/DataTable/DataTable';

const BlockPage = () => {
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Blocks" />

        <DataTable />
      </Card>
    </div>
  );
};

export default BlockPage;
