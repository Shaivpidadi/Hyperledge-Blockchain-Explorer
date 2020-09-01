/**
 *
 * BlockPage
 *
 */

import React from 'react';
import { Card } from '@shopify/polaris';

const BlockPage = () => {
  return (
    <div style={{ marginTop: '40px', width: '100%' }}>
      <Card sectioned>
        <Card.Header title="All Blocks" />
      </Card>
    </div>
  );
};

export default BlockPage;
