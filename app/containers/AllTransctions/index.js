/**
 *
 * AllTransctions
 *
 */

import React from 'react';
import { Card } from '@shopify/polaris';
import DataTable from '../../components/DataTable/DataTable';

const AllTransctions = () => {
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Transaction" />

        <DataTable />
      </Card>
    </div>
  );
};

export default AllTransctions;
