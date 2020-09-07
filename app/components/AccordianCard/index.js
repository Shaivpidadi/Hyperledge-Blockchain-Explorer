/**
 *
 * AccordianCard
 *
 */

import React, { useState, useCallback } from 'react';
// import styled from 'styled-components';
import {
  Card,
  Stack,
  Button,
  Collapsible,
  TextContainer,
} from '@shopify/polaris';

const AccordianCard = ({ title }) => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => setActive(active => !active), []);

  return (
    <div>
      <Card sectioned>
        <Stack vertical>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Card.Header title={title} />
            <Card.Header>
              <Button
                onClick={handleToggle}
                ariaExpanded={active}
                ariaControls="basic-collapsible"
              >
                Toggle
              </Button>
            </Card.Header>
          </div>
          <Collapsible
            open={active}
            id="basic-collapsible"
            transition={{ duration: '150ms', timingFunction: 'ease' }}
          >
            <div style={{ padding: '20px' }}>
              <TextContainer>Coming Soon ...</TextContainer>
            </div>
          </Collapsible>
        </Stack>
      </Card>
    </div>
  );
};

export default AccordianCard;
