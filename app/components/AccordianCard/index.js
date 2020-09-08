import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Stack,
  Button,
  Collapsible,
  TextContainer,
} from '@shopify/polaris';

const AccordianCard = ({ title, containerData }) => {
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
              <TextContainer>{containerData}</TextContainer>
            </div>
          </Collapsible>
        </Stack>
      </Card>
    </div>
  );
};

AccordianCard.propTypes = {
  title: PropTypes.string,
  containerData: PropTypes.object,
};
export default AccordianCard;
